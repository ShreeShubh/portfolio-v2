import { CustomButton } from "../MaterialComponents/CustomButton/CustomButton"
import Description from "./Description"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const Introduction = () => {
  return (
    <div className="bg-neutral-950 px-4 pt-24 md:pt-0 min-h-screen flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center max-w-screen-lg mx-auto overflow-hidden">
        {/* main heading */}
        <div className="z-20">
          <div>
            <h1 className="text-primary-text text-6xl md:text-7xl font-extrabold leading-none ">
              WEB
            </h1>

            <h1 className="font-orbitron text-4xl md:text-6xl text-white ps-9 lg:ps-24 lg:pb-3 flex space-x-1">
              {Array.from("Development").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fade-in text-white font-semibold"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </h1>

            <h1 className="text-primary-text text-6xl md:text-7xl font-extrabold leading-none ">
              SERVICES
            </h1>
          </div>

          {/* Mobile Image Section */}

          {/* <div className="mt-7 lg:mt-0 block md:hidden" data-aos="fade-down">
            <img src="/image01.png" className="w-50h-auto" alt="developer" />
          </div> */}

          {/* description */}
          <Description />
        </div>

        {/* Image Section */}
        {/* <div
          className="mt-7 mr-32 lg:mt-0 hidden md:block"
          data-aos="flip-right"
        >
          <img
            src="/image01.png"
            className="w-50 lg:w-[400px] h-auto"
            alt="developer"
          />
        </div> */}
        <div
          className="z-20"
          //data-aos="fade-left"
        >
          <DotLottieReact
            src="https://lottie.host/7dd42b33-76da-444b-83ac-8f69a6235a8f/KKdrPUssHL.lottie"
            autoplay
            loop
            className="h-auto w-[600px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Introduction
