import * as priceJson from "../data/priceData.json";
import * as priceJsonMobile from "../data/priceDataMobile.json";
import * as indexJsonMobile from "../data/indexDataMobile.json";

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
function formatPriceData(ticker, index) {
  let jsonPrice = sortACData(ticker);
  let jsonIndex = sortACData(index);
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
let priceDataVar = priceJson["Time Series (5min)"];
let indexDataVar = indexJson["Time Series (5min)"];
// function getStartVals(priceDataVarTemp, indexDataVarTemp) {
//   let jsonPrice = sortACData(priceDataVarTemp);
//   let jsonIndex = sortACData(indexDataVarTemp);
//   let tempStartVals = [];
//   let price = Math.round(jsonPrice[0][1]["4. close"] * 100) / 100;
//   let benchmark = Math.round(jsonIndex[0][1]["4. close"] * 100) / 100;
//   // TODO :  store these values inside local storage
//   tempStartVals.push({
//     price: price,
//     benchmark: benchmark
//   });
//   startVals = tempStartVals;
//   return startVals;
// }
function getStartVals(priceDataVarTemp, indexDataVarTemp) {
  let jsonPrice = sortACData(priceDataVarTemp);
  let jsonIndex = sortACData(indexDataVarTemp);
  let tempStartVals = [];
  let price = Math.round(jsonPrice[0][1]["4. close"] * 100) / 100;
  let benchmark = Math.round(jsonIndex[0][1]["4. close"] * 100) / 100;
  // TODO :  store these values inside local storage

  return [price, benchmark];
}

function formatAlphaCaptureData(priceDataVarTemp, indexDataVarTemp) {
  // TODO: use that const {thing, thing} = blah to assign locally and do that thing where you check if its in localstorage first
  // getStartVals(priceDataVar, indexDataVar);
  const [startValPrice, startValBenchmark] = getStartVals(
    priceDataVarTemp,
    indexDataVarTemp
  );
  let jsonPrice = sortACData(priceDataVarTemp);
  let jsonIndex = sortACData(indexDataVarTemp);
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
      Math.round(((price - startValPrice) / startValPrice) * 10000) / 10000;
    let benchmarkPercent =
      Math.round(
        ((benchmark - startValBenchmark) / startValBenchmark) * 10000
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

export const alphaCaptureChartData = formatAlphaCaptureData(
  priceJson["Time Series (5min)"],
  indexJson["Time Series (5min)"]
);
export const alphaCaptureChartDataMobile = formatAlphaCaptureData(
  priceJsonMobile["Time Series (60min)"],
  indexJsonMobile["Time Series (60min)"]
);
console.log(alphaCaptureChartData);
// export const startValsConst = startVals;
export const priceData = formatPriceData(
  priceJson["Time Series (5min)"],
  indexJson["Time Series (5min)"]
);
