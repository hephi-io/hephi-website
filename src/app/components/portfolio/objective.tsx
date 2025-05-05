import React from "react";

import Image from "next/image";

import Wrapper from "@/app/components/portfolio/wrapper";
import Container from "@/app/components/portfolio/container";
import Heading from "@/app/components/shared/heading";
import Paragraph from "@/app/components/portfolio/paragraph";
import BigImageContainer from "@/app/components/portfolio/big-image-container";

import { paragraph } from "@/app/components/portfolio/problem";

import PeakBig from "@/app/assets/pngs/portfolio/peak/big/mobile.png";

export const headingText = "From Grass to Grace - A Zipkod story";

const Objective = () => {
  return (
    <Wrapper>
      <Container className="lg:flex lg:justify-between lg:items-start">
        <Heading
          as="h3"
          className="text-base leading-[19.2px] tracking-normal text-[#2B2B2B] dark:text-white sm:text-xl sm:leading-6"
        >
          OBJECTIVE
        </Heading>
        <div className="lg:w-[56.22%]">
          <Heading className="text-[28px] leading-7 tracking-normal text-[#363636] dark:text-white lg:text-[32px] lg:leading-8 mt-10 lg:mt-0">
            {headingText}
          </Heading>
          <Paragraph className="mt-4 dark:text-[#D1D1D2]">
            {paragraph}
          </Paragraph>
          <BigImageContainer className="mt-6 sm:mt-10">
            <Image
              src={PeakBig}
              alt=""
              width={undefined}
              height={undefined}
              className="w-full h-full object-cover rounded-3xl sm:rounded-[42px]"
            />
          </BigImageContainer>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Objective;
