"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  title: string;
  narrative: string;
  archivalNote?: string;
  highlights?: string[];
  image: string;
  imageCaption: string;
  layout?: "image-left" | "image-right";
  linkText?: string;
  linkHref?: string;
}

interface TimelineBand {
  id: string;
  navId: string;
  navLabel: string;
  eraHeader?: string;
  bgColor: "white" | "sky" | "royal";
  milestones: Milestone[];
}

const timelineBands: TimelineBand[] = [
  // =========================================================================
  // BAND 1: FOUNDING YEARS (Pure White Background)
  // =========================================================================
  {
    id: "band-founding",
    navId: "m-2017",
    navLabel: "Early Years",
    eraHeader: "Early Years",
    bgColor: "white",
    milestones: [
      {
        id: "m-2017",
        year: "2017",
        title: "Establishing the foundation of operational excellence",
        narrative:
          "Global Corporate Council India (GCCI) was established in Pune, Maharashtra. Founded by seasoned manufacturing leaders, the firm set out with a dedicated mandate: to introduce structured Japanese operational frameworks, classical JIPM methodologies, and Lean-based transformations directly to Indian industrial hubs.",
        archivalNote:
          "Initial diagnostic audits were conducted across Tier-1 automotive and industrial corridors in Pune, Chakan, and Aurangabad. The founding team worked directly on factory floors, instituting zero-breakdown and zero-defect management systems.",
        highlights: [
          "Incorporation of Global Corporate Council India in Pune",
          "Adoption of JIPM 8-Pillar TPM Frameworks",
          "First Plant Diagnostics for Automotive Tier-1 Manufacturers",
          "Institutionalization of Direct Gemba Shop-Floor Discipline"
        ],
        image: "/images/img_17.jpg",
        imageCaption: "Founding leadership assembly and strategic planning in Pune, 2017.",
        layout: "image-left",
        linkText: "Learn about our founding practice",
        linkHref: "/about"
      },
      {
        id: "m-2018",
        year: "2018",
        title: "Formation of dedicated TPM consulting division",
        narrative:
          "GCCI formally structured its specialized TPM (Total Productive Maintenance) and Operational Excellence Consulting Division, securing multi-year transformation partnerships with major Indian automotive component makers and steel fabrication mills.",
        archivalNote:
          "GCCI's consultants instituted intensive hands-on coaching, replacing passive advisory decks with continuous on-site gemba diagnostics, Autonomous Maintenance step deployments, and Kobetsu Kaizen registers.",
        highlights: [
          "Formalization of Dedicated TPM Consulting Division",
          "Deployment of Autonomous Maintenance (JH) Steps 1–3",
          "Kobetsu Kaizen and OEE Loss Tree Frameworks",
          "Expansion to 15+ Manufacturing Facilities"
        ],
        image: "/images/img_4.jpg",
        imageCaption: "Bilateral agreement and plant onboarding with manufacturing directors, 2018.",
        layout: "image-left"
      }
    ]
  },

  // =========================================================================
  // BAND 2: CAPABILITIES & GLOBAL LIAISON (Soft Ice/Sky Blue Background)
  // =========================================================================
  {
    id: "band-capabilities",
    navId: "m-2019",
    navLabel: "2019",
    eraHeader: "2019",
    bgColor: "sky",
    milestones: [
      {
        id: "m-2019",
        year: "2019",
        title: "Proprietary plant health checks & skills matrices",
        narrative:
          "Introduced GCCI's proprietary TPM Health Check-Up Assessments, standardized Capability Development Programs, and corporate Business Excellence training modules. The diagnostic frameworks gave executive leadership quantifiable clarity on machine health, workforce competencies, and OEE loss categories.",
        archivalNote:
          "The diagnostic assessed four core vectors: equipment physical condition, operator maintenance autonomy, planned maintenance adherence, and quality defect root-cause resolution.",
        highlights: [
          "Launch of GCCI TPM Health Check-Up Assessment",
          "Standardized Operator Skill Matrix Implementation",
          "Multi-Plant Competitiveness Benchmarking Across 122+ Audits",
          "Over 1,200 Shop-Floor Supervisors Trained"
        ],
        image: "/images/img_21.jpg",
        imageCaption: "Capability development workshop and skills assessment with plant teams, 2019.",
        layout: "image-left"
      },
      {
        id: "m-2020",
        year: "2020",
        title: "Bilateral technology channels with Japanese & European OEMs",
        narrative:
          "GCCI expanded internationally by initiating formal liaison partnerships with technical specialists and machine builders in Japan, Germany, and the United States. This strategic network facilitated the direct transfer of automated Special Purpose Machines (SPMs) and precision fabrication know-how into Indian facilities.",
        archivalNote:
          "GCCI maintained active bilateral liaison links with Japanese Senseis from JIPM and JICA, ensuring Indian plant teams retained direct access to global manufacturing gurus.",
        highlights: [
          "Cross-Border Technology Liaison Channels Established",
          "Introduction of Precision SPM Automation Import",
          "Mentorship Alignment with JIPM and JICA Senseis",
          "Specialized Tube Mill Automation & Modernization Protocols"
        ],
        image: "/images/img_19.jpg",
        imageCaption: "Strategic bilateral liaison with international engineering consortiums, 2020.",
        layout: "image-left"
      }
    ]
  },

  // =========================================================================
  // BAND 3: SMART FACTORY & RECOGNITION (Pure White Background)
  // =========================================================================
  {
    id: "band-recognition",
    navId: "m-2021",
    navLabel: "2021",
    eraHeader: "2021",
    bgColor: "white",
    milestones: [
      {
        id: "m-2021",
        year: "2021",
        title: "Digital visual management and smart factory controls",
        narrative:
          "GCCI engineered standardized Visual Management Systems (VMS) and introduced digital smart factory concepts to classical TPM workflows. By digitizing Autonomous Maintenance tags, breakdown logs, and visual control boards, plants achieved unified real-time visibility across multi-line operations.",
        archivalNote:
          "The integration bridged physical shop-floor tag management with live management dashboards, reducing tag resolution cycles by 40% and providing instant visibility into micro-stoppages.",
        highlights: [
          "Launch of Digital Visual Management Systems (VMS)",
          "Real-Time Shop-Floor Micro-Stoppage Tracking",
          "Integration of 5S and Safety Digital Audits",
          "Adoption by Over 30 Premier Manufacturing Plants"
        ],
        image: "/images/img_18.jpg",
        imageCaption: "Deploying standardized visual management control boards on factory lines, 2021.",
        layout: "image-left"
      },
      {
        id: "m-2022",
        year: "2022",
        title: "Facilitating 69+ prestigious international JIPM TPM awards",
        narrative:
          "A landmark milestone in Indian industrial history: GCCI's continuous consulting support and rigorous coaching enabled client manufacturing plants to achieve recognition for 69+ prestigious JIPM (Japan Institute of Plant Maintenance) TPM Awards. This solidified GCCI's reputation as India's premier authority on international certification.",
        archivalNote:
          "Each JIPM award represents multiple years of disciplined adherence to TPM pillars, rigorous third-party audits by Japanese examiners, and documented reductions in zero breakdowns, zero accidents, and zero defects.",
        highlights: [
          "69+ Client Plants Recognized by JIPM in Japan",
          "Consistent Zero Breakdown Milestones Documented",
          "Recognition Across Automotive, Steel, and FMCG Sectors",
          "Endorsement from Esteemed International JIPM Assessors"
        ],
        image: "/images/img_16.jpg",
        imageCaption: "Celebrating historic JIPM TPM Award recognition with client plant teams, 2022.",
        layout: "image-right"
      }
    ]
  },

  // =========================================================================
  // BAND 4: RESTRUCTURING & GLOBAL REACH (Electric Royal Blue Background)
  // =========================================================================
  {
    id: "band-globalization",
    navId: "m-2023",
    navLabel: "2023",
    eraHeader: "2023",
    bgColor: "royal",
    milestones: [
      {
        id: "m-2023",
        year: "2023",
        title: "Global restructuring as GCCI International LLP",
        narrative:
          "To reflect its multifaceted consulting scope and international reach, the organization formally rebranded and expanded as GCCI International LLP. The restructuring established dedicated liaison desks and technology cooperation agreements across Japan, Germany, the United States, and Australia.",
        archivalNote:
          "The corporate reorganization united four core pillars under one enterprise umbrella: Diagnostic Assessments, International Liaison & Automation, Industrial IT/AI Software, and Enterprise TPM SaaS Platforms.",
        highlights: [
          "Corporate Restructuring as GCCI International LLP",
          "Bilateral Agreements with German & Japanese Partners",
          "Launch of Specialized Automation Engineering Cell",
          "Strategic Consulting Coverage Expanded Nationally"
        ],
        image: "/images/img_14.jpg",
        imageCaption: "Corporate rebranding and multinational alliance formalization, 2023.",
        layout: "image-left"
      },
      {
        id: "m-2024",
        year: "2024",
        title: "Institutionalization of the GCCI TPM Academy",
        narrative:
          "Initiated the GCCI TPM Academy to democratize world-standard operational excellence knowledge. Developed comprehensive masterclasses, Kaizen practitioner certifications, and executive leadership seminars in partnership with seasoned Japanese mentors and prominent Indian industrial associations.",
        archivalNote:
          "The Academy created multi-tiered certification tracks spanning Autonomous Maintenance Specialists, Planned Maintenance Champions, and JIPM Audit Leads, producing certified talent for India's high-growth industrial sector.",
        highlights: [
          "Establishment of GCCI TPM Academy",
          "Multi-Tiered Professional Certification Tracks",
          "Curriculum Authored with Japanese Master Senseis",
          "On-site Diagnostic Clinics and Executive Retreats"
        ],
        image: "/images/img_6.jpg",
        imageCaption: "Inaugural session of the GCCI TPM Academy leadership cohort, 2024.",
        layout: "image-left"
      }
    ]
  },

  // =========================================================================
  // BAND 5: CLOUD, AI & BEYOND (Soft Ice/Sky Blue Background)
  // =========================================================================
  {
    id: "band-ai-cloud",
    navId: "m-2025",
    navLabel: "2025",
    eraHeader: "2025",
    bgColor: "sky",
    milestones: [
      {
        id: "m-2025",
        year: "2025",
        title: "Deployment of cloud-based TPM software & AI vision inspection",
        narrative:
          "Marking a decisive leap into Industry 4.0, GCCI launched its proprietary Cloud-Based TPM Digital Platform covering all eight pillars on a unified subscription model. Simultaneously, the engineering division successfully commissioned high-speed AI-driven vision inspection systems for precision tube mills and strip processing lines.",
        archivalNote:
          "The proprietary platform eliminates paper-based maintenance registers, providing plant CXOs with real-time OEE visibility, predictive anomaly alerts, and dynamic JIPM audit readiness dashboards across geographically distributed plants.",
        highlights: [
          "Enterprise Cloud-Based TPM SaaS Platform Launch",
          "Sub-Millimeter Optical Surface Defect Detection",
          "IoT Predictive Vibration and Thermal Anomaly Models",
          "Smart Factory Architecture Ready for Global Rollout"
        ],
        image: "/images/img_9.jpg",
        imageCaption: "Live demonstration of AI vision quality inspection and cloud TPM dashboards, 2025.",
        layout: "image-left"
      },
      {
        id: "m-beyond",
        year: "2026 & Beyond",
        title: "Autonomous smart factories and expanded global consulting footprint",
        narrative:
          "GCCI International LLP is actively integrating predictive AI models with classical Japanese gemba discipline to pioneer zero-loss operations. Expanding multinational footprints across North America, Europe, and Asia-Pacific to elevate manufacturing organizations to world-class standards.",
        archivalNote:
          "Targeting 100+ facilitated JIPM awards and continuous digital twin factory integration across global client partner plants by 2030.",
        highlights: [
          "Global Advisory Network Across Japan, Germany, USA & Australia",
          "Digital Twin Real-Time OEE Optimization",
          "Cross-Border Capability Training for Future Factory Leaders",
          "Sustainable Industrial Zero-Breakdown Architecture"
        ],
        image: "/images/img_15.jpg",
        imageCaption: "GCCI's international consulting team and strategic global partners looking ahead.",
        layout: "image-right"
      }
    ]
  }
];

// Unified list of sidebar navigation targets (2017 to Beyond)
const navItems = [
  { id: "m-2017", label: "Early Years" },
  { id: "m-2018", label: "2018" },
  { id: "m-2019", label: "2019" },
  { id: "m-2020", label: "2020" },
  { id: "m-2021", label: "2021" },
  { id: "m-2022", label: "2022" },
  { id: "m-2023", label: "2023" },
  { id: "m-2024", label: "2024" },
  { id: "m-2025", label: "2025" },
  { id: "m-beyond", label: "Beyond" }
];

export default function JourneyExperience() {
  const [activeId, setActiveId] = useState<string>("m-2017");
  const [currentTheme, setCurrentTheme] = useState<"white" | "sky" | "royal">("white");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const timelineRef = useRef<HTMLElement | null>(null);

  // Smooth scroll handler
  const scrollToTarget = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Scroll listener for active state and theme detection
  useEffect(() => {
    const handleScroll = () => {
      const timelineEl = timelineRef.current;
      if (!timelineEl) return;

      const vh = window.innerHeight;
      const focusY = vh * 0.35;
      const tRect = timelineEl.getBoundingClientRect();

      // Ensure sidebar is visible only when timeline is within viewport range
      const inTimeline = tRect.top <= vh * 0.35 && tRect.bottom >= vh * 0.35;
      setIsVisible(inTimeline);

      // Milestone active detection
      let newActive = navItems[0].id;
      for (const item of navItems) {
        const mEl = document.getElementById(item.id);
        if (mEl) {
          const mRect = mEl.getBoundingClientRect();
          if (mRect.top <= focusY) {
            newActive = item.id;
          }
        }
      }
      setActiveId(newActive);

      // Detect theme of the band currently behind the sidebar
      let detectedTheme: "white" | "sky" | "royal" = "white";
      for (const band of timelineBands) {
        const bEl = document.getElementById(band.id);
        if (bEl) {
          const bRect = bEl.getBoundingClientRect();
          if (bRect.top <= focusY && bRect.bottom >= focusY) {
            detectedTheme = band.bgColor;
            break;
          }
        }
      }
      setCurrentTheme(detectedTheme);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full bg-white text-slate-900 font-sans">
      {/* ================================================================= */}
      {/* 1. MCKINSEY EDITORIAL INTRO HEADER (Hero Section)                 */}
      {/* ================================================================= */}
      <header className="relative w-full bg-white border-b border-slate-200 pt-16 sm:pt-24 pb-14 sm:pb-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Hierarchy */}
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-500">About Us</span>
            <span>/</span>
            <span className="text-[#0a387c] font-bold">History of our firm</span>
          </div>

          {/* Grand Title in Clean Editorial Serif / Sans */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-serif font-normal text-slate-900 tracking-tight leading-[1.08]">
              History of our firm
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-slate-600 font-serif italic leading-relaxed">
              Explore our timeline to learn about our history, our people, and our continuous pursuit of operational excellence.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl font-normal">
              Over the years, our mission has remained consistent: to help industrial organizations achieve distinctive, lasting,
              and substantial improvements in manufacturing performance through zero breakdowns, zero defects, and world-class JIPM standards.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-serif text-[#0a387c] font-normal">2017</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1">
                Founded in Pune
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif text-[#0a387c] font-normal">69+</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1">
                JIPM Awards Facilitated
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif text-[#0a387c] font-normal">16+</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1">
                Japanese & EU Senseis
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif text-[#0a387c] font-normal">4</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1">
                Global Liaison Hubs
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================================================================= */}
      {/* 2. THE TIMELINE CONTAINER (Navigation strictly contained within)   */}
      {/* ================================================================= */}
      <section id="timeline-experience" ref={timelineRef} className="relative w-full">
        {/* DESKTOP TIMELINE COLUMN LIST: STRICTLY BOUNDED TO TIMELINE CONTAINER */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-60 xl:w-72 2xl:w-80 z-20 pointer-events-none">
          <div
            className={`sticky top-[24vh] pl-8 xl:pl-12 2xl:pl-16 pointer-events-auto transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <nav
              aria-label="Firm History Era Timeline Navigation"
              className="flex flex-col space-y-3.5 xl:space-y-4 select-none"
            >
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                let activeClass = "";
                let inactiveClass = "";

                if (currentTheme === "royal") {
                  activeClass = "text-white font-bold scale-105 origin-left";
                  inactiveClass = "text-white/60 hover:text-white font-normal";
                } else if (currentTheme === "sky") {
                  activeClass = "text-[#0a387c] font-bold scale-105 origin-left";
                  inactiveClass = "text-slate-600 hover:text-[#0a387c] font-normal";
                } else {
                  activeClass = "text-slate-900 font-bold scale-105 origin-left";
                  inactiveClass = "text-slate-400 hover:text-slate-900 font-normal";
                }

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToTarget(item.id)}
                    className={`text-left text-sm xl:text-[15px] transition-all duration-200 cursor-pointer tracking-normal ${
                      isActive ? activeClass : inactiveClass
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile/Tablet Quick Jump Bar (Sticks only inside the timeline) */}
        <nav
          aria-label="Timeline Era Quick Navigation"
          className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 px-4 flex lg:hidden items-center gap-2 overflow-x-auto no-scrollbar shadow-xs"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
            Jump to:
          </span>
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToTarget(item.id)}
                className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0a387c] text-white font-bold shadow-xs scale-105"
                    : "text-slate-600 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Full-width colored decade bands */}
        {timelineBands.map((band) => {
          const bgClass =
            band.bgColor === "royal"
              ? "bg-[#1653e0] text-white"
              : band.bgColor === "sky"
              ? "bg-[#dff2fe] text-slate-900"
              : "bg-white text-slate-900";

          const isDark = band.bgColor === "royal";

          return (
            <section
              key={band.id}
              id={band.id}
              className={`w-full ${bgClass} py-20 sm:py-28 lg:py-36 transition-colors duration-300 relative`}
            >
              <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:pl-64 xl:pl-72 lg:pr-12">
                {/* Huge Era Header (e.g. Early Years, 2019, 2021, 2023, 2025) */}
                {band.eraHeader && (
                  <div className="mb-14 sm:mb-20">
                    <h2
                      className={`text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-light tracking-tight leading-none ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {band.eraHeader}
                    </h2>
                  </div>
                )}

                {/* Milestones inside this band */}
                <div className="space-y-24 sm:space-y-32">
                  {band.milestones.map((m) => {
                    const isImageRight = m.layout === "image-right";

                    return (
                      <article
                        key={m.id}
                        id={m.id}
                        className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
                      >
                        {/* ---------------------------------------------------- */}
                        {/* COLUMN 1: Archival Photo                              */}
                        {/* ---------------------------------------------------- */}
                        <div
                          className={`lg:col-span-6 ${
                            isImageRight ? "lg:order-2" : "lg:order-1"
                          }`}
                        >
                          <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5 shadow-2xs">
                            <Image
                              src={m.image}
                              alt={m.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                              className="object-cover transition-transform duration-700 hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          {m.imageCaption && (
                            <p
                              className={`mt-2.5 text-xs font-serif italic ${
                                isDark ? "text-blue-100/70" : "text-slate-500"
                              }`}
                            >
                              {m.imageCaption}
                            </p>
                          )}
                        </div>

                        {/* ---------------------------------------------------- */}
                        {/* COLUMN 2: Milestone Narrative & Archival Details      */}
                        {/* ---------------------------------------------------- */}
                        <div
                          className={`lg:col-span-6 ${
                            isImageRight ? "lg:order-1" : "lg:order-2"
                          }`}
                        >
                          {/* Thin Horizontal Divider Line (Exact McKinsey Signature) */}
                          <div
                            className={`w-full h-px mb-5 sm:mb-6 ${
                              isDark ? "bg-white/40" : "bg-slate-900/30"
                            }`}
                          />

                          {/* Bold Year */}
                          <div
                            className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                              isDark ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {m.year}
                          </div>

                          {/* Milestone Title */}
                          <h3
                            className={`text-2xl sm:text-3xl font-normal leading-snug tracking-tight mb-4 ${
                              isDark ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {m.title}
                          </h3>

                          {/* Narrative Body */}
                          <p
                            className={`text-base sm:text-[17px] font-normal leading-relaxed ${
                              isDark ? "text-white/90" : "text-slate-700"
                            }`}
                          >
                            {m.narrative}
                          </p>

                          {/* Key Highlights Bullet Points */}
                          {m.highlights && m.highlights.length > 0 && (
                            <div
                              className={`mt-6 pt-5 border-t space-y-2 ${
                                isDark ? "border-white/20" : "border-slate-900/10"
                              }`}
                            >
                              {m.highlights.map((item, hIdx) => (
                                <div
                                  key={hIdx}
                                  className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                                    isDark ? "text-white/85" : "text-slate-700"
                                  }`}
                                >
                                  <span
                                    className={`h-1.5 w-1.5 rounded-full shrink-0 mt-2 ${
                                      isDark ? "bg-white" : "bg-[#0a387c]"
                                    }`}
                                  />
                                  <span className="leading-snug">{item}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Archival Note Accordion */}
                          {m.archivalNote && (
                            <div className="mt-6">
                              <button
                                type="button"
                                onClick={() =>
                                  setExpandedId(expandedId === m.id ? null : m.id)
                                }
                                className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer group ${
                                  isDark
                                    ? "text-blue-100 hover:text-white"
                                    : "text-[#0a387c] hover:text-[#082a5c]"
                                }`}
                              >
                                <span>
                                  {expandedId === m.id
                                    ? "Close Archival Insight"
                                    : "Read Archival Insight"}
                                </span>
                                <ChevronDown
                                  className={`h-3.5 w-3.5 transition-transform duration-300 ${
                                    expandedId === m.id ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {expandedId === m.id && (
                                <div
                                  className={`mt-3 p-4 sm:p-5 border-l-2 text-xs sm:text-sm leading-relaxed ${
                                    isDark
                                      ? "bg-white/10 border-white text-white/90"
                                      : "bg-slate-50 border-[#0a387c] text-slate-700"
                                  }`}
                                >
                                  <div
                                    className={`font-bold uppercase tracking-wider text-[11px] mb-1 ${
                                      isDark ? "text-white" : "text-slate-900"
                                    }`}
                                  >
                                    Archival Note:
                                  </div>
                                  {m.archivalNote}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Optional External/Internal Link */}
                          {m.linkText && m.linkHref && (
                            <div className="mt-4">
                              <Link
                                href={m.linkHref}
                                className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold underline underline-offset-4 ${
                                  isDark
                                    ? "text-white hover:text-blue-200"
                                    : "text-[#0a387c] hover:text-[#082a5c]"
                                }`}
                              >
                                <span>{m.linkText}</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
}
