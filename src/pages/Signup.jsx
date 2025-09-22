// src/pages/Signup.jsx
import SignupForm from "../components/SignupForm";
import SocialLoginButtons from "../components/SocialLoginButtons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#d0f4fc] via-[#e0f7fa] to-[#ffffff] overflow-hidden">
      
      {/* Background fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      />

      {/* Animated Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-gray-600">Join us and get started</p>
        </motion.div>

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SignupForm />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="my-4 flex items-center"
        >
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </motion.div>

        {/* Social logins */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <SocialLoginButtons />
        </motion.div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-6 text-sm text-gray-600"
        >
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
