"use client";

import Link from "next/link";
import { menuItems } from "./TopNavbar";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const MobileNavbar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      setIsVisible(false);

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:hidden transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-32",
      )}
    >
      <div className="px-6 py-2 bg-neutral-900 text-white flex items-center rounded-full shadow-lg">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.href} className="p-4">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
