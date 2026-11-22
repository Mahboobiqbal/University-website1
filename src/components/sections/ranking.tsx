"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FOOTER_BADGE } from "@/data/home";

export const RankingSection = () => {
  return (
    <section className="bg-white border-b border-gray-100 py-10 lg:py-12">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-40 lg:w-52 h-20 relative"
        >
          <Image
            src={FOOTER_BADGE.image}
            alt="HEC Recognition and Quality Enhancement Cell"
            fill
            className="object-contain object-left"
            sizes="208px"
          />
        </motion.div>

        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-10 lg:gap-16">
          {FOOTER_BADGE.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="text-center lg:text-left flex flex-col"
            >
              <span className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</span>
              <span className="text-4xl lg:text-5xl font-light text-brand leading-tight">{item.value}</span>
              <span className="text-xs text-gray-500">{item.caption}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
