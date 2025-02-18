import React from 'react'

import Image from "next/image"

import Heading from '@/app/components/shared/heading'

import ZipkodPhone from "@/app/assets/pngs/portfolio/zipkod-phone-big.png"

const CaseStudy = () => {
  const gridItems = [
    { id: 1, header: "Client", content: "ZipKod" },
    { id: 2, header: "Services", content: "Branding, Web development, App development" },
    { id: 3, header: "Year", content: "2024" }
  ]

  return (
    <section>

      <section className="relative h-[864px] border border-[#EBEBED] py-4 bg-[#F3F3F3] flex justify-center">
        <div className="absolute bottom-4 w-[90%]">

          <Heading className="text-base leading-[19.2px] tracking-normal text-[#2B2B2B]">
            CASESTUDY
          </Heading>

          <Heading className="text-[40px] leading-12 tracking-normal text-[#363636] mt-6">
            How Zipkod is revolutionizing the logistics industry - A story of restoration
          </Heading>

          <div className="grid grid-cols-2 gap-4 mt-16">
          { gridItems.map( ( gridItem ) => (
          <div key={ gridItem.id }>

            <Heading className="text-base leading-4 tracking-normal text-[#363636]">
              { gridItem.header }
            </Heading>

            <div className="text-base leading-[19.2px] tracking-normal text-[#6F6F6F] mt-4">
              { gridItem.content }
            </div>

          </div>  
          ) ) }
          </div>

        </div>
      </section>

      <section className="h-[600px]">
        <Image
          src={ ZipkodPhone }
          alt=""
          width={ undefined }
          height={ undefined }
          className="w-full h-full object-cover" 
        />
      </section>

    </section>
  )
}

export default CaseStudy