import SectionHeading from '../SectionHeading/SectionHeading'
import TechnologyItems from './TechnologyItems'

const Technology = () => {
  return (
    <div id="techStack" className="px-4 md:px-10 py-10 mt-7">
      <div className="max-w-screen-lg mx-auto">
        <SectionHeading
          t1="TECHNO"
          t2="LOGY"
          st1="That Fuel Our"
          st2="Expertise"
        />

        {/* Journey Section */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 md:p-10 lg:p-12 flex flex-col gap-5 shadow-lg rounded-lg max-w-screen-lg mt-16">
          <TechnologyItems />
        </div>
      </div>
    </div>
  )
}

export default Technology
