import React, { useState, useEffect, useRef } from "react";

// import AlertingDivs from "./AlertingDivs";
import Tile from "./Tile";
import alertingData from "../../data/alertingData";
import alertArray from "../../data/alertingAlerts";
import CardFooter from "../reusable/Card-Footer";
const myData = [
  { title: "RRTWQ", number: 55, bkgd: "var(--alerting-red-bkgd)" },
  { title: "AAQPR", number: 15, bkgd: "var(--alerting-red-bkgd)" },
  { title: "NNNTRP", number: 32, bkgd: "var(--alerting-orange-background)" },
  { title: "JSOR", number: 17, bkgd: "var(--alerting-orange-background)" },
  { title: "MLOP", number: 11, bkgd: "var(--alerting-orange-background)" },
  { title: "UWQL", number: 8, bkgd: "var(--alerting-orange-background)" }
];
function AlertingCard(props) {
  const [generalData, setGeneralData] = useState(alertingData);
  const [tileData, setTileData] = useState(myData);
  const [data, setData] = useState(alertArray);
  const [cardVisible, setCardVisible] = useState(true);
  const [jsorPhase, setJsorPhase] = useState("idle");
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) {
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setTileData(prev =>
        prev.map(tile =>
          tile.title === "JSOR" ? { ...tile, number: 18 } : tile
        )
      );
      setJsorPhase("blink");
      return;
    }

    let timeoutId = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }
        timeoutId = window.setTimeout(() => {
          setTileData(prev =>
            prev.map(tile =>
              tile.title === "JSOR" ? { ...tile, number: 18 } : tile
            )
          );
          setJsorPhase("blink");
        }, 450);
        observer.unobserve(node);
      },
      {
        root: null,
        threshold: 0.25,
        rootMargin: "0px 0px -18% 0px"
      }
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // console.log("state of alerting", this.props);
  function viewRole() {
    if (cardVisible) {
      setCardVisible(false);
    } else {
      setCardVisible(true);
    }
  }
  return (
    <article
      ref={cardRef}
      className="portfolio-card"
      style={{ backgroundColor: generalData.bkgd }}
    >
      {cardVisible && (
        <div className="inner-wrapper">
          <div className="text-section">
            <h1 className="title">{generalData.title}</h1>
            <h4 className="subtitle">{generalData.subtitle}</h4>
          </div>
          <div className="css-grid-tile-wrapper">
            {tileData.map((alert, i) => {
              return (
                <Tile
                  key={i}
                  data={alert}
                  active={jsorPhase === "blink" && alert.title === "JSOR"}
                  restoring={jsorPhase === "restore" && alert.title === "JSOR"}
                  onAnimationEnd={() => {
                    if (alert.title !== "JSOR") {
                      return;
                    }
                    setJsorPhase(prev => (prev === "blink" ? "restore" : "idle"));
                  }}
                />
              );
            })}
          </div>

          <div className="alert-row-section">
            <div className="alert-row">
              <div className="flex-row" data={data[0].urgent}>
                <div className="message-col">
                  <span className="message-title">{data[0].title}</span>
                  <span className="client-ticker">
                    {data[0].client} - {data[0].ticker}
                  </span>
                  {data[0].message}
                  <div className="time">{data[0].time}</div>
                </div>
                <div className="actions-col">
                  <i className="aicon-check"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="alert-row">
            <div className="flex-row" data={data[1].urgent}>
              <div className="message-col">
                <span className="message-title">{data[1].title}</span>
                <span className="client-ticker">
                  {data[1].client} - {data[1].ticker}
                </span>
                {data[1].message}
                <div className="time">{data[1].time}</div>
              </div>
              <div className="actions-col">
                <i className="aicon-check"></i>
              </div>
            </div>
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
              The target audience for this application is traders. Therefore
              space is designed to provide immediate feedback on events
              organized by urgency.
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
        borderColor={"var(--alerting-orange-background)"}
      />
    </article>
  );
}

export default AlertingCard;
