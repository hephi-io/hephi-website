import React from 'react'

interface IHeaderProps {
  header: string,
  subHeader: string
}

const SectionHeader = ( props: IHeaderProps ) => {
  const { header, subHeader } = props

  return (
    <div className="sm:flex sm:justify-between sm:items-start mb-10">

      <div className="text-base leading-[19.2px] text-[#2B2B2B] md:text-xl md:leading-6 mb-6">
        { header }
      </div>

      <div className="text-[32px] leading-[32px] text-[#363636] sm:w-[63.61%] md:w-[35.95%] md:text-5xl md:leading-[48px]">
        { subHeader }
      </div>

    </div>
  )
}

export default SectionHeader
