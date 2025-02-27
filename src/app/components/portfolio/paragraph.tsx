import React from 'react'

import { IProps } from '@/app/components/portfolio/wrapper'


const Paragraph = ( props: IProps ) => {
  const { className, as, children } = props

  return React.createElement( as || "p", { className: `${ className ? className : "" } text-base leading-[19.2px] tracking-normal text-[#6F6F6F]` }, children )
}

export default Paragraph