"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

// import VanillaTilt from "vanilla-tilt";

const ProjectCards = ({
  title,
  description,
  stacks,
  imageUrl,
  caseStudyUrl,
}) => {
  const router = useRouter();
//   const tiltRef = useRef(null);
//   useEffect(() => {
//     if (tiltRef.current) {
//       VanillaTilt.init(tiltRef.current, {
//         max: 20, // Max tilt angle (increased for a stronger effect)
//         speed: 500, // Speed of the tilt effect (slower for smoother animation)
//         scale: 1.1, // Increased scale for a more noticeable hover effect
//         glare: true, // Enable glare effect
//         "max-glare": 0.6, // Higher glare intensity for more shine
//         "glare-prerender": true, // Improves glare rendering performance
//         reverse: true, // Reverse the tilt direction (optional)
//         easing: "cubic-bezier(0.25, 0.8, 0.25, 1)", // Smooth easing for animation
//         transition: true, // Smooth transition effect when the tilt starts
//         perspective: 1000, // Perspective depth for 3D effect
//       });
//     }
//   }, []);

  return (
    <div
      className="flex flex-col lg:flex-row hover:bg-[#F8FAFB] transition-all duration-300  max-w-7xl w-full border ease-in-out border-[#DFE1E7] hover:border-none items-center gap-6 p-10 bg-white rounded-[24px]"
    
    >
      {/* Project Details */}
      <div className="flex flex-col gap-6 flex-1">
        {/* Project Title */}
        <h2 className="text-[28px] font-semibold font-inter max-w-[360px] w-full text-bodyBlue">
          {title}
        </h2>

        {/* Project Description */}
        <p className="font-inter font-normal text-[16px] text-mainBodytext leading-[24px] tracking-[-1%]">
          {description}
        </p>

        {/* Project Stacks */}
        <div className="flex flex-wrap gap-4">
          {stacks.map((stack, index) => (
            <span
              key={index}
              className=" border border-[#D0D2D9] text-mainBodytext font-inter font-normal text-sm px-3 py-1 rounded-full"
            >
              {stack}
            </span>
          ))}
        </div>

        <button
          onClick={() => router.push(caseStudyUrl)}
          className="group mt-[40px] flex gap-[10px] justify-center items-center text-[#1E2940] font-inter font-medium border border-[#C1C7D0] px-6 py-4 rounded-full max-w-[200px] w-full h-full max-h-[50px] hover:bg-primary-dark transition"
        >
          View Case Study
          <span className="transition-transform duration-300 ease-in-out transform group-hover:rotate-[-45deg]">
            <FiArrowRight />
          </span>
        </button>
      </div>

      {/* Project Image */}
      <div className="flex-1">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="rounded-lg object-cover max-w-[600px] w-full max-"
        />
      </div>
    </div>
  );
};

export default ProjectCards;
