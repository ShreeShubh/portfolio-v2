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
    <div className="min-h-screen px-4 md:px-10 py-10 max-w-screen-lg">
      <div className="flex flex-col gap-10 items-center py-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-secondary-text text-5xl md:text-7xl font-extrabold">
            Portfolio
          </h2>
          <h3 className="text-white font-extrabold text-2xl md:text-3xl">
            Some of my <span className="text-primary-text">Recent Work</span>
          </h3>
        </div>

        {/* Tabs */}
        <ul className="bg-secondary-bg px-4 md:px-7 py-3 rounded-lg flex items-center gap-4 md:gap-8 shadow-lg">
          {tabs.map((item) => (
            <li key={item.id}>
              <button
                className={`text-base md:text-lg font-semibold ${
                  activeTab === item.id
                    ? "text-primary-text underline underline-offset-8"
                    : "text-white"
                }`}
                onClick={() => handleActiveTab(item.id)}
              >
                {item.tab}
              </button>
            </li>
          ))}
        </ul>

        {/* Projects */}
        <div className="flex justify-center w-full">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {getFilteredProject().map((item, index) => (
              <li
                key={index}
                className="bg-secondary-bg rounded-xl flex flex-col shadow-lg w-full max-w-[336px] mx-auto"
              >
                {/* Project Image */}
                <img
                  src={item.image}
                  alt={`project ${index + 1}`}
                  className="w-full rounded-t-xl object-cover h-[200px]"
                />
                {/* Project Details */}
                <div className="p-5 space-y-3">
                  <h2 className="text-lg text-white font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base text-white">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
