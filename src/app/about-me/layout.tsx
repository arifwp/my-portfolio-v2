import { ContainerLayout } from "@/components/containers/ContainerLayout";

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ContainerLayout>{children}</ContainerLayout>;
}
