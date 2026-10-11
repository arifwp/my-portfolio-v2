"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

export const SmoothScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.5,
      touchMultiplier: 2,
      infinite: false,
    });

    // Request animation frame loop
    let frameId: number;
    function raf(time: number) {
      lenisRef.current?.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
};
