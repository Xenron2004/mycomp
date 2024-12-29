import React from "react";
import { BiDollarCircle, BiSolidDollarCircle } from "react-icons/bi";
import Image from "next/image";
import Heading from "@/components/Heading";
import Link from "next/link";

const Pricing = () => {
  return (
    <section className="  flex flex-col mt-[-100px]  w-full h-auto items-center justify-center py-[80px]">
      {/* heading text  */}
      <div className="flex flex-col  max-w-7xl w-11/12 justify-center ">
        <div className="flex flex-col gap-5  justify-normal">
          <div className="flex items-center gap-2">
            <div>
              <BiSolidDollarCircle size={22} className="text-mainBodytext" />
            </div>
            <p className="font-inter font-regular text-[16px] text-mainBodytext">
              Our Pricings
            </p>
          </div>
        </div>
        <div className="flex max-w-7xl w-full gap-y-8 flex-col md:flex-row   justify-between  ">
          <Heading
            heading="Simple, Transparent Pricing"
            bodyText="We’ll bring your project to life in a way that fits your budget and exceeds expectations. "
          />
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <button className="flex items-center  font-inter font-medium justify-center text-white h-[50px] w-full md:w-[216px] bg-primary rounded-full">
              Free Strategy Session
            </button>
            <button className="md:w-[130px] font-inter h-[45px] border border-[#DFDFDF]  font-medium flex items-center justify-center text-primary w-full rounded-3xl">
              Let's Talk!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
