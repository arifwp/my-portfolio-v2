import { ContainerLayout } from "@/components/containers/ContainerLayout";
import { SectionAboutV3 } from "@/sections/SectionAboutV3";
import { SectionContact } from "@/sections/SectionContact";
import { SectionHome } from "@/sections/SectionHome";
import { SectionProjectsV2 } from "@/sections/SectionProjectsV2";

export default function Home() {
  return (
    <ContainerLayout>
      <SectionHome />

      <SectionAboutV3 />

      <SectionProjectsV2 />

      <SectionContact />
    </ContainerLayout>
  );
}
