"use client"

import Logo from "./assets/svgs/hephi-logo.svg"
import MenuIcon from "./assets/svgs/menu-icon.svg"
import Arrow from "./assets/svgs/arrow-forward.svg"
import DarkIcon from "./assets/svgs/dark-icon.svg"
import LightIcon from "./assets/svgs/light-icon.svg"
import HephiH from "./assets/svgs/hephi-h-logo.svg"

import PictureOne from "./assets/pngs/Frame 1321313983.png"
import PictureTwo from "./assets/pngs/Union.png"
import PictureFive from "./assets/pngs/jpeg-optimizer_7557cda1e32882648d3615337d075753.png"
import PictureSix from "./assets/pngs/dna-pic.png"
import PictureSeven from "./assets/pngs/zipkod-phone.png"
import PictureEight from "./assets/pngs/arriving-notification.png"
import PictureNine from "./assets/pngs/phones.png"
import PictureTen from "./assets/pngs/moove.png"
import Star from "./assets/pngs/star (1).png"
import Brain from "./assets/pngs/braain.png"
import Jotter from "./assets/pngs/jotter.png"
import Plus from "./assets/pngs/plus.png"

import PictureThree from "./assets/jpegs/7821a48dba989370aabe20e25ad825ee.jpeg"
import PictureFour from "./assets/jpegs/trading-view-photo.jpeg"

import Image from "next/image"

export default function Home() {
  return (
    <main>

      <section>

        <section className="h-[864px] border border-[#EBEBED] p-4 bg-[#F3F3F3] flex flex-col justify-between">

          <section>

            <nav className="fixed z-10 top-4 right-4 left-4 nav w-[90%] h-[54px] flex justify-between items-center p-2 pl-4">

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

      <section className="pb-4 pt-12 bg-[#F3F3F3] mb-24">

        <div className="font-normal text-base leading-[19.2px] text-[#2B2B2B] w-[90%] mx-auto mb-20">
          ABOUT
        </div>

        <div className="font-normal text-[32px] leading-[32px] text-[#363636] w-[90%] mx-auto mb-6">
          Crafting World-Class Digital Products for All
        </div>

        <div className="fobt-normal text-base leading-[19.2px] text-[#6F6F6F] w-[90%] mx-auto mb-12">
          we are driven by a passion for innovation and a commitment to excellence. Our mission is to empower businesses and individuals to achieve their goals through cutting-edge digital solutions. We specialize in crafting creative, advanced, and tailored products that resonate with audiences and drive success.
        </div>

        <div className="relative w-[90%] mx-auto">

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

      <section  className="mb-24">

        <section className="h-[60.5px] overflow-x-hidden flex gap-x-[21.19px] items-center mb-[13.7px]">

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

        </section>

        <section className="h-[60.5px] overflow-x-hidden flex gap-x-[21.19px] items-center mb-[13.7px]">

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

        </section>

        <section className="h-[60.5px] overflow-x-hidden flex gap-x-[21.19px] items-center mb-[13.7px]">

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

        </section>

        <section className="h-[60.5px] overflow-x-hidden flex gap-x-[21.19px] items-center mb-[13.7px]">

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

          <section className="flex gap-x-[12.1px] item-center">

            <div className="font-normal text-[24.2px] leading-[29.04px] text-[#6F6F6F]">
              Energetic
            </div>

            <div className="w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9]"></div>

          </section>

        </section>

      </section>

      <section className="mb-24">

        <div className="w-[90%] mx-auto font-normal text-base leading-[19.2px] text-[#2B2B2B] mb-6">
          SERVICES
        </div>

        <div className="w-[90%] mx-auto font-normal text-[32px] leading-[32px] text-[#363636] mb-10">
          Shaping Tomorrow&apos;s Digital Landscape with Unmatched Creativity and Precision
        </div>

        <div className="w-[90%] mx-auto flex flex-col gap-y-4">

          <div className="rounded-3xl bg-[#F3F3F3] pt-4 pb-6">

            <div className="relative w-[90%] h-[294px] mx-auto rounded-xl border border-[#EBEBED] mb-9">

              <Image
                src={PictureThree}
                alt="" 
                className="w-full h-full rounded-xl object-cover"
              />

              <div className="absolute top-4 right-4 w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#151313]">
                <Image
                  src={Arrow}
                  width={25.2}
                  height={25.2}
                  alt=""
                />
              </div>

            </div>

            <div className="w-[90%] mx-auto font-normal text-2xl leading-6 text-[#363636] mb-2">
              Product Design
            </div>

            <div className="w-[90%] mx-auto font-normal text-base leading-[19.2px] text-[#6F6F6F]">
              Turning ideas into innovative, user-centered digital products.
            </div>

          </div>

          <div className="rounded-3xl bg-[#F3F3F3] pt-4 pb-6">

            <div className="relative w-[90%] h-[294px] mx-auto rounded-xl border border-[#EBEBED] mb-9">

              <Image
                src={PictureFour}
                alt="" 
                className="w-full h-full rounded-xl object-cover"
              />

              <div className="absolute top-4 right-4 w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#151313]">
                <Image
                  src={Arrow}
                  width={25.2}
                  height={25.2}
                  alt=""
                />
              </div>

            </div>

            <div className="w-[90%] mx-auto font-normal text-2xl leading-6 text-[#363636] mb-2">
              Brand Identity Design
            </div>

            <div className="w-[90%] mx-auto font-normal text-base leading-[19.2px] text-[#6F6F6F]">
              Turning ideas into innovative, user-centered digital products.
            </div>

          </div>

          <div className="rounded-3xl bg-[#F3F3F3] pt-4 pb-6">

            <div className="relative w-[90%] h-[294px] mx-auto rounded-xl border border-[#EBEBED] mb-9">

              <Image
                src={PictureFive}
                alt="" 
                className="w-full h-full rounded-xl object-cover"
              />

              <div className="absolute top-4 right-4 w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#151313]">
                <Image
                  src={Arrow}
                  width={25.2}
                  height={25.2}
                  alt=""
                />
              </div>

            </div>

            <div className="w-[90%] mx-auto font-normal text-2xl leading-6 text-[#363636] mb-2">
              Web Development
            </div>

            <div className="w-[90%] mx-auto font-normal text-base leading-[19.2px] text-[#6F6F6F]">
              Turning ideas into innovative, user-centered digital products.
            </div>

          </div>

          <div className="rounded-3xl bg-[#F3F3F3] pt-4 pb-6">

            <div className="relative w-[90%] h-[294px] mx-auto rounded-xl border border-[#EBEBED] mb-9">

              <video
                src="/-b8db-4ccd-9ed8-819b4e4701ab.mp4"
                autoPlay
                loop
                className="w-full h-full rounded-xl object-cover"
              >
                <Image
                  src={PictureSix}
                  alt="" 
                  className="w-full h-full rounded-xl object-cover"
                />
              </video>

              <div className="absolute top-4 right-4 w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#151313]">
                <Image
                  src={Arrow}
                  width={25.2}
                  height={25.2}
                  alt=""
                />
              </div>

            </div>

            <div className="w-[90%] mx-auto font-normal text-2xl leading-6 text-[#363636] mb-2">
              Talent Outsourcing
            </div>

            <div className="w-[90%] mx-auto font-normal text-base leading-[19.2px] text-[#6F6F6F]">
              Turning ideas into innovative, user-centered digital products.
            </div>

          </div>

        </div>

      </section>

      <section className="mb-24">
        <div className="w-[90%] mx-auto">

          <div className="font-normal text-base leading-[19.2px] text-[#2B2B2B] mb-6">
            RECENT WORK
          </div>

          <div className="font-normal text-[32px] leading-[32px] text-[#363636] mb-10">
            Where Your Challenges Become Our Creative Playground.
          </div>

          <div>

            <div className="rounded-3xl bg-[#4795FF] py-4 mb-6">
              <div className="w-[90%] mx-auto">

                <div className="h-[400px] rounded-[10px] mb-8">
                  <Image
                    src={PictureSeven}
                    alt="" 
                    className="w-full h-full rounded-[10px] object-cover"
                  />
                </div>

                <div className="flex justify-between items-start mb-4">

                  <span className="font-normal text-2xl leading-6 text-white">
                    Zipkod Logistics
                  </span>

                  <span className="font-normal text-sm leading-[14px] text-white">
                    2024
                  </span>

                </div>

                <div className="flex gap-x-1 items-center mb-1">

                  <div className="rounded-[5px] border border-white px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-white">
                    Branding
                  </div>

                  <div className="rounded-[5px] border border-white px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-white">
                    Web development
                  </div>

                </div>

                <div className="inline-block rounded-[5px] border border-white px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-white">
                  App development
                </div>

              </div>
            </div>

            <div className="rounded-2xl border bg-[#F3F3F3] py-4 mb-6">
              <div className="w-[90%] mx-auto">

                <div className="h-[400px] rounded-[7px] mb-8">
                  <Image
                    src={PictureEight}
                    alt="" 
                    className="w-full h-full rounded-[7px] object-cover"
                  />
                </div>

                <div className="flex justify-between items-start mb-4">

                  <span className="font-normal text-2xl leading-6 text-[#363636]">
                    Tribevibe
                  </span>

                  <span className="font-normal text-sm leading-[14px] text-[#363636]">
                    2023
                  </span>

                </div>

                <div className="flex gap-x-1 items-center">

                  <div className="rounded-[5px] border border-[#A3A3A3] px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-[#A3A3A3]">
                    Branding
                  </div>

                  <div className="rounded-[5px] border border-[#A3A3A3] px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-[#A3A3A3]">
                    Web development
                  </div>

                </div>

                <div className="hidden rounded-[5px] border border-white px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-white mt-1">
                  App development
                </div>

              </div>
            </div>

            <div className="rounded-2xl border bg-[#F3F3F3] py-4 mb-6">
              <div className="w-[90%] mx-auto">

                <div className="h-[400px] rounded-[7px] mb-8">
                  <Image
                    src={PictureFive}
                    alt="" 
                    className="w-full h-full rounded-[7px] object-cover"
                  />
                </div>

                <div className="flex justify-between items-start mb-4">

                  <span className="font-normal text-2xl leading-6 text-[#363636]">
                    Sunk
                  </span>

                  <span className="font-normal text-sm leading-[14px] text-[#363636]">
                    2023
                  </span>

                </div>

                <div className="flex gap-x-1 items-center">

                  <div className="hidden rounded-[5px] border border-[#A3A3A3] px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-[#A3A3A3]">
                    Branding
                  </div>

                  <div className="rounded-[5px] border border-[#A3A3A3] px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-[#A3A3A3]">
                    Web development
                  </div>

                </div>

                <div className="hidden rounded-[5px] border border-white px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-white mt-1">
                  App development
                </div>

              </div>
            </div>

            <div className="rounded-2xl border bg-[#F3F3F3] py-4 mb-6">
              <div className="w-[90%] mx-auto">

                <div className="h-[400px] rounded-[7px] mb-8">
                  <Image
                    src={PictureNine}
                    alt="" 
                    className="w-full h-full rounded-[7px] object-cover"
                  />
                </div>

                <div className="flex justify-between items-start mb-4">

                  <span className="font-normal text-2xl leading-6 text-[#363636]">
                    Kodest Invest
                  </span>

                  <span className="font-normal text-sm leading-[14px] text-[#363636]">
                    2023
                  </span>

                </div>

                <div className="flex gap-x-1 items-center">

                  <div className="rounded-[5px] border border-[#A3A3A3] px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-[#A3A3A3]">
                    Web development
                  </div>

                  <div className="rounded-[5px] border border-[#A3A3A3] px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-[#A3A3A3]">
                    App development
                  </div>

                </div>

                <div className="hidden rounded-[5px] border border-white px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-white mt-1">
                  App development
                </div>

              </div>
            </div>

            <div className="rounded-2xl border bg-[#F3F3F3] py-4 mb-6">
              <div className="w-[90%] mx-auto">

                <div className="h-[400px] rounded-[7px] mb-8">
                  <Image
                    src={PictureTen}
                    alt="" 
                    className="w-full h-full rounded-[7px] object-cover"
                  />
                </div>

                <div className="flex justify-between items-start mb-4">

                  <span className="font-normal text-2xl leading-6 text-[#363636]">
                    Moove
                  </span>

                  <span className="font-normal text-sm leading-[14px] text-[#363636]">
                    2023
                  </span>

                </div>

                <div className="hidden gap-x-1 items-center mb-1">

                  <div className="rounded-[5px] border border-[#A3A3A3] px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-[#A3A3A3]">
                    Web development
                  </div>

                  <div className="rounded-[5px] border border-[#A3A3A3] px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-[#A3A3A3]">
                    App development
                  </div>

                </div>

                <div className="inline-block rounded-[5px] border border-[#A3A3A3] px-[6px] py-1 font-normal text-[13px] leading-[15.6px] text-[#A3A3A3]">
                  App development
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="mb-24">
        <div className="w-[90%] mx-auto">

          <div className="font-normal text-base leading-[19.2px] text-[#2B2B2B] mb-10">
            PROCESS
          </div>

          <div>

            <div className="relative rounded-3xl bg-[#F3F3F3] py-6 mb-6">

              <div className="w-[90%] h-[252px] mx-auto flex flex-col justify-between">

                <div className="w-9 h-9 rounded-full border border-[#363636] flex justify-center items-center font-normal text-base leading-4 text-[#363636]">
                  1
                </div>

                <div>

                  <div className="font-normal text-2xl leading-6 text-[#363636]">
                    Discovery
                  </div>

                  <div className="font-normal text-base leading-4 text-[#363636] mt-6">
                    We dive deep into understanding your business, goals, and challenges to set the foundation.
                  </div>

                </div>

              </div>

              <div className="absolute left-[25%] bottom-[53%] w-[44.17%] h-[200px]">
                <Image
                  src={Star}
                  alt=""
                  className="w-full h-full object-cover" 
                />
              </div>

            </div>

            <div className="relative rounded-3xl bg-[#F3F3F3] py-6 mb-6">

              <div className="w-[90%] h-[252px] mx-auto flex flex-col justify-between">

                <div className="w-9 h-9 rounded-full border border-[#363636] flex justify-center items-center font-normal text-base leading-4 text-[#363636]">
                  2
                </div>

                <div>

                  <div className="font-normal text-2xl leading-6 text-[#363636]">
                    Strategy & Ideation
                  </div>

                  <div className="font-normal text-base leading-4 text-[#363636] mt-6">
                    Combining research with creative brainstorming, we develop a strategic plan tailored to your vision.
                  </div>

                </div>

              </div>

              <div className="absolute left-[25%] bottom-[53%] w-[44.17%] h-[200px]">
                <Image
                  src={Brain}
                  alt=""
                  className="w-full h-full object-cover" 
                />
              </div>

            </div>

            <div className="relative rounded-3xl bg-[#F3F3F3] py-6 mb-6">

              <div className="w-[90%] h-[252px] mx-auto flex flex-col justify-between">

                <div className="w-9 h-9 rounded-full border border-[#363636] flex justify-center items-center font-normal text-base leading-4 text-[#363636]">
                  3
                </div>

                <div>

                  <div className="font-normal text-2xl leading-6 text-[#363636]">
                    Design & Development
                  </div>

                  <div className="font-normal text-base leading-4 text-[#363636] mt-6">
                    Our team brings your ideas to life, crafting and refining the design and building the digital solution.
                  </div>

                </div>

              </div>

              <div className="absolute left-[25%] bottom-[53%] w-[44.17%] h-[200px]">
                <Image
                  src={Jotter}
                  alt=""
                  className="w-full h-full object-cover" 
                />
              </div>

            </div>

            <div className="relative rounded-3xl bg-[#F3F3F3] py-6 mb-6">

              <div className="w-[90%] h-[252px] mx-auto flex flex-col justify-between">

                <div className="w-9 h-9 rounded-full border border-[#363636] flex justify-center items-center font-normal text-base leading-4 text-[#363636]">
                  4
                </div>

                <div>

                  <div className="font-normal text-2xl leading-6 text-[#363636]">
                    Review & Refine
                  </div>

                  <div className="font-normal text-base leading-4 text-[#363636] mt-6">
                    We collaborate closely with you to review the work and fine-tune it based on your feedback.
                  </div>

                </div>

              </div>

              <div className="absolute left-[25%] bottom-[53%] w-[44.17%] h-[200px]">
                <Image
                  src={Plus}
                  alt=""
                  className="w-full h-full object-cover" 
                />
              </div>

            </div>

            <div className="relative rounded-3xl bg-[#F3F3F3] py-6 mb-6">

              <div className="w-[90%] h-[252px] mx-auto flex flex-col justify-between">

                <div className="w-9 h-9 rounded-full border border-[#363636] flex justify-center items-center font-normal text-base leading-4 text-[#363636]">
                  5
                </div>

                <div>

                  <div className="font-normal text-2xl leading-6 text-[#363636]">
                    Launch
                  </div>

                  <div className="font-normal text-base leading-4 text-[#363636] mt-6">
                    We launch the final product, ensuring it’s optimized for success from day one.
                  </div>

                </div>

              </div>

              <div className="absolute left-[25%] bottom-[53%] w-[44.17%] h-[200px]">
                <Image
                  src={Star}
                  alt=""
                  className="w-full h-full object-cover" 
                />
              </div>

            </div>

            <div className="relative rounded-3xl bg-[#F3F3F3] py-6 mb-6">

              <div className="w-[90%] h-[252px] mx-auto flex flex-col justify-between">

                <div className="w-9 h-9 rounded-full border border-[#363636] flex justify-center items-center font-normal text-base leading-4 text-[#363636]">
                  6
                </div>

                <div>

                  <div className="font-normal text-2xl leading-6 text-[#363636]">
                    Support & Optimization
                  </div>

                  <div className="font-normal text-base leading-4 text-[#363636] mt-6">
                    After launch, we continue to support and enhance your product to keep it aligned with your evolving needs.
                  </div>

                </div>

              </div>

              <div className="absolute left-[25%] bottom-[53%] w-[44.17%] h-[200px]">
                <Image
                  src={Star}
                  alt=""
                  className="w-full h-full object-cover" 
                />
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
