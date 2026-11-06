import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export const metadata = {
  title: "Our Journey | EST. 2017 | GCCI International LLP",
  description:
    "Explore the transformation journey of GCCI from 2017 foundation in Pune to international consulting and AI integration in 2025."
};

const journeyMilestones = [
  {
    year: "2017",
    title: "Foundation Year",
    desc: "Global Corporate Council India (GCCI) was established in Pune, India, with a mission to drive business excellence, TPM, TQM, and Lean-based transformations across industries.",
    image: "/images/img_17.jpg"
  },
  {
    year: "2018",
    title: "Formation of TPM Consulting Division",
    desc: "GCCI formally structured its TPM (Total Productive Maintenance) and Operational Excellence Consulting Division, initiating partnerships with major Indian manufacturing organizations.",
    image: "/images/img_4.jpg"
  },
  {
    year: "2019",
    title: "Launch of Capability Development & Assessment Services",
    desc: "Introduced TPM Health Check-Up Assessments, Capability Development Programs, and Business Excellence Training Modules for organizations across India.",
    image: "/images/img_21.jpg"
  },
  {
    year: "2020",
    title: "Global Collaboration and Technology Integration",
    desc: "GCCI expanded globally by initiating strategic partnerships with overseas experts and organizations for AI-based, IoT, and automation-driven TPM solutions.",
    image: "/images/img_19.jpg"
  },
  {
    year: "2021",
    title: "Digital TPM and Visual Management Innovation",
    desc: "Developed Visual Management Systems (VMS) and introduced digital TPM frameworks integrating smart manufacturing concepts.",
    image: "/images/img_18.jpg"
  },
  {
    year: "2022",
    title: "Global Recognition and Expansion",
    desc: "GCCI achieved recognition for its contribution to 69+ JIPM TPM Awards through consulting support and collaboration with multiple industries.",
    image: "/images/img_16.jpg"
  },
  {
    year: "2023",
    title: "Rebranding and Globalization",
    desc: "Rebranded as GCCI International LLP, reflecting a global consulting vision with operations and collaborations across Japan, Germany, the U.S., and Australia.",
    image: "/images/img_14.jpg"
  },
  {
    year: "2024",
    title: "Institutionalization of GCCI Learning & Certification",
    desc: "Initiated plans for GCCI TPM Academy, focusing on TPM, TQM, RCM, and Business Excellence certifications in collaboration with academic and industrial partners.",
    image: "/images/img_6.jpg"
  },
  {
    year: "2025",
    title: "Digital Transformation & AI Integration",
    desc: "Launched initiatives for AI-supported TPM deployment, digital dashboards, and data-driven assessment methodologies to align with Industry 4.0 and Smart Factory frameworks.",
    image: "/images/img_9.jpg"
  }
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero
        title="Our Journey"
        subtitle="EST. 2017 — A Legacy of Transformation From India to the World"
        bgImage="/images/img_15.jpg"
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto pb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a3d91] bg-white px-3 py-1 rounded border border-slate-200">
              Corporate Chronology
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              A Legacy of Transformation
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              From India to the World — Leading Excellence Transformations
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {journeyMilestones.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs hover:border-[#0a3d91] transition-all"
              >
                {/* Year Pill & Content */}
                <div className="md:col-span-7 space-y-3">
                  <span className="inline-block rounded-full bg-[#0a3d91] px-4 py-1.5 text-xs font-extrabold tracking-wider text-white">
                    {item.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Milestone Image */}
                <div className="md:col-span-5">
                  <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <Image
                      src={item.image}
                      alt={`${item.year} - ${item.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
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
