import React from "react"
import Form from "./Form/Form"

const ContactUs = () => {
  return (
    <div className="h-auto pb-14">
      <div className="space-y-10">
        {/* heading */}
        <div>
          <h2 className="text-secondary-text text-7xl font-extrabold">
            Contact Us
          </h2>
          <h3 className="text-white font-extrabold text-3xl">
            <span className="text-primary-text">Let’s work together</span> | On
            your Project
          </h3>
        </div>

        {/* journey */}
        <div className="bg-[#0B223E] p-10 pb-12 flex flex-col gap-16 shadow-lg">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
