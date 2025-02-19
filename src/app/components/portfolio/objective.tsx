import React from 'react'

import Image from "next/image"

import Container from "@/app/components/portfolio/container"
import HeadingTwo from "@/app/components/portfolio/heading-two"
import HeadingThree from "@/app/components/portfolio/heading-three"
import Paragraph from "@/app/components/portfolio/paragraph"

import PeakBig from "@/app/assets/pngs/portfolio/peak/big/mobile.png"

const Objective = () => {
  return (
    <section className="py-12">
      <Container>

        <HeadingThree>
          OBJECTIVE
        </HeadingThree>

        <HeadingTwo className="mt-10">
          Frome Grass to Grace - A Zipkod story
        </HeadingTwo>

        <Paragraph className="mt-4">
          In a constantly changing world, financial transactions need to be streamlined so users no longer need multiple services to achieve their financial goals. Dashr aims to be the number one platform for bill payments using direct payments, QR code transactions, and URL payments. Dashr is a do-it-all bank—from savings to loans, budgeting, and international transactions, Dashr will revolutionize modern banking.
        </Paragraph>

        <div className="h-[577px] rounded-3xl mt-6">
          <Image 
            src={ PeakBig }
            alt=""
            width={ undefined }
            height={ undefined }
            className="w-full h-full object-cover"
          />
        </div>

      </Container>
    </section>
  ) 
}

export default Objective