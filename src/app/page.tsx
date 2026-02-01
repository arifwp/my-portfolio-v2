import { ContainerLayout } from "@/components/containers/ContainerLayout";
import { SectionAboutV2 } from "@/sections/SectionAboutV2";
import { SectionHome } from "@/sections/SectionHome";
import { SectionProjects } from "@/sections/SectionProjects";
import { SectionTechStacksV2 } from "@/sections/SectionTechStackV2";

export default function Home() {
  return (
    <ContainerLayout>
      <SectionHome />

      {/* <SectionAboutV3 /> */}
      <SectionAboutV2 />
      {/* <SectionAbout /> */}

      {/* <SectionTechStacks /> */}
      <SectionTechStacksV2 />

      <SectionProjects />
    </ContainerLayout>
  );
}
