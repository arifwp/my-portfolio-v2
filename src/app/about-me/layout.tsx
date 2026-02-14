import { ContainerLayout } from "@/components/containers/ContainerLayout";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_FRONTEND_URL || "https://arifprasetyo.com";

export const metadata: Metadata = {
  title: "About Me - Arif Wahyu Prasetyo | Full Stack Engineer Journey",
  description:
    "Learn about Arif Wahyu Prasetyo's journey as a Full Stack Engineer specializing in Frontend Development. Alumni of Universitas Amikom Yogyakarta with expertise in React, Next.js, TypeScript, and modern web technologies. Based in Jakarta, Indonesia.",
  keywords: [
    "About Arif Wahyu Prasetyo",
    "Arif Wahyu Biography",
    "Full Stack Engineer Indonesia",
    "Frontend Developer Jakarta",
    "React Developer Indonesia",
    "Next.js Expert Indonesia",
    "TypeScript Developer",
    "Web Developer Jakarta",
    "Amikom Yogyakarta Alumni",
    "Software Engineer Indonesia",
    "Professional Experience Arif Wahyu",
    "Tech Skills Arif Wahyu",
  ],

  authors: [{ name: "Arif Wahyu Prasetyo" }],
  creator: "Arif Wahyu Prasetyo",

  openGraph: {
    type: "profile",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: `${baseUrl}/about-me`,
    title: "About Me - Arif Wahyu Prasetyo | Full Stack Engineer",
    description:
      "Learn about my journey as a Full Stack Engineer specializing in Frontend Development. Expertise in React, Next.js, TypeScript, and building scalable web applications.",
    siteName: "Arif Wahyu Prasetyo Portfolio",
    images: [
      {
        url: `${baseUrl}/assets/images/about-me-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Arif Wahyu Prasetyo - Full Stack Engineer",
        type: "image/jpeg",
      },
      {
        url: `${baseUrl}/assets/images/profile.jpg`,
        width: 800,
        height: 800,
        alt: "Arif Wahyu Prasetyo Profile Photo",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Me - Arif Wahyu Prasetyo | Full Stack Engineer",
    description:
      "Learn about my journey as a Full Stack Engineer. Expertise in React, Next.js, TypeScript, and modern web development.",
    creator: "@arifwahyuu_",
    images: [`${baseUrl}/assets/images/about-me-og.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: `${baseUrl}/about-me`,
    languages: {
      "id-ID": `${baseUrl}/about-me`,
      "en-US": `${baseUrl}/about-me`,
    },
  },

  category: "Personal",
  classification: "About Page",
};

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Arif Wahyu Prasetyo",
      alternateName: "Arif Wahyu",
      jobTitle: "Full Stack Engineer",
      description:
        "Full Stack Engineer specializing in Frontend Development with expertise in React, Next.js, and TypeScript",
      url: baseUrl,
      image: `${baseUrl}/assets/images/profile.jpg`,
      sameAs: [
        "https://github.com/arifwp",
        "https://linkedin.com/in/arif-wahyu-prasetyo",
        "https://x.com/arifwahyuu_",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Freelance / Contract",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Universitas Amikom Yogyakarta",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Yogyakarta",
          addressCountry: "ID",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressRegion: "DKI Jakarta",
        addressCountry: "ID",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Frontend Development",
        "Full Stack Development",
        "Tailwind CSS",
        "Node.js",
        "Web Development",
        "UI/UX Development",
        "API Development",
        "Database Design",
      ],
      knowsLanguage: [
        {
          "@type": "Language",
          name: "Indonesian",
          alternateName: "id",
        },
        {
          "@type": "Language",
          name: "English",
          alternateName: "en",
        },
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Me",
          item: `${baseUrl}/about-me`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <ContainerLayout>{children}</ContainerLayout>
    </>
  );
}
