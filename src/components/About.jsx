import React from "react";

function About() {
  return (
    <section id="about" className="bg-[#02000f] text-white py-32 lg:py-40 relative overflow-hidden px-8 lg:px-24">
      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        
        <div className="space-y-2">
          <p className="text-gray-500 uppercase tracking-[0.4em] text-xs lg:text-sm font-bold">Concept</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-white via-purple-300 to-pink-400 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="w-20 h-[4px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* ULTRA-PREMIUM CARD UTILIZING MAXIMUM CONTAINER SPACE */}
        <div className="bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-10 md:p-16 lg:p-20 text-gray-300 text-left md:text-center leading-relaxed text-lg md:text-xl lg:text-2xl font-light shadow-[0_0_80px_rgba(168,85,247,0.02)] hover:shadow-[0_0_80px_rgba(168,85,247,0.12)] hover:border-purple-500/30 transition-all duration-700 transform hover:scale-[1.01] group">
          
          {/* ─── FLOATING AVATAR IMAGE ─── */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto mb-8 md:mb-10">
            {/* Outer soft ambient purple/pink blur aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 opacity-20 blur-md group-hover:opacity-40 group-hover:blur-xl transition-all duration-700"></div>
            
            {/* Image Border Mask */}
            <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-purple-500/30 via-white/[0.08] to-pink-500/30 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-700">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-950">
                <img 
                  src="/Images/profile.png" 
                  alt="Anjitha B.S." 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>

          {/* Card Copy Paragraphs */}
          <p className="mb-6">
            I'm a <span className="text-purple-300 font-bold tracking-wide transition-colors duration-300 hover:text-purple-400">Computer Engineering Student</span> passionate about blending creativity with technology.
          </p>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl font-normal">
            Interested in Development, UI Design, Storytelling and creating meaningful digital experiences.
          </p>
        </div>

        {/* DEEP CALL TO ACTION CALLS */}
        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <a
            href="#project"
            className="px-8 py-4 rounded-xl text-xs lg:text-sm font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all duration-500"
          >
            🚀 Launch Portfolio Showcase
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl text-xs lg:text-sm font-bold uppercase tracking-widest text-gray-300 border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.04] hover:border-purple-500/50 transition-all duration-300"
          >
            📩 Initiate Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;