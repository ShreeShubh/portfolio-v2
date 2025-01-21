import React, { useState } from "react"
import { projects } from "../../utils/data"
import PortfolioTabs from "./PortfolioTabs"
import Projects from "./Projects"

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
    <div className="min-h-screen px-4 md:px-10 max-w-screen-lg">
      <div className="flex flex-col gap-10 items-center py-7">
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
        <PortfolioTabs
          activeTab={activeTab}
          handleActiveTab={handleActiveTab}
        />

        {/* Projects */}
        <Projects getFilteredProject={getFilteredProject} />
      </div>
    </div>
  )
}

export default Portfolio
