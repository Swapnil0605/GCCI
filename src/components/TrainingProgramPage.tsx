"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import {
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  Download,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Award,
  Users,
  Building,
  X
} from "lucide-react";



const moduleData = [
  {
    moduleNum: "MODULE 1",
    title: "PROGRAM COVERAGE",
    points: [
      "Corporate and Plant level TPM Management Strategies & Systems for TPM advancement.",
      "Policy Management & Strategies towards Vision, Mission.",
      "TPM Synchronization with various Business Processes.",
      "TPM Hybrid Org. structure and its approach.",
      "Hoshin Kanri with Chain linking function.",
      "TPM objectives & all Pillar objectives, KPI and KAI, review mechanism."
    ]
  },
  {
    moduleNum: "MODULE 2",
    title: "THE KEY OFFERING INCLUDED",
    points: [
      "An Opportunity to learn an introductory session about Evolution and deepening of TPM Based on Fusion of TPM and TPS.",
      "5-week Online follow-up Course worth of Rs. 1,20,000.",
      "Course Certificate issued by GCCI TPM Consulting Company.",
      "Training Course Material with Exercise Formats and Stationeries.",
      "Accommodation in a 5-star equivalent Hotel: Morning Breakfast + Lunch + Dinner + 2 Tea & Evening 1 High Tea.",
      "Pocket Planner diary + File or Bag for Document Storage."
    ]
  },
  {
    moduleNum: "MODULE 3",
    title: "WHY LEARN WITH GCCI",
    points: [
      "The design of this training program and course is an influential curriculum envisioned to impart thorough knowledge to all delegates on the practical approach & implementation skills necessary to execute strategies at various levels.",
      "Subjects are led by leaders who are actively involved in and have supported various academic research at the global forefront.",
      "Join a global community & network with peers across Indian & global experts who implement TPM.",
      "Subject schedule is tailored to the needs of your organization. Earn a certified credential to evidence your learning."
    ]
  }
];

export default function TrainingProgramPage() {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSe5rGZ6b-64oLPySbqbYj7aPTFooTgZ52d4OQFLEB32L8ULBA/viewform?usp=header";

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased">
      <Header />

      {/* ================================================================= */}
      {/* 1. HERO BANNER: EXACT SPLIT HERO WITH CIRCULAR PORTAL             */}
      {/* ================================================================= */}
      <section className="relative w-full overflow-hidden bg-white min-h-[580px] lg:min-h-[640px] flex items-center border-b border-slate-200">
        {/* Left Dark Image Panel (40% desktop width) */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[42%] z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/img_30.jpeg"
              alt="Japanese Heritage & Temple - GCCI TPM BTLC"
              fill
              priority
              className="object-cover"
            />
            {/* Dark Dramatic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/50 lg:to-transparent" />
          </div>
        </div>

        {/* Circular Accent Portal (Desktop Center/Left) */}
        <div className="hidden lg:block absolute left-[26%] xl:left-[28%] top-1/2 -translate-y-1/2 z-20">
          <div className="relative w-[300px] h-[300px] xl:w-[350px] xl:h-[350px] rounded-full border-[10px] border-[#f26522] overflow-hidden shadow-2xl bg-white ring-4 ring-black/10">
            <Image
              src="/temple.jpg"
              alt="Temple & Operational Harmony"
              fill
              priority
              className="object-cover scale-105"
            />
          </div>
        </div>

        {/* Top Right Quote */}
        <div className="hidden lg:block absolute top-10 xl:top-14 right-[6%] xl:right-[8%] z-10 max-w-[340px] text-right">
          <p className="text-base xl:text-lg font-serif italic text-slate-700 leading-snug">
            &ldquo;Vision without action is a dream. Action without Vision is a nightmare.&rdquo;
          </p>
          <span className="block mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            ~ Japanese Proverb
          </span>
        </div>

        {/* Main Hero Content (Right on Desktop, Centered on Mobile) */}
        <div className="relative z-10 w-full mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Spacer for Desktop Circle */}
            <div className="hidden lg:block lg:col-span-6" />

            {/* Right Text Column */}
            <div className="lg:col-span-6 text-white lg:text-slate-900">
              {/* Pill Tag */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f26522]/15 border border-[#f26522]/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#f26522] mb-4">
                <span>EXCLUSIVE LEADERSHIP PROGRAM</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.18] text-white lg:text-[#0f172a]">
                BUSINESS TRANSFORMATION <br className="hidden sm:inline" />
                LEADERS COURSE <span className="text-[#0a387c] lg:text-[#0a387c]">(TPM BTLC)</span>
              </h1>

              {/* Subheading */}
              <p className="mt-3 text-sm sm:text-base font-semibold text-slate-300 lg:text-slate-600 tracking-wide uppercase font-mono">
                GLOBAL CORPORATE COUNCIL INDIA - GCCI / GCCI International LLP
              </p>

              {/* Mobile Japanese Quote */}
              <div className="block lg:hidden mt-6 p-4 rounded-xl bg-black/40 backdrop-blur-sm border-l-4 border-[#f26522]">
                <p className="text-sm font-serif italic text-white/90">
                  &ldquo;Vision without action is a dream. Action without Vision is a nightmare.&rdquo;
                </p>
                <span className="block mt-1 text-xs text-white/60">~ Japanese Proverb</span>
              </div>

              {/* Event Details Card */}
              <div className="mt-8 pt-6 border-t border-white/20 lg:border-slate-200 space-y-3 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-3 text-white lg:text-slate-800">
                  <span className="h-8 w-8 rounded-full bg-[#0a387c] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>JC Residency, Chokkikulam, Madurai, TN</span>
                </div>

                <div className="flex items-center gap-3 text-white lg:text-slate-800">
                  <span className="h-8 w-8 rounded-full bg-[#0a387c] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Calendar className="h-4 w-4" />
                  </span>
                  <span className="font-bold">09th to 13th Mar. 2026</span>
                </div>

                <div className="flex items-center gap-3 text-white lg:text-slate-800">
                  <span className="h-8 w-8 rounded-full bg-[#0a387c] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="h-4 w-4" />
                  </span>
                  <span>9.00 AM – 5.00 PM</span>
                </div>
              </div>

              {/* Hero CTA Quick Action */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0a387c] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#072d66] transition-all"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href="/training_program_brochure.pdf"
                  download="GCCI_TPM_BTLC_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white lg:bg-slate-100 text-[#0a387c] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-300 hover:bg-slate-200 transition-all cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Brochure</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 2. INTRODUCTION & FACULTY PROFILE SECTION                         */}
      {/* ================================================================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center">
          {/* Main Organization Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] leading-tight tracking-tight">
            GLOBAL CORPORATE COUNCIL INDIA - GCCI / GCCI International LLP
            <br />
            <span className="text-xl sm:text-2xl text-[#0a387c] font-bold">
              Global Partners for End to End Business Solutions
            </span>
          </h2>

          {/* Program Premise Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            GCCI introduced for the <strong>2nd time in History</strong> the latest insights by Japanese
            concepts to learn the breakthrough strategical skills to takeoff TPM advancement in your organization.
            (<strong>5 Day Intensive Workshop Followed By 5 Week Online Follow-up course</strong>).
          </p>

          {/* Faculty Profile Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-left shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-4 border-b border-slate-200">
              <div className="h-12 w-12 rounded-full bg-[#0a387c] text-white flex items-center justify-center font-bold text-lg shrink-0">
                YS
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0a387c]">
                  LEAD FACULTY PROFILE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Yuvaraj Sithaiyan
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              Conducted Trainings Approx. <strong>7,21,000+ Man Hrs.</strong> for{" "}
              <strong>1,06,000 people</strong> across the Country and Global level. Supported and mentored client
              manufacturing teams for accomplishing <strong>52 JIPM Awards</strong> (Special Award + Consistency Award +
              Excellence Awards).
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-center">
              <div>
                <div className="text-2xl font-extrabold text-[#0a387c]">7.2L+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  Training Man-Hours
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#0a387c]">1,06,000+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  Professionals Trained
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl font-extrabold text-[#0a387c]">52+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  JIPM Awards Facilitated
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0a387c] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#082a5c] transition-all"
            >
              <span>Apply Now</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href="/training_program_brochure.pdf"
              download="GCCI_TPM_BTLC_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-transparent text-[#0a387c] px-8 py-3.5 text-sm font-bold uppercase tracking-wider border-2 border-[#0a387c] hover:bg-[#0a387c] hover:text-white transition-all cursor-pointer"
            >
              <span>Download Brochure (PDF)</span>
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. TRAINING MODULES: EXACT 2-COLUMN TIMELINE ROWS                 */}
      {/* ================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0a387c] bg-white px-3.5 py-1 rounded-full border border-slate-200">
              CURRICULUM ARCHITECTURE
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Training Modules
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Structured to guide plant directors, operations heads, and TPM facilitators from classical Japanese
              disciplines to modern smart manufacturing transformation.
            </p>
          </div>

          {/* Modules Rows */}
          <div className="space-y-12 sm:space-y-16">
            {moduleData.map((mod, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left Module Card */}
                <div className="md:col-span-5 bg-white border-2 border-[#0a387c] rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-center">
                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0a387c] mb-2">
                    {mod.moduleNum}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight">
                    {mod.title}
                  </h3>
                </div>

                {/* Right Timeline Points */}
                <div className="md:col-span-7 relative pl-8 border-l-2 border-[#0a387c] space-y-6">
                  {mod.points.map((pt, pIdx) => (
                    <div key={pIdx} className="relative flex items-start gap-4">
                      {/* Timeline Node Bullet */}
                      <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-[#0a387c] bg-white" />
                      <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. BROCHURE & ENROLLMENT CTA SECTION (With Background Video)       */}
      {/* ================================================================= */}
      <CtaSection
        badge="ENROLLMENT NOW OPEN"
        title="Take Your Plant to Japanese World-Class TPM Standards"
        description=""
        primaryBtnText="Apply Online Now"
        primaryBtnHref={googleFormUrl}
        primaryBtnTarget="_blank"
        secondaryBtnText="Download Brochure (PDF)"
        secondaryBtnHref="/training_program_brochure.pdf"
      />

      {/* ================================================================= */}
      {/* 5. BROCHURE REQUEST MODAL                                         */}
      {/* ================================================================= */}
      {brochureModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setBrochureModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setBrochureModalOpen(false)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0a387c]">
              <BookOpen className="h-4 w-4 text-[#0a387c]" />
              <span>TPM BTLC BROCHURE</span>
            </div>

            <h3 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
              Download Program Syllabus
            </h3>

            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Explore the complete 5-day daily agenda, case studies, accommodation details in Madurai, and 5-week
              online follow-up curriculum.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="/training_program_brochure.pdf"
                download="GCCI_TPM_BTLC_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a387c] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#072a5c] transition-all shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download Full Brochure (PDF)</span>
              </a>

              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#f26522] hover:bg-[#d95516] text-white px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Proceed to Online Application Form</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
              >
                <span>Contact Desk for Custom Plant Cohorts</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
