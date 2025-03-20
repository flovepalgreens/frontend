"use client";



import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/NavBar";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import Footer from "@/components/footer";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const businessSectors = [
    "Urban Gardening Solutions",
    "Eco-friendly Landscaping",
    "Greenhouse Innovations",
    "Organic Farming Technologies",
    "Smart Watering Systems",
    "Botanical Research and Development",
    "Vertical Farming Advancements",
    "Community Garden Initiatives",
    "Carbon Footprint Reduction Programs"
  ];

  return (
    <>
      <Navbar />

      {/* Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-30 left-4 z-50 bg-green-700 text-white p-2 rounded-md shadow-md"
        >
          <Menu size={24} />
        </button>
      )}

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <motion.div
        className="relative min-h-screen w-full text-black bg-white flex flex-col items-center px-6 md:px-10 pt-32 space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Hero Section with Image */}
        <motion.div className="w-full max-w-5xl text-center">
          
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif leading-tight text-green-700 mt-6">
            Welcome to Flovepal
          </h1>
          <p className="mt-4 text-md md:text-lg font-light leading-relaxed">
            We are at the forefront of eco-friendly solutions, providing innovative products for sustainable living.
            Our focus spans multiple industries that contribute to a greener planet.
          </p>
          <div className="flex justify-center mt-6">
            <Image src="/plant.jpg" width={600} height={600} alt="Lush green garden" className="rounded-lg shadow-md" />
          </div>
        </motion.div>

        {/* Business Sectors */}
        <motion.div className="max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif leading-tight text-green-700">
            Business Sectors We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {businessSectors.map((sector, index) => (
              <motion.div key={index} className="p-4 border border-green-300 rounded-lg shadow-md bg-green-50"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-green-800 font-semibold">✔</span>
                <p className="mt-2">{sector}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Business & Services with Image */}
        <motion.div className="max-w-3xl text-center">
          <div className="flex justify-center mt-6">
            <Image src="/garden.jpg" width={600} height={600} alt="Gardening tools" className="rounded-lg shadow-md" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif leading-tight text-green-700 mt-6">
            Our Business & Services
          </h2>
          <p className="mt-4 text-md md:text-lg font-light leading-relaxed mb-4">
            At Flovepal, we offer a diverse range of eco-friendly products and services tailored for urban and rural gardening needs. 
            Our solutions include customized garden planning, organic fertilizers, sustainable irrigation systems, and community green initiatives.
          </p>
        </motion.div>

        {/* Our Customer Family with Image */}
        <motion.div className="max-w-3xl text-center">
          
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif leading-tight text-green-700 mt-4">
            Our Customer Family
          </h2>
          <p className="mt-4 mb-10 text-md md:text-lg font-light leading-relaxed">
            We take pride in serving a growing family of over <strong>50,000</strong> eco-conscious gardeners, farmers, and green enthusiasts worldwide. 
            Whether you're a home gardener, a large-scale farmer, or an environmental advocate, Flovepal welcomes you to join our mission for a greener future.
          </p>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </>
  );
}
