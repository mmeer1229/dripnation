import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface WavesProps {
  className?: string;
  lineColor?: string;
  lineCount?: number;
}

// Lightweight animated wave background: layered sine waves (not a full Perlin
// field) so it stays cheap on low-end phones, with a mouse-reactive bulge on
// pointer-capable devices. Bails out to a single still frame when the user
// has requested reduced motion.
function Waves({ className, lineColor = "currentColor", lineCount }: WavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    const lines = lineCount ?? (isCoarsePointer ? 5 : 8);
    const pointsPerLine = isCoarsePointer ? 24 : 48;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      pointer.current.active = false;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const t = time * 0.00025;

      for (let i = 0; i < lines; i++) {
        const lineProgress = i / Math.max(lines - 1, 1);
        const baseY = height * (0.15 + lineProgress * 0.7);
        const amplitude = height * 0.05 * (0.4 + lineProgress * 0.6);

        ctx.beginPath();
        for (let p = 0; p <= pointsPerLine; p++) {
          const x = (p / pointsPerLine) * width;
          let y =
            baseY +
            Math.sin(x * 0.008 + t * 6 + i * 1.7) * amplitude +
            Math.sin(x * 0.015 - t * 4 + i * 0.6) * amplitude * 0.4;

          if (pointer.current.active) {
            const dx = x - pointer.current.x;
            const dy = baseY - pointer.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - dist / (width * 0.25));
            y -= influence * influence * 40;
          }

          if (p === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = lineColor;
        ctx.globalAlpha = 0.12 + lineProgress * 0.18;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    if (prefersReducedMotion) {
      draw(0);
      return () => resizeObserver.disconnect();
    }

    if (!isCoarsePointer) {
      canvas.addEventListener("pointermove", handlePointerMove);
      canvas.addEventListener("pointerleave", handlePointerLeave);
    }

    let frame = 0;
    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [lineColor, lineCount]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-auto absolute inset-0 h-full w-full", className)}
    />
  );
}

export { Waves };
