import React from 'react'

import Image from "next/image"

import Heading from "@/app/components/shared/heading"

import MenuIcon from "@/app/assets/svgs/menu-icon.svg"
import CancelIcon from "@/app/assets/svgs/cancel-icon.svg"

interface IMenuButtonProps {
  menuState: boolean
  handleMenu: ( data: boolean ) => void
}

const MenuButton = ( props: IMenuButtonProps ) => {
  const { menuState, handleMenu } = props

  return (
    <button 
      className="rounded p-2 bg-white flex gap-x-2 sm:rounded-full sm:justify-center sm:items-center sm:h-10 sm:mr-2" 
      onClick={ () => { handleMenu( !menuState ) } }
    >
      <div className="sm:flex sm:gap-x-2">
        <Image src={ ( !menuState ) ? MenuIcon : CancelIcon } width={20.56} height={20.56} alt="Menu Icon" />

        <Heading as="div" className="text-lg leading-[21.6px] text-[#2B2B2B]">
          { ( !menuState ) ? "Menu" : "Close Menu" }
        </Heading>
      </div>
    </button>
  )
}

export default MenuButton
