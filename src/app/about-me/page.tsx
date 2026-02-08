"use client";

import { experiences } from "@/constants/experience";
import { skills } from "@/constants/skills";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTheme } from "@/hooks/useTheme";
import { projectBySlug } from "@/utils/fn";
import {
  domAnimation,
  LazyMotion,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const MarqueeTextAnimation = dynamic(
  () =>
    import("@/components/MarqueeTextAnimation").then(
      (mod) => mod.MarqueeTextAnimation,
    ),
  { ssr: false },
);

export default function AboutMePage() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const { setTheme } = useTheme();
  const marqueeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: isSmallScreen
      ? ["start 60%", "start 40%"]
      : ["start 80%", "start 20%"],
  });

  // detect when marquee section is in view
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > (isSmallScreen ? 0.3 : 0.9)) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, setTheme, isSmallScreen]);

  useEffect(() => {
    setTheme("light");

    return () => {
      setTheme("light");
    };
  }, [setTheme]);

  // translateY animation
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    isSmallScreen ? [0, 0] : [100, 0],
  );

  // rounded animation
  const borderRadiusValue = useTransform(
    scrollYProgress,
    [0, 1],
    isSmallScreen ? [0, 0] : [48, 0],
  );
  const borderRadius = useTransform(borderRadiusValue, (value) => `${value}px`);

  const imageWidthValue = useTransform(
    scrollYProgress,
    [0, 1],
    isSmallScreen ? [100, 100] : [50, 100],
  );
  const imageWidth = useTransform(imageWidthValue, (value) => `${value}%`);

  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full gap-12 flex flex-col scroll-mt-18">
        {/* CONTENT LIGHT MODE - ABOUT ME */}
        <div className="w-full p-6 gap-4 flex flex-col text-lg">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl font-medium"
            >
              About Me
            </motion.h1>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
            className="w-full gap-4 flex flex-col"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {`I'm a Full Stack Engineer with a visual poetry soul living inside an engineer's mind. I think in systems, but I feel in interfaces, where logic becomes rhythm, structure becomes motion, and code becomes experience.`}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              I enjoy turning complex logic into clear, expressive experiences,
              building interfaces that move with intention and systems that
              quietly do their job. From interaction design to backend
              structure, every layer exists to serve clarity, performance, and
              meaning.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              At the core, I build digital products where engineering precision
              and visual intention coexist, software that works beautifully, and
              feels effortless to use.
            </motion.p>
          </motion.div>
        </div>

        {/* CONTENT LIGHT MODE - TECH STACK */}
        <div className="w-full p-6 gap-12 flex flex-col">
          <div className="w-full gap-1 flex flex-col">
            <motion.div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-3xl font-semibold"
              >
                The Engine Behind The Poetry
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
              className="text-lg"
            >
              Behind every visual decision is a system built with intention.
              This is the technology I use to shape ideas into experiences,
              structured, scalable, and quietly expressive.
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
            className="w-full gap-4 grid grid-cols-2 lg:grid-cols-4"
          >
            {skills.map((item) => (
              <div key={item.id} className="gap-4 flex flex-col">
                {/* SKILL CATEGORY */}
                <div className="overflow-hidden">
                  <motion.p
                    variants={{
                      hidden: { y: "100%" },
                      show: { y: 0 },
                    }}
                    className="text-lg font-semibold"
                  >
                    {item.name}
                  </motion.p>
                </div>

                {/* SKILL LIST */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1 },
                  }}
                  className="gap-2 flex flex-wrap"
                >
                  {item.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="px-4 py-1 bg-neutral-100 dark:bg-neutral-900 rounded-full"
                    >
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CONTENT DARK MODE */}
        <motion.div
          ref={marqueeRef}
          className="w-full will-change-transform"
          style={{
            y: translateY,
            borderRadius,
          }}
        >
          <motion.div className="w-full gap-12 flex flex-col">
            {/* MARQUEE TEXT */}
            <MarqueeTextAnimation />

            {/* CONTENT */}
            <div className="w-full gap-4 flex flex-col items-center">
              {/* CONTENT IMAGE */}
              <motion.div
                className="relative h-auto aspect-video overflow-hidden"
                style={{
                  width: imageWidth,
                  borderRadius,
                }}
              >
                <Image
                  src={"/assets/images/og-image.jpg"}
                  alt="Image of Arif Prasetyo"
                  objectFit="cover"
                  fill
                  priority
                />
              </motion.div>

              {/* CONTENT BODY */}
              <div className="w-full p-6 gap-12 flex flex-col items-start text-neutral-950 dark:text-white">
                <p className="max-w-2xl text-2xl font-medium">
                  Hands-on experience building and scaling real-world web
                  applications across multiple industries, focusing on
                  performance, maintainability, and business impact.
                </p>

                <motion.div className="w-full gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {experiences.map((item) => (
                    <div
                      key={item.id}
                      className="p-12 gap-6 border border-neutral-500 rounded-2xl flex flex-col items-start"
                    >
                      {/* COMPANY LOGO */}
                      <div className="relative w-20 h-20 aspect-square rounded-2xl overflow-hidden">
                        <Image
                          src={item.companyLogo}
                          alt={item.companyName}
                          fill
                        />
                      </div>

                      {/* COMPANY */}
                      <div className="gap-0 flex flex-col">
                        <p className="mb-2 text-xl font-semibold text-start">
                          {item.companyName}
                        </p>

                        <p className="text-base">{item.role}</p>

                        <p className="text-base">
                          {item.startDate} - {item.endDate}
                        </p>

                        <p>{item.location}</p>
                      </div>

                      {/* DIVIDER */}
                      <div className="w-full h-[0.5px] bg-neutral-500" />

                      {/* COMPANY OVERVIEW */}
                      <p className="text-sm">{item.companyOverview}</p>

                      {/* RELATED PROJECTS */}
                      <div className="w-full gap-1 flex items-center">
                        <p className="text-base font-medium leading-none">
                          Related Projects:
                        </p>

                        <p className="text-sm">
                          {item.relatedProjects.map((slug, index) => {
                            const project = projectBySlug[slug];
                            if (!project) return null;

                            return (
                              <span key={slug}>
                                <Link
                                  href={`/project/${project.slug}`}
                                  className="underline underline-offset-3"
                                >
                                  {project.title}
                                </Link>
                                {index < item.relatedProjects.length - 1 &&
                                  ", "}
                              </span>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </LazyMotion>
  );
}
