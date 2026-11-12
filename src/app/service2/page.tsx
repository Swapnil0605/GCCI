"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const service2Data = [
  {
    title: "Liaison – Global Expertise",
    description: "Connecting Indian industries with global OEMs and world-class technology partners.",
    description1: "Sub-Services:",
    subServices: [
      "International Technology Partnership Facilitation",
      "Liaison with Global Equipment Manufacturers",
      "Expert Exchange & Knowledge Transfer Programs",
      "Global Vendor Identification & Technical Evaluation",
      "Joint Technology Development Support",
      "Import Assistance for Specialized Industrial Machinery"
    ]
  },
  {
    title: "Technology Support",
    description: "Advanced technical solutions to upgrade plant performance and adopt modern manufacturing technology.",
    description1: "Sub-Services:",
    subServices: [
      "Technology Upgradation Consulting",
      "Custom Machine Design Support",
      "Smart Manufacturing Integration (IoT / IIoT / MES / OEE)",
      "Process Engineering & Digital Transformation",
      "Feasibility Studies & ROI Analysis",
      "Machine Health Diagnostics & Performance Monitoring"
    ]
  },
  {
    title: "Industry Automation",
    description: "Automation solutions for quality, productivity, safety, and operational reliability.",
    description1: "Sub-Services:",
    subServices: [
      "PLC/SCADA Automation",
      "Robotics Integration",
      "End-of-Line Automation Solutions",
      "AI-Based Automated Quality Control",
      "Metrology Automation",
      "Automated Conveyor Systems"
    ]
  },
  {
    title: "Vision Inspection Systems",
    description: "AI-driven inspection systems for zero-defect manufacturing.",
    description1: "Sub-Services:",
    subServices: [
      "Inline Vision Inspection",
      "Surface Defect Detection",
      "Dimensional Accuracy Verification",
      "High-Speed Camera Inspection",
      "Barcode & OCR Verification",
      "AI/ML Defect Classification"
    ]
  },
  {
    title: "Special Purpose Machines (SPM)",
    description: "Custom-built automation machines designed for unique plant requirements.",
    description1: "Sub-Services:",
    subServices: [
      "Tailor-Made SPM Design",
      "Automated Assembly & Testing",
      "Servo-Controlled Systems",
      "Auto-Gauging / Auto-Feeding",
      "Machine Retrofit & Upgrade",
      "Mechanical + Electrical Integration"
    ]
  },
  {
    title: "Steel Tube & Strip Mill Equipment Support",
    description: "Comprehensive solutions for tube mill and strip processing lines.",
    description1: "Sub-Services:",
    subServices: [
      "Equipment Selection Support",
      "Tube Mill Line Assistance",
      "Coil Handling & Slitting Lines",
      "NDT System Integration",
      "Online Thickness Monitoring",
      "Process Optimization"
    ]
  },
  {
    title: "Processing Machines – Manufacturing Support",
    description: "End-to-end support for developing and optimizing processing machines.",
    description1: "Sub-Services:",
    subServices: [
      "Vendor Coordination",
      "Processing Line Design",
      "Tooling & Fixture Development",
      "Automation Upgrades",
      "OEE Improvement",
      "AMC & Obsolescence Management"
    ]
  }
];

export default function Service2Page() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = service2Data[activeIdx];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero
        title="Services"
        subtitle="Liaison Global Expertise / Technology Support / Industry Automation"
        bgImage="/public/service2.jpg"
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          {/* Services Box Wrapper */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-12">
            {service2Data.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`p-5 rounded-xl border text-left transition-all font-bold text-xs sm:text-sm cursor-pointer ${
                  activeIdx === idx
                    ? "bg-[#0a3d91] text-white border-[#0a3d91] shadow-md scale-102"
                    : "bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:bg-slate-50"
                }`}
              >
                <div className="font-mono text-xs opacity-70 mb-1.5">0{idx + 1}</div>
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
                Need customized automation, SPM development, or tube mill consulting?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a3d91] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#082d64] transition-colors"
              >
                <span>Consult Our Engineering Team</span>
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
