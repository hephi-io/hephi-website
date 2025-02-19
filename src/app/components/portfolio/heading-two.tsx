import React, {ReactNode} from 'react'

import { Francois_One } from "next/font/google"

const francoisOne = Francois_One({ weight: "400", subsets: ["latin"] })

export interface IHeadingTwoProps {
  className?: string,
  as?: string,
  children: ReactNode
}

const HeadingTwo = ( props: IHeadingTwoProps ) => {
  const { className, as, children } = props

  return React.createElement( as || "h1", { className: `${ francoisOne.className } ${ className ? className : "" } text-[28px] leading-7 tracking-normal text-[#363636]` }, children )
}

export default HeadingTwo