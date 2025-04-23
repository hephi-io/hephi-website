import React from "react";

import Image from "next/image";
import { Francois_One } from "next/font/google";

import Arrow from "@/app/assets/svgs/arrow-forward.svg";

import PictureOne from "@/app/assets/pngs/Frame 1321313983.png";

const francoisOne = Francois_One({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <section>
      <div className="sm:w-[94.24%] lg:max-w-[1391px] lg:relative lg:h-[966px] sm:mx-auto">
        <div className="h-[864px] border border-[#EBEBED] dark:border-black dark:sm:border-[#313131] py-4 bg-[#F3F3F3] dark:bg-[#1B1B1C] sm:rounded-[42px] sm:py-9 sm:h-[718px] lg:absolute lg:top-0 lg:right-0 lg:w-[57.73%] lg:h-full">
          <div className="relative w-[90%] h-full mx-auto sm:w-[90.84%] lg:w-[91.03%]">
            <div className="h-[54px] sm:h-14"></div>
            <div className="absolute bottom-0">
              <div className="text-base leading-[19.2px] text-[#6F6F6F] dark:text-[#D1D1D2] lg:text-2xl lg:leading-[28.8px] mb-8">
                We build standout digital solutions that are both innovative and future-ready. Whether you&apos;re scaling up or already leading the industry, we&apos;re your partners in turning vision into impact.
              </div>
              <button className="rounded-full px-6 py-3 bg-gradient-to-b from-[#4E98FE] to-[#3283F3] flex gap-x-[10px] items-center hover:cursor-pointer">
                <div className="font-bold text-base leading-[20.8px] text-white lg:text-xl lg:leading-[26px]">
                  Get in touch
                </div>
                <Image src={Arrow} width={24} height={24} alt="Arrow" />
              </button>
            </div>
            <div
              className={`${francoisOne.className} text-[40px] leading-[48px] text-[#363636] dark:text-white lg:text-[54px] lg:leading-[64.8px] mt-[104px]`}
            >
              Crafting the Next Generation of Digital Experiences with Creativity, Precision, and Relentless drive.
            </div>
          </div>
        </div>
        {/* IMAGE */}
        <div className="h-[483px] sm:h-[966px] lg:absolute lg:top-0 lg:left-0 lg:w-[41.12%] lg:h-full sm:mt-4 lg:mt-0">
          <Image
            src={PictureOne}
            alt=""
            className="w-full h-full border border-[#EBEBED] dark:border-black object-cover sm:rounded-[42px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
