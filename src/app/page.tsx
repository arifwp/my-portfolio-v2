import { ContainerLayout } from "@/components/containers/ContainerLayout";
import { SectionAboutV2 } from "@/sections/SectionAboutV2";
import { SectionHome } from "@/sections/SectionHome";
import { SectionProjects } from "@/sections/SectionProjects";
import { SectionProjectsV2 } from "@/sections/SectionProjectsV2";

export default function Home() {
  return (
    <ContainerLayout>
      <SectionHome />

      <SectionAboutV2 />
      {/* <SectionAbout /> */}

      {/* <SectionTechStacksV2 /> */}

      {/* <SectionProjects /> */}
      <SectionProjectsV2 />
    </ContainerLayout>
  );
}
