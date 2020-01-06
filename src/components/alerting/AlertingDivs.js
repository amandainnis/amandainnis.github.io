import React from "react";
import Tile from "./Tile";

function AlertingDivs(props) {
  console.log(props);

  return (
    <div className="css-grid-tile-wrapper">
      {myData.map((alert, i) => {
        return <Tile key={i} data={alert} />;
      })}
    </div>
  );
}

export default AlertingDivs;

// #fd5c5c

// #c7a994 bkgd lite
