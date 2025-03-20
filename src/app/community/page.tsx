"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { chatWithGemini } from "../utils/geminiApi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";

import { Menu } from "lucide-react";

export default function Community() {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const [userInput, setUserInput] = useState("");
  const [chatResponse, setChatResponse] = useState("Welcome to the Community Chatbot! Ask me anything.");

  // Handle chatbot interaction
  const handleChat = async () => {
    if (!userInput.trim()) return;
    const response = await chatWithGemini(userInput);
    setChatResponse(response);
    setUserInput("");
  };

  return (
    <motion.div
      className="relative min-h-screen w-full text-white bg-black flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundImage: "url('/bgimg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ Global Navbar */}
      <Navbar />
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-30 left-4 z-50 bg-green-700 text-white p-2 rounded-md shadow-md"
        >
          <Menu size={24} />
        </button>
      )}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Centered Chatbot Section */}
      <div className="w-full flex flex-col justify-center items-center min-h-screen px-6">
        <motion.div
          className="w-full max-w-lg border border-gray-300 shadow-md rounded-lg p-6 backdrop-blur-md bg-white/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-bold text-white text-center">Flovepal Chatbot</h3>
          <div className="bg-white/30 p-3 mt-3 rounded-lg h-40 overflow-y-auto text-sm text-gray-900">
            {chatResponse}
          </div>
          <div className="mt-3 flex">
            <input
              type="text"
              className="flex-1 p-2 border rounded-md text-black text-sm focus:outline-none"
              placeholder="Ask me anything..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleChat()}
            />
            <motion.button
              onClick={handleChat}
              className="ml-2 px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-700 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}