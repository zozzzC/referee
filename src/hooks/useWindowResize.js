import React from "react";
import { useRef, useEffect, useState } from "react";

export default function useWindowSize() {
  const minHamburgerSize = 600;
  const [sizeMobile, setSizeMobile] = useState(true);

  setSizeMobile(() => {
    if (window.innerWidth < minHamburgerSize) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    console.log("window size: " + window.innerWidth);
    const onResize = () => {
      setSizeMobile();
    };

    window.addEventListener("resize", onResize());

    return () => {
      window.removeEventListener("resize");
    };

    console.log("sizeMobile " + sizeMobile);
  }, []);

  return sizeMobile;
}
