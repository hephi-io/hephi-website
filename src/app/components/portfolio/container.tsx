import React from 'react'

import { IProps } from "@/app/components/portfolio/wrapper"


const Container = ( props: IProps ) => {
  const { className, as, children } = props

  return React.createElement( as || "div", { className: `w-[90%] sm:w-[94.24%] mx-auto ${ className || "" }` }, children )
}

export default Container