import React from "react"
import { facebook, linkedIn, instagram, whatsapp } from "../../utils/icon"

const Header = () => {
  return (
    <nav className="px-10 py-3 bg-primary-bg/60 fixed top-0 w-full z-50 backdrop-blur-md border-b border-secondary-bg">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        {/* logo container */}
        <div>
          <span className="font-montserrat text-5xl text-primary-text font-semibold">
            NsRt
          </span>
        </div>

        {/* Social Media */}
        <div className="space-x-3">
          <button className="p-2 rounded-full bg-primary-text">
            {facebook}
          </button>
          <button className="p-2 rounded-full bg-primary-text">
            {linkedIn}
          </button>
          <button className="p-2 rounded-full bg-primary-text">
            {instagram}
          </button>
          <button className="p-2 rounded-full bg-primary-text">
            {whatsapp}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
