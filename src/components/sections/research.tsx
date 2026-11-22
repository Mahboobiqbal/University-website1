"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RESEARCH } from "@/data/home";
import { useLanguage } from "@/components/providers/language-provider";

export const ResearchSection = () => {
  const { language } = useLanguage();
  return (
    <section className="py-16 lg:py-24 bg-[#f7f8fa]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="top-line text-2xl lg:text-3xl font-semibold text-charcoal mb-10 lg:mb-14"
        >
          {language === "ur" ? "تحقیق اور جدت" : RESEARCH.heading}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {RESEARCH.cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="group block relative aspect-[3/4] overflow-hidden rounded-lg bg-[#233623] shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/95 via-[#17231d]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg lg:text-xl font-bold text-white leading-snug">
                    {card.title}
                  </h3>
                  <span className="mt-2 block h-0.5 w-8 bg-white/70 transition-all duration-300 group-hover:w-14" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
