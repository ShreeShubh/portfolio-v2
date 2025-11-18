import React from 'react'
import Form from '../ContactUs/Form/Form'

const FormModal = ({ handleContactForm }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-3">
      <div className="relative p-4 w-full max-w-3xl max-h-full rounded-lg shadow-xl border-2 px-2 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold text-primary-text">
            Contact Form
          </h3>
          <button
            type="button"
            onClick={handleContactForm}
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center"
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <div className="p-8 md:p-10 rounded-lg shadow-lg flex flex-col gap-10">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default FormModal
