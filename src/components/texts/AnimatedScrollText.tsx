"use client";

import { type MotionValue } from "framer-motion";
import { AnimatedCharacter } from "./AnimatedCharacter";

const TEXT =
  "I'm Arif, a full-stack engineer who blends engineering precision with visual sensitivity.";

interface Props {
  scrollYProgress: MotionValue<number>;
}

export const AnimatedScrollText = ({ scrollYProgress }: Props) => {
  const letters = TEXT.split("");

  return (
    <p className="flex flex-wrap text-2xl lg:text-4xl font-semibold leading-none">
      {letters.map((char, i) => (
        <AnimatedCharacter
          key={i}
          char={char}
          index={i}
          totalChars={letters.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
};
