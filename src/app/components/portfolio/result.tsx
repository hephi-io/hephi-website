import React from 'react'

import Wrapper from "@/app/components/portfolio/wrapper"
import Container from "@/app/components/portfolio/container"
import Heading from "@/app/components/shared/heading"
import HeadingThree from "@/app/components/portfolio/heading-three"
import Paragraph from "@/app/components/portfolio/paragraph"

import { headingText } from "@/app/components/portfolio/objective"
import { paragraph } from "@/app/components/portfolio/problem"


const Result = () => {
  return (
    <Wrapper>
      <Container>

        <HeadingThree>
          RESULT
        </HeadingThree>

        <Heading className="text-[32px] leading-8 tracking-normal text-[#363636] mt-10">
          { headingText }
        </Heading>

        <Paragraph className="mt-4">
          { paragraph }
        </Paragraph>

      </Container>
    </Wrapper>
  )
}

export default Result