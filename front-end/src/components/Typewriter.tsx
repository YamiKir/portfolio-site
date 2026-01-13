"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  start?: boolean;
  onComplete?: () => void;
  className?: string;
  fontClass?: string;
};

export default function Typewriter({
  text,
  speed = 15,
  start = true,
  onComplete,
  className,
  fontClass,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!start || index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [start, index, text, speed]);

  useEffect(() => {
    if (start && index === text.length) {
      onComplete?.();
    }
  }, [start, index, text.length, onComplete]);

  return (
    <p className={`${fontClass} ${className}`}>
      {displayedText}
    </p>
  );
}
