"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Francois_One } from "next/font/google";

import {HephiLogo} from "@/app/components/home/nav-bar"
import Heading from "@/app/components/shared/heading";
import FAQSection from "@/app/components/home/faq-section";
import Footer from "@/app/components/home/footer";
import NavBar from "@/app/components/contact/nav-bar";
import ModeToggle from "@/app/components/home/mode-toggle";
import Textarea from "@/app/components/contact/textarea";
import Input from "@/app/components/contact/input";
import EmailInput from "@/app/components/contact/email-input";
import Select from "@/app/components/contact/select";

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
                <div className="h-[54px] mb-20 sm:h-14 sm:mb-[120px]">
                  <div className="hidden sm:w-fit sm:h-full sm:flex sm:items-center">
                    <Link href="/">
                      <HephiLogo />
                    </Link>
                  </div>
                </div>
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
            <div className="lg:w-[91.03%] lg:h-full lg:flex lg:flex-col lg:justify-between lg:mx-auto">
              <div className="hidden lg:w-fit lg:h-14 lg:flex lg:items-center">
                <Link href={"/"}>
                  <HephiLogo />
                </Link>
              </div>
              <div className="rounded-3xl bg-white dark:bg-[#242425] py-4 sm:py-9 lg:py-6">
                <div className="w-[91.14%] sm:w-[89.92%] lg:w-[95.62%] mx-auto">
                  <h2
                    className={`${francoisOne.className} text-[#363636] dark:text-white text-2xl leading-[41.6px] tracking-normal sm:text-[32px] sm:leading-[130%] mb-4 sm:mb-6 `}
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
                      <Input name="firstName" placeholder="First name" />
                      <Input name="lastName" placeholder="Last name" />
                    </div>
                    <EmailInput />
                    <Select />
                    <Textarea />
                    <button
                      type="submit"
                      className="w-full flex justify-between items-center bg-[#4795FF] rounded-xl text-white font-bold lg:p-[24px] p-[16px] hover:cursor-pointer"
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
