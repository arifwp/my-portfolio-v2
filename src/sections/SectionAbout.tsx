"use client";

import { AboutContent } from "@/components/sections/about/AboutContent";
import { AboutTitle } from "@/components/sections/about/AboutTitle";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export const SectionAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // Section mulai dari top (di bawah navbar karena sticky top-18)
  });

  // State untuk trigger skills animation
  const [showSkills, setShowSkills] = useState<boolean>(false);

  // Listen to scroll progress - skills muncul setelah text selesai
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // DEBUG: Log untuk melihat actual progress

    // Skills muncul di 0.45 (reachable dengan 200vh)
    if (latest > 0.45 && !showSkills) {
      setShowSkills(true);
    } else if (latest <= 0.45 && showSkills) {
      setShowSkills(false);
    }
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-[200vh] border-2 border-red-500"
    >
      <div className="sticky top-18 h-[calc(100vh-72px)] flex border-2 border-blue-500">
        {/* Text Container - Rotasi di awal */}
        <AboutTitle scrollYProgress={scrollYProgress} />

        {/* Content: Image + Text + Skills */}
        <AboutContent
          scrollYProgress={scrollYProgress}
          showSkills={showSkills}
        />
      </div>
    </section>
  );
};
