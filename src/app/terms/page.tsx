export const metadata = {
    title: "Terms & Conditions | Sixth Studios",
    description: "Terms & Conditions for Sixth Studios.",
  };
  
  export default function TermsPage() {
    return (
      <main className="bg-black">
        <section className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
          <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">
            Legal
          </p>
  
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Terms &amp; Conditions
          </h1>
  
          <p className="mt-4 text-sm text-neutral-400">
            Effective Date: <span className="text-neutral-300">[03/01/2026]</span>
          </p>
  
          <div className="mt-10 space-y-10 text-sm leading-relaxed text-neutral-300">
            <section>
              <h2 className="text-white text-lg font-semibold">1. Acceptance</h2>
              <p className="mt-3 text-neutral-400">
                By accessing or using this website, you agree to these Terms &amp;
                Conditions. If you do not agree, please do not use the website.
              </p>
            </section>
  
            <section>
              <h2 className="text-white text-lg font-semibold">2. Website Use</h2>
              <p className="mt-3 text-neutral-400">
                You agree not to misuse the website, attempt to access restricted
                areas, or interfere with normal operation.
              </p>
            </section>
  
            <section>
              <h2 className="text-white text-lg font-semibold">
                3. Intellectual Property
              </h2>
              <p className="mt-3 text-neutral-400">
                Unless otherwise stated, all content on this website (including
                video, images, text, and branding) is owned by Sixth Studios and
                protected by applicable intellectual property laws. You may not
                copy, reproduce, distribute, or create derivative works without
                written permission.
              </p>
            </section>
  
            <section>
              <h2 className="text-white text-lg font-semibold">
                4. Inquiries &amp; Bookings
              </h2>
              <p className="mt-3 text-neutral-400">
                Submitting an inquiry does not guarantee availability or confirm a
                booking. Bookings are confirmed only after both parties agree to
                terms in writing (such as a contract) and any required deposit is
                received.
              </p>
            </section>
  
            <section>
              <h2 className="text-white text-lg font-semibold">
                5. Third-Party Links
              </h2>
              <p className="mt-3 text-neutral-400">
                This website may contain links to third-party sites or platforms.
                We are not responsible for the content, policies, or practices of
                those third parties.
              </p>
            </section>
  
            <section>
              <h2 className="text-white text-lg font-semibold">
                6. Disclaimer of Warranties
              </h2>
              <p className="mt-3 text-neutral-400">
                This website is provided on an &ldquo;as is&rdquo; and
                &ldquo;as available&rdquo; basis. We make no warranties of any
                kind, express or implied, regarding the website.
              </p>
            </section>
  
            <section>
              <h2 className="text-white text-lg font-semibold">
                7. Limitation of Liability
              </h2>
              <p className="mt-3 text-neutral-400">
                To the maximum extent permitted by law, Sixth Studios will not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of the website.
              </p>
            </section>
  
            <section>
              <h2 className="text-white text-lg font-semibold">8. Changes</h2>
              <p className="mt-3 text-neutral-400">
                We may update these Terms &amp; Conditions at any time. Continued
                use of the website after updates means you accept the revised
                terms.
              </p>
            </section>
  
            <section>
              <h2 className="text-white text-lg font-semibold">9. Contact</h2>
              <p className="mt-3 text-neutral-400">
                For questions about these Terms, contact{" "}
                <a
                  className="text-white underline decoration-neutral-700 underline-offset-4 hover:decoration-neutral-400 transition"
                  href="mailto:Bookings@sixth-studios.com"
                >
                  Bookings@sixth-studios.com
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>
    );
  }