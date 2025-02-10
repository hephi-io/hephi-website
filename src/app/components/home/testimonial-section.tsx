import React from "react";

import Image from "next/image";

import SectionHeader from "@/app/components/home/section-header";

import ChevronBack from "@/app/assets/svgs/chevron-back.svg";
import ChevronForward from "@/app/assets/svgs/chevron-forward.svg";

const TestimonialSection = () => {
  return (
    <section className="mb-24 sm:mb-[120px] outline outline-1">
      <section className="w-[90%] mx-auto sm:w-[94.24%] md:w-[96.66%]">
        <SectionHeader
          header="TESTIMONIAL"
          subHeader="What Some of Our Clients Say"
        />
      </section>

      {/* <section className="relative mt-10 sm:mt-20">
        <section className="absolute bottom-0 left-[25%] flex gap-x-6 items-center">
          <div className="w-[42px] h-[42px] rounded-full border border-[#C6C6C6] flex justify-center items-center">
            <Image src={ChevronBack} width={25.2} height={25.2} alt="" />
          </div>

          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="w-[42px] h-[42px] rounded-full border border-[#C6C6C6] flex justify-center items-center">
            <Image src={ChevronForward} width={25.2} height={25.2} alt="" />
          </div>
        </section>
      </section> */}
    </section>
  );
};

export default TestimonialSection;
