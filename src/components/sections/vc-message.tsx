"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { VC_MESSAGE } from "@/data/home";
import { useLanguage } from "@/components/providers/language-provider";

export const VCMessageSection = () => {
  const { language } = useLanguage();
  const ur = language === "ur";
  return (
    <section className="overflow-hidden bg-[#17231d] text-white">
      <div className="grid min-h-[500px] lg:grid-cols-[58%_42%]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative flex items-center px-6 py-12 sm:px-10 lg:px-[clamp(3rem,7vw,7rem)]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, #fff 0 1px, transparent 1.5px)",
              backgroundSize: "34px 34px",
            }}
          />
          <div className="relative max-w-[620px]">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.28em] text-[#d79a97]">
              {ur ? "نائب صدر جامعہ کا پیغام" : "Vice Chancellor's Message"}
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5 text-3xl font-light leading-tight sm:text-4xl lg:text-5xl"
            >
              {ur ? "نائب صدر جامعہ کا پیغام" : VC_MESSAGE.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="max-w-[580px] text-base leading-relaxed text-white/82 sm:text-lg"
            >
              {ur
                ? "جامعہ سوات کے وائس چانسلر کے طور پر مجھے فخر، ذمہ داری اور امید کے ساتھ خدمت کا موقع ملا ہے۔ ہم طلبہ، اساتذہ، عملہ، alumni اور شراکت داروں کے ساتھ مل کر ادارے کو علمی excellence، innovation اور community impact کی سمت لے جائیں گے۔"
                : VC_MESSAGE.excerpt}
            </motion.p>
            <div className="mt-7 border-l-2 border-[#d79a97] pl-4">
              <p className="text-lg font-semibold uppercase leading-tight">{VC_MESSAGE.name}</p>
              <p className="mt-1 text-sm text-white/65">{VC_MESSAGE.title}</p>
            </div>
            <Link
              href={VC_MESSAGE.href}
              className="mt-7 inline-flex items-center gap-2 border-b border-[#d79a97] pb-1 text-sm font-medium text-white transition-colors hover:text-[#d79a97]"
            >
              {ur ? "مزید پڑھیں" : VC_MESSAGE.readMore}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="relative min-h-[420px] bg-[#233623] lg:min-h-full"
        >
          <Image
            src={VC_MESSAGE.portrait}
            alt={VC_MESSAGE.name}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-[center_35%]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};