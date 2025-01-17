import React from "react"
import { servicesData } from "../../utils/data"
import { arrow } from "../../utils/icon"

const ProfessionalExperties = () => {
  return (
    <div className="h-screen">
      <div className="space-y-10">
        {/* heading */}
        <div>
          <h2 className="text-secondary-text text-7xl font-extrabold">
            Services
          </h2>
          <h3 className="text-white font-extrabold text-3xl">
            Professional <span className="text-primary-text">Experties</span>
          </h3>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((item, index) => {
            return (
              <li
                key={index}
                className="w-[350px] h-full px-7 py-5 rounded-lg flex flex-col items-start gap-5 text-white bg-[#102640] hover:bg-primary-text hover:text-primary-bg hover:cursor-pointer relative group shadow-lg"
              >
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

                <p className="text-lg">{item.shortDesc}</p>

                <button className="font-semibold flex items-center gap-4">
                  Read More
                  <span className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
                    {arrow}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProfessionalExperties
