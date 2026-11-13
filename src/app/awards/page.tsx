"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Globe2,
  ExternalLink,
  X,
  ZoomIn,
  Building2,
  FileCheck2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu
} from "lucide-react";

interface Credential {
  id: string;
  category: "accreditation" | "statutory" | "jipm-awards";
  categoryLabel: string;
  title: string;
  issuer: string;
  issueDate: string;
  verifiedNumber: string;
  summary: string;
  impactMetrics: string[];
  keyHighlights: string[];
  image: string;
  isCertificateDocument: boolean;
}

const credentialsData: Credential[] = [
  {
    id: "jipm-specialist",
    category: "accreditation",
    categoryLabel: "International Accreditation",
    title: "JIPM Certified TPM Specialist",
    issuer: "Japan Institute of Plant Maintenance (JIPM), Tokyo, Japan",
    issueDate: "16 October 2025",
    verifiedNumber: "JIPM-TPM-IND-2025-089",
    summary:
      "Globally recognized certification validating premier mastery of classical Japanese Total Productive Maintenance (TPM). Authorizes comprehensive 8-pillar assessments, Autonomous Maintenance (JH) audit readiness, and World-Class Manufacturing transformation.",
    impactMetrics: [
      "Zero Breakdown & Zero Accident Framework Certification",
      "Full 8-Pillar TPM Deployment Mastery",
      "Certified Third-Party JIPM Audit Alignment"
    ],
    keyHighlights: [
      "Autonomous Maintenance (JH) Steps 1–7 coaching authority",
      "Kobetsu Kaizen (Individual Improvement) loss elimination trees",
      "Standardized Planned Maintenance & Quality Maintenance matrices",
      "Direct alignment with Japanese TPM Assessment Councils"
    ],
    image: "/images/about/certificate_1.jpeg",
    isCertificateDocument: true
  },
  {
    id: "govt-gst-reg",
    category: "statutory",
    categoryLabel: "Statutory & Governance",
    title: "Government of India Form GST REG-06",
    issuer: "Government of India • Ministry of Finance",
    issueDate: "06 September 2017",
    verifiedNumber: "27AAHFG3380D1ZX (State: Maharashtra)",
    summary:
      "Statutory Certificate of Registration under the Central Goods and Services Tax Act in India. Formally establishes GCCI International LLP as an audited, legally compliant, and transparent corporate consulting and technology enterprise.",
    impactMetrics: [
      "Registered Under CGST & SGST Acts (Government of India)",
      "Strict Statutory Corporate Governance Alignment",
      "Headquartered in Pune Industrial Corridor, Maharashtra"
    ],
    keyHighlights: [
      "Authorized for pan-India consulting and cross-border liaison",
      "Complete fiscal transparency and audited regulatory status",
      "Compliant with international contracting and OEM procurement standards",
      "Registered corporate headquarters in Pune, India"
    ],
    image: "/images/about/certificate_2.jpg",
    isCertificateDocument: true
  },
  {
    id: "jipm-69-awards",
    category: "jipm-awards",
    categoryLabel: "Facilitated Awards",
    title: "69+ Facilitated International JIPM TPM Awards",
    issuer: "Japan Institute of Plant Maintenance (JIPM, Tokyo) • Client Plants",
    issueDate: "2017 – Present",
    verifiedNumber: "69+ Certified Manufacturing Plants in Japan",
    summary:
      "A historic industrial benchmark: GCCI's continuous gemba coaching and rigorous TPM pillar deployment have facilitated over 69 prestigious JIPM TPM Awards for tier-1 automotive, ERW steel tube mills, and FMCG manufacturing plants across India.",
    impactMetrics: [
      "69+ Client Plants Formally Certified by JIPM in Japan",
      "Over 40% Average OEE Enhancement Documented",
      "Zero Defect & Zero Breakdown Milestone Approvals"
    ],
    keyHighlights: [
      "TPM Excellence Category A & Category B Award facilitation",
      "Rigorous pre-audit clinics with veteran Japanese assessors",
      "Cross-sector honors: Automotive, Steel Tubing, Heavy Fabrication, FMCG",
      "Endorsement from senior JIPM and JICA master examiners"
    ],
    image: "/images/about/2022.jpg",
    isCertificateDocument: false
  },
  {
    id: "bilateral-japan-eu",
    category: "accreditation",
    categoryLabel: "International Accreditation",
    title: "Bilateral Technology Alliance & Sensei Liaison",
    issuer: "M/s. Yoshi Kenkyusho (Japan) & European Technology Partners",
    issueDate: "2020 – Present",
    verifiedNumber: "Bilateral Cooperation Desk • Tokyo & Munich",
    summary:
      "Formal bilateral technology and mentorship credentials established with Japanese manufacturing senseis and European machine engineering consortiums, facilitating direct technology transfer for automated Special Purpose Machines (SPMs) and precision manufacturing.",
    impactMetrics: [
      "Direct Mentorship by Japanese JIPM Lead Assessors",
      "Automated SPM Engineering & Precision Machine Import",
      "Cross-Border Capability Training for Shop-Floor Leadership"
    ],
    keyHighlights: [
      "Heritage connection to late JIPM Lead Assessor Mr. Yoshitaka Murase",
      "Technology cooperation for precision tube mill automation",
      "Exchange programs and expert plant diagnostics across Asia and Europe",
      "Unified alignment with international TPS (Toyota Production System) guidelines"
    ],
    image: "/images/about/2020.jpg",
    isCertificateDocument: false
  }
];

export default function AwardsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "accreditation" | "statutory" | "jipm-awards"
  >("all");
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  const filteredCredentials =
    selectedCategory === "all"
      ? credentialsData
      : credentialsData.filter((c) => c.category === selectedCategory);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ================================================================= */}
      {/* 1. HERO CANVAS                                                    */}
      {/* ================================================================= */}
      <PageHero
        title="Awards And Certifications"
        subtitle="Recognized for Excellence, Celebrated for Innovation"
        bgImage="/images/about/awards_hero.jpg"
      />

      {/* ================================================================= */}
      {/* 2. EXECUTIVE TRUST & CREDENTIALS INTRO RIBBON                     */}
      {/* ================================================================= */}
      <section className="relative w-full bg-slate-900 text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="border-l-2 border-[#1653e0] pl-5">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                69+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-200">
                JIPM Awards Facilitated
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Mentoring Indian manufacturers to global Japanese certification.
              </p>
            </div>

            <div className="border-l-2 border-[#1653e0] pl-5">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                100%
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-200">
                Statutory Compliance
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Formally registered with the Government of India since 2017.
              </p>
            </div>

            <div className="border-l-2 border-[#1653e0] pl-5">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                16+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-200">
                Japanese & EU Senseis
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Bilateral technical bridges with world-leading industrial masters.
              </p>
            </div>

            <div className="border-l-2 border-[#1653e0] pl-5">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                8 / 8
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-200">
                TPM Pillars Certified
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Comprehensive consulting across all 8 classical TPM disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. MAIN SHOWCASE SECTION WITH CATEGORY FILTER                     */}
      {/* ================================================================= */}
      <section className="py-20 sm:py-28 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[#0a387c] bg-blue-50 border border-blue-200/60 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="h-3.5 w-3.5 text-[#0a387c]" />
              Verified Institutional Credentials
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-normal tracking-tight">
              Validated by Global Authorities
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every certification, statutory registration, and award facilitated by GCCI International LLP reflects our
              disciplined adherence to the highest standards of ethics, Japanese manufacturing rigor, and measurable client results.
            </p>
          </div>

          {/* Interactive Filter Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#0a387c] text-white shadow-md font-bold"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              All Credentials ({credentialsData.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("accreditation")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === "accreditation"
                  ? "bg-[#0a387c] text-white shadow-md font-bold"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              International Accreditations
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("statutory")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === "statutory"
                  ? "bg-[#0a387c] text-white shadow-md font-bold"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              Government & Statutory
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("jipm-awards")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === "jipm-awards"
                  ? "bg-[#0a387c] text-white shadow-md font-bold"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              Facilitated JIPM Awards (69+)
            </button>
          </div>

          {/* Credential Cards Grid */}
          <div className="space-y-12 lg:space-y-16">
            {filteredCredentials.map((cred, idx) => (
              <div
                key={cred.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* ---------------------------------------------------- */}
                {/* Visual / Certificate Preview Column                   */}
                {/* ---------------------------------------------------- */}
                <div className="lg:col-span-5 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-5 sm:p-8 flex flex-col justify-between relative group">
                  <div
                    onClick={() => setModalImage({ src: cred.image, title: cred.title })}
                    className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-xl overflow-hidden bg-white border border-slate-200 shadow-2xs cursor-pointer"
                  >
                    <Image
                      src={cred.image}
                      alt={cred.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Desktop Hover pill */}
                    <div className="hidden sm:flex absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center gap-2 text-white text-xs font-bold uppercase tracking-wider pointer-events-none">
                      <span className="bg-[#0a387c] px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <ZoomIn className="h-4 w-4" />
                        Inspect Document
                      </span>
                    </div>

                    {/* Mobile Tap Pill */}
                    <div className="sm:hidden absolute bottom-2 right-2 bg-[#0a387c]/90 text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <ZoomIn className="h-3 w-3" />
                      <span>Tap to zoom</span>
                    </div>
                  </div>

                  {/* Verification Seal Footer */}
                  <div className="mt-4 sm:mt-5 flex items-center justify-between text-xs gap-2">
                    <span className="font-mono text-slate-500 font-semibold truncate max-w-[200px] sm:max-w-[240px]">
                      {cred.verifiedNumber}
                    </span>
                    <button
                      type="button"
                      onClick={() => setModalImage({ src: cred.image, title: cred.title })}
                      className="text-[#0a387c] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <span>Full View</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* ---------------------------------------------------- */}
                {/* Narrative & Credential Specifications Column          */}
                {/* ---------------------------------------------------- */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-bold text-[#0a387c] uppercase tracking-wider">
                        {cred.categoryLabel}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded">
                        Issue Date: {cred.issueDate}
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-normal tracking-tight">
                      {cred.title}
                    </h3>
                    <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-1.5">
                      <Building2 className="h-4 w-4 text-[#0a387c] shrink-0" />
                      <span>{cred.issuer}</span>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                      {cred.summary}
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Institutional Scope & Compliance:
                      </div>
                      {cred.keyHighlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metric Chips */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                    {cred.impactMetrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-md"
                      >
                        ✓ {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. STANDARDS & FRAMEWORKS ALIGNMENT STRIP                         */}
      {/* ================================================================= */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0a387c]">
              GLOBAL PROTOCOLS
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-slate-900 font-normal">
              Frameworks & Methodologies We Uphold
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Our consulting division adheres to rigorous international benchmarks, ensuring zero breakdown, zero accident,
              and maximum Overall Equipment Effectiveness (OEE).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#0a387c] hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-lg bg-blue-100/80 text-[#0a387c] flex items-center justify-center font-extrabold text-sm mb-4">
                JIPM
              </div>
              <h3 className="text-base font-bold text-slate-900">Japan Institute of Plant Maintenance</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full 8-Pillar TPM methodology, loss deployment trees, Kobetsu Kaizen registers, and international audit readiness.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#0a387c] hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-lg bg-blue-100/80 text-[#0a387c] flex items-center justify-center font-extrabold text-sm mb-4">
                TPS
              </div>
              <h3 className="text-base font-bold text-slate-900">Toyota Production System</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Just-In-Time (JIT), Jidoka autonomation, Heijunka production smoothing, and direct shop-floor gemba coaching.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#0a387c] hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-lg bg-blue-100/80 text-[#0a387c] flex items-center justify-center font-extrabold text-sm mb-4">
                JICA
              </div>
              <h3 className="text-base font-bold text-slate-900">Japan International Cooperation</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bilateral exchange with senior Japanese technical advisers for specialized tube mill automation and manufacturing turnarounds.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#0a387c] hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-lg bg-blue-100/80 text-[#0a387c] flex items-center justify-center font-extrabold text-sm mb-4">
                ISO
              </div>
              <h3 className="text-base font-bold text-slate-900">ISO 9001:2015 Alignment</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Systematic quality management, corrective and preventive action (CAPA) routines, and traceable shop-floor governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 5. CALL TO ACTION FOR JIPM CERTIFICATION (With Background Video)  */}
      {/* ================================================================= */}
      <CtaSection
        badge="PARTNER WITH GCCI INTERNATIONAL"
        title="Ready to Achieve World-Class JIPM Certification?"
        description="From initial plant diagnostic audits to full JIPM TPM Award facilitation and smart Industry 4.0 automation, our certified specialists will guide your leadership team every step of the way."
        primaryBtnText="Consult Our TPM Assessors"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore Our Journey"
        secondaryBtnHref="/journey"
      />

      {/* ================================================================= */}
      {/* 6. FULLSCREEN CERTIFICATE LIGHTBOX MODAL                          */}
      {/* ================================================================= */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl overflow-hidden p-3 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100">
              <span className="text-sm font-bold text-slate-800 truncate pr-4">
                {modalImage.title}
              </span>
              <button
                type="button"
                onClick={() => setModalImage(null)}
                className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Certificate Image */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] bg-slate-50 flex items-center justify-center">
              <Image
                src={modalImage.src}
                alt={modalImage.title}
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}