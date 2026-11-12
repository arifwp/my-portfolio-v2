export interface BasicData {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  role: string;
  company: string;
  overview: string;
  description: string;
  image: string;
  mockupPhoneImage: string;
  mockupDesktopImage: string;
  liveSite: string;
  internalLink: string;
  period: string;
  keywords: string[];
  tags: string[];
  task: BasicData[];
  techStack: BasicData[];
}

export function projectSummary(project: Project) {
  return `I worked as a ${project.role} on ${project.title} for ${project.company}. ${project.overview}`;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "etix",
    title: "Etix",
    role: "Software Engineer",
    company: "Alpha Red Solutions",
    overview:
      "Event ticketing frontend migrated from Vue.js to React and TanStack Start.",
    description:
      "Etix is an event ticketing platform in Malaysia. At Alpha Red Solutions, I migrated its Vue.js frontend to React and TanStack Start, implementing a 5-stage booking journey connected to availability, reservation, and payment APIs. I also reduced redundant API requests across session checks and order history.",
    liveSite: "https://book.etix.my/home-revamp",
    period: "Apr 2026 - Present",
    tags: ["Event Management", "Ticketing", "E-Commerce"],
    task: [
      {
        id: 1,
        name: "I migrated the Vue.js ticketing frontend to React and TanStack Start, implementing a 5-stage booking journey.",
      },
      {
        id: 2,
        name: "I integrated availability, reservation, and payment APIs into the booking workflow.",
      },
      {
        id: 3,
        name: "I deduplicated session checks and eliminated redundant order-detail calls, reducing order-history requests by 30%.",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "TanStack Start",
      },
      {
        id: 3,
        name: "TypeScript",
      },
      {
        id: 4,
        name: "Vite",
      },
      {
        id: 5,
        name: "Tailwind CSS",
      },
      {
        id: 6,
        name: "TanStack Query",
      },
      {
        id: 7,
        name: "REST APIs",
      },
      {
        id: 8,
        name: "Azure",
      },
      {
        id: 9,
        name: "Git",
      },
    ],
    image: "/assets/images/banner-etix-v3.webp",
    mockupPhoneImage: "/assets/images/banner-etix-v3.webp",
    mockupDesktopImage: "/assets/images/banner-etix-v3.webp",
    internalLink: "/project/etix",
    keywords: [
      "Etix",
      "Alpha Red Solutions",
      "Software Engineer",
      "Event Management",
      "Ticketing",
      "E-Commerce",
    ],
  },
  {
    id: 2,
    slug: "repo-alpha-red-group-portal",
    title: "Orbyte",
    role: "Software Engineer",
    company: "Alpha Red Solutions",
    overview:
      "Workforce-management portal with configurable profiles, claims, and approvals.",
    description:
      "Orbyte is an internal workforce-management portal for Alpha Red Group. At Alpha Red Solutions, I built configurable employee-profile requirements and connected employee claims, profile approvals, and task reporting to backend APIs. Administrators can manage required-field rules for 79 fields, with the same settings applied across 3 profile-management forms.",
    period: "Apr 2026 - Present",
    tags: ["Internal Tool", "HRIS", "B2B"],
    task: [
      {
        id: 1,
        name: "I built configurable employee-profile requirements, giving administrators control over required-field rules for 79 fields.",
      },
      {
        id: 2,
        name: "I applied the required-field settings across 3 profile-management forms.",
      },
      {
        id: 3,
        name: "I developed employee claims, profile approvals, and task-reporting features connected to backend APIs.",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "TypeScript",
      },
      {
        id: 3,
        name: "Material UI",
      },
      {
        id: 4,
        name: "REST APIs",
      },
      {
        id: 5,
        name: "Azure",
      },
      {
        id: 6,
        name: "Git",
      },
    ],
    image: "/assets/images/banner-orbyte.webp",
    mockupPhoneImage: "/assets/images/banner-orbyte.webp",
    mockupDesktopImage: "/assets/images/banner-orbyte.webp",
    liveSite: "https://orbyte.alphareds.com/",
    internalLink: "/project/repo-alpha-red-group-portal",
    keywords: [
      "Orbyte",
      "Alpha Red Solutions",
      "Software Engineer",
      "Internal Tool",
      "HRIS",
      "B2B",
    ],
  },
  {
    id: 3,
    slug: "legal-plus",
    title: "Legal Plus",
    role: "Full Stack Engineer",
    company: "Legal Plus",
    overview:
      "Legal practice management SaaS with subscriptions and role-based permissions.",
    image: "/assets/images/banner-legal-plus.webp",
    mockupPhoneImage: "/assets/images/legal-plus-phone.webp",
    mockupDesktopImage: "/assets/images/legal-plus-desktop.webp",
    description:
      "Legal Plus is legal practice management software for Indonesian law firms. I implemented subscription payments and role-based permissions, then connected those controls to user-facing workflows across the SaaS application. The work covered 4 payment flows, permissions across 60+ pages and panels, and 15+ pages and components.",
    liveSite: "https://legalplus.co.id/",
    internalLink: "/project/legal-plus",
    period: "Jan 2026 - Apr 2026",
    keywords: [
      "Legal Plus",
      "Legal Plus",
      "Full Stack Engineer",
      "SaaS",
      "B2B",
      "Cloud-Based",
    ],
    tags: ["SaaS", "B2B", "Cloud-Based"],
    task: [
      {
        id: 1,
        name: "I implemented 4 subscription payment flows covering package renewals, upgrades, additional storage, and additional user accounts.",
      },
      {
        id: 2,
        name: "I implemented role-based permissions across 60+ pages and panels, controlling create, read, update, and delete actions.",
      },
      {
        id: 3,
        name: "I built 15+ SaaS pages and components, connecting backend APIs, subscription payments, and permission controls to user-facing workflows.",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "TypeScript",
      },
      {
        id: 3,
        name: "Tailwind CSS",
      },
      {
        id: 4,
        name: "Zustand",
      },
      {
        id: 5,
        name: "TanStack Query",
      },
      {
        id: 6,
        name: "Node.js",
      },
      {
        id: 7,
        name: "REST APIs",
      },
      {
        id: 8,
        name: "Git",
      },
    ],
  },
  {
    id: 4,
    slug: "playfields",
    title: "Playfields",
    role: "Full Stack Engineer",
    company: "Playfields",
    overview:
      "Multi-tenant sports venue SaaS for reservations, payments, and reporting.",
    image: "/assets/images/banner-playfields.webp",
    mockupPhoneImage: "/assets/images/playfields-phone.webp",
    mockupDesktopImage: "/assets/images/playfields-desktop.webp",
    description:
      "Playfields is a multi-tenant SaaS platform for sports venue booking and management. I architected and built the platform from scratch, integrating real-time reservations, automated payments, and operational reporting. Xendit handles payment capture, automated reminders, and reconciliation, reducing manual payment tracking by 90%.",
    liveSite: "https://playfields.id/",
    internalLink: "/project/playfields",
    period: "Mar 2025 - Jan 2026",
    tags: ["SaaS", "B2B", "Booking System"],
    keywords: [
      "Playfields",
      "Playfields",
      "Full Stack Engineer",
      "SaaS",
      "B2B",
      "Booking System",
    ],
    task: [
      {
        id: 1,
        name: "I architected and built a multi-tenant SaaS platform from scratch, integrating real-time reservations, automated payments, and operational reporting.",
      },
      {
        id: 2,
        name: "I integrated Xendit payment capture, automated reminders, and reconciliation, reducing manual payment tracking by 90% and enabling launch without a dedicated finance workflow.",
      },
      {
        id: 3,
        name: "I developed a responsive Tailwind CSS dashboard for venue analytics, revenue reports, booking workflows, and customer insights.",
      },
      {
        id: 4,
        name: "I collaborated with cross-functional teams in an agile environment, delivering sprint commitments on time.",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "Next.js",
      },
      {
        id: 2,
        name: "React.js",
      },
      {
        id: 3,
        name: "TypeScript",
      },
      {
        id: 4,
        name: "Tailwind CSS",
      },
      {
        id: 5,
        name: "Supabase",
      },
      {
        id: 6,
        name: "Zustand",
      },
      {
        id: 7,
        name: "TanStack Query",
      },
      {
        id: 8,
        name: "Xendit",
      },
      {
        id: 9,
        name: "PostgreSQL",
      },
      {
        id: 10,
        name: "Git",
      },
    ],
  },
  {
    id: 5,
    slug: "kubu-id",
    title: "Kubu.id",
    role: "Full Stack Developer",
    company: "Business Watch Indonesia",
    overview:
      "Job platform with a Kotlin Android app supporting 15,000+ downloads.",
    image: "/assets/images/banner-kubu-id.webp",
    mockupPhoneImage: "/assets/images/kubu-id-phone.webp",
    mockupDesktopImage: "/assets/images/kubu-id-desktop.webp",
    description:
      "Kubu.id connects informal and non-formal workers with job opportunities. At Business Watch Indonesia, I maintained and enhanced its Kotlin Android application through performance and UI/UX improvements, supporting an app with 15,000+ Google Play downloads. My work at the organization also covered freemium subscriptions, recruiter tools, and targeted newsletter campaigns.",
    liveSite: "https://kubu.id/",
    internalLink: "/project/kubu-id",
    period: "Jun 2023 - Mar 2025",
    tags: ["Job Portal", "Mobile App", "Career Development"],
    keywords: [
      "Kubu.id",
      "Business Watch Indonesia",
      "Full Stack Developer",
      "Job Portal",
      "Mobile App",
      "Career Development",
    ],
    task: [
      {
        id: 1,
        name: "I maintained and enhanced the Kotlin Android application through performance and UI/UX improvements, supporting 15,000+ Google Play downloads.",
      },
      {
        id: 2,
        name: "I built a freemium subscription model with candidate filtering and recruiter analytics, establishing the platform’s primary recurring revenue stream.",
      },
      {
        id: 3,
        name: "I automated targeted newsletter campaigns through Mailchimp, increasing weekly active users by 28% and improving retention by 35%.",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "Kotlin",
      },
      {
        id: 2,
        name: "Firebase",
      },
      {
        id: 3,
        name: "REST APIs",
      },
      {
        id: 4,
        name: "MySQL",
      },
      {
        id: 5,
        name: "Mailchimp",
      },
      {
        id: 6,
        name: "Git",
      },
    ],
  },
  {
    id: 6,
    slug: "bisnislink",
    title: "BisnisLink",
    role: "Full Stack Developer",
    company: "Business Watch Indonesia",
    overview:
      "Web marketplace connecting small-business suppliers and resellers.",
    image: "/assets/images/banner-bisnislink.webp",
    mockupPhoneImage: "/assets/images/bisnislink-phone.webp",
    mockupDesktopImage: "/assets/images/bisnislink-desktop.webp",
    description:
      "BisnisLink is a web marketplace for small businesses, suppliers, and resellers. It was one of 2 platforms I delivered and maintained at Business Watch Indonesia. My responsibilities at the organization spanned requirements, architecture, development, QA, and post-launch iteration without a dedicated product manager or technical lead.",
    liveSite: "https://bisnislink.id/",
    internalLink: "/project/bisnislink",
    period: "Sep 2024 - Mar 2025",
    tags: ["E-Commerce", "B2B", "B2C", "Small Business", "Marketplace"],
    keywords: [
      "BisnisLink",
      "Business Watch Indonesia",
      "Full Stack Developer",
      "E-Commerce",
      "B2B",
      "B2C",
      "Small Business",
      "Marketplace",
    ],
    task: [
      {
        id: 1,
        name: "I delivered and maintained BisnisLink as one of 2 platforms at Business Watch Indonesia.",
      },
      {
        id: 2,
        name: "I managed requirements, architecture, development, QA, and post-launch iteration without a dedicated product manager or technical lead.",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "Laravel",
      },
      {
        id: 3,
        name: "TypeScript",
      },
      {
        id: 4,
        name: "MySQL",
      },
      {
        id: 5,
        name: "Firebase",
      },
      {
        id: 6,
        name: "REST APIs",
      },
      {
        id: 7,
        name: "Git",
      },
    ],
  },
];
