"use client";

import { useEffect, useRef, useState } from "react";
import { FileCheck, Shield, Layers, Globe2 } from "lucide-react";

interface KpiItem {
  id: string;
  icon: typeof FileCheck;
  target: number;
  suffix: string;
  label: string;
  description: string;
}

const kpis: KpiItem[] = [
  {
    id: "reports",
    icon: FileCheck,
    target: 122,
    suffix: "+",
    label: "TPM Assessment",
    description: "Activity Reports Completed"
  },
  {
    id: "assessments",
    icon: Shield,
    target: 61,
    suffix: "+",
    label: "Comprehensive",
    description: "Plant Assessments"
  },
  {
    id: "pillars",
    icon: Layers,
    target: 8,
    suffix: "",
    label: "TPM Pillars",
    description: "Digitalized in Cloud SaaS"
  },
  {
    id: "assessors",
    icon: Globe2,
    target: 7,
    suffix: "+",
    label: "External Expert",
    description: "Health Check Assessors"
  }
];

// Custom animated counter component that counts up when scrolled into view
function CounterItem({ item, isVisible }: { item: KpiItem; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const Icon = item.icon;

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = item.target;
    const duration = 1800; // 1.8s smooth duration
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutCubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, item.target]);

  return (
    <div className="flex items-start gap-4 border-l-2 border-[#1d64d8] pl-4 sm:pl-5 py-1">
      <div className="text-blue-400 mt-1 shrink-0 p-2 rounded-lg bg-blue-950/60 border border-blue-800/40">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <div>
        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex items-baseline">
          <span>{count}</span>
          <span className="text-blue-400 font-bold ml-0.5">{item.suffix}</span>
        </div>
        <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-200 leading-tight">
          {item.label}
        </div>
        <div className="text-xs text-slate-400 leading-snug">
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default function KpiSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger animation once when reached
        }
      },
      {
        threshold: 0.25, // Start counting when 25% of section is visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-slate-950 border-y border-slate-800/90 py-10 sm:py-14 text-white shadow-inner"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {kpis.map((kpi) => (
            <CounterItem key={kpi.id} item={kpi} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
