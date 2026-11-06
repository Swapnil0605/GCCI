import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Users,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Crosshair,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "About Us | Company History | GCCI International LLP",
  description:
    "Founded in 2017 and rebranded as GCCI International LLP in 2023. Specializing in Business Consulting, Process Automation, AI Vision Inspection, and ERW Steel Tube Mills."
};

export default function AboutPage() {
  const whyUsItems = [
    {
      title: "VALUE CREATOR TO ORGANIZATION PURPOSE",
      desc: "We align every initiative directly with your organizational purpose, ensuring measurable value creation that strengthens long-term growth."
    },
    {
      title: "DRIVING TEAM TO OPTIMIZE HUMAN RESOURCE",
      desc: "Our consulting and training frameworks empower your workforce to deliver maximum performance and enhanced ROI on human capital."
    },
    {
      title: "TRUSTWORTHINESS",
      desc: "With global partnerships and proven methodologies, we operate with complete transparency, integrity, and disciplined reliability."
    },
    {
      title: "CREATIVITY AS CULTURE",
      desc: "We promote a culture of creative thinking that encourages innovation and continuous improvement across all levels."
    },
    {
      title: "VALUE THE PRINCIPLES AND PEOPLE",
      desc: "We uphold strong professional ethics while respecting individuals, fostering a healthy, principle-driven work environment."
    },
    {
      title: "PERFECTION IN WORK",
      desc: "We execute every transformation with uncompromised precision, ensuring flawless shop floor systems and long-term sustainability."
    },
    {
      title: "METICULOUSNESS",
      desc: "We approach every assignment with careful attention to detail and disciplined execution, ensuring consistent, dependable results."
    }
  ];

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

      {/* Section 2: Why Choose Us */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto pb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a3d91] bg-white px-3 py-1 rounded border border-slate-200">
              Core Principles
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Choose Us
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Grounded in trust, guided by principle, and perfected with meticulous attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#0a3d91] hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-[#0a3d91]" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action Banner */}
      <section className="py-16 bg-[#0a3d91] text-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
            Global Corporate Council India
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold">
            &ldquo;Driven by Trust, Guided by Principle, Perfected with Meticulousness.&rdquo;
          </h2>
          <p className="mt-3 text-sm text-blue-100">
            Have a question or project in mind? We’d love to hear from you! Reach out to our team — we’re
            here to turn your ideas into meaningful outcomes.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#0a3d91] shadow-lg hover:bg-slate-100 transition-colors"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
