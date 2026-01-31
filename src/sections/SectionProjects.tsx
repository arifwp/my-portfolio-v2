"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const SectionProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Geser ke kiri sepanjang scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-red-400/50" // Tambah background warna
      style={{ minHeight: "300vh" }} // Gunakan minHeight, bukan height tetap
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full w-[300vw] items-center"
        >
          <div className="w-screen h-full flex items-center justify-center bg-primary/10">
            <div className="text-4xl font-bold">Project 1</div>
          </div>
          <div className="w-screen h-full flex items-center justify-center bg-secondary/10">
            <div className="text-4xl font-bold">Project 2</div>
          </div>
          <div className="w-screen h-full flex items-center justify-center bg-accent/10">
            <div className="text-4xl font-bold">Project 3</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
