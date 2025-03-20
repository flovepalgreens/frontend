"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // TODO: Implement login logic (API call, authentication)
  };

  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center text-gray-950 bg-cover bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ backgroundImage: "url('/bgimg.jpg')" }}
    >
      {/* Login Box */}
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-black">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-green-700 font-serif">
          Login
        </h1>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 text-md rounded-lg bg-gray-100 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700 font-serif"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 text-md rounded-lg bg-gray-100 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700 font-serif"
            required
          />
          <motion.button
            type="submit"
            className="text-center text-white bg-green-700 px-5 py-2 rounded-lg font-bold mt-5 transition-all hover:bg-green-700 font-serif"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center text-gray-700 mt-5 text-md font-serif">
          Don't have an account?{" "}
          <Link href="/signup" className="text-green-700 font-bold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
