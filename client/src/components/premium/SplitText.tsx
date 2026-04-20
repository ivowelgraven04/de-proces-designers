// 2.1 – Word-split animated text reveal
// To remove: replace <SplitText> with plain text/span
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
}

export function SplitText({ text, className = "", delay = 0, staggerDelay = 0.1 }: SplitTextProps) {
  const words = text.split(" ");
  return (
    <motion.span
      className={`inline ${className}`}
      initial="hidden"
      animate="visible"
      style={{ perspective: "800px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] last:mr-0"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.65,
                delay: delay / 1000 + i * staggerDelay,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
