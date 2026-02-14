"use client";

import { FC, PointerEvent, useEffect, useId, useRef, useState } from "react";

interface CurvedLoopProps {
  className?: string;
  direction?: "left" | "right";
  interactive?: boolean;
}

const TEXT = "Explore Other Projects ✦ Portfolio Of Arif Prasetyo ✦";
const SPEED = 1.1;
const CURVE_AMOUNT = 400;
const DIRECTION: "left" | "right" = "right";
const INTERACTIVE = true;

const CurvedLoop: FC<CurvedLoopProps> = () => {
  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);

  /** === ANIMATION STATE (IMPERATIVE) === */
  const offsetRef = useRef(0);
  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const directionRef = useRef<"left" | "right">(DIRECTION);

  /** === REACT STATE (STATIC) === */
  const [spacing, setSpacing] = useState(0);

  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-100,40 Q500,${40 + CURVE_AMOUNT} 1540,40`;

  const ready = spacing > 0;

  const totalText = spacing
    ? Array(Math.ceil(1800 / spacing) + 2)
        .fill(TEXT)
        .join("")
    : TEXT;

  /** === MEASURE TEXT ONCE === */
  useEffect(() => {
    if (!measureRef.current) return;
    setSpacing(measureRef.current.getComputedTextLength());
  }, []);

  /** === INIT OFFSET ONCE SPACING IS READY === */
  useEffect(() => {
    if (!spacing || !textPathRef.current) return;

    const initial = -spacing;
    offsetRef.current = initial;
    textPathRef.current.setAttribute("startOffset", `${initial}px`);
  }, [spacing]);

  /** === RAF LOOP === */
  useEffect(() => {
    if (!ready || !textPathRef.current) return;

    let frameId: number;

    const tick = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = directionRef.current === "right" ? SPEED : -SPEED;

        let next = offsetRef.current + delta;

        if (next <= -spacing) next += spacing;
        if (next > 0) next -= spacing;

        offsetRef.current = next;
        textPathRef.current.setAttribute("startOffset", `${next}px`);
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [ready, spacing]);

  /** === POINTER EVENTS === */
  const onPointerDown = (e: PointerEvent) => {
    if (!INTERACTIVE) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!INTERACTIVE || !dragRef.current || !textPathRef.current) return;

    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velocityRef.current = dx;

    let next = offsetRef.current + dx;

    if (next <= -spacing) next += spacing;
    if (next > 0) next -= spacing;

    offsetRef.current = next;
    textPathRef.current.setAttribute("startOffset", `${next}px`);
  };

  const onPointerUp = () => {
    if (!INTERACTIVE) return;
    dragRef.current = false;
    directionRef.current = velocityRef.current > 0 ? "right" : "left";
  };

  return (
    <div
      className="flex w-full items-center justify-center"
      style={{ visibility: ready ? "visible" : "hidden" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <svg
        className="select-none w-full overflow-visible block aspect-[100/12] text-[6rem] font-bold uppercase"
        viewBox="0 0 1440 120"
      >
        {/* hidden measurement */}
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: "hidden", pointerEvents: "none" }}
        >
          {TEXT}
        </text>

        <defs>
          <path id={pathId} d={pathD} fill="none" />
        </defs>

        {ready && (
          <text className="fill-neutral-950">
            <textPath ref={textPathRef} href={`#${pathId}`}>
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
