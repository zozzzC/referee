import React from "react";
import "../index.css";
import useWindowSize from "../hooks/useWindowResize";
import Mobile from "../components/Mobile";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import PortfolioImg from "../components/PortfolioImages";
import Masonry from "react-responsive-masonry";
import ImagePopup from "../components/ImagePopup";
import { useRef, useState } from "react";

const Portfolio = () => {
  //later, instead of importing everything like this, there may be get request that gets image URLs from a server

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
      key: 4,
      route: require(`../images/furina-bust.png`),
      desc: "furina art",
    },
    {
      key: 3,
      route: require(`../images/man-sketch.png`),
      desc: "old man art",
    },
  ];

  //set the number of columns based on the window size.
  const isMobile = useWindowSize({ size: 750 });
  const isSmall = useWindowSize({ size: 1500 });
  let columnsCount = 4;

  if (isMobile == true) {
    columnsCount = 2;
  } else if (isSmall == true) {
    columnsCount = 3;
  }

  const [imagePopup, setImagePopup] = useState(null);
  let imagePopupSrc = useRef("");
  let imagePopupDesc = useRef("");

  //TODO: change from using imageIndex to the actual ID inside of the object.
  function showImagePopup(imageIndex) {
    //first we want to set the image popup props, the values of the source image, etc.
    //props is going to be the value of the index in displayimg
    imagePopupSrc.current = displayImg[imageIndex]["route"];
    imagePopupDesc.current = displayImg[imageIndex]["desc"];
    setImagePopup(true);
  }

  return (
    <div className="portfolio">
      {imagePopup ? (
        <ImagePopup
          src={imagePopupSrc.current}
          desc={imagePopupDesc.current}
          imgPopupState={setImagePopup}
        />
      ) : null}
      <Mobile />
      <Masonry columnsCount={columnsCount} gutter="10px">
        {displayImg.map((img, index) => (
          <PortfolioImg
            index={index}
            key={img.key}
            route={img.route}
            desc={img.desc}
            setImagePopup={showImagePopup}
          />
        ))}
      </Masonry>
      <Footer />
    </div>
  );
};

export default Portfolio;
