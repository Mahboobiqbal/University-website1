"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { QUICK_ACCESS } from "@/data/home";

export const QuickAccessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            University services
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-light text-charcoal text-balance md:text-4xl"
          >
            {QUICK_ACCESS.heading}
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {QUICK_ACCESS.tiles.map((tile) => (
            <Link
              key={tile.label}
              href={tile.href}
              target={tile.external ? "_blank" : undefined}
              rel={tile.external ? "noopener noreferrer" : undefined}
              className="group relative block aspect-[4/3] overflow-hidden border border-gray-200 transition-colors hover:border-brand sm:aspect-square"
            >
              <Image
                src={tile.image}
                alt={tile.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#17231d]/85 via-[#17231d]/15 to-transparent transition-colors group-hover:from-[#17231d]/95" />
              <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-balance text-white">
                {tile.label}
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};