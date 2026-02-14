import { ProjectDetailContent } from "@/components/sections/project/ProjectDetailContent";
import { Project, projects } from "@/constants/projects";
import {
  generateProjectJsonLd,
  generateProjectMetadata,
} from "@/utils/generateMetadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return generateProjectMetadata(project);
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data: Project | undefined = projects.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  const jsonLd = generateProjectJsonLd(data);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailContent data={data} />
    </>
  );
}
