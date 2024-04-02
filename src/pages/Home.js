import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const commState = "open";
const commDate = "march 20, 2024";
const updateDate = "march 19, 2024";

let commButton = "apply now!";

if (commState === "closed") {
  commButton = "check prices!";
}

const Homepage = () => {
  const navi = useNavigate();

  const apply = () => {
    navi("/pricelist");
  };

  return (
    <div className="Homepage">
      <div>
        <Navbar />
        <Carousel />
        <div className="home">
          <div className="home-left">
            <div className="home-pfp">
              <img
                src={require("../images/zozchuupfp.png")}
                alt="zozchuu-pfp"
              />
            </div>
            <div className="home-socials">
              <img
                src={require("../images/logo/instagram.svg")}
                alt="instagram link"
              />
              <img
                src={require("../images/logo/twitter.svg")}
                alt="twitter link"
              />
            </div>
          </div>
          <div className="home-right">
            <div className="home-info">
              <div className="home-info-txt">
                <p>hello, i'm zozchuu! i am a CS major and hobbyist artist.</p>
                <p>commissions status: {commState}</p>
                <p>intake: {commDate}</p>
                <p>last updated: {updateDate}</p>
              </div>
              <button onClick={apply}> {commButton} </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
