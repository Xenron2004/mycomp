import Projects from "@/components/Projects";
import React from "react";
import Image from "next/image";
import projecticons from "../../public/assets/images/project.svg";
import Link from "next/link";
import SlideCard from "./SlideCard";

const Portfolio = () => {
  const images = [
    "/assets/portfolio/Mockups_Fastpay.jpg",
    "/assets/portfolio/Thumbnail_Payswift.png",
    "/assets/portfolio/Thumbnail_Travrip.jpg",
    "/assets/portfolio/Thumbnail_Fastpay.jpg",
  ];

  return (
    <section className="flex flex-col items-center justify-center mx-auto py-[100px]  bg-white">
      <div className="flex flex-col gap-[100px] items-center justify-center max-w-7xl w-full h-auto">
        <div className="flex flex-col  items-center justify-center w-full">
          <Projects />
        </div>
        <div className="flex flex-col  gap-4  justify-center items-center w-full">
          <div className="flex items-center gap-3">
            <div>
              <Image src={projecticons} alt="project icon" />
            </div>
            <p className="font-inter font-regular text-[16px] text-mainBodytext">
              Our Portfolios
            </p>
          </div>
          <p className="text-center text-[52px] tracking-[-2%] font-inter font-semibold ">
            Our Other Projects
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden flex items-center justify-center">
      <SlideCard images={images} />
    </div>
    </section>
  );
};

export default Portfolio;
