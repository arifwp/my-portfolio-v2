import { ContainerLayout } from "@/components/containers/ContainerLayout";
import { SectionAbout } from "@/sections/SectionAbout";
import { SectionHome } from "@/sections/SectionHome";

export default function Home() {
  return (
    <ContainerLayout>
      <SectionHome />

      <SectionAbout />
    </ContainerLayout>
  );
}
