import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Company Info */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-2xl font-bold text-green-400">Flovepal Greenspace</h2>
          <p className="text-gray-300 mt-2">
            Your one-stop solution for all gardening needs. Join our community and cultivate a greener world.
          </p>
          <p className="text-gray-400 text-sm mt-2">© 2025 Flovepal Greenspace. All rights reserved.</p>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="mt-6 md:mt-0 flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61574071063723" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/_.flovepal._/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <Instagram size={24} />
          </a>
          <a href="https://x.com/Flovepalgs" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <Twitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/flovepal-greenspace-a48132357/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <Linkedin size={24} />
          </a>
          <a href="https://www.youtube.com/@FlovepalGreenspace" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
