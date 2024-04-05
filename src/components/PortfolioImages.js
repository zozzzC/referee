import React from "react";
import "../index.css";

const PortfolioImages = (props) => {
  return (
    <div className="portfolio-images">
      <img src={props.route} alt={props.desc}></img>
    </div>
  );
};

export default PortfolioImages;
