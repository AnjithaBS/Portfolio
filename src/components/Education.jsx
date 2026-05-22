import React from "react";

function Education() {
  const journey = [
    {
      type: "ACADEMIC ARCHITECTURE",
      date: "2026 - Present",
      title: "Diploma in Computer Engineering",
      institution: "Government Women's Polytechnic College, Kaimanam",
      desc: "Architecting solid structural knowledge bases across multi-tier database frameworks, complex object-oriented systems design, responsive graphic layouts, and client-side distribution engines.",
      skills: ["C programming", "Web Designing", "java","python"],
      color: "hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(168,85,247,0.06)]",
      badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/20"
    },
    {
      type: "CREATIVE SPECIALIZATION",
      date: "Completed Mastery",
      title: "Certified Interactive Animator",
      institution: "SDC Kottukal",
      desc: "Studied core cinematic workflows, physics-based motion transitions, timing parameters, storytelling vectors, and vector mechanics for modern premium application design systems.",
      skills: ["🎞 Kinetic Staging", "✨ Vector Artistry", "🎨 Conceptual Compositing"],
      color: "hover:border-pink-500/40 hover:shadow-[0_0_50px_rgba(236,72,153,0.06)]",
      badgeBg: "bg-pink-500/10 text-pink-300 border-pink-500/20"
    }
  ];

  return (
    <section id="education" className="bg-[#02000f] text-white py-32 lg:py-40 relative px-8 lg:px-24 border-t border-white/[0.02]">
      <div className="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-purple-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-3">
          <p className="text-gray-500 uppercase tracking-[0.4em] text-xs lg:text-sm font-bold">Milestones</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
            Academic History
          </h2>
          <div className="w-20 h-[4px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* RESPONSIVE TIMELINE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {journey.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-8 md:p-12 text-left flex flex-col justify-between transition-all duration-500 ${item.color} transform hover:-translate-y-2 group`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <span className={`px-4 py-1.5 border rounded-full text-xs font-bold tracking-widest ${item.badgeBg}`}>
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-500 font-bold tracking-wider">{item.date}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-purple-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <h4 className="text-pink-400 font-semibold text-base lg:text-lg">
                  {item.institution}
                </h4>
                <p className="text-gray-400 text-base leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              {/* SKILLS TAGS */}
              <div className="flex flex-wrap gap-2 pt-8 mt-6 border-t border-white/[0.03]">
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-4 py-1.5 bg-white/[0.02] border border-white/[0.05] text-gray-300 text-xs lg:text-sm rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;