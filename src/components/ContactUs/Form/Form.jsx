import React, { useState } from "react"
import { CustomButton } from "../../MaterialComponents/CustomButton/CustomButton"
import { addContact } from "../../../services/api"

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    company: "",
  })
  const [showLoader, SetShowLoader] = useState(false)
  const [showMessase, setShowMessage] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    SetShowLoader(true)
    try {
      await addContact(formData)
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        company: "",
      })

      SetShowLoader(false)
      setShowMessage(true)

      // setTimeout(() => {
      //   setShowMessage(false)
      // }, 5000)
    } catch (error) {
      console.error("Error creating contact:", error)
      SetShowLoader(false)
    }
    //console.log(formData)
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
          value={formData.firstname}
          required
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
        <label
          htmlFor="floating_first_name"
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
          value={formData.lastname}
          required
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
        <label
          htmlFor="floating_last_name"
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
        value={formData.email}
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <label
        htmlFor="floating_email"
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
          value={formData.mobile}
          required
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />
        <label
          htmlFor="floating_phone"
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
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
        <label
          htmlFor="floating_company"
          className="peer-focus:font-medium absolute text-sm text-secondary-text dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-text peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Company (Ex. Google)
        </label>
      </div>
    </div>
  )

  return (
    <>
      {showMessase ? (
        <p className="text-primary-text font-semibold transition-opacity duration-500 ease-in-out opacity-100">
          Thank you for connecting!{" "}
          <span className="text-white font-normal">
            Expect to hear from our creative crew shortly.
          </span>
        </p>
      ) : (
        <p className="text-primary-text font-semibold">
          Fill this form to connecting us!
        </p>
      )}

      <form className="max-w-2xl" onSubmit={handleSubmit}>
        {renderNameField()}
        {renderEmailField()}
        {renderPhoneAndCompanyField()}
        <div className="mt-3">
          <CustomButton type="submit">
            {showLoader && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-primary-bg animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            Submit
          </CustomButton>
        </div>
      </form>
    </>
  )
}

export default Form
