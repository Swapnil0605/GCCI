import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowRightCircle } from "lucide-react";

export const metadata = {
  title: "Learning from Japanese Gurus | GCCI International LLP",
  description:
    "Explore GCCI's core consulting frameworks, diagnostic assessments, and leadership workshops directly anchored in the teachings of esteemed Japanese Senseis from JIPM and JICA."
};

const japaneseGurus = [
  { id: "01", name: "Seo Yamaguchi San", role: "TPM – JIPM" },
  { id: "02", name: "Murase San", role: "TPM – JIPM" },
  { id: "03", name: "Prof. Shobi Shiba", role: "Breakthrough, JICA" },
  { id: "04", name: "Furuhashi San", role: "TPS, Lean, VSME – JICA" },
  { id: "05", name: "Suzuki San", role: "TPM – JIPM" },
  { id: "06", name: "Ichikawa San", role: "TPM – JIPM" },
  { id: "07", name: "Nakamura San", role: "TPM – JIPM" },
  { id: "08", name: "Inamura San", role: "TPM – JIPM" },
  { id: "09", name: "Ishikawa San", role: "TPM – JIPM" },
  { id: "10", name: "Miyamura San", role: "TPM – JIPM" },
  { id: "11", name: "Kubota San", role: "TPM – JIPM" },
  { id: "12", name: "Amakawa San", role: "TPM – JIPM" },
  { id: "13", name: "Takano San", role: "TPM – JIPM" },
  { id: "14", name: "Yoko San", role: "TPM – JIPM" },
  { id: "15", name: "Tanaka San", role: "TPM – JIPM" },
  { id: "16", name: "Muto San", role: "TPM – JIPM" }
];

export default function JapaneseTrainingPage() {
  const gurusCol1 = japaneseGurus.slice(0, 8);
  const gurusCol2 = japaneseGurus.slice(8, 16);

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-[#0a3d91] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Header />

      {/* ============================================================== */}
      {/* 2. HERO SECTION: Pagoda Panoramic Banner with Cherry Blossoms */}
      {/* ============================================================== */}
      <section
        className="relative w-full overflow-hidden bg-slate-50 flex items-center"
        style={{ minHeight: "560px" }}
      >
        {/* Background Pagoda Graphic */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/training/activity_hero.png"
            alt="Japanese Pagoda with Cherry Blossoms - Learning from Japanese Gurus"
            fill
            priority
            unoptimized
            className="object-cover object-right-top"
          />
        </div>

        {/* Soft Left Gradient Overlay for Text Readability */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.92) 35%, rgba(255, 255, 255, 0.6) 55%, rgba(255, 255, 255, 0) 75%)"
          }}
        />

        {/* Hero Content */}
        <div className="relative z-20 mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="max-w-2xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E0ECF8] border border-[#C6DCF3] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0a3d91] mb-5 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-[#1d64d8]" />
              <span>JAPANESE OPERATIONAL HERITAGE</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0e1b38] tracking-tight leading-[1.12]">
              Learning from <br /> Japanese Gurus
            </h1>

            {/* Subhead with Fine Blue Divider */}
            <div className="flex items-center gap-3 mt-4 sm:mt-5">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a3d91] font-mono">
                CORPORATE BUSINESS MANAGEMENT
              </span>
              <div className="h-[2px] w-12 sm:w-16 bg-[#0a3d91]" />
            </div>

            {/* Descriptive Narrative with Bold Highlights */}
            <p className="mt-4 text-sm sm:text-[15px] text-[#334155] leading-relaxed max-w-xl">
              Our core consulting frameworks, diagnostic assessments, and leadership workshops are{" "}
              <strong className="font-bold text-[#0e1b38]">directly anchored</strong> in the philosophies,
              methodologies, and{" "}
              <strong className="font-bold text-[#0e1b38]">direct teachings of esteemed Japanese Senseis</strong>{" "}
              from the{" "}
              <strong className="font-bold text-[#0e1b38]">
                Japan Institute of Plant Maintenance (JIPM)
              </strong>{" "}
              and{" "}
              <strong className="font-bold text-[#0e1b38]">
                Japan International Cooperation Agency (JICA)
              </strong>
              .
            </p>

            {/* Category / Framework Pills */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5">
              <span className="px-4 py-1.5 rounded-md bg-[#E8EEF5] border border-[#D1DCE8] text-xs font-bold text-[#0e1b38] uppercase tracking-wider shadow-xs">
                TPM
              </span>
              <span className="px-4 py-1.5 rounded-md bg-[#E8EEF5] border border-[#D1DCE8] text-xs font-bold text-[#0e1b38] uppercase tracking-wider shadow-xs">
                TPS •
              </span>
              <span className="px-4 py-1.5 rounded-md bg-[#E8EEF5] border border-[#D1DCE8] text-xs font-bold text-[#0e1b38] uppercase tracking-wider shadow-xs">
                JIPM • JICA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. EXPERT NETWORK: 16+ Esteemed Japanese Experts               */}
      {/* ============================================================== */}
      <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Left Column: Heading & Button (4 cols) */}
            <div className="lg:col-span-4 xl:col-span-4 space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0a3d91]">
                OUR JAPANESE EXPERT NETWORK
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1b38] tracking-tight leading-[1.15]">
                16+ Esteemed <br /> Japanese Experts
              </h2>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-sm pt-1">
                Guided by the wisdom and experience of renowned Japanese experts, we bring world-class knowledge
                to drive excellence in engineering and management.
              </p>

              <div className="w-12 h-[2.5px] bg-[#0a3d91] my-4" />

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a3d91] px-6 py-2.5 text-xs font-bold text-[#0a3d91] hover:bg-[#0a3d91] hover:text-white transition-all shadow-xs group"
                >
                  <span>Explore Our Expertise</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Center Columns: 16 Japanese Senseis Roster (5 cols) */}
            <div className="lg:col-span-5 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {/* Column 1: 01 to 08 */}
              <div className="space-y-4">
                {gurusCol1.map((guru) => (
                  <div key={guru.id} className="flex items-start gap-2.5">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#0a3d91] w-6 shrink-0 pt-0.5">
                      {guru.id}
                    </span>
                    <div>
                      <div className="text-sm sm:text-[15px] font-bold text-[#0e1b38] leading-tight">
                        {guru.name}
                      </div>
                      <div className="text-[11px] text-[#64748b] font-medium mt-0.5">
                        ({guru.role})
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2: 09 to 16 */}
              <div className="space-y-4">
                {gurusCol2.map((guru) => (
                  <div key={guru.id} className="flex items-start gap-2.5">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#0a3d91] w-6 shrink-0 pt-0.5">
                      {guru.id}
                    </span>
                    <div>
                      <div className="text-sm sm:text-[15px] font-bold text-[#0e1b38] leading-tight">
                        {guru.name}
                      </div>
                      <div className="text-[11px] text-[#64748b] font-medium mt-0.5">
                        ({guru.role})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Japanese Industrial Expertise Visual Card (3 cols) */}
            <div className="lg:col-span-3 xl:col-span-3">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                <Image
                  src="/images/training/japanese_industrial_expert.jpg"
                  alt="Japanese Industrial Expertise - Engineers in plant floor reviewing metrics"
                  fill
                  unoptimized
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-300">
                    JAPANESE INDUSTRIAL EXPERTISE
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 mt-1.5 leading-snug">
                    Knowledge, discipline and operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. METHODOLOGY CARDS: TPM (01) & TPS & KAIZEN (02)             */}
      {/* ============================================================== */}
      <section className="relative w-full bg-[#f8fafc] py-12 sm:py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 space-y-8 lg:space-y-10">
          {/* Card 01: TOTAL PRODUCTIVE MAINTENANCE (TPM) */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#D9E3EF]"
            style={{ backgroundColor: "#EEF3F8" }}
          >
            {/* Left Image with Modern Slanted Diagonal Cut */}
            <div
              className="lg:col-span-5 relative w-full h-64 sm:h-80 lg:h-[360px] overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)"
              }}
            >
              <Image
                src="/images/training/tpm.jpg"
                alt="Total Productive Maintenance (TPM) - Precision Machine Inspection"
                fill
                unoptimized
                className="object-cover object-center"
              />
            </div>

            {/* Right Text Content with Stylized Watermark */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 relative flex flex-col justify-center">
              {/* Background Number Watermark 01 */}
              <div
                className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 font-mono text-[120px] sm:text-[160px] font-black select-none pointer-events-none leading-none tracking-tighter"
                style={{ color: "rgba(10, 61, 145, 0.08)" }}
                aria-hidden="true"
              >
                01
              </div>

              <div className="relative z-10">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0a3d91]">
                  TOTAL PRODUCTIVE MAINTENANCE
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-[#0e1b38] tracking-tight mt-1.5 leading-none">
                  TPM
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed max-w-lg">
                  A holistic approach to maximize equipment effectiveness, enhance productivity, and build a
                  culture of proactive maintenance.
                </p>

                <div className="mt-6">
                  <Link
                    href="/service4"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0a3d91] hover:text-[#082d64] group"
                  >
                    <ArrowRightCircle className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#0a3d91]" />
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02: TOYOTA PRODUCTION SYSTEM (TPS & KAIZEN) */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#D9E3EF]"
            style={{ backgroundColor: "#EEF3F8" }}
          >
            {/* Left Text Content with Stylized Watermark */}
            <div className="lg:col-span-7 order-2 lg:order-1 p-8 sm:p-10 lg:p-14 relative flex flex-col justify-center">
              {/* Background Number Watermark 02 */}
              <div
                className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 font-mono text-[120px] sm:text-[160px] font-black select-none pointer-events-none leading-none tracking-tighter"
                style={{ color: "rgba(10, 61, 145, 0.08)" }}
                aria-hidden="true"
              >
                02
              </div>

              <div className="relative z-10">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0a3d91]">
                  TOYOTA PRODUCTION SYSTEM
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-[#0e1b38] tracking-tight mt-1.5 leading-none">
                  TPS &amp; KAIZEN
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed max-w-lg">
                  A proven philosophy for eliminating waste, improving processes, and achieving sustainable
                  growth through continuous improvement.
                </p>

                <div className="mt-6">
                  <Link
                    href="/service1"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0a3d91] hover:text-[#082d64] group"
                  >
                    <ArrowRightCircle className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#0a3d91]" />
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image with Modern Slanted Diagonal Cut */}
            <div
              className="lg:col-span-5 order-1 lg:order-2 relative w-full h-64 sm:h-80 lg:h-[360px] overflow-hidden"
              style={{
                clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)"
              }}
            >
              <Image
                src="/images/training/tps_kaizen.jpg"
                alt="Toyota Production System - TPS and Kaizen Shopfloor Team Collaboration"
                fill
                unoptimized
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. BOTTOM INDUSTRIAL HERITAGE BANNER                          */}
      {/* ============================================================== */}
      <section
        className="relative w-full bg-[#030919] overflow-hidden flex items-center"
        style={{ minHeight: "360px" }}
      >
        {/* Background Refinery / Plant at Night */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/training/japanese_operational_heritage.png"
            alt="Japanese Operational Heritage - Night Industrial Excellence"
            fill
            unoptimized
            className="object-cover object-right"
          />
        </div>

        {/* High-Contrast Left Gradient Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #040c1d 0%, #061433 45%, rgba(6, 20, 51, 0.5) 75%, transparent 100%)"
          }}
        />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-tight">
              Building excellence through knowledge, discipline and continuous improvement.
            </h2>

            <div className="w-14 h-[2px] bg-[#1d64d8] my-5" />

            <div className="flex items-start sm:items-center gap-3.5 pt-1">
              <div className="h-7 w-7 rounded-full bg-blue-600/30 border border-blue-400 text-blue-300 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 shadow-inner">
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
                  JAPANESE OPERATIONAL HERITAGE
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-0.5 font-normal">
                  Mentored by JIPM and JICA TPM/TPS Gurus (Murase San, Prof. Shiba, Furuhashi San &amp; Suzuki
                  San)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}

