import React, { useState, useRef, useEffect, createRef } from "react";
import * as DataHandler from "../../data/DataHandler";
import LineChart from "../reusable/LineChart";
import CardFooter from "../reusable/Card-Footer";
const imgAlphaCap = require("../../assets/images/alphaCapture.png");
const data = {
  id: 2,
  img: imgAlphaCap,
  title: "Alpha Capture",
  subtitle: "A Trade Idea Tracker",
  blurb: [""],
  bkgd: "var(--alphaCap-bkgd)"
};
function AlphaCapCard(props) {
  const [cardVisible, setCardVisible] = useState(true);

  console.log(props);
  function percentFormatFn(d) {
    return Math.round(d * 10000) / 100 + "%";
  }
  function viewRole() {
    if (cardVisible) {
      setCardVisible(false);
    } else {
      setCardVisible(true);
    }
  }
  return (
    <article
      className="portfolio-card alpha-capture"
      style={{ backgroundColor: data.bkgd }}
    >
      {cardVisible && (
        <div className="inner-wrapper">
          <div className="text-section">
            <h1 className="title">{data.title}</h1>
            <h4 className="subtitle">{data.subtitle}</h4>
          </div>
          <LineChart
            data={DataHandler.alphaCaptureChartData}
            valueArray={[
              {
                dataKey: "pricePercent",
                color: "#7f5ada",
                marker: "#a07fef",
                tooltipLabel: "AMZN %"
              },
              {
                dataKey: "benchmarkPercent",
                color: "#0da584", //"#93bb96"
                marker: "#10d4a9", //"#aadeae"
                tooltipLabel: "SPY %"
              }
            ]}
            myID={"alphaCap"}
            numberFormatFn={percentFormatFn}
            resize={props.resize}
          />
        </div>
      )}
      {!cardVisible && (
        <div className="inner-wrapper">
          <div className="text-section">
            <h1 className="title">About</h1>
          </div>
          <div className="role">
            <div className="text-width">
              This project was intended to replace TIM (Trade Ideas Manager). It
              grew into an app that included a leaderboard and attestations.
            </div>
          </div>
          <div className="text-section">
            <h1 className="title second-title-mt">My Role</h1>
          </div>

          <div className="role">
            <div className="text-width">
              <div className="flex-row">
                <span className="title">Prod Application: </span>UX, UI,
                Angular, Highcharts customization, SCSS
              </div>
              <div className="flex-row">
                <span className="title">Portfolio Spinoff: </span>Design, React,
                D3.js (no highcharts!), SCSS
              </div>
            </div>
          </div>
        </div>
      )}
      <CardFooter
        roleBool={cardVisible}
        viewRole={viewRole}
        borderColor={"#a07fef"}
      />
    </article>
  );
}

export default AlphaCapCard;
