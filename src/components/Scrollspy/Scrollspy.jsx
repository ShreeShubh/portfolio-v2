import React, { useEffect, useRef, useState } from "react"

const Scrollspy = ({ sectionData }) => {
  const [activeSection, setActiveSection] = useState("") // Track active section
  const observerRefs = useRef([]) // To store refs for each section

  useEffect(() => {
    if (typeof window === "undefined") return // Ensure this runs only in the browser

    // Attach refs to section data
    observerRefs.current = sectionData
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) // Filter out null/undefined elements

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id) // Update active section when intersecting
          }
        })
      },
      { root: null, rootMargin: "0px", threshold: 0.4 } // Adjust threshold for better accuracy
    )

    // Observe each section
    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect()
    }
  }, [sectionData])

  return (
    <div className="hidden lg:flex flex-col gap-4 w-55 fixed right-0 top-1/2 transform -translate-y-1/2 pe-10 opacity-50">
      <ul className="text-white space-y-2 w-full">
        {sectionData.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer ${
              activeSection === item.id ? "text-primary-text font-semibold" : ""
            }`}
          >
            <div className="flex items-center justify-end gap-3 text-right">
              <span
                className={`${
                  activeSection === item.id
                    ? "border-b w-8 border-primary-text"
                    : ""
                }`}
              />
              <a
                href={`#${item.id}`}
                className="hover:text-primary-text text-3xl"
              >
                {item.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Scrollspy
