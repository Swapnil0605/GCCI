"use client";

import { useState } from "react";
import Image from "next/image";
import { clientLogos } from "@/data/alliances";
import { Globe2, ArrowRight } from "lucide-react";

interface AlliancePin {
  id: string;
  country: string;
  flag: string;
  name: string;
  subtext: string;
  x: number; // % from left
  y: number; // % from top
  tooltipAlign?: "center" | "left" | "right";
}

// Exact geographic coordinates calculated on 1024x410 map
const alliancePins: AlliancePin[] = [
  {
    id: "in",
    country: "India",
    flag: "/images/alliances/in.png",
    name: "Institute / University",
    subtext: "Maharashtra, India",
    x: 68.0,
    y: 56.5,
    tooltipAlign: "center"
  },
  {
    id: "jp",
    country: "Japan",
    flag: "/images/alliances/jp.png",
    name: "Late Y. Murase San",
    subtext: "M/s. YOSHI KENKYUSHO, JAPAN",
    x: 85.5,
    y: 43.5,
    tooltipAlign: "right"
  },
  {
    id: "de",
    country: "Germany",
    flag: "/images/alliances/germen.png",
    name: "Mr. Navraj",
    subtext: "Technology, Liaoning Partner, Germany",
    x: 51.5,
    y: 30.5,
    tooltipAlign: "center"
  },
  {
    id: "us",
    country: "United States",
    flag: "/images/alliances/us.png",
    name: "Mr. Sai Kathiresan",
    subtext: "Robotic / AI Specialist, U.S.",
    x: 21.0,
    y: 44.0,
    tooltipAlign: "left"
  },
  {
    id: "au",
    country: "Australia",
    flag: "/images/alliances/au.png",
    name: "Ms. Prashantini",
    subtext: "Software Specialist, Australia",
    x: 83.5,
    y: 89.0,
    tooltipAlign: "right"
  }
];

export default function AlliancesSection() {
  const [hoveredPinId, setHoveredPinId] = useState<string | null>(null);
  const [showAllClients, setShowAllClients] = useState(false);

  return (
    <section id="alliances" className="relative w-full bg-white py-16 sm:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl pb-10 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 rounded bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0a3d91] mb-3 border border-blue-200/60">
            <Globe2 className="h-3.5 w-3.5 text-[#0a3d91]" />
            <span>Global Technical Consortium</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1f1d1d]">
            Alliances Beyond Borders
          </h2>
          <p className="mt-3 text-base text-[#3f3b3c] leading-relaxed">
            Collaborating with world-class specialists and international centers of excellence to deliver cutting-edge technology, knowledge transfer, and Japanese operational rigor.
          </p>
        </div>

        {/* World Map Container */}
        <div className="mt-10 relative w-full rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 lg:p-10 shadow-sm">
          {/* Intrinsic Map Canvas - Exact 1024/410 aspect ratio with NO letterboxing or height drift */}
          <div className="relative w-full overflow-visible">
            <Image
              src="/images/clean-world-map.png"
              alt="GCCI Global Alliances World Map"
              width={1024}
              height={410}
              priority
              className="w-full h-auto block pointer-events-none select-none"
            />

            {/* 5 Alliance Pins Anchored to Exact Geographical Points */}
            {alliancePins.map((pin) => {
              const isHovered = hoveredPinId === pin.id;

              // Tooltip alignment logic so cards never clip left/right container edges
              let alignmentClasses = "left-1/2 -translate-x-1/2";
              let arrowClasses = "left-1/2 -translate-x-1/2";
              if (pin.tooltipAlign === "left") {
                alignmentClasses = "left-0 translate-x-[-15%]";
                arrowClasses = "left-[25%]";
              } else if (pin.tooltipAlign === "right") {
                alignmentClasses = "right-0 translate-x-[15%]";
                arrowClasses = "right-[75%]";
              }

              return (
                <div
                  key={pin.id}
                  style={{
                    left: `${pin.x}%`,
                    top: `${pin.y}%`
                  }}
                  className="absolute -translate-x-1/2 -translate-y-full z-20 cursor-pointer group"
                  onMouseEnter={() => setHoveredPinId(pin.id)}
                  onMouseLeave={() => setHoveredPinId(null)}
                  onClick={() => setHoveredPinId(pin.id)}
                >
                  {/* Radar Pulse on Active/Hovered Pin */}
                  {isHovered && (
                    <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-blue-500/35 animate-ping pointer-events-none" />
                  )}

                  {/* Pin Body (Custom Blue Teardrop with White Center) */}
                  <div
                    className={`relative transition-transform duration-300 ${
                      isHovered ? "scale-125 -translate-y-1" : "hover:scale-115"
                    }`}
                  >
                    <svg
                      width="30"
                      height="40"
                      viewBox="0 0 32 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="drop-shadow-md"
                    >
                      <path
                        d="M16 0C7.16344 0 0 7.16344 0 16C0 27.5 16 44 16 44C16 44 32 27.5 32 16C32 7.16344 24.8366 0 16 0Z"
                        fill={isHovered ? "#0a3d91" : "#1d64d8"}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                      <circle cx="16" cy="15" r="5" fill="#ffffff" />
                    </svg>
                  </div>

                  {/* Hover Information Tooltip Card */}
                  <div
                    className={`absolute bottom-full mb-2.5 ${alignmentClasses} z-40 whitespace-nowrap rounded-xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md transition-all duration-200 ${
                      isHovered
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                    }`}
                  >
                    {/* Flag + Country Name */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="relative h-4 w-6 rounded-xs overflow-hidden border border-slate-200 shadow-2xs">
                        <Image
                          src={pin.flag}
                          alt={`${pin.country} flag`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {pin.country}
                      </span>
                    </div>

                    {/* Person / Partner Name (Bold) */}
                    <div className="text-[14px] sm:text-[15px] font-bold text-slate-900 leading-snug">
                      {pin.name}
                    </div>

                    {/* Small Info / Organization (Subtext) */}
                    <div className="text-[12px] sm:text-[13px] text-slate-600 font-medium mt-0.5">
                      {pin.subtext}
                    </div>

                    {/* Downward Arrow Pointer */}
                    <div
                      className={`absolute top-full ${arrowClasses} w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-white`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Helper Text */}
          <div className="mt-4 text-center text-xs text-slate-400 font-medium">
            Hover over any country pin on the map to view international alliance details.
          </div>
        </div>

        {/* Manufacturing & Corporate Client Partners Section */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a3d91]">
                Trusted by Industry Leaders
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Manufacturing & Corporate Client Partners
              </h3>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Serving leading automotive tier-1s, steel fabrication mills, heavy engineering, and process manufacturing corporations.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllClients(!showAllClients)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-2xs"
            >
              <span>{showAllClients ? "Show Compact View" : "View All 41+ Clients"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Marquee Carousel (Default View) */}
          {!showAllClients && (
            <div className="relative overflow-hidden py-4 border-y border-slate-100 bg-slate-50/50 rounded-xl">
              <div className="animate-marquee flex items-center gap-8">
                {clientLogos.map((client, index) => (
                  <div
                    key={`${client.id}-${index}`}
                    className="relative h-16 w-36 shrink-0 bg-white rounded-lg border border-slate-200 p-2 shadow-2xs flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <Image
                      src={`/images/clients/${client.file}`}
                      alt={client.alt}
                      fill
                      className="object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless continuous marquee loop */}
                {clientLogos.slice(0, 20).map((client, index) => (
                  <div
                    key={`dup-${client.id}-${index}`}
                    className="relative h-16 w-36 shrink-0 bg-white rounded-lg border border-slate-200 p-2 shadow-2xs flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <Image
                      src={`/images/clients/${client.file}`}
                      alt={client.alt}
                      fill
                      className="object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expanded 41 Clients Grid View */}
          {showAllClients && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {clientLogos.map((client) => (
                  <div
                    key={client.id}
                    className="relative h-20 w-full rounded-lg border border-slate-200 bg-white p-2 shadow-2xs transition-all hover:shadow-md hover:border-blue-400 flex items-center justify-center"
                  >
                    <Image
                      src={`/images/clients/${client.file}`}
                      alt={client.alt}
                      fill
                      className="object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
