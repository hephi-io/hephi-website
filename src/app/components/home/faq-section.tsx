"use client";

import React, { useState } from "react";

import Image from "next/image";

import SectionHeader from "@/app/components/home/section-header";
import Heading from "@/app/components/shared/heading";

import Add from "@/app/assets/svgs/add.svg";
import Remove from "@/app/assets/svgs/remove.svg";

const FAQSection = () => {
  const [accordion, setAccordion] = useState(0);

  const handleAccordion = (number: number) => {
    accordion === number ? setAccordion(0) : setAccordion(number);
  };

  const faqAccordions = [
    {
      id: 1,
      accordionNumber: "1",
      heading: "Do you offer post-launch support?",
      paragraph:
        "Yes, we do. At Hephi, we believe a successful launch is just the beginning. We offer comprehensive post-launch support, including maintenance, updates, performance monitoring, and strategic iterations to ensure your digital product continues to evolve and deliver value.",
    },

    {
      id: 2,
      accordionNumber: "2",
      heading: "Do you work with international clients?",
      paragraph:
        " Absolutely. Innovation knows no borders, and neither do we. We collaborate with clients from all over the world — whether you're a startup in Berlin or a tech enterprise in New York, we’re ready to bring your vision to life.",
    },

    {
      id: 3,
      accordionNumber: "3",
      heading: "Can you scale your services as our company grows?",
      paragraph:
        " Yes. Growth is part of the journey, and we're built to grow with you. Our solutions are scalable by design, and we can adapt our services — from product development to infrastructure — to match your evolving needs.",
    },

    {
      id: 4,
      accordionNumber: "4",
      heading: "What is your pricing structure?",
      paragraph:
        "Our pricing is tailored based on the scope, complexity, and goals of your project. We offer flexible engagement models to suit startups, scale-ups, and enterprise-level businesses. Let’s connect to find a structure that works best for you.",
    },

    {
      id: 5,
      accordionNumber: "5",
      heading: "Can you help with rebranding an existing company?",
      paragraph:
        " Definitely. Whether you're refining your identity or undergoing a full transformation, we provide strategic rebranding services that align your company’s evolution with a bold, cohesive digital presence.",
    },
  ];

  return (
    <div className="w-[90%] mx-auto sm:w-[94.24%] lg:max-w-[1391px]">
      <SectionHeader
        header="FAQ"
        subHeader="Got Questions? We've Got Answers."
      />
      {faqAccordions.map((faqAccordion, index) => (
        <div
          key={index}
          className={`${
            accordion === faqAccordion.id ? "" : "border-b border-[#C6C6C6]"
          } transition-all duration-300 ease-in-out`}
        >
          <div
            className={`rounded-3xl py-6 sm:py-9 ${
              accordion === faqAccordion.id ? "bg-[#4795FF]" : ""
            }`}
          >
            <div className="w-[91.14%] flex justify-between items-start sm:w-[93.89%] lg:w-[94.82%] mx-auto">
              <div className="flex gap-x-4 items-start sm:gap-x-14">
                <div
                  className={`w-9 h-9 rounded-full border text-base leading-4 flex justify-center items-center shrink-0 ${
                    accordion === faqAccordion.id
                      ? "border-white text-white"
                      : "border-[#A3A3A3] dark:border-[#D1D1D2] text-[#A3A3A3] dark:text-[#D1D1D2]"
                  }`}
                >
                  {faqAccordion.accordionNumber}
                </div>
                <div>
                  <Heading
                    as="div"
                    className={`text-2xl leading-6 sm:text-[28px] sm:leading-7 lg:text-[32px] lg:leading-8 ${
                      accordion === faqAccordion.id
                        ? "text-white"
                        : "text-[#363636] dark:text-white"
                    }`}
                  >
                    {faqAccordion.heading}
                  </Heading>
                  <div
                    className={`grid overflow-hidden transition duration-300 ease-in-out ${
                      accordion === faqAccordion.id
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden opacity-80 text-base leading-[19.2px] text-white sm:text-xl sm:leading-6 mt-4">
                      {faqAccordion.paragraph}
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleAccordion(faqAccordion.id)}
                className={`w-[40.9px] h-[40.9px] rounded-full flex justify-center items-center shrink-0 hover:cursor-pointer lg:w-[56.27px] lg:h-[56.27px] ${
                  accordion === faqAccordion.id
                    ? "bg-white"
                    : "border border-[#A3A3A3] dark:border-[#D1D1D2]"
                }`}
              >
                <Image
                  src={accordion === faqAccordion.id ? Add : Remove}
                  width={undefined}
                  height={undefined}
                  alt=""
                  className="w-[23.37px] h-[23.37px] lg:w-[32.26px] lg:h-[32.26px]"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
