import React, { createRef, useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import * as DataHandler from "../../data/DataHandler";
import * as moment from "moment";

export default function LineChartOG() {
  const lineChartData = [
    { y2018: 36, y2019: 56, month: 1 },
    { y2018: 47, y2019: 99, month: 2 },
    { y2018: 80, y2019: 105, month: 3 }
  ];
  const chart = createRef();
  const startValTicker = useRef();
  const startValBenchmark = useRef();
  const defaultHeight = 220;
  var containerElement;
  let YOYdiff;
  const [chartData, setChartData] = useState(DataHandler.alphaCaptureChartData);

  function numberFormatFn(d) {
    return "$" + d;
  }
  function timeFormat(d) {
    // console.log(d, moment(d).format("DD MMM"));
    // return moment(d).format("DD MMM");
    return chartData[d].niceDateAbbrev;
  }
  function getLineDiffValue(lineOne, lineTwo) {
    return lineOne == null || lineTwo == null ? null : lineOne - lineTwo;
  }
  function getYOYdiffColor(YOY) {
    if (YOY < 0) {
      return "YOYred";
    } else {
      return "YOYgreen";
    }
  }
  // function getCurrentMonth() {
  //   const date = new Date();
  //   const currentMonthNumber = date.getMonth() + 1;
  //   //console.log('i am current month number', currentMonthNumber);
  //   return currentMonthNumber;
  // }

  // Math.min will assign null values to 0 so need to filter out null if want min to be actual min,
  // but it may look better to have an actual zero
  function prepMaxVal(myData, yLineOne, yLineTwo) {
    let tempArr = [];
    for (let i = 0; i < myData.length; i++) {
      tempArr.push(myData[i][yLineOne], myData[i][yLineTwo]);
      if (myData[i][yLineOne] !== null) tempArr.push(myData[i][yLineOne]);
      if (myData[i][yLineTwo] !== null) tempArr.push(myData[i][yLineTwo]);
    }
    return tempArr;
  }
  function getMaxVal(myData, yLineOne, yLineTwo) {
    let tempArr = prepMaxVal(myData, yLineOne, yLineTwo);
    let tempArrB = prepMaxVal(myData, yLineOne, yLineTwo);

    let tempMax = tempArr.reduce((a, b) => Math.max(a, b));
    let tempMin = tempArrB.reduce((a, b) => Math.min(a, b));
    return { min: tempMin, max: tempMax };
  }
  function createChart(chartData, yLineOne, yLineTwo, xAxisKeyName) {
    containerElement = chart.current;
    containerElement.innerHTML = "";
    let tempMinMax = getMaxVal(chartData, yLineOne, yLineTwo);
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
    // translates a function to d3, passes angular scope into d3
    // tell format func that the function with "this" should be asscoiated with the currect ts component

    //let bisectDate = d3.bisector((d) => timeFormat(d[xAxisKeyName])).left; // this would return the month, but we aren't using it right now
    let justBisect = d3.bisector(d => d[xAxisKeyName]).left;
    // let justBisect = d3.bisector(d => indexOf(d)).left;

    //////////////////////// Set the scales  ////////////////////////

    let x = d3.scaleLinear().range([0, width]);

    let y = d3.scaleLinear().range([height, 0]);

    //////////////////////// Set the axis ////////////////////////

    let xAxis = d3
      .axisBottom(x)
      // .ticks(12)
      .tickFormat(function(d) {
        return timeFormat(d);
        // return moment.unix(d).format("DD MMM");
      })
      .tickPadding(6);

    let yAxis = d3
      .axisRight(y)
      .tickFormat(d => {
        return numberFormatFn(d);
      })
      .ticks(6)
      .tickPadding(6);

    //////////////////////// Define the lines and/or areas  ////////////////////////

    const lineOne = d3
      .line()
      .defined(function(d) {
        if (d[yLineOne] !== null) {
          return d[yLineOne];
        }
      })
      .x(d => x(d[xAxisKeyName]))
      .y(d => y(d[yLineOne]));

    const lineTwo = d3
      .line()
      .defined(function(d) {
        if (d[yLineTwo] !== null) {
          return d[yLineTwo];
        }
      })
      .x(d => x(d[xAxisKeyName]))
      .y(d => y(d[yLineTwo]));

    //////////////////////// Define parent SVG  ////////////////////////

    const CVsvg = d3
      .select(containerElement)
      .append("svg")
      .attr("width", "100%")
      .attr("height", height + margin.top + margin.bottom + 40)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //////////////////////// Loop through / sort data  ////////////////////////

    chartData.forEach(d => {
      d = +d;
    });

    // chartData.sort((a, b) => b[xAxisKeyName] - a[xAxisKeyName]);

    //////////////////////// Set the domains  ////////////////////////

    x.domain([
      parseInt(d3.min(chartData, d => d[xAxisKeyName])),
      parseInt(d3.max(chartData, d => d[xAxisKeyName]))
    ]);
    // y.domain([minVal, maxVal]);
    y.domain([0, maxVal]);
    //////////////////////// Append the lines / areas  ////////////////////////

    CVsvg.append("path")
      .datum(chartData)
      .attr("class", "lineOne line")
      .attr("d", lineOne)
      .transition()
      .duration(500);
    CVsvg.append("path")
      .datum(chartData)
      .attr("class", "lineTwo line")
      .attr("d", lineTwo)
      .transition()
      .duration(500);

    ///////////////////////  Add the X & Y Axis  ////////////////////////

    CVsvg.append("g")
      .attr("class", "yAxis")
      .attr("transform", "translate(" + (width + 6) + ",0)")
      .call(yAxis);

    CVsvg.append("g")
      .attr("class", "xAxis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    //////////////////////// Add Line Tracing on mouse and markers   ////////////////////////

    const lineTrace = CVsvg.append("line")
      .attr("class", "mouse-line x")
      .style("opacity", 0.5)
      .attr("y1", 0)
      .attr("y2", height);

    const marker = CVsvg.append("g").attr("class", "marker");

    marker
      .append("circle")
      .attr("class", "line-marker lineOne")
      .transition()
      .duration(500)
      .attr("r", 5);

    const marker2 = CVsvg.append("g").attr("class", "marker");
    marker2
      .append("circle")
      .attr("class", "line-marker lineTwo")
      .transition()
      .duration(500)
      .attr("r", 5);

    //////////////////////// Tooltip  ////////////////////////

    const tooltipDiv = d3
      .select(containerElement)
      .append("div")
      .attr("class", "tooltipDiv");
    const dateContainer = tooltipDiv
      .append("div")
      .attr("class", "text-container");
    dateContainer
      .append("div")
      .attr("class", "label-style mr-1")
      .text("Date");
    const dateText = dateContainer.append("div").attr("class", "value-text");
    const lineOneTextContainer = tooltipDiv
      .append("div")
      .attr("class", "text-container");
    lineOneTextContainer
      .append("div")
      .attr("class", "label-style mr-1")
      .text("2018");
    lineOneTextContainer.append("div").attr("class", "dot lineOne");

    const lineOneText = lineOneTextContainer
      .append("div")
      .attr("class", "value-text");
    const lineTwoTextContainer = tooltipDiv
      .append("div")
      .attr("class", "text-container");
    lineTwoTextContainer
      .append("div")
      .attr("class", "label-style mr-1")
      .text("2019");
    lineTwoTextContainer.append("div").attr("class", "dot lineTwo");

    const lineTwoText = lineTwoTextContainer
      .append("div")
      .attr("class", "value-text");
    const YOYContainer = tooltipDiv
      .append("div")
      .attr("class", "text-container");
    YOYContainer.append("div")
      .attr("class", "label-style mr-1")
      .text("YOY");
    const YOYText = YOYContainer.append("div");

    //////////////////////// Add Rect to Capture Mouse Movements  ////////////////////////

    CVsvg.append("rect")
      .on("mouseover", () => {
        lineTrace.style("display", null);
        d3.select(".mouse-line").style("opacity", "1");
        d3.selectAll(".mouse-per-line .line-marker").style("opacity", "1");
      })
      .on("mousemove", () => {
        let xy = d3.mouse(d3.event.currentTarget);
        // let x0 = timeFormat(x.invert(xy[0]));
        // let mouseIndex = bisectDate(chartData, x0, 1);
        let x0 = x.invert(xy[0]);
        let mouseIndex = justBisect(chartData, x0, 1);
        let d0 = chartData[mouseIndex - 1];
        let d1 = chartData[mouseIndex];
        // lastValidDataPreviousYear = findlastValidDataCurrentYear(d0[yLineOne], d1[yLineOne], d0, lastValidDataPreviousYear, chartData[currentMonth - 1]);
        // console.log('i am x0, d0[xAxisKeyName], d1,', x0, d0[xAxisKeyName], d1)

        // console.log('i am x0, d0[xAxisKeyName], d1, lastValidDataCurrentYear', x0, d0[xAxisKeyName], d1, lastValidDataCurrentYear)
        let d;
        if (d1 !== undefined) {
          d = x0 - d0[xAxisKeyName] > d1[xAxisKeyName] - x0 ? d1 : d0;
          // d = x0 - d0[xAxisKeyName] > d1[xAxisKeyName] - x0 ? d1 : d0;
        } else {
          d = d0;
        }

        lineTrace.attr("transform", "translate(" + x(d[xAxisKeyName]) + ",0)");
        marker.attr(
          "transform",
          "translate(" + x(d[xAxisKeyName]) + "," + y(d[yLineOne]) + ")"
        );
        // marker.attr('transform', d[yLineOne] !== null ? 'translate(' + x(d[xAxisKeyName]) + ',' + y(d[yLineOne]) + ')' : 'translate(' + x(lastValidDataPreviousYear[xAxisKeyName]) + ',' + y(lastValidDataPreviousYear[yLineOne]) + ')');
        marker2.attr(
          "transform",
          "translate(" + x(d[xAxisKeyName]) + "," + y(d[yLineTwo]) + ")"
        );
        // debugger;
        // marker2.attr(
        //   "transform",
        //   d[yLineTwo] !== null
        //     ? "translate(" + x(d[xAxisKeyName]) + "," + y(d[yLineTwo]) + ")"
        //     : "translate(" +
        //         x(lastValidDataCurrentYear[xAxisKeyName]) +
        //         "," +
        //         y(lastValidDataCurrentYear[yLineTwo]) +
        //         ")"
        // );

        // YOYdiff = getLineDiffValue(d[yLineTwo], d[yLineOne], YOYdiff);
        // let YOYdiffColor = getYOYdiffColor(YOYdiff);
        // (d[yLineTwo] == null) ? YOYdiff = null : YOYdiff = numberFormatFn(d[yLineTwo] - d[yLineOne]);
        let l1text = d[yLineOne] !== null ? numberFormatFn(d[yLineOne]) : "";
        let l2text = d[yLineTwo] !== null ? numberFormatFn(d[yLineTwo]) : "";
        // YOYdiff = YOYdiff !== null ? numberFormatFn(YOYdiff) : "";
        lineOneText.text(l1text);
        lineTwoText.text(l2text);
        dateText.text(d.niceDate + " " + d.niceTime);
        // YOYText.text(YOYdiff);
        // YOYText.attr("class", YOYdiffColor);

        d3.select(".mouse-line.x").attr("y2", height);
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

    //////////////////////// Set the data on load ////////////////////////

    // d3.set().add(chartData[currentMonth - 1]);
    // let d = chartData[currentMonth - 1];
    // lineTrace.attr("transform", "translate(" + x(d[xAxisKeyName]) + ",0)");

    // marker.attr(
    //   "transform",
    //   "translate(" + x(d[xAxisKeyName]) + "," + y(d[yLineOne]) + ")"
    // );
    // marker2.attr(
    //   "transform",
    //   "translate(" + x(d[xAxisKeyName]) + "," + y(d[yLineTwo]) + ")"
    // );

    // YOYdiff = getLineDiffValue(d[yLineTwo], d[yLineOne], YOYdiff);
    // let YOYdiffColor = getYOYdiffColor(YOYdiff);

    // lineOneText.text(numberFormatFn(d[yLineOne]));
    // lineTwoText.text(numberFormatFn(d[yLineTwo]));
    // dateText.text(timeFormat(d[xAxisKeyName]));
    // YOYText.text(numberFormatFn(YOYdiff));
    // YOYText.attr("class", YOYdiffColor);

    // d3.select(".mouse-line.x").attr("y2", height);
  }

  useEffect(() => {
    createChart(chartData, "price", "benchmark", "index");
  }, []);

  return <div ref={chart}></div>;
}
