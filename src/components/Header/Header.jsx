import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react'

export default function Header() {
  return (
    <Navbar
      fluid
      className="fixed top-0 w-full z-50 bg-neutral-950/70 backdrop-blur-lg border-b border-slate-700 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]"
      data-aos="fade-down"
    >
      <div className="max-w-screen-lg mx-auto flex flex-wrap items-center justify-between w-full">
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap font-montserrat text-3xl md:text-5xl text-primary-text font-semibold">
            NsRt
          </span>
        </NavbarBrand>

        <NavbarToggle className="text-primary-text hover:text-white hover:!bg-transparent focus:ring-0" />

        <NavbarCollapse>
          {navMenu.map((menu) => (
            <NavbarLink
              key={menu.id}
              href={menu.link}
              className="text-primary-text hover:text-white hover:!bg-transparent transition-colors duration-300 border-gray-600 !border-none text-base"
            >
              {menu.title}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </div>
    </Navbar>
  )
}

const navMenu = [
  //{ id: 1, title: 'Home', link: '#home' },
  { id: 2, title: 'About', link: '#about' },
  { id: 3, title: 'Services', link: '#services' },
  { id: 4, title: 'Our Work', link: '#portfolio' },
  { id: 4, title: 'Journey', link: '#journey' },
  { id: 5, title: "Let's Talk", link: '#contact' },
]
