const configuredUrl = new URL(
  process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.arifprasetyo.com",
);

// Production redirects the bare domain to www; canonical URLs must match it.
if (configuredUrl.hostname === "arifprasetyo.com") {
  configuredUrl.hostname = "www.arifprasetyo.com";
  configuredUrl.protocol = "https:";
}

export const siteUrl = configuredUrl.origin;
export const siteName = "Arif Wahyu Prasetyo Portfolio";
export const personName = "Arif Wahyu Prasetyo";
export const siteDescription =
  "Arif Wahyu Prasetyo is a Software Engineer focused on frontend development in Surakarta, Indonesia. Explore React, Next.js, and TypeScript projects.";
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
    addressLocality: "Surakarta",
    addressCountry: "ID",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Amikom Yogyakarta",
  },
  knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Frontend Development", "Full Stack Development", "Node.js", "Tailwind CSS"],
};
