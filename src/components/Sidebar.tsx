"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ duration: 0.3 }}
      className="fixed top-20 left-0 h-full w-64 bg-black bg-opacity-95 text-white shadow-xl z-40"
      style={{
        backgroundImage: "url('/homebg.jpg')",
        backgroundSize: "cover",
        paddingTop: "60px",
      }}
    >
      {/* ✅ Close Button */}
      <button
        onClick={onClose}
        className="absolute top-10 right-4 text-white p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
      >
        <X size={24} />
      </button>

      {/* Sidebar Options */}
      <div className="flex flex-col space-y-6 px-6 pt-10">
        <Link href="/business">
          <motion.p
            className="text-xl font-semibold cursor-pointer text-green-700 hover:text-white"
            whileHover={{ scale: 1.05 }}
            onClick={onClose}
          >
            Our Products/Services
          </motion.p>
        </Link>
        <Link href="/chat">
          <motion.p
            className="text-xl font-semibold cursor-pointer text-green-700 hover:text-white"
            whileHover={{ scale: 1.05 }}
            onClick={onClose}
          >
            Community Chat
          </motion.p>
        </Link>
        <Link href="/events">
          <motion.p
            className="text-xl font-semibold cursor-pointer text-green-700 hover:text-white"
            whileHover={{ scale: 1.05 }}
            onClick={onClose}
          >
            Our Events
          </motion.p>
        </Link>
        <Link href="/community">
          <motion.p
            className="text-xl font-semibold cursor-pointer text-green-700 hover:text-white"
            whileHover={{ scale: 1.05 }}
            onClick={onClose}
          >
            Flovepal AI
          </motion.p>
        </Link>
      </div>
    </motion.div>
  );
}
