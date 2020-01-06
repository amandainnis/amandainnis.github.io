import React, { useState, useRef, useEffect } from "react";
import IsLoading from "../reusable/IsLoading";
import * as Common from "../reusable/common";
import StockData from "../../data/stock_data";
import ClientData from "../../data/clientData";

const imgCRB = require("../../assets/images/crb-img.png");
const data = {
  id: 3,
  img: imgCRB,
  title: "Pricer",
  subtitle: "Stock Pricing and Trade Execution",
  blurb: [""],
  bkgd: "var(--crb-bkgd)"
};

const allTickers = StockData.slice();
function CRBApp() {
  const tickerInputRef = React.createRef();
  const clientInputRef = React.createRef();

  const ddRef = React.createRef();
  const [price, setPrice] = useState(0);
  const [tickerCompany, setTickerCompany] = useState("Amazon.com");
  const [ticker, setTicker] = useState();

  const [tickerInput, setTickerInput] = useState("AMZN");
  const [selectedTicker, setSelectedTicker] = useState(null);

  const [clientInput, setClientInput] = useState("BURGS");
  const [clientTitle, setClientTitle] = useState(
    "Burgess Hill Investment Advisors Inc"
  );

  const [isLoading, setIsLoading] = useState(true);
  const [tickerDDVisible, setTickerDDVisible] = useState(false);
  const [tickerDDReservoir, setTickerDDReservoir] = useState(StockData);
  const [tickerDDFiltered, setTickerDDFiltered] = useState(null);

  const getTickerURL = ticker =>
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&outputsize=full&apikey=NKT90SOYWKFBP04F`;

  function fetchTicker(ticker) {
    return fetch(getTickerURL(ticker))
      .then(res => {
        // console.log(res);
        if (!res.ok) {
          throw Error(
            "sadface, the res doesnt want to be our friend, but dont feel bad.  btw im middleware"
          );
        }
        // console.log(res);
        return res;
      })
      .then(res =>
        // this is the promise so don't have a return statement, it will be if and when  its ready
        // better with es6
        // console.log(res.json())
        res.json()
      );
    // .then(res => enzo = res);
  }
  // async function asyncFetch(ticker) {
  //   const res = await fetch(getTickerURL(ticker));
  //   const myData = await res.json();
  //   setIsLoading(true);
  //   let myKeys;
  //   if (res !== undefined && res["Time Series (5min)"] !== undefined) {
  //     console.log(myData["Time Series (5min)"]);
  //     console.log(res);
  //     myKeys = Object.keys(res["Time Series (5min)"]);
  //     setIsLoading(false);
  //     setPrice(res["Time Series (5min)"][myKeys[0]]["1. open"]);
  //   } else {
  //     setIsLoading(false);
  //     setTicker("Not a Ticker");
  //     setPrice(null);
  //   }
  // }
  const resolveFetchedTicker = ticker => {
    setIsLoading(true);
    fetchTicker(ticker).then(res => {
      let myKeys;

      if (res !== undefined && res["Time Series (5min)"] !== undefined) {
        console.log(res);
        myKeys = Object.keys(res["Time Series (5min)"]);
        setIsLoading(false);
        setPrice(res["Time Series (5min)"][myKeys[0]]["1. open"]);
      } else {
        setIsLoading(false);
        setTicker("Not a Ticker");
        setPrice(null);
      }
    });
  };

  function handleTickerInput(e) {
    const tickerDDList = allTickers.slice();
    let myResults;
    let moreResults;
    if (e !== null || e !== "") {
      myResults = tickerDDList.filter(myKey => {
        return myKey.symbol.startsWith(e.target.value.toUpperCase());
      });
      if (myResults < 1) {
        myResults = [{ symbol: e.target.value, name: "Not found" }];
      }
      // console.log(myResults[0]);
      setTickerInput(e.target.value);
      setTickerDDFiltered(myResults);
    }
  }
  function getPrice() {
    const myTicker = tickerInput;
    // setState({ ticker: myTicker });
    console.log(myTicker);
    resolveFetchedTicker(myTicker);
    // asyncFetch(myTicker);
  }
  function eraseTicker() {
    console.log(tickerInputRef);
    tickerInputRef.current.focus();
    setTickerInput("");
    setTickerCompany("");
    setPrice("");
  }
  function eraseClient() {
    console.log(clientInputRef);
    clientInputRef.current.focus();
    setClientInput("");
    setClientTitle("");
  }
  function handleKeyUp(e, val) {
    // console.log(e.which);
    if (val === "ticker") {
      setTickerDDVisible(true);
    } else if (val === "client") {
      console.log("client");
      // setClientDDVisible(true);
    }

    // if (e.which === 40) {
    //   ddRef.current.children[ddListIndex].focus();
    // }
  }
  function handleDDClick(val, name) {
    console.log(val);
    setTickerInput(val.symbol);
    setTickerCompany(val.name);
    setTickerDDVisible(false);
    getPrice();
  }
  // function handleArrowEvents(e) {
  //   console.log(e, e.which);

  //   if (e.which === 40) {
  //     // console.log(state, ddRef);
  //     // ddRef.current.children[0].focus();
  //     // ddRef.current.children[ddListIndex].focus();
  //   }
  //   //       console.log(ddRef);
  //   //   setState(prevState => {
  //   //     return { ddListIndex: prevState + 1 };
  //   //   });
  // }
  useEffect(() => {
    resolveFetchedTicker("AMZN");
    // asyncFetch("AMZN");
  }, []);

  let myPrice = Math.round(price * 100) / 100;
  myPrice = myPrice !== "" ? "$" + myPrice : "";

  // this is a promise

  return (
    <article className="portfolio-card" style={{ backgroundColor: data.bkgd }}>
      <IsLoading isLoading={isLoading}></IsLoading>
      <div className="text-section">
        <h1 className="title">{data.title}</h1>
        <h4 className="subtitle">{data.subtitle}</h4>
      </div>
      <div>
        <div className="flex-row mt-3 crb-title-row align-content-end">
          <div className="ticker-title">{tickerCompany}</div>

          <div className="label-style ml-auto">Mkt</div>
          <div className="price-title">{myPrice}</div>
        </div>

        <div className="flex-row crb-top-inputs">
          <div className="input-group">
            <div className="relative">
              <div className="clearable">
                <input
                  ref={tickerInputRef}
                  className="input-style crb-input"
                  type="text"
                  placeholder="ticker"
                  name="tickerInput"
                  autoComplete="off"
                  value={tickerInput}
                  onChange={e => {
                    handleTickerInput(e);
                  }}
                  onKeyUp={e => {
                    handleKeyUp(e, "ticker");
                  }}
                />

                {tickerInput !== "" ? (
                  <span
                    className="clearable-clear aicon-close"
                    onClick={() => {
                      eraseTicker();
                    }}
                  ></span>
                ) : null}
                {tickerDDVisible && (
                  <div className="dropdown-container crb" ref={ddRef}>
                    {tickerDDFiltered !== "" &&
                      tickerDDFiltered.map((val, i) => {
                        return (
                          <>
                            <button
                              key={i}
                              onClick={e => {
                                handleDDClick(val, "tickerInput");
                              }}
                              value={selectedTicker}
                            >
                              {val.symbol} - {val.name}
                            </button>
                          </>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="input-group">
            <div className="relative">
              <div className="clearable">
                <input
                  type="text"
                  id="qtyForTicker"
                  className="input-style crb-input"
                  placeholder="quantity"
                />
                <span className="clearable-clear aicon-close"></span>
              </div>
            </div>
          </div>
          <div className="button-row flex-row justify-content-end">
            <button
              // onClick={() => {
              //   getPrice();
              // }}
              className="var(--crb-button-type) large green mr-2 crb-button"
            >
              Buy
            </button>
            <button
              // onClick={() => {
              //   getPrice();
              // }}
              className="var(--crb-button-type) large red crb-button"
            >
              Sell
            </button>
          </div>
          {/* <div className="input-group">
            <div className="relative">
              <div className="clearable">
                <input
                  type="text"
                  id="clientForTicker"
                  ref={clientInputRef}
                  className="input-style crb-input"
                  placeholder="client"
                  value={clientInput}
                />
                {clientInput !== "" && (
                  <span
                    onClick={() => console.log("hi")}
                    className="clearable-clear aicon-close"
                  ></span>
                )}
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="flex-row client-row">
          <div className="label-style">Client</div>
          <div className="client-title">{clientTitle}</div>
        </div> */}
      </div>
    </article>
  );
}

export default CRBCard;
