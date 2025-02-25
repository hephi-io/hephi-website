"use client";
import Image from "next/image";
import React from "react";
import CardIG from "@/app/assets/jpegs/a59edf0245df657c9d12deea3c5cd450.jpeg";
import Logo from "@/app/assets/svgs/hephi-logo.svg";
import MenuIcon from "@/app/assets/svgs/menu-icon.svg";
import DarkIcon from "@/app/assets/svgs/dark-icon.svg";
import LightIcon from "@/app/assets/svgs/light-icon.svg";
import Arrow from "@/app/assets/svgs/arrow.svg";
import FAQSection from "@/app/components/home/faq-section";
import Footer from "@/app/components/home/footer"
import NavBar from "@/app/components/home/nav-bar";
import { Francois_One } from "next/font/google"

const francoisOne = Francois_One({ weight: "400", subsets: ["latin"] })

function Contact() {
    return (
        <div className=''>
            <div className=''>
                <div
                    className="lg:hidden"
                >
                    {/* <NavBar /> */}
                </div>
                <div className="fixed right-4 bottom-4 w-[91px] h-14 rounded-full border border-white flex justify-center items-center dark-mode-toggle-button z-10 md:hidden">
                    <div className="relative w-[75px] h-10 rounded-full bg-[#4795FF] border-[2.5px] border-[#EBEBEB] border-opacity-[0.48] flex gap-x-[5px] items-center p-[5px]">

                        <Image
                            src={DarkIcon}
                            width={50}
                            height={50}
                            alt="Dark Icon"
                            className="z-20 rounded-full"
                        />
                        <Image
                            src={LightIcon}
                            width={50}
                            height={50}
                            alt="Dark Icon"
                            className="z-20 rounded-full"
                        />

                        <div className="absolute right-[2.5px] z-10 w-[30px] h-[30px] rounded-full bg-[#EBEBEB]"></div>

                    </div>
                </div>
            </div>
            <div className="bg-[#F3F3F3]  lg:bg-white rounded-2xl">
            <div className="w-[90%] mx-auto sm:w-[94.24%] lg:max-w-[1391px] flex justify-center items-center  flex-col lg:flex-row  mb-5 pb-5  lg:gap-[16px] lg:my-4 lg:py-4">

                <div className="bg-[#F3F3F3] lg:max-w-[40%] lg:h-full lg:p-[36px] lg:rounded-3xl ">
                    <h1 className={`${francoisOne.className} hidden lg:block font-normal text-2xl leading-[24px] tracking-normal text-[#2B2B2B] mb-12`}>Contact</h1>
                    <div className="flex flex-col-reverse lg:flex-col w-full px-2 lg:px-0 lg:h-[798px] lg:rounded-2xl "> {/* Removed redundant border-red-800 */}
                        <div className="lg:max-w-[500px] lg:h-[494px] lg:gap-[23.65px] rounded-[24px] lg:border-[1.48px] overflow-hidden flex items-center justify-center my-4 lg:my-0 ">
                            <Image
                                className="w-full h-full object-cover"
                                src={CardIG}
                                alt="Card Image"
                                priority
                            />
                        </div>

                        <div className="py-5 lg:pt-12 md:min-w-[71.4%] max-w-full lg:w-full lg:mx-0">
                            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 leading-[3rem]">We’re Here to Bring Your Vision to Life</h2>
                            <p className="text-gray-600 text-base md:text-lg  lg:w-[90%]">
                                Have a project in mind or just want to say hello? We’re eager to hear from you. Whether you need a new digital product, a brand refresh, or expert talent, Hephi is ready to collaborate and create something extraordinary together.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sm:h-full lg:max-w-[60%] rounded-3xl bg-[#F3F3F3] lg:p-[36px]">
                    <div className="w-full px-2 lg:px-0">
                        <div className="hidden lg:flex justify-between items-center lg:mb-[11rem]">
                            <div className="">
                                <Image
                                    src={Logo}
                                    alt="Hephi Logo"
                                    className=""
                                    width={100}
                                    height={50}
                                    priority
                                />
                            </div>
                            <div className="flex items-center gap-2 bg-[#f3f3f3] rounded-full p-2">
                                <div className="hidden rounded-full p-2 bg-[#4795FF] md:flex gap-x-2 items-center">
                                    <Image
                                        src={DarkIcon}
                                        className="text-white w-full h-full cursor-pointer"
                                        alt="Dark"
                                    />
                                    <Image
                                        src={LightIcon}
                                        className="rounded-full bg-white text-black w-full h-full cursor-pointer"
                                        alt="Light"
                                    />
                                </div>
                                <button className="rounded-full p-2 bg-white flex gap-x-2">
                                    <Image
                                        src={MenuIcon}
                                        alt="Menu Icon"
                                        width={20}
                                        height={20}
                                        priority
                                    />
                                    <div className="font-bold text-lg leading-[21.6px] text-[#2B2B2B]">
                                        Menu
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl py-6 px-4 lg:w-[100%] lg:py-[24px] lg:px-[16px] lg:gap-[52px]"> {/* Removed redundant border-0 border-red-800 */}
                            <div className="lg:min-w-full lg:justify-between lg:gap-[36px]">
                                <div className="lg:min-w-full lg:h-[118px] lg:gap-[24px]  lg:mb-1.5">
                                    <h2 className={`${francoisOne.className} text-[#363636]  font-normal text-2xl leading-[41.6px]`}>We're Here to Help</h2>
                                    <p className="font-nouvelle font-normal text-base leading-[26px]">
                                        For urgent inquiries or immediate support, click below to get in touch with our team. We're ready to assist you with any digital needs.
                                    </p>
                                </div>
                            </div>
                            <form className="lg:min-w-full lg:gap-[16px] mt-4 lg:mt-0">
                                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[10px] mb-4 gap-4"> {/* Added gap-y-4 for smaller screens */}
                                    <input type="text" name="firstName" className="w-full border-gray-300 rounded-2xl lg:p-[24px] p-[16px] bg-[#EEEEEE] placeholder:font-semibold focus:outline-none" placeholder="First name" required /> {/* Added padding for smaller screens */}
                                    <input type="text" name="lastName" className="w-full border-gray-300 rounded-2xl lg:p-[24px] p-[16px] bg-[#EEEEEE] placeholder:font-semibold focus:outline-none" placeholder="Last name" required /> {/* Added padding for smaller screens */}
                                </div>

                                <input type="email" name="email" className="w-full border-gray-300 rounded-2xl lg:p-[24px] p-[16px] bg-[#EEEEEE] placeholder:font-semibold mb-4 focus:outline-none" required placeholder="Email Address" /> {/* Added padding for smaller screens */}

                                <select name="service" className="w-full border-gray-300 rounded-2xl lg:p-[24px] p-[16px] bg-[#EEEEEE] placeholder:font-semibold mb-4" > {/* Added padding for smaller screens */}
                                    <option value="">-- Select --</option>
                                    <option value="web-design">Web Design</option>
                                    <option value="development">Development</option>
                                    <option value="marketing">Marketing</option>
                                </select>

                                <textarea name="message" rows={4} className="w-full lg:mb-4 border-gray-300 rounded-xl lg:p-[24px] p-[16px] bg-[#f3f3f3] placeholder:font-semibold focus:outline-none resize-none lg:max-h-[112px]" placeholder="Type your message" required /> {/* Added padding for smaller screens */}

                                <button type="submit" className="w-full flex justify-between items-center bg-[#4795FF] rounded-xl text-white font-bold lg:p-[24px] p-[16px]"> {/* Added padding for smaller screens */}
                                    Contact Our Team
                                    <Image
                                        src={Arrow}
                                        alt="Menu Icon"
                                        className="w-6 h-6 text-white"
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            <div className="sm:py-4">
                <FAQSection />
                <Footer />
            </div>
        </div>
    )
}

export default Contact