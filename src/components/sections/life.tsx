"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LIFE } from "@/data/home";

export const LifeSection = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % LIFE.sliderImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={LIFE.sliderImages[current]}
              alt="Life at University of Swat"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#17231d]/80" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-6">
        <div className="max-w-[480px] text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-light mb-5"
          >
            {LIFE.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl font-light leading-relaxed mb-8 text-white/90"
          >
            {LIFE.subtext}
          </motion.p>
          <Link
            href={LIFE.button.href}
            className="inline-flex items-center justify-center px-10 py-3 rounded-md border border-white text-white text-sm font-medium hover:bg-white hover:text-charcoal transition-colors"
          >
            {LIFE.button.label}
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 mt-16 lg:mt-20 text-center text-white"
        >
          {LIFE.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl lg:text-5xl font-light leading-none">
                {stat.value}
                <span className="text-xl align-top">+</span>
              </div>
              <div className="text-base lg:text-xl font-light mt-3">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
