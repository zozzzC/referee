import React from "react";
import { useEffect, useState } from "react";

//functions created inside export default function will be recreated on every rerender
export default function useWindowSize({ size }) {
  const getIsMobile = () => {
    if (window.innerWidth < size) {
      return true;
    } else {
      return false;
    }
  };

  const [sizeMobile, setSizeMobile] = useState(getIsMobile());

  const onResize = () => {
    setSizeMobile(getIsMobile());
    //useEffect IS NOT ran every time resize event occurs, this is just the code for onResize that resize event listener refers to.
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    console.log("mounted windowResize");

    return () => {
      //only occurs when we do not render/use this hook anymore, like if a page doesn't use this hook then it unmounts.
      window.removeEventListener("resize", onResize);
      console.log("unmounted useWindowResize.");
    };
  }, []);

  return sizeMobile;
}
