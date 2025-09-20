// src/components/SocialLoginButtons.jsx
import { FaGoogle, FaGithub, FaMicrosoft } from "react-icons/fa";

export default function SocialLoginButtons() {
  return (
    <div className="space-y-3">
        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100">
        <FaGoogle className="text-blue-500" /> Continue with Google
      </button>
      <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100">
        <FaGithub /> Continue with GitHub
      </button>
      
      <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100">
        <FaMicrosoft className="text-blue-600" /> Continue with Microsoft
      </button>
    </div>
  );
}