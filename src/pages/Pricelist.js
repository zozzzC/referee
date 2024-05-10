import React from "react";
import "../index.css";
import ImagePopup from "../components/ImagePopup";
import Footer from "../components/Footer";
import Mobile from "../components/Mobile";
import { useState, useRef } from "react";

const Pricelist = () => {
  const [imagePopup, setImagePopup] = useState(false);
  console.log(imagePopup);

  const imageRef = useRef(0);

  return (
    <div className="pricelist">
      <Mobile />
      <h3>vtuber model</h3>
      <h3>portrait/bust/fullbody</h3>
      <h3>illustration</h3>
      <h3>character design</h3>
      <h3>skeb-style</h3>
      <Footer />
    </div>
  );
};

export default Pricelist;
