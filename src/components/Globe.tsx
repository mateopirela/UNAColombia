"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const BOGOTA: [number, number] = [4.711, -74.0721];

/** Sedes principales de las Naciones Unidas. */
const UN_OFFICES: [number, number][] = [
  [40.7489, -73.968], // Nueva York
  [46.2266, 6.1405], // Ginebra
  [48.2351, 16.4169], // Viena
  [-1.2333, 36.8167], // Nairobi
];

const AMARILLO: [number, number, number] = [0.98, 0.82, 0];

// Ángulo que deja a Colombia y el Atlántico de frente.
const BASE_PHI = Math.PI - ((-48 * Math.PI) / 180 - Math.PI / 2);

export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let size = canvas.offsetWidth;
    let drag = 0;
    let dragStart: number | null = null;
    let dragBase = 0;
    let frame = 0;
    const start = performance.now();

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size * dpr,
      height: size * dpr,
      phi: BASE_PHI,
      theta: 0.22,
      dark: 1,
      diffuse: 1.25,
      mapSamples: 18000,
      mapBrightness: 7,
      mapBaseBrightness: 0.04,
      baseColor: [0.3, 0.55, 0.88],
      glowColor: [0.1, 0.3, 0.55],
      markerColor: AMARILLO,
      markers: [
        { location: BOGOTA, size: 0.085 },
        ...UN_OFFICES.map((location) => ({ location, size: 0.045 })),
      ],
      arcs: UN_OFFICES.map((to) => ({ from: BOGOTA, to })),
      arcColor: AMARILLO,
      arcWidth: 0.6,
      arcHeight: 0.28,
      markerElevation: 0.01,
    });

    const render = (now: number) => {
      const t = (now - start) / 1000;
      const sway = reduced ? 0 : Math.sin(t * 0.22) * 0.38;
      globe.update({ phi: BASE_PHI + sway + drag });
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    canvas.style.opacity = "1";

    const ro = new ResizeObserver(() => {
      size = canvas.offsetWidth;
      globe.update({ width: size * dpr, height: size * dpr });
    });
    ro.observe(canvas);

    const down = (e: PointerEvent) => {
      dragStart = e.clientX;
      dragBase = drag;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const move = (e: PointerEvent) => {
      if (dragStart === null) return;
      drag = dragBase + (e.clientX - dragStart) / 180;
    };
    const up = () => {
      dragStart = null;
      canvas.style.cursor = "grab";
    };
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Globo terráqueo con conexiones entre Bogotá y las sedes de las Naciones Unidas en Nueva York, Ginebra, Viena y Nairobi"
      className={`aspect-square w-full cursor-grab touch-pan-y opacity-0 transition-opacity duration-1000 ${className}`}
    />
  );
}
