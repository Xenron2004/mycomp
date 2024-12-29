import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative border-[1px] border-[#DFDFDF] hover:border-none rounded-[12px] w-11/12  max-w-[1200px]  overflow-hidden"
      onClick={toggleOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Question Button */}
      <button
        className="relative flex items-start gap-2 justify-between w-full px-4 py-5 text-left bg-white hover:bg-[#F0F7FF] transition-colors duration-300 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-[20px] font-inter font-regular text-primary">
          {question}
        </span>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <FaChevronDown className="text-mainBodytext hover:text-primary" />
        </div>
      </button>

      {/* Animated Answer Section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ maxHeight: isOpen ? "500px" : "0" }}
      >
        <div className="px-4 py-3 bg-[#F0F7FF] text-mainBodytext">
          <div className="space-y-2 font-inter font-regular text-[17px] leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
