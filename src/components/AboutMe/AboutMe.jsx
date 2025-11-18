import React, { useEffect, useState } from 'react'
import { CustomButton } from '../MaterialComponents/CustomButton/CustomButton'
import Form from '../ContactUs/Form/Form'
import { TextHoverEffectDemo } from '../Animation/TextHover/TextHover'
import FormModal from '../FormModal/FormModal'

const AboutMe = () => {
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
    <div className="px-4 py-16">
      <div className="max-w-screen-lg mx-auto">
        <TextHoverEffectDemo text="ABOUT US" />

        {/* MAIN SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mt-10">
          {/* IMAGE */}
          <img
            src="/image02.png"
            alt="developer"
            className="mix-blend-luminosity w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px]"
            data-aos-duration="600"
          />

          {/* CONTENT */}
          <div className="space-y-6">
            <h3 className="text-white font-extrabold text-2xl md:text-3xl">
              About <span className="text-primary-text">Me</span>
            </h3>

            <div className="space-y-4 text-white text-sm md:text-lg">
              <p>
                Hello! I’m Shubham Shree, a passionate web developer with a
                flair for crafting innovative digital solutions using the MERN
                Stack. Trained at NxtWave, Hyderabad, I’ve mastered building
                everything from sleek UI to robust web applications.
              </p>
              <p>
                With over 15 successful client projects, I deliver solutions
                combining creativity, functionality, and punctuality. I love
                solving challenges, exploring new technologies, and creating
                seamless user experiences.
              </p>
              <p>
                As an open-minded tech enthusiast, I’m always eager to learn and
                collaborate. Let’s bring ideas to life together!
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <CustomButton onClick={handleContactForm}>
                Let's work together
              </CustomButton>
            </div>
          </div>
        </div>

        {/* CONTACT FORM MODAL */}
        {isOpen && <FormModal handleContactForm={handleContactForm} />}
      </div>
    </div>
  )
}

export default AboutMe
