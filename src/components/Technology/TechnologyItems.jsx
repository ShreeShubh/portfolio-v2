import { useEffect, useState } from "react"
import { technologyData } from "../../utils/data"

const TechnologyItems = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % technologyData.length)
    }, 300)

    return () => clearInterval(interval)
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
            }
            `}
          >
            <img
              src={item.iconUrl}
              width={50}
              height={50}
              alt={`client icon ${index + 1}`}
              className="object-contain"
              title={item.name}
            />
            {/* <button data-popover-target={`popover-${index}`} type="button">
              <img
                src={item.iconUrl}
                width={50}
                height={50}
                alt={`client icon ${index + 1}`}
                className="object-contain"
              />
            </button>
            <div
              data-popover
              id={`popover-${index}`}
              role="tooltip"
              className="absolute z-10 invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-primary-bg border border-gray-200 rounded-lg shadow-xs opacity-0"
            >
              <div className="px-3 py-2 bg-primary-text border-b border-gray-200 rounded-t-lg">
                <h3 className="font-semibold text-primary-bg">{item.name}</h3>
              </div>
              <div className="px-3 py-2">
                <p>{item.desc}</p>
              </div>
              <div data-popper-arrow></div>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TechnologyItems
