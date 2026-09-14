import React, { useState, useEffect, useRef } from "react";
import * as DataHandler from "../../data/DataHandler";
import LineChart from "../reusable/LineChart";
import CardFooter from "../reusable/Card-Footer";
const data = {
  id: 2,
  title: "Alpha Capture",
  subtitle: "A Trade Idea Tracker",
  blurb: [""],
  bkgd: "var(--alphaCap-bkgd)"
};
function jsonFallback(winWidth) {
  return winWidth < 700
    ? DataHandler.alphaCaptureChartDataMobile
    : DataHandler.alphaCaptureChartData;
}

function AlphaCapCard(props) {
  let xTicksVar = props.winWidth < 700 ? 3 : 5;
  const [cardVisible, setCardVisible] = useState(true);
  const [chartData, setChartData] = useState(() => jsonFallback(props.winWidth));
  const usingLiveData = useRef(false);

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
  useEffect(() => {
    let cancelled = false;
    DataHandler.fetchAlphaCaptureDailyData()
      .then(liveData => {
        if (!cancelled && liveData && liveData.length) {
          usingLiveData.current = true;
          setChartData(liveData);
        }
      })
      .catch(err => {
        console.log(err);
        if (!cancelled) {
          setChartData(jsonFallback(props.winWidth));
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);
  useEffect(() => {
    xTicksVar = props.winWidth < 700 ? 3 : 5;
    if (usingLiveData.current) {
      return;
    }
    setChartData(jsonFallback(props.winWidth));
  }, [props.winWidth]);

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
            data={chartData}
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
            xTicks={xTicksVar}
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
                <span className="role-title">Prod Application: </span>UX, UI,
                Angular, Highcharts customization, SCSS
              </div>
              <div className="flex-row">
                <span className="role-title">Portfolio Spinoff: </span>Design,
                React, D3.js (no highcharts!), SCSS
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
