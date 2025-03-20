"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

// Navigation Links
const NavLinks = [
  { name: "Home", link: "/", icon: "🏠" },
  { name: "Dashboard", link: "/dashboard", icon: "📊" },
  { name: "Challenges", link: "/challenges", icon: "🔥" },
  { name: "Leaderboard", link: "/leaderboard", icon: "🏆" },
  { name: "Discuss", link: "/discuss", icon: "💬" },
  { name: "Profile", link: "/profile", icon: "👤" }
];

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 flex bg-gray-950 border border-gray-950 rounded-full px-6 py-3 shadow-lg">
      {NavLinks.map((nav) => (
        <Link 
          key={nav.name} 
          href={nav.link} 
          className={`flex items-center mx-3 font-semibold text-white transition duration-300 ${
            path === nav.link ? "text-green-600 font-bold scale-105" : "hover:text-green-600"
          }`}
        >
          <span className="text-lg mr-2">{nav.icon}</span>
          <span>{nav.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
