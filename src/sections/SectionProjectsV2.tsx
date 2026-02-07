"use client";

import { ProjectItem } from "@/components/sections/project/ProjectItem";
import { Project, projects } from "@/constants/projects";

export const SectionProjectsV2 = () => {
  return (
    <section id="projects" className="w-full relative">
      {projects.map((item: Project, index: number) => (
        <ProjectItem
          key={item.id}
          data={item}
          index={index}
          total={projects.length}
        />
      ))}
    </section>
  );
};
