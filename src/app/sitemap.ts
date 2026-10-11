import { projects } from "@/constants/projects";
import { siteUrl } from "@/constants/site";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/about-me` },
    ...projects.map((project) => ({ url: `${siteUrl}/project/${project.slug}` })),
  ];
}
