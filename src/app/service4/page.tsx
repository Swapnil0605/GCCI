"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Layers } from "lucide-react";

const service4Modules = [
  "Autonomous Maintenance Module (AM Steps, Checklists, Tags)",
  "Planned Maintenance Module (Schedules, Life Analysis, PM KPIs)",
  "Quality Maintenance Module (Defect Mapping, 4M, QC Tools)",
  "Kobetsu Kaizen Module (Kaizen, Cost Saving Projects)",
  "Focused Improvement Module (Chronic Loss Analysis, OEE)",
  "Training & Development Module (Skill Matrix, JH/JI Cards)",
  "Safety / Environment Module",
  "Digital Dashboards for TPC, TPI, TPA Reviews",
  "Mobile App for TPM Activities (Photos, Reports, Audits)",
  "Cloud-Based & Secure Subscription Platform"
];

export default function Service4Page() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero
        title="Services"
        subtitle="TPM Software – Subscription Based"
        bgImage="/images/heroes/service_hero_2.jpg"
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          {/* Main Info Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-50 p-2.5 text-[#0a3d91]">
                <Layers className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a3d91]">
                All 8 TPM Pillars Digitalized
              </span>
            </div>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
              TPM Software – Subscription Based
            </h2>

            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Comprehensive digital platform supporting all TPM pillars, available on annual/monthly subscription.
              Empowers plant operations, maintenance teams, and corporate quality steering committees with real-time
              visibility and paperless shop floor execution.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Sub-Services & Integrated Modules:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service4Modules.map((moduleName, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 p-3.5 text-xs sm:text-sm text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#0a3d91] shrink-0 mt-0.5" />
                    <span>{moduleName}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Ready to pilot the GCCI TPM Digital Suite across your manufacturing plants?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a3d91] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#082d64] transition-colors"
              >
                <span>Request Live Demo & Subscription Quote</span>
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
