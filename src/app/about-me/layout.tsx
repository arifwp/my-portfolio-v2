import { ContainerLayout } from "@/components/containers/ContainerLayout";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl, siteName } from "@/constants/site";
import type { Metadata } from "next";

const title = "About Me | Skills & Experience";
const description =
  "Explore Arif Wahyu Prasetyo’s skills and 3+ years of software engineering experience across Alpha Red Solutions, Legal Plus, Playfields, and Business Watch Indonesia.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/about-me` },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: `${siteUrl}/about-me`,
    title: `${title} | Arif Wahyu Prasetyo`,
    description,
    siteName,
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arif Wahyu Prasetyo - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Arif Wahyu Prasetyo`,
    description,
    images: ["/assets/images/og-image.jpg"],
    creator: "@arifwahyuu_",
  },
};

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${siteUrl}/about-me#webpage`,
          url: `${siteUrl}/about-me`,
          name: title,
          description,
          inLanguage: "en",
          isPartOf: { "@id": `${siteUrl}/#website` },
          mainEntity: { "@id": `${siteUrl}/#person` },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${siteUrl}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About Me",
                item: `${siteUrl}/about-me`,
              },
            ],
          },
        }}
      />
      <ContainerLayout>{children}</ContainerLayout>
    </>
  );
}
