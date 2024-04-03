import React from "react";
import useWindowSize from "../hooks/useWindowResize";
import Hamburger from "../components/Hamburger";
import Navbar from "../components/Navbar";

const Mobile = () => {
  const isMobile = useWindowSize();
  if (isMobile == true) {
    return <Hamburger />;
  } else {
    return <Navbar />;
  }
};

export default Mobile;
