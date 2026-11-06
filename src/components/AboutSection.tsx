"use client";

import { useState } from "react";
import Image from "next/image";
import { companyData } from "@/data/company";
import {
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Factory,
  Globe,
  Quote,
  ShieldCheck,
  TrendingUp,
  Users
} from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"overview" | "leadership" | "timeline" | "certifications">("overview");

  return (
    <section id="about" className="relative w-full bg-slate-50 py-20 lg:py-28 border-b border-slate-200">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded bg-blue-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-700" />
              <span>About GCCI International</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              A Legacy of Industrial Excellence & Transformation
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                activeTab === "overview"
                  ? "bg-[#0A387C] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("leadership")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                activeTab === "leadership"
                  ? "bg-[#0A387C] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Leadership
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                activeTab === "timeline"
                  ? "bg-[#0A387C] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Journey (2017-2025)
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                activeTab === "certifications"
                  ? "bg-[#0A387C] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Certifications
            </button>
          </div>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Consortium for End-to-End Business Solutions
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                From Pune to the World: Delivering High-Impact Industrial Consulting & Technology
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Founded in 2017 with a vision of delivering end-to-end solutions through global expertise,
                GCCI has evolved into a multifaceted enterprise. In 2023, we expanded and rebranded as{" "}
                <strong className="text-slate-900">GCCI International LLP</strong>.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                As a specialized consortium in <strong className="text-slate-900">Business Consulting</strong>,{" "}
                <strong className="text-slate-900">Process Automation Solutions</strong>,{" "}
                <strong className="text-slate-900">Vision-Based Automated Inspection</strong>, and{" "}
                <strong className="text-slate-900">ERW Steel Tube Mills</strong>, GCCI combines extensive operational
                expertise and international partnerships to elevate plant performance, product quality, and cost
                competitiveness.
              </p>

              {/* 4 Pillars Mini-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="rounded bg-blue-50 p-2 text-blue-700">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Business Consulting</h4>
                    <p className="text-xs text-slate-500 mt-0.5">TPM, TQM, Lean & JIPM Award enablement.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="rounded bg-blue-50 p-2 text-blue-700">
                    <Factory className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Process Automation</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Custom SPMs and plant-floor digital control.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="rounded bg-blue-50 p-2 text-blue-700">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Vision Inspection</h4>
                    <p className="text-xs text-slate-500 mt-0.5">100% surface defect AI inspection systems.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="rounded bg-blue-50 p-2 text-blue-700">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">ERW Steel Tube Mills</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Specialized tube mill process engineering.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <blockquote className="rounded-r-lg border-l-4 border-blue-700 bg-blue-50/70 p-4 text-sm italic text-slate-700">
                  &ldquo;Driven by Trust, Guided by Principle, Perfected with Meticulousness.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/about/why_choose_us.jpg"
                    alt="Why Choose GCCI"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                      Established 2017 • Rebranded 2023
                    </div>
                    <div className="text-lg font-bold">
                      GCCI International LLP — Transforming Organizations Worldwide
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">Corporate Incorporation</span>
                    <span>GCCI International LLP</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">Corporate Office</span>
                    <span>Bibwewadi, Pune, Maharashtra</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">International Presence</span>
                    <span>Japan, Germany, USA, Australia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Leadership */}
        {activeTab === "leadership" && (
          <div id="leadership" className="mt-12 space-y-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Board of Directors – The Minds Behind the Mission
              </h3>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Meet the leadership steering GCCI&apos;s global alliances, operational excellence programs, and ethical governance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyData.leaders.map((leader, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-5 pb-6 border-b border-slate-100">
                      <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-2 border-blue-600 shrink-0">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="inline-block rounded bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 mb-1">
                          {leader.role}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-900">{leader.name}</h4>
                        <div className="text-xs text-slate-500">GCCI International LLP</div>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-slate-600 leading-relaxed">
                      {leader.bio}
                    </p>

                    <div className="mt-6 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        Core Competencies & Impact:
                      </div>
                      {leader.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Executive Leadership</span>
                    <span className="font-semibold text-blue-700">Direct Governance</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Timeline */}
        {activeTab === "timeline" && (
          <div className="mt-12 space-y-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Our Evolution: 2017 to Present
              </h3>
              <p className="mt-2 text-slate-600 text-sm">
                A structured progression from regional operational consulting to an international technology and software consortium.
              </p>
            </div>

            <div className="relative border-l-2 border-blue-200 ml-4 pl-6 sm:pl-8 space-y-10">
              {companyData.timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm ring-4 ring-white group-hover:scale-110 transition-transform">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all group-hover:border-blue-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                      <span className="inline-block rounded bg-blue-50 px-2.5 py-1 text-xs font-extrabold text-blue-700">
                        YEAR {item.year}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">Milestone #{idx + 1}</span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mt-1">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Certifications & JIPM Standards */}
        {activeTab === "certifications" && (
          <div id="awards" className="mt-12 space-y-10">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Recognized for Operational Excellence & Industry Standards
              </h3>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Global Corporate Council India (GCCI) has built an uncompromised reputation for driving operational
                turnarounds across diverse manufacturing sectors. Our dedication to quality, innovation, and global best practices
                is consistently validated by trusted partners and JIPM standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certificate Card 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="relative h-64 sm:h-72 w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                  <Image
                    src="/images/about/certificate_1.jpeg"
                    alt="GCCI Certification 1"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-4">
                  <span className="rounded bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                    Verified Credential
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-2">
                    Professional Recognition & Certification
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Recognized for driving rigorous capability development and adhering to international benchmarks.
                  </p>
                </div>
              </div>

              {/* Certificate Card 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="relative h-64 sm:h-72 w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                  <Image
                    src="/images/about/certificate_2.jpg"
                    alt="GCCI Certification 2"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-4">
                  <span className="rounded bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                    Industry Award
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-2">
                    Excellence in Operational Diagnostics
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Endorsed for structured assessment frameworks compatible with JIPM and Lean deployment models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
