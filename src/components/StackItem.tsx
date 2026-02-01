"use client";

import { SkillCategory } from "@/constants/skills";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const StackItem = ({
  data,
  index,
  headerHeight,
}: {
  data: SkillCategory;
  index: number;
  headerHeight: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 1, 1, 1, 0],
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        y,
        opacity,
        position: "sticky",
        top: `${headerHeight}px`,
      }}
    >
      <div
        className={clsx(
          "w-full h-[40vh] flex flex-col justify-center items-center px-8 py-12",
          {
            "bg-white text-neutral-950": index % 2 !== 0,
            "bg-neutral-950 text-white": index % 2 === 0,
          },
        )}
      >
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-center">
          {data.name}
        </h3>
        <div className="gap-x-3 gap-y-2 flex flex-wrap justify-center max-w-4xl">
          {data.skills.map((item, idx) => (
            <p key={item.id} className="text-md md:text-lg lg:text-xl">
              {item.name}
              {idx < data.skills.length - 1 ? "," : "."}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
