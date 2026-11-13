"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Close on Escape or arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : items.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, items.length]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIdx]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                className="object-cover group-hover:scale-108 transition-transform duration-500"
              />

              {/* Hover / Tap Indicator */}
              <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-xs opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <ZoomIn className="h-4 w-4" />
              </div>

              {/* Desktop Hover Overlay */}
              <div className="absolute inset-0 bg-[#0a3d91]/85 p-5 text-white flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex">
                <span className="text-[11px] font-mono text-blue-200 uppercase tracking-widest mb-1">
                  GCCI Activity
                </span>
                <h3 className="text-sm font-bold leading-snug">{item.title}</h3>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 border-t border-slate-100">
              <h3 className="text-xs font-semibold text-slate-800 line-clamp-2 leading-relaxed">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedIdx(null)}
            className="absolute top-4 right-4 z-50 rounded-full bg-white/20 p-2 text-white hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : items.length - 1));
            }}
            className="absolute left-2 sm:left-6 z-50 rounded-full bg-white/20 p-2 text-white hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-2 sm:right-6 z-50 rounded-full bg-white/20 p-2 text-white hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-lg overflow-hidden bg-black/40">
              <Image
                src={items[selectedIdx].src}
                alt={items[selectedIdx].title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 text-center px-4">
              <p className="text-white text-sm sm:text-base font-medium drop-shadow-sm">
                {items[selectedIdx].title}
              </p>
              <span className="text-xs text-slate-400 mt-1 block">
                {selectedIdx + 1} of {items.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

