"use client";

import { StackItem } from "@/components/StackItem";
import { SkillCategory, skills } from "@/constants/skills";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const SectionTechStacksV2 = () => {
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
    <section id="tech-stack" className="relative w-full">
      <div
        ref={headerRef}
        className="sticky top-18 p-12 gap-2 text-center flex flex-col items-center"
      >
        <div className="overflow-hidden">
          <motion.h3
            initial={{ y: "100%" }}
            whileInView={{
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.6,
            }}
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-center"
          >
            THE ENGINE BEHIND THE POETRY
          </motion.h3>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.8,
          }}
          className="text-xs lg:text-lg"
        >
          Behind every visual decision is a system built with intention. This is
          the technology I use to shape ideas into experiences, structured,
          scalable, and quietly expressive.
        </motion.p>
      </div>

      <div className="relative">
        {skills.map((data: SkillCategory, index: number) => (
          <StackItem
            key={data.id}
            data={data}
            index={index}
            headerHeight={headerHeight}
          />
        ))}
      </div>
    </section>
  );
};
