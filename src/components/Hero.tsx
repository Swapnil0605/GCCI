"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full bg-slate-950 overflow-hidden">
      {/* Background Rotating Images */}
      <div className="relative min-h-[520px] sm:min-h-[580px] md:min-h-[620px] lg:min-h-[680px] w-full flex flex-col justify-center">
        {heroImages.map((imgSrc, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={imgSrc}
              alt="GCCI International Industrial Excellence"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center scale-102 transition-transform duration-7000"
            />
            {/* Lighter contrast overlay so images are clearly visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />
          </div>
        ))}

        {/* Hero Content Container */}
        <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            {/* Top Tag Pill - wraps safely on 320px+ mobile */}
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded border border-blue-400/40 bg-slate-950/65 px-3 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wide text-blue-200 backdrop-blur-md shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-400 shrink-0 animate-pulse" />
              <span className="truncate sm:text-clip">Global Corporate Council India – GCCI / GCCI International LLP</span>
            </div>

            {/* Responsive Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] drop-shadow-lg">
              GCCI International – <br className="hidden sm:inline" />
              Inspiring Global Excellence
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-100 leading-relaxed max-w-2xl font-normal drop-shadow-md">
              Transforming organizations through knowledge, innovation, and collaboration with proven Japanese operational methodologies.
            </p>

            {/* Call to Actions - full width on tiny mobile, inline on tablet+ */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0a3d91] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#082d64]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-400/60 bg-slate-900/70 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-slate-800"
              >
                <span>About GCCI</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
