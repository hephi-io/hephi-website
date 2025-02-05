import React from 'react'

import Image from "next/image";

import Logo from "./assets/svgs/hephi-logo.svg";
import MenuIcon from "./assets/svgs/menu-icon.svg";

const MobileNavBar = () => {
  return (
    <nav className="sm:hidden fixed z-10 top-4 left-4 right-4 nav h-[54px] mx-auto flex justify-between items-center p-2 pl-4">

      <div className="pt-2 pb-2">
        <Image src={Logo} width={100.88} height={19} alt="Hephi Logo" />
      </div>

      <button className="rounded p-2 bg-white flex gap-x-2">

        <Image src={MenuIcon} width={20.56} height={20.56} alt="Menu Icon" />

        <div className="font-normal text-lg leading-[21.6px] text-[#2B2B2B]">
          Menu
        </div>

      </button>

    </nav>
  )
}

export default MobileNavBar
