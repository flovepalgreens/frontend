"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/NavBar";
import { Menu, Send } from "lucide-react";

import Footer from "@/components/footer";

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: "Alice", text: "Hello! How can I start a home garden?" },
    { id: 2, sender: "Michael", text: "What are the best indoor plants?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const whatsappUrl = `https://wa.me/9176775477?text=${encodeURIComponent(newMessage)}`;
      window.open(whatsappUrl, "_blank");
      setNewMessage("");
    }
  };

  return (
    <>
      <Navbar />
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-30 left-4 z-50 bg-green-700 text-black p-2 rounded-md shadow-md"
        >
          <Menu size={24} />
        </button>
      )}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="relative min-h-screen w-full bg-white flex flex-col items-center px-6 md:px-10 pt-24 space-y-6">
        <h1 className="text-3xl font-bold text-green-700">Community Chat</h1>
        <p className="text-gray-950">Join discussions and share knowledge with fellow garden lovers.</p>

        <div className="w-full max-w-3xl bg-gray-950 p-4 rounded-lg shadow-md flex flex-col space-y-4">
          <div className="h-96 overflow-y-auto p-3 border border-gray-300 rounded-md bg-white">
            {messages.map(({ id, sender, text }) => (
              <div key={id} className="mb-3">
                <p className="text-sm font-semibold text-green-700">{sender}:</p>
                <p className="text-gray-800">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-100 rounded-md"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-green-500 text-black rounded-lg flex items-center space-x-1 hover:bg-green-700"
            >
              <Send size={18} />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
