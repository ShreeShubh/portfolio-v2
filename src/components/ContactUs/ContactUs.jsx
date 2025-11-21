import React from 'react'
import Form from './Form/Form'
import SectionHeading from '../SectionHeading/SectionHeading'

const ContactUs = () => {
  return (
    <div id="contact" className="px-4 md:px-10 pt-24 pb-16 mt-7">
      <div className="max-w-screen-lg mx-auto w-full">
        <SectionHeading
          t1="CONTACT "
          t2="US"
          st1="Let’s work together"
          st2="| On
            your Project"
        />

        {/* Form Section */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 md:p-10 rounded-lg shadow-lg flex flex-col gap-10 mt-16">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
