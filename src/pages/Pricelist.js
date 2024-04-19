import React from "react";
import "../index.css";
import ImagePopup from "../components/ImagePopup";
import Footer from "../components/Footer";
import Mobile from "../components/Mobile";
import { useState } from "react";

const Pricelist = () => {
  const [imagePopup, setImagePopup] = useState(false);
  console.log(imagePopup);

  return (
    <div>
      <ImagePopup imgPopupObj={imagePopup} imgPopupState={setImagePopup} />
      <Mobile />
      <button onClick={() => setImagePopup(true)}>pop up</button>
      <Footer />
    </div>
  );
};

export default Pricelist;
