"use client";

import dynamic from "next/dynamic";

const Projects = dynamic(
  () =>
    import("@/components/sections/project/Projects").then(
      (mod) => mod.Projects,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-[calc(100vh-72px)] w-full flex items-center justify-center bg-white">
        <div className="animate-pulse text-neutral-400">Loading...</div>
      </div>
    ),
  },
);

export const SectionProjectsV2 = () => {
  return (
    <section id="projects" className="w-full relative scroll-mt-18">
      <Projects />
    </section>
  );
};
