"use client";

import { useSolidHeader } from "@/hooks/useSolidHeader";
import { useState } from "react";

export default function Header() {
  const solid = useSolidHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
    className={[
      "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
      solid ? "bg-black border-b border-white/10" : "bg-transparent",
    ].join(" ")}
  >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-24 md:px-10">
        {/* Left: Brand */}
        <a
          href="#top"
          className="flex items-center gap-3 text-xs sm:text-sm md:text-lg font-semibold tracking-[0.12em] md:tracking-[0.18em] text-white uppercase"
        >
          <img
            src="/icon1.png"
            alt="Sixth Studios logo"
            className="h-8 w-auto md:h-11"
          />
          Sixth Studios
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-white">
          <a className="inline-block hover:opacity-70 transition" href="#about">
            About
          </a>
          <a className="inline-block hover:opacity-70 transition" href="#services">
            Services
          </a>
          <a className="inline-block hover:opacity-70 transition" href="#work">
            Gallery
          </a>
          <a
            href="#contact"
            className="inline-block bg-white !text-black px-8 py-3 hover:bg-neutral-200 transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-black/20 px-3 py-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-white backdrop-blur hover:bg-black/30 transition"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur">
          <nav className="mx-auto max-w-7xl px-4 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-white">
            <div className="flex flex-col gap-4">
              <a
                className="hover:opacity-70 transition"
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                className="hover:opacity-70 transition"
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                className="hover:opacity-70 transition"
                href="#work"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="inline-flex w-fit items-center justify-center bg-white px-6 py-3 text-[11px] font-semibold tracking-[0.16em] uppercase !text-black hover:bg-neutral-200 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}