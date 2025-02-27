import React from 'react'

import { IProps } from "@/app/components/portfolio/wrapper"

const BigImageContainer = ( props: IProps ) => {
  const { as, className, children } = props

  return React.createElement( as || "section", { className: `h-[577px] rounded-3xl sm:rounded-[42px] ${ className || "" }` }, children )
}

export default BigImageContainer