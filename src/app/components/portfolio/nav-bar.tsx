"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { NavbarDropdown, NavbarCookie } from "@/app/components/home/nav-bar";
import MenuButton from "@/app/components/home/menu-button";
import Heading from "@/app/components/shared/heading";
import { HephiLogo } from "@/app/components/home/nav-bar";
import { DarkMode, LightMode } from "@/app/components/home/mode-toggle";

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
  const [menuState, setMenuState] = useState(false);

  const handleMenu = (data: boolean) => {
    setMenuState(data);
  };

  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hoveringOverHotZone, setHoveringOverHotZone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 50 &&
        !hovering &&
        !hoveringOverHotZone
      ) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hovering, hoveringOverHotZone]);

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
        className={`hidden sm:fixed sm:z-40 sm:top-[52px] sm:right-0 sm:left-0 sm:w-[85.61%] sm:h-14 sm:flex sm:justify-end sm:items-center lg:max-w-[1319px] lg:justify-between sm:mx-auto transition-transform duration-300 ease-in-out ${
          menuState ? "lg:justify-end" : ""
        } ${
          hidden && !hovering && !hoveringOverHotZone
            ? "-translate-y-[110px]"
            : "translate-y-0"
        }`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Link href={"/#works"} className="hidden lg:block">
          <button
            className={`lg:w-[109px] lg:h-10 lg:rounded-full lg:border-2 lg:border-[#363636] dark:lg:border-[#D1D1D2] lg:flex lg:justify-center lg:items-center hover:cursor-pointer ${
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
        </Link>
        <div className="sm:rounded-full sm:flex sm:gap-x-4 sm:items-center tab-nav-switch sm:bg-[#B1ADAD33]">
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
      <NavbarDropdown menuState={menuState} handleMenu={handleMenu} />
      <NavbarCookie />
    </>
  );
};

export default NavBar;
