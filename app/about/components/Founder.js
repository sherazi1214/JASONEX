export default function Founder({ founder }) {
  const { name, role, intro, details, tags = [], featuredIn = [], photo } = founder;
  const paragraphs = (details || "").split(/\n\s*\n/).filter(Boolean);

  return (
    <section className="bg-ink py-20 px-6 max-w-6xl mx-auto">
      {/* Top label + heading + intro */}
      <span className="inline-block bg-panel text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
        ABOUT FOUNDER
      </span>

      <h2 className="text-4xl font-display text-white mb-6">
        Meet The Founder
      </h2>

      <p className="text-gray-400 leading-relaxed max-w-4xl mb-16 whitespace-pre-line">
        {intro}
      </p>

      {/* Photo + Details */}
      <div className="grid md:grid-cols-[240px_1fr] gap-6 items-start">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-56 h-56">
            {photo && (
              <img
                src={photo}
                alt={name}
                className="w-full h-full object-cover rounded-full border-4 border-panel shadow-xl"
              />
            )}
          </div>

          <h3 className="mt-5 text-2xl font-bold leading-tight text-center md:text-left text-white">
            {name}
          </h3>
          {role && <p className="mt-1 text-sm text-gray-400 text-center md:text-left">{role}</p>}
        </div>

        {/* Right Side */}
        <div>
          <div className="text-gray-400 leading-relaxed mb-10 flex flex-col gap-4">
            {paragraphs.map((para, i) => (
              <p key={i} className="whitespace-pre-line">{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {tags.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="bg-panel text-white text-xs px-4 py-2 rounded-full flex items-center gap-2"
              >
                <span>✦</span>
                {tag}
              </span>
            ))}
          </div>

          {/* Featured In */}
          {featuredIn.length > 0 && (
            <>
          <p className="text-gray-500 text-sm mb-3">
            Featured In:
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-md">
            {featuredIn.map((logo, i) => (
              <div
                key={i}
                className="bg-panel rounded-lg py-3 flex items-center justify-center text-gray-300 text-xs font-semibold"
              >
                {logo}
              </div>
            ))}
          </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}