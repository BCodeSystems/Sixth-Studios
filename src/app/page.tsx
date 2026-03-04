import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Work />
      <ContactSection />
      <Footer />
    </main>
  );
}