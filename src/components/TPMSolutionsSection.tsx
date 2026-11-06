"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export interface SolutionItem {
  id: string;
  pillarNumber: string;
  title: string;
  displayTitle: string;
  image: string;
  tags: string[];
  description: string;
  href: string;
}

const solutions: SolutionItem[] = [
  {
    id: "tpm-software",
    pillarNumber: "04",
    title: "TPM Software (Subscription Model)",
    displayTitle: "TPM Software",
    image: "/images/solutions/tpm-software.png",
    tags: ["Autonomous Maintenance", "Planned Maintenance", "Kobetsu Kaizen"],
    description:
      "Enterprise-grade cloud-based digital platform covering all 8 TPM pillars with real-time operational dashboards, mobile shop-floor audit apps, and structured management review modules.",
    href: "/service4"
  },
  {
    id: "maintenance-software",
    pillarNumber: "03",
    title: "Maintenance Software, IoT & AI Solutions",
    displayTitle: "Maintenance Software & IoT/AI",
    image: "/images/solutions/maintenance-software.jpg",
    tags: ["CMMS System", "Predictive Maintenance", "RCA Tracking"],
    description:
      "Modernizing maintenance operations with Computerized Maintenance Management Systems (CMMS), IoT vibration and thermal sensor integration, and predictive AI models to prevent catastrophic breakdowns.",
    href: "/service3"
  },
  {
    id: "industry-automation",
    pillarNumber: "02",
    title: "Global Technology & Industry Automation",
    displayTitle: "Technology & Industry Automation",
    image: "/images/solutions/industry-automation.png",
    tags: ["Robotics", "PLC Automation", "System Integration"],
    description:
      "Connecting Indian industries with global OEMs and world-class technology partners in Japan, Germany, and the USA for custom SPM design, robotics, and Industry 4.0 smart factory integration.",
    href: "/service2"
  },
  {
    id: "capability-development",
    pillarNumber: "01",
    title: "Capability Development & Competitiveness",
    displayTitle: "Capability Development & Assessment",
    image: "/images/solutions/capability-development.png",
    tags: ["Operational Excellence", "Assessment", "Capability Mapping"],
    description:
      "Guiding manufacturing organizations toward world-class operational excellence through structured maturity evaluations, diagnostic audits, and capability development aligned with JIPM benchmarks.",
    href: "/service1"
  }
];

const AUTO_PLAY_DURATION = 5000; // 5000ms duration per slide

export default function TPMSolutionsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const elapsedBeforePauseRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  const activeItem = solutions[activeIndex];

  // Manual Click Override & Slide Transition
  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
    elapsedBeforePauseRef.current = 0;
  }, []);

  // 1. Intersection Observer for Automatic Autoplay on Viewport Scroll
  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        root: null,
        threshold: 0.25 // Trigger when 25% of section is visible
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 2. Continuous 60fps RequestAnimationFrame Loop tied to Viewport InView State
  useEffect(() => {
    if (!isInView) {
      // Pause progress and save elapsed time when scrolled out of view
      elapsedBeforePauseRef.current = Date.now() - startTimeRef.current;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      return;
    }

    // Resume timing seamlessly from where it left off
    startTimeRef.current = Date.now() - elapsedBeforePauseRef.current;

    const updateLoop = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      const currentProgress = Math.min(elapsed / AUTO_PLAY_DURATION, 1);
      setProgress(currentProgress);

      if (elapsed >= AUTO_PLAY_DURATION) {
        goToSlide((activeIndex + 1) % solutions.length);
      } else {
        animFrameRef.current = requestAnimationFrame(updateLoop);
      }
    };

    animFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isInView, activeIndex, goToSlide]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        {/* Centered Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Core Capabilities & Industrial Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Comprehensive Engineering, Automation &amp; TPM Solutions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Delivering end-to-end consulting, automated inspection, precision automation, and cloud maintenance
            platforms powered by global engineering alliances.
          </p>
        </div>

        {/* Main 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (Image Showcase / Dynamic Content) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] xl:h-[540px] rounded-[16px] overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950 select-none">
              {/* Stacked Images for Smooth Cross-Fade Transition */}
              {solutions.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={idx === 0}
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 60vw"
                      className={`object-cover object-center transform transition-transform duration-1000 ease-out ${
                        isActive ? "scale-100" : "scale-105"
                      }`}
                    />
                  </div>
                );
              })}

              {/* Dark Gradient Overlay for typography contrast */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />
              <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Step Counter Badge Only (0X / 04) - Play/Pause Button Removed */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30">
                <div className="rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-white shadow-sm">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(solutions.length).padStart(2, "0")}
                </div>
              </div>

              {/* Bottom-Left Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-30 p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
                {/* Active Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow-md transition-all duration-300">
                  {activeItem.title}
                </h3>

                {/* Tag Pills */}
                <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
                  {activeItem.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center rounded-md border border-white/30 bg-black/40 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:border-white hover:bg-black/70 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Single Primary CTA Button - Quick Overview Removed */}
                <div className="mt-6 pt-4 border-t border-white/15">
                  <Link
                    href={activeItem.href}
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-extrabold uppercase tracking-wider text-slate-950 transition-all hover:bg-slate-100 shadow-md group/btn"
                  >
                    <span>EXPLORE SOLUTION SCOPE</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile / Tablet Thumbnail Selectors (Stacked Below Image) */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 lg:hidden">
              {solutions.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`relative flex flex-col justify-between text-left p-3 rounded-xl border transition-all overflow-hidden cursor-pointer ${
                      isActive
                        ? "bg-slate-900 text-white border-slate-900 shadow-md"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold tracking-wider opacity-60">
                      0{idx + 1}
                    </span>
                    <span className="mt-1 text-xs font-bold line-clamp-2 leading-snug">
                      {item.displayTitle}
                    </span>

                    {/* Mobile Progress Bar Line */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
                        <div
                          className="h-full bg-white transition-[width] duration-75"
                          style={{ width: `${progress * 100}%` }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (Vertical Timeline / Progress Navigation) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col justify-center h-full">
            <div className="relative pl-6">
              {/* Continuous Vertical Background Track Line */}
              <div
                className="absolute left-0 top-3 bottom-3 w-[2px] bg-[#E5E7EB]"
                aria-hidden="true"
              />

              {/* Items Navigation List */}
              <div className="flex flex-col space-y-6 xl:space-y-7">
                {solutions.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  const isPast = idx < activeIndex;

                  return (
                    <div key={item.id} className="relative group">
                      {/* Segment Progress Line Container */}
                      <div
                        className="absolute -left-6 top-0 bottom-0 w-[2px] pointer-events-none"
                        aria-hidden="true"
                      >
                        {/* Animated Black Active Progress Line (0% to 100%) */}
                        <div
                          className={`w-full bg-[#000000] transition-all ${
                            isActive ? "duration-75" : "duration-300"
                          }`}
                          style={{
                            height: isActive
                              ? `${progress * 100}%`
                              : isPast
                              ? "100%"
                              : "0%"
                          }}
                        />
                      </div>

                      {/* Indicator Marker tracking active item */}
                      {isActive && (
                        <div
                          className="industries-section--titles--point absolute -left-[27px] top-2 sm:top-2.5 w-[8px] h-[8px] bg-[#000000] shadow-sm transform transition-all duration-300"
                          aria-hidden="true"
                        />
                      )}

                      {/* Clickable Item Button with Manual Click Override */}
                      <button
                        type="button"
                        onClick={() => goToSlide(idx)}
                        className={`w-full text-left transition-all duration-300 cursor-pointer focus:outline-none ${
                          isActive
                            ? "text-[#000000]"
                            : "text-slate-400 hover:text-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
                              isActive ? "text-slate-900" : "text-slate-300 group-hover:text-slate-400"
                            }`}
                          >
                            0{idx + 1}
                          </span>
                        </div>

                        <div
                          className={`text-base xl:text-lg font-bold tracking-tight uppercase transition-all duration-200 mt-0.5 ${
                            isActive
                              ? "text-slate-950 font-extrabold translate-x-1"
                              : "text-slate-400 font-semibold group-hover:text-slate-800"
                          }`}
                        >
                          {item.title}
                        </div>

                        {/* Collapsible Brief Description & Pillar Link */}
                        <div
                          className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                            isActive
                              ? "grid-rows-[1fr] opacity-100 mt-2.5"
                              : "grid-rows-[0fr] opacity-0 mt-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-xs text-slate-500 leading-relaxed font-normal normal-case pr-4">
                              {item.description}
                            </p>
                            <Link
                              href={item.href}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 mt-2.5 uppercase tracking-wider group/link"
                            >
                              <span>View Pillar Details</span>
                              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

