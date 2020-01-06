import React, { useState, useRef, useEffect, createRef } from "react";
import CardFooter from "../reusable/Card-Footer";
export default function Icons(props) {
  const [cardVisible, setCardVisible] = useState(true);

  function viewRole() {
    if (cardVisible) {
      setCardVisible(false);
    } else {
      setCardVisible(true);
    }
  }
  return (
    // style={{ backgroundColor: data.bkgd }}
    <article
      className="portfolio-card"
      style={{ backgroundColor: "var(--icon-card-bkgd)" }}
    >
      {/* <IsLoading isLoading={isLoading}></IsLoading> */}

      {cardVisible && (
        <div className="inner-wrapper">
          <div className="text-section">
            <h1 className="title">Icons</h1>
            <h4 className="subtitle">Custom Webfont Library</h4>
          </div>
          <div className="icon-row">
            <div className="aicon-arrow-right"></div>
            <div className="aicon-arrow-left"></div>
            <div className="aicon-chevron-left"></div>
            <div className="aicon-chevron-down"></div>
            <div className="aicon-refresh"></div>
            <div className="aicon-cog-outline"></div>
            <div className="aicon-copy"></div>
            <div className="aicon-edit-pencil"></div>
            <div className="aicon-logout"></div>
            <div className="aicon-open"></div>

            <div className="aicon-search"></div>
            <div className="aicon-comment"></div>
            <div className="aicon-trashcan"></div>
            <div className="aicon-menu"></div>

            <div className="aicon-cloud"></div>
            <div className="aicon-moon"></div>
            <div className="aicon-sun-outline"></div>
            <div className="aicon-calendar"></div>
            <div className="aicon-calendar-check"></div>
            <div className="aicon-calendar-day"></div>
            <div className="aicon-person"></div>
          </div>
        </div>
      )}

      {!cardVisible && (
        <div className="inner-wrapper">
          {/* <div className="text-section">
            <h1 className="title">About</h1>
          </div>
          <div className="role">
            <div className="text-width">
              This project was intended to replace TIM (Trade Ideas Manager). It
              grew into an app that included a leaderboard and attestations.
            </div>
          </div> */}
          <div className="text-section">
            <h1 className="title">My Role</h1>
          </div>

          <div className="role">
            <div className="text-width">
              After a lot of research into making pixel-perfect designs, I
              created this icon-library in illustrator. The dev in me hates the
              idea of one-off svgs so I imported them into ico-moon and
              generated a webfont.
            </div>
          </div>
        </div>
      )}
      <CardFooter roleBool={cardVisible} viewRole={viewRole} />
    </article>
  );
}
