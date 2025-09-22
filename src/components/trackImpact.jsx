import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import 'swiper/css';
import 'swiper/css/navigation';
import monitorCardBg from '../assets/monitor-card.webp';
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import trackImg from '../assets/animations/track.json';


const MonitorSection = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login"); // takes you to login page
  };
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 pt-10 md:py-5"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 ">
        {/* Left side - Content */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span 
            variants={fadeIn('up', 0.4)}
            className="text-emerald-500 font-semibold"
          >
            TRACK
          </motion.span>
          <motion.h2 
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5"
          >
            Monitor Your Research Impact in Real-Time          
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.6)}
            className="text-gray-600 mb-8 md:w-4/5"
          >
            Stay informed about how your research is performing across the globe. Track citations, downloads, and peer engagement with easy-to-read analytics. Measure the true impact of your work and make data-driven decisions to grow your academic presence.</motion.p>
           <motion.button 
            variants={fadeIn('up', 0.8)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoginClick}
            className="bg-yellow-400 text-gray-800 cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-yellow-400/90 transition-colors relative"
          >
              Learn More
          </motion.button>
        </motion.div>

        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-4/10 mb-10 md:py-5 md:mt-0"
        >
           <div className="relative z-10 hover:scale-[1.02] transition-transform duration-300">
             <Lottie
              animationData={trackImg}
              loop={true}
              className="w-full h-full" // Tailwind for size
              // initialSegment={[65, collaImg.op]} // Start at frame 65 → till end
              />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default MonitorSection 