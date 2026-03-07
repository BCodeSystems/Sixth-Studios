const services = [
  {
    title: "Special Moments",
    desc: "Cinematic coverage built around story, emotion, and timeless moments.",
    video: "/services/specialmoments.mp4",
  },
  {
    title: "Editorial",
    desc: "Stylized visual storytelling crafted for fashion, beauty, and creative concepts.",
    video: "/services/editorial.mp4",
  },
  {
    title: "Industry Events",
    desc: "Coverage for conferences, panels, conventions, and large-scale industry gatherings.",
    video: "/services/corporate.mp4",
  },
  {
    title: "Lifestyle",
    desc: "Natural, documentary-style content with a premium editorial feel.",
    video: "/services/lifestyle.mp4",
  },
  {
    title: "Music Videos",
    desc: "Concept-to-delivery video production with cinematic direction.",
    video: "/services/musicvid.mp4",
  },
  {
    title: "Studio",
    desc: "Controlled lighting setups for portraits, product, and creative sets.",
    video: "/services/studio.mp4",
  },
  {
    title: "Content Creation",
    desc: "Short-form, social-first assets designed for consistent output.",
    video: "/services/content.mp4",
  },
  {
    title: "Sports",
    desc: "Fast-paced capture for athletes, teams, and branded sports content.",
    video: "/services/sports.mp4",
  }, 
  {
    title: "Concerts",
    desc: "Live performance coverage built to feel loud, intimate, and real.",
    video: "/services/concerts.mp4",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 px-8 py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-5xl uppercase tracking-[0.16em]">
            Services
          </h2>
          <p className="mt-4 text-sm text-white/70">
          Visual storytelling across events, brands, and culture.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((card) => (
            <article
              key={card.title}
              className="group relative isolate overflow-hidden bg-black"
            >
              <video
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                src={card.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

              {/* Dark gradient for readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="font-display text-3xl uppercase tracking-[0.12em] transition-transform duration-300 group-hover:-translate-y-1">
                  {card.title}
                </h3>

                {/* Description appears on hover */}
                <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-white/85 opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {card.desc}
                </p>
              </div>

              {/* Subtle border */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}