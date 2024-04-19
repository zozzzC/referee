import "./components-css/ImagePopup.css";
import { Route } from "react-router-dom";
import React from "react";
import { LucideXCircle } from "lucide-react";
import { useContext, useState } from "react";

//put exit and pass this  from the original page that rendered it because this will have to remove this imagepopup from the actual page!

function imagePopupHide({ setImagePopupShow }) {
  //when the user decides they don't want to see the image anymore, then hide the image--aka, set state in parent component to false.
  console.log("popup hide clicked.");
  setImagePopupShow(false);
}

const ImagePopup = (props) => {
  if (props.imgPopupObj === true) {
    return (
      <div className="image-popup-screen">
        <div className="image-popup-item">
          <img src={props.src} desc={props.images} />
        </div>
        <button onClick={() => props.imgPopupState(false)}>
          <div className="x-button">
            <LucideXCircle />
          </div>
        </button>
      </div>
    );
  }
};

export default ImagePopup;
