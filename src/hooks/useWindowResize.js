import React from "react";
import { useEffect, useState } from "react";

const maxHamburgerSize = 600; //max width of page for hamburger button to be used/appear

const getIsMobile = () => {
  if (window.innerWidth < maxHamburgerSize) {
    return true;
  } else {
    return false;
  }
};

export default function useWindowSize() {
  const [sizeMobile, setSizeMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setSizeMobile(getIsMobile());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return sizeMobile;
}
