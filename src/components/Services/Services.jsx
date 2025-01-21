import React from "react"
import { servicesData } from "../../utils/data"
import { arrow } from "../../utils/icon"

const ProfessionalExperties = () => {
  return (
    <div className="min-h-screen py-10 px-4 md:px-10">
      <div className="space-y-10 max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="">
          <h2 className="text-secondary-text text-5xl md:text-7xl font-extrabold">
            Services
          </h2>
          <h3 className="text-white font-extrabold text-2xl md:text-3xl">
            Professional <span className="text-primary-text">Expertise</span>
          </h3>
        </div>

        {/* Services Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg">
          {servicesData.map((item, index) => (
            <li
              key={index}
              className="w-full max-w-[350px] h-full px-7 py-5 rounded-lg flex flex-col items-start gap-5 text-white bg-[#102640] hover:bg-primary-text hover:text-primary-bg hover:cursor-pointer relative group shadow-lg mx-auto"
            >
              {/* Icon and Title */}
              <div className="space-y-4">
                <div className="w-[70px] h-[70px]">
                  <img
                    src={item.lightIconUrl}
                    alt={item.title}
                    className="h-full w-full object-contain group-hover:hidden"
                  />
                  <img
                    src={item.darkIconUrl}
                    alt={item.title}
                    className="h-full w-full object-contain hidden group-hover:block"
                  />
                </div>
                <p className="text-lg font-semibold">{item.title}</p>
              </div>

              {/* Short Description */}
              <p className="text-base md:text-lg">{item.shortDesc}</p>

              {/* Read More Button */}
              <button className="font-semibold flex items-center gap-4">
                Read More
                <span className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
                  {arrow}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProfessionalExperties
