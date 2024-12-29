"use client";

// import React from "react";
// import Image from "next/image";

// const SlideCard = ({ images }) => {
//   return (
//     <div className="flex flex-col w-screen  overflow-hidden   py-10">
//       {/* Upper Row - Slides Right */}
//       <div className="flex w-screen animate-continuousSlideRight">
//         {[...images, ...images].map((image, index) => (
//           <div
//             key={`upper-${index}`}
//             className="flex-shrink-0 w-[450px] h-[315px] mx-2"
//           >
//             <Image
//               src={image}
//               alt={`Portfolio Image ${index + 1}`}
//               width={450}
//               height={315}
//               className="rounded-lg"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Lower Row - Slides Left */}
//       <div className="flex w-full animate-continuousSlideLeft mt-8">
//         {[...images, ...images].map((image, index) => (
//           <div
//             key={`lower-${index}`}
//             className="flex-shrink-0 w-full max-w-[450px] h-auto max-h-[315px] mx-2"
//           >
//             <Image
//               src={image}
//               alt={`Portfolio Image ${index + 1}`}
//               width={450}
//               height={315}
//               className="rounded-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SlideCard;

import React from "react";
import Image from "next/image";

const SlideCard = ({ images }) => {
  return (
    <div className="relative w-full  overflow-hidden py-10">
      {/* Upper Row - Infinite Scroll to the Right */}
      <div className="w-full gap-x-8 inline-flex flex-nowrap">
        <ul className="flex items-center gap-x-8 justify-center  animate-slideRight">
          {images.map((image, index) => (
            <li
              key={`upper-${index}`}
              className="flex-shrink-0 transition-transform duration-300 transform hover:scale-105 w-[450px] h-[315px]"
            >
              <Image
                src={image}
                alt={`Portfolio Image ${index + 1}`}
                width={450}
                height={315}
                className=""
              />
            </li>
          ))}
        </ul>

        {/* Duplicate list for seamless infinite scroll */}
        <ul
          className="flex items-center gap-x-8 justify-center animate-slideRight"
          aria-hidden="true"
        >
          {images.map((image, index) => (
            <li
              key={`upper-duplicate-${index}`}
              className="flex-shrink-0 transition-transform duration-300 transform hover:scale-105 w-[450px] h-[315px]"
            >
              <Image
                src={image}
                alt={`Portfolio Image Duplicate ${index + 1}`}
                width={450}
                height={315}
                className="mx-auto"
              />
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default SlideCard;
