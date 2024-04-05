import React from "react";
import "../index.css";
import { forwardRef } from "react";

const CarouselImg = forwardRef(function carouselImg(props, ref) {
  return (
    <div className="carousel-img">
      <img src={props.src} alt={props.desc} ref={ref}></img>
    </div>
  );
});

export default CarouselImg;
