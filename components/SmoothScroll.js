// // components/SmoothScroll.js
// "use client";
// import React from "react";
// import useSmoothScroll from "@/components/useSmoothScroll";

// const SmoothScroll = ({ children }) => {
//   useSmoothScroll(); // Invoke the hook here

//   return <>{children}</>;
// };

// export default SmoothScroll;

"use client";

import React, { useEffect } from "react";

import Lenis from "@studio-freight/lenis";

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis
    // const lenis = new Lenis({
    //   lerp: 0.1, // Adjust for smoothness
    //   smooth: true,
    // });

    const lenis = new Lenis({
      lerp: 0.08, // Lower lerp for smoother transition
      smooth: true,
      duration: 1.2, // Adjust for a more gradual scroll
      easing: (t) => 1 - Math.pow(1 - t, 4), // Custom easing function
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.stop();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
