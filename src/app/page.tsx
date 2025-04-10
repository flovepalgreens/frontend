"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import BlogCarousel from "../components/BlogCarousel";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    "AI-powered plant care",
    "IoT-based real-time monitoring",
    "Customized nutrient & watering schedules",
    "XR technology for a unique plant experience",
    "24/7 smart tracking for plant health",
  ];

  return (
    <motion.div
      className="relative min-h-screen w-full text-black bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Global Navbar */}
      <Navbar />

      {/* Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <button
          className="fixed top-5 left-5 z-50 bg-green-600 text-white p-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar */}
      {isClient && (
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      )}

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center w-full min-h-screen px-6 md:px-10 pt-20 gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Image
            src="/actual.png"
            alt="Plant Care"
            width={500}
            height={500}
            priority
            className="mt-[-80px] md:mt-[-150px] max-w-full h-auto"
          />
          <p className="mt-10 text-center md:text-left text-sm md:text-lg text-black font-light leading-relaxed max-w-md">
            Our idea is simple—Since growing plants has a lot of benefits...
          </p>
          <p className="mt-4 text-center md:text-left text-sm md:text-lg text-black font-light leading-relaxed max-w-md">
            We believe this can make a real difference...
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-black font-serif leading-tight text-center md:text-left">
            Create <span className="text-green-600">Green,</span>
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-black font-serif leading-tight mt-2 md:mt-5 text-center md:text-left">
            Let It Be Seen!
          </h1>
          <p className="mt-4 text-sm md:text-lg text-black font-light leading-relaxed max-w-md text-center md:text-left">
            In today’s fast-paced urban lifestyle, maintaining greenery is a challenge...
          </p>
          <p className="mt-4 text-sm md:text-lg text-black font-light leading-relaxed max-w-md text-center md:text-left">
            That’s where Flovepal comes in...
          </p>
          <p className="mt-4 text-sm md:text-lg text-black font-light leading-relaxed max-w-md text-center md:text-left">
            Flovepal is more than just plant care—it’s a movement...
          </p>
          <Image
            src="/homebg.png"
            alt="Urban Gardening"
            width={500}
            height={500}
            priority
            className="mt-10 rounded-lg max-w-full"
          />
        </div>
      </div>

      {/* Scrolling Green Ribbon */}
      <div className="w-full bg-green-600 py-4 mt-10 overflow-hidden">
        <div className="flex gap-6 animate-scroll whitespace-nowrap px-4">
          {["ai", "xr", "iot"].map((item) => (
            <div key={item} className="min-w-[250px] bg-white rounded-lg shadow-lg p-4 text-center">
              <Image
                src={`/trending${item}.jpg`}
                alt={`Trending Topic ${item}`}
                width={200}
                height={150}
                className="rounded-lg mx-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full py-16 px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
          Why Choose Flovepal?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-base md:text-lg text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Carousel Section */}
      <div className="mt-10 px-6 md:px-10">
        <BlogCarousel />
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col items-center w-full py-16 px-6 md:px-10 bg-gray-50 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
          Testimonials
        </h2>

        <div className="w-full flex flex-col gap-12 max-w-4xl mx-auto">
          <div className="flex justify-start">
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Rohith</h3>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-700">
                "The AI-powered plant care system detected my Areca Palm was getting too much direct sunlight..."
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Arun Sidharth</h3>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-700">
                "Flovepal's automated watering system has been a game changer..."
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Nikhil</h3>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-700">
                "As a continuous customer, I'm amazed by how the smart monitoring adapts to each plant's needs..."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
