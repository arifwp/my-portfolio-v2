"use client";

import Link from "next/link";
import { menuItems } from "./TopNavbar";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MobileNavbar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        clearTimeout(timeoutId);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        clearTimeout(timeoutId);
      }

      setLastScrollY(currentScrollY);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:hidden"
        >
          <div className="px-6 py-2 bg-neutral-900 text-white flex items-center rounded-full shadow-lg">
            {menuItems.map((item) => (
              <Link key={item.id} href={item.href} className="p-4">
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
