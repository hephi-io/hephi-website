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
                    <NavBar />
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
            <div className="flex justify-center items-center  flex-col lg:flex-row  w-full lg:max-w-[1391px]  bg-[#F3F3F3] rounded-2xl mb-5 pb-5 lg:mx-auto lg:bg-white lg:gap-6 lg:my-4 lg:py-4 lg:px-3.5">

                <div className=" bg-[#F3F3F3]     lg:w-[40%] lg:h-[795px]   lg:rounded-3xl">
                    <div className="w-full  mx-auto px-4 py-2   lg:rounded-2xl   ">
                        <div className="flex flex-col-reverse lg:flex-col w-full  ">
                            <h1 className="hidden lg:block uppercase text-black lg:text-xl font-bold my-10">Contact</h1>
                            <div className='my-4 '>
                                <Image className="object-cover rounded-2xl  mx-auto   w-full"
                                    src={CardIG}
                                    alt="Card Image"
                                    width={500}
                                    height={300}
                                    priority
                                />
                            </div>
                            <div className="py-5 md:min-w-[71.4%] max-w-full lg:w-full  lg:mx-0">
                                <h2 className="text-3xl lg:text-4xl font-semibold mb-4 leading-[3rem]">We’re Here to Bring Your Vision to Life</h2>
                                <p className="text-gray-600 text-base md:text-lg mb-4  md:w-[458px] lg:w-[90%]">
                                    Have a project in mind or just want to say hello? We’re eager to hear from you. Whether you need a new digital product, a brand refresh, or expert talent, Hephi is ready to collaborate and create something extraordinary together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" sm:h-full  lg:w-[60%] lg:h-[795px]   rounded-3xl bg-[#F3F3F3] overflow-hidden">
                    <div className="w-full px-4">

                        <div className='hidden lg:flex justify-between items-center  mb-5 lg:my-10'>
                            <div className="">
                                <Image
                                 src={Logo}
                                 alt="Hephi Logo"
                                 className=""
                                 width={100}
                                 height={50}
                                 priority />
                            </div>
                            <div className='flex items-center gap-2 bg-[#f3f3f3] rounded-full p-2'>
                                <div className='hidden rounded-full p-2 bg-[#4795FF] md:flex gap-x-2 items-center'>
                                    <Image
                                     src={DarkIcon}
                                     className='text-white w-full h-full cursor-pointer'
                                     alt="Dark"
                                      />
                                    <Image
                                     src={LightIcon}
                                     className='rounded-full bg-white text-black w-full h-full cursor-pointer'
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

                        <div className="bg-white rounded-2xl shadow-md py-6 px-4 lg:my-20   mx-auto  w-full  sm:h-full">
                            <h2 className="text-2xl font-semibold mb-4">We're Here to Help</h2>
                            <p className="text-gray-600 mb-6">
                                For urgent inquiries or immediate support, click below to get in touch with our team. We're ready to assist you with any digital needs.
                            </p>

                            <form className=''>
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                                    <input type="text" name="firstName" className="w-full  border-gray-300 rounded-md p-3 bg-[#f3f3f3] placeholder:font-semibold" placeholder="First name" required />
                                    <input type="text" name="lastName" className="w-full  border-gray-300 rounded-md p-3 bg-[#f3f3f3] placeholder:font-semibold" placeholder="Last name" required />
                                </div>

                                <input type="email" name="email" className="w-full border-gray-300 rounded-md p-3 bg-[#f3f3f3] placeholder:font-semibold mb-4" required placeholder="Email Address" />

                                <select name="service" className="w-full  border-gray-300 rounded-md p-3 bg-[#f3f3f3] placeholder:font-semibold mb-4">
                                    <option value="">-- Select --</option>
                                    <option value="web-design">Web Design</option>
                                    <option value="development">Development</option>
                                    <option value="marketing">Marketing</option>
                                </select>

                                <textarea name="message" rows={4} className="w-full  border-gray-300 rounded-md px-3 py-2 bg-[#f3f3f3] placeholder:font-semibold mb-2" placeholder="Type your message" required />

                                <button type="submit" className="w-full flex justify-between items-center bg-[#4795FF] rounded-xl text-white font-bold p-4 my-4">
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
            <div className="sm:py-4">
                <FAQSection />
                <Footer />
            </div>
        </div>
    )
}

export default Contact