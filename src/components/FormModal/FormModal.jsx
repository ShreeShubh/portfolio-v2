import React from 'react'
import Form from '../ContactUs/Form/Form'

const FormModal = ({ handleContactForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 px-2 sm:px-4 z-50">
      <div
        className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl 
                  rounded-xl shadow-xl border border-gray-600
                  bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 md:p-5 border-b border-gray-600">
          <h3 className="text-lg sm:text-xl font-semibold text-primary-text">
            Contact Form
          </h3>

          <button
            type="button"
            onClick={handleContactForm}
            className="text-gray-400 hover:bg-gray-300/20 hover:text-white 
                   rounded-lg w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center"
          >
            <svg
              className="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7L1 13"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col rounded-b-xl">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default FormModal
