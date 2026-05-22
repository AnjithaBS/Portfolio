import React from "react";

function Contact() {
  const connectionChannels = [
    { label: "SECURE EMAIL DIRECTORY", val: "anjithasubash03@gmail.com", link: "mailto:anjithasubash03@gmail.com", icon: "📧" },
    { label: "CELLULAR VECTOR TELEPHONY", val: "+91 97465 17330", link: "tel:+919746517330", icon: "📱" },
    { label: "PHYSICAL NODE LOCATION", val: "Thiruvananthapuram, Kerala", link: null, icon: "📍" },
    { label: "PROFESSIONAL LINKEDIN GRAPH", val: "Anjitha B.S.", link: "https://www.linkedin.com/in/anjitha-b-s-9b1a61356", icon: "🔗" }
  ];

  return (
    <div className="bg-[#02000f] border-t border-white/[0.02]">
      <section id="contact" className="text-white py-32 lg:py-40 relative px-8 lg:px-24 max-w-6xl mx-auto space-y-16">
        
        <div className="text-center space-y-3">
          <p className="text-gray-500 uppercase tracking-[0.4em] text-xs lg:text-sm font-bold">Inquiries</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-white to-pink-400 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <div className="w-20 h-[4px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* GRID LAYOUT ENHANCEMENTS FOR SPACE MANAGEMENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {connectionChannels.map((channel, idx) => {
            const CardWrapper = channel.link ? "a" : "div";
            return (
              <CardWrapper
                key={idx}
                href={channel.link || undefined}
                target={channel.link?.startsWith("http") ? "_blank" : undefined}
                rel={channel.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-6 bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05] rounded-2xl p-6 md:p-8 text-left hover:border-purple-500/30 hover:bg-white/[0.02] transition-all duration-300 group cursor-pointer transform hover:scale-[1.02]"
              >
                <div className="text-2xl bg-white/[0.03] border border-white/[0.05] w-14 h-14 flex items-center justify-center rounded-xl group-hover:scale-105 group-hover:border-purple-500/30 transition-all duration-300 shadow-inner">
                  {channel.icon}
                </div>
                <div className="truncate space-y-1">
                  <p className="text-[10px] md:text-xs font-black tracking-[0.2em] text-purple-400/80 uppercase">{channel.label}</p>
                  <p className="text-base md:text-lg font-bold text-gray-300 group-hover:text-white transition-colors truncate">
                    {channel.val}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Contact;