import React from "react";

export default function Slider(props) {
  return (
    <div className="hoverElement">
      {/* style={{ display: "none" }} */}
      <div className="spread-output" id="spread-output1">
        <div className="triangle"></div>
        <span id="spread1" className="spread"></span>
        <span id="bip1" className="bip3"></span>
        <span className="flex1margin"></span>
        <div id="pnlArea1" className="pnlArea">
          <span id="PNL1"></span>
        </div>
      </div>
      {/* style={{ display: "none" }} */}
      <div className="track">
        <input
          type="range"
          min=""
          max=""
          value=""
          step=""
          className="sliderRange"
          id="sliderRange1"
        />
        <div className="track-selection" id="track-selection1"></div>
      </div>
    </div>
  );
}
