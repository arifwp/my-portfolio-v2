import React from "react";
import { MarqueeText } from "./MarqueeText";

export interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

const MARQUEE_TEXTS: string[] = [
  " Arif Prasetyo ✦ Full Stack Engineer ✦ Frontend Heavy ✦ ",
];
const MARQUEE_CONFIG = {
  velocity: 100,
  stiffness: 400,
  damping: 50,
  numcompies: 6,
  velocityMapping: { input: [0, 1000], output: [0, 5] } as VelocityMapping,
};

export const MarqueeTextAnimation = () => {
  return (
    <div>
      {MARQUEE_TEXTS.map((text: string, index: number) => (
        <MarqueeText
          key={index}
          baseVelocity={
            index % 2 !== 0 ? -MARQUEE_CONFIG.velocity : MARQUEE_CONFIG.velocity
          }
          damping={MARQUEE_CONFIG.damping}
          stiffness={MARQUEE_CONFIG.stiffness}
          numCopies={MARQUEE_CONFIG.numcompies}
          velocityMapping={MARQUEE_CONFIG.velocityMapping}
        >
          {text}&nbsp;
        </MarqueeText>
      ))}
    </div>
  );
};
