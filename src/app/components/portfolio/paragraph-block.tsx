import React from 'react'

import { IProps } from "@/app/components/portfolio/wrapper"


const ParagraphBlock = ( props: IProps ) => {
  const { as, className, children } = props

  return React.createElement( as || "section", { className: `flex flex-col gap-y-4 ${ className || "" }` }, children )
}

export default ParagraphBlock