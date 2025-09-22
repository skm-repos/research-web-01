import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { AiOutlineTrophy } from "react-icons/ai";
import { BiGift } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login"); // takes you to login page
  };
  

  const services = [
    {
      icon: <FaBookOpen className="w-8 h-8 text-indigo-600" />,
      title: "Publish Research",
      description: "Make your work accessible to a global community of scholars and innovators.",
      link: "#learn-more"
    },
    {
      icon: <AiOutlineTrophy className="w-8 h-8 text-amber-400" />,
      title: "Gain Recognition", 
      description: "Build your academic profile with citations, ratings, and peer feedback.",
      link: "#learn-more"
    },
    {
      icon: <BiGift className="w-8 h-8 text-red-400" />,
      title: "Earn Rewards",
      description: "Get rewarded with tokens, certificates, or collaborations for impactful work.",
      link: "#learn-more"
    },
    {
      icon: <MdGroups className="w-8 h-8 text-cyan-400" />,
      title: "Collaborate & Network",
      description: "Connect with researchers, institutions, and industry partners worldwide.",
      link: "#learn-more"
    }
  ]

  return (
    <section id="opportunities" className="max-w-7xl py-20 container bg mx-auto px-4 sm:px-6 lg:px-8 rounded-4xl bg-white backdrop-blur-md z-20 border-b border-gray-200 shadow-lg">
     <motion.div 
      variants={fadeIn('up', 0.3)}
      className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
     >
       {/* Header */}
       <motion.div 
        variants={fadeIn('right', 0.4)}
        className="md:w-4/9"
       >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
        >
          Future of Research <br /> with New Opportunities
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.5)}
          className="text-gray-600 text-lg mb-4 md:w-4/5"
        >
          Publish your research, gain recognition, and get rewarded for your contributions.
        </motion.p>
        <motion.div 
          variants={fadeIn('up', 0.6)}
          className="space-y-3"
        >
          <motion.div 
            variants={fadeIn('right', 0.7)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
            </div>
            <span className="text-gray-600">Share groundbreaking ideas with the world</span>
          </motion.div>
          <motion.div 
            variants={fadeIn('right', 0.8)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
            </div>
            <span className="text-gray-600">Earn rewards for your research impact</span>
          </motion.div>
        </motion.div>
        <motion.button 
          variants={fadeIn('up', 0.9)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLoginClick}
          className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors"
        >
          Get started
        </motion.button>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={fadeIn('left', 0.4)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            whileHover={{ scale: 1.05 }}
            className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="mb-4"
            >
              {service.icon}
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className="text-xl font-semibold mb-2"
            >
              {service.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.5 * (index + 1))}
              className="text-gray-600 mb-4"
            >
              {service.description}
            </motion.p>
            <motion.a 
              variants={fadeIn('up', 0.6 * (index + 1))}
              href={service.link}
              className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
            >
              LEARN MORE
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
     </motion.div>
    </section>
  )
}

export default ServicesSection 