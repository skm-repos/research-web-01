// src/components/LoginFooter.jsx
import { Link } from "react-router-dom";

export default function LoginFooter() {
  return (
    <div className="text-center mt-6 text-sm text-gray-600">
      <p>
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
