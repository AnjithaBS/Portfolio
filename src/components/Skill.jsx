import React from "react";

function Skill() {
  const skills = [
    { icon: "💻", name: "C Programming", level: "EXPERT", percent: 85, color: "from-purple-500 to-indigo-600" },
    { icon: "🎨", name: "Web Designing / UI", level: "EXPERT", percent: 90, color: "from-pink-500 to-purple-600" },
    { icon: "☕", name: "Java Architectures", level: "INTERMEDIATE", percent: 70, color: "from-indigo-500 to-cyan-500" },
    { icon: "🐍", name: "Python ", level: "INTERMEDIATE", percent: 75, color: "from-cyan-500 to-purple-600" },
  ];

  return (
    <section id="skills" className="bg-[#02000f] text-white py-32 lg:py-40 relative px-8 lg:px-24 border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        <div className="text-center space-y-3">
          <p className="text-gray-500 uppercase tracking-[0.4em] text-xs lg:text-sm font-bold">Capabilities</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-white via-pink-300 to-purple-400 text-transparent bg-clip-text">
            Technical Stack
          </h2>
          <div className="w-20 h-[4px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* EXPANSIVE QUAD GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-8 md:p-12 text-left transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_60px_rgba(168,85,247,0.04)] transform hover:-translate-y-1 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                  <div className="text-xs font-black tracking-[0.2em] text-purple-400">
                    {skill.level}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-200 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-3xl bg-white/[0.03] p-3 rounded-2xl border border-white/[0.05] shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>
              </div>

              {/* PROGRESS MECHANICS */}
              <div className="mt-8">
                <div className="flex justify-between text-xs lg:text-sm text-gray-500 font-bold mb-2 tracking-wide">
                  <span>SYSTEM METRIC CAPABILITY</span>
                  <span className="text-gray-300 font-black">{skill.percent}%</span>
                </div>
                <div className="w-full h-2.5 bg-white/[0.04] rounded-full overflow-hidden p-[2px] border border-white/[0.02]">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-[1500ms] ease-out shadow-[0_0_15px_rgba(168,85,247,0.5)]`}
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;