import SignupForm from "../components/SignupForm";
import SocialLoginButtons from "../components/SocialLoginButtons";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#d0f4fc]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-gray-600">Join us and get started</p>
        </div>

        <SignupForm />

        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <SocialLoginButtons />

        {/* Link to Login */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
