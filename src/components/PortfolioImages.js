import React from "react";
import "../index.css";

//TODO: allow images to fade in when first loading page?

// const fade

const PortfolioImages = (props) => {
  return (
    <div className="portfolio-images">
      <button onClick={() => props.setImagePopup(props.index)}>
        <img src={props.route} alt={props.desc}></img>
        <p>{props.image}</p>
      </button>
    </div>
  );
};

export default PortfolioImages;
