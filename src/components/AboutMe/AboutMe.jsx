import React, { useEffect, useState } from "react"
import { CustomButton } from "../MaterialComponents/CustomButton/CustomButton"
import Form from "../ContactUs/Form/Form"

const AboutMe = () => {
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
    <div className="min-h-screen px-4 md:px-10 py-10 max-w-screen-xl">
      <div className="flex flex-wrap items-center gap-10 lg:gap-20">
        {/* Image Section */}
        <div
          className="w-full lg:w-auto flex-shrink-0"
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          <img
            src="/image02.png"
            alt="developer"
            className="mix-blend-luminosity w-full max-w-[450px] h-auto mx-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[600px] space-y-5">
          {/* Heading */}
          <div className="">
            <h2 className="text-secondary-text text-5xl md:text-7xl font-extrabold">
              About Me
            </h2>
            <h3 className="text-white font-extrabold text-2xl md:text-3xl">
              About <span className="text-primary-text">Me</span>
            </h3>
          </div>

          {/* Description */}
          <div className="space-y-4 text-white text-sm md:text-lg mt-5 text-justify">
            <p>
              Hello! I’m Shubham Shree, a passionate web developer with a flair
              for crafting innovative digital solutions using the MERN Stack. My
              journey began at NxtWave, Hyderabad, where I immersed myself in
              hands-on training, mastering the art of building everything from
              sleek, responsive designs to powerful, dynamic web applications.
            </p>
            <p>
              With over 15 successful client projects under my belt, I’ve proven
              my ability to deliver top-notch solutions that combine creativity,
              functionality, and punctuality. I thrive on tackling challenges,
              exploring emerging technologies, and turning complex ideas into
              seamless user experiences.
            </p>
            <p>
              An open-minded tech enthusiast at heart, I’m always eager to
              learn, grow, and collaborate. Whether it’s solving a tricky
              problem or bringing bold visions to life, I’m here to create
              digital experiences that leave a lasting impact. Let’s transform
              ideas into reality together!
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <CustomButton onClick={handleContactForm}>
              Let's work together
            </CustomButton>
          </div>

          {/* Contact form */}
          {isOpen && (
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 px-3">
              <div className="relative p-4 w-full max-w-3xl max-h-full bg-primary-bg rounded-lg shadow-xl border-2">
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
        </div>
      </div>
    </div>
  )
}

export default AboutMe
