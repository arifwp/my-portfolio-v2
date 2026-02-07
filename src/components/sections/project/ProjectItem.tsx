"use client";

import { ButtonAnimatedHover } from "@/components/buttons/ButtonAnimatedHover";
import { Project } from "@/constants/projects";
import { useCursor } from "@/hooks/useCursor";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface ProjectItemProps {
  data: Project;
  index: number;
  total: number;
}

// backgrounds color for marquee
const marqueeColors = [
  "bg-blue-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-orange-200",
  "bg-teal-200",
  "bg-indigo-200",
];

export const ProjectItem = ({ data, index, total }: ProjectItemProps) => {
  const router = useRouter();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const targetRef = useRef<HTMLDivElement>(null);
  const { setVariant } = useCursor();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // container animations
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // image animations
  const leftImageX = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [100, 0, 0],
  );

  const leftImageY = useTransform(scrollYProgress, [0.3, 0.5], [120, 0]);

  const rightImageX = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [-100, 0, 0],
  );

  const rightImageY = useTransform(scrollYProgress, [0.3, 0.5], [160, 0]);

  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1, 1]);

  // marquee background color based on index
  const marqueeColor = marqueeColors[index % marqueeColors.length];

  return (
    <div
      ref={targetRef}
      className="relative h-[calc(100vh-72px)] bg-white w-full flex items-center justify-center overflow-hidden shadow-2xl"
      style={{
        position: "sticky",
        top: "72px",
        boxShadow:
          index === 0 ? "none" : "0 -25px 50px 12px rgba(0, 0, 0, 0.25)",
      }}
      onMouseEnter={() => setVariant("project")}
      onMouseLeave={() => setVariant("default")}
      onClick={() => {
        if (isSmallScreen) return;

        router.push(`/project/${data.slug}`);
      }}
    >
      {/* Marquee Background Text - Single Line */}
      <div
        className="w-[110vw] absolute inset-0 overflow-hidden pointer-events-none -z-10 flex items-start pt-[10vh]"
        style={{
          transform: "rotate(-3deg)",
        }}
      >
        <motion.div
          className={`${marqueeColor} text-neutral-950 whitespace-nowrap py-3 px-4 lg:py-6 lg:px-8 font-bold text-3xl md:text-5xl lg:text-7xl leading-none flex items-center`}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 120,
              ease: "linear",
            },
          }}
        >
          {Array(20)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex items-center">
                {data.tags.map((tag, tagIndex) => (
                  <div key={`${i}-${tagIndex}`} className="flex items-center">
                    <span className="mx-6 lg:mx-12">{tag}</span>
                    {tagIndex < data.tags.length - 1 && (
                      <span className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-neutral-950" />
                    )}
                  </div>
                ))}

                <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-neutral-950" />
              </div>
            ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="w-full h-full flex flex-col md:flex-row items-center justify-center px-8"
        style={{ y, opacity }}
      >
        {/* MOBILE VIEW ONLY */}
        <div className="relative flex md:hidden w-full mb-8 items-center justify-center">
          {/* Desktop Mockup - Mobile View */}
          <motion.div
            className="relative w-100 h-auto aspect-4/3 -translate-x-12"
            style={{
              y: leftImageY,
            }}
          >
            <Image
              src={data.mockupDesktopImage}
              alt={`Image project ${data.title}`}
              fill
              className="object-contain drop-shadow-2xl"
              priority={index === 0}
            />
          </motion.div>

          {/* Phone Mockup - Mobile View */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-42"
            style={{
              y: rightImageY,
            }}
          >
            <div className="relative w-120 h-60 aspect-4/3">
              <Image
                src={data.mockupPhoneImage}
                alt={`Image project ${data.title}`}
                fill
                className="object-contain drop-shadow-2xl"
                priority={index === 0}
              />
            </div>
          </motion.div>
        </div>

        {/* LEFT IMAGE - Desktop Mockup */}
        <motion.div
          className="hidden md:flex flex-1 justify-start"
          style={{ x: leftImageX, y: leftImageY, scale }}
        >
          <div className="relative w-full max-w-150 h-[60vh] scale-150 lg:scale-150">
            <Image
              src={data.mockupDesktopImage}
              alt={`Image project ${data.title}`}
              fill
              className="object-contain drop-shadow-2xl"
              priority={index === 0}
            />
          </div>
        </motion.div>

        {/* CENTER TEXT */}
        <motion.div
          className="w-full md:mx-4 md:max-w-125 px-8 gap-6 flex flex-col shrink-0 items-center justify-center z-10"
          style={{ scale }}
        >
          <div className="w-full gap-2 flex flex-col">
            <h3 className="text-4xl lg:text-6xl font-bold text-center">
              {data.title}
            </h3>

            <p className="text-base lg:text-lg text-center text-neutral-950">
              {data.overview}
            </p>
          </div>

          <Link href={`/project/${data.slug}`} className="flex md:hidden">
            <ButtonAnimatedHover
              title="Detail Project"
              iconEnd={<ArrowRight size={24} />}
            />
          </Link>
        </motion.div>

        {/* RIGHT IMAGE - Phone Mockup */}
        <motion.div
          className="hidden md:flex flex-1 justify-center"
          style={{ x: rightImageX, y: rightImageY, scale }}
        >
          <div className="relative w-full max-w-75 h-[60vh] scale-90 lg:scale-125">
            <Image
              src={data.mockupPhoneImage}
              alt={`Image project ${data.title}`}
              fill
              className="object-contain drop-shadow-2xl"
              priority={index === 0}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
