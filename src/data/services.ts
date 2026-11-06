export interface SubService {
  title: string;
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  iconName: string;
  subServices: string[];
  keyHighlights: string[];
}

export const servicesData: ServicePillar[] = [
  {
    id: "advocacy-assessment",
    number: "01",
    title: "Advocacy, Assessment, Capability Development & Recognition of Competitiveness",
    shortTitle: "Advocacy & Assessment",
    tagline: "World-Class Manufacturing & Operational Excellence Frameworks",
    description:
      "Promoting and guiding organizations toward world-class operational excellence through structured maturity evaluations, diagnostic audits, and customized capability development aligned with JIPM and international benchmarks.",
    iconName: "ShieldCheck",
    subServices: [
      "Awareness Programs on TPM / TQM / Lean / TPS",
      "Benchmarking Studies & Best-Practice Sharing",
      "Leadership Advisory for Business Excellence Journey",
      "Policy Guidance for Manufacturing Competitiveness",
      "Steering Committee Facilitation for TPM/TQM Deployment",
      "TPM Maturity Assessment (JIPM Model Compatible)",
      "TQM System Assessment & Lean Maturity Audits",
      "TPS Assessment & Business Excellence Diagnostic",
      "Gap Analysis & Strategic Roadmap Creation",
      "Pre-Audit & Certification Readiness Verification",
      "Capability Development for Plant Teams & Leadership"
    ],
    keyHighlights: [
      "122+ Assessment activity reports prepared",
      "61+ Comprehensive plant assessments",
      "Aligned with JIPM & JICA standards"
    ]
  },
  {
    id: "liaison-technology-automation",
    number: "02",
    title: "Liaison Global Expertise, Technology Support & Industry Automation",
    shortTitle: "Global Expertise & Automation",
    tagline: "Connecting Indian Manufacturing with Global Engineering Pioneers",
    description:
      "Connecting Indian industries with global OEMs and world-class technology partners in Japan, Germany, USA, and beyond, providing advanced technical solutions to modernize production lines and adopt Industry 4.0 standards.",
    iconName: "Cpu",
    subServices: [
      "International Technology Partnership Facilitation",
      "Liaison with Global Equipment Manufacturers (OEMs)",
      "Expert Exchange & Knowledge Transfer Programs",
      "Global Vendor Identification & Technical Evaluation",
      "Joint Technology Development Support",
      "Import Assistance for Specialized Industrial Machinery",
      "Technology Upgradation Consulting & Modernization",
      "Custom Machine & Special Purpose Machine (SPM) Design Support",
      "Smart Manufacturing Integration (IoT / IIoT / MES / OEE)",
      "Process Engineering & Digital Transformation",
      "ERW Steel Tube Mills Engineering & Line Optimization"
    ],
    keyHighlights: [
      "Direct technical tie-ups in Germany, Japan, and USA",
      "Custom SPM development for machining & assembly",
      "ERW steel tube mills engineering expertise"
    ]
  },
  {
    id: "maintenance-software-iot-ai",
    number: "03",
    title: "Maintenance Software, Support IT, IoT & AI Solutions",
    shortTitle: "Maintenance Software & IoT/AI",
    tagline: "Digitizing Operations to Maximize Equipment Reliability & Uptime",
    description:
      "Modernizing maintenance operations with Computerized Maintenance Management Systems (CMMS), IoT sensor integration for critical equipment, and AI/ML predictive analytics to prevent catastrophic breakdowns and optimize asset lifecycles.",
    iconName: "Database",
    subServices: [
      "Computerized Maintenance Management System (CMMS)",
      "Preventive & Predictive Maintenance Scheduling",
      "Breakdown & Root Cause Analysis (RCA) Tracking",
      "Spare Parts Inventory Management & Min-Max Reorder",
      "Digital Work Orders & Mobile Maintenance Apps",
      "Maintenance Performance Dashboards (MTTR, MTBF, %PM)",
      "AMC & Warranty Tracking System",
      "Integration with ERP, SCADA, PLC Infrastructure",
      "IoT Sensor Integration for Vibration, Temp & Current",
      "AI/ML Predictive Models for Equipment Failure Forecast",
      "Comprehensive IT Infrastructure & Network Architecture"
    ],
    keyHighlights: [
      "Real-time MTTR & MTBF automated tracking",
      "IoT sensor deployment on critical machinery",
      "Integration with leading industrial ERPs & PLCs"
    ]
  },
  {
    id: "tpm-software-platform",
    number: "04",
    title: "TPM Software (Subscription Model)",
    shortTitle: "Cloud-Based TPM Platform",
    tagline: "Complete Digital Platform Covering All 8 TPM Pillars",
    description:
      "An enterprise-grade, cloud-based digital platform supporting all 8 TPM pillars, complete with real-time operational dashboards, mobile application connectivity for plant floor teams, and structured management review modules.",
    iconName: "Layers",
    subServices: [
      "Autonomous Maintenance (AM Steps, Checklists, Tags & Audits)",
      "Planned Maintenance (Schedules, Life Analysis, PM KPIs)",
      "Quality Maintenance (Defect Mapping, 4M, QC Tools)",
      "Kobetsu Kaizen (Kaizen Registers, Cost-Saving Impact)",
      "Focused Improvement (Chronic Loss Analysis, OEE Tracking)",
      "Training & Development (Skill Matrix, JH/JI Cards)",
      "Safety, Health & Environment (Incident & Hazard Reporting)",
      "Office TPM & Administration Streamlining",
      "Digital Dashboards for TPC, TPI, and TPA Review Meetings",
      "Mobile App for On-Site Audits, Photos, and Tagging",
      "Cloud-Based, Multi-Plant Secure Subscription Architecture"
    ],
    keyHighlights: [
      "Full coverage of all 8 TPM pillars",
      "Mobile app for shop floor tags & Kaizen submission",
      "Enterprise multi-plant subscription model"
    ]
  }
];
