import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Awards And Certifications | GCCI International LLP",
  description:
    "Recognized for excellence and celebrated for innovation: Government of India registration and JIPM Certified TPM Specialist credentials."
};

const awardsData = [
  {
    date: "06 September 2017",
    title: "Government of India Form GST REG-06",
    desc: "This certification officially recognizes GCCI International LLP as a registered and compliant business entity under the Goods and Services Tax Act in India. It reinforces our credibility and ensures transparent, lawful, and trustworthy business operations across all our service divisions.",
    img: "/images/about/certificate_2.jpg"
  },
  {
    date: "16 October 2025",
    title: "JIPM Certified TPM Specialist",
    desc: "Acknowledged by globally reputed TPM authorities, this certification validates our deep expertise in Total Productive Maintenance. It highlights our capability to drive significant productivity enhancement, cost reduction, and operational excellence through world-class TPM methodologies.",
    img: "/images/about/certificate_1.jpeg"
  }
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero
        title="Awards And Certifications"
        subtitle="Recognized for Excellence, Celebrated for Innovation"
        bgImage="/images/about/awards_hero.jpg"
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto pb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a3d91] bg-white px-3 py-1 rounded border border-slate-200">
              Verified Accreditations
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              What We’ve Earned
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Global Corporate Council India – GCCI has built a strong reputation for driving operational
              excellence across diverse industries. Our dedication to quality, innovation, and global best
              practices has been consistently recognized by trusted industry leaders and international
              partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {awardsData.map((award, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm hover:border-[#0a3d91] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 p-2">
                    <Image
                      src={award.img}
                      alt={award.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="rounded bg-blue-50 px-3 py-1 text-xs font-bold text-[#0a3d91]">
                      {award.date}
                    </span>
                    <Award className="h-5 w-5 text-[#0a3d91]" />
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {award.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {award.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Officially Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
