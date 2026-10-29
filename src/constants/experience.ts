export interface Experience {
  id: number;
  companyLogo?: string;
  companyName: string;
  companyOverview: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  relatedProjects: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: 4,
    companyName: "Alpha Red Solutions",
    companyOverview:
      "Software agency focused on AI and client platform engineering.",
    role: "Software Engineer",
    location: "Selangor, Malaysia (Remote)",
    startDate: "Apr 2026",
    endDate: "Present",
    relatedProjects: ["etix", "repo-alpha-red-group-portal"],
    highlights: [
      "Migrated a Vue.js ticketing frontend to React and TanStack Start, implementing a 5-stage booking journey with availability, reservation, and payment APIs.",
      "Deduplicated session checks and redundant order-detail calls, reducing order-history requests by 30%.",
      "Built configurable required-field rules for 79 employee-profile fields across 3 forms.",
      "Developed employee claims, profile approvals, and task reporting connected to backend APIs.",
    ],
  },
  {
    id: 1,
    companyLogo: "/assets/logos/legal-plus.webp",
    companyName: "Legal Plus",
    companyOverview:
      "Legal technology company building practice management software.",
    role: "Full Stack Engineer",
    location: "Bandung, Indonesia",
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    relatedProjects: ["legal-plus"],
    highlights: [
      "Implemented 4 subscription payment flows for renewals, upgrades, additional storage, and user accounts.",
      "Implemented role-based permissions across 60+ pages and panels.",
      "Built 15+ SaaS pages and components connected to backend APIs, payments, and permission controls.",
    ],
  },
  {
    id: 2,
    companyLogo: "/assets/logos/playfields.webp",
    companyName: "Playfields",
    companyOverview:
      "Sports technology company building venue booking and management software.",
    role: "Full Stack Engineer",
    location: "Sleman, Indonesia (Remote)",
    startDate: "Mar 2025",
    endDate: "Jan 2026",
    relatedProjects: ["playfields"],
    highlights: [
      "Architected and built a multi-tenant SaaS platform with real-time reservations, automated payments, and operational reporting.",
      "Integrated Xendit payment capture, reminders, and reconciliation, reducing manual payment tracking by 90%.",
      "Developed a Tailwind CSS dashboard for venue analytics, revenue reports, bookings, and customer insights.",
      "Delivered sprint commitments on time with cross-functional teams in an agile environment.",
    ],
  },
  {
    id: 3,
    companyLogo: "/assets/logos/bwi.webp",
    companyName: "Business Watch Indonesia",
    companyOverview:
      "Nonprofit focused on agriculture and community development.",
    role: "Full Stack Developer",
    location: "Boyolali, Indonesia",
    startDate: "Jun 2023",
    endDate: "Mar 2025",
    relatedProjects: ["kubu-id", "bisnislink"],
    highlights: [
      "Maintained and enhanced a Kotlin Android application with 15,000+ Google Play downloads.",
      "Built freemium subscriptions, candidate filtering, and recruiter analytics to establish the platform’s primary recurring revenue stream.",
      "Automated Mailchimp newsletters, increasing weekly active users by 28% and improving retention by 35%.",
      "Managed requirements, architecture, development, QA, and post-launch iteration for 2 platforms without a dedicated product manager or technical lead.",
    ],
  },
];
