import React from 'react'

import { IProps } from "@/app/components/portfolio/wrapper"

const BigImageContainer = ( props: IProps ) => {
  const { as, className, children } = props

  return React.createElement( as || "div", { className: `h-[577px] rounded-3xl ${ className || "" }` }, children )
}

export default BigImageContainer