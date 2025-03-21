"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/NavBar";
import { Menu, Leaf, TreePine, HeartHandshake, Sprout, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import Footer from "@/components/footer";

export default function About() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        className="relative min-h-screen w-full text-black bg-white flex flex-col px-6 md:px-10 pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="max-w-2xl text-left mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif leading-tight text-green-700">
            About Flovepal
          </h1>
          <p className="mt-4 text-md md:text-lg font-light leading-relaxed">
            <strong>Team Flovepal</strong> is dedicated to revolutionizing home and community gardening with innovative, eco-friendly solutions. 
            Our mission is to bring nature closer to people by creating tools and resources that make sustainable gardening accessible to everyone.
          </p>

          {/* Company Values */}
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif leading-tight mt-6 text-green-700">
            Our Core Values
          </h2>
          <ul className="mt-4 space-y-3 text-md md:text-lg font-light leading-relaxed">
            {[ 
              { icon: <HeartHandshake className="w-5 h-5 text-green-800" />, text: "Sustainability at the core of everything we do" },
              { icon: <Sprout className="w-5 h-5 text-green-800" />, text: "Promoting biodiversity and greener urban spaces" },
              { icon: <Users className="w-5 h-5 text-green-800" />, text: "Building a global community of eco-conscious gardeners" },
              { icon: <Leaf className="w-5 h-5 text-green-800" />, text: "Combining innovation with simplicity for all users" },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Sustainability Efforts */}
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif leading-tight mt-10 text-green-700">
            Our Sustainability Efforts
          </h2>
          <p className="mt-4 text-md md:text-lg font-light leading-relaxed">
            We are committed to reducing carbon footprints through sustainable gardening practices, biodegradable materials, 
            and eco-conscious manufacturing. Every tool we create is designed with longevity and environmental harmony in mind.
          </p>

          {/* Testimonials */}
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif leading-tight mt-10 text-green-700">
            What Our Community Says
          </h2>
          <ul className="mt-4 space-y-3">
            {[ 
              { name: "Emily R.", feedback: "Flovepal transformed my small balcony into a thriving green paradise!" },
              { name: "Michael D.", feedback: "The eco-friendly tools make gardening easy and rewarding." },
              { name: "Samantha P.", feedback: "Love their sustainability mission—truly inspiring!" },
            ].map((testimonial, index) => (
              <li key={index} className="p-4 bg-gray-100 rounded-md shadow-sm">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm italic">"{testimonial.feedback}"</p>
              </li>
            ))}
          </ul>

          {/* Meet the Team */}
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif leading-tight mt-10 text-green-700 text-center">
            Meet the Team
          </h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {[
              { name: "John Paul", role: "Chief Executive Officer", img: "/john.png" },
              { name: "Nithin Selva", role: "Chief Technology Officer", img: "/nithin.png" },
              { name: "Niranjan", role: "Chief Marketing Officer", img: "/niranjan.png" },
              { name: "Athul", role: "Chief Financial Officer", img: "/athul.png" },
              { name: "Gowtham", role: "Chief Sales Officer", img: "/gowtham.png" },
              { name: "Sai Venkat", role: "Chief Product Officer", img: "/sai.png" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs text-center transform transition duration-300 hover:scale-105">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-32 h-32 object-cover rounded-full mx-auto shadow-md border-4 border-green-500"
                />
                <h3 className="mt-4 text-xl font-semibold text-green-800">{member.name}</h3>
                <p className="text-md text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          {/* Call to Action */}
          <motion.button
            className="mt-6 px-6 py-2 bg-green-500 mb-15 text-white rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-green-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="align-text-center justify-items-center align-center" href="/business">Discover Our Solutions</Link>
          </motion.button>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </>
  );
}
