import React, { useEffect, createRef, useState } from "react";
import * as Common from "../reusable/common";
import CardFooter from "../reusable/Card-Footer";
const imgInsightAnalytics = require("../../assets/images/drilldown_client-thumb.png");
const imgCodeweek = require("../../assets/images/codeweek-sml.jpeg");

const data = {
  id: 1,
  img: imgInsightAnalytics,
  title: "Analytics",
  subtitle: "A Client Data Dashboard",
  blurb: [
    "Insight Analytics new containerized desktop application within the harbor framework.  It will provide analytical and reporting capabilities to Research Sales, Sales Traders and COO/Operations/Finance/Capital Markets personas.",
    "To showcase a user's client universe as relates to top buys / sells, client value, monthly CV totals with YOY comparison, CV by product, sector totals, percent change, sectors by client type. To focus or drilldown on these specific attributes--as well as readership, touchpoint and 13F data–as they relate to a client / ticker / sector "
  ],
  bkgd: "var(--analytics-bkgd)"
};
const backupPlan = [
  {
    "Rank A: Real-Time Performance": {
      "Consumer Discretionary": "1.57",
      "Communication Services": "1.43",
      Energy: "1.31",
      Materials: "1.30",
      Industrials: "1.16",
      "Information Technology": "1.06",
      Financials: "0.77",
      "Real Estate": "0.22",
      "Health Care": "-0.33",
      "Consumer Staples": "-0.48",
      Utilities: "-0.88"
    }
  }
];
const sectorUrl =
  "https://www.alphavantage.co/query?function=SECTOR&apikey=NKT90SOYWKFBP04F";

function InsightAnalyticsCard(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [cardVisible, setCardVisible] = useState(true);

  const [sectorData, setSectorData] = useState([]);

  async function asyncFetch() {
    try {
      const res = await fetch(sectorUrl);
      const myData = await res.json();
      let reformattedData = addWidth(myData["Rank A: Real-Time Performance"]);
      // console.log(reformattedData);
      setIsLoading(false);
      setSectorData(reformattedData);
    } catch (err) {
      console.log(err);
      let reformattedData = addWidthRandom(
        backupPlan[0]["Rank A: Real-Time Performance"]
      );
      setIsLoading(false);
      setSectorData(reformattedData);
    }
  }

  function mapSectorBackgrounds(value) {
    if (value === "Communication Services") {
      return "var(--comm-services)";
    } else if (value === "Consumer Discretionary") {
      return "var(--con-discretionary)";
    } else if (value === "Consumer Staples") {
      return "var(--con-staples)";
    } else if (value === "Energy") {
      return "var(--energy)";
    } else if (value === "Financials") {
      return "var(--financials)";
    } else if (value === "Health Care") {
      return "var(--healthcare)";
    } else if (value === "Industrials") {
      return "var(--industrials)";
    } else if (value === "Information Technology") {
      return "var(--info-tech)";
    } else if (value === "Materials") {
      return "var(--materials)";
    } else if (value === "Real Estate") {
      return "var(--real-estate)";
    } else if (value === "Utilities") {
      return "var(--utilities)";
    }
  }

  function addWidth(res) {
    let newObject = mapObject(res);
    newObject = Common.bubbleSort(newObject);
    // console.log(newObject[0]);
    let maxA = newObject[0].val;
    let maxB = newObject[newObject.length - 1].val;
    let max = Math.abs(maxA) > Math.abs(maxB) ? maxA : maxB;

    let finalObject = newObject.map(item => {
      let width = Math.abs(Math.round((item.val / max) * 1000) / 10);
      let color = mapSectorBackgrounds(item.name);
      return {
        name: item.name,
        val: item.val,
        isNegative: item.isNegative,
        width: width,
        color: color
      };
    });
    // console.log(finalObject);
    return finalObject;
  }
  function addWidthRandom(res) {
    let newObject = mapObject(res);

    // console.log(newObject[0]);
    let maxA = newObject[0].val;
    let maxB = newObject[newObject.length - 1].val;
    let max = Math.abs(maxA) > Math.abs(maxB) ? maxA : maxB;
    // fix the max and fix the weird decimal
    let finalObject = newObject.map(item => {
      let itemVal = Math.round(Math.random() * item.val * 100) / 100;
      let width = Math.abs(Math.round((itemVal / max) * 1000) / 10);
      let color = mapSectorBackgrounds(item.name);
      return {
        name: item.name,
        val: itemVal,
        isNegative: item.isNegative,
        width: width,
        color: color
      };
    });
    finalObject = Common.bubbleSort(finalObject);
    // console.log(finalObject);
    return finalObject;
  }
  function mapObject(res) {
    let tempArr = [];
    Object.entries(res).map((res, i) => {
      // console.log(res);
      let temp = res[1].replace(/\%/, "");
      temp = parseFloat(temp);
      let isNegative = temp < 0 ? true : false;
      return tempArr.push({
        name: res[0],
        val: temp,
        isNegative: isNegative
      });
    });
    return tempArr;
  }
  function viewRole() {
    if (cardVisible) {
      setCardVisible(false);
    } else {
      setCardVisible(true);
    }
  }
  useEffect(() => {
    asyncFetch();
  }, []);

  return (
    <article className="portfolio-card" style={{ backgroundColor: data.bkgd }}>
      {cardVisible && (
        <div className="inner-wrapper">
          <div className="text-section">
            <h1 className="title">{data.title}</h1>
            <h4 className="subtitle">{data.subtitle}</h4>
          </div>
          <div className="flex-row">
            <div className="bar-graph-wrapper">
              <div className="bar-graph">
                {/* {myData[0].val} */}
                {sectorData !== null &&
                  sectorData.map((res, i) => {
                    if (res.val >= 0) {
                      return (
                        <div
                          key={i}
                          className="flex-row-center narrow-row-height panel-row"
                        >
                          <div className="colA"></div>
                          <div className="colB">
                            <div
                              className="proportion-bar d-flex relative"
                              style={{
                                width: res.width + "%",
                                backgroundColor: res.color
                              }}
                            ></div>
                            <div className="percent-class right-absolute">
                              {res.val}%
                            </div>
                            <div className="flex1"></div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={i}
                          className="flex-row-center narrow-row-height panel-row"
                        >
                          <div className="colA">
                            <div
                              className="proportion-bar d-flex relative"
                              style={{
                                width: res.width + "%",
                                backgroundColor: res.color
                              }}
                            ></div>
                            <div className="percent-class left-absolute">
                              {res.val}%
                            </div>
                            <div className="flex1"></div>
                          </div>
                          <div className="colB"></div>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>

            <div className="legend">
              {sectorData.current !== null &&
                sectorData.map((res, i) => {
                  return (
                    <div
                      key={`legend-${i}`}
                      className="flex-row-center narrow-row-height"
                    >
                      <div
                        className="square"
                        style={{
                          backgroundColor: res.color
                        }}
                      ></div>
                      <div className="legend-title cursor-pointer">
                        {res.name}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
      {!cardVisible && (
        <div className="inner-wrapper">
          <div className="text-section">
            <h1 className="title">About</h1>
          </div>
          <div className="role">
            <div className="flex-row">
              <img className="codeweek" src={imgCodeweek} />
              <div className="text-width">
                It began as an award-winning 2019 hackathon project, of which I
                was the project manager, sole designer and one of the
                developers. It was later picked up by another group in the bank
                and grew into a production application.
              </div>
            </div>
          </div>
          <div className="text-section">
            <h1 className="title second-title-mt">My Role</h1>
          </div>

          <div className="role">
            <div className="text-width">
              <div className="flex-row">
                <span className="role-title">Prod Application: </span>UX, UI,
                Angular, D3.js, SCSS
              </div>
              <div className="flex-row">
                <span className="role-title">Portfolio Spinoff: </span>Design,
                React, D3.js, SCSS
              </div>
            </div>
          </div>
        </div>
      )}
      <CardFooter
        roleBool={cardVisible}
        viewRole={viewRole}
        borderColor={"var(--energy)"}
      />
    </article>
  );
}

export default InsightAnalyticsCard;
