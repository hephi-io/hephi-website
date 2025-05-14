"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import MenuButton from "@/app/components/home/menu-button";
import Heading from "@/app/components/shared/heading";
import { DarkMode, LightMode } from "@/app/components/home/mode-toggle";

import Arrow from "@/app/assets/svgs/arrow-forward-black.svg";
import MenuIcon from "@/app/assets/svgs/menu-icon.svg";
import CancelIcon from "@/app/assets/svgs/cancel-icon.svg";

const iconClass = "w-full h-full";

export const HephiLogo = () => {
  return (
    <svg
      width="101"
      height="20"
      viewBox="0 0 101 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className="fill-black dark:fill-white"
        clip-path="url(#clip0_1446_4921)"
      >
        <path d="M16.0628 0.5H19.9928V19.5H16.0628V11.8502H3.92996V19.5H0V0.5H3.92996V8.30192H16.0628V0.5Z" />
        <path d="M42.1282 11.5283H27.7332C28.2359 14.4688 30.403 15.9786 33.3057 15.9786C35.4342 15.9786 37.408 15.011 38.4134 13.3474L41.4313 14.8563C39.845 17.8742 36.5943 19.5 33.1502 19.5C27.9265 19.5 23.8242 15.6692 23.8242 9.942C23.8242 4.21476 28.0038 0.5 33.1502 0.5C38.2966 0.5 42.2047 4.21476 42.2047 9.90333C42.2047 10.406 42.166 10.9482 42.1273 11.5283H42.1282ZM38.4134 8.47173C38.0267 5.6472 35.9756 4.02141 33.1897 4.02141C30.4039 4.02141 28.314 5.45301 27.7727 8.47173H38.4143H38.4134Z" />
        <path d="M85.307 0.5H89.2369V19.5H85.307V11.8502H73.1741V19.5H69.2441V0.5H73.1741V8.30192H85.307V0.5Z" />
        <path d="M46.0371 0.5V19.5H49.9671V13.4147H59.6831C63.2491 13.4147 66.14 10.5237 66.14 6.95775C66.14 3.39178 63.2491 0.500841 59.6831 0.500841H46.0371V0.5ZM49.9671 9.82851V4.08614H59.3393C60.9247 4.08614 62.2101 5.37147 62.2101 6.95691C62.2101 8.54234 60.9247 9.82767 59.3393 9.82767H49.9671V9.82851Z" />
        <path d="M98.4716 5.30758C97.1442 5.30758 96.0682 4.23157 96.0682 2.90421C96.0682 1.57685 97.1434 0.5 98.4716 0.5C99.7998 0.5 100.875 1.57601 100.875 2.90337C100.875 4.23073 99.799 5.30674 98.4716 5.30674V5.30758ZM100.245 8.30192V19.5H96.697V11.8502H92.6914V8.30192H100.245Z" />
      </g>
      <defs>
        <clipPath id="clip0_1446_4921">
          <rect
            width="100.876"
            height="19"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TwitterIcon = () => {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconClass} stroke-current`}
    >
      <path
        d="M16.979 2.54352L17.4209 3.81439C17.4347 3.81263 17.4485 3.81083 17.4623 3.80901C17.3853 3.8693 17.307 3.92787 17.2274 3.98467L16.9207 4.20379L16.9405 4.58025C16.9486 4.73352 16.9487 4.88077 16.9487 5.05744C16.9487 9.95879 13.2089 15.5624 6.44375 15.5624C5.29756 15.5624 4.19339 15.3774 3.15961 15.0359C4.42957 14.7647 5.62878 14.2042 6.65965 13.3881L8.16463 12.1967L6.24545 12.1617C5.56914 12.1494 4.9137 11.9254 4.37126 11.5213C4.11864 11.3331 3.89645 11.1102 3.7104 10.8607C3.98216 10.837 4.2521 10.7888 4.5169 10.7164L4.4696 9.37898C3.32235 9.1507 2.39084 8.30785 2.03042 7.20669C2.32981 7.27415 2.64372 7.31243 2.9696 7.31243H5.29915L3.34288 6.0476C2.4749 5.48641 1.90627 4.49349 1.90627 3.36162C1.90627 3.12592 1.93156 2.89548 1.97957 2.67359C3.99726 4.71374 6.75991 6.02939 9.81903 6.18406L10.7239 6.22982L10.5244 5.34601C10.4708 5.10884 10.4404 4.85713 10.4404 4.59911C10.4404 2.80422 11.8947 1.35412 13.6671 1.35412C14.6327 1.35412 15.4655 1.73405 16.0574 2.37838L16.321 2.6653L16.7025 2.58662C16.8117 2.56412 16.9202 2.53969 17.0282 2.51332C17.0119 2.52353 16.9955 2.53359 16.979 2.54352Z"
        stroke-width="1.37499"
      />
    </svg>
  );
};

export const WhatsappIcon = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconClass} fill-current`}
    >
      <path d="M15.7298 3.00129C14.8894 2.15239 13.8884 1.47932 12.7851 1.02134C11.6819 0.563359 10.4985 0.329633 9.30395 0.333795C4.29897 0.333795 0.219818 4.41295 0.219818 9.41793C0.219818 11.0221 0.641483 12.5804 1.42981 13.9554L0.146484 18.6671L4.95897 17.4021C6.28813 18.1262 7.78229 18.5112 9.30395 18.5112C14.3089 18.5112 18.3881 14.4321 18.3881 9.42709C18.3881 6.99794 17.4439 4.71545 15.7298 3.00129ZM9.30395 16.9712C7.94729 16.9712 6.61813 16.6046 5.45397 15.9171L5.17897 15.7521L2.31898 16.5037L3.07981 13.7171L2.89647 13.4329C2.14274 12.2293 1.74252 10.8381 1.74148 9.41793C1.74148 5.25628 5.13313 1.86462 9.29478 1.86462C11.3114 1.86462 13.2089 2.65295 14.6298 4.08295C15.3333 4.78325 15.8908 5.61622 16.27 6.53358C16.6493 7.45094 16.8426 8.43445 16.8389 9.42709C16.8573 13.5887 13.4656 16.9712 9.30395 16.9712ZM13.4473 11.3246C13.2181 11.2146 12.0998 10.6646 11.8981 10.5821C11.6873 10.5088 11.5406 10.4721 11.3848 10.6921C11.2289 10.9213 10.7981 11.4346 10.6698 11.5813C10.5414 11.7371 10.4039 11.7554 10.1748 11.6363C9.94561 11.5263 9.21229 11.2788 8.35062 10.5088C7.67229 9.90376 7.22312 9.16126 7.08563 8.9321C6.95729 8.70293 7.06729 8.58376 7.18646 8.4646C7.28729 8.36377 7.41563 8.19877 7.52562 8.07043C7.63562 7.9421 7.68146 7.84127 7.75479 7.6946C7.82812 7.53877 7.79146 7.41044 7.73646 7.30044C7.68146 7.19044 7.22312 6.07211 7.03979 5.61378C6.85646 5.17378 6.66396 5.22878 6.52646 5.21961H6.08646C5.93063 5.21961 5.6923 5.27461 5.48146 5.50378C5.2798 5.73294 4.69313 6.28294 4.69313 7.40127C4.69313 8.5196 5.50897 9.60126 5.61896 9.74793C5.72896 9.90376 7.22313 12.1954 9.49645 13.1762C10.0373 13.4146 10.4589 13.5521 10.7889 13.6529C11.3298 13.8271 11.8248 13.7996 12.2189 13.7446C12.6589 13.6804 13.5664 13.1946 13.7498 12.6629C13.9423 12.1313 13.9423 11.6821 13.8781 11.5813C13.8139 11.4804 13.6764 11.4346 13.4473 11.3246Z" />
    </svg>
  );
};

export const LinkedinIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconClass} fill-current`}
    >
      <path d="M14.1418 14.1428H11.2135V9.54902C11.2135 8.45357 11.194 7.04342 9.6906 7.04342C8.16543 7.04342 7.93207 8.23689 7.93207 9.46924V14.1424H5.00391V4.69579H7.81495V5.98675H7.85437C8.42673 5.00642 9.49489 4.41872 10.6279 4.46086C13.5958 4.46086 14.143 6.4164 14.143 8.96052L14.1418 14.1428Z" />
      <path d="M1.69965 3.40447C1.69948 3.40447 1.69939 3.40447 1.6993 3.40447C0.767089 3.40447 0 2.63612 0 1.70228C0 0.768434 0.767089 0 1.6993 0C2.63142 0 3.39842 0.768257 3.3986 1.70193C3.3986 1.70201 3.3986 1.7021 3.3986 1.70228C3.3986 2.63595 2.63169 3.40438 1.69965 3.40447Z" />
      <path d="M3.16368 14.1428H0.232422V4.6958H3.16368V14.1428Z" />
    </svg>
  );
};

export const InstagramIcon = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconClass} stroke-current`}
    >
      <rect
        x="4.5445"
        y="4.66156"
        width="9.08692"
        height="9.08692"
        rx="4.54346"
        stroke-width="1.13587"
      />
      <rect
        x="0.567933"
        y="0.685975"
        width="17.038"
        height="17.038"
        rx="4.54346"
        stroke-width="1.13587"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.0305 3.74912C15.0305 4.26533 14.5423 4.68377 13.94 4.68377C13.3378 4.68377 12.8496 4.26533 12.8496 3.74912C12.8496 3.23292 13.3378 2.81445 13.94 2.81445C14.5423 2.81445 15.0305 3.23292 15.0305 3.74912Z"
      />
    </svg>
  );
};

const NavBar = () => {
  const links = [
    { id: 1, name: "HOME", href: "/" },
    { id: 2, name: "WORK", href: "#works" },
    { id: 3, name: "ABOUT", href: "#about" },
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

  const [lastScrollY, setlastScrollY] = useState(0);
  const [hoveringOverHotZone, setHoveringOverHotZone] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 50 &&
        !hoveringOverHotZone &&
        !hovering
      ) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setlastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hoveringOverHotZone, lastScrollY, hovering]);

  return (
    <>
      <div
        className="fixed top-4 left-0 z-30 w-full h-[54px] sm:top-[52px]"
        onMouseEnter={() => setHoveringOverHotZone(true)}
        onMouseLeave={() => setHoveringOverHotZone(false)}
      />
      <nav
        className={`fixed z-40 top-4 left-4 right-4 nav h-[54px] flex justify-between items-center bg-[#B1ADAD33] dark:bg-[#00000066] border border-white dark:border-[#3F3F3F] sm:hidden p-2 pl-4 mx-auto transition-transform duration-300 ease-in-out ${
          hidden && !hovering && !hoveringOverHotZone
            ? "-translate-y-[72px]"
            : "translate-y-0"
        }`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
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
        className={`hidden sm:fixed sm:z-40 sm:top-[52px] sm:right-0 sm:left-0 sm:w-[85.61%] sm:h-14 sm:flex sm:justify-between sm:items-center lg:max-w-[1319px] sm:mx-auto transition-transform duration-300 ease-in-out ${
          hidden && !hoveringOverHotZone && !hovering
            ? "-translate-y-[110px]"
            : "translate-y-0"
        }`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="sm:py-2">
          <svg
            width="101"
            height="20"
            viewBox="0 0 101 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              className="fill-black dark:fill-white"
              clip-path="url(#clip0_1446_4921)"
            >
              <path d="M16.0628 0.5H19.9928V19.5H16.0628V11.8502H3.92996V19.5H0V0.5H3.92996V8.30192H16.0628V0.5Z" />
              <path d="M42.1282 11.5283H27.7332C28.2359 14.4688 30.403 15.9786 33.3057 15.9786C35.4342 15.9786 37.408 15.011 38.4134 13.3474L41.4313 14.8563C39.845 17.8742 36.5943 19.5 33.1502 19.5C27.9265 19.5 23.8242 15.6692 23.8242 9.942C23.8242 4.21476 28.0038 0.5 33.1502 0.5C38.2966 0.5 42.2047 4.21476 42.2047 9.90333C42.2047 10.406 42.166 10.9482 42.1273 11.5283H42.1282ZM38.4134 8.47173C38.0267 5.6472 35.9756 4.02141 33.1897 4.02141C30.4039 4.02141 28.314 5.45301 27.7727 8.47173H38.4143H38.4134Z" />
              <path d="M85.307 0.5H89.2369V19.5H85.307V11.8502H73.1741V19.5H69.2441V0.5H73.1741V8.30192H85.307V0.5Z" />
              <path d="M46.0371 0.5V19.5H49.9671V13.4147H59.6831C63.2491 13.4147 66.14 10.5237 66.14 6.95775C66.14 3.39178 63.2491 0.500841 59.6831 0.500841H46.0371V0.5ZM49.9671 9.82851V4.08614H59.3393C60.9247 4.08614 62.2101 5.37147 62.2101 6.95691C62.2101 8.54234 60.9247 9.82767 59.3393 9.82767H49.9671V9.82851Z" />
              <path d="M98.4716 5.30758C97.1442 5.30758 96.0682 4.23157 96.0682 2.90421C96.0682 1.57685 97.1434 0.5 98.4716 0.5C99.7998 0.5 100.875 1.57601 100.875 2.90337C100.875 4.23073 99.799 5.30674 98.4716 5.30674V5.30758ZM100.245 8.30192V19.5H96.697V11.8502H92.6914V8.30192H100.245Z" />
            </g>
            <defs>
              <clipPath id="clip0_1446_4921">
                <rect
                  width="100.876"
                  height="19"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="sm:rounded-full sm:flex sm:gap-x-4 sm:items-center tab-nav-switch sm:bg-[#B1ADAD33]">
          <div className="w-[91px] h-14 rounded-full flex justify-center items-center">
            <div
              className="relative w-[75px] h-10 rounded-full bg-[#4795FF] dark:bg-[#00000066] border-[2.5px] border-[#EBEBEB] dark:border-[#EBEBEB72] border-opacity-[0.48] flex gap-x-[5px] items-center p-[5px] hover:cursor-pointer"
              onClick={() => {
                document.body.classList.toggle("dark");
              }}
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
                <Link
                  key={link.id}
                  href={link.href}
                  className="w-fit"
                  onClick={() => setMenuState(false)}
                >
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
