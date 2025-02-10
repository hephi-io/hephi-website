"use client";
import Image from "next/image";
import React from "react";
import CardIG from "../assets/jpegs/a59edf0245df657c9d12deea3c5cd450.jpeg";
import Logo from "../assets/svgs/hephi-logo.svg";
import MenuIcon from "../assets/svgs/menu-icon.svg";
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import DarkIcon from "../assets/svgs/dark-icon.svg";
import LightIcon from "../assets/svgs/light-icon.svg";
import Arrow from "../assets/svgs/arrow-forward.svg";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";

function Contact() {
    return (
        <div className=''>
            <div className=''>
                {/* navbar for moblie */}
                <nav className="nav w-max-screen   flex justify-between items-center p-2 md:hidden">
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

                {/* navbar for tab view */}
                <div className='hidden  md:flex justify-between items-center p-4 bg=[#f3f3f3]  shadow-lg lg:hidden '>
                    <div className="">
                        <Image src={Logo} alt="Hephi Logo" className="" />
                    </div>
                    <div className='flex items-center gap-2 bg-[#f3f3f3] rounded-full p-2 '>
                        <div className='hidden rounded-full p-2 bg-[#4795FF] md:flex gap-x-2 items-center ' >
                            <FaRegMoon className='p-2 text-white w-full h-full cursor-pointer' />
                            <LuSunMedium className='p-2 rounded-full bg-white text-black w-full h-full cursor-pointer' />
                        </div>
                        <button className="rounded-full p-2 bg-white flex gap-x-2">
                            <Image src={MenuIcon} alt="Menu Icon" />
                            <div className="font-bold text-lg leading-[21.6px] text-[#2B2B2B]">
                                Menu
                            </div>
                        </button>
                    </div>
                </div>

                <div className="container mx-auto w-full flex flex-col lg:flex-row justify-between items-center   p-6 gap-6  bg-[#f3f3f3] rounded-2xl lg:rounded-none md:shadow-md lg:shadow-none lg:bg-white ">
                    {/* Card Section */}
                    <div className="lg:w-[50%]   w-full  lg:rounded-2xl lg:shadow-md border-none bg-[#f3f3f3]">
                        <div className="flex flex-col-reverse lg:flex-col w-full lg:rounded-2xl lg:shadow-lg p-4">
                            <h1 className="hidden lg:block uppercase text-black font-bold mb-10">Contact</h1>
                            <div className='my-4'><Image className="w-full  object-cover rounded-2xl " src={CardIG} alt="Card Image" width={500} height={300} priority /></div>
                            <div className="py-5">
                                <h2 className="text-4xl font-semibold mb-4 leading-[3rem]">We’re Here to Bring Your Vision to Life</h2>
                                <p className="text-gray-600 text-sm mb-4">
                                    Have a project in mind or just want to say hello? We’re eager to hear from you. Whether you need a new digital product, a brand refresh, or expert talent, Hephi is ready to collaborate and create something extraordinary together.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:w-[%] w-full flex-grow lg:bg-[#f3f3f3] lg:rounded-2xl lg:shadow-md  lg:p-4 ">
                        <div className="w-full">

                            <div className='hidden lg:flex justify-between items-center mb-4'> {/* Changed mb-5 to mb-4 */}
                                <div className="">
                                    <Image src={Logo} alt="Hephi Logo" className="" width={100} height={50} priority />
                                </div>
                                <div className='flex items-center gap-2 bg-[#f3f3f3] rounded-full p-2'>
                                    <div className='hidden rounded-full p-2 bg-[#4795FF] md:flex gap-x-2 items-center'>
                                        <FaRegMoon className='p-2 text-white w-full h-full cursor-pointer' />
                                        <LuSunMedium className='p-2 rounded-full bg-white text-black w-full h-full cursor-pointer' />
                                    </div>
                                    <button className="rounded-full p-2 bg-white flex gap-x-2">
                                        <Image src={MenuIcon} alt="Menu Icon" width={20} height={20} priority />
                                        <div className="font-bold text-lg leading-[21.6px] text-[#2B2B2B]">
                                            Menu
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-md py-2 px-4 container mx-auto  w-[100%]">
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
                                        <FaArrowRight className="w-6 h-6 text-white" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="  fixed right-4 bottom-4 w-[91px] h-14 rounded-full border border-white flex justify-center items-center dark-mode-toggle-button z-10 md:hidden">
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
            {/* faq */}
            <div className='my-4 container mx-auto p-4'>
                <div className=' container mx-auto flex justify-between items-center p-4 md:flex lg:flex-row gap-6 my-7 md:justify-around lg:justify-between'>
                    <h4 className='text-base font-bold uppercase md:block md:text-xl lg:text-2xl'>faq</h4>
                    <div className='capitalize font-bold text-base md:text-xl lg:text-2xl'>
                        <h2 className=''>Got Questions?</h2>
                        <h3>We’ve Got Answers.</h3>
                    </div>
                </div>



                {/* faq section */}
                <div className='grid  grid-cols-1  my-6  border-red-800 gap-4'>
                    <div className="bg-[#4795FF] p-4 rounded-xl flex items-start flex-row gap-6 py-7 ">
                        <div className=" lg:w-[2rem] lg:h-[1.9rem] md:w-[3rem] md:h-[2.4rem] w-[3rem] h-[2rem] rounded-full border-2 border-white  flex items-center justify-center text-white">
                            <h6 className="text-center">1</h6>
                        </div>

                        <div className='text-white basis-full lg:basis-[90%] lg:mx-7'>
                            <h3 className=' font-bold text-sm md:text-xl lg:my-2'>Do you offer post-launch support?</h3>
                            <p className="text-xs md:text-base lg:w-[700px]">yes, we provide ongoing support and optimization services to ensure your digital product continues to perform at its best.</p>
                        </div>
                        <div className="bg-white text-black rounded-full lg:w-[3rem] lg:h-[2.9rem] md:w-[3rem] md:h-[2.6rem] w-[3rem] h-[2rem] border-2 border-white  flex justify-center items-center cursor-pointer">
                            <FaPlus className="text-lg" />
                        </div>
                    </div>


                    <div className="p-4 flex flex-row gap-6 items-center border-b-2 border-[#c6c6c6] ">
                        <div className="lg:w-[2rem] lg:h-[1.9rem] md:w-[3rem] md:h-[2.4rem] w-[3rem] h-[2rem] rounded-full border-2 border-grey-700  flex items-center justify-center text-gray-700">
                            <h6 className="text-center">2</h6>
                        </div>

                        <div className='text-black basis-full lg:basis-[90%] lg:mx-7'>
                            <h3 className=' font-bold text-sm md:text-xl'>Do you work with international clients</h3>
                        </div>
                        <div className="bg-white text-black rounded-full lg:w-[3rem] lg:h-[2.9rem] md:w-[3rem] md:h-[2.6rem] w-[3rem] h-[2rem] border-2 border-grey-700  flex justify-center items-center cursor-pointer">
                            <FaMinus className="text-sm" />
                        </div>
                    </div>


                    <div className="p-4 flex flex-row gap-6 items-center border-b-2 border-[#c6c6c6] ">
                        <div className="lg:w-[2rem] lg:h-[1.9rem] md:w-[3rem] md:h-[2.4rem] w-[3rem] h-[2rem] rounded-full border-2 border-grey-700 flex items-center justify-center text-gray-700">
                            <h6 className="text-center">3</h6>
                        </div>

                        <div className='text-black basis-full lg:basis-[90%] lg:mx-7'>
                            <h3 className=' font-bold text-sm md:text-xl'>Can you scale your services as our
                                company grows?</h3>
                        </div>
                        <div className="bg-white text-grey-700 rounded-full lg:w-[3rem] lg:h-[2.9rem] md:w-[3rem] md:h-[2.6rem]  w-[3rem] h-[2rem] border-2 border-grey-700  flex justify-center items-center cursor-pointer">
                            <FaMinus />
                        </div>
                    </div>
                    <div className="p-4 flex flex-row gap-6 items-center border-b-2 border-[#c6c6c6] ">
                        <div className="lg:w-[2rem] lg:h-[1.9rem] md:w-[3rem] md:h-[2.4rem] w-[3rem] h-[2rem] rounded-full border-2 border-grey-700  flex items-center justify-center text-gray-700">
                            <h6 className="text-center">4</h6>
                        </div>

                        <div className='text-black basis-full lg:basis-[90%] lg:mx-7'>
                            <h3 className=' font-bold text-sm md:text-xl'>What is your pricing structure?</h3>
                        </div>
                        <div className="bg-white text-grey-700 rounded-full lg:w-[3rem] lg:h-[2.9rem] md:w-[3rem] md:h-[2.6rem] w-[3rem] h-[2rem] border-2 border-grey-700  flex justify-center items-center cursor-pointer">
                            <FaMinus />
                        </div>
                    </div>


                    <div className="p-4 flex flex-row gap-6 items-center border-b-2 border-[#c6c6c6] ">
                        <div className="lg:w-[2rem] lg:h-[1.9rem] md:w-[3rem] md:h-[2.4rem] w-[3rem] h-[2rem] rounded-full border-2 border-grey-700  flex items-center justify-center text-gray-700">
                            <h6 className="text-center">5</h6>
                        </div>

                        <div className='text-black basis-full lg:basis-[90%] lg:mx-7'>
                            <h3 className=' font-bold text-sm md:text-xl'>Can you help with rebranding an existing company?</h3>
                        </div>
                        <div className="bg-white text-grey-700 rounded-full lg:w-[3rem] lg:h-[2.9rem] md:w-[3rem] md:h-[2.6rem] w-[3rem] h-[2rem] border-2 border-grey-700  flex justify-center items-center cursor-pointer">
                            <FaMinus />
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className='container mx-auto p-2'>
                <div className='bg-[#4795FF]  rounded-xl'>
                    <div className='flex justify-between gap-[10px] items-center lg:items-start flex-col lg:flex-row p-4'>
                        <div className="leading-[36px]  lg:basis-[421px]  p-4 md:text-48px lg:leading-[48px] ">
                            <h1 className="text-lg md:text-2xl   text-white font-[400] md:font-semibold  lg:text-5xl ">We're excited to bring your next ideas to life</h1>
                        </div>
                        <div className='bg-[#f3f3f3] px-3  md:px-7 py-4 rounded-2xl lg:basis-[500px] basis-full'>
                            <div className="">
                                <div className="">
                                    <h1 className="text-2xl font-bold  my-2 leading-[3rem]">Get in touch</h1>
                                    <div className="font-normal text-base leading-[19.2px] text-[#6F6F6F] mb-8">
                                        Are you a brand or company in need of contagiously creative stopping power? Just hit us up!
                                    </div>
                                </div>
                                <div className=''>
                                    <button className="rounded-full py-2 px-10 md:px-6 md:py-3 bg-gradient-to-b from-[#4E98FE] to-[#3283F3] flex gap-x-[10px] items-center">

                                        <h2 className="text-xs md:text-base md:leading-[20.8px] text-white">
                                            Get in touch
                                        </h2>

                                        <Image
                                            src={Arrow}
                                            width={24}
                                            height={24}
                                            alt="Arrow"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-white p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   w-full gap-5 ">
                        <div className=''>
                            <h3 className="text-lg font-semibold mb-2">Office</h3>
                            <p>De Corridor 12G</p>
                            <p>Lekki, Lagos</p>
                        </div>
                        <div className=''>
                            <h3 className=" text-sm md:text-lg font-semibold mb-2">Call Line</h3>
                            <p>Mel: +31 6 14 97 98 40</p>
                            <p>Ikenna: +31 6 51 76 07 63</p>
                        </div>
                        <div className=''>
                            <h3 className="text-lg font-semibold mb-2">Mail Us</h3>
                            <p>info@hephi.io</p>
                            <p>careers@hephi.io</p>
                        </div>
                        <div className=''>
                            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                            <p>Instagram</p>
                            <p>LinkedIn</p>
                        </div>
                    </div>
                    <p className="font-semibold text-white text-sm md:text-lg p-4 ">General Terms</p>
                </div>
            </div>
        </div>
    )
}

export default Contact