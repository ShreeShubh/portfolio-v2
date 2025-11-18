import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Introduction from '../Introduction/Introduction'
import AboutMe from '../AboutMe/AboutMe'
import Services from '../Services/Services'
import Facts from '../Facts/Facts'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import ContactUs from '../ContactUs/ContactUs'
import AOS from 'aos'
import Technology from '../Technology/Technology'
import { BackgroundBeams } from '../ui/background-beams'

const Home = () => {
  const sectionData = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'aboutMe', title: 'About Us' },
    { id: 'professionalExperties', title: 'Services' },
    { id: 'technology', title: 'Technology' },
    { id: 'facts', title: 'Facts' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contactUs', title: 'Contact Us' },
  ]

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1200,
      easing: 'ease-in-sine',
    })
  })

  return (
    <>
      <div className="relative min-h-screen bg-neutral-950 overflow-x-hidden">
        <Header />
        <Introduction />
        <Services />
        <Portfolio />
        <AboutMe />
        <Technology />
        <Facts />
        <ContactUs />
      </div>
      <Footer />
    </>
  )
}

export default Home
