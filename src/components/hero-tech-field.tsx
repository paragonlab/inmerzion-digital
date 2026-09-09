"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  ox: number;
  oy: number;
  oz: number;
  size: number;
  hue: "mint" | "sand" | "fog";
};

const MINT = "62, 207, 176";
const SAND = "232, 220, 200";
const FOG = "197, 213, 220";

function colorFor(hue: Particle["hue"], alpha: number) {
  const rgb = hue === "mint" ? MINT : hue === "sand" ? SAND : FOG;
  return `rgba(${rgb}, ${alpha})`;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function isMobileViewport() {
  return typeof window !== "undefined" && window.innerWidth < 768;
}

/**
 * Lightweight canvas particle / voxel field for the landing hero.
 * No WebGL deps — 2D canvas with perspective projection, DPR-capped, mobile-throttled.
 */
export function HeroTechField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    const mobile = isMobileViewport();
    const count = mobile ? 56 : 110;
    const maxDpr = mobile ? 1.25 : 1.5;
    const connectDist = mobile ? 92 : 124;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    let lastTs = 0;
    let time = 0;

    const particles: Particle[] = [];

    const seed = () => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        // Bias toward the open right side so the field reads as a hero accent
        const x = (Math.random() * 0.85 + 0.05) * width * 0.95 - width * 0.25;
        const y = (Math.random() - 0.5) * height * 0.95;
        const z = Math.random() * 520 + 80;
        const roll = Math.random();
        particles.push({
          x,
          y,
          z,
          ox: x,
          oy: y,
          oz: z,
          size: Math.random() * 2.4 + 1.2,
          hue: roll > 0.68 ? "mint" : roll > 0.38 ? "sand" : "fog",
        });
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduced) {
        drawFrame(0, true);
      }
    };

    const project = (p: Particle, t: number) => {
      const sway = Math.sin(t * 0.00035 + p.oz * 0.01) * 14;
      const lift = Math.cos(t * 0.00028 + p.ox * 0.008) * 10;
      const rot = t * 0.00012;
      const cos = Math.cos(rot);
      const sin = Math.sin(rot);
      const rx = p.ox * cos - p.oz * 0.15 * sin;
      const rz = p.oz + p.ox * 0.08 * sin;
      const perspective = 520 / (520 + rz);
      return {
        sx: width * 0.66 + (rx + sway) * perspective,
        sy: height * 0.4 + (p.oy + lift) * perspective,
        scale: perspective,
        depth: rz,
      };
    };

    const drawFrame = (t: number, staticPass = false) => {
      ctx.clearRect(0, 0, width, height);

      // Soft volumetric wash behind the field
      const wash = ctx.createRadialGradient(
        width * 0.68,
        height * 0.36,
        16,
        width * 0.68,
        height * 0.36,
        Math.max(width, height) * 0.58,
      );
      wash.addColorStop(0, "rgba(62, 207, 176, 0.11)");
      wash.addColorStop(0.4, "rgba(232, 220, 200, 0.045)");
      wash.addColorStop(1, "rgba(7, 16, 22, 0)");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, width, height);

      const projected = particles.map((p) => ({
        p,
        ...project(p, staticPass ? 0 : t),
      }));

      projected.sort((a, b) => b.depth - a.depth);

      // Sparse constellation links
      ctx.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        let links = 0;
        for (let j = i + 1; j < projected.length && links < 2; j++) {
          const b = projected[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.hypot(dx, dy);
          if (dist > connectDist) continue;
          const alpha = (1 - dist / connectDist) * 0.28 * Math.min(a.scale, b.scale);
          ctx.strokeStyle = `rgba(62, 207, 176, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.sx, a.sy);
          ctx.lineTo(b.sx, b.sy);
          ctx.stroke();
          links += 1;
        }
      }

      // Voxel-ish cubes / points
      for (const item of projected) {
        const { p, sx, sy, scale } = item;
        const s = p.size * scale * (mobile ? 1.35 : 1.55);
        const alpha = 0.38 + scale * 0.52;
        ctx.fillStyle = colorFor(p.hue, alpha);

        // Tiny cube silhouette (reads as voxel without 3D engine)
        const half = s;
        ctx.fillRect(sx - half, sy - half, half * 2, half * 2);
        ctx.fillStyle = colorFor(p.hue, Math.min(1, alpha * 0.7));
        ctx.fillRect(sx - half + s * 0.35, sy - half - s * 0.35, half * 2, half * 0.55);
        ctx.fillRect(sx + half, sy - half - s * 0.2, half * 0.45, half * 2);
      }
    };

    const tick = (ts: number) => {
      if (!running) return;
      if (!lastTs) lastTs = ts;
      const delta = ts - lastTs;
      // Throttle mobile to ~30fps feel without hard capping desktop
      const minFrame = mobile ? 32 : 16;
      if (delta >= minFrame) {
        lastTs = ts;
        time += delta;
        drawFrame(time);
      }
      raf = window.requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        window.cancelAnimationFrame(raf);
      } else if (!reduced) {
        running = true;
        lastTs = 0;
        raf = window.requestAnimationFrame(tick);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    if (!reduced) {
      raf = window.requestAnimationFrame(tick);
    }

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
