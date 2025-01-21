import ServicesItems from "./ServicesItems"

const ProfessionalExperties = () => {
  return (
    <div className="py-10 px-4 md:px-10">
      <div className="space-y-10 max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="">
          <h2 className="text-secondary-text text-5xl md:text-7xl font-extrabold">
            Services
          </h2>
          <h3 className="text-white font-extrabold text-2xl md:text-3xl">
            Professional <span className="text-primary-text">Expertise</span>
          </h3>
        </div>

        {/* Services Grid */}
        <ServicesItems />
      </div>
    </div>
  )
}

export default ProfessionalExperties
