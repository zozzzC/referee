import React from "react";
import CarouselImg from "./CarouselImg";
import "../index.css";
import img from "../images/meteor-shower.png";

const Carousel = () => {
  const displayImg = [
    {
      key: 1,
      route: require(`../images/meteor-shower.png`),
      desc: "meteor shower art",
    },

    {
      key: 2,
      route: require(`../images/romw.png`),
      desc: "romw art",
    },
    {
      key: 3,
      route: require(`../images/kaveh-sad.png`),
      desc: "kaveh art",
    },
  ];

  //make sure that images are in the public folder, all assets must be in the public folder for us to properly reference!

  return (
    <div className="carousel">
      {displayImg.map((indivImg) => (
        <CarouselImg
          key={indivImg.key}
          src={indivImg.route}
          desc={indivImg.desc}
        />
      ))}
    </div>
  );
};

export default Carousel;
