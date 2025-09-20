// src/components/SocialLoginButtons.jsx
import { FaGoogle, FaGithub, FaMicrosoft } from "react-icons/fa";
import { motion } from "framer-motion";


export default function SocialLoginButtons() {
  return (
    <div className="space-y-3">
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }} 
            className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100"
        >
        <FaGoogle className="text-blue-500" /> Continue with Google
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100"
      >
        <FaGithub /> Continue with GitHub
      </motion.button>
      
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100"
      >
        <FaMicrosoft className="text-blue-600" /> Continue with Microsoft
      </motion.button>
    </div>
  );
}