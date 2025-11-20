import React, { useEffect, useState } from 'react'
import { CustomButton } from '../MaterialComponents/CustomButton/CustomButton'
import Form from '../ContactUs/Form/Form'
import { TextHoverEffectDemo } from '../Animation/TextHover/TextHover'
import FormModal from '../FormModal/FormModal'
import { BackgroundBeams } from '../ui/background-beams'

const About = () => {
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
    <div id="about" className="relative px-4 py-16">
      <div className="max-w-screen-lg mx-auto">
        <TextHoverEffectDemo text="ABOUT US" />
        <h2 className="text-white font-extrabold text-2xl md:text-3xl text-center">
          Passionate Web Developer &{' '}
          <span className="text-primary-text">Digital Creator</span>
        </h2>

        {/* MAIN SECTION */}
        <div className="flex flex-col items-center gap-10 lg:gap-20 mt-10">
          {/* IMAGE */}
          <img
            src="/image02.png"
            alt="developer"
            className="mix-blend-luminosity w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] md:hidden"
            data-aos-duration="600"
          />

          {/* CONTENT */}
          <div className="space-y-6">
            <div className="space-y-4 text-white text-sm md:text-lg">
              <p>
                At [Agency Name], we are a dedicated team of web development
                experts passionate about transforming businesses through
                innovative digital solutions. As experienced web developers, we
                specialize in delivering high-quality website design, web
                application development, e-commerce website solutions, and
                responsive UI/UX that help brands thrive in the digital era.
              </p>
              <p>
                Our journey began with a commitment to creativity, client
                satisfaction, and technical excellence. Over the years, we’ve
                successfully launched dozens of projects across diverse
                industries—always focusing on efficient development, clean code,
                and user-centric design. From startups to established
                enterprises, our custom web solutions are built to boost online
                visibility, drive growth, and enhance your business’s digital
                presence.
              </p>
              <p>
                Collaboration, continuous learning, and adopting the latest web
                technologies are at the core of our service. Whether you need a
                stunning new website, seamless web app, or ongoing web support,
                we’re here to help you achieve your online goals.
              </p>
              <p>
                Let’s connect and bring your ideas to life with expert web
                development services tailored for success.
              </p>
            </div>

            <CustomButton onClick={handleContactForm}>
              Let's work together
            </CustomButton>
          </div>
        </div>

        {/* CONTACT FORM MODAL */}
        {isOpen && <FormModal handleContactForm={handleContactForm} />}
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default About
