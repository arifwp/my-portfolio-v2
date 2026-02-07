import { createContext, useContext } from "react";

export type CursorVariant = "default" | "project";

interface CursorContextType {
  setVariant: (variant: CursorVariant) => void;
}

export const CursorContext = createContext<CursorContextType | undefined>(
  undefined,
);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within CursorProvider");
  }
  return context;
};
