// import React from "react";
// import Image from "next/image";
// import logo from "../public/assets/images/Reevij_logo.svg";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0D0D12] flex items-center justify-center">
//       <div className="flex max-w-7xl py-15 w-11/12 items-start justify-between">
//         {/* Footer Logo and Description */}
//         <div className="flex flex-col items-start gap-[30px]">
//           <Image src={logo} alt="project icon" />
//           <p className="text-white font-inter font-medium text-[18px] max-w-[262px] w-full">
//             Designing aesthetically pleasing user-focused digital experiences
//           </p>
//         </div>

//         {/* Footer Links Section */}
//         <div className="flex items-start gap-[60px]">
//           {/* Column 1 */}
//           <div className="flex flex-col gap-[20px]">
//             <h2 className="text-white font-inter font-medium text-[18px]">
//               Explore
//             </h2>
//             <ul className="flex flex-col gap-[10px]">
//               <li className="text-white font-inter font-medium text-[16px]">
//                 Home
//               </li>
//               <li className="text-white font-inter font-medium text-[16px]">
//                 About Us
//               </li>
//               <li className="text-white font-inter font-medium text-[16px]">
//                 Services
//               </li>
//               <li className="text-white font-inter font-medium text-[16px]">
//                 Contact Us
//               </li>
//             </ul>
//           </div>

//           {/* Column 2 */}
//           <div className="flex flex-col gap-[20px]">
//             <h2 className="text-white font-inter font-medium text-[18px]">
//               Company
//             </h2>
//             <ul className="flex flex-col gap-[10px]">
//               <li className="text-white font-inter font-medium text-[16px]">
//                 Our Team
//               </li>
//               <li className="text-white font-inter font-medium text-[16px]">
//                 Careers
//               </li>
//               <li className="text-white font-inter font-medium text-[16px]">
//                 Blog
//               </li>
//               <li className="text-white font-inter font-medium text-[16px]">
//                 FAQ
//               </li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div className="flex flex-col gap-[20px]">
//             <h2 className="text-white font-inter font-medium text-[18px]">
//               Support
//             </h2>
//             <ul className="flex flex-col gap-[10px]">
//               <li className="text-white font-inter font-medium text-[16px]">
//                 Help Center
//               </li>
//               <li className="text-white font-inter font-medium text-[16px]">
//                 Privacy Policy
//               </li>
//               <li className="text-white font-inter font-medium text-[16px]">
//                 Terms of Service
//               </li>
//               <li className="text-white font-inter font-medium text-[16px]">
//                 Contact Support
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Logo from "../public/assets/images/Reevij_logo.svg";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
  FaInstagram,
  FaDribbble,
  FaBehance
} from "react-icons/fa";
import Bg from "./Bg";

const Footer = () => {
  return (
    <footer className="flex items-start  p-5 justify-center bg-dark">
      <div className="flex flex-wrap  max-w-[1280px] items-start  gap-8  w-11/12 py-5 px-2 justify-between">
        <div className="flex flex-col gap-2 ">
          {/* Logo section */}

          <Image src={Logo} width={100} height={80} alt="project icon" />
          <div className="font-inter text-white  font-medium text-[18px] max-w-[270px] w-full">
            Designing aesthetically pleasing user-focused digital experiences.
          </div>
        </div>

        <div className="flex flex-wrap   max-w-[500px] w-full    items-center justify-between">
          {/* Links */}
          <div className="flex flex-col ">
            {/* company */}
            <h3 className="text-white font-medium text-[17px] font-inter  mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-center font-inter font-medium text-gray-600">
              {" "}
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-white text-mainBodytext text-start text-[16px] font-inter font-medium"
                >
                  About Us
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="hover:text-white text-start text-mainBodytext text-[16px] font-inter font-medium"
                >
                  Careers
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="hover:text-white text-start text-mainBodytext text-[16px] font-inter font-medium"
                >
                  Press
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="hover:text-white text-start text-mainBodytext text-[16px] font-inter font-medium"
                >
                  Blog
                </a>
              </li>{" "}
            </ul>
          </div>
          <div>
            {/* resources */}
            <h3 className="text-white   font-semibold text-start mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-start text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-white text-start text-mainBodytext text-[16px] font-inter font-medium"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-start text-mainBodytext text-[16px] font-inter font-medium"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-start text-mainBodytext text-[16px] font-inter font-medium"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-start text-mainBodytext text-[16px] font-inter font-medium"
                >
                  Integration Partners
                </a>
              </li>
            </ul>
          </div>
          <div>
            {/* support */}
            <h3 className="text-white font-inter text-[17px]  text-start font-medium  mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-start text-gray-600 ">
              <li>
                <a
                  href="#"
                  className="hover:text-white text-start text-mainBodytext text-[16px] font-inter font-medium"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-start text-mainBodytext text-[16px] font-inter font-medium"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-start text-mainBodytext text-[16px] font-inter font-medium"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-start text-mainBodytext text-[16px] font-inter font-medium"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col max-w-[162px] w-full items-start">
          {/* social Links */}
          <div className="text-white font-inter text-[17px]  text-start font-medium  mb-3">
            Social Links
          </div>
          <div className="flex flex-row  gap-4 justify-between ">
            {/* <FaFacebookF className="hover:text-[#4A91F7] text-[#1877F2] cursor-pointer" />
            <FaDribbble className="hover:text-[#FF70A6]  text-[#EA4C89] cursor-pointer" />
            <FaGithub className="hover:[#A5A5A5] text-[#FFFFFF] cursor-pointer" />
            < FaBehance className="hover:text-[#5A8EFF] text-[#1769FF] cursor-pointer" />
            <FaInstagram className="hover:text-[#FF709E] text-[#E1306C] cursor-pointer" /> */}
            <FaFacebookF className="hover:text-[#4A91F7] text-mainBodytext cursor-pointer" />
            <FaDribbble className="hover:text-[#FF70A6]  text-mainBodytext cursor-pointer" />
            <FaGithub className="hover:text-[#A5A5A5] text-mainBodytext cursor-pointer" />
            < FaBehance className="hover:text-[#5A8EFF] text-mainBodytext cursor-pointer" />
            <FaInstagram className="hover:text-[#FF709E] text-mainBodytext cursor-pointer" /> 
          </div>
        </div>
        <Bg />
      </div>
    </footer>
  );
};

export default Footer;
