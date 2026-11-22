"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ABOUT } from "@/data/home";
import { useLanguage } from "@/components/providers/language-provider";

export const AboutSection = () => {
  const { language } = useLanguage();
  const ur = language === "ur";
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-12 lg:gap-16 lg:px-6">
        <div className="lg:col-span-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {ur ? "سوات کی ایک عوامی جامعہ" : "A public university in Swat"}
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-light text-charcoal text-balance md:text-5xl lg:text-6xl"
          >
            {ur ? "جامعہ کے بارے میں" : ABOUT.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base font-light leading-relaxed mb-8"
          >
            {ur
              ? "جامعہ سوات 2010 میں قائم ہونے والی عوامی شعبے کی جامعہ ہے، جو سوات اور پورے پاکستان میں اعلیٰ تعلیم کی سہولت مہیا کرتی ہے۔"
              : ABOUT.intro}
          </motion.p>
          <Link
            href={ABOUT.href}
            className="group inline-flex items-center gap-3 border-b border-brand pb-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            {ur ? "مزید پڑھیں" : ABOUT.readMore}
            <ArrowRight
              aria-hidden="true"
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="relative overflow-hidden bg-[#233623] p-8 text-white sm:p-10 lg:col-span-4 lg:p-10"
        >
          <span aria-hidden="true" className="absolute -right-10 -top-14 h-48 w-48 rounded-full border border-white/15" />
          <span aria-hidden="true" className="absolute -right-2 -top-6 h-32 w-32 rounded-full border border-white/15" />
          <div className="relative">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
              {ur ? "ہمارا گھر" : "Our home"}
            </p>
            <h3 className="mb-4 text-2xl font-light leading-snug sm:text-3xl">
              {ur ? "سوات میں جڑی۔ دنیا کے لیے کھلی۔" : "Rooted in Swat. Open to the world."}
            </h3>
            <p className="text-sm leading-relaxed text-white/75">
              {ur
                ? "جامعہ کا مرکزی تعلیمی کیمپس اور انتظامی دفاتر چارباغ، سوات میں واقع ہیں۔"
                : "The main academic campus and university offices are based in Charbagh, Swat."}
            </p>
            <Link
              href="/campuses"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/70"
            >
              {ur ? "کیمپس دیکھیں" : "Explore our campuses"} <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};