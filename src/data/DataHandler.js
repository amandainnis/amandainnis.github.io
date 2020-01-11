import * as priceJson from "../data/priceData.json";
import * as indexJson from "../data/spyData.json";
import * as moment from "../../node_modules/moment/moment";

const prePieData = [
  {
    label: "Seltzer",
    value: 5,
    tooltipValue: "Seltzer is great",
    color: "pink"
  },
  {
    label: "Seltzer",
    value: 5,
    tooltipValue: "Seltzer is great",
    color: "teal"
  },
  {
    label: "Grapefruit Juice",
    value: 2,
    tooltipValue: "Grapefruit Juice is healthy",
    color: "yellow"
  },
  {
    label: "Pellegrino",
    value: 9,
    tooltipValue: "Pellegrino is best",
    color: "tan"
  },
  {
    label: "Pellegrino",
    value: 9,
    tooltipValue: "Pellegrino is best",
    color: "navy"
  }
];
function sortArray(data, key) {
  let newArr = data.sort((a, b) => {
    if (a[key] < b[key]) {
      return 1;
    } else if (a[key] > b[key]) {
      return -1;
    } else {
      return 0;
    }
  });
  return newArr;
}
export function createPieData() {
  return sortArray(prePieData, "value");
}
function sortACData(obj) {
  // console.log(priceJson["Time Series (5min)"]);
  const entriesArr = Object.entries(obj).sort((a, b) => {
    return moment(a[0]).unix() - moment(b[0]).unix();
  });
  return entriesArr;
}
function formatPriceData() {
  let jsonPrice = sortACData(priceJson["Time Series (5min)"]);
  let jsonIndex = sortACData(indexJson["Time Series (5min)"]);
  let tempArr = [];
  for (let i = 0; i < jsonPrice.length; i++) {
    let niceDate = moment(jsonPrice[i][0]).format("DD MMM YYYY");
    let niceDateAbbrev = moment(jsonPrice[i][0]).format("DD MMM");

    let niceTime = moment(jsonPrice[i][0]).format("h:mm A");
    let price = Math.round(jsonPrice[i][1]["4. close"] * 100) / 100;
    let benchmark = Math.round(jsonIndex[i][1]["4. close"] * 100) / 100;
    let index = i;

    // this makes it jumpy
    // let index = moment(jsonPrice[i][0]).unix();

    // moment(d).format("DD MMM");

    tempArr.push({
      fullDate: jsonPrice[i][0],
      niceDate: niceDate,
      niceDateAbbrev: niceDateAbbrev,
      niceTime: niceTime,
      price: price,
      benchmark: benchmark,
      index: index
    });
  }

  return tempArr;
}

let startVals;
function getStartVals() {
  let jsonPrice = sortACData(priceJson["Time Series (5min)"]);
  let jsonIndex = sortACData(indexJson["Time Series (5min)"]);
  let tempStartVals = [];
  let price = Math.round(jsonPrice[0][1]["4. close"] * 100) / 100;
  let benchmark = Math.round(jsonIndex[0][1]["4. close"] * 100) / 100;

  tempStartVals.push({
    price: price,
    benchmark: benchmark
  });
  startVals = tempStartVals;
  return startVals;
}
function formatAlphaCaptureData() {
  getStartVals();
  let jsonPrice = sortACData(priceJson["Time Series (5min)"]);
  let jsonIndex = sortACData(indexJson["Time Series (5min)"]);
  let tempArr = [];

  for (let i = 0; i < jsonPrice.length; i++) {
    let niceDate = moment(jsonPrice[i][0]).format("DD MMM YYYY");
    let niceDateAbbrev = moment(jsonPrice[i][0]).format("DD MMM");
    let niceTime = moment(jsonPrice[i][0]).format("h:mm A");
    let price = Math.round(jsonPrice[i][1]["4. close"] * 100) / 100;
    let benchmark = Math.round(jsonIndex[i][1]["4. close"] * 100) / 100;
    let index = i;

    // this makes it jumpy
    // let index = moment(jsonPrice[i][0]).unix();

    // moment(d).format("DD MMM");

    let pricePercent =
      Math.round(((price - startVals[0].price) / startVals[0].price) * 10000) /
      10000;
    let benchmarkPercent =
      Math.round(
        ((benchmark - startVals[0].benchmark) / startVals[0].benchmark) * 10000
      ) / 10000;
    tempArr.push({
      fullDate: jsonPrice[i][0],
      niceDate: niceDate,
      niceDateAbbrev: niceDateAbbrev,
      niceTime: niceTime,
      price: price,
      pricePercent: pricePercent,
      benchmark: benchmark,
      benchmarkPercent: benchmarkPercent,
      index: index
    });
  }

  // console.log(startVals);
  return tempArr;
}

export const alphaCaptureChartData = formatAlphaCaptureData();
console.log(alphaCaptureChartData);
export const startValsConst = startVals;
export const priceData = formatPriceData();
