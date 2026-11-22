"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PROGRAMS } from "@/data/home";
import { useLanguage } from "@/components/providers/language-provider";

export const ProgramsSection = () => {
  const { language } = useLanguage();
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={PROGRAMS.image}
                alt="Students learning at University of Swat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="top-line text-2xl lg:text-3xl font-semibold text-charcoal mb-4"
            >
              {language === "ur" ? "ہمارے تعلیمی پروگرام" : PROGRAMS.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-gray-600 font-light leading-relaxed mb-8 max-w-[520px]"
            >
              {language === "ur"
                ? "جامعہ سوات کے شعبہ جات میں زیرِ تعلیم BS، MPhil/MS اور PhD پروگرام دریافت کریں۔"
                : PROGRAMS.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-[560px]"
            >
              {PROGRAMS.buttons.map((btn) => (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="group inline-flex items-center justify-between gap-3 px-5 py-3.5 rounded-md border border-brand text-brand text-sm font-medium hover:bg-brand hover:text-white transition-all duration-300"
                >
                  {language === "ur"
                    ? btn.label.includes("Undergraduate")
                      ? "انڈرگریجویٹ پروگرام"
                      : btn.label.includes("MS")
                        ? "MS/MPhil پروگرام"
                        : "پی ایچ ڈی پروگرام"
                    : btn.label}
                  <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href={PROGRAMS.viewAll.href}
                className="inline-flex items-center justify-center px-10 py-3 rounded-md border border-brand text-brand text-sm font-medium hover:bg-brand hover:text-white transition-all duration-300"
              >
                {language === "ur" ? "تمام پروگرام دیکھیں" : PROGRAMS.viewAll.label}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
