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
    slug: "legal-plus",
    title: "Legal Plus",
    role: "Full Stack Engineer",
    company: "Legal Plus",
    overview: "Cloud-based legal practice management for Indonesian firms.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",
    mockupPhoneImage: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/legal-plus-phone.webp`,
    mockupDesktopImage: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/legal-plus-desktop.webp`,
    description:
      "Obvious wallet, a self-custody crypto currency wallet app that aims to bring a more convenient and seamless way to transact and manage assets",
    liveSite: "https://legalplus.co.id/",
    internalLink: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/project/legal-plus`,
    period: "Jan 2026 - Present",
    keywords: [],
    tags: ["SaaS", "B2B", "Cloud-Based"],
    task: [
      {
        id: 1,
        name: "Reduced booking-related issues by 40% through improved data handling and auto-expire mechanisms",
      },
      {
        id: 2,
        name: "Developed frontend features using Next.js, Tailwind CSS, and Zustand for state management, ensuring responsive and dynamic UI",
      },
      {
        id: 3,
        name: "Implemented Supabase as backend service with real-time updates, authentication, and cloud storage integration",
      },
      {
        id: 4,
        name: "Built dynamic pricing and schedule management based on day-type and session rules with full calendar visualization",
      },
      {
        id: 5,
        name: "Integrated Xendit for payment gateway, handling booking expiration logic and webhook-based payment status update",
      },
      {
        id: 6,
        name: "Enabled multi-role user access (owner/staff) and invitation-based collaboration to support flexible team management",
      },
      {
        id: 7,
        name: "Developed reusable custom hooks and modular components to ensure scalability and maintainability of the codebase",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Next.js",
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
        name: "React Query",
      },
      {
        id: 6,
        name: "Typescript",
      },
      {
        id: 7,
        name: "Node.js",
      },
      {
        id: 8,
        name: "CI/CD",
      },
      {
        id: 9,
        name: "Git",
      },
    ],
  },
  {
    id: 2,
    slug: "playfields",
    title: "Playfields",
    role: "Full Stack Developer",
    company: "Playfields",
    overview: "Multi-tenant SaaS for sports venue management.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop",
    mockupPhoneImage: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/playfields-phone.webp`,
    mockupDesktopImage: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/playfields-desktop.webp`,
    description:
      "Playfields is an innovative SaaS platform that empowers field owners to digitize and manage their futsal or mini soccer businesses with ease. From seamless booking systems, real-time schedule management, to integrated payment features. Playfields helps local sports venues operate more efficiently. The platform also provides admin dashboards, session-based pricing, and auto expire unpaid bookings to ensure optimal field utilization and user experience. Designed for scalability and ease of use, Playfields is redefining how field operations are managed.",
    liveSite: "https://playfields.id/",
    internalLink: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/project/playfields`,
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
        name: "Reduced booking-related issues by 40% through improved data handling and auto-expire mechanisms",
      },
      {
        id: 2,
        name: "Developed frontend features using Next.js, Tailwind CSS, and Zustand for state management, ensuring responsive and dynamic UI",
      },
      {
        id: 3,
        name: "Implemented Supabase as backend service with real-time updates, authentication, and cloud storage integration",
      },
      {
        id: 4,
        name: "Built dynamic pricing and schedule management based on day-type and session rules with full calendar visualization",
      },
      {
        id: 5,
        name: "Integrated Xendit for payment gateway, handling booking expiration logic and webhook-based payment status update",
      },
      {
        id: 6,
        name: "Enabled multi-role user access (owner/staff) and invitation-based collaboration to support flexible team management",
      },
      {
        id: 7,
        name: "Developed reusable custom hooks and modular components to ensure scalability and maintainability of the codebase",
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
    id: 3,
    slug: "kubu-id",
    title: "Kubu.id",
    role: "Full Stack Developer",
    company: "Business Watch Indonesia",
    overview: "Community and job platform for professionals.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop",
    mockupPhoneImage: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/kubu-id-phone.webp`,
    mockupDesktopImage: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/kubu-id-desktop.webp`,
    description:
      "Kubu.id is a dedicated online platform designed to empower informal, non-formal, and casual workers by connecting them with new job opportunities, career insights, and professional consultations. Whether you’re a freelancer, daily wage worker, or part-time employee, Kubu.id provides direct access to employment-related information and expert advice to help you navigate your career journey. Take control of your career today! Download the Kubu.id app now and unlock new opportunities in the world of informal work.",
    liveSite: "https://kubu.id/",
    internalLink: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/project/kubu-id`,
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
    id: 4,
    slug: "bisnislink",
    title: "BisnisLink",
    role: "Full Stack Developer",
    company: "Business Watch Indonesia",
    overview:
      "The e-commerce platform connecting SME suppliers with verified resellers.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop",
    mockupPhoneImage: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/bisnislink-phone.webp`,
    mockupDesktopImage: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/bisnislink-desktop.webp`,
    description:
      "BisnisLink is an all-in-one E-Commerce platform designed to help Small and Medium Enterprises (UMKM) grow their businesses efficiently. With BisnisLink, entrepreneurs can easily showcase their products, reach a wider audience, and increase sales through a seamless digital marketplace. In addition to our E-Commerce services, BisnisLink provides free business articles and blogs, offering valuable insights on entrepreneurship, marketing strategies, and business development. Whether you’re starting a new venture or scaling your existing business, BisnisLink is your go-to platform for success.",
    liveSite: "https://bisnislink.id/",
    internalLink: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/project/bisnislink`,
    period: "Sep 2024 - Mar 2-25",
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
