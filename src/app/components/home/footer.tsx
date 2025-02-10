import React from 'react'

import Image from "next/image";

import Heading from "@/app/components/shared/heading"

import Arrow from "@/app/assets/svgs/arrow-forward.svg"

const footer = () => {
  const gridItems = [
    { header: "Office", textOne: "De Corridor 12G", textTwo: "Lekki, Lagos" }, 
    { header: "Call line", textOne: "Mel: +31 6 14 97 98 40", textTwo: "Ikenna: +31 6 51 76 07 63" }, 
    { header: "Mail Us", textOne: "info@hephi.io", textTwo: "careers@hephi.io" }, 
    { header: "Follow us", textOne: "Instagram", textTwo: "LinkedIn" },  
  ]

  return (
    <footer>
      <div className="bg-[#4795FF] py-9 sm:w-[94.24%] sm:mx-auto sm:rounded-[36px] md:w-[96.66%]">
        <div className="w-[90%] mx-auto sm:w-[93.89%] md:w-[94.82%]">

          <div className="md:flex md:justify-between md:items-start">

            <Heading as="div" className="text-4xl leading-9 text-white sm:w-[57.04%] sm:text-5xl sm:leading-[48px] md:w-[31.92%] md:text-[54px] md:leading-[54px]" text="">
              We&apos;re excited to bring your next ideas to life
            </Heading>

            <div className="mt-10 rounded-3xl bg-white md:mt-0 md:w-[37.91%] py-6 md:py-9">
              <div className="w-[86.7%] mx-auto sm:w-[93.5%] sm:flex sm:justify-between sm:items-start md:w-[85.6%] md:block">

                <div className="sm:w-[51.81%] md:w-[83.53%]">

                  <Heading as="div" className="text-2xl leading-6 text-[#363636] sm:text-[28px] sm:leading-7 md:text-[32px] md:leading-8" text="">
                    Get in touch
                  </Heading>

                  <div className="text-base leading-[19.2px] text-[#6F6F6F] sm:text-xl sm:leading-6 mt-6 md:mt-4">
                    Are you a brand or company in need of contagiously creative
                    stopping power? Just hit us up!
                  </div>

                </div>

                <button className="h-12	rounded-full px-6 py-3 bg-gradient-to-b from-[#4E98FE] to-[#3283F3] flex gap-x-[10px] items-center mt-14 sm:mt-0 md:mt-14">

                  <div className="font-bold text-lg leading-[23.4px] text-white md:text-xl md:leading-[26px]">
                    Get in touch
                  </div>

                  <Image src={Arrow} width={24} height={24} alt="arrow" />

                </button>

              </div>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-10 md:grid-cols-4 mt-10">
            { gridItems.map((gridItem, index) => (
              <div key={index} className="pt-10">

                <div className="font-bold text-base leading-[19.2px] text-white sm:text-lg sm:leading-[21.6px] md:text-xl md:leading-6">
                  { gridItem.header }
                </div>

                <div className="text-base leading-[19.2px] text-[#FFFFFFCC] sm:text-lg sm:leading-[21.6px] md:text-xl md:leading-6 mt-4">

                  <div>{ gridItem.textOne }</div>

                  <div className="mt-1">{ gridItem.textTwo }</div>

                </div>

              </div>
            ))}
          </div>

          <div className="font-bold text-base leading-[19.2px] text-white sm:text-lg sm:leading-[21.6px] md:text-xl md:leading-6 mt-20">
            General terms
          </div>

        </div>
      </div>
    </footer>
  )
}

export default footer
