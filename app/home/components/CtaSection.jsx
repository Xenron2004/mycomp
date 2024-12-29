import React from "react";

const CtaSection = () => {
  return (
    <section className="  flex flex-col bg-dark gap-7  w-full h-auto items-center justify-center py-[80px]">
      <h2 className="text-white font-inter font-semibold tracking-[-2%] text-[40px] max-w-[900px] w-full text-center">
        Looking for a Design and Development Partner? Let's Create Together
      </h2>
      <p className="text-white font-inter font-regular text-[20px] max-w-[900px] w-full text-center">
        Collaborate with us to create exceptional digital solutions tailored to
        your needs.
      </p>
        <button className="flex items-center text-[16px] justify-center text-white font-inter font-medium bg-primary h-[50px] w-[200px] rounded-full">
            Let's Talk!   
            </button>
    </section>
  );
};

export default CtaSection;
