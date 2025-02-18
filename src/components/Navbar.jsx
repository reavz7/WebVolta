import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import voltaImage from '../assets/VOLTA.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close mobile menu after clicking
  }

  return (
    <nav className="flex justify-center w-full pt-6 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-80 rounded-sm backdrop-blur-md shadow-lg px-6 py-4"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 font-bold text-indigo-600"><img src={voltaImage || "/placeholder.svg"} alt="" /></div>
            <div className="hidden md:flex space-x-6">
              <NavLink onClick={() => scrollToSection('home')}>Strona główna</NavLink>
              <NavLink onClick={() => scrollToSection('about')}>Studenciaki</NavLink>
              <NavLink onClick={() => scrollToSection('offer')}>Oferta</NavLink>
              <NavLink onClick={() => scrollToSection('contact')}>Kontakt</NavLink>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-indigo-600 transition-colors">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 space-y-2"
            >
              <NavLink onClick={() => scrollToSection('home')} mobile>Strona główna</NavLink>
              <NavLink onClick={() => scrollToSection('about')} mobile>Studenciaki</NavLink>
              <NavLink onClick={() => scrollToSection('offer')} mobile>Oferta</NavLink>
              <NavLink onClick={() => scrollToSection('contact')} mobile>Kontakt</NavLink>
            </motion.div>
          )}
        </motion.div>
      </div>
    </nav>
  )
}

const NavLink = ({ onClick, children, mobile }) => (
  <button
    onClick={onClick}
    className={`text-black font-bold hover:text-yellow-600 transition-colors ${
      mobile ? 'block py-2 w-full text-left' : ''
    }`}
  >
    {children}
  </button>
)

export default Navbar