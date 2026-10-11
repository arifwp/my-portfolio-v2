"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SelectedWorksMotion({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-work-word]", {
          opacity: 0.75,
          stagger: 0.1,
          scrollTrigger: {
            trigger: "[data-work-intro]",
            start: "top 90%",
            end: "top 55%",
            scrub: true,
          },
        });
        gsap.utils
          .toArray<HTMLElement>("[data-work-preview]")
          .forEach((preview) => {
            gsap.fromTo(
              preview,
              { scale: 0.94 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: preview,
                  start: "top bottom",
                  end: "top 60%",
                  scrub: true,
                },
              },
            );
          });
      });
      return () => media.revert();
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      id="projects"
      aria-labelledby="selected-works-title"
      className={className}
    >
      {children}
    </section>
  );
}
