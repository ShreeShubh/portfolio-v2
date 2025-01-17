import React, { useState } from "react"
import { CustomButton } from "../../MaterialComponents/CustomButton/CustomButton"

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    company: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const renderNameField = () => (
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary-text peer"
          placeholder=" "
          required
          onClick={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
        <label
          for="floating_first_name"
          className="peer-focus:font-medium absolute text-sm text-secondary-text dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-text peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          First name
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_last_name"
          id="floating_last_name"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary-text peer"
          placeholder=" "
          required
        />
        <label
          for="floating_last_name"
          className="peer-focus:font-medium absolute text-sm text-secondary-text dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-text peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Last name
        </label>
      </div>
    </div>
  )

  const renderEmailField = () => (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="email"
        name="floating_email"
        id="floating_email"
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary-text peer"
        placeholder=" "
        required
      />
      <label
        for="floating_email"
        className="peer-focus:font-medium absolute text-sm text-secondary-text dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary-text peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Email address
      </label>
    </div>
  )

  const renderPhoneAndCompanyField = () => (
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="floating_phone"
          id="floating_phone"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary-text peer"
          placeholder=" "
          required
        />
        <label
          for="floating_phone"
          className="peer-focus:font-medium absolute text-sm text-secondary-text dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-text peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone number
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_company"
          id="floating_company"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary-text peer"
          placeholder=" "
          required
        />
        <label
          for="floating_company"
          className="peer-focus:font-medium absolute text-sm text-secondary-text dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-text peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Company (Ex. Google)
        </label>
      </div>
    </div>
  )

  return (
    <form className="max-w-2xl" onSubmit={handleSubmit}>
      {renderNameField()}
      {renderEmailField()}
      {renderPhoneAndCompanyField()}
      <CustomButton type="submit">Submit</CustomButton>
    </form>
  )
}

export default Form
