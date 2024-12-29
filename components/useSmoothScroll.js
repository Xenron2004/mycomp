// components/useSmoothScroll.js
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true, // Enable smooth scrolling
      direction: "vertical", // Scroll direction
      lerp: 0.1, // Smoothness (lower = smoother)
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy(); // Clean up Lenis instance on unmount
    };
  }, []);
};

export default useSmoothScroll;
