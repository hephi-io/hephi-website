import React from 'react'

import Image from 'next/image'

import Wrapper from "@/app/components/portfolio/wrapper"
import Container from "@/app/components/portfolio/container"
import HeadingThree from "@/app/components/portfolio/heading-three"
import ParagraphBlock from "@/app/components/portfolio/paragraph-block"
import Paragraph from "@/app/components/portfolio/paragraph"

import { paragraph } from "@/app/components/portfolio/problem"

import PeakSmall from "@/app/assets/pngs/portfolio/peak/small/mobile.png"
import PeakBig from "@/app/assets/pngs/portfolio/peak/big/mobile.png"


const Scope = () => {
  const paragraphs = [ 1, 2 ]

  const images = [ 1, 2, 3 ]

  return (
    <Wrapper className="mb-12">
      <Container>

        <HeadingThree>
          SCOPE
        </HeadingThree>

        <ParagraphBlock className="mt-10">
          { paragraphs.map( ( paragraphId ) => (
          <Paragraph key={ paragraphId }>
            { paragraph }
          </Paragraph>    
          ) ) }  
        </ParagraphBlock>

        <section className="flex flex-col gap-y-4 sm:grid sm:grid-cols-2 sm:gap-4 mt-10">
          { images.map( ( image ) => (
          <div key={ image } className="h-[380px] rounded-3xl sm:h-[697px] sm:rounded-[42px]">

            <Image
              src={ PeakSmall }
              alt=""
              width={ undefined }
              height={ undefined }
              className="w-full h-full object-cover rounded-3xl sm:hidden" 
            />

            <Image
              src={ PeakBig }
              alt=""
              width={ undefined }
              height={ undefined }
              className="hidden sm:block sm:w-full sm:h-full sm:object-cover sm:rounded-[42px]" 
            />

          </div>  
          ) ) }
        </section>

      </Container>
    </Wrapper>
  )
}

export default Scope