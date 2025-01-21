"use client"

import Logo from "./assets/hephi-logo.svg"
import MenuIcon from "./assets/menu-icon.svg"
import Image from "next/image"

export default function Home() {
  return (
    <main>

      <section>

        <section className="border border-[#EBEBED] p-4 bg-[#F3F3F3]">

          <section>

            <nav className="nav h-[54px] flex justify-between items-center p-2 pl-4 mb-[104px]">

              <div className="pt-2 pb-2">
                <Image 
                  src={Logo} 
                  width={100.88} 
                  height={19} 
                  alt="Hephi Logo" 
                />
              </div>

              <div className="rounded p-2 bg-white flex gap-x-2">

                <Image
                  src={MenuIcon}
                  width={20.56}
                  height={20.56}
                  alt="Menu Icon"
                />

                <div className="font-normal text-lg leading-[21.6px] text-[#2B2B2B]">
                  Menu
                </div>

              </div>

            </nav>

            <div></div>

          </section>

          <section></section>
          <div></div>

        </section>

        <section></section>

      </section>

      <section></section>

    </main>
  );
}
