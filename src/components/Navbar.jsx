import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 md:px-16 lg:px-24 py-6 flex justify-between items-center ${
        isScrolled
          ? "backdrop-blur-2xl bg-[#02000f]/90 border-b border-purple-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "backdrop-blur-xl bg-[#02000f]/80 border-b border-white/[0.04]"
      }`}
    >
      {/* Brand Identity Logo */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-gray-200 to-gray-500 text-transparent bg-clip-text hover:scale-105 transition transform duration-300 cursor-pointer"
      >
        anjitha<span className="text-purple-500">.bs</span>
      </div>

      {/* Navigation Links Mapping */}
      <div className="hidden md:flex gap-10 text-base font-semibold tracking-wide text-gray-400">
        {["intro", "about", "education", "skills", "project", "contact"].map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className="hover:text-purple-400 capitalize transition-all duration-300 hover:-translate-y-0.5 relative group"
          >
            {sec}
            {/* Elegant glowing underline indicator on hover */}
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#a855f7]"></span>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;