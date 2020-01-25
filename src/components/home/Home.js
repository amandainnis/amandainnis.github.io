import React, { useState, useEffect, useRef } from "react";
// import portfolioData from "./data/portfolioData";
import AlertingCard from "../alerting/AlertingCard";
import AlphaCapCard from "../alphaCapture/AlphaCapCard";
import InsightAnalyticsCard from "../insightAnalytics/InsightAnalyticsCard";
import CRBCard from "../crb/CRBCard";
import Pie from "../reusable/Pie";
import * as DataHandler from "../../data/DataHandler";
import Icons from "../icons-card/Icons";

import useDebounce from "../reusable/useDebounce";

// import PortfolioCard from "../portfolio-card";
import * as Common from "../reusable/common";

import LineChartCV from "../reusable/LineChartCV";
import LineChart from "../reusable/LineChart";
import LineChartIndexOf from "../reusable/LineChartIndexOf";

function Home(props) {
  // somehow without this use state on scroll amount, the component does not re render the values of the refs
  // but inside useEffect, the changed state cannot be accessed
  const [scrollAmount, setScrollAmount] = useState(0);
  const [alertingActive, setAlertingActive] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const bodyRef = useRef();
  const alertingRef = useRef();
  const changeMeRef = useRef();
  const scrollAmountRef = useRef(0);
  const visibleAreaRef = useRef(0);
  const bodyOffsetRef = useRef(0);
  const clientHeightRef = useRef(0);
  const scrollHeightRef = useRef(0);
  const alertingOffsetRef = useRef(0);

  function setScrollingConstants() {
    const scrollHeight = bodyRef.current.scrollHeight;
    const clientHeight = bodyRef.current.clientHeight;
    const bodyOffset = bodyRef.current.offsetTop;
    const visibleArea =
      bodyRef.current.clientHeight + bodyRef.current.offsetTop;
    const scrollAmount = bodyRef.current.scrollTop;
    const alertingOffset = alertingRef.current.offsetTop;

    scrollHeightRef.current = scrollHeight;
    clientHeightRef.current = clientHeight;
    bodyOffsetRef.current = bodyOffset;
    visibleAreaRef.current = visibleArea;
    setScrollAmount(scrollAmount);
    scrollAmountRef.current = scrollAmount;

    alertingOffsetRef.current = alertingOffset;
  }
  function setChangeClass(myRef, myClass, myTimeout) {
    const changeMe = myRef;
    // this just adds the class no matter what
    // console.log("outside changeme setTimeout");
    const myChangeClassTimeout = setTimeout(() => {
      changeMe.current.classList.remove(myClass);
      console.log("inside changeme setTimeout");
    }, myTimeout);
    if (changeMe.current.classList.contains(myClass)) {
      console.log("clear timeout");
      clearTimeout(myChangeClassTimeout);
    }
    changeMe.current.classList.add(myClass);
  }

  function setActiveAlerting(
    cardOffsetFromState,
    visibleArea,
    scrollAmount,
    myTimeout
  ) {
    // this tests if the thing is in view
    // if (scrollAmount > cardOffsetFromState - visibleArea) {
    //   // passes it to child
    //   const myAwesomeTimeout = setTimeout(() => {
    //     // console.log("i timed out");
    //     setAlertingActive(false);
    //   }, myTimeout);
    //   setAlertingActive(prevState => {
    //     console.log(prevState);
    //     if (prevState === true) {
    //       // console.log("clear timeout");
    //       clearTimeout(myAwesomeTimeout);
    //     }
    //     return true;
    //   });
    // }
    setAlertingActive(false);
  }

  const prevScrollAmountRef = useRef(0);
  const [iAmScrollingDown, setIAmScrollingDown] = useState(false);

  const handleScroll = () => {
    // https://reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row
    scrollAmountRef.current = bodyRef.current.scrollTop;
    setScrollAmount(bodyRef.current.scrollTop);

    console.log(bodyRef.current.scrollTop, scrollAmountRef.current);
    if (
      prevScrollAmountRef.current < scrollAmountRef.current &&
      !iAmScrollingDown
    ) {
      setIAmScrollingDown(true);
      // console.log('iAmScrollingDown', iAmScrollingDown)
    } else if (
      prevScrollAmountRef.current > scrollAmountRef.current &&
      iAmScrollingDown
    ) {
      setIAmScrollingDown(false);
      // console.log('iAmScrollingDown', iAmScrollingDown)
    }
    // console.log('prevScrollAmountRef.current + scroll amount', prevScrollAmountRef.current, scrollAmountRef.current)
    prevScrollAmountRef.current = scrollAmountRef.current;

    window.requestAnimationFrame(() => {
      setChangeClass(changeMeRef, "blinkDivUpPlain", 1000);
      // console.log({ alertingOffset });
      setActiveAlerting(
        alertingOffsetRef.current,
        visibleAreaRef.current,
        scrollAmountRef.current,
        5000
      );
    });
  };

  // function handleScrollBetter() {
  //   Common.debounce(handleScroll(), 500);
  // }
  useEffect(() => {
    console.log("mounted in home");
    setScrollingConstants();
    // bodyRef.current.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, [iAmScrollingDown]);
  function handleResize() {
    // https://reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row
    // When we receive a scroll event, schedule an update.
    // If we receive many updates within a frame, we'll only publish the latest value.
    // scheduleUpdate({ x: e.clientX, y: e.clientY });
    setScrollingConstants();
  }
  function handleResizeBetter() {
    Common.debounce(handleResize(), 350);
  }

  useEffect(() => {
    console.log("i am resizing");
    setScrollingConstants();
  }, [props.myResize]);
  // using this to handleRouting
  // static function getDerivedStateFromProps(nextProps, prevState) {
  //   // console.log(nextProps, prevState);
  //   if (nextProps.isVisible !== prevState.isVisible) {
  //     return { isVisible: nextProps.isVisible };
  //   } else return null;
  // }
  function dollarFormatFn(d) {
    return "$" + d;
  }
  function percentFormatFn(d) {
    return Math.round(d * 10000) / 100 + "%";
  }
  return (
    <>
      {isVisible && (
        <div
          // onScroll={handleScrollBetter}
          ref={bodyRef}
        >
          <div className="headline">
            Hi, I'm Amanda Innis, a designer &amp; creative technologist
            {/* <span className="asterisk">*</span> */}
          </div>
          {/* <div className="wrapper-padding asterisk-explanation">
            <div className="asterisk">*</div>
            <div className="explanation">CSS</div>
          </div> */}
          {/* <div className="wrapper-padding">
            <Pie />
          </div> */}

          <div className="card-wrapper">
            {/* <div className="wrapper-padding constants-info">
              <ul>
                <li>
                  window to wrapper
                  <span>{bodyOffsetRef.current}</span>
                </li>
                <li>
                  height of wrapper
                  <span>{clientHeightRef.current}</span>
                </li>

                <li>
                  height visible
                  <span>{visibleAreaRef.current}</span>
                </li>
                <li>
                  height of contents
                  <span>{scrollHeightRef.current}</span>
                </li>
                <li>
                  cards offset
                  <span>{alertingOffsetRef.current}</span>
                </li>
                <li>
                  <h4 className="mt-2">Math</h4>
                </li>

                <li>
                  cards offset - height visible
                  <span>
                    {alertingOffsetRef.current - visibleAreaRef.current}
                  </span>
                </li>
                <li>
                  <h4 className="mt-2">Change</h4>
                </li>

                <li>
                  amount scrolled
                  <span ref={changeMeRef}>{scrollAmountRef.current}</span>
                  <div>
                    the debounce article
                    https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
                  </div>
                </li>
              </ul>
            </div> */}
            <h1 className="wrapper-padding section-header">Projects</h1>
            <div className="portfolio-container">
              <div className="portfolio-card-wrapper">
                <InsightAnalyticsCard />
              </div>
              <div className="portfolio-card-wrapper">
                <AlphaCapCard
                  resize={props.myResize}
                  winWidth={props.winWidth}
                />
              </div>
              <div className="portfolio-card-wrapper">
                <CRBCard />
              </div>
              <div ref={alertingRef} className="portfolio-card-wrapper">
                <AlertingCard active={alertingActive} />
              </div>
              <div className="portfolio-card-wrapper">
                <Icons />
              </div>
              {/* jon added the squiggly so it immediately renders */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
