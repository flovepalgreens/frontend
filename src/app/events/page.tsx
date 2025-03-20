"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/NavBar";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

const events = [
  {
    title: "Urban Gardening Workshop",
    description: "Learn how to transform your balcony or backyard into a thriving green space with expert tips and hands-on activities.",
    mode: "Offline",
    location: "Chennai",
    audience: "Home Makers & Apartment Dwellers",
    date: "April 10, 2025",
  },
  {
    title: "Sustainable Gardening for Schools",
    description: "An engaging session for students to learn about sustainability and gardening in school environments.",
    mode: "Offline",
    location: "Hyderabad",
    audience: "School Students & Teachers",
    date: "To Be Scheduled",
  },
  {
    title: "Indoor Plant Care Webinar",
    description: "A detailed online session covering indoor plant care, common mistakes, and best practices.",
    mode: "Online",
    location: "Virtual Event",
    audience: "Employees & Students",
    date: "May 5, 2025",
  },
  {
    title: "Therapeutic Gardening for Seniors",
    description: "A relaxing gardening session designed to promote mental well-being and physical activity among elderly individuals.",
    mode: "Offline",
    location: "Chennai",
    audience: "Senior Citizens",
    date: "April 22, 2025",
  },
];

export default function EventsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleRegister = (event: { title: any; description?: string; mode: any; location: any; audience: any; date: any; }) => {
    const message = `I'm interested in the event: ${event.title}\n\n📅 Date: ${event.date}\n📍 Location: ${event.location}\n🎯 Audience: ${event.audience}\n📝 Mode: ${event.mode}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/9176775477?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
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

      <motion.div
        className="relative min-h-screen w-full text-black bg-white flex flex-col items-center px-6 md:px-10 pt-32 space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div className="w-full max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif leading-tight text-green-700 mt-6">
            Join Our Gardening Events!
          </h1>
          <p className="mt-4 text-md md:text-lg font-light leading-relaxed">
            Take the first step towards a greener planet! Our events are designed to help you learn, connect, and make a lasting impact.
            Whether you are a beginner or an experienced gardener, there’s something for everyone.
          </p>
        </motion.div>

        <motion.div className="w-full max-w-4xl mb-15 space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="p-6 border border-green-300 rounded-lg shadow-md bg-green-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-green-800">{event.title}</h2>
              <p className="mt-2 text-md text-gray-800">{event.description}</p>
              <p className="mt-2 text-sm text-gray-600"><strong>Mode:</strong> {event.mode}</p>
              <p className="text-sm text-gray-600"><strong>Location:</strong> {event.location}</p>
              <p className="text-sm text-gray-600"><strong>Target Audience:</strong> {event.audience}</p>
              <p className="text-sm text-gray-600"><strong>Date:</strong> {event.date}</p>
              <button 
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg font-semibold shadow-md hover:bg-green-700"
                onClick={() => handleRegister(event)}
              >
                Register for this Event
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
}