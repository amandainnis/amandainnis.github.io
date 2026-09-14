import React from "react";

import AlertingDivs from "../components/alerting/AlertingDivs";

const portfolioData = [
  {
    id: 1,
    title: "Insight Analytics",
    subtitle: "A Client Data Dashboard",
    blurb: [
      "Insight Analytics new containerized desktop application within the harbor framework.  It will provide analytical and reporting capabilities to Research Sales, Sales Traders and COO/Operations/Finance/Capital Markets personas.",
      "To showcase a user's client universe as relates to top buys / sells, client value, monthly CV totals with YOY comparison, CV by product, sector totals, percent change, sectors by client type. To focus or drilldown on these specific attributes--as well as readership, touchpoint and 13F data–as they relate to a client / ticker / sector "
    ],
    divs: (
      <div
        style={{ backgroundColor: "yellow", width: "50%", height: "15px" }}
      ></div>
    ),
    bkgd: "var(--analytics-bkgd)"
  },
  {
    id: 2,
    title: "Alpha Capture",
    subtitle: "A Trade Idea Tracker",
    blurb: [""],
    divs: (
      <div style={{ backgroundColor: "pink", width: "50%", height: "15px" }}>
        this is experiemntal
      </div>
    ),
    bkgd: "var(--alphaCap-bkgd)"
  },
  {
    id: 3,
    title: "CRB Pricer",
    subtitle: "Central Risk Book Pricing and Trade Execution",
    blurb: [""],
    divs: (
      <div style={{ backgroundColor: "khaki", width: "50%", height: "15px" }}>
        this is enzo
      </div>
    ),
    bkgd: "var(--crb-bkgd)"
  },
  {
    id: 4,
    title: "Alerting",
    subtitle: "Client and Ticker Alerts for Traders",
    blurb: [""],
    divs: <AlertingDivs></AlertingDivs>,
    bkgd: "var(--alerting-bkgd)"
  }
];

export default portfolioData;
