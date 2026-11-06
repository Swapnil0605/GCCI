"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const service3Data = [
  {
    title: "Maintenance Software Solutions",
    description: "Digitizing maintenance operations to improve equipment reliability, uptime, and cost control.",
    description1: "Sub-Services:",
    subServices: [
      "Computerized Maintenance Management System (CMMS)",
      "Preventive Maintenance Scheduling",
      "Breakdown & Root Cause Analysis Tracking",
      "Spare Parts Inventory Management",
      "Digital Work Orders & Mobile Maintenance Apps",
      "Maintenance Performance Dashboards (MTTR, MTBF, %PM)",
      "AMC & Warranty Tracking System",
      "Integration with ERP, SCADA, PLC"
    ]
  },
  {
    title: "IT Support Services",
    description: "Complete IT enablement for manufacturing and operational excellence.",
    description1: "Sub-Services:",
    subServices: [
      "IT Infrastructure Setup & Maintenance",
      "Server & Network Management",
      "Data Backup, Recovery & Security Solutions",
      "User Access, Email & ERP Support",
      "Industrial Systems IT Integration",
      "On-Site & Remote IT Helpdesk",
      "Cybersecurity Compliance Support",
      "Hardware/Software Installation & AMC"
    ]
  },
  {
    title: "IoT (Internet of Things) Solutions",
    description: "Smart connectivity for machines, data visibility, and real-time performance monitoring.",
    description1: "Sub-Services:",
    subServices: [
      "IoT Device Integration with Plant Equipment",
      "Cloud-Based Data Logging",
      "OEE Real-Time Monitoring Systems",
      "Machine Condition Monitoring",
      "Predictive Maintenance Using IoT Sensors",
      "Utility Monitoring Systems",
      "Custom IoT Dashboards",
      "Edge Device Integration with TPM Software"
    ]
  },
  {
    title: "AI & Machine Learning Solutions",
    description: "AI-driven analytics to improve efficiency, quality, and decision-making.",
    description1: "Sub-Services:",
    subServices: [
      "AI-Powered Predictive Maintenance Models",
      "AI-Based Quality Defect Detection",
      "Real-Time Anomaly Detection",
      "Production Forecasting Algorithms",
      "Advanced TPM / TQM / Lean Analytics",
      "Energy Optimization using AI",
      "AI Chatbot for TPM Support",
      "AI-Enabled OEE & Loss Analysis"
    ]
  },
  {
    title: "Digital Transformation for Operational Excellence",
    description: "End-to-end digitalization aligned with TPM, Lean, TQM, and Business Excellence.",
    description1: "Sub-Services:",
    subServices: [
      "Paperless Manufacturing",
      "Digital SOPs & Audit Systems",
      "Digital Skill Matrix Tracking",
      "Workflow Automation",
      "Mobile Apps for Kaizen & 5S",
      "Role-Based Dashboards",
      "MES / ERP / SCADA Integration"
    ]
  }
];

export default function Service3Page() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = service3Data[activeIdx];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero
        title="Services"
        subtitle="Maintenance Software / IT Support / IoT / AI"
        bgImage="/public/service3.jpg"
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          {/* Services Box Wrapper */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pb-12">
            {service3Data.map((s, idx) => (
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
                Interested in deploying CMMS, predictive IoT sensor arrays, or AI models?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a3d91] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#082d64] transition-colors"
              >
                <span>Request Software Demo & Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
