"use client"

import { useEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";

import SectionHeader from "@/app/components/home/section-header";
import Heading from "@/app/components/shared/heading";

import AvatarOne from "@/app/assets/svgs/avatarOne.svg";
import ChevronBack from "@/app/assets/svgs/chevron-back.svg";
import ChevronForward from "@/app/assets/svgs/chevron-forward.svg";

const TestimonialSection = () => {
  const [step, setStep] = useState(1);
  const [sliderProgress, setSliderProgress] = useState(0);

  useEffect(() => {
    if (sliderProgress === 100) {
      setStep((state) => (state == 4 ? 1 : state + 1));
    }
  }, [sliderProgress]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderProgress((state) => {
        if (state === 100) {
          return 0;
        }

        return state + 10;
      });

      return () => {
        clearInterval(intervalId);
      };

    }, 1000);
  }, []);

  const handleClick = () => {};

  const paginations = [true, false, false, false];

  const cardContent = {
    avatar: AvatarOne,
    header: "Jon Smith",
    subHeader: "Head of Marketing - Zipkod",
    paragraph:
      "Hephi brought our digital vision to life with creativity and precision. Their team feels like an extension of ours, always ready to innovate.",
  };

  // const rotate = `rotate-[${(((sliderCard.number-1)*(360/total))*(3.142/180))}rad]`

  // style={{ transform: `rotateX(${((sliderCard.number-1)*(360/total))}deg)` }}

  const sliderCards = [
    {
      number: 1,
      avatar: cardContent.avatar,
      header: cardContent.header,
      subHeader: cardContent.subHeader,
      paragraph: cardContent.paragraph,
    },
    {
      number: 2,
      avatar: cardContent.avatar,
      header: cardContent.header,
      subHeader: cardContent.subHeader,
      paragraph: cardContent.paragraph,
    },
    {
      number: 3,
      avatar: cardContent.avatar,
      header: cardContent.header,
      subHeader: cardContent.subHeader,
      paragraph: cardContent.paragraph,
    },
    {
      number: 4,
      avatar: cardContent.avatar,
      header: cardContent.header,
      subHeader: cardContent.subHeader,
      paragraph: cardContent.paragraph,
    },
    {
      number: 5,
      avatar: cardContent.avatar,
      header: cardContent.header,
      subHeader: cardContent.subHeader,
      paragraph: cardContent.paragraph,
    },
    {
      number: 6,
      avatar: cardContent.avatar,
      header: cardContent.header,
      subHeader: cardContent.subHeader,
      paragraph: cardContent.paragraph,
    },
    {
      number: 7,
      avatar: cardContent.avatar,
      header: cardContent.header,
      subHeader: cardContent.subHeader,
      paragraph: cardContent.paragraph,
    },
    {
      number: 8,
      avatar: cardContent.avatar,
      header: cardContent.header,
      subHeader: cardContent.subHeader,
      paragraph: cardContent.paragraph,
    },
    {
      number: 9,
      avatar: cardContent.avatar,
      header: cardContent.header,
      subHeader: cardContent.subHeader,
      paragraph: cardContent.paragraph,
    },
    {
      number: 10,
      avatar: cardContent.avatar,
      header: cardContent.header,
      subHeader: cardContent.subHeader,
      paragraph: cardContent.paragraph,
    },
  ];

  const total = sliderCards.length;

  return (
    <section className="relative mb-24 sm:mb-[120px]">

      <section className="w-[90%] mx-auto sm:w-[94.24%] lg:max-w-[1391px]">
        <SectionHeader
          header="TESTIMONIAL"
          subHeader="What Some of Our Clients Say"
        />
      </section>

      <section className="relative overflow-hidden h-[500px] sm:h-[620px] flex justify-center">
        <div className="absolute top-[719.5px] right-0 left-0 mx-auto w-[266.39px] h-[354.12px] infinite-spin">
          {sliderCards.map((sliderCard) => (
            <div
              key={sliderCard.number}
              style={{
                position: "absolute",
                top: `${
                  695.5 *
                  Math.cos(
                    (sliderCard.number - 1) * (360 / total) * (Math.PI / 180)
                  ) *
                  -1
                }px`,
                left: `${
                  695.5 *
                  Math.sin(
                    (sliderCard.number - 1) * (360 / total) * (Math.PI / 180)
                  )
                }px`,
                transform: `rotate(${
                  (sliderCard.number - 1) * (360 / total)
                }deg)`,
              }}
              className={`w-[266.39px] h-[354.12px] rounded-[19.32px] border-[0.8px] border-[#DCDBDB] bg-[#F3F3F3] backdrop-blur-[24.14px] flex flex-col justify-between p-[28.97px]`}
            >
              <section className="flex gap-x-[6.44px] items-center">
                <div className="w-[48.29px] h-[48.29px] rounded-full">
                  <Image
                    src={sliderCard.avatar}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <Heading className="text-[22.53px] leading-[22.53px] tracking-normal text-[#363636] m-0 p-0">
                    {sliderCard.header}
                  </Heading>

                  <p className="text-[12.88px] leading-[12.88px] tracking-normal text-[#9C9C9C] mt-[9.66px] mx-0 mb-0 p-0">
                    {sliderCard.subHeader}
                  </p>
                </div>
              </section>

              <article>
                <Heading
                  as="span"
                  className="text-[38.63px] leading-[38.63px] tracking-normal text-[#363636]"
                >
                  “
                </Heading>
                <span className="text-[16.1px] leading-[16.1px] tracking-normal text-[#363636]">
                  {sliderCard.paragraph}
                </span>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="absolute mx-auto right-0 left-0 bottom-0 w-[272px] h-[64px] flex justify-between items-center p-2.5">
        <ArrowButton image={ChevronBack} />

        <div className="flex gap-x-2 items-center">
          {paginations.map((pagination, index) => (
            <div key={index} className="w-6 h-1 rounded-full bg-[#C6C6C6]">
              {<div
                style={{ width: `${sliderProgress}%` }}
                className={`h-full rounded-full bg-[#585656] transition-all duration-300 ${
                  index + 1 !== step && "hidden"
                }`}
              ></div>}
            </div>
          ))}
        </div>

        <ArrowButton image={ChevronForward} />
      </section>

    </section>
  );
};

export default TestimonialSection;

interface IArrowButton {
  image: any;
}

const ArrowButton = (props: IArrowButton) => {
  const { image } = props;

  return (
    <button className="w-[42px] h-[42px] rounded-full border border-[#C6C6C6]">
      <Image src={image} alt="" width={25.2} height={25.2} className="m-auto" />
    </button>
  );
};
