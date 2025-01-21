import React from "react"
import Form from "./Form/Form"

const ContactUs = () => {
  return (
    <div className="h-auto pb-14 max-w-screen-lg px-4 md:px-10 py-7">
      <div className="space-y-10">
        {/* Heading */}
        <div className="">
          <h2 className="text-secondary-text text-5xl md:text-7xl font-extrabold">
            Contact Us
          </h2>
          <h3 className="text-white font-extrabold text-2xl md:text-3xl mt-4">
            <span className="text-primary-text">Let’s work together</span> | On
            your Project
          </h3>
        </div>

        {/* Form Section */}
        <div className="bg-[#0B223E] p-8 md:p-10 rounded-lg shadow-lg flex flex-col gap-10">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
