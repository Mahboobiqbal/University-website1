"use client";

import * as React from "react";
import { useInView, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number | string;
  suffix?: string;
  label: string;
  note?: string;
  duration?: number;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  suffix = "",
  label,
  note,
  duration = 1.5,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    const target = typeof value === "number" ? value : parseInt(value, 10) || 0;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("text-center")}
    >
      <div className="text-4xl lg:text-5xl font-light text-charcoal leading-none flex items-start justify-center">
        <span>{isInView ? count : 0}</span>
        {suffix && <span className="text-lg lg:text-xl align-top ml-0.5">{suffix}</span>}
      </div>
      <p className="mt-3 text-base text-gray-500 font-light">{label}</p>
      {note && <p className="mt-1 text-xs text-gray-400">{note}</p>}
    </motion.div>
  );
};
