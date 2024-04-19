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
    <div>
      <ImagePopup imgPopupObj={imagePopup} imgPopupState={setImagePopup} />
      <Mobile />
      <button
        onClick={() => {
          setImagePopup(true);
        }}
      >
        pop up
      </button>
      <Footer />
    </div>
  );
};

export default Pricelist;
