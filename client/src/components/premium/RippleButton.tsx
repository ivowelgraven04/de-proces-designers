// 4.6 – Click ripple effect wrapper
// To remove: replace <RippleButton> with plain element
import { useRef, MouseEvent, ReactNode } from "react";

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "div" | "a";
  href?: string;
}

export function RippleButton({ children, className = "", onClick, as: Tag = "div", href }: RippleButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;

    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.35);
      width: ${size}px;
      height: ${size}px;
      top: ${y - size / 2}px;
      left: ${x - size / 2}px;
      transform: scale(0);
      animation: ripple-anim 0.55s ease-out forwards;
      pointer-events: none;
    `;

    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    onClick?.();
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      style={{ display: "contents" }}
    >
      <style>{`@keyframes ripple-anim { to { transform: scale(1); opacity: 0; } }`}</style>
      {children}
    </div>
  );
}
