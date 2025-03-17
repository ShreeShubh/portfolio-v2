import React, { useEffect, useState } from "react"
import { CustomButton } from "../MaterialComponents/CustomButton/CustomButton"
import Form from "../ContactUs/Form/Form"

const Description = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleContactForm = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <div className="w-full md:w-[572px] space-y-4 mt-5 lg:mt-10">
        <h2 className="text-xl md:text-2xl font-semibold text-white text-center md:text-left">
          Building Seamless Digital Solutions with{" "}
          <br className="hidden md:block" />
          MERN Expertise
        </h2>
        <p className="text-white text-sm md:text-lg text-justify">
          We deliver top-tier web development services, blending innovation with
          artistry to create captivating designs, flawless functionality, and
          unforgettable user experiences. Our mission is to empower your
          business with digital solutions that leave a lasting impression and
          drive exceptional value for your customers.
        </p>
        <div className="flex justify-center md:justify-start mt-7">
          <CustomButton onClick={handleContactForm}>
            Let's work together
          </CustomButton>
        </div>

        {/* Contact form */}
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 px-3">
          <div className="relative p-4 w-full max-w-3xl max-h-full bg-primary-bg rounded-lg shadow-xl border-2 px-2">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-primary-text">
                Contact Form
              </h3>
              <button
                type="button"
                onClick={handleContactForm}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="bg-primary-bg p-8 md:p-10 rounded-lg shadow-lg flex flex-col gap-10">
              <Form />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Description
