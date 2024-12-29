// components/SmoothScrollProvider.js
"use client";
import React from "react";
import useSmoothScroll from "@/components/useSmoothScroll";

const SmoothScrollProvider = ({ children }) => {
  useSmoothScroll(); // Invoke the hook here

  return <>{children}</>;
};

export default SmoothScrollProvider;
