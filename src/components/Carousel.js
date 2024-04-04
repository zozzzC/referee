import React from "react";
import CarouselImg from "./CarouselImg";
import "../index.css";
import { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("index changed");
  }, [index]);

  const displayImg = [
    {
      key: 0,
      route: require(`../images/meteor-shower.png`),
      desc: "meteor shower art",
    },

    {
      key: 1,
      route: require(`../images/romw.png`),
      desc: "romw art",
    },
    {
      key: 2,
      route: require(`../images/kaveh-sad.png`),
      desc: "kaveh art",
    },
    {
      key: 3,
      route: require(`../images/man-sketch.png`),
      desc: "old man art",
    },
  ];

  function moveRight() {
    console.log(index);
    if (index == displayImg.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function moveLeft() {
    //TODO: fix this so that it loops back to 0
    if (index == 0) {
      setIndex(displayImg.length - 1);
    } else {
      setIndex(index - 1);
    }
    console.log(index);
  }

  //make sure that images are in the public folder, all assets must be in the public folder for us to properly reference!

  return (
    <div className="carousel">
      <div className="carImg">
        <CarouselImg
          key={displayImg[index].key}
          src={displayImg[index].route}
          desc={displayImg[index].desc}
        />
      </div>
      <div className="carousel-button">
        <button onClick={moveLeft}>
          <ArrowBigLeft />
        </button>
        <button onClick={moveRight}>
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
