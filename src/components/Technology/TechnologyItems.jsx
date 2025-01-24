import { useEffect, useState } from "react"
import { technologyData } from "../../utils/data"

const TechnologyItems = () => {
  const [activeIndex, setActiveIndex] = useState(0) // To track which item is scaled

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % technologyData.length) // Loop through the items
    }, 300)

    return () => clearInterval(interval) // Cleanup the interval on unmount
  }, [])

  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      <h3 className="text-white font-extrabold text-2xl md:text-3xl text-center">
        <span className="text-primary-text">Technologies </span>We are using
      </h3>
      <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {technologyData.map((item, index) => (
          <li
            key={index}
            className={`flex justify-center items-center bg-white rounded-xl px-5 ease-in-out duration-300 ${
              index === activeIndex ? "scale-125" : ""
            }`}
          >
            <img
              src={item.iconUrl}
              width={50}
              height={50}
              alt={`client icon ${index + 1}`}
              className="object-contain"
              title={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TechnologyItems
