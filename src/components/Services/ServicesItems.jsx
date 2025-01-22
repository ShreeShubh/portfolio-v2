import { useEffect, useState } from "react"
import { servicesData } from "../../utils/data"
import { arrow } from "../../utils/icon"
import { CustomButton } from "../MaterialComponents/CustomButton/CustomButton"

const ServicesItems = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (index) => {
    setActiveModal(index)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [activeModal])

  return (
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
          <p className="text-base md:text-lg flex-1">{item.shortDesc}</p>

          {/* Read More Button */}
          <button
            onClick={() => openModal(index)}
            className="font-semibold flex items-center gap-4"
          >
            Read More
            <span className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
              {arrow}
            </span>
          </button>

          {/* Modal */}
          {activeModal === index && (
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 px-3">
              <div className="relative p-4 w-full max-w-2xl max-h-full bg-primary-bg rounded-lg shadow-xl border-2">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-primary-text">
                    {item.title}
                  </h3>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                  >
                    <svg
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                      aria-hidden="true"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-4 md:p-5 space-y-4 max-h-60 overflow-auto">
                  <p className="text-base leading-relaxed text-white overflow-auto">
                    {item.longDesc}
                  </p>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                  <CustomButton
                    onClick={() => {
                      closeModal()
                      // Add any additional functionality for "GET IN TOUCH" button
                    }}
                  >
                    GET IN TOUCH
                  </CustomButton>
                </div>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default ServicesItems
