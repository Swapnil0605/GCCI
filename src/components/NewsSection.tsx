"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";

interface NewsItemType {
  id: string;
  title: string;
  category: string;
  date: string;
  image?: string;
  summary: string;
  details: string;
}

// Featured main news matching Image 1
const featuredNews: NewsItemType = {
  id: "global-technology-integration",
  title: "New Partnership for Global Industrial Technology Integration",
  category: "Strategic Alliances",
  date: "AUG 22, 2020",
  image: "/images/img_4.jpg",
  summary:
    "GCCI has established collaborative channels with international OEMs and technology experts for automation and smart manufacturing solutions.",
  details:
    "GCCI expands its liaison network with European and Japanese engineering specialists to bring world-standard automation technology, precision SPMs, and know-how directly to Indian manufacturing hubs. This alliance paves the way for advanced robotics, process automation, and shop floor modernization across Tier-1 automotive and steel sectors."
};

// 4 side news items matching Image 2
const sideNewsList: NewsItemType[] = [
  {
    id: "cloud-tpm-software",
    title: "GCCI Launches Cloud-Based TPM Software (Subscription Model)",
    category: "Product Innovation",
    date: "JUN 09, 2025",
    summary:
      "GCCI has introduced a next-generation TPM Digital Platform covering all eight TPM pillars with real-time operational dashboards, mobile app connectivity, and cloud-based analytics.",
    details:
      "Designed specifically for manufacturing plants aiming for JIPM compliance and shop floor digital empowerment. The platform digitizes Autonomous Maintenance tags, Kaizen registers, Skill Matrices, and OEE loss trees with role-based access."
  },
  {
    id: "vision-inspection-commissioning",
    title: "Successful Commissioning of Vision Inspection System",
    category: "Engineering Delivery",
    date: "AUG 20, 2020",
    summary:
      "GCCI recently supported the design and implementation of an AI-driven vision inspection solution for steel tube and strip processing lines, enabling 100% surface defect detection and automated quality control.",
    details:
      "The custom computer-vision system processes high-speed rolling lines with sub-millimeter defect detection, reducing scrap rates, eliminating manual visual inspection errors, and ensuring zero-defect dispatches."
  },
  {
    id: "custom-spm-development",
    title: "Custom SPM (Special Purpose Machine) Development Completed",
    category: "Process Automation",
    date: "AUG 20, 2020",
    summary:
      "Our engineering team successfully coordinated the development of tailor-made SPMs for assembly and machining applications, improving cycle time, safety, and productivity at multiple client plants.",
    details:
      "Engineered to boost throughput, repeatability, and cycle time efficiency at client plants, resolving key production bottlenecks and enhancing workplace safety."
  },
  {
    id: "iot-predictive-maintenance",
    title: "GCCI Expands IoT & AI Offerings for Predictive Maintenance",
    category: "Industrial IoT",
    date: "AUG 20, 2020",
    summary:
      "GCCI now provides IoT-based sensor integration for critical machines along with AI/ML predictive maintenance models that help clients prevent breakdowns and optimize equipment reliability.",
    details:
      "Predictive models evaluate real-time machine health indices, enabling plant engineers to detect anomalies weeks before failure and shift from reactive firefighting to precision scheduled intervention."
  }
];

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsItemType | null>(null);

  return (
    <section id="news" className="relative w-full bg-white py-14 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-10 border-b border-slate-200">
          <div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1f1d1d] leading-tight">
              News
            </h2>
          </div>
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0a3d91] hover:text-[#082d64] transition-colors"
          >
            <span>View All News & Milestones</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 2-Column News Layout */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left Column: Main News with Image */}
          <div
            onClick={() => setSelectedArticle(featuredNews)}
            className="lg:col-span-6 group cursor-pointer"
          >
            {/* Image Container with Arrow in top right */}
            <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-200/80">
              <Image
                src={featuredNews.image || "/images/img_4.jpg"}
                alt={featuredNews.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 pointer-events-none">
                <div className="btn-arrow btn-arrow-grey shadow-md rounded-xl">
                  <ArrowUpRight className="arrow-primary" />
                  <ArrowUpRight className="arrow-secondary" />
                </div>
              </div>
            </div>

            {/* Content Below Main Image */}
            <div className="mt-4 sm:mt-5">
              <h3 className="latest-news--item--title text-lg xs:text-xl sm:text-2xl font-semibold leading-snug">
                {featuredNews.title}
              </h3>
              <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#3f3b3c] leading-[1.5] font-normal">
                {featuredNews.summary}
              </p>
              <div className="mt-4 flex flex-col xs:flex-row xs:items-center justify-between gap-2.5">
                <span className="text-xs sm:text-[13px] font-medium text-slate-500 uppercase tracking-wider">
                  {featuredNews.date}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0a3d91] group-hover:translate-x-1 transition-transform">
                  <span>Inquire About This Milestone</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 News Items Stack */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-slate-200">
            {sideNewsList.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedArticle(item)}
                className="py-4 sm:py-5 lg:py-6 first:pt-0 last:pb-0 flex items-center justify-between gap-4 sm:gap-6 group cursor-pointer"
              >
                <div className="flex-1 pr-1 sm:pr-2">
                  <h3 className="latest-news--item--title text-base sm:text-xl lg:text-[22px] font-medium leading-snug sm:leading-normal">
                    {item.title}
                  </h3>
                  <span className="mt-1.5 block text-xs sm:text-[13px] font-medium text-slate-500 tracking-wider uppercase">
                    {item.date}
                  </span>
                </div>
                <div className="btn-arrow btn-arrow-grey shadow-2xs shrink-0">
                  <ArrowUpRight className="arrow-primary" />
                  <ArrowUpRight className="arrow-secondary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Detail / Inquiry Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#0a3d91] uppercase tracking-wider pr-8">
              <span>{selectedArticle.category}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
            </div>

            <h3 className="mt-3 text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
              {selectedArticle.title}
            </h3>

            <div className="mt-3 sm:mt-4 rounded-xl bg-slate-50 p-3.5 sm:p-4 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {selectedArticle.summary}
            </div>

            <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
              <p>{selectedArticle.details}</p>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 border-t border-slate-100 flex flex-col-reverse xs:flex-row items-stretch xs:items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer text-center"
              >
                Close
              </button>
              <Link
                href="/contact"
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0a3d91] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#082d64] transition-colors shadow-sm text-center"
              >
                <span>Inquire About This Milestone</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
