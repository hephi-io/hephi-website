import React from "react";

import Image, { StaticImageData } from "next/image";

import Heading from "@/app/components/shared/heading";

import BubbleCube from "@/app/assets/svgs/bubble-cube.svg";
import LightBulb from "@/app/assets/svgs/light-bulb.svg";
import ToggleIcon from "@/app/assets/svgs/toggle-icon.svg";
import Rocket from "@/app/assets/svgs/rocket.svg";
import Handshake from "@/app/assets/svgs/handshake.svg";
import Binoculars from "@/app/assets/svgs/binoculars.svg";
import Tools from "@/app/assets/svgs/tools.svg";
import LaptopIcon from "@/app/assets/svgs/laptop-icon.svg";

import Star from "@/app/assets/pngs/star (1).png";
import Jotter from "@/app/assets/pngs/jotter.png";
import Brain from "@/app/assets/pngs/braain.png";
import Plus from "@/app/assets/pngs/plus.png";
import Energy from "@/app/assets/pngs/energy.png";
import Dedicated from "@/app/assets/pngs/dedicated.png";
import Fire from "@/app/assets/pngs/Fire.png";
import ThumbsUp from "@/app/assets/pngs/thumbs-up.png";
import Collabo from "@/app/assets/pngs/brrandd.png";
import Coin from "@/app/assets/pngs/coin.png";
import Transparency from "@/app/assets/pngs/transparency.png";

const MarqueeSection = () => {
  const marqueeItems = [
    { text: "Energetic", picturePath: Energy, pictureWidth: "48.4" },
    { text: "Client-First", picturePath: ThumbsUp, pictureWidth: "48.4" },
    { text: "Creative", picturePath: LightBulb, pictureWidth: "" },
    { text: "Innovative", picturePath: LaptopIcon, pictureWidth: "" },
    { text: "Reliable", picturePath: Star, pictureWidth: "48.4" },
    { text: "Dynamic", picturePath: BubbleCube, pictureWidth: "60.5" },
    { text: "Passionate", picturePath: Rocket, pictureWidth: "" },
    { text: "Agile", picturePath: Jotter, pictureWidth: "48.4" },
    { text: "Empathetic", picturePath: Fire, pictureWidth: "48.4" },
    { text: "Growth partner", picturePath: Coin, pictureWidth: "48.4" },
  ];

  const secondMarqueeItems = [
    { text: "Customer-centric", picturePath: Handshake, pictureWidth: "" },
    { text: "Dedicated", picturePath: Dedicated, pictureWidth: "48.4" },
    { text: "Visionary", picturePath: Binoculars, pictureWidth: "" },
    { text: "Strategic", picturePath: Brain, pictureWidth: "48.4" },
    { text: "Resourceful", picturePath: Plus, pictureWidth: "48.4" },
    { text: "Expert", picturePath: Tools, pictureWidth: "" },
    { text: "Transparent", picturePath: Transparency, pictureWidth: "60.5" },
    { text: "Transformative", picturePath: ToggleIcon, pictureWidth: "" },
    { text: "Collaborative", picturePath: Collabo, pictureWidth: "60.5" },
  ];

  return (
    <section className="overflow-x-hidden mb-24 sm:mb-[120px]">
      <Marquee marqueeItems={marqueeItems} duration="40s" />
      <Marquee
        marqueeItems={secondMarqueeItems}
        duration="45s"
        marqueeDirection="reverse"
      />
      <Marquee marqueeItems={marqueeItems} duration="50s" />
      <Marquee
        marqueeItems={secondMarqueeItems}
        duration="55s"
        marqueeDirection="reverse"
        noMarginBottom={true}
      />
    </section>
  );
};

interface IMarquee {
  text: string;
  picturePath: StaticImageData | string;
  pictureWidth?: string;
}

interface IMarqueeProps {
  marqueeItems: IMarquee[];
  duration: string;
  marqueeDirection?: string;
  noMarginBottom?: boolean;
}

const Marquee = (props: IMarqueeProps) => {
  const { marqueeItems, duration, marqueeDirection, noMarginBottom } = props;

  return (
    <div className="overflow-hidden flex justify-start">
      <div
        style={{ animationDuration: `${duration}` }}
        className={`h-[60.5px] flex gap-x-[21.19px] items-center 
          ${noMarginBottom ? "mb-0" : "mb-[13.7px]"} 
          ${
            marqueeDirection === "reverse"
              ? "translate-x-[-85%] reverse-marquee"
              : "marquee"
          }`}
      >
        {[...marqueeItems, ...marqueeItems].map((marqueeItem, index) => (
          <div
            key={index}
            className="flex gap-x-[12.1px] items-center shrink-0"
          >
            <Heading
              as="div"
              className="text-[24.2px] leading-[29.04px] text-[#6F6F6F] shrink-0"
            >
              {marqueeItem.text}
            </Heading>
            <div
              className={`w-[30.25px] h-[30.25px] rounded-full bg-[#D9D9D9] shrink-0 ${
                marqueeItem.picturePath && "hidden"
              }`}
            ></div>
            <div
              className={`w-[${
                marqueeItem.pictureWidth
              }px] h-[60.5px] shrink-0 ${
                !marqueeItem.picturePath && "hidden"
              } relative`}
            >
              <Image
                src={marqueeItem.picturePath}
                width={undefined}
                height={undefined}
                alt=""
                className={`w-full h-full object-cover ${
                  !marqueeItem.picturePath && "hidden"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
