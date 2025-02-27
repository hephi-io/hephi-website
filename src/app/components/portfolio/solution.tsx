import React from 'react'

import Image from 'next/image'

import Wrapper from "@/app/components/portfolio/wrapper"
import Container from "@/app/components/portfolio/container"
import Heading from "@/app/components/shared/heading"
import ParagraphBlock from "@/app/components/portfolio/paragraph-block"
import Paragraph from "@/app/components/portfolio/paragraph"
import BigImageContainer from "@/app/components/portfolio/big-image-container"

import { paragraphs } from "@/app/components/portfolio/problem"

import { paragraph } from "@/app/components/portfolio/problem"

import PeakBig from "@/app/assets/pngs/portfolio/peak/big/mobile.png"


const Solution = () => {
  return (
    <Wrapper>
      <Container className="lg:flex lg:justify-between lg:items-start">

        <Heading as="h3" className="text-base leading-[19.2px] tracking-normal text-[#2B2B2B] sm:text-xl sm:leading-6">
          SOLUTION
        </Heading>

        <div className="lg:w-[56.22%]">

          <ParagraphBlock className="mt-10 lg:mt-0">
            { paragraphs.map( ( paragraphId ) => (
            <Paragraph key={ paragraphId }>
              { paragraph }
            </Paragraph>  
            ) ) }
          </ParagraphBlock>

          <BigImageContainer className="mt-10">
            <Image 
              src={ PeakBig }
              alt=""
              width={ undefined }
              height={ undefined }
              className="w-full h-full object-cover rounded-3xl sm:rounded-[42px]"
            />
          </BigImageContainer>

        </div>

      </Container>
    </Wrapper>
  )
}

export default Solution