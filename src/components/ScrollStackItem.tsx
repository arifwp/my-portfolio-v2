import clsx from "clsx";
import { ReactNode } from "react";

export interface ScrollStackItemProps {
  className?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  className = "",
}) => (
  <div
    className={clsx(
      "scroll-stack-card relative w-full h-80 p-12 bg-red-400 rounded-4xl origin-top will-change-transform",
      className,
    )}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    }}
  >
    {children}
  </div>
);
