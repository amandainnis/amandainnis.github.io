import React from "react";
// const enzo = require("../../assets/images/enzo-10-4-2019sml.jpeg");
function IsLoading(props) {
  //   console.log(props);
  return (
    props.isLoading === true && (
      <div className="loading-class">
        <div className="loader"></div>
      </div>
    )
  );
}

export default IsLoading;
