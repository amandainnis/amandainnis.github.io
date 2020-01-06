import React, { createRef, useState, useEffect } from "react";
import * as d3 from "../../../node_modules/d3/dist/d3.node";
import * as DataHandler from "../../data/DataHandler";

export default function Pie() {
  const chart = createRef();
  const chartContainer = createRef();
  const w = 300;
  const h = 300;
  const r = 100;
  var containerElement;
  var chartContainerElement;
  const [chartData, setChartData] = useState(DataHandler.createPieData());

  function renderChart(values, labels, toolTipValues) {
    containerElement = chart.current;
    containerElement.innerHTML = "";
    const tooltip = d3
      .select(containerElement)
      .append("div")
      .attr("class", "d3-tooltip");
    const borderParent = tooltip.append("div").attr("class", "border-class");
    const d3InnerTooltip = tooltip
      .append("div")
      .attr("class", "d3-tooltip-inner");
    d3InnerTooltip.append("div").attr("class", "d3-title");
    d3InnerTooltip.append("div").attr("class", "amount");
    const vis = d3
      .select(containerElement)
      .append("svg:svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      // the 300 and 300 represents height and width, viewbox is necessary for responsive sizing
      .attr("viewBox", "0 0 200 200")
      .data([chartData])
      .attr("class", "mamaSVG")
      .append("g")
      .attr("class", "bigSVG")
      // move the center of the pie chart from 0, 0 to radius, radius
      .attr("transform", "translate(" + r + "," + r + ")");

    const arc = d3
      .arc()
      .outerRadius(r)
      .innerRadius(40);

    // this will create arc data for us given a list of values
    const pie = d3
      .pie()
      // we must tell it out to access the value of each element in our data array
      .value(d => {
        //console.log(d[values]);
        return parseFloat(d[values]);
      });
    // this selects all <g> elements with class slice (there aren't any yet)

    const arcs = vis
      .selectAll("g")
      .attr("class", "slice")
      // associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
      // creating a <g> for every object in the data array
      .data(pie)
      .enter();

    arcs
      .append("svg:path")
      .attr("class", "arcs")
      // set the color for each slice to be chosen from the color function defined above
      .attr("fill", (d, i) => {
        // console.log(d.data[colors]);
        return d.data.color;
      })
      // this creates the actual SVG path using the associated data (pie) with the arc drawing function
      .attr("d", arc)
      // .attr('id', function (d) {
      //   return (d.data[labels]).replace(/\s/g, '');
      // })
      .text(function(d) {
        return d;
      })

      .on("mouseenter", function(d, i) {
        const title = d.data[labels];
        const total = d.data[toolTipValues];
        // let border = d.data[borderClass];
        borderParent.style("background-color", d.data.color);

        d3InnerTooltip.select(".d3-title").text(d.data[labels]);
        d3InnerTooltip.select(".amount").text(d.data[toolTipValues]);
        tooltip.style("display", "flex");
        tooltip.style("opacity", 1);
      })
      .on("mousemove", function(d) {
        tooltip
          .style("top", d3.event.clientY + 30 + "px")
          .style("left", d3.event.clientX - 25 + "px");
      });

    const outervis = d3
      .select(chartContainer.current)
      .on("mouseleave", function() {
        tooltip.style("opacity", 0);
      });
  }

  useEffect(() => {
    renderChart("value", "label", "toolTipValue");
  }, []);

  return (
    <div className="pie-chart pie-svg-container" ref={chartContainer}>
      <div ref={chart}></div>
    </div>
  );
}
