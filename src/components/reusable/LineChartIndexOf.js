import React, { createRef, useState, useRef, useEffect } from "react";
import * as d3 from "d3";

import * as moment from "moment";

// each charted value has a display name for tooltip
// tooltip may or may not have a charted value
// each line takes a
export default function LineChartIndexOf(props) {
  const chart = createRef();

  const defaultHeight = 220;
  var containerElement;
  let YOYdiff;
  const [chartData, setChartData] = useState(props.data);
  const [valueArray, setValueArray] = useState(props.valueArray);

  // function getLineDiffValue(line0, lineTwo) {
  //   return line0 == null || lineTwo == null ? null : line0 - lineTwo;
  // }
  function getYOYdiffColor(YOY) {
    if (YOY < 0) {
      return "YOYred";
    } else {
      return "YOYgreen";
    }
  }
  function prepMaxVal(myData, myArrayOfKeys) {
    let tempArr = [];
    let tempStartVal = [];
    for (let i = 0; i < myData.length; i++) {
      // push whatever arr[j] is in the array as a key into
      for (let j = 0; j < myArrayOfKeys.length; j++) {
        if (myData[i][myArrayOfKeys[j]] !== null) {
          tempArr.push(myData[i][myArrayOfKeys[j]["dataKey"]]);
        }
      }
    }
    return tempArr;
  }

  function getMaxVal(myData, myArrayOfKeys) {
    // console.log(startVals, startValsRef);
    let tempArr = prepMaxVal(myData, myArrayOfKeys);
    let tempArrB = prepMaxVal(myData, myArrayOfKeys);

    let tempMax = tempArr.reduce((a, b) => Math.max(a, b));
    let tempMin = tempArrB.reduce((a, b) => Math.min(a, b));
    return { min: tempMin, max: tempMax };
  }

  function createChart(chartData, myArrayOfKeys, myID, numberFormatFn) {
    containerElement = chart.current;
    containerElement.innerHTML = "";
    let tempMinMax = getMaxVal(chartData, myArrayOfKeys);
    let minVal = tempMinMax.min;
    let maxVal = tempMinMax.max;
    // let currentMonth = getCurrentMonth();
    let margin = { top: 20, right: 60, bottom: 0, left: 10 };
    //////////////////////// Establish the reused vals and the bound functions  ////////////////////////
    let width = Number.isNaN(
      parseInt(d3.select(containerElement).style("width"))
    )
      ? 0
      : parseInt(d3.select(containerElement).style("width")) -
        margin.left -
        margin.right;
    let height = 220 - margin.top;
    let justBisect = d3.bisector(d => chartData.indexOf(d)).left;

    //////////////////////// Set the scales  ////////////////////////

    let x = d3.scaleLinear().range([0, width]);
    let y = d3.scaleLinear().range([height, 0]);

    // //////////////////////// Set the axis ////////////////////////

    let xAxis = d3
      .axisBottom(x)
      // .ticks(12)
      .tickFormat(function(d) {
        return chartData[d].niceDateAbbrev;
      })
      .tickPadding(6);

    let yAxis = d3
      .axisRight(y)
      .tickFormat(d => {
        return numberFormatFn(d);
      })
      .ticks(6)
      .tickPadding(6);

    // //////////////////////// Define the lines and/or areas  ////////////////////////

    // put consts of the lines into the global scope
    // defined means it can show gaps, isNan means it can have zero as a value
    function createLineConsts() {
      let myArr = [];
      myArrayOfKeys.map((val, index) => {
        console.log(val["dataKey"]);
        myArr.push(
          d3
            .line()
            .defined(d => {
              return !Number.isNaN(d[val["dataKey"]]);
            })
            .x((d, i) => {
              return x(i);
            })
            .y(d => y(d[val["dataKey"]]))
        );
      });
      return myArr;
    }

    const lineConst = createLineConsts();
    console.log(lineConst);
    // // //////////////////////// Define parent SVG  ////////////////////////

    const CVsvg = d3
      .select(containerElement)
      .append("svg")
      .attr("id", myID)
      .attr("width", "100%")
      .attr("height", height + margin.top + margin.bottom + 40)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // // // //////////////////////// Loop through / sort data  ////////////////////////

    chartData.forEach(d => {
      d = +d;
    });

    // // // //////////////////////// Set the domains  ////////////////////////

    x.domain([
      parseInt(d3.min(chartData, (d, i) => i)),
      parseInt(d3.max(chartData, (d, i) => i))
    ]);
    y.domain([minVal, maxVal]);
    // y.domain([0, maxVal]);

    // // // //////////////////////// Append the lines / areas  ////////////////////////

    myArrayOfKeys.forEach((item, index) => {
      console.log(item["color"]);
      CVsvg.append("path")
        .datum(chartData)
        .attr("class", "line")
        .attr("stroke", item["color"])
        .attr("d", lineConst[index])
        .transition()
        .duration(500);
    });

    // // // ///////////////////////  Add the X & Y Axis  ////////////////////////

    CVsvg.append("g")
      .attr("class", "yAxis")
      .attr("transform", "translate(" + (width + 6) + ",0)")
      .call(yAxis);

    CVsvg.append("g")
      .attr("class", "xAxis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    // // // //////////////////////// Add Line Tracing on mouse and markers   ////////////////////////

    const lineTrace = CVsvg.append("line")
      .attr("class", "mouse-line x")
      .style("opacity", 0.5)
      .attr("y1", 0)
      .attr("y2", height);

    function createMarkers() {
      myArrayOfKeys.forEach((item, index) => {
        CVsvg.append("g")
          .attr("class", `marker${index}`)
          .append("circle")
          .attr("class", `line-marker`)
          .attr("stroke", item["color"])
          .transition()
          .duration(500)
          .attr("r", 5);
      });
    }

    createMarkers();
    // // // //////////////////////// Tooltip  ////////////////////////

    const tooltipDiv = d3
      .select(containerElement)
      .append("div")
      .attr("class", "tooltipDiv")
      .attr("id", `${myID}Tooltip`);
    const dateContainer = tooltipDiv
      .append("div")
      .attr("class", "text-container");
    dateContainer
      .append("div")
      .attr("class", "label-style mr-1")
      .text("Date");
    const dateText = dateContainer.append("div").attr("class", "value-text");

    function createLineDivTextConsts() {
      let myArr = [];
      myArrayOfKeys.map((val, index) => {
        myArr.push(tooltipDiv.append("div").attr("class", "text-container"));
      });
      return myArr;
    }
    const lineTextContainer = createLineDivTextConsts();

    myArrayOfKeys.forEach((item, index) => {
      lineTextContainer[index]
        .append("div")
        .attr("class", "label-style mr-1")
        .text(item["tooltipLabel"]);

      lineTextContainer[index]
        .append("div")
        .attr("class", "dash")
        .style("background-color", item["color"]);
    });

    function createLineTextConsts() {
      let myArr = [];
      myArrayOfKeys.map((item, index) => {
        myArr.push(
          lineTextContainer[index]
            .append("div")
            .attr("class", `value-text`)
            .attr("id", `lineTextConst${myID}${index}`)
        );
      });
      return myArr;
    }
    const lineTextConsts = createLineTextConsts();
    // const YOYContainer = tooltipDiv
    //   .append("div")
    //   .attr("class", "text-container");
    // YOYContainer.append("div")
    //   .attr("class", "label-style mr-1")
    //   .text("YOY");
    // const YOYText = YOYContainer.append("div");

    // // //////////////////////// Add Rect to Capture Mouse Movements  ////////////////////////

    CVsvg.append("rect")
      .on("mouseover", () => {
        lineTrace.style("display", null);
        d3.select(`#${myID} .mouse-line`).style("opacity", "1");
        // d3.selectAll(".mouse-per-line .line-marker").style("opacity", "1");
      })
      .on("mousemove", () => {
        let xy = d3.mouse(d3.event.currentTarget);

        let x0 = x.invert(xy[0]);
        let mouseIndex = justBisect(chartData, x0, 1);
        let d0 = chartData[mouseIndex - 1];
        let d1 = chartData[mouseIndex];
        let d;
        if (d1 !== undefined) {
          d = x0 - chartData.indexOf(d0) > chartData.indexOf(d1) - x0 ? d1 : d0;
        } else {
          d = d0;
        }

        lineTrace.attr(
          "transform",
          "translate(" + x(chartData.indexOf(d)) + ",0)"
        );
        myArrayOfKeys.forEach((item, index) => {
          d3.select(`#${myID} .marker${index}`).attr(
            "transform",
            "translate(" +
              x(chartData.indexOf(d)) +
              "," +
              y(d[item["dataKey"]]) +
              ")"
          );
        });
        myArrayOfKeys.forEach((item, index) => {
          let myText =
            d[myArrayOfKeys[index]] !== null
              ? numberFormatFn(d[item["dataKey"]])
              : "";

          d3.select(`#${myID}Tooltip #lineTextConst${myID}${index}`).text(
            myText
          );
        });

        dateText.text(d.niceDate + " " + d.niceTime);

        d3.select(`#${myID} .mouse-line`).attr("y2", height);
      })
      .on("mouseleave", () => {
        d3.select(`#${myID} .mouse-line`).style("opacity", ".5");
      })
      .attr("class", "totalRect")
      .attr("fill", "none")
      .attr("x", 0)
      .attr("pointer-events", "all")
      .attr("width", width)
      .attr("transform", "translate(0,0)")
      .attr("height", height)
      .transition()
      .duration(500);

    // ////////////////////////// Set the data on load ////////////////////////

    d3.set().add(chartData[chartData.length - 1]);
    let d = chartData[chartData.length - 1];
    lineTrace.attr("transform", "translate(" + x(chartData.indexOf(d)) + ",0)");
    myArrayOfKeys.forEach((item, index) => {
      d3.select(`#${myID} .marker${index}`).attr(
        "transform",
        "translate(" +
          x(chartData.indexOf(d)) +
          "," +
          y(d[item["dataKey"]]) +
          ")"
      );
    });
    myArrayOfKeys.forEach((item, index) => {
      let myText =
        d[myArrayOfKeys[index]] !== null
          ? numberFormatFn(d[item["dataKey"]])
          : "";

      d3.select(`#${myID}Tooltip #lineTextConst${myID}${index}`).text(myText);
    });
    dateText.text(d.niceDate + " " + d.niceTime);
    // // YOYText.text(YOYdiff);
    // // YOYText.attr("class", YOYdiffColor);

    d3.select(`#${myID} .mouse-line`).attr("y2", height);
  }

  useEffect(() => {
    createChart(chartData, valueArray, props.myID, props.numberFormatFn);
  }, []);

  return <div ref={chart}></div>;
}
