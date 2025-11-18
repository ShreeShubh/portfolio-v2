import React, { useEffect, useState } from 'react'
import { CustomButton } from '../MaterialComponents/CustomButton/CustomButton'
import Form from '../ContactUs/Form/Form'
import FormModal from '../FormModal/FormModal'

const Description = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleContactForm = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <div className="space-y-4 mt-5 lg:mt-10">
        <h2 className="text-xl md:text-2xl font-semibold text-white text-center md:text-left">
          Building Seamless Digital Solutions with{' '}
          <br className="hidden md:block" />
          MERN Expertise
        </h2>
        <p className="text-white text-sm md:text-lg font-light">
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
      {isOpen && <FormModal handleContactForm={handleContactForm} />}
    </>
  )
}

export default Description
