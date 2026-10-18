"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ to, suffix = "", duration = 1.8, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${to.toLocaleString("en-US")}${suffix}`}>
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
