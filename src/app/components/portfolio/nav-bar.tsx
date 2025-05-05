"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import MenuButton from "@/app/components/home/menu-button";
import Heading from "@/app/components/shared/heading";
import {
  HephiLogo,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/app/components/home/nav-bar";
import { DarkMode, LightMode } from "@/app/components/home/mode-toggle";

import Arrow from "@/app/assets/svgs/arrow-forward-black.svg";
import MenuIcon from "@/app/assets/svgs/menu-icon.svg";
import CancelIcon from "@/app/assets/svgs/cancel-icon.svg";

const ArrowIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lg:w-full lg:h-full lg:object-cover lg:rotate-[-135deg]"
    >
      <path
        d="M8.40646 7.44706L18.4297 7.44706L18.4297 17.4703M17.7336 8.14312L7.57119 18.3056"
        stroke="currentColor"
        stroke-width="2.1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const NavBar = () => {
  const links = [
    { id: 1, name: "HOME", href: "/" },
    { id: 2, name: "WORK", href: "/portfolio" },
    { id: 3, name: "ABOUT", href: "" },
    { id: 4, name: "CONTACT US", href: "/contact" },
  ];

  const emails = [
    { id: 1, address: "info@hephi.io" },
    { id: 2, address: "careers@hephi.io" },
  ];

  const socials = [
    {
      id: 1,
      src: <TwitterIcon />,
      mobileWidth: 19.18,
      mobileHeight: 15.58,
      tabWidth: 32,
      tabHeight: 32,
    },
    {
      id: 2,
      src: <WhatsappIcon />,
      mobileWidth: 18.24,
      mobileHeight: 18.33,
      tabWidth: 26.53,
      tabHeight: 26.67,
    },
    {
      id: 3,
      src: <LinkedinIcon />,
      mobileWidth: 14.14,
      mobileHeight: 14.14,
      tabWidth: 24,
      tabHeight: 24,
    },
    {
      id: 4,
      src: <InstagramIcon />,
      mobileWidth: 18.17,
      mobileHeight: 19,
      tabWidth: 32,
      tabHeight: 32,
    },
  ];

  const buttons = [
    { id: 1, text: "Decline", imgSrc: undefined },
    { id: 2, text: "Accept", imgSrc: Arrow },
  ];

  const [menuState, setMenuState] = useState(false);

  const handleMenu = (data: boolean) => {
    setMenuState(data);
  };

  return (
    <>
      <nav className="fixed z-30 top-4 left-4 right-4 nav h-[54px] flex justify-between items-center bg-[#B1ADAD33] dark:bg-[#00000066] border border-white dark:border-[#3F3F3F] sm:hidden p-2 pl-4 mx-auto">
        <div className="py-2">
          <HephiLogo />
        </div>
        <button
          className="rounded p-2 bg-white flex gap-x-2 hover:cursor-pointer"
          onClick={() => {
            setMenuState(!menuState);
          }}
        >
          <Image
            src={!menuState ? MenuIcon : CancelIcon}
            width={20.56}
            height={20.56}
            alt="Menu Icon"
          />
          <Heading as="div" className="text-lg leading-[21.6px] text-[#2B2B2B]">
            {!menuState ? "Menu" : "Close"}
          </Heading>
        </button>
      </nav>
      <nav
        className={`hidden sm:fixed sm:z-30 sm:top-[52px] sm:right-0 sm:left-0 sm:w-[85.61%] sm:h-14 sm:flex sm:justify-between sm:items-center lg:max-w-[1319px] sm:mx-auto ${
          menuState ? "lg:justify-end" : ""
        }`}
      >
        <button
          className={`hidden lg:w-[109px] lg:h-10 lg:rounded-full lg:border-2 lg:border-[#363636] dark:lg:border-[#D1D1D2] lg:flex lg:justify-center lg:items-center ${
            menuState ? "lg:hidden" : ""
          }`}
        >
          <div className="lg:w-6 lg:h-6 text-[#363636] dark:text-white">
            <ArrowIcon />
          </div>
          <div className="lg:text-xl lg:leading-6 lg:tracking-normal lg:text-[#363636] dark:lg:text-[#D1D1D2] lg:ml-2.5">
            Back
          </div>
        </button>
        <div className={`sm:py-2 ${menuState ? "lg:hidden" : ""}`}>
          <HephiLogo />
        </div>
        <div className="sm:rounded-full sm:flex sm:gap-x-4 sm:items-center sm:tab-nav-switch sm:bg-[#B1ADAD33]">
          <div className="w-[91px] h-14 rounded-full flex justify-center items-center">
            <div
              className="relative w-[75px] h-10 rounded-full bg-[#4795FF] dark:bg-[#00000066] border-[2.5px] border-[#EBEBEB] dark:border-[#EBEBEB72] border-opacity-[0.48] flex gap-x-[5px] items-center p-[5px] hover:cursor-pointer"
              onClick={() => document.body.classList.toggle("dark")}
            >
              <div className="z-20 w-[30px] h-[30px] rounded-full text-[#EBEBEB] dark:text-[#282828]">
                <DarkMode />
              </div>
              <div className="z-20 w-[30px] h-[30px] rounded-full text-[#282828] dark:text-[#EBEBEB]">
                <LightMode />
              </div>
              <div className="absolute right-[1.9px] z-10 w-[30px] h-[30px] rounded-full bg-[#EBEBEB] dark:-translate-x-9"></div>
            </div>
          </div>
          <MenuButton menuState={menuState} handleMenu={handleMenu} />
        </div>
      </nav>
      <div
        className={`fixed z-20 top-0 right-0 left-0 h-[100vh] bg-white dark:bg-[#1B1B1C] ${
          !menuState && "hidden"
        }`}
      >
        <div className="relative top-[15.03%] h-[84.97%] sm:top-[26.25vh] sm:h-[73.75vh]">
          <div className="w-[91.86%] h-full sm:w-[85.61%] lg:max-w-[1319px] mx-auto">
            <section className="h-[41.44%] flex flex-col justify-between sm:h-[35.67vh]">
              {links.map((link) => (
                <Link key={link.id} href={link.href} className="w-fit">
                  <Heading
                    as="span"
                    className="text-[40px] leading-12 tracking-normal text-[#2B2B2B] dark:text-white sm:text-[64px] sm:leading-[120%]"
                  >
                    {link.name}
                  </Heading>
                </Link>
              ))}
            </section>
            <div className="font-bold text-xl leading-6 tracking-normal text-[#2A2A2A] dark:text-white mt-[7.41vh] sm:hidden">
              Mail Us
            </div>
            <section className="h-[6.63%] flex flex-col justify-between mt-[1.85vh] sm:hidden">
              {emails.map((email) => (
                <Link
                  key={email.id}
                  href={`mailto:${email.address}`}
                  className="w-fit text-xl leading-6 tracking-normal text-[#2A2A2A] dark:text-[#D1D1D2] hover:cursor-pointer"
                >
                  {email.address}
                </Link>
              ))}
            </section>
            <section className="h-[12.83vh] border-t border-t-[#C6C6C6] flex justify-start items-center sm:h-[24.85vh] sm:items-start mt-[4.01vh] sm:mt-[8.02vh]">
              <section className="sm:w-[50%] sm:pt-[8.02vh]">
                <section className="flex gap-x-[15.56px] items-center">
                  {socials.map((icon) => (
                    <button
                      key={icon.id}
                      className="w-12 h-12 rounded-full border-[1.56px] border-[#363636] dark:border-[#D1D1D2] flex justify-center items-center sm:w-14 sm:h-14"
                    >
                      <div
                        className={`w-[${icon.mobileWidth}px] h-[${icon.mobileHeight}px] sm:w-[${icon.tabWidth}px] sm:h-[${icon.tabHeight}px] text-[#2A2A2A] dark:text-[#D1D1D2]`}
                      >
                        {icon.src}
                      </div>
                    </button>
                  ))}
                </section>
              </section>
              <section className="hidden sm:w-[50%] sm:h-full sm:border-l sm:border-l-[#B9B9B9] sm:flex sm:justify-center lg:block sm:pt-[8.02vh]">
                <div className="lg:w-[72.86%] lg:mx-auto">
                  <div className="font-bold text-xl leading-6 tracking-normal text-[#2A2A2A] dark:text-white sm:leading-[120%]">
                    Mail Us
                  </div>
                  <section className="h-[4.81vh] flex flex-col justify-between mt-[1.85vh]">
                    {emails.map((email) => (
                      <Link
                        key={email.id}
                        href={`mailto:${email.address}`}
                        className="w-fit text-xl leading-6 tracking-normal text-[#2A2A2A] dark:text-[#D1D1D2]"
                      >
                        {email.address}
                      </Link>
                    ))}
                  </section>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
      <div className="fixed z-40 top-0 right-0 left-0 h-[100vh] bg-[#1515153D] hidden">
        <div className="relative w-full h-full">
          <div className="absolute w-[91.86%] right-0 bottom-8 left-0 rounded-3xl bg-[#151515] py-6 mx-auto">
            <div className="w-[86.70%] mx-auto">
              <Heading className="text-2xl leading-none tracking-normal text-white">
                We use cookies
              </Heading>

              <div className="text-base leading-[120%] tracking-normal text-[#D1D1D2] mt-4">
                We use Google Analytics to analyze our traffic.
              </div>

              <div className="flex justify-between items-center mt-14">
                {buttons.map((button) => (
                  <button
                    key={button.id}
                    className={`w-[47.44%] rounded-full ${
                      button.id === 1 ? "border border-[#A3A3A3]" : "bg-white"
                    } py-3 flex justify-center items-center`}
                  >
                    <div className="flex gap-x-2.5 items-center">
                      <div
                        className={`font-bold text-base leading-[130%] tracking-normal ${
                          button.id === 1 ? "text-white" : "text-[#151515]"
                        }`}
                      >
                        {button.text}
                      </div>

                      <div className={`w-6 h-6 ${!button.imgSrc && "hidden"}`}>
                        <Image
                          src={button.imgSrc}
                          alt=""
                          width={undefined}
                          height={undefined}
                          className={`w-full h-full`}
                        />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
