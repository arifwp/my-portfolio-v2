"use client";

import { AboutTitleV2 } from "@/components/sections/about/AboutTitleV2";
import { useScroll } from "motion/react";
import { useRef } from "react";

export const SectionAboutV3 = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-[200vh] border-2 border-red-500"
    >
      <div className="sticky top-18 h-[calc(100vh-72px)] border-2 border-blue-500">
        <AboutTitleV2 scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
};
