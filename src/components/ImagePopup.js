import "./components-css/ImagePopup.css";
import React from "react";
import { LucideXCircle } from "lucide-react";

const ImagePopup = (props) => {
  return (
    <div className="image-popup-screen">
      <div className="image-popup-item">
        {/* TODO: This button is causing a left margin for the image. */}

        <button onClick={() => props.imgPopupState(false)}>
          <div className="x-button">
            <LucideXCircle />
          </div>
        </button>
        <img
          src={props.src}
          desc={props.images}
          style={{ animation: "fadeIn 0.5s" }}
        />
        {/* <h1>{props.desc}</h1> */}
      </div>
    </div>
  );
};

export default ImagePopup;
