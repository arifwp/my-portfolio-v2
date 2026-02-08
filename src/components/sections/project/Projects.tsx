"use client";

import { Project, projects } from "@/constants/projects";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  return (
    <>
      {projects.map((item: Project, index: number) => (
        <ProjectItem key={item.id} data={item} index={index} />
      ))}
    </>
  );
};
