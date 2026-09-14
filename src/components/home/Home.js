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
  const iconsRef = useRef();
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


  useEffect(() => {
    const cards = [insightRef, alphaRef, crbRef, alertingRef, iconsRef]
      .map((ref) => ref.current)
      .filter(Boolean);

    if (!cards.length || typeof IntersectionObserver === "undefined") {
      cards.forEach((card) => card.classList.add("unpause"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("unpause");
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        threshold: 0,
        // Start the slide when the card reaches the lower part of the viewport
        rootMargin: "0px 0px -18% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);




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
              Hi, I'm Amanda Innis, a product designer, strategist, and maker
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
                <AlertingCard />
              </div>
              <div className="portfolio-card-wrapper">
                <Icons />
              </div>
            </div>
            <div className="process-wrapper">
              <div className="blurb">
                <div className="title">About Me</div>
                <p>
                I am a Product Designer with skills in complex, information-dense UX design, user flows, Figma architecture and components, wireframing, icon design, and interaction design. My career has been in financial services but I enjoy making tools for clients who want an intuitive look at datasets. 
                
                </p>
                <p>I used to code my prototypes (before 2020) in HTML, SCSS, and light JavaScript. My current process includes prototyping in Figma or Cursor.</p>
                <p>
                In my free time, I play with my daughter and dog, bake, and explore local trails.
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
