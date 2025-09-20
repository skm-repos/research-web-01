import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import logoImage from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login"); // takes you to login page
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Our Mission" },
    { href: "#services", label: "Our Service" },
    { href: "#testimonials", label: "Testimonials" },
  ]

  return (
    <motion.nav 
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-[#edf2fb]/90 backdrop-blur-md z-50 border-b border-gray-400 shadow-lg"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-17 h-16">
        {/* Logo */}
        <motion.div className="flex items-center gap-1 cursor-pointer">
          <motion.img
            src={logoImage}
            alt="Logo"
            className="w-36 h-18"
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </motion.button>

        {/* Navigation Links - Desktop */}
        <motion.div className="hidden md:flex items-center gap-5">
          {navLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              whileHover={{ scale: 1.05 }}
              className={`text-sm font-medium px-5 py-2 rounded-full hover:bg-[#b8d0eb] transition-colors
                ${activeLink === link.href ? 'text-orange-600' : 'text-gray-800  hover:text-blue-500'}`}
            >
              {link.label}
            </motion.a>
          ))}

          {/* CTA Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoginClick}
            className="text-sm font-medium px-5 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Login
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-200 py-4"
        >
          <motion.div className="container mx-auto px-4 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-lg font-medium py-2
                  ${activeLink === link.href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar