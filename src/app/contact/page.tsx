"use client";

import React from "react";

import Image from "next/image";
import { Francois_One } from "next/font/google";

import Heading from "@/app/components/shared/heading";
import FAQSection from "@/app/components/home/faq-section";
import Footer from "@/app/components/home/footer";
import NavBar from "@/app/components/contact/nav-bar";
import ModeToggle from "@/app/components/home/mode-toggle";
import { HephiLogo } from "@/app/components/home/nav-bar";

import Arrow from "@/app/assets/svgs/arrow.svg";
import CardIG from "@/app/assets/jpegs/a59edf0245df657c9d12deea3c5cd450.jpeg";

const francoisOne = Francois_One({ weight: "400", subsets: ["latin"] });

function Contact() {
  return (
    <div className="bg-white dark:bg-[#131314] sm:py-4">
      <NavBar />
      <ModeToggle />
      <div className="bg-[#F3F3F3] dark:bg-[#131314] border border-[#EBEBED] dark:border-[#313131] sm:w-[94.24%] sm:rounded-[42px] lg:max-w-[1391px] lg:h-[966px] lg:bg-white lg:border-none lg:rounded-none py-4 mb-24 sm:py-9 sm:mb-[120px] lg:p-0 mx-auto">
        <div className="w-[91.86%] sm:w-[90.84%] lg:w-full lg:h-full lg:flex lg:justify-between lg:items-start mx-auto lg:mx-0">
          <div className="lg:w-[41.12%] lg:h-full lg:rounded-[42px] lg:bg-[#F3F3F3] dark:lg:bg-[#1B1B1C] lg:border lg:border-[#EBEBED] dark:lg:border-[#313131] lg:py-9">
            <div className="lg:w-[87.41%] lg:h-full lg:flex lg:flex-col lg:justify-between lg:mx-auto">
              <Heading className="hidden lg:block lg:text-xl lg:leading-[120%] lg:tracking-normal lg:text-[#2B2B2B] dark:lg:text-white">
                CONTACT
              </Heading>
              <div className="mb-6 sm:mb-16 lg:hidden">
                <div className="h-[54px] mb-20 sm:h-14 sm:mb-[120px]"></div>
                <Heading className="text-3xl lg:text-4xl font-semibold leading-[3rem] text-[#363636] dark:text-white tracking-normal sm:text-[36px] sm:leading-[100%] mb-6">
                  We’re Here to Bring Your Vision to Life
                </Heading>
                <p className="text-base text-[#6F6F6F] dark:text-[#D1D1D2] sm:text-xl leading-[120%] tracking-normal sm:w-[64.85%]">
                  Have a project in mind or just want to say hello? We’re eager
                  to hear from you. Whether you need a new digital product, a
                  brand refresh, or expert talent, Hephi is ready to collaborate
                  and create something extraordinary together.
                </p>
              </div>
              <div>
                <div className="h-[488px] rounded-4xl overflow-hidden sm:h-[494px] sm:rounded-3xl mb-10 sm:mb-16">
                  <Image
                    className="w-full h-full object-cover"
                    src={CardIG}
                    alt="Card Image"
                    priority
                  />
                </div>
                <Heading className="hidden lg:block lg:text-5xl lg:leading-[100%] lg:tracking-normal lg:text-[#363636] dark:lg:text-white lg:mb-6">
                  We’re Here to Bring Your Vision to Life
                </Heading>
                <p className="hidden lg:block lg:text-xl lg:text-[#6F6F6F] dark:lg:text-[#D1D1D2] lg:leading-[120%] lg:tracking-normal">
                  Have a project in mind or just want to say hello? We’re eager
                  to hear from you. Whether you need a new digital product, a
                  brand refresh, or expert talent, Hephi is ready to collaborate
                  and create something extraordinary together.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[57.73%] lg:h-full lg:rounded-[42px] lg:border lg:border-[#EBEBED] dark:lg:border-[#313131] lg:bg-[#F3F3F3] dark:lg:bg-[#1B1B1C] lg:py-9">
            <div className="lg:w-[91.03%] lg:h-full lg:flex lg:items-end lg:mx-auto">
              <div className="rounded-3xl bg-white dark:bg-[#242425] py-4 sm:py-9 lg:py-6">
                <div className="w-[91.14%] sm:w-[89.92%] lg:w-[95.62%] mx-auto">
                  <h2
                    className={`${francoisOne.className} text-[#363636] dark:text-white text-2xl leading-[41.6px] tracking-normal sm:text-[32px] sm:leading-[130%] mb-4 sm:mb-6`}
                  >
                    We&apos;re Here to Help
                  </h2>
                  <p className="text-base text-[#6F6F6F] dark:text-[#D1D1D2] leading-[26px] tracking-normal sm:text-xl sm:leading-[130%] mb-9">
                    For urgent inquiries or immediate support, click below to
                    get in touch with our team. We&apos;re ready to assist you
                    with any digital needs.
                  </p>
                  <form>
                    <div className="sm:flex sm:justify-between sm:items-center sm:mb-4">
                      <input
                        type="text"
                        name="firstName"
                        className="w-full border border-gray-300 dark:border-[#6C6C6C] rounded-2xl lg:p-[24px] p-[16px] bg-[#EEEEEE] dark:bg-[#333334] placeholder:font-semibold dark:placeholder:text-[#C9C9CA] focus:outline-none mb-4 sm:w-[48.75%] sm:mb-0"
                        placeholder="First name"
                        required
                      />
                      <input
                        type="text"
                        name="lastName"
                        className="w-full border border-gray-300 dark:border-[#6C6C6C] rounded-2xl lg:p-[24px] p-[16px] bg-[#EEEEEE] dark:bg-[#333334] placeholder:font-semibold dark:placeholder:text-[#C9C9CA] focus:outline-none mb-4 sm:w-[48.75%] sm:mb-0"
                        placeholder="Last name"
                        required
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="w-full border border-gray-300 dark:border-[#6C6C6C] rounded-2xl lg:p-[24px] p-[16px] bg-[#EEEEEE] dark:bg-[#333334] placeholder:font-semibold dark:placeholder:text-[#C9C9CA] focus:outline-none mb-4"
                      required
                      placeholder="Email Address"
                    />
                    <select
                      name="service"
                      className="w-full border border-gray-300 dark:border-[#6C6C6C] rounded-2xl lg:p-[24px] p-[16px] bg-[#EEEEEE] dark:bg-[#333334] placeholder:font-semibold dark:text-[#C9C9CA] mb-4"
                    >
                      <option value="" className="dark:text-[#C9C9CA]">
                        -- Select --
                      </option>
                      <option value="web-design">Web Design</option>
                      <option value="development">Development</option>
                      <option value="marketing">Marketing</option>
                    </select>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full lg:mb-4 border border-gray-300 dark:border-[#6C6C6C] rounded-xl lg:p-[24px] p-[16px] bg-[#f3f3f3] dark:bg-[#333334] placeholder:font-semibold dark:placeholder:text-[#C9C9CA] focus:outline-none resize-none lg:max-h-[112px] mb-4"
                      placeholder="Type your message"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full flex justify-between items-center bg-[#4795FF] rounded-xl text-white font-bold lg:p-[24px] p-[16px]"
                    >
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
      </div>
      <div className="mb-24 sm:mb-[120px]">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
