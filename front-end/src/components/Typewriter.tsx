// components/Typewriter.tsx
"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number; // ms per character
  className?: string;
  fontClass? : string; 
};

export default function Typewriter({
  text,
  speed = 15,
  className,
  fontClass
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

   return (
    <p className={`${fontClass} ${className}`}>
      {displayedText}
    </p>
  );
}
