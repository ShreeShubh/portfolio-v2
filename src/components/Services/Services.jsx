import { TextHoverEffectDemo } from '../Animation/TextHover/TextHover'
import { BackgroundBeams } from '../ui/background-beams'
import { HoverEffect } from '../ui/card-hover-effect'
import ServicesItems from './ServicesItems'

const ProfessionalExperties = () => {
  return (
    <div className="bg-neutral-950 px-4 min-h-screen pb-14 relative">
      <div className="py-10 px-4 md:px-10 relative max-w-screen-lg mx-auto">
        <div className="space-y-10 max-w-screen-xl mx-auto">
          {/* Heading */}
          <div className="">
            {/* <h2 className="text-secondary-text text-5xl md:text-7xl font-extrabold">
            Services
          </h2> */}
            <TextHoverEffectDemo text="SERVICES" />
            <h3 className="text-white font-extrabold text-2xl md:text-3xl text-center">
              Professional <span className="text-primary-text">Expertise</span>
            </h3>
          </div>

          {/* Services Grid */}
          {/* <ServicesItems /> */}
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  )
}

export default ProfessionalExperties

export const projects = [
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: 'https://stripe.com',
  },
  {
    title: 'Netflix',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    link: 'https://netflix.com',
  },
  {
    title: 'Google',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: 'https://google.com',
  },
  {
    title: 'Meta',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: 'https://meta.com',
  },
  {
    title: 'Amazon',
    description:
      'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    link: 'https://amazon.com',
  },
  {
    title: 'Microsoft',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    link: 'https://microsoft.com',
  },
]
