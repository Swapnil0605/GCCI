import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KpiSection from "@/components/KpiSection";
import WhyGcciSection from "@/components/WhyGcciSection";
import ServicesSection from "@/components/ServicesSection";
import AlliancesSection from "@/components/AlliancesSection";
import NewsSection from "@/components/NewsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "GCCI International – Inspiring Global Excellence | Official Website",
  description:
    "Transforming organizations through knowledge, innovation, and collaboration. Specialists in TPM, Lean Manufacturing, Industrial Automation, AI Vision Inspection, and Maintenance Software."
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Navbar */}
      <Header />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. KPI Credibility Metrics (Animated Scroll Counter) */}
      <KpiSection />

      {/* 4. Core Capabilities & Industrial Solutions */}
      <ServicesSection />

      {/* 5. Why Choose GCCI Section (Core Industrial Philosophy) */}
      <WhyGcciSection />

      {/* 6. Our Business Partners & Alliances Beyond Borders */}
      <AlliancesSection />

      {/* 7. News Section */}
      <NewsSection />

      {/* 8. Engineering Consultation CTA Section */}
      <CtaSection />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}
