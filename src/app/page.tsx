"use client"

import Logo from "./assets/svgs/hephi-logo.svg"
import MenuIcon from "./assets/svgs/menu-icon.svg"
import Arrow from "./assets/svgs/arrow-forward.svg"
import DarkIcon from "./assets/svgs/dark-icon.svg"
import LightIcon from "./assets/svgs/light-icon.svg"
import HephiH from "./assets/svgs/hephi-h-logo.svg"

import PictureOne from "./assets/pngs/Frame 1321313983.png"
import PictureTwo from "./assets/pngs/Union.png"

import Image from "next/image"

export default function Home() {
  return (
    <main>

      <section>

        <section className="h-[864px] border border-[#EBEBED] p-4 bg-[#F3F3F3] flex flex-col justify-between">

          <section>

            <nav className="fixed top-4 right-4 left-4 nav w-[90%] h-[54px] flex justify-between items-center p-2 pl-4">

              <div className="pt-2 pb-2">
                <Image 
                  src={Logo} 
                  width={100.88} 
                  height={19} 
                  alt="Hephi Logo" 
                />
              </div>

              <button className="rounded p-2 bg-white flex gap-x-2">

                <Image
                  src={MenuIcon}
                  width={20.56}
                  height={20.56}
                  alt="Menu Icon"
                />

                <div className="font-normal text-lg leading-[21.6px] text-[#2B2B2B]">
                  Menu
                </div>

              </button>

            </nav>

            <div className="h-[54px] mb-[104px]"></div>

            <div>

              <div className="font-normal text-base leading-[19.2px] text-[#6F6F6F] mb-8">
                We create advanced, innovative digital solutions that stand out. Whether you&apos;re a tech giant or a growing SME, we love partnering with companies of all sizes to bring their visions to life. 
              </div>

              <button className="rounded-full px-6 py-3 bg-gradient-to-b from-[#4E98FE] to-[#3283F3] flex gap-x-[10px] items-center">

                <div className="font-bold text-base leading-[20.8px] text-white">
                  Get in touch
                </div>
                
                <Image 
                  src={Arrow}
                  width={24}
                  height={24}
                  alt="Arrow"
                />

              </button>

            </div>

          </section>

          <section>

            <span className="font-normal text-[40px] leading-[48px] text-[#363636]">
              Pioneering the Future of Digital Excellence with Unmatched Creativity and Precision.
            </span>

            <div className="fixed right-4 bottom-4 w-[91px] h-14 rounded-full border border-white flex justify-center items-center dark-mode-toggle-button z-10">
              <div className="relative w-[75px] h-10 rounded-full bg-[#4795FF] border-[2.5px] border-[#EBEBEB] border-opacity-[0.48] flex gap-x-[5px] items-center p-[5px]">

                <Image
                  src={DarkIcon}
                  width={30}
                  height={30}
                  alt="Dark Icon"
                  className="z-20 rounded-full"
                />

                <Image
                  src={LightIcon}
                  width={30}
                  height={30}
                  alt="Dark Icon"
                  className="z-20 rounded-full"
                />

                <div className="absolute right-[2.5px] z-10 w-[30px] h-[30px] rounded-full bg-[#EBEBEB]"></div>

              </div>
            </div>

          </section>

        </section>

        {/* IMAGE */}
        <Image 
          src={PictureOne}
          alt=""
          className="w-full h-[483px] border border-[#EBEBED]"
        />

      </section>

      <section className="p-4 pt-12 bg-[#F3F3F3]">

        <div className="font-normal text-base leading-[19.2px] text-[#2B2B2B] mb-20">
          ABOUT
        </div>

        <div className="font-normal text-[32px] leading-[32px] text-[#363636] mb-6">
          Crafting World-Class Digital Products for All
        </div>

        <div className="fobt-normal text-base leading-[19.2px] text-[#6F6F6F] mb-12">
          we are driven by a passion for innovation and a commitment to excellence. Our mission is to empower businesses and individuals to achieve their goals through cutting-edge digital solutions. We specialize in crafting creative, advanced, and tailored products that resonate with audiences and drive success.
        </div>

        <div className="relative">

          <Image
            src={PictureTwo}
            alt=""
            className="w-full h-[563px]"
          />

          <div className="absolute top-0 left-0 w-20 h-20 rounded-xl bg-[#4795FF] border-[0.32px] border-[#EBEBED] flex justify-center items-center">
            <Image
              src={HephiH}
              alt=""
              width={33.03}
              height={31.12}
            />
          </div>

        </div>

      </section>

    </main>
  );
}
