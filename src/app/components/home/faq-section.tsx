import React from 'react'

import Image from "next/image"

import SectionHeader from "@/app/components/home/section-header"
import Heading from "@/app/components/shared/heading"

import Add from "@/app/assets/svgs/add.svg"
import Remove from "@/app/assets/svgs/remove.svg"

const FAQSection = () => {

  const faqAccordions = [

    {
      accordionNumber: "1",
      heading: "Do you offer post-launch support?",
      paragraph: "Yes, we provide ongoing support and optimization services to ensure your digital product continues to perform at its best.",
      iconPath: Add,
      isExpanded: true,
    },

    {
      accordionNumber: "2",
      heading: "Do you work with international clients?",
      paragraph: "",
      iconPath: Remove,
      isExpanded: false,
    },

    {
      accordionNumber: "3",
      heading: "Can you scale your services as our company grows?",
      paragraph: "",
      iconPath: Remove,
      isExpanded: false,
    },

    {
      accordionNumber: "4",
      heading: "What is your pricing structure?",
      paragraph: "",
      iconPath: Remove,
      isExpanded: false,
    },

    {
      accordionNumber: "5",
      heading: "Can you help with rebranding an existing company?",
      paragraph: "",
      iconPath: Remove,
      isExpanded: false,
    },

  ]

  return (
    <section className="mb-24 sm:mb-[120px]">
      <div className="w-[90%] mx-auto sm:w-[94.24%] md:w-[96.66%]">

        <SectionHeader header="FAQ" subHeader="Got Questions? We&apos;ve Got Answers." />


        { faqAccordions.map(( faqAccordion, index ) => (
          <div key={ index } className={`${(!faqAccordion.isExpanded) && "border-b border-[#C6C6C6]"}`}>
            <div className={`rounded-3xl py-6 ${(faqAccordion.isExpanded) && "bg-[#4795FF]"} sm:py-9`}>
              <div className="w-[91.14%] mx-auto flex justify-between items-start sm:w-[93.89%] md:w-[94.82%]">

                <div className="flex gap-x-4 items-start sm:gap-x-14">

                  <div className={`w-9 h-9 rounded-full border text-base leading-4 ${(faqAccordion.isExpanded) ? "border-white text-white" : "border-[#A3A3A3] text-[#A3A3A3]"} flex justify-center items-center shrink-0`}>
                    {faqAccordion.accordionNumber}
                  </div>

                  <div>

                    <Heading as="div" className={`text-2xl leading-6 ${(faqAccordion.isExpanded) ? "text-white" : "text-[#363636]"} sm:text-[28px] sm:leading-7 md:text-[32px] md:leading-8`} text="">
                      {faqAccordion.heading}
                    </Heading>

                    <div className={`opacity-80 text-base leading-[19.2px] ${(!faqAccordion.isExpanded) ? "hidden text-[#363636]" : "text-white"} mt-4 sm:text-xl sm:leading-6`}>
                      {faqAccordion.paragraph}
                    </div>

                  </div>

                </div>

                <div className={`w-[40.9px] h-[40.9px] rounded-full ${(faqAccordion.isExpanded) ? "bg-white" : "border border-[#A3A3A3]"} flex justify-center items-center shrink-0 md:w-[56.27px] md:h-[56.27px]`}>
                  <Image
                    src={faqAccordion.iconPath}
                    width={undefined}
                    height={undefined}
                    alt=""
                    className="w-[23.37px] h-[23.37px] md:w-[32.26px] md:h-[32.26px]"
                  />
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default FAQSection
