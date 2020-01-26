import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as blah from "./";

var darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function handleDarkmode(e) {
  var darkModeOn = e.matches; // true if dark mode is enabled
  var favicon = document.querySelector('link[rel="shortcut icon"]'); // get favicon-192.png element
  var largeFavicon = document.querySelector('link[rel="icon"]'); // get favicon.ico element
  if (!favicon || !largeFavicon) {
    return; // where are our favicon elements???
  }
  // replace icons with dark/light themes as appropriate
  if (darkModeOn) {
    favicon.href = "/favicon-dark.ico";
    largeFavicon.href = "/logo192-dark.png";
  } else {
    favicon.href = "/favicon.ico";
    largeFavicon.href = "/logo192-light.png";
  }
}
handleDarkmode(darkModeMediaQuery);
darkModeMediaQuery.addListener(handleDarkmode);
let themeCache = localStorage.getItem("theme") || "dark";
let route = "home";
ReactDOM.render(
  <App theme={themeCache} route={route} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
