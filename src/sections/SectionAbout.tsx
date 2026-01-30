"use client";

import { motion } from "framer-motion";

export const SectionAbout = () => {
  return (
    <section id="about" className="w-full h-[calc(300dvh-72px)] p-6">
      <div className="w-fit h-full mx-auto flex flex-col items-start justify-start">
        <motion.h4 className="text-8xl font-bold">ABOUT ME</motion.h4>

        <motion.p className="text-4xl font-light">ARIF PRASETYO</motion.p>
      </div>
    </section>
  );
};
