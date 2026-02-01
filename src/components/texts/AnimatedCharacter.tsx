"use client";

import { ABOUT_TEXT_RANGE, ABOUT_TEXT_START } from "@/constants/animations";
import type { MotionValue } from "framer-motion";
import { motion, useTransform } from "framer-motion";

interface Props {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}

export const AnimatedCharacter = ({
  char,
  index,
  totalChars,
  scrollYProgress,
}: Props) => {
  // const baseStart = 0.05;
  // const animationRange = 0.05;

  const progress = index / totalChars;
  const threshold = ABOUT_TEXT_START + progress * ABOUT_TEXT_RANGE;

  // Fungsi transform custom untuk transisi step
  const color = useTransform(scrollYProgress, (latest) =>
    latest >= threshold ? "#0a0a0a" : "#a3a3a3",
  );

  return (
    <motion.span style={{ color }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};
