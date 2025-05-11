import React from "react";

import Image from "next/image";

import Heading from "@/app/components/shared/heading";

import Arrow from "@/app/assets/svgs/arrow-forward.svg";

import PictureThree from "@/app/assets/jpegs/phones.jpg";
import PictureFour from "@/app/assets/jpegs/picka.jpg";
import PictureFive from "@/app/assets/jpegs/web-dev.jpg";
import PictureSix from "@/app/assets/jpegs/glasses-girl.jpg";

const ServicesSection = () => {
  const serviceCards = [
    {
      picturePath: PictureThree,
      heading: "Product Design",
      copy: "Turning ideas into innovative, user-centered digital products.",
    },
    {
      picturePath: PictureFour,
      heading: "Brand Identity Design",
      copy: "Crafting bold, unforgettable brands that speak your story.",
    },
    {
      picturePath: PictureFive,
      heading: "Web Development",
      copy: "Building sleek, high-performance websites that move fast and scale smart.",
    },
    {
      picturePath: PictureSix,
      heading: "Talent Outsourcing",
      copy: "Connecting you with top-tier talent to power your next big move.",
    },
  ];

  return (
    <section className="mb-24 sm:mb-[120px]">
      <div className="w-[90%] mx-auto sm:w-[94.24%] lg:max-w-[1391px]">
        <div className="mb-10 sm:mb-20 sm:flex sm:justify-between sm:items-start">
          <Heading
            as="div"
            className="text-base leading-[19.2px] text-[#2B2B2B] dark:text-white lg:text-xl lg:leading-6 mb-6"
          >
            SERVICES
          </Heading>
          <Heading
            as="div"
            className="text-[32px] leading-[32px] text-[#363636] dark:text-white sm:w-[63.61%] lg:text-5xl lg:leading-[48px] lg:w-[35.95%]"
          >
            Shaping Tomorrow&apos;s Digital Landscape with Unmatched Creativity
            and Precision
          </Heading>
        </div>
        <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:gap-4">
          {serviceCards.map((serviceCard, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-[#F3F3F3] transition-all duration-[5s] ease-in-out hover:bg-[#4795FF] dark:bg-[#1B1B1C] dark:border dark:border-[#313131] sm:rounded-[32px] lg:bg-white lg:hover:bg-white dark:lg:border-none dark:lg:hover:bg-[#1B1B1C] pt-4 pb-6 sm:pt-6 sm:pb-12 lg:p-0"
            >
              <div className="w-[90%] mx-auto sm:w-[93.89%] lg:w-full">
                <div className="relative h-[294px] rounded-xl border border-[#EBEBED] dark:border-[#313131] sm:h-[593px] sm:rounded-3xl lg:h-[641px] lg:group-hover:h-[577px] mb-9 lg:mb-6">
                  <Image
                    src={serviceCard.picturePath}
                    alt=""
                    className="w-full h-full rounded-xl object-cover group-hover:brightness-75 sm:rounded-3xl"
                  />
                  <div className="absolute top-4 right-4 w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#151313] sm:top-6 sm:right-6 lg:opacity-0 lg:group-hover:opacity-100">
                    <Image src={Arrow} width={25.2} height={25.2} alt="" />
                  </div>
                </div>
                <Heading
                  as="div"
                  className="text-2xl leading-6 text-[#363636] group-hover:text-white lg:group-hover:text-[#363636] dark:lg:group-hover:text-white dark:text-white dark:lg lg:text-[32px] lg:leading-[32px]"
                >
                  {serviceCard.heading}
                </Heading>
                <div className="text-base leading-[19.2px] text-[#6F6F6F] group-hover:text-[#D1D1D2] lg:group-hover:text-[#6F6F6F] dark:lg:group-hover:text-[#D1D1D2] dark:text-[#D1D1D2] lg:text-xl lg:leading-6 lg:hidden lg:group-hover:block mt-2 sm:mt-4">
                  {serviceCard.copy}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
