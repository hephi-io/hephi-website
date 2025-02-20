import React from 'react'

import Image from 'next/image'

import Wrapper from "@/app/components/portfolio/wrapper"
import Container from "@/app/components/portfolio/container"
import HeadingThree from "@/app/components/portfolio/heading-three"
import Paragraph from "@/app/components/portfolio/paragraph"
import BigImageContainer from "@/app/components/portfolio/big-image-container"

import PeakBig from "@/app/assets/pngs/portfolio/peak/big/mobile.png"


const Problem = () => {
  const paragraph = "In a constantly changing world, financial transactions need to be streamlined so users no longer need multiple services to achieve their financial goals. Dashr aims to be the number one platform for bill payments using direct payments, QR code transactions, and URL payments. Dashr is a do-it-all bank—from savings to loans, budgeting, and international transactions, Dashr will revolutionize modern banking."

  const paragraphs = [
    { id: 1, paragraph: paragraph },
    { id: 2, paragraph: paragraph },
    { id: 3, paragraph: paragraph }
  ]

  return (
    <Wrapper>
      <Container>

        <HeadingThree>
          PROBLEM
        </HeadingThree>

        <div className="flex flex-col gap-y-4 mt-10">
          { paragraphs.map( ( paragraph ) => (
          <Paragraph key={ paragraph.id }>
            { paragraph.paragraph }
          </Paragraph>  
          ) ) }  
        </div>

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

export default Problem