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
  numcompies: 6,
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
          numCopies={MARQUEE_CONFIG.numcompies}
        >
          {text}&nbsp;
        </MarqueeText>
      ))}
    </div>
  );
};
