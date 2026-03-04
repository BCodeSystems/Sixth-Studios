export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3 text-sm text-neutral-400">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/icon1.png"
                alt="Sixth Studios logo"
                className="h-7 w-auto"
              />
              <h3 className="text-xs tracking-[0.25em] text-white">
                SIXTH STUDIOS
              </h3>
            </div>
            <p className="leading-relaxed">
              Cinematic storytelling for meaningful moments and live experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <a href="#about" className="block transition hover:text-white">
              About
            </a>
            <a href="#services" className="block transition hover:text-white">
              Services
            </a>
            <a href="#gallery" className="block transition hover:text-white">
              Gallery
            </a>
            <a href="#contact" className="block transition hover:text-white">
              Contact
            </a>
            <a href="/privacy-policy" className="block transition hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="block transition hover:text-white">
              Terms &amp; Conditions
            </a>
          </div>

          {/* Contact */}
          <div>
            <p>Bookings@sixth-studios.com</p>
            <p className="mt-2">San Diego, CA</p>
            <p className="mt-2">Available Worldwide</p>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-6 text-xs text-neutral-600">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© Sixth Studios. All rights reserved.</p>
            <p>
              Built by{" "}
              <a
                href="https://bcodesystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10B981] font-semibold hover:opacity-80 transition"
              >
                BCode Systems
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}