/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";

import "./App.scss";
import Nav from "./components/nav/nav";
import { DARK } from "./global-styles/theme/dark";
import { LIGHT } from "./global-styles/theme/light";

import Home from "./components/home/Home";
const jiraPic = require("./assets/jira-pic.png");
// https://reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row

// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci

function App(props) {
  // defaultTheme = "light";
  const dark = DARK;
  const light = LIGHT;
  const homeRef = useRef();
  const [theme, setTheme] = useState(props.theme);
  const [activePage, setActivePage] = useState("home");
  const [resize, setResize] = useState(false);
  let winWidth = useRef(window.innerWidth);

  function generateVars(theme) {
    Object.keys(theme.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        theme.properties[property]
      );
    });
  }

  function setMyTheme(theme) {
    console.log(theme);
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      setTheme("light");
      // Object.assign(light.properties, appLight.properties);
      generateVars(light);
    } else {
      setTheme("dark");
      // Object.assign(dark.properties, appDark.properties);
      generateVars(dark);
    }
  }
  function resizeFunction() {
    // none of these true falses are currently being used but could be used with debouncing?
    const myAwesomeTimeout = setTimeout(() => {
      setResize(false);
      winWidth.current = window.innerWidth;
      console.log("winWidth", winWidth);
    }, 1000);
    setResize(prevState => {
      // console.log(prevState);
      if (prevState === true) {
        // console.log("clear timeout");
        clearTimeout(myAwesomeTimeout);
      }
      // console.log("i am resize function");
      return true;
    });
    // console.log(homeRef.current);
    // homeRef.current.setScrollingConstants();
  }

  function setRoute(route) {
    setActivePage(route);
    console.log(route);
  }
  useEffect(() => {
    console.log("mounted");
    if (theme === "light") {
      setMyTheme("light");
    } else {
      setMyTheme("dark");
    }
    // window.addEventListener("resize", handleResizeBetter.bind(this));
    winWidth.current = window.innerWidth;
    window.addEventListener("resize", resizeFunction);
  }, []);

  // function componentWillUnmount() {
  //   console.log("unmount");
  //   // window.removeEventListener("resize", resizeFunction.bind(this));
  // }

  let homeVisible = activePage === "home" ? true : false;

  return (
    <div className={"theme-" + theme}>
      <Nav
        myTheme={theme}
        setMyTheme={thm => setMyTheme(thm)}
        poMansRouting={blah => setRoute(blah)}
      />
      <div className="inner-body">
        <Home
          forwardRef={homeRef}
          isVisible={homeVisible}
          myResize={resize}
          winWidth={winWidth.current}
        ></Home>

        <footer className="footer flex-column justify-content-end">
          {/* <img src={jiraPic} /> */}
          <div className="flex-row">
            <a
              className="contact linkedin"
              href="https://www.linkedin.com/in/amandainnis"
              target="_"
            >
              {/* <span className="aicon-comment"></span> */}
              {/* <h2>Contact Me</h2> */}
              in
            </a>
            <a
              className="contact email-icon"
              href="mailto:amandainnis.design@gmail.com"
            >
              {" "}
              <span className="aicon-email"></span>
            </a>
          </div>
          <div className="email">amandainnis.design@gmail.com</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
