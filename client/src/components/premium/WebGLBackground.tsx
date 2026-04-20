// 3.2 – Animated WebGL-style canvas gradient background
// To remove: delete this file + remove <WebGLBackground> from hero section
import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: [number, number, number];
}

export function WebGLBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let W = 0, H = 0;

    const blobs: Blob[] = [
      { x: 0.7, y: 0.2, vx: 0.0003, vy: 0.0002, r: 0.45, color: [134, 100, 251] },
      { x: 0.2, y: 0.7, vx: -0.0002, vy: 0.0003, r: 0.40, color: [71, 200, 245] },
      { x: 0.5, y: 0.5, vx: 0.0001, vy: -0.0002, r: 0.35, color: [140, 82, 255] },
      { x: 0.9, y: 0.8, vx: -0.0003, vy: -0.0001, r: 0.30, color: [100, 200, 255] },
    ];

    function resize() {
      if (!canvas) return;
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < 0 || b.x > 1) b.vx *= -1;
        if (b.y < 0 || b.y > 1) b.vy *= -1;

        const grd = ctx.createRadialGradient(b.x * W, b.y * H, 0, b.x * W, b.y * H, b.r * Math.max(W, H));
        grd.addColorStop(0, `rgba(${b.color.join(",")},0.28)`);
        grd.addColorStop(1, `rgba(${b.color.join(",")},0)`);
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, W, H);
      }

      rafId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
}
