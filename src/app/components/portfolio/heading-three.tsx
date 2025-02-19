import React, {ReactNode} from 'react'

import { Francois_One } from "next/font/google"

import { IHeadingTwoProps } from "@/app/components/portfolio/heading-two"

const francoisOne = Francois_One({ weight: "400", subsets: ["latin"] })

const HeadingThree = ( props: IHeadingTwoProps ) => {
  const { className, as, children } = props

  return React.createElement( as || "h1", { className: `${ francoisOne.className } ${ className ? className : "" } text-base leading-[19.9px] tracking-normal text-[#2B2B2B]` }, children )
}

export default HeadingThree