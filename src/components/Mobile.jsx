import React from "react";
import useWindowSize from "../hooks/useWindowResize";
import Hamburger from "./Hamburger";
import Navbar from "../components/Navbar";

const Mobile = () => {
  const isMobile = useWindowSize({ size: 750 });
  if (isMobile == true) {
    return <Hamburger />;
  } else {
    return <Navbar />;
  }
};

export default Mobile;
