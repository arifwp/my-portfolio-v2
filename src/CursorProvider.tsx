"use client";

import { CursorContext, CursorVariant } from "@/hooks/useCursor";
import { usePathname } from "next/navigation";
import { startTransition, useEffect, useState } from "react";
import { GlobalCursor } from "./components/GlobalCursor";

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [variant, setVariant] = useState<CursorVariant>("default");

  useEffect(() => {
    startTransition(() => {
      setVariant("default");
    });
  }, [pathname]);

  return (
    <CursorContext.Provider value={{ setVariant }}>
      {children}
      <GlobalCursor variant={variant} />
    </CursorContext.Provider>
  );
};
