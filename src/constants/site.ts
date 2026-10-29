import { skills } from "@/constants/skills";

const productionUrl = "https://www.arifprasetyo.com";
const configuredUrl = new URL(
  process.env.NEXT_PUBLIC_FRONTEND_URL || productionUrl,
);

// Local development origins must never become public canonical URLs.
if (["localhost", "127.0.0.1", "[::1]"].includes(configuredUrl.hostname)) {
  configuredUrl.href = productionUrl;
}

// Production redirects the bare domain to www; canonical URLs must match it.
if (configuredUrl.hostname === "arifprasetyo.com") {
  configuredUrl.hostname = "www.arifprasetyo.com";
  configuredUrl.protocol = "https:";
}

export const siteUrl = configuredUrl.origin;
export const siteName = "Arif Wahyu Prasetyo Portfolio";
export const personName = "Arif Wahyu Prasetyo";
export const siteDescription =
  "Arif Wahyu Prasetyo is a Software Engineer in Boyolali, Indonesia, with 3+ years building SaaS, booking, and payment workflows using React and TypeScript.";
export const socialProfiles = [
  "https://github.com/arifwp",
  "https://linkedin.com/in/arif-wahyu-prasetyo",
  "https://x.com/arifwahyuu_",
];

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).href;
}

export const personJsonLd = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: personName,
  alternateName: "Arif Prasetyo",
  jobTitle: "Software Engineer",
  description: siteDescription,
  url: `${siteUrl}/`,
  image: absoluteUrl("/assets/images/portrait-arif-prasetyo.webp"),
  sameAs: socialProfiles,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boyolali",
    addressCountry: "ID",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Amikom University Yogyakarta",
  },
  worksFor: { "@type": "Organization", name: "Alpha Red Solutions" },
  knowsAbout: skills.flatMap((category) =>
    category.skills.map((skill) => skill.name),
  ),
};
