"use client";

import { useElementWidth } from "@/utils/fn";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef } from "react";
import { VelocityMapping } from "./MarqueeTextAnimation";

interface Props {
  children: React.ReactNode;
  baseVelocity: number;
  damping: number;
  stiffness: number;
  numCopies: number;
  velocityMapping: VelocityMapping;
}

export const MarqueeText = ({
  children,
  baseVelocity = 100,
  damping,
  stiffness,
  numCopies,
  velocityMapping,
}: Props) => {
  const baseX = useMotionValue(0);
  const scrollOptions = {};
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: damping,
    stiffness: stiffness,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping?.input,
    velocityMapping?.output,
    { clamp: false },
  );

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

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const spans = [];
  for (let i = 0; i < numCopies!; i++) {
    spans.push(
      <span key={i} ref={i === 0 ? copyRef : null} className="shrink-0">
        {children}
      </span>,
    );
  }

  return (
    <div className={"relative overflow-hidden"}>
      <motion.div
        className={
          "flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-20"
        }
        style={{ x }}
      >
        {spans}
      </motion.div>
    </div>
  );
};
