import { Project } from "@/constants/projects";
import { Metadata } from "next";

export function generateProjectMetadata(project: Project): Metadata {
  const baseUrl =
    process.env.NEXT_PUBLIC_FRONTEND_URL || "https://arifprasetyo.com";

  return {
    title: `${project.title} - ${project.role} | Arif Wahyu Prasetyo`,
    description: project.overview,

    keywords: [
      project.title,
      ...project.keywords,
      ...project.tags,
      project.company,
      project.role,
      "Arif Wahyu Prasetyo",
      ...project.techStack.map((tech) => tech.name),
    ],

    authors: [{ name: "Arif Wahyu Prasetyo" }],
    creator: "Arif Wahyu Prasetyo",

    openGraph: {
      type: "article",
      locale: "id_ID",
      url: `${baseUrl}/project/${project.slug}`,
      title: `${project.title} - ${project.role}`,
      description: project.overview,
      siteName: "Arif Wahyu Prasetyo Portfolio",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.company}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} - ${project.role}`,
      description: project.overview,
      creator: "@arifwahyuu_",
      images: [project.image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: `${baseUrl}/project/${project.slug}`,
    },
  };
}

export function generateProjectJsonLd(project: Project) {
  const baseUrl =
    process.env.NEXT_PUBLIC_FRONTEND_URL || "https://arifprasetyo.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      // Main Creative Work
      {
        "@type": "CreativeWork",
        "@id": `${baseUrl}/project/${project.slug}#creativework`,
        name: project.title,
        description: project.description,
        url: `${baseUrl}/project/${project.slug}`,
        image: {
          "@type": "ImageObject",
          url: project.image,
          width: 1200,
          height: 630,
        },
        author: {
          "@type": "Person",
          name: "Arif Wahyu Prasetyo",
          jobTitle: "Full Stack Engineer",
          url: baseUrl,
        },
        datePublished: project.period,
        inLanguage: "id-ID",
        keywords: [...project.keywords, ...project.tags].join(", "),
        about: {
          "@type": "SoftwareApplication",
          name: project.title,
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          provider: {
            "@type": "Organization",
            name: project.company,
          },
        },
      },
      // Breadcrumb
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/project/${project.slug}#breadcrumb`,
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
            name: "Projects",
            item: `${baseUrl}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${baseUrl}/project/${project.slug}`,
          },
        ],
      },
      // WebPage
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/project/${project.slug}#webpage`,
        url: `${baseUrl}/project/${project.slug}`,
        name: `${project.title} - ${project.role}`,
        description: project.overview,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
        },
        breadcrumb: {
          "@id": `${baseUrl}/project/${project.slug}#breadcrumb`,
        },
        about: {
          "@id": `${baseUrl}/project/${project.slug}#creativework`,
        },
      },
    ],
  };
}
