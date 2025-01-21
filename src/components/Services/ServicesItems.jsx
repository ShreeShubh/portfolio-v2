import { servicesData } from "../../utils/data"
import { arrow } from "../../utils/icon"
import { CustomButton } from "../MaterialComponents/CustomButton/CustomButton"

const ServicesItems = () => {
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
            data-modal-target={`default-modal-${index}`}
            data-modal-toggle={`default-modal-${index}`}
            className="font-semibold flex items-center gap-4"
          >
            Read More
            <span className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
              {arrow}
            </span>
          </button>

          {/* modal */}
          <div
            id={`default-modal-${index}`}
            tabindex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-primary-bg rounded-lg shadow-xl dark:bg-gray-700 border-2">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-primary-text dark:text-white">
                    Terms of Service
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide={`default-modal-${index}`}
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-base leading-relaxed text-white dark:text-gray-400">
                    {item.longDesc}
                  </p>
                </div>

                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <CustomButton data-modal-hide={`default-modal-${index}`}>
                    GET IN TOUCH
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ServicesItems
