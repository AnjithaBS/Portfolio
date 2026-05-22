import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/AnjithaBS",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.608.265.432.432.857.857.533.1.527.285.857.492 1.057-2.22.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anjitha-b-s-9b1a61356",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:anjithasubash03@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-900 text-gray-400 pt-16 pb-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* TOP ROW: Brand, Brief Bio, and Connections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-gray-900">
          
          {/* Column 1: Minimalist Identity */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide text-white">
              anjitha<span className="text-purple-500">.bs</span>
            </h3>
            <p className="text-xs text-gray-500 tracking-widest font-semibold uppercase">
              Computer Engineering & UI Design
            </p>
          </div>

          {/* Column 2: Brief About Me */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Brief About Me</h4>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              I love turning logical backend challenges into clean, pixel-perfect user experiences. Currently focusing on building responsive frameworks and smart user interfaces.
            </p>
          </div>

          {/* Column 3: Digital Social Channels */}
          <div className="space-y-4 md:text-right md:flex md:flex-col md:items-end">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest w-full">Connect With Me</h4>
            <div className="flex gap-4 pt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  title={link.name}
                  className="w-10 h-10 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: Copyright System & Scroll Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-600">
          
          <div className="font-semibold tracking-wide order-2 sm:order-1 text-center sm:text-left">
            &copy; {currentYear} <span className="text-gray-400 hover:text-purple-400 transition">Anjitha B.S.</span> All rights reserved.
          </div>

          {/* Core Interactive Action */}
          <div className="order-1 sm:order-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 font-bold uppercase tracking-wider bg-gray-950 border border-gray-800 text-gray-500 hover:text-purple-400 hover:border-purple-500/30 px-4 py-2 rounded-xl transition duration-300 active:scale-95 group"
            >
              <span>Back to Top</span>
              <span className="transform group-hover:-translate-y-0.5 transition duration-300">▲</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;