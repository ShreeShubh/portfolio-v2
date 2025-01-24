import React from "react"
import { CustomButton } from "../MaterialComponents/CustomButton/CustomButton"

const AboutMe = () => {
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
            <CustomButton>Let's work together</CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
