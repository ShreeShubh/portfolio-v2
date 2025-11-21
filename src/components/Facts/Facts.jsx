import Timeline from './Timeline'
import Clients from './Clients'
import SectionHeading from '../SectionHeading/SectionHeading'

const Facts = () => {
  return (
    <div id="journey" className="px-4 md:px-10 pt-24 pb-16">
      <div className="max-w-screen-lg mx-auto">
        <SectionHeading t1="FAC" t2="TS" st1="About" st2="Journey" />

        {/* Journey Section */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 md:p-10 lg:p-12 flex flex-col gap-5 shadow-lg rounded-lg max-w-screen-lg mt-16">
          <Timeline />
          <Clients />
        </div>
      </div>
    </div>
  )
}

export default Facts
