"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const service1Data = [
  {
    title: "Advocacy",
    description: "Promoting and guiding organizations toward world-class manufacturing and operational excellence.",
    description1: "Sub-Services:",
    subServices: [
      "Awareness Programs on TPM / TQM / Lean / TPS",
      "Benchmarking Studies & Best-Practice Sharing",
      "Leadership Advisory for Business Excellence Journey",
      "Policy Guidance for Manufacturing Competitiveness",
      "Steering Committee Facilitation for TPM/TQM Deployment"
    ]
  },
  {
    title: "Assessment",
    description: "Structured evaluations for performance, capability improvement, and certification readiness.",
    description1: "Sub-Services:",
    subServices: [
      "TPM Maturity Assessment (JIPM Model Compatible)",
      "TQM System Assessment",
      "Lean Maturity Assessment",
      "TPS Assessment",
      "Business Excellence Assessment",
      "Gap Analysis & Roadmap Creation",
      "Pre-Audit & Certification Readiness Checks"
    ]
  },
  {
    title: "Capability Development",
    description: "Training & skill-building to enhance competence at all organizational levels.",
    description1: "Sub-Services:",
    subServices: [
      "TPM Pillar Training",
      "Lean Training",
      "TQM Training",
      "TPS Training",
      "Leadership Development",
      "Business Excellence Models",
      "Industry 4.0 Readiness"
    ]
  },
  {
    title: "Recognition of Competitiveness",
    description: "Supporting organizations in achieving national/international recognition.",
    description1: "Sub-Services:",
    subServices: [
      "TPM Award Guidance",
      "Deming Prize Preparation",
      "Business Excellence Awards",
      "Internal Recognition Systems",
      "Documentation & Dossier Review",
      "Mock Audits"
    ]
  }
];

export default function Service1Page() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = service1Data[activeIdx];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero
        title="Services"
        subtitle="Advocacy / Assessment / Capability Development / Recognition of Competitiveness"
        bgImage="/public/service_hero.jpg"
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          {/* Services Box Wrapper */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12">
            {service1Data.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`p-6 rounded-xl border text-left transition-all font-bold text-sm sm:text-base cursor-pointer ${
                  activeIdx === idx
                    ? "bg-[#0a3d91] text-white border-[#0a3d91] shadow-md scale-102"
                    : "bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:bg-slate-50"
                }`}
              >
                <div className="font-mono text-xs opacity-70 mb-2">0{idx + 1}</div>
                {s.title}
              </button>
            ))}
          </div>

          {/* Active Service Info Panel */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a3d91] bg-blue-50 px-3 py-1 rounded">
              Selected Service Focus
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
              {activeService.title}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {activeService.description}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                {activeService.description1}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.subServices.map((sub, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 p-3.5 text-xs sm:text-sm text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#0a3d91] shrink-0 mt-0.5" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Ready to initiate this operational capability at your plant?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a3d91] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#082d64] transition-colors"
              >
                <span>Request Assessment Proposal</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      <Footer />
    </main>
  );
}
