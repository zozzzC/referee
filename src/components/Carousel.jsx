import React from "react";
import CarouselImg from "./CarouselImg";
import "../index.css";
import { useState, useEffect, useRef } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import meteorShower from "../images/meteor-shower.png";
import romw from "../images/romw.png";
import kavehSad from "../images/kaveh-sad.png";
import furinaArt from "../images/furina-bust.png";
import oldMan from "../images/man-sketch.png";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [style, setStyle] = useState();
  const ref = useRef(0);

  const displayImg = [
    {
      key: 0,
      route: meteorShower,
      desc: "meteor shower art",
    },

    {
      key: 1,
      route: romw,
      desc: "romw art",
    },
    {
      key: 2,
      route: kavehSad, 
      desc: "kaveh art",
    },
    {
      key: 3,
      route: oldMan,
      desc: "old man art",
    },
  ];

  //TODO: change from useRef to another state instead
  function moveRight() {
    setStyle({ animation: "fadeOut 1.3s" });
    setTimeout(() => {
      console.log("sI running");
      if (index == displayImg.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      setStyle({ animation: "fadeIn 1.3s" });
    }, 1000);
  }

  //TODO: change from useRef to another state instead
  function moveLeft() {
    setStyle({ animation: "fadeOut 1.3s" });
    setTimeout(() => {
      if (index == 0) {
        setIndex(displayImg.length - 1);
      } else {
        setIndex(index - 1);
      }
      setStyle({ animation: "fadeIn 1.3s" });
    }, 1000);
    //the ref has now changed as we rerendered using setIndex, now the new image is the old image
  }

  return (
    <div className="carousel">
      <div className="carImg">
        <CarouselImg
          //TODO: add fading between images (probably have to forward a ref to reference the image tag in the component)
          key={displayImg[index].key}
          src={displayImg[index].route}
          desc={displayImg[index].desc}
          style={style}
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
