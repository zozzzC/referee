import React from "react";
import CarouselImg from "./CarouselImg";
import "../index.css";
import { useState, useEffect, useRef } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(0);
  const lastStyle = ref;

  //fix issue where the animation doesnt seem to work?
  // useEffect(() => {
  //   //each time the index changes we have to fade in the new index image, so give the new index image a css class for fading in.
  //   console.log("ref is " + ref.current);
  //   ref.current.style.animation = "fadeOut 1.2s";
  //   console.log("fadeout");
  // }, [index]);

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
    //fix issue where fading keeps jumping backwards and forwards
    //find a way to save the previous ref and remove the ref from that element
    setInterval(() => {
      if (index == displayImg.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 1000);
    ref.current.style.animation = "fadeOut 1.3s";
    console.log("fading between images now");
  }

  function moveLeft() {
    setInterval(() => {
      if (index == 0) {
        setIndex(displayImg.length - 1);
      } else {
        setIndex(index - 1);
      }
    }, 1000);
    ref.current.style.animation = "fadeOut 1.3s";
    console.log(index);
  }

  //make sure that images are in the public folder, all assets must be in the public folder for us to properly reference!

  return (
    <div className="carousel">
      <div className="carImg">
        <CarouselImg
          //TODO: add fading between images (probably have to forward a ref to add a class into the previous ref?)
          key={displayImg[index].key}
          src={displayImg[index].route}
          desc={displayImg[index].desc}
          ref={ref}
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
