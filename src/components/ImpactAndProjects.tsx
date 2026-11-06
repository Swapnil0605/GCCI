"use client";

import Image from "next/image";
import Link from "next/link";
import { projectHighlights } from "@/data/news";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Layers,
  Settings,
  Activity,
  Award
} from "lucide-react";

export default function ImpactAndProjects() {
  const caseStudies = [
    {
      title: "AI-Driven Vision Inspection for Steel Tube & Strip Processing",
      category: "Computer Vision & Quality",
      impact: "100% Surface Defect Detection",
      summary:
        "Designed and commissioned an intelligent automated vision inspection system capable of real-time sub-millimeter defect detection at operational rolling line speeds, eliminating manual inspection delays and scrap.",
      icon: <Eye className="h-5 w-5 text-blue-600" />,
      badges: ["Deep Learning Models", "Sub-Millimeter Resolution", "Zero Defect Outflow"]
    },
    {
      title: "Custom Special Purpose Machine (SPM) Development",
      category: "Precision Engineering & Assembly",
      impact: "Cycle Time & Scrap Optimization",
      summary:
        "Coordinated engineering design and fabrication of tailor-made SPMs for complex machining and assembly operations, overcoming chronic line bottlenecks and achieving high repeatability.",
      icon: <Settings className="h-5 w-5 text-blue-600" />,
      badges: ["Custom Tooling", "PLC & Safety Integration", "Ergonomic Layout"]
    },
    {
      title: "Cloud-Based 8-Pillar TPM SaaS Implementation",
      category: "Digital Transformation & JIPM",
      impact: "End-to-End Shop Floor Visibility",
      summary:
        "Digitized all 8 TPM pillars with real-time operator tagging apps, automated MTTR/MTBF calculation, and executive dashboard reviews, preparing manufacturing facilities for JIPM award benchmarks.",
      icon: <Layers className="h-5 w-5 text-blue-600" />,
      badges: ["8 Pillars Covered", "Mobile Kaizen Tags", "Multi-Plant SaaS"]
    },
    {
      title: "IoT Sensor Integration & Predictive Maintenance (PdM)",
      category: "Industrial IoT & Machine Learning",
      impact: "Zero Unplanned Breakdowns",
      summary:
        "Installed wireless vibration and thermal sensor arrays on critical drives and rolling mills, paired with AI anomaly detection algorithms that alert technicians weeks before component failure.",
      icon: <Activity className="h-5 w-5 text-blue-600" />,
      badges: ["Vibration Analysis", "Continuous Monitoring", "ERP Maintenance Sync"]
    }
  ];

  return (
    <section id="impact" className="relative w-full bg-slate-50 py-20 lg:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded bg-blue-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
              <Award className="h-3.5 w-3.5 text-blue-700" />
              <span>Proven Industrial Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Approved Engineering Highlights & Track Record
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 leading-relaxed">
            Real engineering interventions deployed in active automotive, steel tube, and manufacturing facilities across India.
          </p>
        </div>

        {/* Top Metric Strip */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {projectHighlights.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#0A387C] tracking-tight">
                  {item.metric}
                </span>
                <div className="mt-1 text-sm font-bold text-slate-900">
                  {item.label}
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Case Studies */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm transition-all hover:border-blue-400 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                    {study.category}
                  </span>
                  <div className="rounded-lg bg-slate-100 p-2 text-slate-700">
                    {study.icon}
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {study.title}
                </h3>

                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Key Result: {study.impact}</span>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {study.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {study.badges.map((b, i) => (
                    <span
                      key={i}
                      className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <span>Discuss Similar Project Requirements</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
