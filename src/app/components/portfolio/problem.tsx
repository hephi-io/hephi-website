import React from 'react'

import Image from 'next/image'

import Wrapper from "@/app/components/portfolio/wrapper"
import Container from "@/app/components/portfolio/container"
import HeadingThree from "@/app/components/portfolio/heading-three"
import ParagraphBlock from "@/app/components/portfolio/paragraph-block"
import Paragraph from "@/app/components/portfolio/paragraph"
import BigImageContainer from "@/app/components/portfolio/big-image-container"

import PeakBig from "@/app/assets/pngs/portfolio/peak/big/mobile.png"


export const paragraph = "In a constantly changing world, financial transactions need to be streamlined so users no longer need multiple services to achieve their financial goals. Dashr aims to be the number one platform for bill payments using direct payments, QR code transactions, and URL payments. Dashr is a do-it-all bank—from savings to loans, budgeting, and international transactions, Dashr will revolutionize modern banking."

export const paragraphs = [ 1, 2, 3 ]


const Problem = () => {
  return (
    <Wrapper>
      <Container>

        <HeadingThree>
          PROBLEM
        </HeadingThree>

        <ParagraphBlock className="mt-10">
          { paragraphs.map( ( paragraphItem ) => (
          <Paragraph key={ paragraphItem }>
            { paragraph }
          </Paragraph>  
          ) ) }  
        </ParagraphBlock>

        <BigImageContainer className="mt-6 sm:mt-10">
          <Image
            src={ PeakBig }
            alt=""
            width={ undefined }
            height={ undefined }
            className="w-full h-full object-cover sm:rounded-[42px]"
          />
        </BigImageContainer>

      </Container>
    </Wrapper>
  )
}

export default Problem