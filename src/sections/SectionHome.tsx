"use client";

import { motion } from "framer-motion";

export const SectionHome = () => {
  return (
    <section id="home" className="w-full h-[calc(100dvh-72px)] p-6">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div />

        <div className="gap-2 md:gap-4 xl:gap-8 flex flex-col text-center">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1], // easeOut cubic-bezier (premium feel)
              }}
              className="text-md sm:text-xl md:text-2xl 2xl:text-4xl font-light"
            >
              {"Hi! I'm Arif Prasetyo"}
            </motion.h1>
          </div>

          <motion.h2
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-none"
          >
            <div className="overflow-hidden">
              <motion.span
                variants={{
                  hidden: { y: "100%" },
                  show: { y: 0 },
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                VISUAL POETRY TRAPPED
              </motion.span>
            </div>

            <div className="pb-2 overflow-hidden">
              <motion.span
                variants={{
                  hidden: { y: "120%" },
                  show: { y: 0 },
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {"INSIDE AN ENGINEER'S MIND"}
              </motion.span>
            </div>
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              // transition: { staggerChildren: 0.15 },
            },
          }}
          className="w-full gap-0 text-lg xl:text-2xl font-semibold flex flex-col lg:flex-row items-center justify-between"
        >
          <div className="overflow-hidden">
            <motion.h4
              variants={{
                hidden: { y: "100%" },
                show: {
                  y: 0,
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              FULL STACK ENGINEER
            </motion.h4>
          </div>

          <motion.div className="gap-2 flex flex-row items-center">
            <div className="overflow-hidden">
              <motion.h4
                variants={{
                  hidden: { y: "100%" },
                  show: {
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-neutral-500 font-medium"
              >
                BASED IN
              </motion.h4>
            </div>

            <div className="overflow-hidden">
              <motion.h4
                variants={{
                  hidden: { y: "100%" },
                  show: {
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                BANDUNG, INDONESIA
              </motion.h4>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
