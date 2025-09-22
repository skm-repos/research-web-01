// src/pages/Login.jsx
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import SocialLoginButtons from "../components/SocialLoginButtons";
import LoginFooter from "../components/LoginFooter";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export default function Login() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#d0f4fc] via-[#e0f7fa] to-[#ffffff] overflow-hidden">
      
      {/* Background fade animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      />

      {/* Login Card Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
        >
          <LoginHeader />

          <LoginForm />

          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <SocialLoginButtons />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <LoginFooter />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
