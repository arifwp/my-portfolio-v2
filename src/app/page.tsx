import type { Metadata } from "next";
import { siteUrl, siteDescription } from "@/constants/site";
import { JsonLd } from "@/components/JsonLd";
import { projects } from "@/constants/projects";
import { ContainerLayout } from "@/components/containers/ContainerLayout";
import { SectionAboutV3 } from "@/sections/SectionAboutV3";
import { SectionContact } from "@/sections/SectionContact";
import { SectionHome } from "@/sections/SectionHome";
import { SectionSelectedWorks } from "@/sections/SectionSelectedWorks";

export const metadata: Metadata = {
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website", locale: "en_US", url: `${siteUrl}/`,
    title: "Arif Wahyu Prasetyo | Software Engineer",
    description: siteDescription, siteName: "Arif Wahyu Prasetyo Portfolio",
    images: [{ url: "/assets/images/og-image.jpg", width: 1200, height: 630, alt: "Arif Wahyu Prasetyo - Software Engineer" }],
  },
};

export default function Home() {
  return (
    <ContainerLayout>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: "Arif Wahyu Prasetyo | Software Engineer",
        description: siteDescription,
        inLanguage: "en",
        about: { "@id": `${siteUrl}/#person` },
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem", position: index + 1,
            name: project.title, url: `${siteUrl}/project/${project.slug}`,
          })),
        },
      }} />
      <SectionHome />

      <SectionAboutV3 />

      <SectionSelectedWorks />

      <SectionContact />
    </ContainerLayout>
  );
}
