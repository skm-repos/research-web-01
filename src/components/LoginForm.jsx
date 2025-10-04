import { useState } from "react";
import { motion } from "framer-motion";
import { scale } from "../utils/motion";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // ✅ Save JWT token
      localStorage.setItem("token", data.token);

      alert("Login successful!");
      console.log("User:", data.user);

      // Optionally redirect
      // window.location.href = "/dashboard";
    } catch (err) {
      console.error("Error during login:", err);
      alert("Something went wrong!");
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <motion.button
        whileHover={{scale:1.02}}
        whileTap={{scale:0.96}}
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Sign In
      </motion.button>
    </form>
  );
}
