import React from "react";
import { useEffect, useState } from "react";

const maxHamburgerSize = 700; //max width of page for hamburger button to be used/appear

//functions created inside export default function will be recreated on every rerender
export default function useWindowSize() {
  const getIsMobile = () => {
    if (window.innerWidth < maxHamburgerSize) {
      return true;
    } else {
      return false;
    }
  };

  const [sizeMobile, setSizeMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setSizeMobile(getIsMobile());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      console.log("useWindowSize called and useEffect used.");
    };
  }, []);

  return sizeMobile;
}
