import React from "react";
import projecticons from "../../../public/assets/images/project.svg";
import Image from "next/image";
import Heading from "../../../components/Heading";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import mlservice from "../../../public/assets/portfolio/mlservice.webp";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We specialize in crafting tailored web development solutions that bring designs to life as fully functional, responsive websites. By seamlessly transforming creative concepts into reality, we ensure every detail is implemented with precision. To guarantee flawless performance, rigorous QA testing is conducted to eliminate errors and deliver optimal user experiences.",
      stacks: [
        "MERN",
        "Frontend Development",
        "Framer",
        "Backend Development",
        "Wordpress",
        "Content Management Systems",
        "WebFlow",
        "Website Maintainance & Support",
      ],
      imageUrl: "/assets/portfolio/webservice.webp",
      serviceUrl: "/case-study/web-development",
    },
    {
      title: "UI/UX Design",
      description: "Creating interfaces and improving user experience through research played a key role in achieving outstanding results in creative projects.",
      stacks: ["Website Design", "App Design", "Dashboard Design", "User Research", "Wireframing", "Prototyping", "Mockups & Branding", "Design Systems"],
      imageUrl: "/assets/portfolio/uiservice.webp",
      serviceUrl: "/case-study/ui-ux-design",
    },
    {
      title: "App Development",
      description: "We develop dynamic, user-centric mobile and web applications tailored to diverse needs. By transforming ideas into scalable apps, we ensure seamless functionality and engaging user experiences. Each app is built with precision, thoroughly tested, and optimized for cross-platform reliability.",
      stacks: ["Native Mobile App Development (Android, iOS)", "Hybrid Apps (React Native, Flutter)", "App Maintenance and Updates"],
      imageUrl: "/assets/portfolio/Thumbnail_Fastpay.jpg",
      serviceUrl: "/case-study/app-development",
    },
    
    {
        title: "AI/ML Solutions",
        description: "We develop dynamic, user-centric mobile and web applications tailored to diverse needs. By transforming ideas into scalable apps, we ensure seamless functionality and engaging user experiences. Each app is built with precision, thoroughly tested, and optimized for cross-platform reliability.",
        stacks: ["Machine Learning Development", "Natural Language Processing", "Predictive Analytics", "AI Chatbots", "Custom AI/ML Solutions"],
        imageUrl: "/assets/portfolio/mlservice.webp",
        serviceUrl: "/case-study/app-development",
      },
      {
        title: "SEO Services",
        description: "We provide comprehensive SEO services designed to improve your website's visibility, drive organic traffic, and enhance search engine rankings. By using the latest SEO strategies and techniques, we help businesses rank higher in search engines, ensuring better online visibility and user engagement. Our approach focuses on technical optimization, content strategy, and backlink development to achieve long-term SEO success.",
        stacks: ["On-Page SEO", "Off-Page SEO", "Technical SEO","SEO Audits"],
        imageUrl: "/assets/portfolio/Thumbnail_Fastpay.jpg",
        serviceUrl: "/case-study/app-development",
      },
    
  ];

  return (
    <section className="bg-[#f8fafb]  flex flex-col mt-[-100px]  w-full h-auto items-center justify-center py-[80px]">
      {/* heading text  */}
      <div className="flex flex-col  max-w-7xl w-11/12 justify-center ">
        <div className="flex flex-col gap-5  justify-normal">
          <div className="flex items-center gap-3">
            <div>
              <Image src={projecticons} alt="project icon" />
            </div>
            <p className="font-inter font-regular text-[16px] text-mainBodytext">
              Our Services
            </p>
          </div>
        </div>
        <div className="flex max-w-7xl w-full flex-col md:flex-row   justify-between  ">
          <Heading
            heading="Services we provide"
            bodyText="We provide tailored services, including design, development, and digital solutions, crafted to elevate your business and achieve your goals. "
          />
          <Link href="/portfolio">
            <button className="flex items-center border-2 font-inter font-medium border-[#DFDFDF] justify-center text-primary  h-[45px] w-[200px] px-4  rounded-3xl">
              View all Services
            </button>
          </Link>
        </div>
      </div>
      <div className="flex mt-14 max-w-[1280px] w-11/12 items-center justify-center flex-col gap-20">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            stacks={service.stacks}
            imageUrl={service.imageUrl}
            caseStudyUrl={service.serviceUrl}
            reverse={index % 2 === 1}
            />
        ))}
      </div>
    </section>
  );
};

export default Services;
