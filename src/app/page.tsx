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
          className="fixed top-30 left-5 z-50 bg-green-600 text-white p-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar Component */}
      {isClient && <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />}

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row items-center w-full min-h-screen px-10 pt-30">
        {/* Left Side Image and Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <Image
            src="/actual.png"
            alt="Plant Care"
            width={500}
            height={500}
            priority
            className="mt-[-200px]"
          />

          <p className="mt-40 text-sm md:text-lg text-black font-light leading-relaxed max-w-md">
            Our idea is simple—Since growing plants has a lot of benefits as proven by many researchers and environmentalists both for the individual and for the whole community cumulatively, we want to help people grow plants indoors without the usual struggles of watering, fertilizing, or monitoring their health. Using IoT, our system takes care of watering and nutrient needs while evaluating plant growth in real time with the help of AI.
          </p>
          <p className="mt-4 text-sm md:text-lg text-black font-light leading-relaxed max-w-md">
            We believe this can make a real difference, especially in urban spaces where maintaining plants can be challenging.
          </p>
        </div>

        {/* Right Side Text & Additional Image */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-6">
          <h1 className="text-3xl mt-3 md:text-5xl font-extrabold text-black font-serif leading-tight">
            Create <b className="text-green-600">Green,</b>
          </h1>
          <h1 className="text-3xl mt-5 md:text-5xl font-extrabold text-black font-serif leading-tight">
            Let It Be Seen!
          </h1>
          <p className="mt-4 ml-10 mt-5 text-sm md:text-lg text-black font-light leading-relaxed max-w-md">
            In today’s fast-paced urban lifestyle, maintaining greenery is a challenge. Plants need care, attention, and time—things we often lack.
          </p>
          <p className="mt-4 ml-10 text-sm md:text-lg text-black font-light leading-relaxed max-w-md">
            That’s where Flovepal comes in! We simplify plant care with AI-powered automation, making plant maintenance effortless, even for beginners.
          </p>
          <p className="mt-4 text-sm ml-10 md:text-lg text-black font-light leading-relaxed max-w-md">
            Flovepal is more than just plant care—it’s a movement toward a self-sustainable, greener future.
          </p>

          <Image 
            src="/homebg.png" 
            alt="Urban Gardening" 
            width={500} 
            height={500} 
            priority 
            className="mt-20 rounded-lg"
          />
        </div>
      </div>

      {/* Scrolling Green Ribbon */}
      <div className="w-full bg-green-600 py-4 mt-10 overflow-hidden">
        <div className="flex gap-6 animate-scroll whitespace-nowrap px-4">
          {['ai', 'xr', 'iot'].map((item) => (
            <div key={item} className="min-w-[300px] bg-white rounded-lg ml-23 shadow-lg p-4 text-center">
              <Image 
                src={`/trending${item}.jpg`} 
                alt={`Trending Topic ${item}`} 
                width={200} 
                height={150} 
                className="rounded-lg ml-9"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Additional Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full py-16 px-10">
        <div className="w-full md:w-1/2 items-center justify-center p-6">
          <h2 className="text-3xl md:text-4xl font-bold ml-40 items-center justify-center text-green-700">Why Choose Flovepal?</h2>
          <div className="min-w-[300px] m-5 bg-white rounded-lg shadow-lg p-4 text-center">
            <p className="mt-4 text-lg items-center ml-35 justify-center text-gray-700">
              AI-powered plant care  
            </p>
          </div>
          <div className="min-w-[300px] m-5 bg-white rounded-lg shadow-lg p-4 text-center">
            <p className="mt-4 text-lg mr-35 items-center justify-center text-gray-700">
              IoT-based real-time monitoring 
            </p>
          </div>
          <div className="min-w-[300px] m-5 bg-white rounded-lg shadow-lg p-4 text-center">
            <p className="mt-4 text-lg items-center ml-35 justify-center text-gray-700">
              Customized nutrient & watering schedules 
            </p>
          </div>
          <div className="min-w-[300px] m-5 bg-white rounded-lg shadow-lg p-4 text-center">
            <p className="mt-4 text-lg items-center mr-35 justify-center text-gray-700">
              XR technology for a unique plant experience  
            </p>
          </div>
          <div className="min-w-[300px] m-5 bg-white rounded-lg shadow-lg p-4 text-center">
            <p className="mt-4 text-lg items-center ml-35 justify-center text-gray-700">
              24/7 smart tracking for plant health  
            </p>
          </div>
        </div>
      </div>

            {/* Blog Carousel Section */}
            <div className="mt-10 px-10">
        <BlogCarousel />
      </div>

      <div className="flex flex-col items-start w-full py-16 px-10 bg-gray-50 relative overflow-hidden">
  {/* Background leaf image - semi-transparent */}
  <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none">
    
  </div>
  
  <h2 className="text-4xl font-bold text-center justify-center text-3xl md:text-4xl font-bold items-center ml-140 text-green-700 mb-12">Testimonials</h2>
  
  <div className="w-full flex flex-col gap-12 relative z-10">
    {/* First Testimonial - Left aligned */}
    <div className="flex justify-start ml-70 w-full">
      <div className="bg-white p-6 rounded-lg shadow-md relative w-full md:w-2/3 lg:w-1/2">
        <h3 className="font-semibold text-xl text-gray-800 mb-2">Rohith</h3>
        <hr className="border-gray-300 w-full mb-4" />
        <p className="text-gray-700">
          "The AI-powered plant care system detected my Areca Palm was getting too much direct sunlight before I noticed any signs. It suggested a location change and now it's thriving again!"
        </p>
      </div>
    </div>
    
    {/* Second Testimonial - Right aligned */}
    <div className="flex w-full ml-120">
      <div className="bg-white p-6 rounded-lg shadow-md relative w-full md:w-2/3 lg:w-1/2">
        <h3 className="font-semibold text-xl text-gray-800 mb-2">Arun Sidharth</h3>
        <hr className="border-gray-300 w-full mb-4" />
        <p className="text-gray-700">
          "Flovepal's automated watering system has been a game changer. My plants are healthier than ever, and I love getting notifications about their growth progress. Highly recommend."
        </p>
      </div>
    </div>
    
    {/* Third Testimonial - Left aligned */}
    <div className="flex justify-start ml-70 w-full ml-20">
      <div className="bg-white p-6 rounded-lg shadow-md relative w-full md:w-2/3 lg:w-1/2">
        <h3 className="font-semibold text-xl text-gray-800 mb-2">Nikhil</h3>
        <hr className="border-gray-300 w-full mb-4" />
        <p className="text-gray-700">
          "As a continuous customer, I'm amazed by how the smart monitoring adapts to each plant's needs. My indoor garden is flourishing with minimal effort on my part. I can definitely recommend!"
        </p>
      </div>
    </div>
  </div>
</div>
<Footer />

    </motion.div>
  );
}
