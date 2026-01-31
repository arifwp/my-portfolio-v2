import { AnimatedScrollText } from "@/components/texts/AnimatedScrollText";
import { skills } from "@/constants/skills";
import clsx from "clsx";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export const AboutContent = ({
  scrollYProgress,
  showSkills,
}: {
  scrollYProgress: MotionValue<number>;
  showSkills: boolean;
}) => {
  // Image Animation - Sangat cepat ke tengah (selesai di 25%)
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["60vh", "0vh"], // Dari bawah ke center
  );
  const imageOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.25], [0.85, 1]);

  return (
    <motion.div
      style={{
        y: imageY,
        opacity: imageOpacity,
        scale: imageScale,
      }}
      className={clsx(
        "w-full p-6 sm:p-18 lg:p-24 gap-12 flex flex-col sm:flex-row items-center lg:items-center",
        "will-change-transform",
        "lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2",
      )}
    >
      {/* Image */}
      <div
        className={clsx(
          "w-50 h-70",
          "md:w-70 md:h-auto",
          "lg:w-120 lg:h-auto",
          "relative aspect-9/16 shrink-0",
        )}
      >
        <Image
          src="/assets/images/about-arif-prasetyo.png"
          alt="About me"
          fill
          className="object-cover object-top rounded-lg shadow-2xl"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="gap-6 flex flex-col flex-1">
        {/* Animated Text - Mulai berubah setelah image di tengah */}
        <AnimatedScrollText scrollYProgress={scrollYProgress} />

        {/* Skills - Muncul setelah text selesai */}
        {/* <div className="w-full gap-4 flex flex-col">
          <motion.p
            style={{
              opacity: useTransform(scrollYProgress, [0.45, 0.48], [0, 1]),
            }}
            className="font-medium text-base"
          >
            Focus & Expertise
          </motion.p>

          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08 },
              },
            }}
            initial="hidden"
            animate={showSkills ? "show" : "hidden"}
            className="w-full gap-2 flex flex-wrap"
          >
            {skills.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="py-1 lg:py-2 px-3 bg-neutral-100 rounded-full text-xs lg:text-sm"
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        </div> */}
      </div>
    </motion.div>
  );
};
