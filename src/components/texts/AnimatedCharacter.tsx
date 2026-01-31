"use client";

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
  const baseStart = 0.25;
  const animationRange = 0.2;

  const progress = index / totalChars;
  const threshold = baseStart + progress * animationRange;

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
