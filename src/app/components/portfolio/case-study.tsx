import React from 'react'

import Image from "next/image"

import Heading from "@/app/components/shared/heading"
import HeadingThree from "@/app/components/portfolio/heading-three"
import Paragraph from "@/app/components/portfolio/paragraph"

import ZipkodPhone from "@/app/assets/pngs/portfolio/zipkod-phone-big.png"

const CaseStudy = () => {
  const gridItems = [
    { id: 1, header: "Client", content: "ZipKod" },
    { id: 2, header: "Services", content: "Branding, Web development, App development" },
    { id: 3, header: "Year", content: "2024" }
  ]

  return (
    <section className="sm:pt-4 sm:mb-[120px]">

      <section className="relative h-[864px] border border-[#EBEBED] bg-[#F3F3F3] flex justify-center sm:w-[94.24%] sm:h-[966px] sm:mx-auto sm:rounded-[42px]">
        <div className="absolute bottom-4 w-[90%] sm:bottom-9 sm:w-[90.84%]">

          <HeadingThree>
            CASESTUDY
          </HeadingThree>

          <Heading className="text-[40px] leading-12 tracking-normal text-[#363636] sm:text-5xl sm:leading-[57.6px] mt-6">
            How Zipkod is revolutionizing the logistics industry - A story of restoration
          </Heading>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-0 sm:border-t sm:border-t-[#C6C6C6] mt-16 sm:mt-[136px]">
            { gridItems.map( ( gridItem ) => (
            <div key={ gridItem.id } className={ `${ ( gridItem.id !== 3 ) && "sm:border-r sm:border-r-[#C6C6C6]" } sm:pt-9` }>
              <div className="sm:w-[69.75%] sm:mx-auto">

                <Heading as="h4" className="text-base leading-4 tracking-normal text-[#363636] sm:text-xl sm:leading-5">
                  { gridItem.header }
                </Heading>

                <Paragraph className="mt-4">
                  { gridItem.content }
                </Paragraph>

              </div>
            </div>  
            ) ) }
          </div>

        </div>
      </section>

      <section className="h-[600px] sm:w-[94.24%] sm:h-[793px] sm:rounded-[42px] sm:mx-auto sm:mt-[120px]">
        <Image
          src={ ZipkodPhone }
          alt=""
          width={ undefined }
          height={ undefined }
          className="w-full h-full object-cover sm:rounded-[42px]" 
        />
      </section>

    </section>
  )
}

export default CaseStudy