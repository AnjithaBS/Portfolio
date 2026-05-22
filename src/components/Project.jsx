import React from "react";

function Project() {
  return (
    <section id="project" className="bg-[#02000f] text-white py-32 lg:py-40 relative px-8 lg:px-24 border-t border-white/[0.02]">
      <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-pink-900/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        <div className="text-center space-y-3">
          <p className="text-gray-500 uppercase tracking-[0.4em] text-xs lg:text-sm font-bold">Engineering Output</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-white to-pink-400 text-transparent bg-clip-text">
            Featured Platform
          </h2>
          <div className="w-20 h-[4px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* EXPANDED FLAGSHIP INTERACTION MODULE */}
        <div className="bg-white/[0.01] backdrop-blur-3xl border border-white/[0.05] rounded-3xl p-10 md:p-16 text-left shadow-[0_40px_100px_rgba(0,0,0,0.4)] hover:border-purple-500/40 transition-all duration-700 transform hover:scale-[1.005] group">
          
          <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-gray-200 to-purple-300 text-transparent bg-clip-text group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-500">
              PolyEdu
            </h3>
            <span className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-extrabold rounded-full tracking-widest uppercase">
              A Educational Platform
            </span>
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8 max-w-4xl">
            PolyEdu is an educational platform designed for Polytechnic students to improve academic performance and provide a comprehensive learning experience. It offers a wide range of features, including interactive course materials, personalized learning paths, and real-time progress tracking. The platform aims to enhance student engagement and facilitate effective learning through its user-friendly interface and innovative tools.
          </p>

          {/* SYSTEM TECH SPECS */}
          <div className="flex flex-wrap gap-2.5 pb-8 border-b border-white/[0.04]">
            {["Python", "Django frame work", "HTML", "CSS", "SQLite"].map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] rounded-xl text-xs lg:text-sm font-semibold text-gray-400 tracking-wide hover:text-white transition-colors">
                {tech}
              </span>
            ))}
          </div>

          {/* SYSTEM LINK TRIGGER */}
          <div className="pt-8">
            <a
              href="https://github.com/AnjithaBS/electionguide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-xs lg:text-sm font-bold uppercase tracking-widest text-white border border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.05] hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 shadow-md shadow-black/20"
            >
              <span>💻 View Source Code Deployment</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;