"use client";

export default function Team() {
  const team = [
    {
      role: "MARKETING GENIUS",
      name: "Sayed Zeeshan Haider",
      title: "Founder & CEO",
      image: "About/zeeshan.png",
    },
    {
      role: "SEO MASTERMIND",
      name: "Ijaz Hussain",
      title: "SEO Specialist",
      image: "About/ijaz.jpeg",
    },
    {
      
      role: "DESIGNER & DEVELOPER",
      name: "Sayed Wajahat Ali Shah",
      title: "Senior Developer",
      image: "About/wajahat.jpeg",
    },
    
    {
      
      role: "Graphic Designer",
      name: "Abdul Rahman",
      title: "UI/UX Designer",
      image: "About/graphic.jpeg",
    },
    {
      
      role: " content creator",
      name: "Measum",
      title: "UI/UX Designer",
      image: "About/masim.jpeg",
    },

    {
      
      role: "video editer",
      name: "Abdullah",
      title: "UI/UX Designer",
      image: "About/abdul.jpeg",
    },
  ];

  const marqueeTeam = [...team, ...team];

  return (
    <section className="bg-ink py-20 px-6 text-center overflow-hidden">
      <span className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
        TEAM MEMBERS
      </span>
      <h2 className="text-4xl font-display text-white mb-4">
        Say Hello to Our Squad
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-12">
        Get ready to meet the faces behind the magic, the dreamers, the
        doers, and the unstoppable force driving our success.
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-6">
          {marqueeTeam.map((member, i) => (
            <div key={i} className="text-left w-64 shrink-0">
              <div className="relative rounded-xl overflow-hidden bg-panel h-72">
                <h3 className="absolute top-4 left-4 z-0 text-3xl font-display font-bold text-orange-500 leading-none">
                  {member.tagline}
                </h3>

                <span className="absolute top-5 right-4 z-10 text-white text-xs font-semibold tracking-wide">
                  {member.role}
                </span>

                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-auto object-cover grayscale z-[1]"
                />

                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-orange-500 hover:text-white rounded-md text-black text-lg font-bold transition-colors">
                  +
                </button>
              </div>

              <div className="bg-panel rounded-xl mt-3 py-4 text-center">
                <h4 className="text-white font-bold">{member.name}</h4>
                <p className="text-gray-400 text-sm">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}