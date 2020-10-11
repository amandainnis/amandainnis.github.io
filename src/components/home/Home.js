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

function Home(props) {
  // somehow without this use state on scroll amount, the component does not re render the values of the refs
  // but inside useEffect, the changed state cannot be accessed

  const [scrollAmount, setScrollAmount] = useState(0);
  const [alertingActive, setAlertingActive] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  // const [myHoverText, setMyHoverText] = useState("prototypes in code");
  let windowWidth = props.winWidth;
  const prevScrollY = useRef(0);
  const iAmScrollingDown = useRef(false);
  const [goingUp, setGoingUp] = useState(false);
  const bodyRef = useRef();
  const insightRef = useRef();
  const alphaRef = useRef();
  const crbRef = useRef();
  const alertingRef = useRef();
  const changeMeRef = useRef();

  const scrollAmountRef = useRef(0);
  const visibleAreaRef = useRef(0);
  const bodyOffsetRef = useRef(0);
  const clientHeightRef = useRef(0);
  const scrollHeightRef = useRef(0);
  const alertingOffsetRef = useRef(0);

  // https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

  function setScrollingConstants() {
    const scrollHeight = bodyRef.current.scrollHeight;
    const clientHeight = bodyRef.current.clientHeight;
    const bodyOffset = bodyRef.current.offsetTop;
    const visibleArea = bodyRef.current.clientHeight + bodyRef.current.offsetTop;
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
  function scrollDownClassAdd(myRef, myClass) {
    const changeMe = myRef;
    if (changeMe.current.classList.contains(myClass)) {
      return;
    } else {
      changeMe.current.classList.add(myClass);
    }
  }
  function scrollDownClassTranslate(myRef, ref) {
    const changeMe = myRef;
    console.log(ref);
    
  }
  function setActiveAlerting(cardOffsetFromState, visibleArea, scrollAmount, myTimeout) {
    // this tests if the thing is in view
    if (scrollAmount > cardOffsetFromState - visibleArea) {
      // passes it to child
      const myAwesomeTimeout = setTimeout(() => {
        // console.log("i timed out");
        setAlertingActive(false);
      }, myTimeout);
      setAlertingActive((prevState) => {
        console.log(prevState);
        if (prevState === true) {
          // console.log("clear timeout");
          clearTimeout(myAwesomeTimeout);
        }
        return true;
      });
    }
    setAlertingActive(false);
  }

  const prevScrollAmountRef = useRef(0);
  // const [iAmScrollingDown, setIAmScrollingDown] = useState(false);

  // const handleScroll = (e) => {
  //   // https://reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row
  //   console.log(e);

  //   scrollAmountRef.current = bodyRef.current.scrollTop;
  //   console.log(bodyRef.current.offsetTop);
  //   console.log(document.body.scrollTop);
  //   setScrollAmount(bodyRef.current.scrollTop);

  //   console.log(bodyRef.current.scrollTop, scrollAmountRef.current);
  //   if (prevScrollAmountRef.current < scrollAmountRef.current && !iAmScrollingDown) {
  //     setIAmScrollingDown(true);
  //     console.log("iAmScrollingDown", iAmScrollingDown);
  //   } else if (prevScrollAmountRef.current > scrollAmountRef.current && iAmScrollingDown) {
  //     setIAmScrollingDown(false);
  //     console.log("iAmScrollingDown", iAmScrollingDown);
  //   }
  //   console.log(
  //     "prevScrollAmountRef.current + scroll amount",
  //     prevScrollAmountRef.current,
  //     scrollAmountRef.current
  //   );
  //   prevScrollAmountRef.current = scrollAmountRef.current;

  //   window.requestAnimationFrame(() => {
  //     setChangeClass(changeMeRef, "blinkDivUpPlain", 1000);
  //     console.log(alertingOffsetRef.current);
  //     setActiveAlerting(
  //       alertingOffsetRef.current,
  //       visibleAreaRef.current,
  //       scrollAmountRef.current,
  //       5000
  //     );
  //   });
  // };

  // function handleScrollBetter() {
  //   Common.debounce(handleScroll(), 500);
  // }


  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    document.body.style.setProperty('--insight-scroll', window.pageYOffset / (insightRef.current.offsetTop - window.innerHeight));
    scrollDownClassTranslate(insightRef, getComputedStyle(document.body).getPropertyValue("--scroll"));
    scrollDownClassTranslate(insightRef, getComputedStyle(document.body).getPropertyValue("--insight-scroll"));
    // console.log("i am current scroll y", currentScrollY);
    if (prevScrollY.current < currentScrollY && !iAmScrollingDown.current) {
      iAmScrollingDown.current = true;
      console.log("iAmScrollingDown", iAmScrollingDown.current, currentScrollY);
    } else if (prevScrollY.current > currentScrollY && iAmScrollingDown.current) {
      iAmScrollingDown.current = false;
      console.log("iAmScrollingup", iAmScrollingDown.current, currentScrollY);
    } else if (iAmScrollingDown.current) {
      console.log('scrolling-down', alphaRef.current.offsetTop, currentScrollY);
  
      if ((insightRef.current.offsetTop - currentScrollY) < 1000) {
        scrollDownClassAdd(insightRef, "unpause");
        console.log('insight')
      } 
      if ((alphaRef.current.offsetTop - currentScrollY) < 800) {
        scrollDownClassAdd(alphaRef, "unpause");
        console.log('alpha')
        // alphaRef.current.classList.remove("right");
      }
      if ((alphaRef.current.offsetTop - currentScrollY) < 600) {
        scrollDownClassAdd(crbRef, "unpause");
        console.log('crb')
        // alphaRef.current.classList.remove("right");
      }
      if ((alphaRef.current.offsetTop - currentScrollY) < 400) {
        scrollDownClassAdd(alertingRef, "unpause");
        console.log('alerting')
        // alphaRef.current.classList.remove("right");
      }
    }
    else if (!iAmScrollingDown.current) {
      console.log('scrolling up', alphaRef.current.offsetTop, currentScrollY);
      if (insightRef.current.offsetTop - currentScrollY < 1000) {
        // scrollDownClassAdd(insightRef, "unpause");
        insightRef.current.classList.remove("unpause");
        console.log('insight')
        scrollDownClassTranslate(insightRef, getComputedStyle(document.body).getPropertyValue("--scroll"));
        scrollDownClassTranslate(insightRef, getComputedStyle(document.body).getPropertyValue("--insight-scroll"));
      } 
      if ((alphaRef.current.offsetTop - currentScrollY) < 800) {
        // scrollDownClassAdd(alphaRef, "unpause");
        alphaRef.current.classList.remove("unpause");
      }
    }
    prevScrollY.current = currentScrollY;

  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
    // document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    return () => window.removeEventListener("scroll", handleScroll);
  }, [true]);

  function handleResize() {
    setScrollingConstants();
  }
  useEffect(() => {
    setScrollingConstants();
    console.log(window, window.innerHeight, insightRef.current.offsetTop);
  }, []);

  useEffect(() => {
    console.log("i am resizing");
    setScrollingConstants();
    windowWidth = props.winWidth;
  }, [props.myResize]);

  return (
    <>
      {isVisible && (
        <div ref={bodyRef} className="scroll-class">
          <div className="headline-wrapper">
            <div className="headline">
              Hi, I'm Amanda Innis, a product designer and front-end stylist
            </div>
          </div>

          <div className="card-wrapper">


            <div className="d-flex flex-column">
              <h1 className="section-header wrapper-padding title">Projects</h1>

              <h5 className="wrapper-padding project-subtitle">
                Below are coded, mock-up samples from my financial design work. Since most of my
                work isn't public, please
                <a className="text ml-1 mr-1" href="mailto:amandainnis.design@gmail.com">
                  email me
                </a>
                for my complete portfolio.
              </h5>
            </div>

            {props.winWidth < 600 && (
              <div className="wrapper-padding mb-2">Best viewing experience is on desktop</div>
            )}
            <div className="portfolio-container">
              <div className="portfolio-card-wrapper insight slideLeftClass" ref={insightRef}>
                <InsightAnalyticsCard resize={props.myResize} winWidth={props.winWidth} />
              </div>
              <div className="portfolio-card-wrapper slideLeftClass" ref={alphaRef}>
                <AlphaCapCard resize={props.myResize} winWidth={props.winWidth} />
              </div>

              <div className="portfolio-card-wrapper slideLeftClass" ref={crbRef}>
                <CRBCard />
              </div>
              <div className="portfolio-card-wrapper slideLeftClass" ref={alertingRef}>
                <AlertingCard active={alertingActive} />
              </div>
              <div className="portfolio-card-wrapper">
                <Icons />
              </div>
            </div>
            <div className="process-wrapper">
              <div className="blurb">
                <div className="title">About Me</div>
                <p>
                  I started in painting and teaching art and then transitioned to UX / UI design after an immersive class at General Assembly. While there, I discovered how similar UX is to teaching:  you have to think from another person's perspective in order to guide them through a process.  This is what UX is to me: bringing perspective and process to a visual format.
                </p>
                <p>
                  I bring a unique set of skills to my profession: I research, strategize and create
                  an intuitive user experience. After planning the UI in Sketch or Adobe XD, I prefer to finalize my
                  designs in code (HTML, SCSS, React or Angular). If I can't see it happening in the
                  browser, I can't sign off on it.
                </p>
              </div>
            </div>
            {/* <div className="process-wrapper">
              <div className="blurb">
                <div className="headline">My Process</div>
                <div className="title">User Research</div>

                <div className="flex-row">
                  <div className="user-research-wrapper">
                    <svg className="userResearch1" viewBox="0 0 80 104">
                      <circle className="cls-1" cx="40" cy="34.99" r="25" />
                      <path
                        className="cls-2"
                        d="M50.9,32.34c0,7.06-5.21,12.45-9.72,12.45S30.32,39.4,30.32,32.34s4.61-12.78,10.29-12.78S50.9,25.29,50.9,32.34Z"
                      />
                      <circle className="cls-3" cx="45.25" cy="30.73" r="1.75" />
                      <circle className="cls-3" cx="37.69" cy="30.79" r="1.75" />
                      <ellipse className="cls-4" cx="41.22" cy="39.5" rx="2.72" ry="1.74" />
                      <polygon
                        className="cls-5"
                        points="42.63 36.35 39.73 36.35 40.63 29.97 41.9 29.97 42.63 36.35"
                      />
                      <path
                        className="cls-6"
                        d="M56.78,50.11c-.25-.42-.17-.9-.42-1.44s-.8-.8-1.06-1.14a7.91,7.91,0,0,1-.88-2.38c-.06-.33-.42-4.27-.43-4.94L52.26,28.73l-.15-1.06s-.54-2.66-1.42-3.62c-.19-.21-.85-.84-.85-.84-1.11-.68-1.57-2-2.64-3.28a9.79,9.79,0,0,0-6.12-3.25,9.68,9.68,0,0,0-4.43,1A7.26,7.26,0,0,0,34.28,19a13,13,0,0,0-4.16,7s-.9,2.78-1.24,3.69A38.4,38.4,0,0,0,26.83,38,17.34,17.34,0,0,0,27,40.22c-.72,3.17-.54,4.85,0,6.28a4.47,4.47,0,0,1,.21,1.77c0,1.15-5,1.48-5,3,0,1.92,2.55,1.35,5.51,1.35.43,0,2,.46,2.63.58A6.62,6.62,0,0,0,36,51.3c1-1,.41-4.14.34-5.53-.1-2.12-1-6.29-1.17-8.4a49.45,49.45,0,0,1,0-9.1A2.64,2.64,0,0,1,35.78,27c.76-.51,1.8-.76,2.68-1.38,1.13-.79,1.6-3.31,1.73-4.39l1.68,0a7.44,7.44,0,0,0,1.87,3.65c1.57,1.18,3.06,0,4.67.84.72.39.87,1.78.9,3.18,0,2.46-.06,7.4-.34,9.85-.4,3.48-2.39,6.58-2.93,8.84-.23.94-.47,3.07,0,3.86.65,1.08,3.39,1.63,4.64,1.76.86.09,3.3-.66,4.41-.67.5,0,.68.11,1.22.07a1.9,1.9,0,0,0,1.51-1.34C57.75,51,57.1,50.64,56.78,50.11Z"
                      />
                      <path className="cls-1" d="M75,5V99H5V5H75m1-1H4v96H76V4Z" />
                      <rect className="cls-1" x="31" y="74" width="34" height="2" />
                      <polygon
                        className="cls-1"
                        points="18.54 75.17 16.41 73.05 15 74.46 17.12 76.59 18.54 78 19.95 76.59 24.9 71.64 23.48 70.22 18.54 75.17"
                      />
                      <rect className="cls-1" x="31" y="87" width="34" height="2" />
                      <polygon
                        className="cls-1"
                        points="18.54 88.17 16.41 86.05 15 87.46 17.12 89.59 18.54 91 19.95 89.59 24.9 84.64 23.48 83.22 18.54 88.17"
                      />
                    </svg>

                    <svg className="userResearch2" viewBox="0 0 80 104">
                      <circle className="circle-class" cx="40" cy="35" r="25" />
                      <path
                        className="cls-2"
                        d="M50.76,35.65a1.13,1.13,0,0,0-1.41,0c.46-2.61.63-4.52.63-4.52s.9-6.66-6.91-7.41c-4.28-.41-7.74-.68-9.9-.13-3.76,1-3.49,7.76-2.88,12.2a1.4,1.4,0,0,0-1.24.23c-.64.6-.45,2.36,0,3.58.2.54,1.16,2.38,2.61,1.92h0c.77,2.17,1.63,5.07,3.28,6.87a7.33,7.33,0,0,0,6.13,2.41,7.33,7.33,0,0,0,4.78-2.89c1.25-1.76,1.46-4.24,2.16-6.64a2.26,2.26,0,0,0,.45.31c1.18.3,2.32-1.8,2.52-2.34C51.56,37.75,51.4,36.24,50.76,35.65Z"
                      />
                      <path
                        className="cls-3"
                        d="M42,41.92a5.94,5.94,0,0,1-1.81.82A6.12,6.12,0,0,1,38.46,42l1.11-7.46h1.61Z"
                      />
                      <path
                        className="cls-4"
                        d="M36.53,45.65c0,.67,1.81,1.22,4,1.22s4-.54,4-1.22Z"
                      />
                      <path
                        className="cls-5"
                        d="M44.53,45.65c0-.67-1.81-1.22-4-1.22s-4,.54-4,1.22Z"
                      />
                      <path
                        className="cls-6"
                        d="M36.52,35a1.57,1.57,0,0,0-1.74,1.32,1.57,1.57,0,0,0,1.74,1.32,1.57,1.57,0,0,0,1.74-1.32A1.57,1.57,0,0,0,36.52,35Zm7.77,0a1.57,1.57,0,0,0-1.74,1.32,1.8,1.8,0,0,0,3.47,0A1.57,1.57,0,0,0,44.29,35Zm-8.72-2c-1.7.81-2.87,1.9-2.64,2.45l6.21-3C38.84,31.93,37.26,32.15,35.56,33ZM50,25.73s.32-1.45-.06-2a3.82,3.82,0,0,0-2.41-1.85,4.94,4.94,0,0,0-1.3-.2,2,2,0,0,0-1.93-2.37c-5.13-.75-6.66,1.63-7.79,2.1-.92.38-1.22-1-3.63.06-2.17.92-2,2.34-2.4,3.14A16.15,16.15,0,0,0,28.9,28a13.62,13.62,0,0,0,.21,3.27,37.66,37.66,0,0,0,.79,4.26c.09.26.49.21.65.54.29.59.39,1.51.7,1.31.64-.42-1-4.26-1.13-5.71-.12-1.05-.08-3.7.89-4.14,1.4-.63-2.3,3.8,4.5,2.73,6.27-1,7.63-4.16,8.82-4.89.21-.13.21-.58.45-.5a3.58,3.58,0,0,1,1.89,3,4.69,4.69,0,0,0,1.52-.42c.46-.22.57-.53.8-.39s1.09,3,1,4c-.14,1.47-1,4.59-1.23,5.77,0,.1.1.36.2.37.4,0,.73-1,.82-1.37a38.37,38.37,0,0,0,1.11-5.82C50.88,26.41,50,25.73,50,25.73ZM44.57,32.6c-1.88-.06-3.42.38-3.47,1l6.87.22C48,33.19,46.45,32.66,44.57,32.6Z"
                      />
                      <path className="cls-1" d="M75,5V99H5V5H75m1-1H4v96H76V4Z" />
                      <rect className="cls-1" x="31" y="74" width="34" height="2" />
                      <polygon
                        className="cls-1"
                        points="18.54 75.17 16.41 73.05 15 74.46 17.12 76.59 18.54 78 19.95 76.59 24.9 71.64 23.48 70.22 18.54 75.17"
                      />
                      <rect className="cls-1" x="31" y="87" width="34" height="2" />
                      <polygon
                        className="cls-1"
                        points="18.54 88.17 16.41 86.05 15 87.46 17.12 89.59 18.54 91 19.95 89.59 24.9 84.64 23.48 83.22 18.54 88.17"
                      />
                    </svg>
                  </div>
                </div>
                <div className="title">Ideation</div>
                <div className="flex-row">
                  <div className="design-test-wrapper">
                    <svg className="design-test" viewBox="0 0 411 324">
                      <path className="cls-1" d="M315,258.16A182.35,182.35,0,0,1,79.4,274.46" />
                      <polygon
                        className="cls-2"
                        points="309.45 255.15 321 252 317.95 263.57 309.45 255.15"
                      />
                      <path className="cls-1" d="M170,25.25A182.75,182.75,0,0,1,381.42,86" />
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
                  I bring a unique set of skills to my profession: I research, strategize and create
                  an intuitive user experience. After planning the UI in Sketch, I finalize my
                  designs in code (HTML, SCSS, React or Angular). If I can't see it happening in the
                  browser, I can't sign off on it.
                </p>
                <p>Coding abilities: yes, but it's not my primary role.</p>
                <p>
                  In the past, this meant creating a protoype to show users in order to get feedback
                  or to show other devs how I want the UI to function. Lately, it has meant working
                  alongside other devs to create applications.
                </p>
                <p>
                  I love what I do. I look at my craft with enjoyment, discipline and hunger to
                  learn more and build more. If I’m not working on designing, building or
                  user-testing a website, I’m on stack overflow unraveling a problem or on YouTube
                  watching a coding tutorial.
                </p>

                <p>
                  Skills include: user experience design, strategy, layout, wireframes, high
                  fidelity mockups, icon making, interaction design, CSS, SCSS, CSS-variables and
                  theming, intermediate JavaScript (JQuery, Angular, React)
                </p>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
