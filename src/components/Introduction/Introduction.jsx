import React from "react"
import { CustomButton } from "../MaterialComponents/CustomButton/CustomButton"

const Introduction = () => {
  return (
    <div className="px-4 md:px-10 mt-20 lg:mt-28 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-36 max-w-screen-xl mx-auto">
        {/* Text Section */}
        <div className="flex-1">
          <div className="relative">
            <div>
              <h1 className="text-primary-text text-5xl md:text-[100px] font-extrabold leading-tight">
                WEB
              </h1>
              <h1 className="text-primary-text text-5xl md:text-[100px] font-extrabold leading-tight">
                SERVICES
              </h1>
            </div>
            <h1 className="font-orbitron text-3xl md:text-[80px] text-white absolute left-10 bottom-5 md:left-20 md:bottom-24 my-5">
              Development
            </h1>
          </div>

          <div className="w-full md:w-[572px] space-y-3 mt-5">
            <h2 className="text-xl md:text-2xl font-semibold text-white text-center md:text-left">
              Building Seamless Digital Solutions with{" "}
              <br className="hidden md:block" />
              MERN Expertise
            </h2>
            <p className="text-white text-sm md:text-lg text-justify">
              We deliver top-tier web development services, blending innovation
              with artistry to create captivating designs, flawless
              functionality, and unforgettable user experiences. Our mission is
              to empower your business with digital solutions that leave a
              lasting impression and drive exceptional value for your customers.
            </p>
            <div className="flex justify-center md:justify-start mt-7">
              <CustomButton>Let's work together</CustomButton>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/image01.png"
            className="w-60 md:w-auto h-auto"
            alt="developer"
          />
        </div>
      </div>
    </div>
  )
}

export default Introduction
