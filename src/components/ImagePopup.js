import "./components-css/ImagePopup.css";
import React from "react";
import { LucideXCircle } from "lucide-react";

const ImagePopup = (props) => {
  return (
    <div className="image-popup-screen">
      <div className="image-popup-item">
        <img src={props.src} desc={props.images} />
        {/* <h1>{props.desc}</h1> */}
      </div>
      <button onClick={() => props.imgPopupState(false)}>
        <div className="x-button">
          <LucideXCircle />
        </div>
      </button>
    </div>
  );
};

export default ImagePopup;
