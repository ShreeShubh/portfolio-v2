import React from "react"
import { facebook, linkedIn, instagram, whatsapp } from "../../utils/icon"
import { CustomButton } from "../MaterialComponents/CustomButton/CustomButton"

const Header = () => {
  return (
    <nav className="px-4 md:px-10 py-3 bg-primary-bg/60 fixed top-0 w-full z-50 backdrop-blur-md border-b border-secondary-bg">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo Container */}
        <div>
          <span className="font-montserrat text-3xl md:text-5xl text-primary-text font-semibold">
            NsRt
          </span>
        </div>

        {/* Social Media */}
        <div className="space-x-2">
          <CustomButton className="">{facebook}</CustomButton>
          <CustomButton className="">{linkedIn}</CustomButton>
          <CustomButton className="">{instagram}</CustomButton>
          {/* Uncomment for WhatsApp */}
          {/* <CustomButton className="p-2 rounded-md md:rounded-full">
        {whatsapp}
      </CustomButton> */}
        </div>
      </div>
    </nav>
  )
}

export default Header
