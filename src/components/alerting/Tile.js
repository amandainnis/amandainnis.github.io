import React from "react";

function Tile(props) {
  const myClass = props.active ? "tile blinkDivUp" : "tile";
  //   console.log("i am class inside the tile", myClass);
  return (
    <div
      className={myClass}
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
