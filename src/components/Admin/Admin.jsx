import React, { useEffect, useState } from "react"
// import { deletePortfolio, getPortfolio } from "../../services/api"

const Admin = () => {
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetchPortfolios()
  }, [])

  const fetchPortfolios = async () => {
    try {
      const { data } = await getPortfolio()
      console.log(data)
      setPortfolio(data)
    } catch (error) {
      console.log("Error fetching portfolio:", error)
    }
  }

  const handleEdit = (id) => {}

  const handleDelete = async (id) => {
    try {
      await deletePortfolio(id)
      fetchPortfolios()
    } catch (error) {
      console.log("Error deleting portfolio:", error)
    }
  }

  return (
    <div className="h-screen p-10">
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex flex-col gap-6">
          {portfolio.map((item) => (
            <li
              key={item._id}
              className="relative shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow overflow-hidden"
            >
              <div className="w-full md:w-1/3 flex-shrink-0">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover rounded-lg border border-gray-300"
                  />
                )}
              </div>

              <div className="w-full md:w-2/3 flex flex-col gap-4">
                <span className="text-2xl font-semibold text-blue-700">
                  {item.title}
                </span>
                <span className="text-lg text-gray-600">{item.desc}</span>
                <div className="flex gap-4">
                  {item.projectLink && (
                    <a
                      href={item.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-500 hover:text-blue-700 hover:underline transition"
                    >
                      View Project
                    </a>
                  )}
                  {item.githubLink && (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-500 hover:text-gray-700 hover:underline transition"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute bottom-4 right-4 flex gap-3">
                <button
                  onClick={() => handleEdit(item._id)}
                  className="w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform hover:scale-105 transition flex items-center justify-center shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.128 19.586a4.5 4.5 0 01-1.692 1.104l-4.108 1.373 1.373-4.108a4.5 4.5 0 011.104-1.692l12.742-12.742z"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 transform hover:scale-105 transition flex items-center justify-center shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 13h6m2 0a9 9 0 11-18 0 9 9 0 0118 0zm-9-7.5v15"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Admin
