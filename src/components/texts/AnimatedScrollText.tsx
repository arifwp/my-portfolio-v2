"use client";

import { type MotionValue } from "framer-motion";
import { AnimatedCharacter } from "./AnimatedCharacter";

const TEXT =
  "I'm Arif, a full-stack engineer who blends engineering precision with visual sensitivity.";

interface Props {
  scrollYProgress: MotionValue<number>;
}

export const AnimatedScrollText = ({ scrollYProgress }: Props) => {
  const words = TEXT.split(" ");

  let charIndex = 0;

  return (
    <p className="flex flex-wrap text-2xl lg:text-5xl font-semibold leading-none">
      {words.map((word, wordIndex) => {
        const letters = word.split("");

        return (
          <span key={wordIndex} className="inline-flex">
            {letters.map((char, i) => {
              const currentIndex = charIndex;
              charIndex++;

              return (
                <AnimatedCharacter
                  key={currentIndex}
                  char={char}
                  index={currentIndex}
                  totalChars={TEXT.length}
                  scrollYProgress={scrollYProgress}
                />
              );
            })}

            {/* space antar kata */}
            <span className="inline-block">&nbsp;</span>
          </span>
        );
      })}
    </p>
  );
};
