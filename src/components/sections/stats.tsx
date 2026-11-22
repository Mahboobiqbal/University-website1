"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";
import { STATS } from "@/data/home";
import { useLanguage } from "@/components/providers/language-provider";

export const StatsSection = () => {
  const { language } = useLanguage();
  return (
    <section className="bg-[#f7f8fa] py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-4 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-2 md:col-span-1"
          >
            <h2 className="text-xl lg:text-2xl font-semibold text-charcoal leading-tight">
              {language === "ur" ? "اعداد و شمار" : STATS.heading}
            </h2>
          </motion.div>

          {STATS.counters.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="text-center"
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                label={
                  language === "ur"
                    ? stat.label === "Teaching Departments"
                      ? "تعلیمی شعبہ جات"
                      : stat.label === "Academic Programs"
                        ? "تعلیمی پروگرام"
                        : stat.label === "Established"
                          ? "قائم"
                          : "زیرِ سوات کیمپس"
                    : stat.label
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
