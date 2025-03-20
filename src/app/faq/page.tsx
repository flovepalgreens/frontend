"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/NavBar";
import { Menu, ThumbsUp, ThumbsDown } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function FYPPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "How can I start a small home garden?",
      askedBy: "Alice Johnson",
      askedOn: "March 10, 2025",
      answer: "To start a small home garden, choose a sunny spot, select easy-to-grow plants, use organic soil, and water regularly.",
      answeredOn: "March 12, 2025",
      helpful: 1700
    },
    {
      id: 2,
      question: "What are the best plants for indoor gardening?",
      askedBy: "Michael Smith",
      askedOn: "March 15, 2025",
      answer: "Some of the best plants for indoor gardening include pothos, snake plants, peace lilies, and spider plants.",
      answeredOn: "March 16, 2025",
      helpful: 2300
    }
  ]);

  const handleVote = (id: number, change: number) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, helpful: q.helpful + change } : q
      )
    );
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
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-md md:text-lg font-light leading-relaxed">
            Get answers to the most common gardening questions asked by our community.
          </p>
        </motion.div>

        <motion.div className="w-full max-w-4xl space-y-8">
          {questions.map(({ id, question, askedBy, askedOn, answer, answeredOn, helpful }) => (
            <motion.div key={id} className="p-6 border border-green-300 rounded-lg shadow-md bg-green-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-green-800">{question}</h2>
              <p className="text-sm text-gray-600">Asked by {askedBy} on {askedOn}</p>
              <p className="mt-4 text-md text-gray-800">{answer}</p>
              <p className="text-sm text-gray-600">Answered on {answeredOn}</p>
              
              <div className="flex items-center space-x-4 mt-4">
                {/* Thumbs Up Button */}
                <button 
                  onClick={() => handleVote(id, 1)}
                  className="flex items-center space-x-1 text-green-700 hover:text-green-900"
                >
                  <ThumbsUp size={20} />
                  <motion.span 
                    key={helpful} 
                    initial={{ scale: 0.8, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    transition={{ duration: 0.3 }}
                  >
                    {helpful}
                  </motion.span>
                </button>

                {/* Thumbs Down Button */}
                <button 
                  onClick={() => handleVote(id, -1)}
                  className="flex items-center space-x-1 text-red-700 hover:text-red-900"
                >
                  <ThumbsDown size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.form
          action="https://formspree.io/f/mpwpqevk"
          method="POST"
          className="w-full mb-15 max-w-3xl text-center bg-white p-6 rounded-lg shadow-md border border-gray-300"
        >
          <h2 className="text-2xl font-extrabold text-green-700">Ask a Question</h2>
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 mt-4 border border-gray-300 rounded-md" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 mt-4 border border-gray-300 rounded-md" />
          <textarea name="question" placeholder="Enter your question here..." required className="w-full p-2 mt-4 border border-gray-300 rounded-md" />
          <button type="submit" className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg font-semibold shadow-md hover:bg-green-700">
            Send
          </button>
        </motion.form>
      </motion.div>
      <Footer />
    </>
  );
}
