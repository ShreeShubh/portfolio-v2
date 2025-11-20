import { TextHoverEffectDemo } from '../Animation/TextHover/TextHover'
import TechnologyItems from './TechnologyItems'

const Technology = () => {
  return (
    <div id="techStack" className="px-4 md:px-10 py-10 mt-7">
      <div className="max-w-screen-lg mx-auto">
        {/* Heading */}
        <div className="">
          {/* <h2 className="text-secondary-text text-5xl md:text-7xl font-extrabold">
            Technologies
          </h2> */}
          <TextHoverEffectDemo text="Technology" />
          <h3 className="text-white font-extrabold text-2xl md:text-3xl text-center mb-7">
            That Fuel Our <span className="text-primary-text">Expertise</span>
          </h3>
        </div>

        {/* Journey Section */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 md:p-10 lg:p-12 flex flex-col gap-5 shadow-lg rounded-lg max-w-screen-lg">
          <TechnologyItems />
        </div>
      </div>
    </div>
  )
}

export default Technology
