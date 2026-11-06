import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export const metadata = {
  title: "Board of Directors | GCCI International LLP",
  description:
    "Meet the leadership behind GCCI International LLP: Yuvaraj Sithaiyan (Founder & Director) and Sheeja Yuvaraj (Director & Chief CSR)."
};

export default function DirectorsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero
        title="Board of Directors"
        subtitle="The Mind Behind the Mission"
        bgImage="/images/img_23.jpg"
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto pb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a3d91] bg-white px-3 py-1 rounded border border-slate-200">
              Executive Leadership
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              The Mind Behind the Mission
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Driving business transformation through global best practices, disciplined methodologies, and ethical governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Director 1: Yuvaraj Sithaiyan */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:border-[#0a3d91] transition-colors">
              <div>
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src="/public/founder_1.jpeg"
                    alt="Founder & Director Yuvaraj Sithaiyan"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="mt-6">
                  <span className="inline-block rounded bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0a3d91]">
                    Founder & Director
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    Yuvaraj Sithaiyan
                  </h3>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  A visionary leader driving business transformation through global best practices and
                  strategic partnerships. With deep expertise in TPM, Lean, and operational excellence, he
                  continues to lead GCCI’s mission of enabling organizations to achieve sustainable
                  performance improvement and global competitiveness.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-serif italic text-slate-500">
                Best Regards,
                <span className="block not-italic font-bold text-slate-800 font-sans mt-0.5">
                  Yuvaraj Sithaiyan
                </span>
              </div>
            </div>

            {/* Director 2: Sheeja Yuvaraj */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:border-[#0a3d91] transition-colors">
              <div>
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src="/public/founder_4.jpeg"
                    alt="Director & Chief CSR Sheeja Yuvaraj"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="mt-6">
                  <span className="inline-block rounded bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0a3d91]">
                    Director & Chief CSR
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    Sheeja Yuvaraj
                  </h3>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  A strong advocate of socially responsible growth, she leads GCCI’s CSR initiatives with a
                  focus on community development and capability enhancement. Her leadership brings a
                  balanced approach to business, ensuring value creation not only for clients but also for
                  society.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-serif italic text-slate-500">
                Best Regards,
                <span className="block not-italic font-bold text-slate-800 font-sans mt-0.5">
                  Sheeja Yuvaraj
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
