// Bundled JSON used whenever Alpha Vantage is rate-limited or unreachable.
import amznDailyBackup from "./amznDaily.json";
import spyDailyBackup from "./spyDaily.json";
import amznDailyMobileBackup from "./amznDailyMobile.json";
import spyDailyMobileBackup from "./spyDailyMobile.json";
import sectorPerformanceBackup from "./sectorPerformance.json";
import moment from "moment";

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
    let niceTime =
      jsonPrice[i][0].length > 10
        ? moment(jsonPrice[i][0]).format("h:mm A")
        : "";
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

const ALPHA_VANTAGE_KEY = "8Z47EGJAL65KUCJW";
const DAILY_STORAGE_KEY = "avDailySeries.v1";
const SECTOR_STORAGE_KEY = "avSector.v1";
const dailySeriesCache = {};
const dailySeriesInflight = {};
const bundledDailyFallback = {
  AMZN: amznDailyBackup["Time Series (Daily)"],
  SPY: spyDailyBackup["Time Series (Daily)"]
};

function dailyCompactUrl(symbol) {
  return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${ALPHA_VANTAGE_KEY}`;
}

function marketDay() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York"
  }).format(new Date());
}

function latestSeriesDate(series) {
  return Object.keys(series || {}).sort().pop() || "";
}

function loadStoredSeries() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(DAILY_STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (err) {
    return {};
  }
}

function saveStoredSeries(ticker, series, fetchedOn) {
  try {
    const all = loadStoredSeries();
    all[ticker] = { series, fetchedOn };
    window.localStorage.setItem(DAILY_STORAGE_KEY, JSON.stringify(all));
  } catch (err) {
    // private mode / quota
  }
}

function pickBestSeries(ticker, storedSeries) {
  const bundled = bundledDailyFallback[ticker];
  const candidates = [storedSeries, bundled].filter(
    candidate => candidate && Object.keys(candidate).length
  );
  if (!candidates.length) {
    return null;
  }
  return candidates.sort((a, b) =>
    latestSeriesDate(b).localeCompare(latestSeriesDate(a))
  )[0];
}

function readDailySeries(data) {
  if (data.Note || data.Information) {
    throw new Error(data.Note || data.Information);
  }
  if (data["Error Message"]) {
    throw new Error(data["Error Message"]);
  }
  const series = data["Time Series (Daily)"];
  if (!series || !Object.keys(series).length) {
    throw new Error("No daily series returned");
  }
  return series;
}

export function fetchDailySeries(symbol) {
  const ticker = (symbol || "").toUpperCase();
  if (dailySeriesCache[ticker]) {
    return Promise.resolve(dailySeriesCache[ticker]);
  }
  const stored = loadStoredSeries()[ticker];
  const today = marketDay();
  if (stored && stored.series && stored.fetchedOn === today) {
    dailySeriesCache[ticker] = stored.series;
    return Promise.resolve(stored.series);
  }
  if (dailySeriesInflight[ticker]) {
    return dailySeriesInflight[ticker];
  }
  dailySeriesInflight[ticker] = fetch(dailyCompactUrl(ticker))
    .then(res => res.json())
    .then(data => {
      const series = readDailySeries(data);
      dailySeriesCache[ticker] = series;
      saveStoredSeries(ticker, series, today);
      return series;
    })
    .catch(err => {
      const fallback = pickBestSeries(ticker, stored && stored.series);
      if (fallback) {
        dailySeriesCache[ticker] = fallback;
        return fallback;
      }
      throw err;
    })
    .finally(() => {
      delete dailySeriesInflight[ticker];
    });
  return dailySeriesInflight[ticker];
}

export function latestDailyClose(series) {
  const dates = Object.keys(series || {}).sort();
  if (!dates.length) {
    return null;
  }
  const latest = series[dates[dates.length - 1]];
  return latest["4. close"] || latest["1. open"] || null;
}

function alignDailySeries(priceSeries, indexSeries) {
  const alignedPrice = {};
  const alignedIndex = {};
  Object.keys(priceSeries).forEach(date => {
    if (indexSeries[date]) {
      alignedPrice[date] = priceSeries[date];
      alignedIndex[date] = indexSeries[date];
    }
  });
  if (!Object.keys(alignedPrice).length) {
    throw new Error("No overlapping daily dates");
  }
  return [alignedPrice, alignedIndex];
}

export function getCachedAlphaCaptureData() {
  try {
    const stored = loadStoredSeries();
    const priceSeries = pickBestSeries(
      "AMZN",
      stored.AMZN && stored.AMZN.series
    );
    const indexSeries = pickBestSeries("SPY", stored.SPY && stored.SPY.series);
    if (!priceSeries || !indexSeries) {
      return null;
    }
    const [alignedPrice, alignedIndex] = alignDailySeries(
      priceSeries,
      indexSeries
    );
    return formatAlphaCaptureData(alignedPrice, alignedIndex);
  } catch (err) {
    return null;
  }
}

export async function fetchAlphaCaptureDailyData() {
  const [priceSeries, indexSeries] = await Promise.all([
    fetchDailySeries("AMZN"),
    fetchDailySeries("SPY")
  ]);
  const [alignedPrice, alignedIndex] = alignDailySeries(
    priceSeries,
    indexSeries
  );
  return formatAlphaCaptureData(alignedPrice, alignedIndex);
}

export function fetchSectorPerformance() {
  const today = marketDay();
  try {
    const stored = JSON.parse(
      window.localStorage.getItem(SECTOR_STORAGE_KEY) || "null"
    );
    if (stored && stored.fetchedOn === today && stored.rankA) {
      return Promise.resolve(stored.rankA);
    }
  } catch (err) {
    // ignore bad cache
  }
  return fetch(
    `https://www.alphavantage.co/query?function=SECTOR&apikey=${ALPHA_VANTAGE_KEY}`
  )
    .then(res => res.json())
    .then(data => {
      if (data.Note || data.Information) {
        throw new Error(data.Note || data.Information);
      }
      const rankA = data["Rank A: Real-Time Performance"];
      if (!rankA) {
        throw new Error("No sector data returned");
      }
      try {
        window.localStorage.setItem(
          SECTOR_STORAGE_KEY,
          JSON.stringify({ fetchedOn: today, rankA })
        );
      } catch (err) {
        // private mode / quota
      }
      return rankA;
    })
    .catch(() => sectorPerformanceBackup["Rank A: Real-Time Performance"]);
}

export const alphaCaptureChartData = formatAlphaCaptureData(
  amznDailyBackup["Time Series (Daily)"],
  spyDailyBackup["Time Series (Daily)"]
);
export const alphaCaptureChartDataMobile = formatAlphaCaptureData(
  amznDailyMobileBackup["Time Series (Daily)"],
  spyDailyMobileBackup["Time Series (Daily)"]
);
export const backupAmznClose = Number(
  latestDailyClose(amznDailyBackup["Time Series (Daily)"])
);
export const sectorPerformanceBackupData =
  sectorPerformanceBackup["Rank A: Real-Time Performance"];
export const priceData = formatPriceData(
  amznDailyBackup["Time Series (Daily)"],
  spyDailyBackup["Time Series (Daily)"]
);
