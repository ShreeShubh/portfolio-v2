const Projects = ({ getFilteredProject }) => {
  return (
    <div className="flex justify-center w-10/12">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-6">
        {getFilteredProject().map((item, index) => (
          <li
            key={index}
            className="bg-secondary-bg rounded-xl shadow-lg group hover:bg-primary-text ease-in-out duration-300 hover:scale-110 cursor-pointer"
          >
            {/* Project Image */}
            <img
              src={item.image}
              alt={`project ${index + 1}`}
              className="w-full rounded-t-xl h-[200px]"
            />
            {/* Project Details */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-lg text-white font-semibold group-hover:text-primary-bg">
                {item.title}
              </h2>
              <p className="text-sm md:text-base text-white group-hover:text-primary-bg">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
