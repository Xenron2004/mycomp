import React from "react";
import Heading from "./Heading";
import { FaFolderOpen } from "react-icons/fa6";
import projecticons from "../public/assets/images/project.svg";
import Image from "next/image";
import Link from "next/link";
import ProjectCards from "./ProjectCards";
import { motion } from "framer-motion";


const Projects = () => {

  
  // Variants for animations
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

    const projects = [
        {
          title: "Payswift - Fintech Service Platform",
          description:
            "Payswift is a fintech service platform enabling seamless money transfers and payments. Link your account in minutes, manage transactions effortlessly, and enjoy real-time tracking. With robust security and user-friendly features, handling your finances has never been smoother.",
          stacks: ["SaaS", "ReactJS", "WebApp"],
          imageUrl: "/assets/portfolio/Thumbnail_Payswift.png",
          caseStudyUrl: "/case-studies/saas-dashboard",
        },
        {
          title: "Travrip - Travel Agency Platform",
          description:
            "Travrip is a comprehensive travel agency platform where you can effortlessly plan and book trips. Create an account in minutes, explore top destinations, and secure bookings seamlessly. With personalized itineraries and real-time travel updates, enjoying stress-free adventures has never been simpler.",
          stacks: ["Fintech", "Landing Pages", "Framer"],
          imageUrl: "/assets/portfolio/Thumbnail_Travrip.jpg",
          caseStudyUrl: "/case-studies/fintech-landing",
        },
        {
          title: "FastPay - Payment Gateway Platform",
          description:
            "FastPay is a platform where you can easily link your bank account or credit card, create an account in minutes, and start making and receiving payments seamlessly. With real-time transaction tracking and secure encryption, managing your finances has never been easier.",
          stacks: ["E-Commerce", "ReactJS", "WebApp"],
          imageUrl: "/assets/portfolio/Thumbnail_FastPay.jpg",
          caseStudyUrl: "/case-studies/ecommerce-app",
        },
      ];

  return (
    <section className="flex flex-col items-start justify-center  bg-white max-w-7xl w-11/12 "
   
    >
      {/* heading text  */}

      <div className="flex flex-col gap-5  justify-normal">
        <div className="flex items-center gap-3">
          <div>
            <Image src={projecticons} alt="project icon" />
          </div>
          <p className="font-inter font-regular text-[16px] text-mainBodytext">
            Our Projects
          </p>
        </div>
      </div>
      <div className="flex max-w-7xl w-full flex-col md:flex-row   justify-between  ">
        <Heading
          heading="Our Latest cool projects"
          bodyText="We create expertly crafted solutions designed to empower clients and drive their business growth. "
        />
        <Link href="/portfolio">
          <button className="flex items-center border-2 font-inter font-medium border-[#DFDFDF] justify-center text-primary  h-[45px] w-[200px] px-4  rounded-3xl">
            Check Our Work
          </button>
        </Link>
      </div>

      {/* project cards */}
      <div className="flex mt-14 max-w-[1280px] w-full items-center justify-center flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCards
            key={index}
            title={project.title}
            description={project.description}
            stacks={project.stacks}
            imageUrl={project.imageUrl}
            caseStudyUrl={project.caseStudyUrl}
          />
        ))}
      </div>

    </section>
  );
};

export default Projects;

// Normal Smooth section

// import React from "react";
// import Heading from "./Heading";
// import projecticons from "../public/assets/images/project.svg";
// import Image from "next/image";
// import Link from "next/link";
// import ProjectCards from "./ProjectCards";
// import { motion } from "framer-motion";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Payswift - Fintech Service Platform",
//       description:
//         "Payswift is a fintech service platform enabling seamless money transfers and payments. Link your account in minutes, manage transactions effortlessly, and enjoy real-time tracking. With robust security and user-friendly features, handling your finances has never been smoother.",
//       stacks: ["SaaS", "ReactJS", "WebApp"],
//       imageUrl: "/assets/portfolio/Thumbnail_Payswift.png",
//       caseStudyUrl: "/case-studies/saas-dashboard",
//     },
//     {
//       title: "Travrip - Travel Agency Platform",
//       description:
//         "Travrip is a comprehensive travel agency platform where you can effortlessly plan and book trips. Create an account in minutes, explore top destinations, and secure bookings seamlessly. With personalized itineraries and real-time travel updates, enjoying stress-free adventures has never been simpler.",
//       stacks: ["Fintech", "Landing Pages", "Framer"],
//       imageUrl: "/assets/portfolio/Thumbnail_Travrip.jpg",
//       caseStudyUrl: "/case-studies/fintech-landing",
//     },
//     {
//       title: "FastPay - Payment Gateway Platform",
//       description:
//         "FastPay is a platform where you can easily link your bank account or credit card, create an account in minutes, and start making and receiving payments seamlessly. With real-time transaction tracking and secure encryption, managing your finances has never been easier.",
//       stacks: ["E-Commerce", "ReactJS", "WebApp"],
//       imageUrl: "/assets/portfolio/Thumbnail_FastPay.jpg",
//       caseStudyUrl: "/case-studies/ecommerce-app",
//     },
//   ];

//   // Variants for animations
//   const fadeInVariant = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section className="flex flex-col items-start justify-center bg-white max-w-7xl w-11/12">
//       {/* Heading Section */}
//       <motion.div
//         className="flex flex-col gap-5 justify-normal"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.div
//           className="flex items-center gap-3"
//           variants={fadeInVariant}
//           custom={0}
//         >
//           <div>
//             <Image src={projecticons} alt="project icon" />
//           </div>
//           <p className="font-inter font-regular text-[16px] text-mainBodytext">
//             Our Projects
//           </p>
//         </motion.div>
//         <motion.div
//           className="flex max-w-7xl w-full flex-col md:flex-row justify-between"
//           variants={fadeInVariant}
//           custom={1}
//         >
//           <Heading
//             heading="Our Latest cool projects"
//             bodyText="We create expertly crafted solutions designed to empower clients and drive their business growth. "
//           />
//           <Link href="/portfolio">
//             <button className="flex items-center border-2 font-inter font-medium border-[#DFDFDF] justify-center text-primary h-[45px] w-[200px] px-4 rounded-3xl">
//               Check Our Work
//             </button>
//           </Link>
//         </motion.div>
//       </motion.div>

//       {/* Project Cards Section */}
//       <motion.div
//         className="flex mt-14 max-w-[1280px] w-full items-center justify-center flex-col gap-8"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             variants={fadeInVariant}
//             custom={index + 2} // Delays increase with index
//           >
//             <ProjectCards
//               title={project.title}
//               description={project.description}
//               stacks={project.stacks}
//               imageUrl={project.imageUrl}
//               caseStudyUrl={project.caseStudyUrl}
//             />
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Projects;








// import React from "react";
// import Heading from "./Heading";
// import projecticons from "../public/assets/images/project.svg";
// import Image from "next/image";
// import Link from "next/link";
// import ProjectCards from "./ProjectCards";
// import { motion } from "framer-motion";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Payswift - Fintech Service Platform",
//       description:
//         "Payswift is a fintech service platform enabling seamless money transfers and payments. Link your account in minutes, manage transactions effortlessly, and enjoy real-time tracking. With robust security and user-friendly features, handling your finances has never been smoother.",
//       stacks: ["SaaS", "ReactJS", "WebApp"],
//       imageUrl: "/assets/portfolio/Thumbnail_Payswift.png",
//       caseStudyUrl: "/case-studies/saas-dashboard",
//     },
//     {
//       title: "Travrip - Travel Agency Platform",
//       description:
//         "Travrip is a comprehensive travel agency platform where you can effortlessly plan and book trips. Create an account in minutes, explore top destinations, and secure bookings seamlessly. With personalized itineraries and real-time travel updates, enjoying stress-free adventures has never been simpler.",
//       stacks: ["Fintech", "Landing Pages", "Framer"],
//       imageUrl: "/assets/portfolio/Thumbnail_Travrip.jpg",
//       caseStudyUrl: "/case-studies/fintech-landing",
//     },
//     {
//       title: "FastPay - Payment Gateway Platform",
//       description:
//         "FastPay is a platform where you can easily link your bank account or credit card, create an account in minutes, and start making and receiving payments seamlessly. With real-time transaction tracking and secure encryption, managing your finances has never been easier.",
//       stacks: ["E-Commerce", "ReactJS", "WebApp"],
//       imageUrl: "/assets/portfolio/Thumbnail_FastPay.jpg",
//       caseStudyUrl: "/case-studies/ecommerce-app",
//     },
//   ];

//   // Variants for animations
//   const fadeInVariant = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section className="flex flex-col items-start justify-center bg-white max-w-7xl w-11/12">
//       {/* Heading Section */}
//       <motion.div
//         className="flex flex-col gap-5 justify-normal"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.div
//           className="flex items-center gap-3"
//           variants={fadeInVariant}
//           custom={0}
//         >
//           <div>
//             <Image src={projecticons} alt="project icon" />
//           </div>
//           <p className="font-inter font-regular text-[16px] text-mainBodytext">
//             Our Projects
//           </p>
//         </motion.div>
//         <motion.div
//           className="flex max-w-7xl w-full flex-col md:flex-row justify-between "
//           variants={fadeInVariant}
//           custom={1}
//         >
//           <div className="flex max-w-7xl w-full flex-col md:flex-row justify-between" >

          
//           <Heading
//             heading="Our Latest Cool Projects"
//             bodyText="We create expertly crafted solutions designed to empower clients and drive their business growth."
//           />

//           <Link href="/portfolio">
//             <button className="flex items-center border-2 font-inter font-medium border-[#DFDFDF] justify-center text-primary h-[45px] w-[200px] px-4 rounded-3xl">
//               Check Our Work
//             </button>
//           </Link>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Project Cards Section */}
//       <motion.div
//         className="flex mt-14 max-w-[1280px] w-full items-center justify-center flex-col gap-8"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             variants={fadeInVariant}
//             custom={index + 2} // Delays increase with index
//           >
//             <ProjectCards
//               title={project.title}
//               description={project.description}
//               stacks={project.stacks}
//               imageUrl={project.imageUrl}
//               caseStudyUrl={project.caseStudyUrl}
//             />
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Projects;
