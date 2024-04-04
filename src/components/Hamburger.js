import React from "react";
import { useState } from "react";

const Hamburger = () => {
  const [openHamburger, isOpenHamburger] = useState(false);

  return (
    <div className="hamburger">
      <h1>zozchuu</h1>
      <div className="hamburger-icon"></div>
      <div className="hamburger-list-items"></div>
    </div>
  );
};

export default Hamburger;
