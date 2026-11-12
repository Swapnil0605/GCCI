import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";

export const metadata = {
  title: "About Us | Company History | GCCI International LLP",
  description:
    "Founded in 2017 and rebranded as GCCI International LLP in 2023. Specializing in Business Consulting, Process Automation, AI Vision Inspection, and ERW Steel Tube Mills."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page Hero */}
      <PageHero
        title="About Us"
        subtitle="Global Corporate Council India – GCCI / GCCI International LLP"
        bgImage="/images/img_23.jpg"
      />

      {/* Section 1: Company History, Overview, Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a3d91] bg-blue-50 px-3 py-1 rounded">
                Company History & Evolution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Global Corporate Council India – GCCI / GCCI International LLP
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Founded in 2017 with a vision of delivering end-to-end solutions through global expertise,
                GCCI has evolved into a multifaceted enterprise. In 2023, we expanded and rebranded as{" "}
                <strong className="text-slate-900">GCCI International LLP</strong>. As a consortium
                specializing in Business Consulting, Process Automation Solutions, Vision-based Automated
                Inspection, and ERW Steel Tube Mills, GCCI combines extensive expertise and global
                partnerships to enhance operational efficiency.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                We offer Consulting & Training tailored to enforce the team to achieve the client
                performance and streamline its operations. We achieve this through strategic alliances with
                industry leaders such as{" "}
                <strong className="text-slate-900">M/s. YOSHI KENKYUSHO (Japan)</strong>, established by the
                late JIPM Lead Assessor Mr. Yoshitaka Murase, GCCI exemplifies best global practices and
                specialized systems.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                Our commitment to excellence consistently delivers substantial benefits to our clients,
                including increased productivity, cost reductions, and sustainable improvements in key
                performance indicators. At GCCI, we empower our clients with Training Workshops and deployment
                support for a wide array of best practices and business strategies. From Vision and Mission
                Development to SWOT Analysis, TPM, Lean, Kaizen, and beyond, our team is prepared to guide our
                clients on its journey toward capability improvement.
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-xs">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0a3d91]">
                    OUR MISSION
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    To uplift industries through ethical consulting, intelligent automation, and universal
                    knowledge systems that strengthen capabilities, improve performance, and create
                    sustainable, enlightened business growth.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-xs">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0a3d91]">
                    OUR VISION
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    To enable organizational enlightenment—where people, processes, and technologies evolve
                    with clarity, integrity, and world-class excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="lg:col-span-5">
              <div className="relative h-[480px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/images/img_23.jpg"
                  alt="GCCI International About"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    EST. 2017 • PUNE, INDIA
                  </div>
                  <div className="text-lg font-bold mt-1">
                    Delivering End-to-End Operational Turnarounds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Call to Action Banner with Background Video */}
      <CtaSection />

      <Footer />
    </main>
  );
}
