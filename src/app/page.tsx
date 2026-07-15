import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { RequestFormSection } from "@/components/RequestFormSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustStrip } from "@/components/TrustStrip";

export default function Home() {
  return (
    <div className="page-shell">
      <main>
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <RequestFormSection />
      </main>
      <Footer />
    </div>
  );
}
