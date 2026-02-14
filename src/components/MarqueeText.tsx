"use client";

import { useElementWidth } from "@/utils/fn";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  baseVelocity: number;
  numCopies: number;
}

export const MarqueeText = ({
  children,
  baseVelocity = 100,
  numCopies,
}: Props) => {
  const baseX = useMotionValue(0);
  const copyRef = useRef<HTMLSpanElement | null>(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min: number, max: number, v: number): number {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  useAnimationFrame((t, delta) => {
    const moveBy = baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  const spans = [];
  for (let i = 0; i < numCopies; i++) {
    spans.push(
      <span key={i} ref={i === 0 ? copyRef : null} className="shrink-0">
        {children}
      </span>,
    );
  }

  return (
    <div className="relative overflow-x-hidden">
      <motion.div
        className="flex whitespace-nowrap text-center text-4xl md:text-6xl font-semibold tracking-tight drop-shadow"
        style={{ x }}
      >
        {spans}
      </motion.div>
    </div>
  );
};
