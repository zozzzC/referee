import React from "react";
import "../index.css";
import { forwardRef } from "react";

const CarouselImg = (props) => {
  return (
    <div className="carousel-img">
      <img src={props.src} alt={props.desc} style={props.style}></img>
    </div>
  );
};

export default CarouselImg;
