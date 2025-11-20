import { TextHoverEffectDemo } from '../Animation/TextHover/TextHover'
import { HoverEffect } from '../ui/card-hover-effect'

const ProfessionalExperties = () => {
  return (
    <div id="services" className="px-4 py-16">
      <div className="py-10 px-4 md:px-10 max-w-screen-lg mx-auto">
        <div className="space-y-10">
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
          <div>
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalExperties

export const projects = [
  {
    title: 'Custom Website Development',
    description:
      'Build robust, responsive, and user-centric websites tailored to your business goals. Our team delivers cutting-edge custom web development to help you grow and engage your audience effectively.',
    link: '',
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Launch, manage, and scale your online store with secure, high-performance e-commerce web development. We integrate payment gateways and optimize your platform for conversions and sales growth.',
    link: '',
  },
  {
    title: 'UI/UX Design',
    description:
      'Deliver intuitive and visually compelling digital experiences. Our UI/UX design services enhance visitor engagement, increase usability, and ensure your product stands out in a competitive market.',
    link: '',
  },
  {
    title: 'Website Maintenance & Support',
    description:
      'Keep your site secure, updated, and running smoothly with proactive maintenance and technical support. We handle updates, backups, and troubleshooting, so you can focus on your business.',
    link: '',
  },
  {
    title: 'SEO Optimization',
    description:
      'Boost your visibility and drive targeted traffic with expert SEO services. We implement best practices, optimize on-page elements, and create content that improves your search engine rankings.',
    link: '',
  },
  {
    title: 'Web Application Development',
    description:
      'Transform your ideas into scalable web applications built for performance and security. We leverage modern frameworks and robust architecture to deliver solutions that help your business thrive online.',
    link: '',
  },
]
