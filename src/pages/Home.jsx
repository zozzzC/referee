import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Mobile from "../components/Mobile";
const commState = "open";
const commDate = "march 20, 2024";
const updateDate = "march 19, 2024";
import zozchuupfp from "../images/zozchuupfp.png"
import insta from "../images/logo/instagram.svg"
import twitter from "../images/logo/twitter.svg"

let commButton = "see what's available";

if (commState === "closed") {
  commButton = "check prices!";
}

const Homepage = () => {
  const navi = useNavigate();

  const apply = () => {
    navi("/pricelist");
  };

  const mobile = Mobile();

  return (
    <div className="Homepage">
      <div>
        <Mobile />
        <Carousel />
        <div className="home">
          <div className="home-left">
            <div className="home-pfp">
              <img
                src={zozchuupfp}
                alt="zozchuu-pfp"
              />
            </div>
            <div className="home-socials">
              <img
                src={insta}
                alt="instagram link"
              />
              <img
                src={twitter}
                alt="twitter link"
              />
            </div>
          </div>
          <div className="home-right">
            <div className="home-info">
              <div className="home-info-txt">
                <p>hello, i'm NAME! i am a CS major and hobbyist artist.</p>
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
