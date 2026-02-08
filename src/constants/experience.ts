export interface Experience {
  id: number;
  companyLogo: string;
  companyName: string;
  companyOverview: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  relatedProjects: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    companyLogo: "/assets/logos/legal-plus.webp",
    companyName: "Legal Plus",
    companyOverview:
      "A cloud-based legal practice management platform designed to help Indonesian law firms streamline case management, client collaboration, and administrative workflows in a secure and efficient way.",
    role: "Full Stack Engineer",
    location: "Bandung, West Java, Indonesia",
    startDate: "Jan 2026",
    endDate: "Present",
    relatedProjects: ["legal-plus"],
  },
  {
    id: 2,
    companyLogo: "/assets/logos/playfields.webp",
    companyName: "Playfields",
    companyOverview:
      "A SaaS booking management platform for futsal and mini soccer fields, offering real-time availability, online reservations, and integrated payment solutions for both players and venue owners.",
    role: "Full Stack Engineer",
    location: "Bandung, West Java, Indonesia",
    startDate: "March 2025",
    endDate: "Jan 2026",
    relatedProjects: ["playfields"],
  },
  {
    id: 3,
    companyLogo: "/assets/logos/bwi.webp",
    companyName: "Business Watch Indonesia",
    companyOverview:
      "A digital platform focused on promoting fair, transparent, and sustainable business practices through research, education, and policy-driven initiatives.",
    role: "Full Stack Engineer",
    location: "Bandung, West Java, Indonesia",
    startDate: "Jun 2023",
    endDate: "March 2025",
    relatedProjects: ["kubu-id", "bisnislink"],
  },
];
