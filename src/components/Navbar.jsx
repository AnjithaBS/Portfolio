import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Controls mobile menu visibility

  // Adds solid background shift on scroll
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

  const navLinks = ["intro", "about", "education", "skills", "project", "contact"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 md:px-16 lg:px-24 py-5 flex justify-between items-center ${
          isScrolled || isOpen
            ? "backdrop-blur-2xl bg-[#02000f]/95 border-b border-purple-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "backdrop-blur-xl bg-[#02000f]/80 border-b border-white/[0.04]"
        }`}
      >
        {/* Brand Identity Logo */}
        <div 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}
          className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-gray-200 to-gray-500 text-transparent bg-clip-text hover:scale-105 transition transform duration-300 cursor-pointer z-50"
        >
          anjitha<span className="text-purple-500">.bs</span>
        </div>

        {/* ─── DESKTOP VIEW NAV ─── */}
        <div className="hidden md:flex gap-10 text-base font-semibold tracking-wide text-gray-400">
          {navLinks.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className="hover:text-purple-400 capitalize transition-all duration-300 hover:-translate-y-0.5 relative group"
            >
              {sec}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#a855f7]"></span>
            </a>
          ))}
        </div>

        {/* ─── MOBILE VIEW BURGER INTERACTIVE ICON ─── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ease-out rounded-full ${
              isOpen ? "rotate-45 translate-y-2 !bg-purple-400" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ease-out rounded-full ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ease-out rounded-full ${
              isOpen ? "-rotate-45 -translate-y-2 !bg-purple-400" : ""
            }`}
          />
        </button>
      </nav>

      {/* ─── MOBILE DRAWER PANEL MENU ─── */}
      <div
        className={`fixed inset-0 z-40 bg-[#02000f]/98 backdrop-blur-3xl md:hidden transition-all duration-500 flex flex-col items-center justify-center border-b border-purple-500/10 ${
          isOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-2xl font-bold tracking-widest text-gray-400">
          {navLinks.map((sec, idx) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setIsOpen(false)} // Snap shut on click
              style={{ transitionDelay: isOpen ? `${idx * 75}ms` : "0ms" }}
              className={`hover:text-purple-400 capitalize transition-all duration-500 transform relative group ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {sec}
              {/* Subtle active center-out highlight for mobile taps */}
              <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-12 shadow-[0_0_10px_#a855f7]"></span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;