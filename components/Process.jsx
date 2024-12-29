import React from "react";
import process from "../public/assets/images/process.svg";
import Image from "next/image";
import Heading from "./Heading";
import ProcessCard from "./ProcessCard";
import { AiOutlineFile } from "react-icons/ai";
import { MdAssignmentTurnedIn  } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoIosStats } from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";


const Process = () => {

  const processSteps = [
    {
      icon: <MdAssignmentTurnedIn  size={24} className="text-mainBodytext group-hover:text-white" />,
      heading: "1.Fill in the Brief Template",
      bodyText: "We ask you to provide a brief description of the project you want. Include information about the type of project, the ultimate goal it is intended to achieve, and the context in which the project will operate.",
      iconBgColor: "bg-dark-60",
    },
    {
      icon: <FaLightbulb  size={24} className="text-mainBodytext group-hover:text-white" />,
      heading: "2.Start Understanding",
      bodyText: "We listen attentively, delve into the details, and grasp the essence of your vision. Our goal is to bring your ideas to life and exceed your expectations.",
      iconBgColor: "bg-dark-60",
    },
    {
      icon: <FaFileInvoiceDollar  size={24} className="text-mainBodytext group-hover:text-white" />,
      heading: "3.Sending Timeline & Invoice",
      bodyText: "Once the invoice is settled, we kickstart our timeline effectiveness. Rest assured, your project will be in good hands as we prioritize efficiency every step of the way.",
      iconBgColor: "bg-dark-60",
    },
    {
      icon: <IoIosStats size={24} className="text-mainBodytext group-hover:text-white" />,
      heading: "4.Get Daily Progress Updates",
      bodyText: "We keep you informed about every crucial detail, ensuring transparency and providing you with a clear picture of the project's progress.",
      iconBgColor: "bg-dark-60",
    },
    {
      icon: <IoMdDoneAll  size={24} className="text-mainBodytext group-hover:text-white" />,
      heading: "5.Project Completed",
      bodyText: "We keep you informed about every crucial detail, ensuring transparency and providing you with a clear picture of the project's completion.",
      iconBgColor: "bg-dark-60",
    },
  ];

  return (
    <section id="process" className=" bg-dark  flex flex-col  w-full h-auto items-center justify-center py-[60px] ">
      <div className="flex flex-col gap-5 max-w-7xl w-11/12 justify-center ">
        <div className="flex items-center gap-3">
          <div>
            <Image src={process} alt="project icon" />
          </div>
          <p className="font-inter font-regular text-[16px] text-mainBodytext">
            Our Process
          </p>
        </div>
      </div>
      <div className="flex max-w-7xl w-11/12  justify-between  ">
        <Heading
          heading="We Believe in Process.It's a way to succeed"
          bodyText="We provide a streamlined process with tailored services, including design, development, and digital solutions, crafted to elevate your business and achieve your goals."
          type="light"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-11/12 mt-14  justify-between  ">
      {processSteps.map((step, index) => (
        <ProcessCard
          key={index}
          icon={step.icon}
          heading={step.heading}
          bodyText={step.bodyText}
          iconBgColor={step.iconBgColor}
        />
      ))}
    </div>
    </section>
  );
};

export default Process;
