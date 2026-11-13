import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";
import { Users } from "lucide-react";

export const metadata = {
  title: "Board of Directors | GCCI International LLP",
  description:
    "Meet the visionary leadership behind GCCI International LLP: Yuvaraj Sithaiyan (Founder & Director) and Sheeja Yuvaraj (Director & Chief CSR)."
};

export default function DirectorsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Leadership Section */}
      <section className="relative w-full overflow-hidden pt-20 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 lg:pb-28 bg-slate-50/50">
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 text-[#0a387c] font-bold tracking-[2px] uppercase text-xs sm:text-[13px]">
              <Users className="h-4 w-4" />
              <span>Board of Directors</span>
            </div>
            <h1 className="mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.16]">
              The Mind Behind the{" "}
              <span className="italic bg-gradient-to-r from-[#111726] to-[#6366F1] bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
          </div>

          {/* Leader Card 1: Yuvaraj Sithaiyan */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12 bg-white p-5 sm:p-8 lg:p-10 rounded-[28px] sm:rounded-[36px] lg:rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 mb-12 sm:mb-16 lg:mb-20 transition-all duration-500 hover:shadow-[0_30px_65px_rgba(0,0,0,0.12)] group">
            {/* Leader Image */}
            <div className="w-full md:w-[320px] lg:w-[350px] shrink-0 h-[300px] sm:h-[380px] lg:h-[400px] rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden relative shadow-md bg-slate-100">
              <Image
                src="/images/directors/yuvaraj_sithaiyan.jpeg"
                alt="Yuvaraj Sithaiyan - Founder & Director"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Leader Content */}
            <div className="flex-1 text-left w-full">
              <div className="inline-block bg-[#ffedd5] text-[#c2410c] px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold text-xs sm:text-sm tracking-wide mb-3 sm:mb-4">
                Founder & Director
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Yuvaraj Sithaiyan
              </h2>
              <div className="relative pl-4 sm:pl-6 border-l-4 border-[#fb923c]">
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed italic font-normal">
                  A visionary leader driving business transformation through global best practices and
                  strategic partnerships. With deep expertise in TPM, Lean, and operational excellence, he
                  continues to lead GCCI’s mission of enabling organizations to achieve sustainable
                  performance improvement and global competitiveness.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 flex items-center gap-3 text-slate-400 font-semibold text-xs sm:text-sm">
                <span className="w-8 sm:w-10 h-[1.5px] bg-slate-300 inline-block" />
                <span>Best Regards</span>
              </div>
            </div>
          </div>

          {/* Leader Card 2: Sheeja Yuvaraj (Reversed on Desktop) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12 bg-white p-5 sm:p-8 lg:p-10 rounded-[28px] sm:rounded-[36px] lg:rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 mb-8 lg:mb-12 transition-all duration-500 hover:shadow-[0_30px_65px_rgba(0,0,0,0.12)] group">
            {/* Leader Image */}
            <div className="w-full md:w-[320px] lg:w-[350px] shrink-0 h-[300px] sm:h-[380px] lg:h-[400px] rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden relative shadow-md bg-slate-100">
              <Image
                src="/images/directors/sheeja_yuvaraj.jpeg"
                alt="Sheeja Yuvaraj - Director & Chief CSR"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Leader Content */}
            <div className="flex-1 text-left w-full">
              <div className="inline-block bg-[#ffedd5] text-[#c2410c] px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold text-xs sm:text-sm tracking-wide mb-3 sm:mb-4">
                Director & Chief CSR
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Sheeja Yuvaraj
              </h2>
              <div className="relative pl-4 sm:pl-6 border-l-4 border-[#fb923c]">
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed italic font-normal">
                  A strong advocate of socially responsible growth, she leads GCCI’s CSR initiatives with a
                  focus on community development and capability enhancement. Her leadership brings a
                  balanced approach to business, ensuring value creation not only for clients but also for
                  society.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 flex items-center gap-3 text-slate-400 font-semibold text-xs sm:text-sm">
                <span className="w-8 sm:w-10 h-[1.5px] bg-slate-300 inline-block" />
                <span>Best Regards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Call to Action Section with Fixed Background Video */}
      <CtaSection />

      <Footer />
    </main>
  );
}
