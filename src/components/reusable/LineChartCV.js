import React, { createRef, useState, useRef, useEffect } from "react";
import * as d3 from "d3";

export default function LineChartCV() {
  const lineChartData = [
    { y2018: 36, y2019: 56, month: 1 },
    { y2018: 47, y2019: 99, month: 2 },
    { y2018: 80, y2019: 105, month: 3 },
    { y2018: 90, y2019: 115, month: 4 },
    { y2018: 120, y2019: 135, month: 5 }
  ];
  const chart = createRef();
  const chartContainer = createRef();

  const maxVal = useRef();
  const defaultHeight = 220;
  var containerElement;

  const [chartData, setChartData] = useState(lineChartData);
  // this is where you want the selected bar group to start onInit--tooltip and highlight would start here
  // in most cases, we are starting with the current month
  // @Input("barIndexSetpoint") barIndexSetpoint;

  // this is the function to format time values of x axis
  // @Input("timeFormatFn") timeFormatFn;

  // constructor() {
  //   this.subs.sink = fromEvent(window, "resize").pipe(debounceTime(200)).subscribe(() => this.createChart());
  // }

  function numberFormatFn(d) {
    return d;
  }
  function timeFormat(d) {
    if (d == 1) {
      return "Jan";
    } else if (d == 2) {
      return "Feb";
    } else if (d == 3) {
      return "Mar";
    } else if (d == 4) {
      return "Apr";
    } else if (d == 5) {
      return "May";
    } else if (d == 6) {
      return "Jun";
    } else if (d == 7) {
      return "Jul";
    } else if (d == 8) {
      return "Aug";
    } else if (d == 9) {
      return "Sep";
    } else if (d == 10) {
      return "Oct";
    } else if (d == 11) {
      return "Nov";
    } else {
      return "";
    }
  }

  function getCurrentMonth() {
    const date = new Date();
    const currentMonthNumber = date.getMonth() + 1;
    //console.log('i am current month number', currentMonthNumber);
    return currentMonthNumber;
  }

  function findlastValidDataCurrentYear(
    currVal,
    nextVal,
    currentObj,
    lastValid,
    dataArraySetPoint
  ) {
    if (nextVal == null && currVal !== null) {
      lastValid = currentObj;
      // console.log('nextVal == null && currVal !== null, i am currentObj', nextVal, currVal, currentObj)
      return lastValid;
    } else if (nextVal == null && currVal == null && lastValid == undefined) {
      // console.log('nextVal == null && currVal == null && lastValid == undefined', nextVal, currVal, lastValid);
      lastValid = dataArraySetPoint;
      //console.log('i am now defined', lastValid);
      return lastValid;
    } else {
      // console.log('lastValid, nextVal, currVal, currentObj', lastValid, nextVal, currVal, currentObj)
      lastValid = lastValid;
      return lastValid;
    }
  }

  function getLineDiffValue(currYear, prevYear) {
    return currYear == null || prevYear == null ? null : currYear - prevYear;
  }
  function getYOYdiffColor(YOY) {
    if (YOY < 0) {
      return "YOYred";
    } else {
      return "YOYgreen";
    }
  }

  // Math.min will assign null values to 0 so need to filter out null if want min to be actual min,
  // but it may look better to have an actual zero
  function getMaxVal(myData, yLineOne, yLineTwo) {
    let tempArr = [];
    for (let i = 0; i < myData.length; i++) {
      tempArr.push(myData[i][yLineOne], myData[i][yLineTwo]);
      if (myData[i][yLineOne] !== null) tempArr.push(myData[i][yLineOne]);
      if (myData[i][yLineTwo] !== null) tempArr.push(myData[i][yLineTwo]);
    }
    let temp2018max = tempArr.reduce((a, b) => Math.max(a, b));
    let temp2018min = tempArr.reduce((a, b) => Math.min(a, b));
    return { min: temp2018min, max: temp2018max };
  }

  function createChart(
    chartData,
    yLineOne,
    yLineTwo,
    numberFormatFn,
    xAxisKeyName
  ) {
    let lastValidDataCurrentYear;
    //let lastValidDataPreviousYear;
    let YOYdiff;
    containerElement = chart.current;
    containerElement.innerHTML = "";
    let tempMinMax = getMaxVal(chartData, yLineOne, yLineTwo);
    let minVal = tempMinMax.min;
    let maxVal = tempMinMax.max;
    let currentMonth = getCurrentMonth();
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

    //////////////////////// Set the scales  ////////////////////////

    let x = d3.scaleLinear().range([0, width]);

    let y = d3.scaleLinear().range([height, 0]);

    //////////////////////// Set the axis ////////////////////////

    let xAxis = d3
      .axisBottom(x)
      .ticks(chartData.length)
      .tickFormat(function(d) {
        // console.log(d);
        return timeFormat(d);
      })
      .tickPadding(6);

    let yAxis = d3
      .axisRight(y)
      .tickFormat(d => {
        return numberFormatFn(d);
      })
      // .ticks(6)
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

    chartData.sort((a, b) => a[xAxisKeyName] - b[xAxisKeyName]);

    //////////////////////// Set the domains  ////////////////////////

    x.domain([
      parseInt(d3.min(chartData, d => d[xAxisKeyName])),
      parseInt(d3.max(chartData, d => d[xAxisKeyName]))
    ]);
    y.domain([minVal, maxVal]);

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
      .text("Month");
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
        lastValidDataCurrentYear = findlastValidDataCurrentYear(
          d0[yLineTwo],
          d1[yLineTwo],
          d0,
          lastValidDataCurrentYear,
          chartData[currentMonth - 1]
        );
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
          d[yLineTwo] !== null
            ? "translate(" + x(d[xAxisKeyName]) + "," + y(d[yLineTwo]) + ")"
            : "translate(" +
                x(lastValidDataCurrentYear[xAxisKeyName]) +
                "," +
                y(lastValidDataCurrentYear[yLineTwo]) +
                ")"
        );

        YOYdiff = getLineDiffValue(d[yLineTwo], d[yLineOne], YOYdiff);
        let YOYdiffColor = getYOYdiffColor(YOYdiff);
        // (d[yLineTwo] == null) ? YOYdiff = null : YOYdiff = numberFormatFn(d[yLineTwo] - d[yLineOne]);
        let l1text = d[yLineOne] !== null ? numberFormatFn(d[yLineOne]) : "";
        let l2text = d[yLineTwo] !== null ? numberFormatFn(d[yLineTwo]) : "";
        YOYdiff = YOYdiff !== null ? numberFormatFn(YOYdiff) : "";
        lineOneText.text(l1text);
        lineTwoText.text(l2text);
        dateText.text(timeFormat(d[xAxisKeyName]));
        YOYText.text(YOYdiff);
        YOYText.attr("class", YOYdiffColor);

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

    d3.set().add(chartData[chartData.length - 1]);
    let d = chartData[chartData.length - 1];
    lineTrace.attr("transform", "translate(" + x(d[xAxisKeyName]) + ",0)");

    marker.attr(
      "transform",
      "translate(" + x(d[xAxisKeyName]) + "," + y(d[yLineOne]) + ")"
    );
    marker2.attr(
      "transform",
      "translate(" + x(d[xAxisKeyName]) + "," + y(d[yLineTwo]) + ")"
    );

    YOYdiff = getLineDiffValue(d[yLineTwo], d[yLineOne], YOYdiff);
    let YOYdiffColor = getYOYdiffColor(YOYdiff);

    lineOneText.text(numberFormatFn(d[yLineOne]));
    lineTwoText.text(numberFormatFn(d[yLineTwo]));
    dateText.text(timeFormat(d[xAxisKeyName]));
    YOYText.text(numberFormatFn(YOYdiff));
    YOYText.attr("class", YOYdiffColor);

    d3.select(".mouse-line.x").attr("y2", height);
  }

  useEffect(() => {
    createChart(chartData, "y2018", "y2019", numberFormatFn, "month");
  }, []);

  return <div ref={chart}></div>;
}
