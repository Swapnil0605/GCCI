import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight
} from "lucide-react";

const servicesList = [
  {
    label: "Advocacy / Assessment / Capability Development / Recognition of Competitiveness",
    href: "/service1"
  },
  {
    label: "Liaison Global Expertise Technology Support / Industry Automation",
    href: "/service2"
  },
  {
    label: "Maintenance Software / Support IT / IoT / AI",
    href: "/service3"
  },
  {
    label: "TPM Software (Subscription Model)",
    href: "/service4"
  }
];

const quickLinksList = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services & Offerings", href: "/#services" },
  { label: "Global Presence", href: "/#alliances" },
  { label: "Gallery & Activities", href: "/gallery" },
  { label: "News & Milestones", href: "/news" },
  { label: "Training Portal (BTLC)", href: "/training-program" },
  { label: "Contact & Help Portal", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-white text-slate-600 border-t border-slate-200">
      {/* Main Footer Links */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative h-12 w-44 sm:h-14 sm:w-64 transition-transform duration-200 group-hover:scale-[1.01]">
                <Image
                  src="/images/new_logo_gcci.png"
                  alt="GCCI International Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              GCCI International LLP inspires global excellence by transforming organizations through knowledge,
              innovation, and international engineering collaboration.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-snug">Shop No. LG-K-02, S. No. 588/2B, Raviraj Cru Premises, Bibwewadi, Market Yard, Pune, Maharashtra, India.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                <a href="tel:+917620121069" className="hover:text-blue-700 font-medium transition-colors">
                  +91 7620121069
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                <a href="mailto:gcci-enquiry@gcci-india.com" className="hover:text-blue-700 font-medium transition-colors">
                  gcci-enquiry@gcci-india.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {servicesList.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-700 transition-colors flex items-start gap-1.5 group"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-blue-600 transition-transform group-hover:translate-x-0.5 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {quickLinksList.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-700 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-blue-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Global Alliances & Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              GLOBAL PRESENCE
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Japan (TPM Mentorship)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Germany (Engineering Liaison)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>USA (Robotics & AI)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Australia (Software Engineering)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>India (National Operations)</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">
                STANDARDS ALIGNMENT
              </div>
              <div className="text-xs sm:text-sm text-slate-800 font-semibold mt-1">
                JIPM • JICA • TPS • ISO
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 GCCI International LLP. All Rights Reserved. Formerly Global Corporate Council India.
          </div>
          <div className="text-xs sm:text-[13px] text-slate-500 font-medium">
            Designed and Developed by{" "}
            <a
              href="https://qirotec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 font-semibold tracking-wide hover:text-blue-700 underline-offset-4 hover:underline transition-colors"
            >
              Qiro Tech Innovation Pvt Ltd
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
