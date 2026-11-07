"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const whyChooseUsData = [
  {
    id: "value-creator",
    title: "VALUE CREATOR TO ORGANIZATION PURPOSE",
    description:
      "We align every initiative with your organizational purpose, ensuring measurable value creation that strengthens long-term growth.",
    link: "/about"
  },
  {
    id: "team-optimization",
    title: "DRIVING TEAM TO OPTIMIZE RETURN ON HUMAN RESOURCE",
    description:
      "Our consulting and training frameworks empower your workforce to deliver maximum performance and enhanced ROI on human capital.",
    link: "/about"
  },
  {
    id: "trustworthiness",
    title: "TRUSTWORTHINESS",
    description:
      "With global partnerships and proven methodologies, we operate with complete transparency, integrity, and reliability.",
    link: "/about"
  },
  {
    id: "creativity-culture",
    title: "CREATIVITY AS CULTURE",
    description:
      "We promote a culture of creative thinking that encourages innovation and continuous improvement across all levels.",
    link: "/about"
  },
  {
    id: "principles-people",
    title: "VALUE THE PRINCIPLES AND PEOPLE",
    description:
      "We uphold strong professional ethics while respecting individuals, fostering a healthy, principle-driven work environment.",
    link: "/about"
  },
  {
    id: "meticulousness",
    title: "METICULOUSNESS TO THE COMMITTED TASK",
    description:
      "We approach every assignment with careful attention to detail and disciplined execution, ensuring consistent, dependable results.",
    link: "/about"
  }
];

export default function WhyGcciSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleCards, setVisibleCards] = useState<number>(3);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const touchStartXRef = useRef<number>(0);
  const touchEndXRef = useRef<number>(0);

  // Responsive visible cards count (3 on desktop, 2 on tablet, 1 on mobile)
  const updateVisibleCards = useCallback(() => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    if (width >= 1024) {
      setVisibleCards(3);
    } else if (width >= 640) {
      setVisibleCards(2);
    } else {
      setVisibleCards(1);
    }
  }, []);

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, [updateVisibleCards]);

  const maxIndex = Math.max(0, whyChooseUsData.length - visibleCards);

  // Clamp currentIndex when resizing
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Entrance animation trigger when in view
  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Autoplay (5s cycle, pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch Swipe for mobile/tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  // Calculate pixel translation
  const [translateX, setTranslateX] = useState<number>(0);

  useEffect(() => {
    if (!sliderContainerRef.current) return;
    const containerWidth = sliderContainerRef.current.clientWidth;
    const gap = 24; // 24px gap between cards
    const cardWidth = (containerWidth - (visibleCards - 1) * gap) / visibleCards;
    setTranslateX(currentIndex * (cardWidth + gap));
  }, [currentIndex, visibleCards]);

  return (
    <section
      ref={sectionRef}
      id="why-gcci"
      className="relative w-full overflow-hidden py-20 lg:py-28"
      style={{
        clipPath: "inset(0)",
        WebkitClipPath: "inset(0)"
      }}
    >
      {/* ========================================================= */}
      {/* 1. Fixed Background Video                                 */}
      {/* ========================================================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover pointer-events-none -z-20"
      >
        <source src="/videos/why_choose_us_BG.webm" type="video/webm" />
      </video>

      {/* ========================================================= */}
      {/* 2. Ambient Overlay for Optimal Typography Contrast        */}
      {/* ========================================================= */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5, 12, 28, 0.58) 0%, rgba(5, 12, 28, 0.48) 50%, rgba(5, 12, 28, 0.68) 100%)"
        }}
      />

      {/* ========================================================= */}
      {/* 3. Section Content & Header                               */}
      {/* ========================================================= */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        {/* Top Header: 2 Columns with Generous Typography & Clear Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          {/* Header Left: Main Title */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] drop-shadow-sm">
              Why Choose <br className="hidden sm:block" />
              Global Corporate Council India – GCCI / GCCI International LLP
            </h2>
          </div>

          {/* Header Right: Vision & Evolution Context */}
          <div className="lg:col-span-5 flex flex-col justify-between sm:flex-row sm:items-end lg:flex-col lg:items-start gap-4">
            <p className="text-sm sm:text-base text-white leading-relaxed font-medium drop-shadow-sm max-w-xl">
              Founded in 2017 with a vision of delivering end-to-end solutions through global expertise,
              GCCI has evolved into a multifaceted enterprise. In 2023, we expanded and rebranded as GCCI
              International LLP.
            </p>

            {/* Slider Navigation Arrows in Header */}
            <div className="flex items-center gap-2.5 self-start lg:self-end pt-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous cards"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all duration-200 cursor-pointer shadow-md"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next cards"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all duration-200 cursor-pointer shadow-md"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Thin Horizontal Divider Line with Generous Bottom Spacing */}
        <div className="w-full h-[1px] bg-white/25 mt-8 sm:mt-10 mb-12 sm:mb-14 lg:mb-16" />

        {/* ========================================================= */}
        {/* 4. 3-Cards-Visible Interactive Slider                     */}
        {/* ========================================================= */}
        {/* Constrained max-width to make cards compact, elegant & balanced */}
        <div className="max-w-[1220px] mx-auto">
          {/* Slider Container with generous top & bottom padding to prevent hover clipping */}
          <div
            ref={sliderContainerRef}
            className="relative w-full overflow-hidden pt-6 pb-10 px-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slider Sliding Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${translateX}px)`,
                gap: "24px"
              }}
            >
              {whyChooseUsData.map((item, idx) => {
                // Calculate width per card based on visibleCards
                const cardFlexBasis =
                  visibleCards === 3
                    ? "calc((100% - 48px) / 3)"
                    : visibleCards === 2
                    ? "calc((100% - 24px) / 2)"
                    : "100%";

                return (
                  <div
                    key={item.id}
                    className="solution-card shrink-0"
                    style={{
                      flex: `0 0 ${cardFlexBasis}`,
                      minWidth: cardFlexBasis,
                      maxWidth: cardFlexBasis,
                      opacity: isAnimated ? 1 : 0,
                      transform: isAnimated
                        ? "translateY(0) scale(1)"
                        : "translateY(60px) scale(0.95)",
                      transitionDelay: `${idx * 75}ms`
                    }}
                  >
                    {/* Card Top: Title & Description */}
                    <div>
                      <h3 className="font-extrabold uppercase tracking-wide leading-snug">
                        {item.title}
                      </h3>

                      <div className="card-content mt-4">
                        <p className="leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Bottom: Explore Now Button */}
                    <div className="mt-8 pt-4">
                      <Link href={item.link} className="btn-explore">
                        Explore Now
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. Pagination Indicator Dots                              */}
        {/* ========================================================= */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                dotIdx === currentIndex
                  ? "w-8 bg-white shadow-sm"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 6. Refined Card Styles, Height & Smooth Hover Transition  */}
      {/* ========================================================= */}
      <style jsx global>{`
        .solution-card {
          color: rgb(26, 26, 26);
          height: 390px;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          position: relative;
          background: rgb(251, 236, 224);
          padding: 30px 28px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, box-shadow;
        }

        .solution-card h3 {
          color: rgb(26, 26, 26);
          font-size: 1.28rem;
          font-weight: 800;
          line-height: 1.35;
          letter-spacing: 0.02em;
          transition: color 0.35s ease;
        }

        .solution-card .card-content p {
          color: #374151;
          margin-top: 16px;
          font-size: 1.05rem;
          line-height: 1.68;
          font-weight: 450;
          transition: color 0.35s ease;
        }

        .solution-card .btn-explore {
          display: inline-block;
          text-decoration: none;
          color: rgb(26, 26, 26);
          border: 1.5px solid rgb(26, 26, 26);
          padding: 10px 24px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        /* Hover Transformation: Smooth Elevation without Clipping */
        .solution-card:hover {
          background: rgba(255, 255, 255, 0.22) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          color: #ffffff !important;
          transform: translateY(-12px) scale(1.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          box-shadow: 0 25px 45px -10px rgba(0, 0, 0, 0.45) !important;
          z-index: 20 !important;
        }

        .solution-card:hover h3,
        .solution-card:hover .card-content p {
          color: rgba(255, 255, 255, 0.96) !important;
        }

        .solution-card:hover .btn-explore {
          border-color: #ffffff !important;
          background: #ffffff !important;
          color: rgb(15, 23, 42) !important;
        }

        @media (max-width: 640px) {
          .solution-card {
            height: 390px;
            min-height: 300px;
            padding: 26px 22px;
          }
          .solution-card h3 {
            font-size: 1.15rem;
          }
          .solution-card .card-content p {
            font-size: 0.98rem;
          }
        }
      `}</style>
    </section>
  );
}
