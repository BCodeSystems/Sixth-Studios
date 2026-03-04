"use client";
import { useEffect, useRef, useState } from "react";
export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Start loading shortly before it scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "300px 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-neutral-200 px-8 py-36"
      aria-label="About"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-300 lg:block" />
        {/* Left: Copy */}
        <div className="opacity-0 translate-y-8 animate-[fadeInUp_0.9s_ease-out_forwards]">
          <h2 className="font-display text-6xl uppercase tracking-[0.12em] text-neutral-900">
            About Me
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-neutral-800">
            Chanz Beltran is the founder of Sixth Studios, a San Diego based
            creative media company specializing in photography, videography, and
            full scale digital content production.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-neutral-800">
            With a focus on cinematic visuals and brand-driven storytelling, Sixth
            Studios delivers a full service approach tailored to each client’s
            goals.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-neutral-800">
            Every project is built with intention—from concept to delivery—so the
            final output feels premium, authentic, and on-brand.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-none bg-black shadow-sm aspect-[4/5] w-full">
          {/*
            Requirements for autoplay in modern browsers:
            - muted
            - playsInline
            - usually loop
          */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={loadVideo ? "/about.mp4" : undefined}
            autoPlay={loadVideo}
            muted
            loop
            playsInline
            preload={loadVideo ? "metadata" : "none"}

          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/*
            If image instead, comment out the <video> above:
            <img
              src="/about.jpg"
              alt="Portrait"
              className="h-full w-full object-cover"
            />
          */}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}