import { useEffect, useState } from "react"
import { clientsData } from "../../utils/data"

const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clientsData.length)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      <h3 className="text-white font-extrabold text-2xl md:text-3xl text-center mt-10">
        <span className="text-primary-text">Client </span>I work for
      </h3>
      <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {clientsData.map((item, index) => (
          <li
            key={index}
            className={`flex justify-center items-center ease-in-out duration-300 ${
              index === activeIndex ? "scale-125" : ""
            }`}
          >
            <img
              src={item.iconUrl}
              width={120}
              height={90}
              alt={`client icon ${index + 1}`}
              className="object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Clients
