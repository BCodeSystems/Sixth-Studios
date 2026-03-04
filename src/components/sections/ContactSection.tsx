import { Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-neutral-950 py-20 sm:py-28">
      {/* subtle top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-neutral-950 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            LET&apos;S CREATE TOGETHER
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400 sm:text-base">
            Ready to bring your vision to life? Reach out to discuss your project
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* EMAIL */}
          <a
            href="mailto:Bookings@sixth-studios.com"
            className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-neutral-700"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>

            <Mail className="h-9 w-9 text-neutral-200" />
            <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-white">
              EMAIL
            </h3>
            <p className="mt-3 text-lg text-neutral-200">
              Bookings@sixth-studios.com
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              Preferred for detailed inquiries
            </p>
          </a>

          {/* CALL */}
          <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 opacity-90">
            <Phone className="h-9 w-9 text-neutral-200" />
            <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-white">
              CALL / TEXT
            </h3>
            <p className="mt-3 text-lg text-neutral-200">+1 (619) 384-9298</p>
            <p className="mt-3 text-sm text-neutral-500">
              Call or text for bookings & quick inquiries
            </p>
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-14 text-center text-sm text-neutral-500">
          <p>Serving clients worldwide • Based in San Diego</p>
          <p className="mt-2">Typically respond within 24 hours</p>
        </div>
      </div>
    </section>
  );
}