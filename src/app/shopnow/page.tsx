"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/NavBar";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function ShopNowPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultation: "",
    gardenType: "",
    problem: "",
    referral: "",
    plantCount: "",
    city: ""
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        className="relative min-h-screen w-full text-black bg-white flex flex-col items-center px-6 md:px-10 pt-32 space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div className="w-full max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif leading-tight text-green-700">
            Consultation Request
          </h1>
          <p className="mt-4 text-md md:text-lg font-light">
            Fill in your details and get expert consultation for your gardening needs.
          </p>
        </motion.div>

        <motion.form 
          action="https://formspree.io/f/mvgkzney" 
          method="POST"
          className="w-full max-w-2xl mb-15 bg-white p-6 rounded-lg shadow-md border border-gray-300 space-y-4"
        >
          <input name="name" type="text" placeholder="Your Name" required className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
          <input name="email" type="email" placeholder="Your Email" required className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
          <input name="phone" type="tel" placeholder="Your Phone" required className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
          
          <label className="block text-gray-700">Consultation Type:</label>
          <select name="consultation" required className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="online">Online Consultation</option>
            <option value="offline">Offline Consultation</option>
          </select>
          
          <label className="block text-gray-700">Garden Type:</label>
          <select name="gardenType" required className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="indoor">Indoor Garden</option>
            <option value="outdoor">Outdoor Garden</option>
          </select>
          
          <input name="problem" type="text" placeholder="What problem are you facing?" required className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
          <input name="referral" type="text" placeholder="How did you hear about us?" required className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
          <input name="plantCount" type="number" placeholder="Number of Plants You Have" required className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
          <input name="city" type="text" placeholder="Your City" required className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
          
          <button type="submit" className="w-full px-6 py-2 bg-green-500 text-white rounded-lg font-semibold shadow-md hover:bg-green-700">
            Submit
          </button>
        </motion.form>
      </motion.div>

      <Footer />
    </>
  );
}