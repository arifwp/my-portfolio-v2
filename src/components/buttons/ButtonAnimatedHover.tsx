"use client";

import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";

interface Props extends HTMLMotionProps<"button"> {
  title: string;
  iconEnd?: React.ReactNode;
  className?: string;
}

export const ButtonAnimatedHover = ({
  title,
  iconEnd,
  className,
  ...rest
}: Props) => {
  return (
    <motion.button
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={clsx(
        "relative overflow-hidden w-fit px-6 py-2 lg:px-8 lg:py-2.5 gap-2 rounded-full border border-neutral-950 font-bold text-md flex items-center leading-none cursor-pointer",
        className,
      )}
      {...rest}
    >
      {/* Background layer */}
      <motion.div
        variants={{
          rest: { y: "110%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 bg-neutral-950"
      />

      {/* Text default */}
      <motion.span
        variants={{
          rest: { y: 0 },
          hover: { y: "-120%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative z-10 flex items-center gap-2 text-neutral-950"
      >
        {title} {iconEnd && iconEnd}
      </motion.span>

      {/* Text hover */}
      <motion.span
        variants={{
          rest: { y: "120%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute z-10 flex items-center gap-2 text-white"
      >
        {title} {iconEnd && iconEnd}
      </motion.span>
    </motion.button>
  );
};
