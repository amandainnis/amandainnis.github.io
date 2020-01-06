import React from "react";
function Nav(props) {
  console.log("nav props", props);
  function toggleTheme(theme) {
    props.setMyTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="navbar">
      {/* <div className="aicon-menu"></div> */}
      <div
        className="nav-link  d-flex"
        onClick={() => {
          props.poMansRouting("home");
        }}
      >
        {/* <svg className="logo2" data-name="aiyellow64fill" viewBox="0 0 64 64">
          <rect class="cls-2" x="51" y="13" width="11" height="38" />
          <path d="M61,14V50H52V14h9m2-2H50V52H63V12Z" />
          <polygon class="cls-2" points="2.73 51 24 14.01 45.27 51 2.73 51" />
          <path
            class="cls-1"
            d="M24,16,43.54,50H4.46L24,16m0-4L1,52H47L24,12Z"
          />
        </svg> */}

        <svg
          className="logo"
          data-name="aiyellow64fillspreadthicker"
          viewBox="0 0 72 64"
        >
          <rect className="cls-2" x="57" y="13" width="11" height="38" />
          <path d="M67,14V50H58V14h9m2-2H56V52H69V12Z" />
          <polygon
            className="cls-2"
            points="5.16 50.75 26 14.51 46.84 50.75 5.16 50.75"
          />
          <path
            className="cls-1"
            d="M26,17,44.68,49.5H7.32L26,17m0-5L3,52H49L26,12Z"
          />
        </svg>
      </div>
      {/* <div
        className="nav-link"
        onClick={() => {
          props.poMansRouting("dataViz");
        }}
      >
        DataViz
      </div>
      <div
        className="nav-link"
        onClick={() => {
          props.poMansRouting("portfolio");
        }}
      >
        Portfolio
      </div> */}
      <div
        className="sunlight-nighttime "
        onClick={() => toggleTheme(props.myTheme)}
      >
        <span className="mr-1">Theme</span>
        {props.myTheme === "light" && <div className="aicon-sun-outline"></div>}
        {props.myTheme === "dark" && <div className="aicon-moon"></div>}
      </div>
    </div>
  );
}

export default Nav;
