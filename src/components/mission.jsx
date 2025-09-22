import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
      navigate("/login"); // takes you to login page
  };
  const features = [
    {
      icon: "🔍", 
      title: "Discover Opportunities",
      description: "Explore research trends, calls for papers, and collaboration chances tailored to your field."
    },
    {
      icon: "⚙️",
      title: "Share Your Work Easily", 
      description: "Publish your research with simple tools and make it accessible to a global academic audience."
    },
    {
      icon: "🚀",
      title: "Boost Your Impact",
      description: "Gain recognition, earn rewards, and connect with peers to advance your research career."
    }
  ]

  return (
    <motion.section 
      id='mission'
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto my-10 px-4 py-16 bg-violet-700/80 rounded-4xl backdrop-blur-md z-50 border-b border-gray-400 shadow-lg"
    >
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl font-bold mb-4 text-white"
        >
          How can we help your research?
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-white/80"
        >
          When you share your work here, you grow your impact, build your profile, and connect globally.
        </motion.p>
      </motion.div>
      
      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            className="flex flex-col items-center p-6"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center bg-white" 
              // style={{  
              //   backgroundColor: index === 0 ? '#F1EFFD' : 
              //                  index === 1 ? '#FFE7E7' : 
              //                  '#FFF3E4'
              // }}
            >
              <motion.div 
                // variants={fadeIn('up', 0.5 * (index + 1))}
                className="text-4xl"
              >
                {feature.icon}
              </motion.div>
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className="text-2xl font-medium mb-3 text-white"
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.6 * (index + 1))}
              className="text-white/80 text-center"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.7)}
        className="text-center mt-12"
      >
        <motion.button 
          variants={fadeIn('up', 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLoginClick}
          className="bg-yellow-400 text-gray-800 cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-yellow-400/90 transition-colors relative"
        >
          Start Publishing
          {/* <div className="absolute -z-10 w-full h-full rounded-full bg-blue-200/30 blur-xl top-0 left-0"></div> */}
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default FeaturesSection