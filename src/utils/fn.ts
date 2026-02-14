"use client";

import { Project, projects } from "@/constants/projects";
import { Metadata } from "next";
import { useLayoutEffect, useState } from "react";

export const useElementWidth = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
): number => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
};

export const projectBySlug = projects.reduce<Record<string, Project>>(
  (acc, project) => {
    acc[project.slug] = project;
    return acc;
  },
  {},
);
