import React, { ReactNode } from 'react'

interface IContainerProps {
  className?: string,
  children: ReactNode
}

const Container = ( props: IContainerProps ) => {
  const { className, children } = props

  return React.createElement( "div", { className: `w-[90%] mx-auto ${ className || "" }` }, children )
}

export default Container