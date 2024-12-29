import React from "react";
// import projecticons from '../../../public/assets/images/projecticons.svg'
import Heading from "@/components/Heading";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import FaqCard from "./FaqCard";

const FAQs = () => {
  const faqData = [
    {
      question: "Is there a maximum number of requests i can make?",
      answer:
        "Don't, you can add an unlimited number of design requests to your queue, and they will be delivered sequentially, one at a time.",
    },
    {
      question: "What is the expected timeframe for me to receive my designs?",
      answer:
        "A single mobile UI screen usually takes a day or less, but dashboards and landing pages can take three to five days each. Most requests are finished in five days or less on average, but complex ones may take longer. For large projects like full app or website design and development, it can take several months.",
    },
    {
      question: "What If I'm not satisfied with the design?",
      answer:
        "No need to worry! We're here to turn your design idea into reality. We start with a wireframe, and if you're not happy with it initially, we'll keep revising it until it meets your approval before moving on to the next stage. This process applies to each stage of the design, and we won't proceed without your consent. We'll always ensure we're on the same page throughout the design process.",
    },
    {
      question: "What sets Reevij apart from the rest?",
      answer:
        "Wonderful question! To begin, the annual cost of employing a full-time senior-level designer now exceeds $70,000, and that's before considering benefits (and it can be tough to find an available one). Additionally, you may not always have a steady stream of work to keep them occupied, leading to payments for unutilized time. With our customized plan, you can adjust your subscription frequency to align with your workload, guaranteeing that you're only paying for your designer when you have tasks ready for them.",
    },
  ];

  return (
    <section className="  flex flex-col mt-[-100px]  w-full h-auto items-center justify-start py-[80px]">
      {/* heading text  */}
      <div className="flex flex-col  max-w-7xl w-11/12 justify-center ">
        <div className="flex flex-col gap-5  justify-normal">
          <div className="flex items-center gap-3">
            <div>
              <HiQuestionMarkCircle size={22} className="text-mainBodytext" />
            </div>
            <p className="font-inter font-regular text-[16px] text-mainBodytext">
              FAQs
            </p>
          </div>
        </div>
        <div className="flex max-w-7xl w-full flex-col md:flex-row   justify-between  ">
          <Heading
            heading="Answer to your questions, Before you ask"
            bodyText="We’ll bring your project to life in a way that fits your budget and exceeds expectations. "
          />
        </div>
      </div>
      <div className="flex mt-14 max-w-[1280px] w-full items-start justify-center flex-col gap-5">
         
         <div className="flex flex-col group-hover:bg-[#F0F7FF] items-center gap-4">
        {faqData.map((faq, index) => (
          <FaqCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default FAQs;
