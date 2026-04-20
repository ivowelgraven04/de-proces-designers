// 2.4 – Typewriter effect
// To remove: replace <Typewriter> with plain text
import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
  className?: string;
}

export function Typewriter({ words, speed = 70, deleteSpeed = 40, pauseMs = 1800, className = "" }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && displayed === current) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (deleting && displayed === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(() => {
      setDisplayed(deleting ? displayed.slice(0, -1) : current.slice(0, displayed.length + 1));
    }, deleting ? deleteSpeed : speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex, words, speed, deleteSpeed, pauseMs]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse ml-0.5 inline-block w-0.5 h-[1em] bg-[#8664FB] align-middle" />
    </span>
  );
}
