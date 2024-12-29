// app/page.js
"use client";
import Home from "./home/page";
import SmoothScroll from "@/components/SmoothScroll";

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Home />
        {/* Uncomment this if needed */}
        {/* <Projects /> */}
      </div>
    </SmoothScroll>
  );
}
