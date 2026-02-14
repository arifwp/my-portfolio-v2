import { ContainerLayout } from "@/components/containers/ContainerLayout";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ContainerLayout>{children}</ContainerLayout>;
}
