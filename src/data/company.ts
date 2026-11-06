export interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
  highlights: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export const companyData = {
  name: "GCCI International LLP",
  originalName: "Global Corporate Council India (GCCI)",
  foundedYear: "2017",
  rebrandedYear: "2023",
  headquarters: "Pune, Maharashtra, India",
  fullAddress: "Shop No. LG-K-02, S. No. 588/2B, Raviraj Cru Premises, Bibwewadi, Market Yard, Pune, Maharashtra, India.",
  phone: "+91 7620121069",
  email: "gcci-enquiry@gcci-india.com",
  tagline: "Inspiring Global Excellence",
  missionStatement: "Transforming Organizations Through Knowledge, Innovation, and Collaboration.",
  overview:
    "Founded in 2017 with a vision of delivering end-to-end solutions through global expertise, GCCI has evolved into a multifaceted enterprise. In 2023, we expanded and rebranded as GCCI International LLP. As a consortium specializing in Business Consulting, Process Automation Solutions, Vision-based Automated Inspection, and ERW Steel Tube Mills, GCCI combines extensive expertise and global partnerships to enhance operational efficiency, product quality, and technological competitiveness for our clients.",
  
  stats: [
    { value: "2017", label: "Founded in Pune, India", sub: "Evolving into GCCI International LLP in 2023" },
    { value: "122+", label: "TPM Assessment Reports", sub: "Prepared with rigorous analytical precision" },
    { value: "61+", label: "Comprehensive Assessments", sub: "Conducted across tier-1 manufacturing plants" },
    { value: "8", label: "TPM Pillars Digitalized", sub: "End-to-end SaaS platform for operations" },
    { value: "7+", label: "External Expert Assessors", sub: "Global health check-up leaders & advisors" }
  ],

  leaders: [
    {
      name: "Yuvaraj Sithaiyan",
      role: "Founder & Director",
      image: "/images/about/founder_yuvaraj.jpeg",
      bio: "A visionary leader driving business transformation through global best practices and strategic partnerships. With deep expertise in TPM, Lean, and operational excellence, he leads GCCI’s mission of enabling organizations to achieve sustainable performance improvement and global competitiveness.",
      highlights: [
        "Specialist in JIPM TPM methodology & shopfloor transformation",
        "Pioneered global technical alliances in Germany, Japan, and USA",
        "Led 100+ plant assessments and operational turnarounds"
      ]
    },
    {
      name: "Sheeja Yuvaraj",
      role: "Director & Chief CSR",
      image: "/images/about/founder_sheeja.jpeg",
      bio: "A strong advocate of socially responsible growth, Sheeja Yuvaraj champions GCCI's community engagement and sustainability initiatives, ensuring business success goes hand-in-hand with human development and social impact.",
      highlights: [
        "Oversees CSR strategy, community enablement, and governance",
        "Champions human-centric operational frameworks",
        "Drives institutional culture and ethical compliance"
      ]
    }
  ],

  timeline: [
    {
      year: "2017",
      title: "Foundation in Pune",
      description: "Global Corporate Council India (GCCI) was established in Pune, India, with a focused mission to drive business excellence, TPM, TQM, and Lean transformations.",
      image: "/images/about/2017.jpg"
    },
    {
      year: "2018",
      title: "TPM Consulting Division",
      description: "Formally structured its TPM (Total Productive Maintenance) and Operational Excellence Consulting Division, initiating partnerships with premier Indian manufacturing plants.",
      image: "/images/about/2018.jpg"
    },
    {
      year: "2019",
      title: "Global Technology Liaisons",
      description: "Formed strategic alliances with global industrial technology partners and equipment manufacturers in Japan and Germany.",
      image: "/images/about/2019.jpg"
    },
    {
      year: "2020",
      title: "Digital Maintenance & Remote Diagnostics",
      description: "Introduced digital maintenance monitoring tools and remote capability assessment frameworks to support uninterrupted operational continuity.",
      image: "/images/about/2020.jpg"
    },
    {
      year: "2021",
      title: "Automation & Special Purpose Machinery",
      description: "Expanded into industrial process automation, custom SPM coordination, and advanced quality assurance consulting.",
      image: "/images/about/2021.jpg"
    },
    {
      year: "2022",
      title: "Vision Inspection & Industry 4.0 Integration",
      description: "Spearheaded AI-powered vision inspection systems for steel tube, strip processing, and precision fabrication industries.",
      image: "/images/about/2022.jpg"
    },
    {
      year: "2023",
      title: "Rebranding to GCCI International LLP",
      description: "Expanded corporate scope and formally incorporated as GCCI International LLP to manage international technology transfers and multi-plant engagements.",
      image: "/images/about/2023.jpg"
    },
    {
      year: "2024",
      title: "Next-Gen SaaS TPM Suite",
      description: "Architected and piloted the cloud-based TPM platform covering all 8 pillars, real-time dashboards, and mobile operator apps.",
      image: "/images/about/2024.jpg"
    },
    {
      year: "2025 - Present",
      title: "Global Consortium & Future Expansion",
      description: "Commercial rollout of the subscription TPM platform, expanding IoT/AI predictive maintenance, and international training symposiums.",
      image: "/images/about/2025.jpg"
    }
  ],

  whyUsPillars: [
    {
      number: "01",
      title: "Value Creator to Organization Purpose",
      description: "We align every initiative directly with your organizational purpose, ensuring measurable value creation that strengthens long-term enterprise growth."
    },
    {
      number: "02",
      title: "Driving Team to Optimize Return on Human Resource",
      description: "Our consulting and training frameworks empower your workforce to deliver peak performance and enhanced ROI on human capital."
    },
    {
      number: "03",
      title: "Trustworthiness & Absolute Transparency",
      description: "With global partnerships and proven methodologies, we operate with complete transparency, integrity, and disciplined reliability."
    },
    {
      number: "04",
      title: "Creativity as Culture",
      description: "We cultivate a work culture of creative problem-solving and structured Kaizen that inspires innovation and continuous improvement across all tiers."
    },
    {
      number: "05",
      title: "Value the Principles and People",
      description: "We uphold strong professional ethics while respecting individuals, fostering a healthy, principle-driven, and empowering industrial environment."
    },
    {
      number: "06",
      title: "Meticulousness to the Committed Task",
      description: "We approach every project with exacting attention to detail and disciplined execution, ensuring consistent, dependable, and audit-ready results."
    }
  ]
};
