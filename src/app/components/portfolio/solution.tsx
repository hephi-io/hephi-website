import React from 'react'

import Image from 'next/image'

import Wrapper from "@/app/components/portfolio/wrapper"
import Container from "@/app/components/portfolio/container"
import HeadingThree from "@/app/components/portfolio/heading-three"
import ParagraphBlock from "@/app/components/portfolio/paragraph-block"
import Paragraph from "@/app/components/portfolio/paragraph"
import BigImageContainer from "@/app/components/portfolio/big-image-container"

import { paragraphs } from "@/app/components/portfolio/problem"

import { paragraph } from "@/app/components/portfolio/problem"

import PeakBig from "@/app/assets/pngs/portfolio/peak/big/mobile.png"


const Solution = () => {
  return (
    <Wrapper>
      <Container>

        <HeadingThree>
          SOLUTION
        </HeadingThree>

        <ParagraphBlock className="mt-10">
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

      </Container>
    </Wrapper>
  )
}

export default Solution