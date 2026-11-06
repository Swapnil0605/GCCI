import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "News | GCCI International LLP",
  description:
    "Official corporate announcements, technology partnerships, and engineering milestones from GCCI International LLP."
};

const newsArticles = [
  {
    date: "June 09, 2025",
    title: "GCCI Launches Cloud-Based TPM Software (Subscription Model)",
    desc: "GCCI has introduced a next-generation TPM Digital Platform covering all eight TPM pillars with real-time dashboards, mobile app connectivity, and cloud-based analytics.",
    image: "/public/service_hero.jpg"
  },
  {
    date: "Aug 22, 2020",
    title: "New Partnership for Global Industrial Technology Integration",
    desc: "GCCI has established collaborative channels with international OEMs and technology experts for automation and smart manufacturing solutions.",
    image: "/images/img_4.jpg"
  },
  {
    date: "Aug 20, 2020",
    title: "Successful Commissioning of Vision Inspection System",
    desc: "GCCI recently supported the design and implementation of an AI-driven vision inspection solution for steel tube and strip processing lines, enabling 100% surface defect detection and automated quality control.",
    image: "/images/img_12.jpg"
  },
  {
    date: "July 15, 2020",
    title: "Custom SPM Development Completed",
    desc: "Our engineering team successfully coordinated the development of tailor-made SPMs for assembly and machining applications, boosting productivity across multiple client plants.",
    image: "/images/img_15.jpg"
  },
  {
    date: "May 10, 2020",
    title: "GCCI Expands IoT & AI Offerings for Predictive Maintenance",
    desc: "GCCI now provides IoT-based sensor integration for critical machines along with AI/ML predictive maintenance models that help clients prevent breakdowns and optimize equipment reliability.",
    image: "/images/img_16.jpg"
  }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero
        title="News"
        subtitle="Learning from Japanese excellence to drive global growth and continuous improvement."
        bgImage="/images/img_4.jpg"
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-[#0a3d91] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0a3d91]">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="mt-2 text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0a3d91] transition-colors">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {article.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0a3d91] hover:underline"
                  >
                    <span>Inquire About This Milestone</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Call to Action Banner */}
      <section className="py-16 bg-[#0a3d91] text-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
            Global Corporate Council India
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold">
            &ldquo;Driven by Trust, Guided by Principle, Perfected with Meticulousness.&rdquo;
          </h2>
          <p className="mt-3 text-sm text-blue-100">
            Have a question or project in mind? We’d love to hear from you! Reach out to our team — we’re
            here to turn your ideas into meaningful outcomes.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#0a3d91] shadow-lg hover:bg-slate-100 transition-colors"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
