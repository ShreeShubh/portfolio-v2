import React, { useState } from "react"
import { projects, tabs } from "../../utils/data"

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All")

  const handleActiveTab = (id) => {
    setActiveTab(id)
  }

  const getFilteredProject = () => {
    if (activeTab !== "All") {
      const filteredProject = projects.filter(
        (item) => item.title === activeTab
      )
      return filteredProject
    } else return projects
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-10 items-center py-32">
        {/* heading */}
        <div>
          <h2 className="text-secondary-text text-7xl font-extrabold text-center">
            Portfolio
          </h2>
          <h3 className="text-white font-extrabold text-3xl text-center">
            Some of my <span className="text-primary-text">Recent Work</span>
          </h3>
        </div>

        {/* tabs */}
        <ul className="bg-secondary-bg px-7 py-3 rounded-lg flex items-center gap-8 shadow-lg">
          {tabs.map((item) => {
            return (
              <li key={item.id}>
                <button
                  className={`text-lg font-semibold ${
                    activeTab === item.id
                      ? "text-primary-text underline underline-offset-8"
                      : "text-white"
                  }`}
                  onClick={() => handleActiveTab(item.id)}
                >
                  {item.tab}
                </button>
              </li>
            )
          })}
        </ul>

        {/* projects */}
        <div className="flex justify-center">
          <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-4">
            {getFilteredProject().map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-secondary-bg rounded-xl w-[336px] h-[351px] flex flex-col shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={`project ${index + 1}`}
                    className="w-full rounded-t-xl"
                  />
                  <div className="p-5 space-y-3">
                    <h2 className="text-lg text-white font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-base text-white">{item.desc}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
