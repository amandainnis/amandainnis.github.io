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
  function setActiveAlerting(myTimeout) {
      const myAwesomeTimeout = setTimeout(() => {
        console.log("i timed out");
        setAlertingActive(false);
      }, myTimeout);
      setAlertingActive((prevState) => {
        console.log(prevState);
        if (prevState === true) {
          console.log("clear timeout");
          clearTimeout(myAwesomeTimeout);
        }
        return true;
      });
    
    // setAlertingActive(false);
  }

  const prevScrollAmountRef = useRef(0);
  
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
        // console.log('insight')
      } 
      if ((alphaRef.current.offsetTop - currentScrollY) < 800) {
        scrollDownClassAdd(alphaRef, "unpause");
        // console.log('alpha')
      }
      if ((alphaRef.current.offsetTop - currentScrollY) < 600) {
        scrollDownClassAdd(crbRef, "unpause");
        // console.log('crb')
      }
      if ((alertingRef.current.offsetTop - currentScrollY) < 400) {
        scrollDownClassAdd(alertingRef, "unpause");
        // setActiveAlerting(5000);
        // console.log('alerting')
      }
    }
    // else if (!iAmScrollingDown.current) {
    //   console.log('scrolling up', alphaRef.current.offsetTop, currentScrollY);
    //   if (insightRef.current.offsetTop - currentScrollY < 1000) {
    //     // scrollDownClassAdd(insightRef, "unpause");
    //     insightRef.current.classList.remove("unpause");
    //     // console.log('insight')
    //     scrollDownClassTranslate(insightRef, getComputedStyle(document.body).getPropertyValue("--scroll"));
    //     scrollDownClassTranslate(insightRef, getComputedStyle(document.body).getPropertyValue("--insight-scroll"));
    //   } 
    //   if ((alphaRef.current.offsetTop - currentScrollY) < 800) {
    //     // scrollDownClassAdd(alphaRef, "unpause");
    //     alphaRef.current.classList.remove("unpause");
    //   }
    // }
    prevScrollY.current = currentScrollY;

  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
    return () => window.removeEventListener("scroll", handleScroll);
  }, [true]);




  useEffect(() => {
    console.log("i am resizing");
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
                <br></br>
              </div>
            </div>
     
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
