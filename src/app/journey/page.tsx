import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import JourneyExperience from "@/components/JourneyExperience";

export const metadata = {
  title: "History of Our Firm | Our Journey | GCCI International LLP",
  description:
    "Explore the transformation journey and history of GCCI International LLP from our 2017 foundation in Pune to multinational consulting, 69+ JIPM awards, and AI Industry 4.0 platforms."
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <JourneyExperience />
      <CtaSection />
      <Footer />
    </main>
  );
}
