import { CustomButton } from "../MaterialComponents/CustomButton/CustomButton"
import Description from "./Description"

const Introduction = () => {
  return (
    <div className="px-4 md:px-10 mt-20 lg:mt-28 min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-screen-xl mx-auto">
        <div className="">
          {/* main heading */}
          <div className="flex justify-center">
            <div>
              <h1 className="text-primary-text text-6xl md:text-[100px] font-extrabold leading-none lg:leading-tight">
                WEB
              </h1>

              <h1 className="font-orbitron text-4xl md:text-[80px] text-white ps-9 lg:ps-24 lg:pb-3 flex space-x-1">
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

              <h1 className="text-primary-text text-6xl md:text-[100px] font-extrabold leading-none lg:leading-tight">
                SERVICES
              </h1>
            </div>
          </div>

          {/* Mobile Image Section */}

          <div className="mt-7 lg:mt-0 block md:hidden" data-aos="fade-down">
            <img src="/image01.png" className="w-50h-auto" alt="developer" />
          </div>

          {/* description */}
          <Description />
        </div>

        {/* Image Section */}
        <div
          className="mt-7 mr-32 lg:mt-0 hidden md:block"
          data-aos="flip-right"
        >
          <img
            src="/image01.png"
            className="w-50 lg:w-[400px] h-auto"
            alt="developer"
          />
        </div>
      </div>
    </div>
  )
}

export default Introduction
