
import React from "react";

const ProcessCard = ({ icon, heading, bodyText, iconBgColor = "bg-mainBodytext" }) => {
  return (
    <div className="flex flex-col items-start gap-4 text-start w-full p-6 max-w-[413px] h-auto max-h-[311px]  bg-bgCard transition-all duration-300 hover:bg-blue-500 hover:text-white group">
      {/* Icon Container */}
      <div
        className={`w-12 h-12 ${iconBgColor} flex items-center justify-center rounded-full transition-all duration-0`}
      >
        {icon}
      </div>

      {/* Heading */}
      <h3 className="text-[26px] text-white font-bold font-inter">{heading}</h3>

      {/* Body Text */}
      <p className="text-[17px] text-mainBodytext group-hover:text-white font-regular font-inter">
        {bodyText}
      </p>
    </div>
  );
};

export default ProcessCard;
