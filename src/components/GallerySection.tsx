"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, CheckCircle2, ChevronRight, ExternalLink } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "JIPM Audits" | "Japan Tours" | "Workshops" | "Plant Transformations";
  location: string;
  image: string;
  client?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "JIPM Assessment with Sensei Ichikawa San & Sensei Nomura San",
    category: "JIPM Audits",
    location: "Tier-1 Manufacturing Plant",
    image: "/images/about/2018.jpg",
    client: "Japanese JIPM Delegation"
  },
  {
    id: "g2",
    title: "COCA COLA JIPM Assessment with Japanese Sensei",
    category: "JIPM Audits",
    location: "Beverage Bottling Facility",
    image: "/images/about/2019.jpg",
    client: "Coca-Cola Plant"
  },
  {
    id: "g3",
    title: "NIPPON Steel – Japan Plant Benchmark Visit",
    category: "Japan Tours",
    location: "Tokyo / Nagoya, Japan",
    image: "/images/about/2023.jpg",
    client: "Nippon Steel Collaboration"
  },
  {
    id: "g4",
    title: "Conducting MAKIGAMI Process Flow Analysis",
    category: "Workshops",
    location: "Automotive Component Plant",
    image: "/images/about/2020.jpg",
    client: "Rucha Engineers"
  },
  {
    id: "g5",
    title: "Business Excellence Assessment in SAIL",
    category: "Plant Transformations",
    location: "Steel Processing Mill",
    image: "/images/about/2022.jpg",
    client: "Steel Authority of India Ltd (SAIL)"
  },
  {
    id: "g6",
    title: "TPM Kick-Off & War Room Operations Setup",
    category: "Plant Transformations",
    location: "Forging & Machining Facility",
    image: "/images/about/2021.jpg",
    client: "MM Forgings"
  },
  {
    id: "g7",
    title: "5S & Shop Floor Discipline Workshop",
    category: "Workshops",
    location: "Precision Engineering Division",
    image: "/images/about/2024.jpg",
    client: "RIJ Engineering Pvt Ltd"
  },
  {
    id: "g8",
    title: "Lean & Operational Excellence Tour Japan",
    category: "Japan Tours",
    location: "Japan",
    image: "/images/about/2025.jpg",
    client: "Global Executive Delegation"
  }
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "JIPM Audits", "Japan Tours", "Workshops", "Plant Transformations"];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative w-full bg-slate-900 py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded bg-blue-900/60 border border-blue-700/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
              <Camera className="h-3.5 w-3.5 text-blue-400" />
              <span>Activity & Field Engagements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              A Journey of Excellence Captured on the Shop Floor
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`rounded px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeFilter === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 transition-all hover:border-blue-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-3 left-3">
                  <span className="rounded bg-blue-950/80 backdrop-blur-sm border border-blue-700/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="text-[11px] font-mono text-slate-400">
                  {item.location}
                </div>
                <h3 className="mt-1 text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {item.title}
                </h3>
                {item.client && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400 border-t border-slate-850 pt-3">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    <span>{item.client}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 rounded-lg border border-slate-850 bg-slate-950/60 p-4 text-center text-xs text-slate-400">
          Over 61+ industrial assessments and hundreds of shop floor Kaizen exercises executed nationwide and internationally.
        </div>
      </div>
    </section>
  );
}
