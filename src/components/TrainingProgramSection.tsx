"use client";

import Link from "next/link";
import {
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Award
} from "lucide-react";

export default function TrainingProgramSection() {
  const gurus = [
    { name: "Late Y. Murase San", org: "JIPM", focus: "TPM Methodologies" },
    { name: "Seo Yamaguchi San", org: "JIPM", focus: "TPM Principles" },
    { name: "Prof. Shobi Shiba", org: "JICA", focus: "Breakthrough Management" },
    { name: "Furuhashi San", org: "JICA", focus: "TPS, Lean & VSME" },
    { name: "Suzuki San", org: "JIPM", focus: "TPM Deployment" },
    { name: "Sugiyura San", org: "JIPM", focus: "Plant Operational Reliability" },
    { name: "Ichikawa San", org: "JIPM", focus: "Maintenance Excellence" },
    { name: "Nakamura San", org: "JIPM", focus: "Quality Maintenance" }
  ];

  return (
    <section id="training" className="relative w-full bg-slate-900 py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Course Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded bg-blue-900/60 border border-blue-700/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
              <GraduationCap className="h-3.5 w-3.5 text-blue-400" />
              <span>Flagship Capability Development</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Business Transformation Leaders Course (TPM BTLC)
            </h2>

            <blockquote className="border-l-4 border-blue-500 bg-slate-950/60 p-4 text-sm sm:text-base italic text-slate-300 rounded-r">
              &ldquo;Vision without action is a dream. Action without vision is a nightmare.&rdquo;
              <span className="block mt-1 text-xs font-semibold text-blue-400 not-italic">
                — Ancient Japanese Proverb
              </span>
            </blockquote>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              GCCI introduced for the 2nd time in industrial history the latest breakthrough insights derived from
              Japanese concepts to <strong className="text-white">Learn, Practice & Transform Organizations</strong>.
              Designed specifically for senior plant leadership, operations heads, and engineering directors.
            </p>

            {/* Event Details Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Date</div>
                  <div className="text-xs font-bold text-white">09th – 13th Mar. 2026</div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-4">
                <Clock className="h-5 w-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Time</div>
                  <div className="text-xs font-bold text-white">9:00 AM – 5:00 PM</div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-4">
                <MapPin className="h-5 w-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Venue</div>
                  <div className="text-xs font-bold text-white">JC Residency, Madurai, TN</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded bg-blue-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-900/40 hover:bg-blue-500 transition-colors"
              >
                <span>Register for BTLC Course / Inquire</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Japanese Gurus Heritage */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-7 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <h3 className="text-base font-bold text-white">Learning From Japanese Gurus</h3>
                </div>
                <span className="text-[11px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded">
                  Corporate Management
                </span>
              </div>

              <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                Our curriculum and transformation frameworks are directly derived from the teachings, audits, and publications of world-renowned Japanese practitioners:
              </p>

              <div className="mt-5 space-y-2.5">
                {gurus.map((g, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-slate-850 bg-slate-900/60 p-2.5 text-xs transition-colors hover:border-slate-700"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                      <span className="font-semibold text-white">{g.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400">{g.focus}</span>
                      <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono text-blue-300">
                        {g.org}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 text-center">
                Hands-on shopfloor case studies, Kaizen sheets, and JIPM audit simulation included.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
