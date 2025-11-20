import React from 'react'
import Form from './Form/Form'
import { TextHoverEffectDemo } from '../Animation/TextHover/TextHover'

const ContactUs = () => {
  return (
    <div id="contact" className="px-4 md:px-10 pt-16 pb-14 mt-7">
      <div className="space-y-10 max-w-screen-lg mx-auto w-full">
        {/* Heading */}
        <div className="">
          <TextHoverEffectDemo text="Contact Us" />
          {/* <h2 className="text-secondary-text text-5xl md:text-7xl font-extrabold">
            Contact Us
          </h2> */}
          <h3 className="text-white font-extrabold text-2xl md:text-3xl text-center mb-7">
            <span className="text-primary-text">Let’s work together</span> | On
            your Project
          </h3>
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 md:p-10 rounded-lg shadow-lg flex flex-col gap-10">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
