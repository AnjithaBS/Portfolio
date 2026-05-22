import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="bg-[#02000f] text-white font-sans overflow-hidden min-h-screen relative selection:bg-purple-500/40">
      
      {/* ─── DYNAMIC CINEMATIC AMBIENT BACKDROPS ─── */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-purple-800/20 to-transparent blur-[140px] pointer-events-none animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-pink-800/15 to-transparent blur-[140px] pointer-events-none animate-pulse duration-[6000ms]"></div>
      <div className="absolute top-[40%] left-[25%] w-[30vw] h-[30vw] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none"></div>

      {/* ─── VECTOR DEEP SPACE STARFIELD LAYER ─── */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12%" cy="22%" r="1" fill="#fff" className="animate-pulse duration-[2000ms]" />
          <circle cx="34%" cy="18%" r="1.5" fill="#a855f7" className="animate-pulse duration-[3500ms]" />
          <circle cx="78%" cy="28%" r="1" fill="#fff" className="animate-pulse duration-[5000ms]" />
          <circle cx="88%" cy="62%" r="1.2" fill="#ec4899" className="animate-pulse duration-[4500ms]" />
          <circle cx="48%" cy="82%" r="1" fill="#fff" className="animate-pulse duration-[6000ms]" />
          <circle cx="18%" cy="72%" r="1.5" fill="#fff" className="animate-pulse duration-[2800ms]" />
          <circle cx="60%" cy="40%" r="1" fill="#a855f7" className="animate-pulse duration-[4000ms]" />
        </svg>
      </div>

      {/* ─── FIXED PREMIUM NAVBAR ─── */}
      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-8 lg:px-24 pt-24">
        
        {/* ENHANCED INTERACTIVE FLOATING BADGES */}
        <div className="absolute top-40 left-[8%] z-10 bg-purple-500/10 backdrop-blur-xl border border-purple-500/30 px-6 py-3 rounded-full text-sm lg:text-base shadow-[0_0_30px_rgba(168,85,247,0.15)] animate-bounce duration-[3000ms] text-purple-200 tracking-wide font-medium hidden sm:block">
          💻 Creative Developer
        </div>

        <div className="absolute bottom-40 right-[8%] z-10 bg-pink-500/10 backdrop-blur-xl border border-pink-500/30 px-6 py-3 rounded-full text-sm lg:text-base shadow-[0_0_30px_rgba(236,72,153,0.15)] animate-pulse duration-[4000ms] text-pink-200 tracking-wide font-medium hidden sm:block">
          🎨 Future Game Dev
        </div>

        <div className="absolute top-1/2 left-[4%] hidden xl:block z-10 bg-yellow-500/5 backdrop-blur-md border border-yellow-500/20 px-5 py-2.5 rounded-full text-xs lg:text-sm text-yellow-200/80 tracking-widest uppercase">
          ✨ Digital Storyteller
        </div>

        {/* MAXIMUM IMPACT CONTENT CONTAINER */}
        <div className="text-center space-y-10 max-w-6xl z-10 scale-100 transform transition-all duration-700">
          
          {/* INITIALIZED SYSTEM STATUS BADGE */}
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-green-500/5 border border-green-500/20 rounded-full text-xs lg:text-sm font-bold tracking-[0.2em] text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.05)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            SYSTEM: INITIALIZED
          </div>

          {/* MASSIVE HERO TYPOGRAPHY WITH HOVER SMOOTH REVEAL SPACING */}
          <div className="space-y-4">
            <p className="text-gray-500 uppercase tracking-[0.4em] text-xs lg:text-sm font-bold">
              A Visual Engineering Experience
            </p>

            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none bg-gradient-to-b from-white via-purple-100 to-purple-600/90 text-transparent bg-clip-text select-none drop-shadow-2xl py-4 transition-all duration-[1000ms] ease-out hover:tracking-wide cursor-default">
              Anjitha B.S
            </h1>
            
            <div className="w-32 h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mx-auto mt-6 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.7)] animate-pulse"></div>
          </div>

          {/* LARGE INTERACTIVE ROLE LABGES */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 max-w-3xl mx-auto">
            {["💻 Creative Coder", "🎨 UI/UX Design", "🚀 Creative Thinker"].map((role, idx) => (
              <span 
                key={idx} 
                className="px-6 py-3 bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 text-gray-300 hover:text-white rounded-xl text-xs lg:text-sm font-semibold tracking-wide backdrop-blur-xl shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* PERSISTENT DOWNWARD NAVIGATION SCROLL INDICATOR ANCHOR */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center p-1.5 backdrop-blur-sm">
            <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce duration-[1500ms]"></div>
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold select-none">
            Scroll Down
          </span>
        </div>

        {/* PERSISTENT SECTION DIVIDER FADE */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#02000f] pointer-events-none"></div>
      </section>
    </div>
  );
}
 
export default Home;