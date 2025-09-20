// src/pages/Login.jsx
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import SocialLoginButtons from "../components/SocialLoginButtons";
import LoginFooter from "../components/LoginFooter";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#d0f4fc]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <LoginHeader />
        <LoginForm />
        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <SocialLoginButtons />
        <LoginFooter />
      </div>
    </div>
  );
}
