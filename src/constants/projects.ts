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

export const projects: Project[] = [
  {
    id: 1,
    slug: "etix",
    title: "Etix",
    role: "Frontend Engineer",
    company: "Alpha Red Solutions",
    overview:
      "Event ticketing platform for concerts and festivals in Malaysia.",
    description:
      "Etix is a ticketing platform serving concerts, festivals, and live events across Malaysia. The platform handles ticket availability, reservations, bookings, and payment processing for event organizers and attendees. As part of a company wide migration effort, the frontend was rebuilt from Vue.js to React with TanStack Start, moving revenue critical customer flows onto a modern, more maintainable stack without disrupting live ticket sales.",
    liveSite: "https://book.etix.my/home-revamp",
    period: "Apr 2026 - Present",
    tags: ["Event Management", "Ticketing", "E-Commerce"],
    task: [
      {
        id: 1,
        name: "Served as the sole frontend engineer on an end-to-end migration from Vue.js to React and TanStack Start, rebuilding 5 revenue critical customer journeys without interrupting live ticket sales.",
      },
      {
        id: 2,
        name: "Integrated Store APIs powering ticket availability, reservations, bookings, and payment, replacing legacy Vue data flows with typed React and TanStack Start patterns.",
      },
      {
        id: 3,
        name: "Fixed reliability issues across 6 production critical areas including session expiration, real-time inventory caching, booking re-entry, payment recovery, API contract mismatches, and React rendering performance.",
      },
      {
        id: 4,
        name: "Rebuilt checkout and booking flows to handle high concurrency ticket releases, reducing stale inventory states during peak traffic windows.",
      },
      {
        id: 5,
        name: "Worked directly with backend and product teams across the APAC region to align migration scope with zero downtime requirements on a live commercial platform.",
      },
    ],
    techStack: [
      { id: 1, name: "React" },
      { id: 2, name: "TanStack Start" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "REST API" },
      { id: 6, name: "Vite" },
      { id: 7, name: "Microsoft Azure" },
      { id: 8, name: "Git" },
    ],
    image: "/assets/images/banner-etix.webp",
    mockupPhoneImage: "/assets/images/banner-etix.webp",
    mockupDesktopImage: "/assets/images/banner-etix.webp",
    internalLink: "/project/etix",
    keywords: [],
  },
  {
    id: 2,
    slug: "repo-alpha-red-group-portal",
    title: "Orbyte",
    role: "Frontend Engineer",
    company: "Alpha Red Solutions",
    overview: "Internal HRIS portal for Alpha Red Group's regional workforce.",
    description:
      "Orbyte is the internal HRIS platform used across Alpha Red Group to manage employee records, roles, and HR workflows for a distributed APAC team. Built to replace fragmented, manual HR processes with a centralized, role-aware system, the portal covers employee data management, access control, and document workflows within a single authenticated interface used daily by internal staff across regions.",
    period: "Apr 2026 - Present",
    tags: ["Internal Tool", "HRIS", "B2B"],
    task: [
      {
        id: 1,
        name: "Built the frontend for an internal HRIS platform serving 50+ users, digitizing previously manual employee management workflows.",
      },
      {
        id: 2,
        name: "Implemented role-based access control across employee data views, reducing data-entry errors by 30% through automated validation and permission scoped forms.",
      },
      {
        id: 3,
        name: "Built the frontend for an AI assisted document workflow, unifying document generation, review, and revision into a single authenticated, responsive interface.",
      },
      {
        id: 4,
        name: "Designed reusable form and data table components in Material UI to standardize HR record management across multiple modules.",
      },
      {
        id: 5,
        name: "Coordinated with fully remote, cross-functional teams across the APAC region on asynchronous delivery and release cycles.",
      },
    ],
    techStack: [
      { id: 1, name: "React" },
      { id: 2, name: "Material UI" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "REST API" },
      { id: 5, name: "Microsoft Azure" },
      { id: 6, name: "Git" },
    ],
    image: "/assets/images/banner-orbyte.webp",
    mockupPhoneImage: "/assets/images/banner-orbyte.webp",
    mockupDesktopImage: "/assets/images/banner-orbyte.webp",
    liveSite: "https://orbyte.alphareds.com/",
    internalLink: "/project/repo-alpha-red-group-portal",
    keywords: [],
  },
  {
    id: 3,
    slug: "legal-plus",
    title: "Legal Plus",
    role: "Software Engineer",
    company: "Legal Plus",
    overview: "Cloud-based legal practice management for Indonesian firms.",
    image: "/assets/images/banner-legal-plus.webp",
    mockupPhoneImage: "/assets/images/legal-plus-phone.webp",
    mockupDesktopImage: "/assets/images/legal-plus-desktop.webp",
    description:
      "Legal Plus is a cloud-based legal practice management platform built specifically to help Indonesian law firms streamline and modernize their operations through a centralized digital system. It integrates case management, client records, document organization, task tracking, billing, and internal collaboration into a single secure workspace, allowing firms to reduce administrative complexity and improve overall efficiency. By digitizing core legal workflows, Legal Plus enables better deadline monitoring, structured documentation, transparent financial management, and more organized communication across teams. Designed with scalability and data security in mind, the platform supports law firms in maintaining professional standards while increasing productivity and delivering more reliable, technology-driven legal services.",
    liveSite: "https://legalplus.co.id/",
    internalLink: "/project/legal-plus",
    period: "Jan 2026 - Present",
    keywords: [
      "Legal Plus",
      "Legal Plus Indonesia",
      "software firma hukum",
      "sistem manajemen kantor hukum",
      "legal practice management",
      "software advokat Indonesia",
      "manajemen kasus hukum",
      "legal case management",
      "Legal Plus cloud",
      "software pengacara",
      "digitalisasi firma hukum",
      "legal tech Indonesia",
      "practice management software",
      "law firm software Indonesia",
      "Legal Plus Arif Wahyu Prasetyo",
      "sistem billing kantor hukum",
      "document management legal",
      "legal workflow automation",
      "kantor hukum digital",
      "legal compliance software",
    ],
    tags: ["SaaS", "B2B", "Cloud-Based"],
    task: [
      {
        id: 1,
        name: "Engineered 4 end-to-end payment flows (package renewal, upgrade, add-on storage & accounts) on the core SaaS frontend, streamlining the entire transaction experience for the platform's active client base.",
      },
      {
        id: 2,
        name: "Architected a granular role-based permission system across 60+ page and panel level access points, covering case management, contacts, financials, invoicing, reports, and system settings, enabling precise CRUD control per user role across the entire SaaS platform.",
      },
      {
        id: 3,
        name: "Improved existing frontend code by refactoring tightly coupled components into cleaner, more scalable structures, increasing readability and long-term maintainability.",
      },
      {
        id: 4,
        name: "Delivered 15+ production-ready UI pages and components from scratch, translating Figma designs into fully responsive and pixelaccurate interfaces across the core SaaS application.",
      },
      {
        id: 5,
        name: "Resolved critical frontend bugs across the core SaaS application, maintaining production stability and ensuring consistent UX for active clients.",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Tailwind CSS",
      },
      {
        id: 3,
        name: "Zustand",
      },
      {
        id: 4,
        name: "React Query",
      },
      {
        id: 5,
        name: "Typescript",
      },
      {
        id: 6,
        name: "Node.js",
      },
      {
        id: 7,
        name: "CI/CD",
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
    role: "Software Engineer",
    company: "Playfields",
    overview: "Multi-tenant SaaS for sports venue management.",
    image: "/assets/images/banner-playfields.webp",
    mockupPhoneImage: "/assets/images/playfields-phone.webp",
    mockupDesktopImage: "/assets/images/playfields-desktop.webp",
    description:
      "Playfields is an innovative SaaS platform that empowers field owners to digitize and manage their futsal or mini soccer businesses with ease. From seamless booking systems, real-time schedule management, to integrated payment features. Playfields helps local sports venues operate more efficiently. The platform also provides admin dashboards, session-based pricing, and auto expire unpaid bookings to ensure optimal field utilization and user experience. Designed for scalability and ease of use, Playfields is redefining how field operations are managed.",
    liveSite: "https://playfields.id/",
    internalLink: "/project/playfields",
    period: "Mar 2025 - Jan 2026",
    tags: ["SaaS", "B2B", "Booking System"],
    keywords: [
      "Playfields",
      "Booking lapangan online",
      "Sistem manajemen lapangan",
      "Jadwal futsal online",
      "Dashboard pemilik lapangan",
      "Booking futsal & mini soccer",
      "Platform Playfields Indonesia",
      "Digitalisasi pengelolaan lapangan",
      "Website booking futsal",
      "Sewa lapangan online",
      "Admin lapangan Playfields",
      "Lapangan mini soccer online",
      "Playfields web app",
      "Playfields untuk UMKM olahraga",
      "Fitur booking realtime",
      "Sistem pembayaran booking",
      "Notifikasi booking lapangan",
      "Playfields Arif Wahyu Prasetyo",
      "Sistem kasir lapangan futsal",
    ],
    task: [
      {
        id: 1,
        name: "Architected and built multi-tenant SaaS platform from scratch enabling sports venue owners to manage bookings, serving data with real-time reservation system.",
      },
      {
        id: 2,
        name: "Integrated Xendit payment gateway processing transactions monthly with secure payment handling, automated reminder, and reconciliation features reducing manual payment tracking by 90%.",
      },
      {
        id: 3,
        name: "Created a responsive admin dashboard using Tailwind CSS that integrates venue analytics, revenue reports, booking workflows, and customer insights, improving clarity and decision-making for operational teams.",
      },
      {
        id: 4,
        name: "Collaborated with cross-functional teams in agile environment, consistently delivering sprint commitments with on-time delivery.",
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
        name: "Tailwind CSS",
      },
      {
        id: 4,
        name: "Supabase",
      },
      {
        id: 5,
        name: "Zustand",
      },
      {
        id: 6,
        name: "TanStack Query",
      },
      {
        id: 7,
        name: "Payment Gateway",
      },
      {
        id: 8,
        name: "Typescript",
      },
      {
        id: 9,
        name: "Amplitude",
      },
      {
        id: 10,
        name: "Vercel",
      },
      {
        id: 11,
        name: "Git",
      },
    ],
  },
  {
    id: 5,
    slug: "kubu-id",
    title: "Kubu.id",
    role: "Software Engineer",
    company: "Business Watch Indonesia",
    overview: "Community and job platform for professionals.",
    image: "/assets/images/banner-kubu-id.webp",
    mockupPhoneImage: "/assets/images/kubu-id-phone.webp",
    mockupDesktopImage: "/assets/images/kubu-id-desktop.webp",
    description:
      "Kubu.id is a dedicated online platform designed to empower informal, non-formal, and casual workers by connecting them with new job opportunities, career insights, and professional consultations. Whether you’re a freelancer, daily wage worker, or part-time employee, Kubu.id provides direct access to employment-related information and expert advice to help you navigate your career journey. Take control of your career today! Download the Kubu.id app now and unlock new opportunities in the world of informal work.",
    liveSite: "https://kubu.id/",
    internalLink: "/project/kubu-id",
    period: "June 2023 - Mar 2025",
    tags: ["Job Portal", "Mobile App", "Career Development"],
    keywords: [
      "Kubu.id",
      "kubu id",
      "pekerja informal",
      "loker informal",
      "lowongan kerja informal",
      "pekerjaan informal",
      "kerja lepas",
      "freelancer Indonesia",
      "lowongan kerja harian",
      "kerja part-time",
      "informal job Indonesia",
      "platform pekerja informal",
      "kubu id app",
      "Kubu loker informal",
      "download Kubu.id",
      "lowongan kerja freelance",
      "aplikasi pekerja lepas",
      "freelance marketplace",
      "lowongan kerja kasual",
      "karir pekerja informal",
      "kubu id android",
      "Kubu.id Google Play Store",
      "pekerjaan fleksibel Indonesia",
      "cari kerja informal",
      "info kerja harian",
      "info kerja lepas",
      "job portal Indonesia",
      "Kubu.id freelancer",
      "pekerja non-formal",
      "bursa kerja informal",
      "kesempatan kerja fleksibel",
    ],
    task: [
      {
        id: 1,
        name: "Collaborate with Marketing Team and resulting in new marketing feature using email that is succeeded in increasing website insight by 10%",
      },
      {
        id: 2,
        name: "Developed and maintained Android applications with over 14,000+ downloads on the Google Play Store",
      },
      {
        id: 3,
        name: "Conducted post-release monitoring and implemented updates based on user feedback and crash analytics to maintain app stability",
      },
      {
        id: 4,
        name: "Managed the end-to-end deployment process on the Google Play Store, ensuring successful launches and compliance with platform guidelines",
      },
      {
        id: 5,
        name: "Implemented Firebase Cloud Messaging to develop push notification feature resulting in 5% increase in user-engagement",
      },
      {
        id: 6,
        name: "Successfully integrated dynamic content through API connections, improving data reliability and user experience",
      },
      {
        id: 7,
        name: "Optimize App performance by optimizing assets and minimazing redundant code",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "Codeigniter 3",
      },
      {
        id: 2,
        name: "Android SDK",
      },
      {
        id: 3,
        name: "Play Store Deployment",
      },
      {
        id: 4,
        name: "Kotlin",
      },
      {
        id: 5,
        name: "MVP",
      },
      {
        id: 6,
        name: "REST API",
      },
      {
        id: 7,
        name: "Firebase Cloud Messaging",
      },
      {
        id: 8,
        name: "Firebase Crashlytics",
      },
      {
        id: 9,
        name: "MySql",
      },
      {
        id: 10,
        name: "Play Store Deployment",
      },
      {
        id: 11,
        name: "Git",
      },
    ],
  },
  {
    id: 6,
    slug: "bisnislink",
    title: "BisnisLink",
    role: "Software Engineer",
    company: "Business Watch Indonesia",
    overview:
      "The e-commerce platform connecting SME suppliers with verified resellers.",
    image: "/assets/images/banner-bisnislink.webp",
    mockupPhoneImage: "/assets/images/bisnislink-phone.webp",
    mockupDesktopImage: "/assets/images/bisnislink-desktop.webp",
    description:
      "BisnisLink is an all-in-one E-Commerce platform designed to help Small and Medium Enterprises (UMKM) grow their businesses efficiently. With BisnisLink, entrepreneurs can easily showcase their products, reach a wider audience, and increase sales through a seamless digital marketplace. In addition to our E-Commerce services, BisnisLink provides free business articles and blogs, offering valuable insights on entrepreneurship, marketing strategies, and business development. Whether you’re starting a new venture or scaling your existing business, BisnisLink is your go-to platform for success.",
    liveSite: "https://bisnislink.id/",
    internalLink: "/project/bisnislink",
    period: "Sep 2024 - Mar 2025",
    tags: ["E-Commerce", "B2B", "B2C", "Small Business", "Marketplace"],
    keywords: [
      "BisnisLink",
      "BisnisLink UMKM",
      "platform bisnislink",
      "website bisnislink",
      "umkm lokal bisnislink",
      "majukan umkm lokal",
      "BisnisLink e-commerce",
      "e-commerce UMKM",
      "digitalisasi UMKM",
      "marketplace BisnisLink",
      "jual produk di BisnisLink",
      "cara daftar BisnisLink",
      "Bisnislink indonesia",
      "Reseller bisnislink",
      "Supplier bisnislink",
      "website resmi BisnisLink",
      "BisnisLink platform terbaik",
      "BisnisLink Arif Wahyu Prasetyo",
      "BisnisLink supplier dan reseller",
    ],
    task: [
      {
        id: 1,
        name: "Improved maintainability and reduced bugs by 30%, ensuring a more robust and scalable application",
      },
      {
        id: 2,
        name: "Designed and developed web applications using React.js for the frontend and Laravel for the backend, ensuring seamless integration between both layers",
      },
      {
        id: 3,
        name: "Actively participated in the entire development lifecycle, from planning and design to deployment and post-launch optimization",
      },
      {
        id: 4,
        name: "Actively participated in the entire development lifecycle, from planning and design to end-user test",
      },
      {
        id: 5,
        name: "Integrated Firebase Cloud Messaging (FCM) to implement push notifications",
      },
      {
        id: 6,
        name: "Improved application performance by 20% through server-side optimizations and frontend code enhancements, ensuring a faster and smoother user experience",
      },
      {
        id: 7,
        name: "Designed and implemented a migration of legacy applications from a Laravel monolith architecture to a microservice architecture using React.js and Chakra UI for the frontend, paired with a Laravel backend",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "Laravel",
      },
      {
        id: 2,
        name: "React.js",
      },
      {
        id: 3,
        name: "Chakra UI",
      },
      {
        id: 4,
        name: "Firebase Cloud Messaging",
      },
      {
        id: 5,
        name: "Postman",
      },
      {
        id: 6,
        name: "REST API",
      },
      {
        id: 7,
        name: "Git",
      },
      {
        id: 8,
        name: "Typescript",
      },
    ],
  },
];
