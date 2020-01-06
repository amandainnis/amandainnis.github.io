import React, { useState, useRef, useEffect, createRef } from "react";
import IsLoading from "../reusable/IsLoading";
import * as Common from "../reusable/common";
import StockData from "../../data/stock_data";
import ClientData from "../../data/clientData";
import CardFooter from "../reusable/Card-Footer";

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
function CRBCard() {
  const [cardVisible, setCardVisible] = useState(true);

  const tickerInputRef = createRef();
  const clientInputRef = createRef();
  const quantityInputRef = createRef();

  const ddRef = createRef();
  const [price, setPrice] = useState(0);
  const [tickerCompany, setTickerCompany] = useState("Amazon.com");
  const [ticker, setTicker] = useState();

  const [tickerInput, setTickerInput] = useState("AMZN");
  const [selectedTicker, setSelectedTicker] = useState(null);

  const [clientInput, setClientInput] = useState("BURGS");
  const [clientTitle, setClientTitle] = useState(
    "Burgess Hill Investment Advisors Inc"
  );
  const [quantityInput, setQuantityInput] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [tickerError, setTickerError] = useState("");

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
        if (!res.ok || "net::ERR_INTERNET_DISCONNECTED") {
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
        // setIsLoading(false);
        res.json()
      );
    // .then(res => enzo = res);
  }
  async function asyncFetch(ticker) {
    try {
      let preRes = getTickerURL(ticker);
      let res = await fetch(preRes);
      let myData = await res.json();
      console.log(myData);
      setIsLoading(true);
      let myKeys = Object.keys(myData["Time Series (5min)"]);
      // console.log(myKeys);

      setPrice(myData["Time Series (5min)"][myKeys[0]]["1. open"]);
    } catch (err) {
      console.log(err);
      if (err == "TypeError: Failed to fetch") {
        setTickerError("Unable to fetch");
      } else {
        setTickerError("Not a Ticker");
      }
      setTicker("");
      setPrice(null);
    }
    setIsLoading(false);
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
  //     setTicker("");
  //     setTickerError("Not a Ticker");
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
        setTickerError("Not a Ticker");
        setTicker("");
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
  function getPrice(val) {
    // const myTicker = tickerInput;
    // // console.log(tickerInput)
    // // setState({ ticker: myTicker });
    // console.log(myTicker);
    // resolveFetchedTicker(myTicker);
    asyncFetch(val);
  }
  function eraseTicker() {
    console.log(tickerInputRef);
    tickerInputRef.current.focus();
    setTickerInput("");
    setTickerCompany("");
    setPrice("");
    setTickerDDVisible(false);
    setTickerError("");
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
    getPrice(val.symbol);
  }
  function handleQtyInput(e) {
    setQuantityInput(e.target.value);
  }

  function eraseQtyInput() {
    setQuantityInput("");
    quantityInputRef.current.focus();
  }

  function validate(e, input) {
    // if key press doesn't match the specified chars, stops user and show error
    console.log(e.which);
    console.log(e.key);
    const eKey = e.key;
    // const alpha = eKey > 64 && eKey < 91;

    // const num = eKey >= 48 && eKey <= 57;
    const shift = eKey === 16;
    const comma = eKey === 188;
    const backspace = eKey === 8;
    const alphaNum = /^[0-9a-zA-Z]+$/;
    const alpha = /[a-zA-Z]+$/;
    const num = /[0-9]+$/;
    const space = eKey === 32;
    const numsSpaceComma = /[0-9, ]+$/;

    if (numsSpaceComma.test(e.target.value)) {
      console.log("accepted");
      setQuantityError("");
    } else {
      setQuantityError("only numbers");
    }

    // if (input === "ticker") {
    // }
    // if((parseInt(keyCode)>=48 && parseInt(keyCode)<=57) || keyCode==37/*LFT ARROW*/ || keyCode==39/*RGT ARROW*/ || keyCode==8/*BCKSPC*/ || keyCode==46/*DEL*/ || keyCode==9/*TAB*/  || keyCode==45/*minus sign*/ || keyCode==43/*plus sign*/){return true;}
    // if (/[^a-zA-Z0-9\-\/]/.test(e.target.value)) {
    //   alert("Input is not alphanumeric");
    //   return false;
    // }

    // return true;
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
  function quantityBlur(e) {
    let priceThis = parseInt(quantityInput.replace(/,/g, ""), 10);
    priceThis = priceThis.toLocaleString("en");
    setQuantityInput(priceThis);
  }
  function viewRole() {
    if (cardVisible) {
      setCardVisible(false);
    } else {
      setCardVisible(true);
    }
  }
  useEffect(() => {
    // resolveFetchedTicker("AMZN");
    asyncFetch("AMZN");
  }, []);

  let myPrice = Math.round(price * 100) / 100;
  myPrice = myPrice.toLocaleString("en");
  myPrice = myPrice !== "" ? "$" + myPrice : "";

  return (
    <article className="portfolio-card" style={{ backgroundColor: data.bkgd }}>
      <IsLoading isLoading={isLoading}></IsLoading>
      {cardVisible && (
        <div className="inner-wrapper">
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
              {tickerDDVisible && (
                <div
                  className="invisible-background"
                  onClick={() => {
                    setTickerDDVisible(false);
                    console.log("background click");
                  }}
                ></div>
              )}
              <div className="input-group">
                <div className="relative">
                  <div className="clearable">
                    <input
                      ref={tickerInputRef}
                      required
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
                                  key={val.symbol}
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
                <div className="error-message red-text">{tickerError}</div>
              </div>
              <div className="input-group">
                <div className="relative">
                  <div className="clearable">
                    <input
                      id="qtyForTicker"
                      type="text"
                      ref={quantityInputRef}
                      className="input-style crb-input"
                      placeholder="quantity"
                      value={quantityInput}
                      onChange={e => handleQtyInput(e)}
                      onKeyUp={e => validate(e, "quantity")}
                      onBlur={e => {
                        quantityBlur(e);
                      }}
                    />
                    {quantityInput !== "" && (
                      <span
                        className="clearable-clear aicon-close"
                        onClick={() => eraseQtyInput()}
                      ></span>
                    )}
                  </div>
                </div>
                <div className="error-message red-text">{quantityError}</div>
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
            <div className="text-width">
              This application involved many iterations and forked into two
              region-specific platforms. In EMEA alone, it has transacted many
              billion dollars and continues to be used.
            </div>
          </div>
          <div className="text-section">
            <h1 className="title second-title-mt">My Role</h1>
          </div>

          <div className="role">
            <div className="text-width">
              <div className="flex-row">
                <span className="title">Prod Application: </span>UX, UI, SCSS,
                JQuery (prototype only)
              </div>
              <div className="flex-row">
                <span className="title">Portfolio Spinoff: </span>Design, React,
                SCSS
              </div>
            </div>
          </div>
        </div>
      )}

      <CardFooter
        roleBool={cardVisible}
        viewRole={viewRole}
        borderColor={"var(--crb-btn-border)"}
      />
    </article>
  );
}

export default CRBCard;
