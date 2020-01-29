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
const uxProcess = require("../../assets/images/uxProcess.png");
const designTest = require("../../assets/design-test.svg");

const designTest1 = require("../../assets/design-test1.svg");
const designTest1b = require("../../assets/design-test1b.svg");

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
            <div className="wrapper-padding  d-flex flex-column">
              <h1 className="section-header title">Projects</h1>

              <h5 className="project-subtitle">
                Below are coded, mock-up samples from financial design work.
                Most of my work isn't public,
                <a
                  className="text mr-1"
                  href="mailto:amandainnis.design@gmail.com"
                >
                  email me
                </a>
                for complete portfolio.
              </h5>
            </div>

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

              <div className="blurb">
                <div className="title">My Process</div>
                {/* <img className="uxProcess" src={uxProcess} /> */}
                <div className="flex-row">
                  {/* <img className="uxProcess" src={designTest1} /> */}
                  {/* <img className="uxProcess" src={designTest1b} /> */}
                  <div className="design-test-wrapper">
                    {/* <img className="design-test" src={designTest} /> */}
                    <svg className="design-test" viewBox="0 0 411 324">
                      <path
                        className="cls-1"
                        d="M315,258.16A182.35,182.35,0,0,1,79.4,274.46"
                      />
                      <polygon
                        className="cls-2"
                        points="309.45 255.15 321 252 317.95 263.57 309.45 255.15"
                      />
                      <path
                        className="cls-1"
                        d="M170,25.25A182.75,182.75,0,0,1,381.42,86"
                      />
                      <polygon
                        className="cls-2"
                        points="173.85 30.17 162 28.53 169.35 19.09 173.85 30.17"
                      />
                      <path
                        className="cls-3"
                        d="M368,199.91h26v-4H368Zm26-73H376v6h18Zm-26,67h26v-4H368Zm24-50h-6a2,2,0,0,0-2,2v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2v-1A2,2,0,0,0,392,143.91Zm-24,38h26v-4H368Zm0,6h26v-4H368Zm0,18h26v-4H368Zm-17-18h12v-4H351Zm41,26H378a2,2,0,0,0-2,2v1a2,2,0,0,0,2,2h14a2,2,0,0,0,2-2v-1A2,2,0,0,0,392,213.91Zm-21,0H357a2,2,0,0,0-2,2v1a2,2,0,0,0,2,2h14a2,2,0,0,0,2-2v-1A2,2,0,0,0,371,213.91Zm-8-36H351v4h12Zm-12,28h12v-4H351Zm0-6h12v-4H351Zm0-6h12v-4H351Zm43-28H334v2h60Zm-48,30H334v4h12Zm0-6H334v4h12Zm0-6H334v4h12Zm-10,35h14a2,2,0,0,0,2-2v-1a2,2,0,0,0-2-2H336a2,2,0,0,0-2,2v1A2,2,0,0,0,336,218.91ZM328,110V230h72V110Zm71,119H329V111h70Zm-53-27.09H334v4h12Zm0-24H334v4h12ZM362,144a2,2,0,0,0-2,2v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2v-1a2,2,0,0,0-2-2Zm0-25.06H334v5h28Zm10,27v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2v-1a2,2,0,0,0-2-2h-6A2,2,0,0,0,372,145.91Zm-17-13h18v-6H355Zm12,3H334v2h33Zm-15-9H334v6h18Zm42,35H334v2h60Z"
                      />
                      <path
                        className="cls-4"
                        d="M41,86H59V66H41ZM30,55H59V53H30ZM45,96.5H27a3,3,0,0,0,0,6H45a3,3,0,0,0,0-6ZM37,41a3,3,0,0,0,3,3H56a3,3,0,0,0,0-6H40A3,3,0,0,0,37,41ZM27,66V86h9V66Zm0-13H13v2H27Zm4-20.85H47V28H31ZM8,14v96H64V14Zm55,95.08H9V14.92H63ZM22,66H13V86h9ZM35,22H13v2H35Zm-6,6H13v4.15H29Z"
                      />
                      <path
                        className="cls-5"
                        d="M114,38a3,3,0,0,0,0,6h16a3,3,0,0,0,0-6Zm5,32a3,3,0,0,0,0-6H101a3,3,0,0,0,0,6Zm14-42.15H119v4h14Zm-30,4h14v-4H103ZM115,100h18V80H115Zm-14,0h9V80h-9ZM82,14v96h56V14Zm55,95H83V15h54ZM96,80H87v20h9Zm5-52.15H87v4h14ZM133,54H87v2h46ZM110,22H87v2h23Z"
                      />
                    </svg>
                    <h4 className="design-test-text">Design, Test, Refine</h4>
                  </div>
                </div>
                <p>
                  I bring a unique set of skills to my profession: I research,
                  strategize and create an intuitive user experience. After
                  planning the UI in Sketch, I finalize my designs in code
                  (HTML, SCSS, React or Angular). If I can't see it happening in
                  the browser, I can't sign off on it.
                </p>
                <p>
                  In the past, this meant creating a protoype to show users in
                  order to get feedback or to show other devs how I want the UI
                  to function. Lately, it has meant working alongside other devs
                  to create applications.
                </p>
                <p>
                  I love what I do. I look at my craft with enjoyment,
                  discipline and hunger to learn more and build more. If I’m not
                  working on designing, building or user-testing a website, I’m
                  on stack overflow unraveling a problem or on YouTube watching
                  a coding tutorial.
                </p>

                <p>
                  Skills include: user experience design, strategy, layout,
                  wireframes, high fidelity mockups, icon making, interaction
                  design, CSS, SCSS, CSS-variables and theming, intermediate
                  JavaScript (JQuery, Angular, React)
                </p>
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
