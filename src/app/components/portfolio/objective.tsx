import React from 'react'

import Image from "next/image"

import Wrapper from "@/app/components/portfolio/wrapper"
import Container from "@/app/components/portfolio/container"
import HeadingTwo from "@/app/components/portfolio/heading-two"
import HeadingThree from "@/app/components/portfolio/heading-three"
import Paragraph from "@/app/components/portfolio/paragraph"
import BigImageContainer from "@/app/components/portfolio/big-image-container"

import { paragraph } from "@/app/components/portfolio/problem"

import PeakBig from "@/app/assets/pngs/portfolio/peak/big/mobile.png"


export const headingText = "From Grass to Grace - A Zipkod story"


const Objective = () => {
  return (
    <Wrapper>
      <Container>

        <HeadingThree>
          OBJECTIVE
        </HeadingThree>

        <HeadingTwo className="mt-10">
          { headingText }
        </HeadingTwo>

        <Paragraph className="mt-4">
          { paragraph }
        </Paragraph>

        <BigImageContainer className="mt-6">
          <Image 
            src={ PeakBig }
            alt=""
            width={ undefined }
            height={ undefined }
            className="w-full h-full object-cover"
          />
        </BigImageContainer>

      </Container>
    </Wrapper>
  ) 
}

export default Objective