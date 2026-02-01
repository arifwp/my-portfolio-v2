"use client";

import { ScrollStack } from "@/components/ScrollStack";
import { ScrollStackItem } from "@/components/ScrollStackItem";
import { skills } from "@/constants/skills";
import { motion } from "framer-motion";

export const SectionTechStacks = () => {
  return (
    <section
      id="techStack"
      className="relative w-full min-h-[200vh] border-2 border-red-500"
    >
      <div className="sticky top-18 h-[calc(100vh-72px)] p-12 gap-12 flex flex-col border-2 border-blue-500 overscroll-auto">
        {/* TITLE SECTION */}
        <div className="w-full gap-1 lg:gap-2 flex flex-col text-center">
          <motion.h3 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
            THE ENGINE BEHIND THE POETRY
          </motion.h3>

          <motion.p className="text-xs lg:text-lg">
            Behind every visual decision is a system built with intention. This
            is the technology I use to shape ideas into experiences, structured,
            scalable, and quietly expressive.
          </motion.p>
        </div>

        {/* CONTENT */}
        <ScrollStack>
          {skills.map((category) => (
            <ScrollStackItem key={category.id}>
              <p>{category.name}</p>

              <div className="w-full flex flex-wrap">
                {category.skills.map((item) => (
                  <p key={item.id}>{item.name}</p>
                ))}
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};
