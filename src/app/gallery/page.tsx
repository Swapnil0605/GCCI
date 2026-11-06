import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Image from "next/image";

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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0a3d91]/85 p-5 text-white flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[11px] font-mono text-blue-200 uppercase tracking-widest mb-1">
                      GCCI Activity
                    </span>
                    <h3 className="text-sm font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100">
                  <h3 className="text-xs font-semibold text-slate-800 line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
