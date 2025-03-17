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
        <div className="space-x-2" data-aos="flip-down">
          {/* <CustomButton className="">{facebook}</CustomButton> */}
          {/* <CustomButton className="">{linkedIn}</CustomButton> */}
          {/* <CustomButton className="">{instagram}</CustomButton> */}
          <a
            href="https://drive.google.com/file/d/1GWKyFeLH49gCGfXC8-xsM0kghI3ayS0Z/view?usp=sharing"
            target="_blank"
            //className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-bg bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
          >
            <CustomButton>
              <svg
                className="w-3.5 h-3.5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>{" "}
              Download Resume
            </CustomButton>
          </a>
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
