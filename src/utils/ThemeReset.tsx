"use client";

import { useTheme } from "@/hooks/useTheme";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ThemeReset() {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/about-me") {
      setTheme("light");
    }
  }, [pathname, setTheme]);

  return null;
}
