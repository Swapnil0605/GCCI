"use client";

import { useState } from "react";
import {
  Target,
  Users2,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Crosshair,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

interface Principle {
  id: string;
  number: string;
  navTitle: string;
  fullTitle: string;
  description: string;
  focusArea: string;
  badge: string;
}

const principles: Principle[] = [
  {
    id: "value-creator",
    number: "01",
    navTitle: "Value Creator to Organization Purpose",
    fullTitle: "Value Creator to Organization Purpose",
    description:
      "We align every initiative directly with your organizational purpose, ensuring measurable value creation that strengthens long-term enterprise growth.",
    focusArea: "Strategic Alignment & Enterprise Growth",
    badge: "Value Maximization"
  },
  {
    id: "team-optimization",
    number: "02",
    navTitle: "Driving Team to Optimize Return on Human Resource",
    fullTitle: "Driving Team to Optimize Return on Human Resource",
    description:
      "Our consulting and training frameworks empower your workforce to deliver peak performance and enhanced ROI on human capital.",
    focusArea: "Human Capital & Peak Performance",
    badge: "Workforce Empowerment"
  },
  {
    id: "trust-transparency",
    number: "03",
    navTitle: "Trustworthiness & Absolute Transparency",
    fullTitle: "Trustworthiness & Absolute Transparency",
    description:
      "With global partnerships and proven methodologies, we operate with complete transparency, integrity, and disciplined reliability.",
    focusArea: "Governance, Integrity & Global Partnerships",
    badge: "Ethical Leadership"
  },
  {
    id: "creativity-culture",
    number: "04",
    navTitle: "Creativity as Culture",
    fullTitle: "Creativity as Culture",
    description:
      "We cultivate a work culture of creative problem-solving and structured Kaizen that inspires innovation and continuous improvement across all tiers.",
    focusArea: "Structured Kaizen & Continuous Improvement",
    badge: "Innovation Mindset"
  },
  {
    id: "principles-people",
    number: "05",
    navTitle: "Value the Principles and People",
    fullTitle: "Value the Principles and People",
    description:
      "We uphold strong professional ethics while respecting individuals, fostering a healthy, principle-driven, and empowering industrial environment.",
    focusArea: "Professional Ethics & Individual Respect",
    badge: "People First"
  },
  {
    id: "meticulousness",
    number: "06",
    navTitle: "Meticulousness to the Committed Task",
    fullTitle: "Meticulousness to the Committed Task",
    description:
      "We approach every project with exacting attention to detail and disciplined execution, ensuring consistent, dependable, and audit-ready results.",
    focusArea: "Precision Execution & Audit Readiness",
    badge: "Zero Compromise"
  }
];

export default function WhyGcciSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activePrinciple = principles[activeIndex];

  const getPrincipleIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Target className="h-7 w-7 text-blue-400" />;
      case 1:
        return <Users2 className="h-7 w-7 text-blue-400" />;
      case 2:
        return <ShieldCheck className="h-7 w-7 text-blue-400" />;
      case 3:
        return <Lightbulb className="h-7 w-7 text-blue-400" />;
      case 4:
        return <HeartHandshake className="h-7 w-7 text-blue-400" />;
      case 5:
        return <Crosshair className="h-7 w-7 text-blue-400" />;
      default:
        return <Sparkles className="h-7 w-7 text-blue-400" />;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((index + 1) % principles.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((index - 1 + principles.length) % principles.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="why-gcci"
      className="relative w-full bg-[#070d1e] text-white py-20 lg:py-28 overflow-hidden border-t border-b border-slate-800/60"
    >
      {/* Subtle Ambient Engineering Backdrop Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: 35% - 40% Width (Vertical Navigation Area)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-start">
            {/* Top Label & Headings */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>CORE INDUSTRIAL PHILOSOPHY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.18]">
                Why Choose GCCI International LLP?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal">
                Founded in 2017 and expanded as GCCI International LLP in 2023, our engagements are anchored in
                principled engineering, disciplined execution, and measurable business value.
              </p>
            </div>

            {/* Vertical Selectable Principles Navigation */}
            <div
              role="tablist"
              aria-label="Core Industrial Principles"
              className="flex flex-col border-t border-b border-slate-800/80 divide-y divide-slate-800/60"
            >
              {principles.map((item, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <button
                    key={item.id}
                    role="tab"
                    id={`principle-tab-${idx}`}
                    aria-selected={isActive}
                    aria-controls={`principle-panel-${idx}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIndex(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={`group relative flex items-center justify-between w-full py-4 px-3 sm:px-4 text-left transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-950/60 via-blue-900/20 to-transparent text-white"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                    }`}
                  >
                    {/* Left Active Accent Indicator Line */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-200 ${
                        isActive ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" : "bg-transparent"
                      }`}
                      aria-hidden="true"
                    />

                    <div className="flex items-center gap-3.5 sm:gap-4 pr-3 min-w-0">
                      {/* Large Numerical Indicator */}
                      <span
                        className={`font-mono text-sm sm:text-base font-bold transition-colors shrink-0 ${
                          isActive
                            ? "text-blue-400"
                            : "text-slate-500 group-hover:text-blue-400/80"
                        }`}
                      >
                        {item.number}
                      </span>

                      {/* Principle Nav Title */}
                      <span
                        className={`text-sm sm:text-[15px] tracking-tight leading-snug transition-colors line-clamp-2 ${
                          isActive
                            ? "text-white font-bold"
                            : "text-slate-400 font-medium group-hover:text-slate-200"
                        }`}
                      >
                        {item.navTitle}
                      </span>
                    </div>

                    {/* Active/Hover Arrow Indicator */}
                    <div className="shrink-0 flex items-center">
                      <ChevronRight
                        className={`h-4 w-4 transition-all duration-200 ${
                          isActive
                            ? "text-blue-400 translate-x-0.5 opacity-100"
                            : "text-slate-600 opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 60% - 65% Width (Featured Content Area)     */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center min-h-[460px] lg:min-h-[540px]">
            {/* Integrated Featured Presentation (Generous Whitespace, No Bulky Bordered Card) */}
            <div
              key={activePrinciple.id}
              role="tabpanel"
              id={`principle-panel-${activeIndex}`}
              aria-labelledby={`principle-tab-${activeIndex}`}
              className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#0c152e]/80 via-[#0a1128]/70 to-[#070d1e]/90 p-8 sm:p-12 lg:p-14 border border-blue-950/80 shadow-2xl backdrop-blur-md overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300"
            >
              {/* Large Stylized Background Number Watermark */}
              <div
                className="absolute right-6 -top-6 sm:-top-8 font-mono text-[140px] sm:text-[190px] lg:text-[230px] font-black text-slate-800/15 select-none pointer-events-none leading-none tracking-tighter"
                aria-hidden="true"
              >
                {activePrinciple.number}
              </div>

              {/* Fine Engineering Geometric Grid Line Accent */}
              <div
                className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <div>
                {/* Top Meta Header: Icon + Stepper Badge */}
                <div className="flex items-center justify-between pb-8 border-b border-slate-800/60 relative z-10">
                  {/* Active Principle Icon */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-blue-950/90 border border-blue-500/30 shadow-inner ring-1 ring-blue-500/20">
                      {getPrincipleIcon(activeIndex)}
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest">
                        PRINCIPLE {activePrinciple.number} / 06
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">
                        {activePrinciple.badge}
                      </div>
                    </div>
                  </div>

                  {/* Technical Alignment Pill */}
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-[11px] font-mono uppercase tracking-wider text-blue-300">
                    <CheckCircle2 className="h-3 w-3 text-blue-400" />
                    <span>JIPM / TPS ALIGNED</span>
                  </div>
                </div>

                {/* Principle Heading */}
                <div className="mt-8 sm:mt-10 relative z-10">
                  <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-snug">
                    <span className="text-blue-400 font-mono mr-2">{activePrinciple.number} —</span>
                    {activePrinciple.fullTitle}
                  </h3>
                </div>

                {/* Verbatim Authentic Principle Description */}
                <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal relative z-10 max-w-2xl">
                  {activePrinciple.description}
                </p>
              </div>

              {/* Bottom Subtle Technical Specification Strip */}
              <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="uppercase tracking-wider font-mono text-[11px] text-slate-400">Focus:</span>
                  <span className="text-slate-200">{activePrinciple.focusArea}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  <span>Explore Operational Impact</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM STRIP: Japanese Operational Heritage               */}
        {/* ========================================================= */}
        <div className="mt-12 lg:mt-16 rounded-xl border border-slate-800/80 bg-gradient-to-r from-slate-950/90 via-[#0a1226]/80 to-slate-950/90 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-4 text-left w-full sm:w-auto">
            {/* Japanese Kanji Emblem for Craftsmanship (Takumi 匠) */}
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-400 shrink-0 shadow-inner">
              <span className="text-xl font-serif font-bold">匠</span>
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
                JAPANESE OPERATIONAL HERITAGE
              </div>
              <div className="text-sm sm:text-base font-semibold text-white mt-0.5">
                Mentored by JIPM and JICA TPM/TPS Gurus (Murase San, Prof. Shiba, Furuhashi San &amp; Suzuki San)
              </div>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-slate-400 bg-slate-900/90 px-3.5 py-1.5 rounded-lg border border-slate-800">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>100% Authentic Deployment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
