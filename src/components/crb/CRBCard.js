import React, { useState, useRef, useEffect, createRef } from "react";
import IsLoading from "../reusable/IsLoading";
import * as Common from "../reusable/common";
import StockData from "../../data/stock_data";
import ClientData from "../../data/clientData";
import CardFooter from "../reusable/Card-Footer";
import Slider from "./Slider";

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
  const quantityInputOutlineRef = createRef();

  const sliderRef1 = createRef();
  const sliderRef2 = createRef();
  const sliderRef3 = createRef();

  const ddRef = createRef();
  const [price, setPrice] = useState(null);
  const [tickerCompany, setTickerCompany] = useState("Amazon.com");
  const [ticker, setTicker] = useState();

  const [tickerInput, setTickerInput] = useState("AMZN");
  const [selectedTicker, setSelectedTicker] = useState(null);

  const [clientInput, setClientInput] = useState("BURGS");
  const [clientTitle, setClientTitle] = useState(
    "Burgess Hill Investment Advisors Inc"
  );

  const [quantityInput, setQuantityInput] = useState("23,567");
  const [quantityError, setQuantityError] = useState("");
  const [tickerError, setTickerError] = useState("");
  const [buySell, setBuySell] = useState("buy");
  const [getQuantityRegular, setQuantityRegular] = useState("");
  const [getQuantityHalf, setQuantityHalf] = useState("");
  const [getQuantityDouble, setQuantityDouble] = useState("");
  const [priceRegular, setPriceRegular] = useState("");
  const [priceHalf, setPriceHalf] = useState("");
  const [priceDouble, setPriceDouble] = useState("");
  const [priceRegularLow, setPriceRegularLow] = useState("");
  const [priceHalfLow, setPriceHalfLow] = useState("");
  const [priceDoubleLow, setPriceDoubleLow] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tickerDDVisible, setTickerDDVisible] = useState(false);
  // const [tickerDDReservoir, setTickerDDReservoir] = useState(StockData);
  const [tickerDDFiltered, setTickerDDFiltered] = useState(null);

  const getTickerURL = ticker =>
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&outputsize=full&apikey=NKT90SOYWKFBP04F`;

  async function asyncFetch(ticker) {
    try {
      let preRes = getTickerURL(ticker);
      let res = await fetch(preRes);
      let myData = await res.json();
      // console.log(myData);
      setIsLoading(true);
      let myKeys = Object.keys(myData["Time Series (5min)"]);
      // console.log(myKeys);
      let myPrice = myData["Time Series (5min)"][myKeys[0]]["1. open"];
      setPrices(myPrice);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      if (err == "TypeError: Failed to fetch") {
        setTickerError("Unable to fetch");
        setTicker("");
      } else {
        setTicker("");
      }
      setTicker("");
      setPrice(null);
      setIsLoading(false);
    }
  }

  function setPrices(myPrice) {
    setPrice(myPrice.toLocaleString("en", { minimumFractionDigits: 2 }));
    setPriceRegular(Math.round(myPrice * 100) / 100);
    setPriceRegularLow(Math.floor(myPrice * 0.99999 * 100) / 100);

    let myPriceHalf = Math.ceil(myPrice * 0.9 * 100) / 100;
    let myPriceHalfLow = Math.floor(myPrice * 0.83 * 100) / 100;
    setPriceHalf(myPriceHalf);
    setPriceHalfLow(myPriceHalfLow);

    let myPriceDouble = Math.ceil(myPrice * 1.1 * 100) / 100;
    let myPriceDoubleLow = Math.floor(myPrice * 1.07 * 100) / 100;
    setPriceDouble(myPriceDouble);
    setPriceDoubleLow(myPriceDoubleLow);
  }
  function buySpread() {
    // set steps and mins / maxs
    // // assign them to the slider as props
    // const step = 1;
    // minX1 = .23 * 100;
    // 		 constantMinX1 = .23 * 100;
    // 		 maxX1 = .36 * 100;
    // 		 midX1 = Math.round((maxX1 + minX1)/2);
    // 		 minBip1 = 35 * 100;
    // 		 maxBip1 = 105 * 100;
    // 		 midBip1 = Math.round((maxBip1 + minBip1)/2);
    // 		 $('#sliderRange1').attr({
    // 						"max" : maxX1,
    // 						"min" : minX1,
    // 						"value": midX1,
    // 						"step" : step
    // 				 });
    // 		 minX2 = .33 * 100;
    // 		 constantMinX2 = .33 * 100;
    // 		 maxX2 = .46 * 100;
    // 		 midX2 = Math.round((maxX2 + minX2)/2);
    // 		 minBip2 = 85 * 100;
    // 		 maxBip2 = 125 * 100;
    // 		 midBip2 = Math.round((maxBip2 + minBip2)/2);
    // 		 $('#sliderRange2').attr({
    // 						"max" : maxX2,
    // 						"min" : minX2,
    // 						"value": midX2,
    // 						"step" : step
    // 				 });
    // 		 minX3 = .43 * 100;
    // 		 constantMinX3 = .43 * 100;
    // 		 maxX3 = .56 * 100;
    // 		 midX3 = Math.round((maxX3 + minX3)/2);
    // 		 minBip3 = 95 * 100;
    // 		 maxBip3 = 135 * 100;
    // 		 midBip3 = Math.round((maxBip3 + minBip3)/2);
    // 		 $('#sliderRange3').attr({
    // 						"max" : maxX3,
    // 						"min" : minX3,
    // 						"value": midX3,
    // 						"step" : step
    // 				 });
    // 		 getValues1();
    // 		 getValues2();
    // 		 getValues3();
    // 		getPNL1();
    // 		getPNL2();
    // 		getPNL3();
    // 		getBips1();
    // 		getBips2();
    // 		getBips3();
    // 		$('#spread1min').text((constantMinX1/100).toFixed(2));
    // 		 $('#spread1max').text((maxX1/100).toFixed(2));
    // 		 $('#spread2min').text((constantMinX2/100).toFixed(2));
    // 		 $('#spread2max').text((maxX2/100).toFixed(2));
    // 		 $('#spread3min').text((constantMinX3/100).toFixed(2));
    // 		 $('#spread3max').text((maxX3/100).toFixed(2));
    // 		 $('.spreadPriceTitle').text("Spread");
    // 		 $('.priceCostToggleLabel').removeClass("selected");
    // 		 $('.priceCostToggleLabel.price').addClass("selected");
  }
  function handleTickerInput(e) {
    const tickerDDList = allTickers.slice();
    let myResults;
    let moreResults;
    if (e !== null || e !== "") {
      myResults = tickerDDList.filter(myKey => {
        return myKey.symbol.startsWith(e.target.value.toUpperCase());
      });
      if (myResults < 1) {
        myResults = [{ symbol: e.target.value, name: "" }];
      }
      // console.log(myResults[0]);
      setTickerInput(e.target.value);
      setTickerDDFiltered(myResults);
    }
  }
  function getPrice(val) {
    asyncFetch(val);
  }
  function eraseTicker() {
    // console.log(tickerInputRef);
    tickerInputRef.current.focus();
    setTickerInput("");
    setTickerCompany("");
    setPrice(null);
    setTickerDDVisible(false);
    setTickerError("");
    setBuySell("");
    setQuantityInput("");
  }
  function eraseQtyInput() {
    setQuantityInput("");
    quantityInputOutlineRef.current.focus();
    setBuySell("");
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
  }
  function handleDDClick(val, name) {
    console.log(val);
    setTickerInput(val.symbol);
    setTickerCompany(val.name);
    setTickerDDVisible(false);
    getPrice(val.symbol);
    quantityInputOutlineRef.current.focus();
  }
  function handleQtyInput(e) {
    setQuantityInput(e.target.value);
  }

  function validate(e, input) {
    const alphaNum = /^[0-9a-zA-Z]+$/;
    const alpha = /^[a-zA-Z]+$/;
    const numsSpaceComma = /^[0-9,]+$/;

    if (numsSpaceComma.test(e.target.value)) {
      console.log("accepted");
      setQuantityError("");
    } else {
      setQuantityError("only numbers");
    }

    // if (input === "ticker") {
    // }
  }

  function quantityBlur() {
    const numsSpaceComma = /^[0-9,]+$/;

    if (quantityInput !== "" && numsSpaceComma.test(quantityInput)) {
      let getQuantity = quantityInput.replace(/\s/g, "");
      getQuantity = parseInt(getQuantity.replace(/,/g, ""), 10);
      let getQuantityRegular = getQuantity * 1;
      setQuantityRegular(getQuantityRegular.toLocaleString("en"));
      let getQuantityHalf = Math.round(getQuantity / 2);
      setQuantityHalf(getQuantityHalf.toLocaleString("en"));
      let getQuantityDouble = getQuantity * 2;
      setQuantityDouble(getQuantityDouble.toLocaleString("en"));
      setQuantityInput(getQuantity.toLocaleString("en"));
    } else {
      setQuantityInput("");
      setQuantityError("");
    }
  }
  function viewRole() {
    if (cardVisible) {
      setCardVisible(false);
    } else {
      setCardVisible(true);
    }
  }
  function buySellClick(val) {
    if (val === "buy") {
      setBuySell("buy");
    } else {
      setBuySell("sell");
    }
  }

  useEffect(() => {
    // resolveFetchedTicker("AMZN");
    asyncFetch("AMZN");
    quantityBlur();
  }, []);

  // let tempPrice = Math.round(price * 100) / 100;
  let tempPrice = priceRegular;

  tempPrice = tempPrice.toLocaleString("en", {
    minimumFractionDigits: 2
  });
  const numPriceRegular = tempPrice.toLocaleString("en", {
    minimumFractionDigits: 2
  });
  const numPriceRegularLow = priceRegularLow.toLocaleString("en", {
    minimumFractionDigits: 2
  });
  const numPriceHalfLow = priceHalfLow.toLocaleString("en", {
    minimumFractionDigits: 2
  });
  const numPriceHalf = priceHalf.toLocaleString("en", {
    minimumFractionDigits: 2
  });
  const numPriceDoubleLow = priceDoubleLow.toLocaleString("en", {
    minimumFractionDigits: 2
  });
  const numPriceDouble = priceDouble.toLocaleString("en", {
    minimumFractionDigits: 2
  });
  const myPriceDisplay = tempPrice !== "" ? "$" + tempPrice : "";

  const buySelection = buySell === "buy" ? "selected" : "";
  const sellSelection = buySell === "sell" ? "selected" : "";
  const disabledButtons =
    tickerInput !== "" &&
    quantityInput !== "" &&
    quantityError === "" &&
    price !== null
      ? ""
      : "disabled";
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

              <div className="crb label-style ml-auto">Mkt</div>
              <div className="price-title">{myPriceDisplay}</div>
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
                                  <span className="ticker"> {val.symbol}</span>-{" "}
                                  {val.name}
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
                      ref={quantityInputOutlineRef}
                      className="input-style crb-input"
                      placeholder="quantity"
                      value={quantityInput}
                      onChange={e => handleQtyInput(e)}
                      onKeyUp={e => validate(e, "quantity")}
                      onBlur={() => {
                        quantityBlur();
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
                  onClick={() => {
                    buySellClick("buy");
                  }}
                  disabled={disabledButtons}
                  className={`var(--crb-button-type) large green mr-2 crb-button ${buySelection}`}
                >
                  Buy
                </button>
                <button
                  onClick={() => {
                    buySellClick("sell");
                  }}
                  disabled={disabledButtons}
                  className={`var(--crb-button-type) large red crb-button ${sellSelection}`}
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
          <div className="ladder-height">
            {quantityInput !== "" && tickerInput !== "" && buySell !== "" && (
              <>
                <div className="column-header">
                  <div className="quantity-section">Quantity</div>
                  <div className="spread">Price</div>
                </div>
                <div className={`ladder ${buySell}`}>
                  <div className="flex-row price-slider">
                    <div className="qty-section">{getQuantityHalf}</div>
                    <div className="spread">
                      {buySell == "buy" && (
                        <span className="price-ladder">{numPriceHalfLow}</span>
                      )}
                      {buySell == "sell" && (
                        <span className="price-ladder">{numPriceHalf}</span>
                      )}

                      {/* <Slider ref={sliderRef1} /> */}
                      <span className="dash"></span>
                      {buySell == "buy" && (
                        <span className="price-ladder end">{numPriceHalf}</span>
                      )}
                      {buySell == "sell" && (
                        <span className="price-ladder end">
                          {numPriceHalfLow}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-row">
                    <div className="qty-section">{getQuantityRegular}</div>
                    <div className="spread">
                      {buySell == "buy" && (
                        <span className="price-ladder">
                          {numPriceRegularLow}
                        </span>
                      )}
                      {buySell == "sell" && (
                        <span className="price-ladder">{numPriceRegular}</span>
                      )}
                      {/* <Slider ref={sliderRef2} /> */}
                      <span className="dash"></span>

                      <span className="price-ladder end">
                        {buySell === "buy" ? (
                          <>{numPriceRegular}</>
                        ) : buySell === "sell" ? (
                          <>{numPriceRegularLow}</>
                        ) : null}
                      </span>
                    </div>
                  </div>
                  <div className="flex-row">
                    <div className="qty-section">{getQuantityDouble}</div>
                    <div className="spread">
                      {buySell == "buy" && (
                        <span className="price-ladder">
                          {numPriceDoubleLow}
                        </span>
                      )}
                      {buySell == "sell" && (
                        <span className="price-ladder">{numPriceDouble}</span>
                      )}
                      {/* <Slider ref={sliderRef3} /> */}
                      <span className="dash"></span>
                      {buySell == "buy" && (
                        <span className="price-ladder end">
                          {numPriceDouble}
                        </span>
                      )}
                      {buySell == "sell" && (
                        <span className="price-ladder end">
                          {numPriceDoubleLow}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
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
                <span className="role-title">Prod Application: </span>UX, UI,
                SCSS, JQuery (prototype only)
              </div>
              <div className="flex-row">
                <span className="role-title">Portfolio Spinoff: </span>Design,
                React, SCSS
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
