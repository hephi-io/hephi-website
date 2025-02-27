import React, { ReactNode } from 'react'


export interface IProps {
  className?: string,
  as?: string,
  children: ReactNode
}

const Wrapper = ( props: IProps ) => {
  const { className, as, children } = props

  return React.createElement( as || "section", { className: `py-12 ${ className  || "" }` }, children )
}

export default Wrapper