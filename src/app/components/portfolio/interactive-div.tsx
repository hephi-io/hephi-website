"use client";

import React from "react";

import { DarkMode, LightMode } from "@/app/components/home/mode-toggle";

const InteractiveDiv = () => {
  return (
    <div
      className="relative w-[75px] h-10 rounded-full bg-[#4795FF] dark:bg-[#00000066] border-[2.5px] border-[#EBEBEB] dark:border-[#EBEBEB72] border-opacity-[0.48] flex gap-x-[5px] items-center p-[5px] hover:cursor-pointer"
      onClick={ () => document.body.classList.toggle("dark") }
    >
      <div className="z-20 w-[30px] h-[30px] rounded-full text-[#EBEBEB] dark:text-[#282828]">
        <DarkMode />
      </div>
      <div className="z-20 w-[30px] h-[30px] rounded-full text-[#282828] dark:text-[#EBEBEB]">
        <LightMode />
      </div>
      <div className="absolute right-[1.9px] z-10 w-[30px] h-[30px] rounded-full bg-[#EBEBEB] dark:-translate-x-9"></div>
    </div>
  );
};

export default InteractiveDiv;
