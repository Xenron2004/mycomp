// import React from "react";

// const Heading = ({ iconText, heading, bodyText, icon, iconAlt }) => {
//   return (
//     <div className="flex flex-col  items-start gap-4 text-start">

//       {/* Heading */}
//       <h2 className="text-[52px] max-w-[730px] w-full font-bold font-inter text-dark">{heading}</h2>

//       {/* Body Text */}
//       <p className="text-[20px] font-regular max-w-[550px] w-11/12 font-inter text-mainBodytext">{bodyText}</p>
//     </div>
//   );
// };

// export default Heading;





import React from "react";

const Heading = ({ 
  iconText, 
  heading, 
  bodyText, 
  icon, 
  iconAlt, 
  type = "dark" // Default type is "dark"
}) => {
  // Determine the class names based on the type
  const headingClass = type === "dark" 
    ? "text-dark" 
    : "text-white";


  
  const bodyTextClass = type === "dark" 
    ? "text-mainBodytext" 
    : "text-mainBodytext";

  return (
    <div className="flex flex-col items-start gap-4 text-start">
      {/* Heading */}
      <h2 className={`text-[52px] max-w-[730px] w-full font-semibold font-inter ${headingClass}`}>
        {heading}
      </h2>

      {/* Body Text */}
      <p className={`text-[20px] font-regular max-w-[550px] w-11/12 font-inter ${bodyTextClass}`}>
        {bodyText}
      </p>
    </div>
  );
};

export default Heading;
