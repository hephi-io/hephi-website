import React, {ReactNode} from 'react'

export interface IParagraphProps {
  className?: string,
  as?: string,
  children: ReactNode
}

const Paragraph = ( props: IParagraphProps ) => {
  const { className, as, children } = props

  return React.createElement( as || "p", { className: `${ className ? className : "" } text-base leading-[19.2px] tracking-normal text-[#6F6F6F]` }, children )
}

export default Paragraph