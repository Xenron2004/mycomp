// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { FiArrowRight } from "react-icons/fi";

// const ServiceCard = ({
//   title,
//   description,
//   stacks,
//   imageUrl,
//   caseStudyUrl,
// }) => {
// const router = useRouter();

//   return (
//     <div className="flex flex-col lg:flex-row transition-all duration-300 max-w-7xl w-full ease-in-out items-center justify-between  ">
//       {/* Project Details */}
//       <div className="flex max-w-[543px] w-full flex-col gap-6 ">
//         {/* Project Title */}
//         <h2 className="text-[28px] font-semibold font-inter max-w-[360px] w-full text-bodyBlue">
//           {title}
//         </h2>

//         {/* Project Description */}
//         <p className="font-inter max-w-[543px] w-full font-normal text-[16px] text-mainBodytext leading-[24px] tracking-[-1%]">
//           {description}
//         </p>

//         {/* How Do We Help Section */}
//         <p className="text-[26px] font-semibold font-inter text-dark">
//           How do we help
//         </p>

//         {/* Project Stacks */}

//         <div className="flex max-w-[526px] w-full flex-wrap gap-x-4 gap-y-8">
//           {stacks.map((stack, index) => (
//             <div
//               key={index}
//               className="flex gap-2 items-center w-[calc(50%-8px)]" // Adjusts for 4px gap (half of 8px total gap)
//             >
//               <div className="w-[18px] h-[1px] bg-dark"></div>
//               <div className="text-dark font-inter font-regular tracking-[-2%] text-[16px]">
//                 {stack}
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={() => router.push(caseStudyUrl)}
//           className="group mt-[40px] flex gap-[10px] justify-center items-center text-[#1E2940] font-inter font-medium border border-[#C1C7D0] px-6 py-4 rounded-full max-w-[200px] w-full h-full max-h-[50px] hover:bg-primary-dark transition"
//         >
//           View Services
//           <span className="transition-transform duration-300 ease-in-out transform group-hover:rotate-[-45deg]">
//             <FiArrowRight />
//           </span>
//         </button>
//       </div>

//       {/* Project Image */}
//       <div className="">
//         <Image
//           src={imageUrl}
//           alt={title}
//           width={600}
//           height={400}
//           className="rounded-lg object-cover max-w-[600px] w-full h-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

const ServiceCard = ({
  title,
  description,
  stacks,
  imageUrl,
  serviceUrl,
  reverse = false, // Add reverse prop
}) => {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col lg:flex-row transition-all duration-300 max-w-7xl w-full ease-in-out items-center justify-between ${
        reverse ? "lg:flex-row-reverse" : ""
      }`} // Apply reverse class conditionally
    >
      {/* Project Details */}
      <div className="flex max-w-[543px] w-full flex-col gap-6">
        {/* Project Title */}
        <h2 className="text-[28px] font-semibold font-inter max-w-[360px] w-full text-bodyBlue">
          {title}
        </h2>

        {/* Project Description */}
        <p className="font-inter max-w-[543px] w-full font-normal text-[16px] text-mainBodytext leading-[24px] tracking-[-1%]">
          {description}
        </p>

        {/* How Do We Help Section */}
        <p className="text-[26px] font-semibold font-inter text-dark">
          How do we help
        </p>

        {/* Project Stacks */}
        <div className="flex max-w-[526px] w-full flex-wrap gap-x-3 gap-y-8">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="flex gap-2 items-center w-[calc(50%-8px)]" // Adjusts for 4px gap (half of 8px total gap)
            >
              <div className="w-[18px] h-[1px] bg-dark"></div>
              <div className="text-dark font-inter font-regular tracking-[-2%] text-[16px]">
                {stack}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push(serviceUrl)}
          className="group mt-[40px] flex gap-[10px] justify-center items-center text-primary font-inter font-medium border border-[#C1C7D0] px-6 py-4 rounded-full max-w-[200px] w-full h-full max-h-[50px] hover:bg-primary-dark transition"
        >
          View Services
          <span className="transition-transform duration-300 ease-in-out transform group-hover:rotate-[-45deg]">
            <FiArrowRight />
          </span>
        </button>
      </div>

      {/* Project Image */}
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="rounded-lg object-cover  w-full h-full"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
