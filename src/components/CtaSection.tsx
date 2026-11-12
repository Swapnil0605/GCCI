import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

interface CtaSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  primaryBtnTarget?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  secondaryBtnOnClick?: () => void;
}

export default function CtaSection({
  badge = "Global Corporate Council India",
  title = "“Driven by Trust, Guided by Principle, Perfected with Meticulousness.”",
  description = "Have a question or project in mind? We'd love to hear from you! Reach out to our team — we're here to turn your ideas into meaningful outcomes.",
  primaryBtnText = "Get In Touch",
  primaryBtnHref = "/contact",
  primaryBtnTarget,
  secondaryBtnText,
  secondaryBtnHref,
  secondaryBtnOnClick
}: CtaSectionProps = {}) {
  const isPrimaryExternal = primaryBtnTarget === "_blank" || primaryBtnHref.startsWith("http");

  return (
    <section
      id="cta-section"
      className="relative w-full overflow-hidden py-24 sm:py-28 lg:py-36 flex items-center"
      style={{
        clipPath: "inset(0)",
        WebkitClipPath: "inset(0)"
      }}
    >
      {/* ========================================================= */}
      {/* 1. Fixed Background Video (Parallax Window)               */}
      {/* ========================================================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover pointer-events-none -z-20"
      >
        <source src="/videos/CTA_BG.webm" type="video/webm" />
      </video>

      {/* ========================================================= */}
      {/* 2. Gradient Overlays for High Legibility & Contrast       */}
      {/* ========================================================= */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(5, 12, 28, 0.90) 0%, rgba(7, 19, 41, 0.80) 50%, rgba(12, 28, 61, 0.72) 100%)"
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-black/30 pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Ambient Lighting Orbs */}
      <div
        className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* ========================================================= */}
      {/* 3. Full-Width Section Content                             */}
      {/* ========================================================= */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-14">
          {/* Left Content */}
          <div className="max-w-3xl">
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400">
              {badge}
            </h3>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-[1.25] drop-shadow-md">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
                {description}
              </p>
            )}
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            {isPrimaryExternal ? (
              <a
                href={primaryBtnHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 sm:px-9 py-4 sm:py-5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:bg-blue-50 hover:shadow-2xl hover:scale-105 shadow-xl group whitespace-nowrap"
              >
                <span>{primaryBtnText}</span>
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            ) : (
              <Link
                href={primaryBtnHref}
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 sm:px-9 py-4 sm:py-5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:bg-blue-50 hover:shadow-2xl hover:scale-105 shadow-xl group whitespace-nowrap"
              >
                <span>{primaryBtnText}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            )}

            {secondaryBtnText && secondaryBtnHref && (
              secondaryBtnHref.endsWith(".pdf") || secondaryBtnHref.startsWith("http") ? (
                <a
                  href={secondaryBtnHref}
                  download={secondaryBtnHref.endsWith(".pdf") ? "GCCI_TPM_BTLC_Brochure.pdf" : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-7 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
                >
                  <span>{secondaryBtnText}</span>
                </a>
              ) : (
                <Link
                  href={secondaryBtnHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-7 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
                >
                  <span>{secondaryBtnText}</span>
                </Link>
              )
            )}

            {secondaryBtnText && secondaryBtnOnClick && !secondaryBtnHref && (
              <button
                type="button"
                onClick={secondaryBtnOnClick}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-7 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white hover:bg-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>{secondaryBtnText}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
