import Timeline from './Timeline'
import Clients from './Clients'
import { TextHoverEffectDemo } from '../Animation/TextHover/TextHover'

const Facts = () => {
  return (
    <div id="journey" className="px-4 md:px-10 py-16 mt-7">
      <div className="max-w-screen-lg mx-auto">
        {/* Heading */}
        <div className="">
          <TextHoverEffectDemo text="Facts" />
          <h3 className="text-white font-extrabold text-2xl md:text-3xl text-center mb-7">
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
