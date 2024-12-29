"use client";

import React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Travrip from "../../public/assets/portfolio/Thumbnail_Travrip.jpg";
import Payswift from "../../public/assets/portfolio/Thumbnail_Payswift.png";

import Mockups from "../../public/assets/portfolio/mockups.png";
import FastpayVersion from "../../public/assets/portfolio/Three_versions_Fastpay.jpg";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";
import CtaSection from "./components/CtaSection";
import Link from "next/link";

const Home = () => {
  const images = [
    {
      src: Travrip,
      alt: "Slider Image 1",
    },

  
    {
      src: Payswift,
      alt: "Slider Image 2",
    },
    {
      src: Mockups,
      alt: "Slider Image 2",
    },
    {
      src: FastpayVersion,
      alt: "Slider Image 2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for animation

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade-out animation before changing the image
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); // Trigger fade-in animation
      }, 500); // Match this delay with your CSS transition time
    }, 2000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    // Hero section
    <section className="flex flex-col items-center justify-center gap-[100px] h-auto">
      <div className="bg-dark w-full h-auto flex flex-col gap-[100px] py-[80px]  items-center justify-center">
        <div className="flex flex-col gap-12 relative items-center  max-w-7xl w-11/12   h-auto">
          <div className="font-inter font-semibold text-[40px]  text-start md:text-center  md:text-[68px] text-white leading-[130%] tracking-[-2%]   md:leading-[88.4px] max-w-[1229px] w-11/12 ">
            Crafting user-centric and visually appealing digital experiences.
          </div>

          {/* services links */}
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-start mx-auto gap-4">
            <div className="flex gap-[10px] items-center justify-start">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="text-white font-inter font-medium text-[18px]">
                UI/UX Design
              </div>
            </div>

            <div className="flex gap-[10px] items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="text-white  font-inter font-medium text-[18px]">
                Web Development
              </div>
            </div>

            <div className="flex gap-[10px] items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="text-white font-inter font-medium text-[18px]">
                App Development
              </div>
            </div>
            <div className="flex gap-[10px] items-center justify-start">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="text-white font-inter font-medium text-[18px]">
                AI/ML Projects
              </div>
            </div>

            <div className="flex gap-[10px] items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="text-white font-inter font-medium text-[18px]">
                API Development
              </div>
            </div>

            <div className="flex gap-[10px] items-center justify-start">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="text-white font-inter font-medium text-[18px]">
                SEO Services
              </div>
            </div>
          </div>

          <div className="font-medium hidden md:block items-center font-inter text-start md:text-center max-w-[950px] tracking-[-2%] leading-[31.2px] w-11/12  text-[20px] text-[#7A7F8A] ">
            We deliver innovative digital solutions, specializing in{" "}
            <span className="text-white ">
              {" "}
              Web Development, No-Code Development, SEO, App Development, UI/UX
              Design, Branding, and Motion Graphics{" "}
            </span>{" "}
            to help businesses grow and succeed.
          </div>

          {/* Buttons */}
          <div className="flex  items-center justify-between gap-4 ">
            <button className="max-w-[130px] h-[45px] bg-primary font-medium  flex items-center justify-center text-white font-inter w-full py-4 px-6 rounded-3xl ">
              Let's Talk!
            </button>
            <Link href="/portfolio"> 
            <button  className="flex items-center border-2 font-inter font-medium border-[#616266] justify-center text-white  h-[45px] w-[216px]  rounded-3xl">
              Check Our Work
            </button>
           </Link>
          </div>
        </div>

        {/* Auto-Slider Section */}
        <div className="relative w-11/12 hidden md:block max-w-[1228.8px] h-auto max-h-[736.32px] overflow-hidden  rounded-[19.2px] border-[9.6px] border-opacity-[48%] gap-[9.6px]">
          {/* Current Image */}
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={1228.8}
            height={736.32}
            // className="rounded-tl-[19.2px] object-cover transition-opacity duration-500"
            className={` object-cover transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-90"
            }`}
          />
        </div>
      </div>
      <Projects />
      <Process />
      <Services />
      <Pricing />
      <FAQs />
      <CtaSection/>
    </section>

    // Projects Section
  );
};

export default Home;
