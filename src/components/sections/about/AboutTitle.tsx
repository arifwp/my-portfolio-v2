import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion, MotionValue, useTransform } from "framer-motion";

export const AboutTitle = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isSmallScreen = isMobile || isTablet;
  const initialFontSize = isMobile
    ? "clamp(2.5rem, 8vw, 3.5rem)"
    : isTablet
      ? "clamp(3.5rem, 8vw, 5rem)"
      : "clamp(4.5rem, 9vw, 8rem)";

  // Text Animation - Fade out sangat cepat
  const nameOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // H4 Animation - Sangat cepat (selesai di 15%)
  const h4Rotate = useTransform(scrollYProgress, [0, 0.15], [0, -90]);
  const titleX = useTransform(scrollYProgress, [0, 0.15], ["0vw", "-45vw"]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], ["0vh", "35vh"]);

  const titleFontsize = useTransform(
    scrollYProgress,
    [0, 0.15],
    [initialFontSize, "3rem"],
  );

  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Border Animation
  const borderWidth = useTransform(
    scrollYProgress,
    [0.03, 0.15],
    ["100%", "0%"],
  );

  return (
    <motion.div
      style={{
        rotate: h4Rotate,
        x: titleX,
        y: titleY,
        opacity: isSmallScreen ? titleOpacity : 1,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-start gap-2 will-change-transform"
    >
      {/* H4 with Border */}
      <div className="relative">
        <motion.h4
          style={{
            fontSize: titleFontsize,
          }}
          className="pb-2 font-bold origin-left whitespace-nowrap leading-none"
        >
          ABOUT ME
        </motion.h4>

        <motion.div
          style={{
            width: borderWidth,
          }}
          className="absolute bottom-0 left-0 h-[3px] bg-neutral-950 origin-left will-change-transform"
        />
      </div>

      {/* Subtitle Text */}
      <motion.p
        style={{
          opacity: nameOpacity,
        }}
        className="font-light origin-left will-change-transform leading-none text-lg sm:text-xl"
      >
        ARIF PRASETYO
      </motion.p>
    </motion.div>
  );
};
