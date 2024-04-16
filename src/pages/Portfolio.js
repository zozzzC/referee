import React from "react";
import "../index.css";
import useWindowSize from "../hooks/useWindowResize";
import Mobile from "../components/Mobile";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import PortfolioImg from "../components/PortfolioImages";
import Masonry from "react-responsive-masonry";

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
  const isMobile = useWindowSize();
  let columnsCount = 4;

  if (isMobile == true) {
    columnsCount = 2;
  }

  return (
    <div className="portfolio">
      <Mobile />
      <h1>portfolio</h1>
      <Masonry columnsCount={columnsCount} gutter="10px">
        {displayImg.map((img) => (
          <PortfolioImg id={img.id} route={img.route} desc={img.desc} />
        ))}
      </Masonry>
      <Footer />
    </div>
  );
};

export default Portfolio;
