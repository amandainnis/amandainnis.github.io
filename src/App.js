/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";

import "./App.scss";
import Nav from "./components/nav/nav";

import Home from "./components/home/Home";
// const jiraPic = require("./assets/images/jira-pic.png");
// https://reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row

// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci

function App(props) {
  // defaultTheme = "light";

  const homeRef = useRef();
  const [theme, setTheme] = useState(props.theme);
  const [activePage, setActivePage] = useState("home");
  const [resize, setResize] = useState(false);
  let winWidth = useRef(window.innerWidth);

  // function generateVars(theme) {
  //   Object.keys(theme.properties).forEach(property => {
  //     document.documentElement.style.setProperty(property, theme.properties[property]);
  //   });
  // }

  function setMyTheme(theme) {
    console.log(theme);
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
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
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    } else {
      setMyTheme("dark");
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
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
    // className={theme + "-theme"}
    <div >
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
          winWidth={winWidth.current}></Home>

        <footer className="footer flex-column justify-content-end">
          {/* <img src={jiraPic} /> */}
          <div className="flex-row">
            <a
              className="contact linkedin"
              href="https://www.linkedin.com/in/amandainnis"
              target="_">
              in
            </a>
            <a className="contact email-icon" href="mailto:amandainnis.design@gmail.com">
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
