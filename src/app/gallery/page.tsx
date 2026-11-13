import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Our Gallery | GCCI International LLP",
  description:
    "A Journey of Excellence — Captured in Every Moment, Framed with Pride. Real-world on-site industrial transformations, JIPM assessments, and plant audits."
};

const galleryItems = [
  { src: "/images/img_22.jpg", title: "JIPM Assessment with Sensei Ichikawa San & Sensei Nomura San" },
  { src: "/images/img_4.jpg", title: "COCA COLA JIPM Assessment with Japanese Sensei" },
  { src: "/images/img_29.jpeg", title: "Conducting MAKIGAMI Analysis in Rucha Engineers" },
  { src: "/images/img_31.jpeg", title: "Conducting MAKIGAMI Analysis in Rucha Engineers" },
  { src: "/images/img_42.jpeg", title: "5S Seminar Conducted at RIJ Engineering Pvt Ltd." },
  { src: "/images/event1.jpg", title: "Event Conducted by GCCI at Coimbatore" },
  { src: "/images/event2.jpg", title: "Event Conducted by GCCI at Coimbatore" },
  { src: "/images/event3.jpg", title: "Event Conducted by GCCI at Aurangabad" },
  { src: "/images/event4.jpg", title: "Event Conducted by GCCI at Aurangabad" },
  { src: "/images/event5.jpg", title: "Event Conducted by GCCI at Ahmedabad" },
  { src: "/images/event6.jpg", title: "Event Conducted by GCCI at Ahmedabad" },
  { src: "/images/img_33.jpeg", title: "TPM Kick off at MMForgings" },
  { src: "/images/img_37.jpg", title: "ABI Showa tech JIPM Assessment" },
  { src: "/images/img_38.jpg", title: "JIPM Assessment Harsha Engg. International" },
  { src: "/images/img_39.jpg", title: "TPM Review at WAR ROOM" },
  { src: "/images/img_40.jpg", title: "Lean Tour Japan" },
  { src: "/images/img_11.jpg", title: "Business Excellence Assessment in SAIL" },
  { src: "/images/img_41.jpg", title: "NIPPON Steel - Japan Plant Visit" },
  { src: "/images/img_18.jpg", title: "TPM Facilitators course (CII)" }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero
        title="Our Gallery"
        subtitle="A Journey of Excellence — Captured in Every Moment, Framed with Pride"
        bgImage="/images/img_23.jpg"
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto pb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a3d91] bg-white px-3 py-1 rounded border border-slate-200">
              Field Execution
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Moments of Excellence & Transformation
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Over 61+ comprehensive assessments and shop floor training workshops conducted across India and globally.
            </p>
          </div>

          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <CtaSection />

      <Footer />
    </main>
  );
}
