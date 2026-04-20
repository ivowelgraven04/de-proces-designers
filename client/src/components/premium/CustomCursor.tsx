// 4.1 – Velocity-stretch gradient cursor with spotlight aura
// To remove: delete this file + remove <CustomCursor> from App.tsx
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  // ── Instant dot position
  const dotX = useMotionValue(-200);
  const dotY = useMotionValue(-200);

  // ── Slow aura position (heavy spring)
  const auraX = useSpring(dotX, { stiffness: 60, damping: 18 });
  const auraY = useSpring(dotY, { stiffness: 60, damping: 18 });

  // ── Velocity-based stretch
  const scaleX = useSpring(1, { stiffness: 260, damping: 22 });
  const scaleY = useSpring(1, { stiffness: 260, damping: 22 });
  const rotate  = useMotionValue(0);

  const lastPos  = useRef({ x: -200, y: -200 });
  const rafId    = useRef<number>(0);
  const targetSX = useRef(1);
  const targetSY = useRef(1);

  const [hovering, setHovering] = useState(false);
  const [hoverLabel, setHoverLabel] = useState("");
  const [visible, setVisible]   = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const vx = e.clientX - lastPos.current.x;
      const vy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(vx * vx + vy * vy);

      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setVisible(true);

      if (speed > 2) {
        const angle = Math.atan2(vy, vx) * (180 / Math.PI);
        rotate.set(angle);
        const stretch = Math.min(1 + speed * 0.055, 3.2);
        targetSX.current = stretch;
        targetSY.current = Math.max(0.35, 1 / stretch);
      } else {
        targetSX.current = 1;
        targetSY.current = 1;
      }

      scaleX.set(targetSX.current);
      scaleY.set(targetSY.current);
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    // Decay stretch back to circle when mouse stops
    const decay = () => {
      scaleX.set(1);
      scaleY.set(1);
      rafId.current = requestAnimationFrame(decay);
    };
    rafId.current = requestAnimationFrame(decay);

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const link = el.closest("a");
      const btn  = el.closest("button, [role='button']");
      if (link) {
        setHovering(true);
        setHoverLabel(link.getAttribute("data-cursor-label") || "");
      } else if (btn) {
        setHovering(true);
        setHoverLabel(btn.getAttribute("data-cursor-label") || "");
      } else {
        setHovering(false);
        setHoverLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId.current);
    };
  }, [dotX, dotY, rotate, scaleX, scaleY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
        @keyframes cursor-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      {/* ── Slow spotlight aura */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9990]"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width:  hovering ? 120 : 80,
          height: hovering ? 120 : 80,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: hovering
              ? "radial-gradient(circle, rgba(134,100,251,0.18) 0%, rgba(71,200,245,0.06) 60%, transparent 100%)"
              : "radial-gradient(circle, rgba(134,100,251,0.12) 0%, rgba(71,200,245,0.04) 60%, transparent 100%)",
            mixBlendMode: "screen",
            transition: "background 0.4s ease",
          }}
        />
      </motion.div>

      {/* ── Spinning gradient ring (shows on hover) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997]"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{ scale: hovering ? 1 : 0, opacity: hovering ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div
          className="rounded-full"
          style={{
            width: 52,
            height: 52,
            border: "1.5px solid transparent",
            borderTopColor: "#8664FB",
            borderRightColor: "#47C8F5",
            animation: "cursor-rotate 1.2s linear infinite",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
      </motion.div>

      {/* ── Velocity-stretch gradient pill (main cursor) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          rotate,
          scaleX,
          scaleY,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width:  hovering ? 14 : 8,
          height: hovering ? 14 : 8,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "linear-gradient(135deg, #8664FB, #47C8F5)",
            boxShadow: hovering
              ? "0 0 20px rgba(134,100,251,0.8), 0 0 40px rgba(71,200,245,0.4)"
              : "0 0 10px rgba(134,100,251,0.6)",
          }}
        />
      </motion.div>

      {/* ── Hover label */}
      {hoverLabel && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[9999] font-heading text-xs font-600 text-white"
          style={{
            x: dotX,
            y: dotY,
            translateX: "12px",
            translateY: "-50%",
          }}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
        >
          <span
            className="block px-2 py-0.5 rounded-full"
            style={{ background: "linear-gradient(135deg, #8664FB, #47C8F5)" }}
          >
            {hoverLabel}
          </span>
        </motion.div>
      )}
    </>
  );
}
