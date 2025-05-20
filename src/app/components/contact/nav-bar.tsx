"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

import { NavbarDropdown, NavbarCookie } from "@/app/components/home/nav-bar";
import MenuButton from "@/app/components/home/menu-button";
import Heading from "@/app/components/shared/heading";
import { DarkMode, LightMode } from "@/app/components/home/mode-toggle";

import MenuIcon from "@/app/assets/svgs/menu-icon.svg";
import CancelIcon from "@/app/assets/svgs/cancel-icon.svg";
import { HephiLogo } from "../home/nav-bar";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  const handleMenu = (data: boolean) => {
    setMenuState(data);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        className="fixed top-4 left-0 w-full h-[54px] sm:top-[52px]"
        onMouseEnter={() => setHoveringOverHotZone(true)}
        onMouseLeave={() => setHoveringOverHotZone(false)}
      />
      <nav
        className={`fixed z-30 top-4 left-4 right-4 nav h-[54px] flex justify-between items-center bg-[#B1ADAD33] dark:bg-[#00000066] border border-white dark:border-[#3F3F3F] sm:hidden p-2 pl-4 mx-auto transition-transform duration-300 ease-in-out ${
          hidden && !hovering && !hoveringOverHotZone
            ? "-translate-y-18"
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
        className={`hidden sm:fixed sm:z-30 sm:top-[52px] sm:right-0 sm:left-0 sm:w-[85.61%] sm:h-14 sm:block lg:max-w-[1319px] sm:mx-auto transition-transform duration-300 ease-in-out ${
          hidden && !hovering && !hoveringOverHotZone
            ? "-translate-y-28"
            : "translate-y-0"
        }`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          className={`sm:w-full sm:h-full sm:flex sm:justify-end sm:items-center sm:transition-all sm:duration-1000 sm:ease-in-out ${
            !scrolled ? "lg:max-w-[711px] lg:ml-auto" : "scale-x-100"
          }`}
        >
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
        </div>
      </nav>
      <NavbarDropdown menuState={menuState} handleMenu={handleMenu} />
      <NavbarCookie />
    </>
  );
};

export default NavBar;
