import React from "react";
import "../index.css";

//TODO: allow images to fade in when first loading page?

// const fade

const PortfolioImages = (props) => {
  return (
    <div className="portfolio-images">
      <img src={props.route} alt={props.desc}></img>
    </div>
  );
};

export default PortfolioImages;
