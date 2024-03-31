import React from "react";
import "../index.css";

const CarouselImg = (props) => {
  console.log(props.src);
  return (
    <div className="carousel-img">
      <img src={props.src} alt={props.desc}></img>
    </div>
  );
};

export default CarouselImg;
