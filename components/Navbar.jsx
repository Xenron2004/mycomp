// import React from "react";
// import Image from "next/image";
// import logo from "../public/assets/images/Reevij_logo.svg";
// import Link from "next/link";
// const Navbar = () => {
//   return (
//     <div className="bg-[#0D0D12] flex items-center border-b border-b-[#403E3E] justify-center ">

//     <div className="w-full  flex max-w-7xl h-[84px]  items-center justify-between ">
//       {/* logo */}
//       <Link href="/home" className="">
//         <Image src={logo} width={100} height={80} alt="logo" />
//       </Link>

//       {/* links */}
//       <div className="flex text-white items-center justify-between  gap-5 ">
//         <div className="font-medium font-inter text-white text-base leading-tight">
//           Home
//         </div>
//         <div className="font-medium font-inter text-white text-base leading-tight">
//           Solutions
//         </div>
//         <Link href="/portfolio" className="font-medium  font-inter  text-white text-base leading-tight">
//           Portfolio
//         </Link>
//         <Link href="/pricings" className="font-medium font-inter  text-white text-base leading-tight">
//           Pricings
//         </Link>
//         <Link  href="/about" className="font-medium font-inter  text-white text-base leading-tight">
//           About
//         </Link>
//       </div>
//       {/* Buttons */}
//       <div className="flex  items-center justify-between gap-4 ">
//         <button className="max-w-[130px] font-inter h-[45px] bg-primary font-medium  flex items-center justify-center text-white w-full py-4 px-6 rounded-3xl ">
//           Let's Talk!
//         </button>
//         <button className="flex items-center  border-2 font-inter font-medium border-[#616266] justify-center text-white  h-[45px] w-[216px]  rounded-full">Free Strategy Session</button>
//         {/* <ModeToggle/> */}
//       </div>
//     </div>

//     </div>
//   );
// };

// export default Navbar;








"use client"
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/assets/images/Reevij_logo.svg";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#0D0D12]  flex items-center border-b border-b-[#403E3E] justify-center">
      <div className="w-full flex max-w-7xl h-[84px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/home" className="flex items-center">
          <Image src={logo} width={100} height={80} alt="logo" />
        </Link>

        {/* Links for large screens */}
        <div className="hidden lg:flex text-white items-center justify-between gap-5">
          <Link href="/home" className="font-medium font-inter text-white text-base leading-tight">
            Home
          </Link>
          <Link href="/solutions" className="font-medium font-inter text-white text-base leading-tight">
            Solutions
          </Link>
          <Link href="/portfolio" className="font-medium font-inter text-white text-base leading-tight">
            Portfolio
          </Link>
          <Link href="/pricings" className="font-medium font-inter text-white text-base leading-tight">
            Pricings
          </Link>
          <Link href="/about" className="font-medium font-inter text-white text-base leading-tight">
            About
          </Link>
        </div>

        {/* Buttons for large screens */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          <button className="max-w-[130px] font-inter h-[45px] bg-primary font-medium flex items-center justify-center text-white w-full py-4 px-6 rounded-3xl">
            Let's Talk!
          </button>
          <button className="flex items-center border-2 font-inter font-medium border-[#616266] justify-center text-white h-[45px] w-[216px] rounded-full">
            Free Strategy Session
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:hidden absolute top-0 left-0 right-0 bottom-0 bg-[#0D0D12] flex-col items-center justify-center gap-8 p-6 transition-all h-screen ease-in-out duration-500`}
      >
        {/* Logo and Close Button */}
        <div className="absolute top-4 left-4 flex items-center gap-4">
          <Link href="/home" className="flex items-center">
            <Image src={logo} width={80} height={60} alt="logo" />
          </Link>
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="text-white text-lg font-medium" onClick={toggleMenu}>
          <Link href="/home">Home</Link>
        </div>
        <div className="text-white text-lg font-medium" onClick={toggleMenu}>
          <Link href="/solutions">Solutions</Link>
        </div>
        <div className="text-white text-lg font-medium" onClick={toggleMenu}>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div className="text-white text-lg font-medium" onClick={toggleMenu}>
          <Link href="/pricings">Pricings</Link>
        </div>
        <div className="text-white text-lg font-medium" onClick={toggleMenu}>
          <Link href="/about">About</Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex flex-col gap-4 items-center">
          <button className="max-w-[130px] font-inter h-[45px] bg-primary font-medium flex items-center justify-center text-white w-full py-4 px-6 rounded-3xl">
            Let's Talk!
          </button>
          <button className="flex items-center border-2 font-inter font-medium border-[#616266] justify-center text-white h-[45px] w-[216px] rounded-full">
            Free Strategy Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
