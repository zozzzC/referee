import React from "react";
import { useState } from "react";
import { Menu } from "lucide-react";

const Hamburger = () => {
  const [openHamburger, isOpenHamburger] = useState(false);

  return (
    <div className="hamburger">
      <h1>zozchuu</h1>
      <button>
        <Menu />
      </button>
      <div className="hamburger-list-items"></div>
    </div>
  );
};

export default Hamburger;
