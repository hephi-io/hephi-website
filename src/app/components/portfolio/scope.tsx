import React from "react";

import Image from "next/image";

import Wrapper from "@/app/components/portfolio/wrapper";
import Container from "@/app/components/portfolio/container";
import Heading from "@/app/components/shared/heading";
import ParagraphBlock from "@/app/components/portfolio/paragraph-block";
import Paragraph from "@/app/components/portfolio/paragraph";

import { paragraph } from "@/app/components/portfolio/problem";

import PeakSmall from "@/app/assets/pngs/portfolio/peak/small/mobile.png";
import PeakBig from "@/app/assets/pngs/portfolio/peak/big/mobile.png";

const Scope = () => {
  const paragraphs = [1, 2];

  const images = [1, 2, 3];

  return (
    <Wrapper className="mb-12">
      <Container className="lg:flex lg:justify-between lg:items-start">
        <Heading
          as="h3"
          className="text-base leading-[19.2px] tracking-normal text-[#2B2B2B] dark:text-white sm:text-xl sm:leading-6"
        >
          SCOPE
        </Heading>
        <div className="lg:w-[56.22%]">
          <ParagraphBlock className="lg:flex lg:flex-row lg:justify-between lg:items-start mt-10 lg:mt-0">
            {paragraphs.map((paragraphId) => (
              <Paragraph key={paragraphId} className="lg:w-[48.98%] dark:text-[#D1D1D2]">
                {paragraph}
              </Paragraph>
            ))}
          </ParagraphBlock>
        </div>
      </Container>
      <Container className="mt-10">
        <section className="flex flex-col gap-y-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-row lg:justify-between lg:items-center mt-10 lg:mt-0">
          {images.map((image) => (
            <div
              key={image}
              className="h-[380px] rounded-3xl sm:h-[697px] sm:rounded-[42px] lg:w-[32.57%]"
            >
              <Image
                src={PeakSmall}
                alt=""
                width={undefined}
                height={undefined}
                className="w-full h-full object-cover rounded-3xl sm:hidden"
              />
              <Image
                src={PeakBig}
                alt=""
                width={undefined}
                height={undefined}
                className="hidden sm:block sm:w-full sm:h-full sm:object-cover sm:rounded-[42px]"
              />
            </div>
          ))}
        </section>
      </Container>
    </Wrapper>
  );
};

export default Scope;
