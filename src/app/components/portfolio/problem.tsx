import React from "react";

import Image from "next/image";

import Wrapper from "@/app/components/portfolio/wrapper";
import Container from "@/app/components/portfolio/container";
import Heading from "@/app/components/shared/heading";
import ParagraphBlock from "@/app/components/portfolio/paragraph-block";
import Paragraph from "@/app/components/portfolio/paragraph";
import BigImageContainer from "@/app/components/portfolio/big-image-container";

import PeakBig from "@/app/assets/pngs/portfolio/peak/big/mobile.png";

export const paragraph =
  "In a constantly changing world, financial transactions need to be streamlined so users no longer need multiple services to achieve their financial goals. Dashr aims to be the number one platform for bill payments using direct payments, QR code transactions, and URL payments. Dashr is a do-it-all bank—from savings to loans, budgeting, and international transactions, Dashr will revolutionize modern banking.";

export const paragraphs = [1, 2, 3];

const Problem = () => {
  return (
    <Wrapper>
      <Container className="lg:flex lg:justify-between lg:items-start">
        <Heading
          as="h3"
          className="text-base leading-[19.2px] tracking-normal text-[#2B2B2B] dark:text-white sm:text-xl sm:leading-6"
        >
          PROBLEM
        </Heading>
        <div className="lg:w-[56.22%]">
          <ParagraphBlock className="mt-10 lg:mt-0">
            {paragraphs.map((paragraphId) => (
              <Paragraph key={paragraphId} className="dark:text-[#D1D1D1]">
                {paragraph}
              </Paragraph>
            ))}
          </ParagraphBlock>
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

export default Problem;
