import { ContainerLayout } from "@/components/containers/ContainerLayout";
import { projects } from "@/constants/projects";
import {
  generateProjectJsonLd,
  generateProjectMetadata,
} from "@/utils/generateMetadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

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

export default async function ProjectLayout({ params, children }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const jsonLd = generateProjectJsonLd(project);

  return (
    <ContainerLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </ContainerLayout>
  );
}
