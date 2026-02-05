"use client";

import { ProjectItem } from "@/components/sections/project/ProjectItem";
import { Project, projects } from "@/constants/projects";
import { useEffect, useRef, useState } from "react";

export const SectionProjectsV2 = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const navbarHeight = 72;
        const extraBuffer = 18;
        const headerOffsetHeight = headerRef.current.offsetHeight;
        const totalHeight = headerOffsetHeight + navbarHeight + extraBuffer;
        setHeaderHeight(totalHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    document.fonts.ready.then(updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <section id="projects" className="w-full">
      <div
        ref={headerRef}
        className="sticky min-h-[300vh] top-18 text-center flex flex-col items-center"
      >
        {projects.map((item: Project) => (
          <ProjectItem key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};
