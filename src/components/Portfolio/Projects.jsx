const Projects = ({ getFilteredProject }) => {
  return (
    <div className="flex justify-center w-full">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {getFilteredProject().map((item, index) => (
          <li
            key={index}
            className="bg-secondary-bg rounded-xl flex flex-col shadow-lg w-full max-w-[336px] mx-auto"
            data-aos="flip-left"
          >
            {/* Project Image */}
            <img
              src={item.image}
              alt={`project ${index + 1}`}
              className="w-full rounded-t-xl object-cover h-[200px]"
            />
            {/* Project Details */}
            <div className="p-5 space-y-3">
              <h2 className="text-lg text-white font-semibold">{item.title}</h2>
              <p className="text-sm md:text-base text-white">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
