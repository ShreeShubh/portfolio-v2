import React, { useEffect } from "react"
import Header from "../Header/Header"
import Introduction from "../Introduction/Introduction"
import AboutMe from "../AboutMe/AboutMe"
import Services from "../Services/Services"
import Facts from "../Facts/Facts"
import Portfolio from "../Portfolio/Portfolio"
import Scrollspy from "../Scrollspy/Scrollspy"
import Footer from "../Footer/Footer"
import ContactUs from "../ContactUs/ContactUs"
import AOS from "aos"
import Technology from "../Technology/Technology"
import { BackgroundBeams } from "../ui/background-beams"

const Home = () => {
  const sectionData = [
    { id: "introduction", title: "Introduction" },
    { id: "aboutMe", title: "About Us" },
    { id: "professionalExperties", title: "Services" },
    { id: "technology", title: "Technology" },
    { id: "facts", title: "Facts" },
    { id: "portfolio", title: "Portfolio" },
    { id: "contactUs", title: "Contact Us" },
  ]

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1200,
      easing: "ease-in-sine",
    })
  })

  return (
    <>
      <Header />
      <section id="introduction">
        <Introduction />
      </section>
      <section id="professionalExperties">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="aboutMe">
        <AboutMe />
      </section>

      <div className="background py-3">
        <div className="flex justify-between max-w-screen-2xl lg:px-10 mx-auto gap-5">
          {/* main container */}
          <div className="w-full overflow-hidden">
            <section id="technology">
              <Technology />
            </section>
            <section id="facts">
              <Facts />
            </section>

            <section id="contactUs">
              <ContactUs />
            </section>
          </div>
          <BackgroundBeams />
          {/* scrollspy section */}
          {/* <Scrollspy sectionData={sectionData} /> */}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
