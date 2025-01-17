import React from "react"
import { clientsData, journeyData } from "../../utils/data"

const Facts = () => {
  return (
    <div className="h-screen">
      <div className="space-y-10">
        {/* heading */}
        <div>
          <h2 className="text-secondary-text text-7xl font-extrabold">Facts</h2>
          <h3 className="text-white font-extrabold text-3xl">
            About <span className="text-primary-text">Journey</span>
          </h3>
        </div>

        {/* journey */}
        <div className="bg-[#0B223E] p-10 pb-12 flex flex-col gap-16 shadow-lg">
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-24">
            {journeyData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-col items-center gap-2 relative"
                >
                  {/* designation & duration */}
                  <div
                    className={`text-center absolute ${
                      index % 2 === 0 ? "-top-16" : "-bottom-16"
                    }`}
                  >
                    <h3 className="text-primary-text text-lg font-semibold">
                      {item.designation}
                    </h3>
                    <p className="text-white text-lg">{item.duration}</p>
                  </div>

                  {/* white arrow */}
                  <div
                    className={`absolute bottom-20 right- ${
                      index % 2 !== 0 ? "" : "hidden"
                    } group`}
                  >
                    <img
                      src="/white-arrow.svg"
                      width={238}
                      height={95}
                      alt="white arrow"
                      className="animate-seesaw"
                    />
                  </div>

                  {/* green arrow */}
                  <div
                    className={`absolute top-20 right-16 ${
                      index % 2 === 0 && index !== 0 ? "" : "hidden"
                    } group`}
                  >
                    <img
                      src="/green-arrow.svg"
                      width={238}
                      height={95}
                      alt="white arrow"
                      className="animate-seesaw"
                    />
                  </div>

                  {/* company */}
                  <div className="w-48 py-5 bg-white flex justify-center items-center text-primary-bg rounded-lg font-semibold">
                    {item.company}
                  </div>
                </li>
              )
            })}
          </ul>

          {/* client I work for */}
          <div className="space-y-5 mt-10 max-w-3xl mx-auto">
            <h3 className="text-white font-extrabold text-3xl text-center mt-14">
              <span className="text-primary-text">Client </span>I work for
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              {clientsData.map((item, index) => {
                return (
                  <li key={index}>
                    <img
                      src={item.iconUrl}
                      width={225}
                      height={90}
                      alt={`client icon 0${index + 1}`}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facts
