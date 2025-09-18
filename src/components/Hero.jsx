import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Lottie from "lottie-react";
import heroAnim from '../assets/animations/hero-image6.json'

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-tr from-[#caf3fc] to-[#6dc3d4] overflow-hidden">
      <div className='flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-30 pb-30 container mx-auto'>
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-8">
          <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
            {/* Star badge */}
            <div className="flex items-center gap-2 bg-white/90 w-fit px-4 py-2 rounded-full hover:bg-white transition-colors cursor-pointer group shadow-md">
              <span className="text-yellow-500 text-lg group-hover:scale-110 transition-transform">★</span>
              <span className="text-sm font-medium text-gray-800">grow with research</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            className="text-2xl md:text-2xl lg:text-6xl font-bold leading-tight text-gray-800"
          >
            From Students to <br /> Research Leaders{' '}
            <span className="text-blue-500/80 lg:text-7xl relative inline-block">
              From Thesis to Global Stage{' '}
            <span className="inline-block ml-2 animate-pulse">⏰</span>
            </span>{' '}
          </motion.h1>

          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-gray-600 text-lg md:text-xl max-w-xl"
          >
            Present your discoveries in a modern, engaging, and professional format — designed for visibility, recognition, and global reach.
          </motion.p>

          <motion.div 
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            className="flex gap-3 max-w-md"
          >
            <button className="bg-yellow-400 text-gray-900 px-10 py-3 rounded-xl hover:bg-yellow-500 cursor-pointer transition-all hover:shadow-lg hover:shadow-yellow-200 active:scale-95">
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Right Column - Images */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 mt-16 py-3 md:mt-0 pl-0 md:pl-12"
        >
          <div className="relative z-10 hover:scale-[1.02] transition-transform duration-300">
             <Lottie
              animationData={heroAnim}
              loop={true}
              className="w-full h-full" // Tailwind for size
              />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
