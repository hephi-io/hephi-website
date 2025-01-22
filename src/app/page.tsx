"use client"

import Logo from "./assets/hephi-logo.svg"
import MenuIcon from "./assets/menu-icon.svg"
import Arrow from "./assets/arrow-forward.svg"
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

          <section></section>
          <div></div>

        </section>

        {/* IMAGE */}
        <section></section>

      </section>

      <section></section>

    </main>
  );
}
