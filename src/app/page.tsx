import { ContainerLayout } from "@/components/containers/ContainerLayout";
import { SectionAbout } from "@/sections/SectionAbout";
import { SectionAboutV2 } from "@/sections/SectionAboutV2";
import { SectionAboutV3 } from "@/sections/SectionAboutV3";
import { SectionHome } from "@/sections/SectionHome";
import { SectionProjects } from "@/sections/SectionProjects";

export default function Home() {
  return (
    <ContainerLayout>
      <SectionHome />

      {/* <SectionAboutV3 /> */}
      <SectionAboutV2 />
      {/* <SectionAbout /> */}

      <SectionProjects />
    </ContainerLayout>
  );
}
