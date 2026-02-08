"use client";

import { ButtonAnimatedHover } from "@/components/buttons/ButtonAnimatedHover";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SocialMedia {
  id: number;
  name: string;
  link: string;
}

const socialMedias: SocialMedia[] = [
  {
    id: 1,
    name: "LINKEDIN",
    link: "https://linkedin.com/in/arif-wahyu-prasetyo",
  },
  {
    id: 2,
    name: "GITHUB",
    link: "https://github.com/arifwp",
  },
];

export const SectionContact = () => {
  return (
    <section id="contact" className="relative w-full scroll-mt-18">
      <div className="min-h-[calc(100vh-96px)] p-6 gap-12 flex flex-col items-center px-6">
        <h3 className="gap-4 flex flex-col text-center text-5xl sm:text-7xl md:text-8xl font-bold text-neutral-950">
          {"LET'S TAAA"}
          <span>AAALLLKKK!</span>
        </h3>

        <Link
          href="mailto:arif.wpras@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonAnimatedHover
            title="CONTACT NOW"
            iconEnd={<ArrowRight size={24} />}
            className="py-3.5 lg:py-5 lg:text-2xl"
          />
        </Link>

        {/* IMAGE */}
        <div className="relative w-64 md:w-100 min-h-100 rounded-full aspect-9/16 overflow-hidden">
          <Image
            src={"/assets/images/portrait-arif-prasetyo.webp"}
            fill
            alt="Profile of Arif Prasetyo"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        {/* SOCIAL MEDIAS */}
        <div className="w-full gap-6 lg:gap-8 flex items-center justify-center">
          {socialMedias.map((item) => (
            <motion.div
              key={item.id}
              className="relative gap-2 flex items-center justify-center"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-2xl md:text-4xl font-semibold text-neutral-950"
              >
                {item.name}

                {/* underline */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-neutral-950"
                  variants={{
                    rest: { scaleX: 0, originX: 0 },
                    hover: { scaleX: 1, originX: 0 },
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </Link>

              <ArrowUpRight className="w-6 h-6 md:w-9 md:h-9 aspect-square" />
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="w-full gap-4 flex flex-col sm:flex-row items-center justify-between text-base font-semibold text-neutral-950">
          <p>©2026 ARIF PRASETYO</p>

          <p
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="cursor-pointer"
          >
            GO BACK TO TOP
          </p>
        </div>
      </div>
    </section>
  );
};
