"use client";

import { useRef, useState, useCallback } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
};

// Signature interaction: dragging reveals the restored shingle underneath
// the weathered one. This is the literal product experience (rejuvenation),
// not a decorative widget.
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
}: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-sm overflow-hidden select-none cursor-ew-resize"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      role="slider"
      aria-label="Drag to compare before and after roof restoration"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
      }}
    >
      {/* After image — full width, base layer */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={afterSrc} alt="Restored roof" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before image — same size as container, clipped with clip-path so it
          never mis-measures on resize (avoids width-hack rendering bugs) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={beforeSrc}
        alt="Weathered roof before restoration"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-char-700 text-xs font-medium">
          ↔
        </div>
      </div>

      <span className="absolute bottom-3 left-3 bg-char-900/80 text-white text-xs px-2 py-1 rounded-sm">
        {beforeLabel}
      </span>
      <span className="absolute bottom-3 right-3 bg-moss-700/90 text-white text-xs px-2 py-1 rounded-sm">
        {afterLabel}
      </span>
    </div>
  );
}
