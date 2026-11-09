import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "News & Milestones | GCCI International LLP",
  description:
    "Official corporate announcements, technology partnerships, and engineering milestones from GCCI International LLP."
};

interface NewsCardItem {
  id: string;
  category: string;
  date: string;
  badge: string;
  title: string;
  desc: string;
  highlights: string[];
  image: string;
  theme: {
    cardBg: string;
    textColor: string;
    kickerColor: string;
    descColor: string;
    borderColor: string;
    imageBorder: string;
    btnClasses: string;
  };
}

const stackedNewsArticles: NewsCardItem[] = [
  {
    id: "cloud-tpm-software",
    category: "PRODUCT INNOVATION",
    date: "June 09, 2025",
    badge: "Digital Platform",
    title: "GCCI Launches Cloud-Based TPM Software (Subscription Model)",
    desc: "GCCI has introduced a next-generation TPM Digital Platform covering all eight TPM pillars with real-time operational dashboards, mobile app connectivity, and cloud-based analytics designed specifically for manufacturing plants aiming for JIPM compliance.",
    highlights: [
      "8 TPM Pillars Digitalized",
      "Real-Time Plant Dashboards",
      "Autonomous Maintenance Tags",
      "JIPM Audit Compliance Ready"
    ],
    image: "/images/hero1.jpg",
    theme: {
      cardBg: "bg-[#1e3a8a]",
      textColor: "text-white",
      kickerColor: "text-blue-300",
      descColor: "text-blue-100",
      borderColor: "border-blue-700/60",
      imageBorder: "border-white/20",
      btnClasses: "bg-white text-[#1e3a8a] hover:bg-blue-50"
    }
  },
  {
    id: "global-technology-integration",
    category: "STRATEGIC ALLIANCES",
    date: "August 22, 2020",
    badge: "Global Mentorship",
    title: "New Strategic Partnership for Global Industrial Technology Integration",
    desc: "GCCI expands its collaborative channels with European and Japanese engineering specialists to bring world-standard automation technology, precision SPMs, and know-how directly to Indian manufacturing hubs across Tier-1 automotive and steel sectors.",
    highlights: [
      "Japanese & European Mentors",
      "Precision SPM Know-How",
      "Tier-1 Automotive Modernization",
      "Cross-Border Tech Channel"
    ],
    image: "/images/img_4.jpg",
    theme: {
      cardBg: "bg-[#f59e0b]",
      textColor: "text-slate-950",
      kickerColor: "text-amber-950",
      descColor: "text-slate-900",
      borderColor: "border-amber-600/40",
      imageBorder: "border-black/15",
      btnClasses: "bg-slate-950 text-white hover:bg-slate-900"
    }
  },
  {
    id: "vision-inspection-commissioning",
    category: "AI & QUALITY INSPECTION",
    date: "August 20, 2020",
    badge: "Computer Vision",
    title: "Successful Commissioning of AI-Driven Vision Inspection System",
    desc: "GCCI supported the end-to-end design and commissioning of an AI-driven vision inspection system for steel tube and strip processing lines, achieving 100% surface defect detection, automated sorting, and elimination of manual inspection errors.",
    highlights: [
      "100% Surface Defect Detection",
      "Sub-Millimeter Optical Scanning",
      "Zero-Defect Dispatch System",
      "High-Speed Line Integration"
    ],
    image: "/images/img_12.jpg",
    theme: {
      cardBg: "bg-[#0f172a]",
      textColor: "text-white",
      kickerColor: "text-cyan-400",
      descColor: "text-slate-300",
      borderColor: "border-slate-800",
      imageBorder: "border-cyan-500/30",
      btnClasses: "bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-extrabold"
    }
  },
  {
    id: "custom-spm-development",
    category: "PROCESS AUTOMATION",
    date: "July 15, 2020",
    badge: "Machine Engineering",
    title: "Custom Special Purpose Machine (SPM) Development Completed",
    desc: "Our engineering team successfully delivered bespoke tailor-made SPMs for precision assembly and machining applications, improving cycle time, operational safety, and shop floor productivity at multiple manufacturing plants.",
    highlights: [
      "Tailor-Made Assembly SPMs",
      "Cycle Time Efficiency Boost",
      "Workstation Safety Interlocks",
      "Precision Machining Tolerances"
    ],
    image: "/images/img_15.jpg",
    theme: {
      cardBg: "bg-[#241442]",
      textColor: "text-white",
      kickerColor: "text-purple-300",
      descColor: "text-purple-100",
      borderColor: "border-purple-800/60",
      imageBorder: "border-white/20",
      btnClasses: "bg-white text-[#241442] hover:bg-purple-50"
    }
  },
  {
    id: "iot-predictive-maintenance",
    category: "INDUSTRIAL IOT & AI",
    date: "May 10, 2020",
    badge: "Predictive Analytics",
    title: "GCCI Expands IoT & AI Offerings for Predictive Equipment Maintenance",
    desc: "GCCI provides comprehensive IoT sensor integration (vibration, thermal, current) coupled with AI/ML predictive maintenance algorithms that detect machine degradation weeks before failure, preventing catastrophic plant breakdowns.",
    highlights: [
      "Multi-Sensor IoT Integration",
      "AI/ML Breakdown Anomaly Models",
      "Weeks-in-Advance Early Warning",
      "Planned Maintenance Sync"
    ],
    image: "/images/img_16.jpg",
    theme: {
      cardBg: "bg-[#064e3b]",
      textColor: "text-white",
      kickerColor: "text-emerald-300",
      descColor: "text-emerald-100",
      borderColor: "border-emerald-800/60",
      imageBorder: "border-emerald-400/30",
      btnClasses: "bg-emerald-400 text-slate-950 hover:bg-emerald-300 font-extrabold"
    }
  }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero
        title="News & Milestones"
        subtitle="Explore our key corporate announcements, technology advancements, and global industrial partnerships."
        bgImage="/images/img_4.jpg"
      />

      {/* Stacked Cards Section */}
      <section className="relative w-full py-16 sm:py-24 bg-slate-100/70">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a3d91] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Corporate Milestones & Releases</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Latest Developments & Strategic Deployments
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Scroll through our stacked timeline of technology innovations, global engineering partnerships, and plant modernizations.
            </p>
          </div>

          {/* Stacking Cards Container */}
          <div className="relative space-y-0 pb-20">
            {stackedNewsArticles.map((article, idx) => (
              <div
                key={article.id}
                className={`sticky top-24 sm:top-28 lg:top-32 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 mb-16 sm:mb-24 lg:mb-32 min-h-[480px] lg:min-h-[520px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border ${article.theme.cardBg} ${article.theme.textColor} ${article.theme.borderColor} transition-all duration-300 group flex flex-col justify-between`}
                style={{
                  zIndex: idx + 1
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Content */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Category & Badge */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-widest ${article.theme.kickerColor}`}>
                          {article.category}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-xs">
                          {article.badge}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight leading-[1.18]">
                        {article.title}
                      </h3>

                      {/* Description */}
                      <p className={`mt-4 text-sm sm:text-base lg:text-lg leading-relaxed ${article.theme.descColor}`}>
                        {article.desc}
                      </p>

                      {/* Key Highlights Bullet Grid (Matching reference mockup style) */}
                      <div className="mt-6 pt-6 border-t border-current/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold">
                        {article.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-current shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Metadata & CTA Action Button */}
                    <div className="mt-8 pt-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium opacity-85">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>

                      <Link
                        href="/contact"
                        className={`inline-flex items-center gap-2.5 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg group/btn ${article.theme.btnClasses}`}
                      >
                        <span>Inquire About This Milestone</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual Frame */}
                  <div className="lg:col-span-5">
                    <div className={`relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[5/4] w-full rounded-2xl overflow-hidden shadow-2xl border ${article.theme.imageBorder} bg-black/20`}>
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold drop-shadow-md">
                        <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                          {article.badge}
                        </span>
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                          GCCI Milestone
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Call to Action Section with Fixed Background Video */}
      <CtaSection />

      <Footer />
    </main>
  );
}
