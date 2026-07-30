export default function Founder() {
  const tags = [
    "Visionary Thinker",
    "Empathetic Leader",
    "Creative Problem-Solver",
    "Passionate Mentor",
  ];

  const logos = [
    "Logoipsum",
    "Logo IPSUM",
    "LOGOIPSUM",
    "logo ipsum",
    "logo ipsum",
  ];

  return (
    <section className="bg-ink py-20 px-6 max-w-6xl mx-auto">
      {/* Top label + heading + intro */}
      <span className="inline-block bg-panel text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
        ABOUT FOUNDER
      </span>

      <h2 className="text-4xl font-display text-white mb-6">
        Meet The Founder
      </h2>

      <p className="text-gray-400 leading-relaxed max-w-4xl mb-16">
        Sayed Zeeshan Haider,{" "}
        <span className="text-white font-semibold">is the Founder & CEO </span>
        of Jasonex Technologies (Pvt.) Ltd with{" "}
        <span className="text-white font-semibold">
          8 years of experience
        </span>{" "}
        in digital technology, software development, AI-powered automation,
        and performance marketing.{" "}
        <span className="text-white font-semibold">
          Throughout his career,
        </span>{" "}
        he has helped startups, SMEs, and established businesses build their
        digital presence through custom web development, eCommerce solutions,
        search engine optimization (SEO), Google Ads, Meta Ads, branding,
        and business automation.
      </p>

      {/* Photo + Details */}
      <div className="grid md:grid-cols-[240px_1fr] gap-6 items-start">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-56 h-56">
            <img
              src="/zeeshan.png"
              alt="Sayed Zeeshan Haider"
              className="w-full h-full object-cover rounded-full border-4 border-panel shadow-xl"
            />
          </div>

          <h3 className="mt-5 text-2xl font-bold leading-tight text-center md:text-left">
            <span className="text-white">Sayed Zeeshan</span>
            <br />
            <span className="text-white">Haider</span>
          </h3>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-gray-400 leading-relaxed mb-10">
            As a strong advocate of innovation, Zeeshan specializes in
            integrating Artificial Intelligence into modern business
            processes, enabling organizations to automate workflows,
            enhance customer experiences, and make data-driven decisions.
            Under his leadership, Jasonex Technologies is committed to
            delivering cutting-edge technology solutions that empower
            businesses to thrive in an increasingly digital world.
            <br />
            <br />
            His long-term vision is to establish Jasonex Technologies as a
            globally recognized technology company, delivering world-class
            AI, software, and digital transformation solutions to clients
            across the globe.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-panel text-white text-xs px-4 py-2 rounded-full flex items-center gap-2"
              >
                <span>✦</span>
                {tag}
              </span>
            ))}
          </div>

          {/* Featured In */}
          <p className="text-gray-500 text-sm mb-3">
            Featured In:
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-md">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="bg-panel rounded-lg py-3 flex items-center justify-center text-gray-300 text-xs font-semibold"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}