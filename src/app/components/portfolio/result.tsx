import React from 'react'

import Wrapper from "@/app/components/portfolio/wrapper"
import Container from "@/app/components/portfolio/container"
import Heading from "@/app/components/shared/heading"
import Paragraph from "@/app/components/portfolio/paragraph"

import { headingText } from "@/app/components/portfolio/objective"
import { paragraph } from "@/app/components/portfolio/problem"


const Result = () => {
  return (
    <Wrapper>
      <Container className="lg:flex lg:justify-between lg:items-start">

        <Heading as="h3" className="text-base leading-[19.2px] tracking-normal text-[#2B2B2B] sm:text-xl sm:leading-6">
          RESULT
        </Heading>

        <div className="lg:w-[56.22%]">

          <Heading className="text-[32px] leading-8 tracking-normal text-[#363636] mt-10 lg:mt-0">
            { headingText }
          </Heading>

          <Paragraph className="mt-4">
            { paragraph }
          </Paragraph>

        </div>

      </Container>
    </Wrapper>
  )
}

export default Result