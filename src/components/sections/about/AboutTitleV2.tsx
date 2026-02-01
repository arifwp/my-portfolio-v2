import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion, MotionValue, useTransform } from "framer-motion";

export const AboutTitleV2 = ({
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

  const nameOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const h4Rotate = useTransform(scrollYProgress, [0, 0.15], [0, -90]);
  //   const titleX = useTransform(scrollYProgress, [0, 0.15], ["0vw", "-45vw"]);
  //   const titleX = useTransform(scrollYProgress, [0, 0.15], ["0vw", "-35vw"]);
  const titleX = useTransform(scrollYProgress, [0, 0.15], [0, -500]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], ["0vh", "45vh"]);
  const titleFontsize = useTransform(
    scrollYProgress,
    [0, 0.15],
    [initialFontSize, "3rem"],
  );
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
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
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 origin-left will-change-transform"
    >
      <div className="relative">
        <motion.h4
          style={{ fontSize: titleFontsize }}
          className="pb-2 font-bold whitespace-nowrap leading-none"
        >
          ABOUT ME
        </motion.h4>

        <motion.div
          style={{ width: borderWidth }}
          className="absolute bottom-0 left-0 h-[3px] bg-neutral-950 origin-left"
        />
      </div>

      <motion.p
        style={{ opacity: nameOpacity }}
        className="font-light leading-none text-lg sm:text-xl"
      >
        ARIF PRASETYO
      </motion.p>
    </motion.div>
  );
};
