import Timeline from "./Timeline"
import Clients from "./Clients"

const Facts = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 py-10 mt-7">
      <div className="space-y-10 max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="">
          <h2 className="text-secondary-text text-5xl md:text-7xl font-extrabold">
            Facts
          </h2>
          <h3 className="text-white font-extrabold text-2xl md:text-3xl">
            About <span className="text-primary-text">Journey</span>
          </h3>
        </div>

        {/* Journey Section */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 md:p-10 lg:p-12 flex flex-col gap-5 shadow-lg rounded-lg max-w-screen-lg">
          <Timeline />
          <Clients />
        </div>
      </div>
    </div>
  )
}

export default Facts
