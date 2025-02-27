import React from 'react'

import { IProps } from "@/app/components/portfolio/wrapper"

import { francoisOne } from "@/app/components/shared/heading"


const HeadingTwo = ( props: IProps ) => {
  const { className, as, children } = props

  return React.createElement( as || "h2", { className: `${ francoisOne.className } ${ className ? className : "" } text-[28px] leading-7 tracking-normal text-[#363636] lg:text-[32px] lg:leading-8` }, children )
}

export default HeadingTwo