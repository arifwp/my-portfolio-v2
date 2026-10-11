import { JsonLd } from "@/components/JsonLd";
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
    notFound();
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
      <JsonLd data={jsonLd} />
      {children}
    </ContainerLayout>
  );
}
