import "./components-css/ImagePopup.css";
import React from "react";
import { LucideXCircle } from "lucide-react";

const InfoImagePopup = (props) => {
  return (
    <div className="image-popup-screen">
      <div className="image-popup-item">
        <button onClick={() => props.infoImgPopupState(false)}>
          <div className="x-button">
            <LucideXCircle />
          </div>
        </button>
        <img
          src={props.src}
          desc={props.images}
          style={{ animation: "fadeIn 0.5s" }}
        />
      </div>
    </div>
  );
};

export default InfoImagePopup;
