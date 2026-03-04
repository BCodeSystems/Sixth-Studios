import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative h-[100svh] w-full overflow-hidden bg-[rgb(var(--bg-deep))]"
    >
      {/* Sentinel for transparent->solid header on scroll */}
      <div id="hero-sentinel" className="absolute top-0 h-1 w-full" />

      {/* Full-bleed hero image */}
      <Image
        src="/Hero.jpeg"
        alt="Featured cinematic still"
        fill
        priority
        className="object-cover"
        style={{
          filter: "brightness(0.8) contrast(1.15) saturate(0.85)",
        }}
      />

      {/* Dark cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay"
        style={{
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="font-display text-4xl uppercase tracking-[0.14em] sm:text-5xl md:text-6xl">
            Cinematic Content. Strategic Impact.
          </h1>

          <p className="mt-6 text-lg text-[rgb(var(--fg))]/90 sm:text-xl">
            Photography. Videography. Full-Scale Production.
          </p>

          <p className="mt-3 text-sm text-[rgb(var(--muted))] sm:text-base">
            Working with brands, creators, and organizations.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-xs tracking-widest text-[rgb(var(--muted))]">
          <span className="uppercase">Scroll</span>
          <span className="block h-10 w-[2px] bg-[rgb(var(--muted))]/50">
            <span className="block h-3 w-full animate-bounce bg-[rgb(var(--fg))]/80" />
          </span>
        </div>
      </div>
    </section>
  );
}