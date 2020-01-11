import React from "react";

export default function CardFooter(props) {
  return (
    <div className="info-footer">
      <div className="buffer"></div>
      <div className="inner-wrapper">
        <div onClick={() => props.viewRole()} className="text">
          {props.roleBool && (
            // <span className="info-icon">i</span>
            <div
              className="underline-button"
              style={{ borderColor: props.borderColor }}
              // style={{ color: props.borderColor }}
            >
              About
            </div>
          )}
          {!props.roleBool && (
            <div
              className="underline-button"
              style={{ borderColor: props.borderColor }}
            >
              Back
            </div>
          )}
        </div>
        {/* <div className="text">Login</div> */}
      </div>
    </div>
  );
}
