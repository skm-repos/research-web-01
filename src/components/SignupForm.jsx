// src/components/SignupForm.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,   // backend expects fullName
          email: formData.email,
          password: formData.password,
          dob: formData.dob,         // you can store dob later in DB
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      // ✅ Save token (JWT) locally
      localStorage.setItem("token", data.token);

      alert("Signup successful!");
      console.log("User:", data.user);

      // Optionally redirect to dashboard
      // window.location.href = "/dashboard";
    } catch (err) {
      console.error("Error during signup:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          className="w-full mt-1 px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mt-1 px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block text-sm font-medium">Date of Birth</label>
        <input
          type="date"
          name="dob"
          className="w-full mt-1 px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          className="w-full mt-1 px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div
        className="pt-3"
      >
        <motion.button
            whileHover={{scale:1.02}}
            whileTap={{scale:0.96}}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
             Sign Up
        </motion.button>
      </div>
      
    </form>
  );
}
