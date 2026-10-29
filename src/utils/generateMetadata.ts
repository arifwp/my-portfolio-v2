import { type Project, projectSummary } from "@/constants/projects";
import { absoluteUrl, siteUrl, siteName, personName } from "@/constants/site";
import { Metadata } from "next";

export function generateProjectMetadata(project: Project): Metadata {
  const title = `${project.title} Case Study`;
  const socialTitle = `${title} | ${personName}`;
  const description = `${project.overview} Explore Arif Wahyu Prasetyo’s work at ${project.company}.`;
  const url = absoluteUrl(`/project/${project.slug}`);
  const images = [
    {
      url: absoluteUrl(project.image),
      alt: `${project.title} - ${project.company}`,
    },
  ];

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: socialTitle,
      description,
      siteName,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      creator: "@arifwahyuu_",
      images: [absoluteUrl(project.image)],
    },
  };
}

export function generateProjectJsonLd(project: Project) {
  const url = absoluteUrl(`/project/${project.slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#creativework`,
        name: project.title,
        description: projectSummary(project),
        abstract: project.description,
        url,
        image: absoluteUrl(project.image),
        author: { "@id": `${siteUrl}/#person` },
        inLanguage: "en",
        keywords: [
          ...project.tags,
          ...project.techStack.map((technology) => technology.name),
        ].join(", "),
        about: { "@type": "Thing", name: project.title, url: project.liveSite },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteUrl}/`,
          },
          { "@type": "ListItem", position: 2, name: project.title, item: url },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${project.title} Case Study | ${personName}`,
        description: projectSummary(project),
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#creativework` },
      },
    ],
  };
}
