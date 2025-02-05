import React from "react";

import Image from "next/image";
import { Francois_One } from "next/font/google"

import ModeToggle from "@/app/components/home/mode-toggle"

import Arrow from "@/app/assets/svgs/arrow-forward.svg"

import PictureOne from "@/app/assets/pngs/Frame 1321313983.png"

const francoisOne = Francois_One({ weight: "400", subsets: ["latin"] })

const Hero = () => {
  return (
    <section>
      <div className="sm:mx-auto sm:w-[94.24%] md:w-[96.66%] md:relative md:h-[966px]">

        <div className="h-[864px] border border-[#EBEBED] py-4 bg-[#F3F3F3] sm:rounded-[42px] sm:py-9 sm:h-[718px] md:absolute md:top-0 md:right-0 md:w-[57.73%] md:h-full">
          <div className="relative w-[90%] h-full mx-auto sm:w-[90.84%] md:w-[91.03%]">

            <div className="h-[54px] sm:h-14"></div>

            <div className="text-base leading-[19.2px] text-[#6F6F6F] md:text-3xl md:leading-[28.8px] mt-[104px] mb-8">
              We create advanced, innovative digital solutions that stand out.
              Whether you&apos;re a tech giant or a growing SME, we love
              partnering with companies of all sizes to bring their visions to
              life.
            </div>

            <button className="rounded-full px-6 py-3 bg-gradient-to-b from-[#4E98FE] to-[#3283F3] flex gap-x-[10px] items-center">
              <div className="font-bold text-base leading-[20.8px] text-white md:text-xl md:leading-[26px]">
                Get in touch
              </div>

              <Image src={Arrow} width={24} height={24} alt="Arrow" />
            </button>

            <div
              className={`${francoisOne.className} absolute bottom-0 text-[40px] leading-[48px] text-[#363636] md:text-[54px] md:leading-[64.8px]`}
            >
              Pioneering the Future of Digital Excellence with Unmatched Creativity and Precision.
            </div>

            <ModeToggle />

          </div>
        </div>

        {/* IMAGE */}
        <div className="h-[483px] sm:h-[966px] md:absolute md:top-0 md:left-0 md:w-[41.12%] md:h-full sm:mt-4 md:mt-0">
          <Image
            src={PictureOne}
            alt=""
            className="w-full h-full border border-[#EBEBED] object-cover sm:rounded-[42px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
