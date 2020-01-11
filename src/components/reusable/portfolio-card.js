import React from "react";

const PortfolioCard = props => {
  console.log("i am props", props);
  return (
    <article
      className="portfolio-card"
      style={{ backgroundColor: props.data.bkgd }}
    >
      <div className="text-section">
        <h1 className="title">{props.data.title}</h1>
        <h4 className="subtitle">{props.data.subtitle}</h4>
      </div>
      {/* {props.data.divs} */}
      {/* <div
        style={{ backgroundColor: "yellow", width: "50%", height: "15px" }}
      ></div> */}
      {/* <div class="blurb-thumb">
        <p className="blurb">{props.data.blurb}</p>
        <div className="thumb">
          <img src={props.data.img} alt={props.data.subtitle} />
        </div>
      </div> */}
    </article>
  );
};

export default PortfolioCard;
