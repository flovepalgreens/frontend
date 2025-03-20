"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Define TypeScript interface for NavItem props
interface NavItemProps {
  href: string;
  label: string;
  active: boolean;
}

// Global Navbar Component
export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="w-full bg-white shadow-lg fixed top-0 left-0 flex justify-between items-center px-8 py-4 z-50 border-b border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Brand Logo and Name */}
      <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Flovepal Logo" width={50} height={50} className="mb-2" />
            <div className="flex flex-col text-left">
              <span className="text-2xl font-bold text-black font-serif">Flovepal</span>
              <span className="text-xl font-bold text-green-700 font-serif">Greenspace</span>
            </div>
          </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-800 font-serif">
        <NavItem href="/" label="Home" active={pathname === "/"} />
        <NavItem href="/about" label="About" active={pathname === "/about"} />
        <NavItem href="/business" label="Business" active={pathname === "/business"} />
        <NavItem href="/faq" label="FAQ" active={pathname === "/faq"} />
      </div>

      {/* Profile and CTA Button */}
      <div className="flex items-center space-x-6">
        <Link href="/signup" className="text-lg font-medium text-gray-700 hover:text-green-700">
          👤
        </Link>
        <Link
          href="/shopnow"
          className="px-5 py-2 bg-green-700 text-white rounded-lg text-lg font-medium shadow-md hover:bg-green-800 transition-all"
        >
          Shop Now
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Pop-up Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-56 z-50 border border-gray-200">
          <NavItem href="/" label="Home" active={pathname === "/"} />
          <NavItem href="/about" label="About" active={pathname === "/about"} />
          <NavItem href="/business" label="Business" active={pathname === "/business"} />
          <NavItem href="/faq" label="FAQ" active={pathname === "/faq"} />
          <button
            className="mt-4 w-full py-2 bg-green-700 text-white rounded-lg text-lg font-medium hover:bg-green-800 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </motion.nav>
  );
}

// Navigation Link Component
function NavItem({ href, label, active }: NavItemProps) {
  return (
    <div className="py-2">
      <Link
        href={href}
        className={`block px-4 py-2 rounded-lg text-lg font-serif transition-all ${
          active ? "text-green-700 font-bold border-b-2 border-green-700" : "text-gray-700 hover:text-green-700"
        }`}
      >
        {label}
      </Link>
    </div>
  );
}
