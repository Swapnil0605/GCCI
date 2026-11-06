import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  bgImage = "/public/service_hero.jpg"
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] bg-slate-900 overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover object-center brightness-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d91]/80 via-[#0a3d91]/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-xs transition-colors hover:bg-white hover:text-slate-900"
            >
              <span>Back to Home</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
