import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="relative rounded-2xl border border-blue-950/40 bg-gradient-to-r from-[#050c1c] via-[#081329] to-[#0c1c3d] p-8 sm:p-10 lg:p-12 text-white shadow-2xl shadow-slate-900/10 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400">
                END-TO-END CUSTOM SOLUTIONS
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white tracking-tight leading-snug">
                Looking for Custom SPM Development or Tube Mill Automation?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Our engineering team works directly with plant heads and operations directors to design, integrate,
                and validate specialized automation equipment and AI inspection systems.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-950 transition-all hover:bg-slate-100 hover:shadow-lg shadow-md group whitespace-nowrap"
              >
                <span>CONSULT OUR ENGINEERING TEAM</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

