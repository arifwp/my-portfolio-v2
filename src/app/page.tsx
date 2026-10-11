import { ContainerLayout } from "@/components/containers/ContainerLayout";
import { SectionAboutV3 } from "@/sections/SectionAboutV3";
import { SectionContact } from "@/sections/SectionContact";
import { SectionHome } from "@/sections/SectionHome";
import { SectionSelectedWorks } from "@/sections/SectionSelectedWorks";

export default function Home() {
  return (
    <ContainerLayout>
      <SectionHome />

      <SectionAboutV3 />

      <SectionSelectedWorks />

      <SectionContact />
    </ContainerLayout>
  );
}
