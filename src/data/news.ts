export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  details: string;
  badge: string;
}

export const newsData: NewsItem[] = [
  {
    id: "cloud-tpm-software",
    title: "GCCI Launches Cloud-Based TPM Software (Subscription Model)",
    category: "Product Innovation",
    date: "June 2025",
    badge: "Digital Platform",
    summary:
      "Next-generation TPM Digital Platform covering all eight TPM pillars with real-time operational dashboards, mobile app connectivity, and cloud-based analytics.",
    details:
      "Designed specifically for manufacturing plants aiming for JIPM compliance and shop floor digital empowerment. The platform digitizes Autonomous Maintenance tags, Kaizen registers, Skill Matrices, and OEE loss trees with role-based access."
  },
  {
    id: "global-technology-integration",
    title: "New Strategic Partnership for Global Industrial Technology Integration",
    category: "Strategic Alliances",
    date: "May 2025",
    badge: "Global Liaison",
    summary:
      "Collaborative channels established with international OEMs and technology experts for automation, smart manufacturing solutions, and advanced vision inspection systems.",
    details:
      "GCCI expands its liaison network with European and Japanese engineering specialists to bring world-standard automation technology, precision SPMs, and know-how directly to Indian manufacturing hubs."
  },
  {
    id: "vision-inspection-commissioning",
    title: "Successful Commissioning of AI-Driven Vision Inspection System",
    category: "Engineering Delivery",
    date: "April 2025",
    badge: "AI & Quality",
    summary:
      "Design and implementation of an AI-driven vision inspection solution for steel tube and strip processing lines, enabling 100% surface defect detection.",
    details:
      "The custom computer-vision system processes high-speed rolling lines with sub-millimeter defect detection, reducing scrap rates, eliminating manual visual inspection errors, and ensuring zero-defect dispatches."
  },
  {
    id: "custom-spm-development",
    title: "Custom Special Purpose Machine (SPM) Development Completed",
    category: "Process Automation",
    date: "March 2025",
    badge: "Machine Engineering",
    summary:
      "Engineering team successfully coordinates the development and commissioning of tailor-made SPMs for precision assembly and machining applications.",
    details:
      "Engineered to boost throughput, repeatability, and cycle time efficiency at client plants, resolving key production bottlenecks and enhancing workplace safety."
  },
  {
    id: "iot-predictive-maintenance",
    title: "GCCI Expands IoT & AI Offerings for Predictive Equipment Maintenance",
    category: "Industrial IoT",
    date: "January 2025",
    badge: "Predictive AI",
    summary:
      "Integration of IoT-based vibration, thermal, and current sensors with AI/ML predictive models to eliminate catastrophic breakdowns.",
    details:
      "Predictive models evaluate real-time machine health indices, enabling plant engineers to detect anomalies weeks before failure and shift from reactive firefighting to precision scheduled intervention."
  }
];

export const projectHighlights = [
  {
    metric: "100%",
    label: "Surface Defect Detection",
    description: "Commissioned AI-driven vision inspection system for steel tube and strip processing lines."
  },
  {
    metric: "8/8",
    label: "TPM Pillars Digitalized",
    description: "Cloud-based enterprise platform with real-time KPI tracking and mobile shop floor apps."
  },
  {
    metric: "122+",
    label: "Assessment Reports",
    description: "Rigorous plant diagnostic activity reports prepared for Tier-1 manufacturers."
  },
  {
    metric: "0",
    label: "Unplanned Stoppages Goal",
    description: "Comprehensive Autonomous & Planned Maintenance frameworks deployed on key lines."
  }
];
