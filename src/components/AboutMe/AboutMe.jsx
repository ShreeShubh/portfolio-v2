import React from "react"
import { CustomButton } from "../MaterialComponents/CustomButton/CustomButton"

const AboutMe = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center gap-10">
        <img
          src="/image02.png"
          width={500}
          alt="developer"
          className="mix-blend-luminosity"
        />
        <div className="w-[600px] space-y-5">
          {/* heading */}
          <div>
            <h2 className="text-secondary-text text-7xl font-extrabold">
              About Me
            </h2>
            <h3 className="text-white font-extrabold text-3xl">
              About <span className="text-primary-text">Me</span>
            </h3>
          </div>

          {/* description */}
          <div className="space-y-3 text-white text-lg mt-7 text-justify">
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
              ideas into reality together!"
            </p>
          </div>

          {/* button */}
          {/* <div>
            <button className="bg-primary-text hover:bg-[#02E089] text-primary-bg px-5 py-2 rounded transform transition duration-200 ease-in-out hover:scale-95 active:scale-90">
              VIEW MORE
            </button>
          </div> */}
          <div>
            <CustomButton>Let's work together</CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
