"use client";

import { ButtonAnimatedHover } from "@/components/buttons/ButtonAnimatedHover";
import { AnimatedScrollText } from "@/components/texts/AnimatedScrollText";
import { ABOUT_TEXT_END } from "@/constants/animations";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export const SectionAboutV2 = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // const { scrollYProgress } = useScroll();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 30%", "center 10%"],
  });

  const paragraphOpacity = useTransform(
    scrollYProgress,
    [ABOUT_TEXT_END, ABOUT_TEXT_END + 0.05],
    [0, 1],
  );

  const paragraphY = useTransform(
    scrollYProgress,
    [ABOUT_TEXT_END, ABOUT_TEXT_END + 0.05],
    [12, 0],
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-[calc(100vh-72px)] gap-12 p-6 lg:p-12 flex flex-col items-center justify-center scroll-mt-18 z-10"
    >
      <div className="w-full gap-12 flex flex-col">
        <motion.div className="w-full gap-12 flex flex-col md:flex-row items-center">
          <div
            className={clsx(
              "w-50 h-70",
              "md:w-70 md:h-auto",
              "lg:w-100 md:h-auto",
              "relative aspect-9/16 shrink-0",
            )}
          >
            <Image
              src="/assets/images/about-arif-prasetyo.png"
              alt="About me"
              fill
              className="object-cover object-top rounded-lg shadow-2xl"
              priority
            />
          </div>

          <div className="h-full gap-6 lg:gap-12 flex flex-col">
            <div className="gap-4 lg:gap-8 flex flex-col">
              <AnimatedScrollText scrollYProgress={scrollYProgress} />

              <motion.p
                style={{ opacity: paragraphOpacity, y: paragraphY }}
                className="text-md lg:text-lg xl:text-xl font-normal"
              >
                I build user interfaces where visual clarity, interaction, and
                motion are treated as part of the engineering, not decoration. I
                care about how products feel to use, how layouts guide
                attention, how interactions communicate intent, and how small
                details create trust. While my work is frontend-heavy, I design
                with a full-stack perspective, understanding how data, APIs, and
                performance constraints shape the final experience. I aim to
                create interfaces that are intuitive for users, structured for
                developers, and built to scale with intention.
              </motion.p>
            </div>

            <Link
              href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/resume`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonAnimatedHover
                title="Resume"
                iconEnd={
                  <ArrowUpRight className="w-6 h-6 lg:w-7 lg:h-7 aspect-square" />
                }
                style={{ opacity: paragraphOpacity, y: paragraphY }}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
