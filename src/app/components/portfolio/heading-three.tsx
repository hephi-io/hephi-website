import React from 'react'

import { IProps } from "@/app/components/portfolio/wrapper"

import { francoisOne } from "@/app/components/shared/heading"


const HeadingThree = ( props: IProps ) => {
  const { className, as, children } = props

  return React.createElement( as || "h3", { className: `${ francoisOne.className } ${ className ? className : "" } text-base leading-[19.2px] tracking-normal text-[#2B2B2B] sm:text-xl sm:leading-6` }, children )
}

export default HeadingThree