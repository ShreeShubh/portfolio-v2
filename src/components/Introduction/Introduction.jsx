import React from "react"
import { CustomButton } from "../MaterialComponents/CustomButton/CustomButton"

const Introduction = () => {
  return (
    <div className="mt-32 h-screen">
      <div className="flex justify-between gap-36">
        <div>
          <div className="flex items-center relative">
            <div>
              <h1 className="text-primary-text text-[100px] font-extrabold">
                WEB
              </h1>
              <h1 className="text-primary-text text-[100px] font-extrabold">
                SERVICES
              </h1>
            </div>
            <h1 className="font-orbitron text-[80px] text-white absolute left-20 bottom-24">
              Development
            </h1>
          </div>

          <div className="w-[572px] space-y-3">
            <h2 className="text-2xl font-semibold text-white">
              Building Seamless Digital Solutions with <br /> MERN Expertise
            </h2>
            <p className="text-white text-lg text-justify">
              We deliver top-tier web development services, blending innovation
              with artistry to create captivating designs, flawless
              functionality, and unforgettable user experiences. Our mission is
              to empower your business with digital solutions that leave a
              lasting impression and drive exceptional value for your customers.
            </p>
            <div className="mt-7">
              <CustomButton>Let's work together</CustomButton>
            </div>
          </div>
        </div>
        <img src="/image01.png" width={500} height={450} alt="developer" />
      </div>
    </div>
  )
}

export default Introduction
