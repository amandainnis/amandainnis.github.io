import React from "react";

function Tile(props) {
  const myClass = [
    "tile",
    props.active ? "blinkDivUp" : "",
    props.restoring ? "tile-restore" : ""
  ]
    .filter(Boolean)
    .join(" ");
    // console.log("i am class inside the tile", myClass);
  return (
    <div
      className={myClass}
      onAnimationEnd={event => {
        if (event.target !== event.currentTarget) {
          return;
        }
        if (props.onAnimationEnd) {
          props.onAnimationEnd();
        }
      }}
      style={{
        backgroundColor: props.data.bkgd
      }}
    >
      <div className="tile-title">{props.data.title}</div>
      <div className="number">{props.data.number}</div>
    </div>
  );
}

export default Tile;
