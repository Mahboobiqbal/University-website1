"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NEWS } from "@/data/home";

export const NewsSection = () => {
  return (
    <section className="bg-[#f7f7f5] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              University updates
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-light text-charcoal sm:text-4xl"
            >
              {NEWS.heading}
            </motion.h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 border-b border-brand pb-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            View all news <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group mb-8 grid grid-cols-1 overflow-hidden border border-gray-200 bg-white transition-shadow hover:shadow-[0_14px_36px_rgba(35,54,35,0.1)] lg:grid-cols-2"
        >
          <Link
            href={NEWS.featured.href}
            aria-label={`Read ${NEWS.featured.title}`}
            className="relative min-h-[260px] overflow-hidden lg:min-h-[360px]"
          >
            <Image
              src={NEWS.featured.image}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Link>
          <div className="flex flex-col justify-center p-6 lg:p-10">
            <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand">
              Featured story
            </span>
            <Link href={NEWS.featured.href} className="group/title">
              <h3 className="mb-4 text-xl font-medium leading-snug text-charcoal transition-colors group-hover/title:text-brand lg:text-2xl">
                {NEWS.featured.title}
              </h3>
            </Link>
            <p className="mb-6 line-clamp-3 leading-relaxed text-gray-600">
              {NEWS.featured.excerpt}
            </p>
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-500">
                <span className="font-medium text-charcoal">{NEWS.featured.date}</span>{" "}
                {NEWS.featured.month}
              </span>
              <Link
                href={NEWS.featured.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-brand"
              >
                Read more <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </div>
        </motion.article>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NEWS.list.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={item.href}
                className="group block h-full border border-gray-200 bg-white transition-all duration-300 hover:border-brand hover:shadow-[0_10px_28px_rgba(35,54,35,0.08)]"
              >
                <div className="relative h-40 overflow-hidden bg-[#233623]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-gray-500">
                    {item.date} {item.month}
                  </span>
                  <h3 className="mt-2 line-clamp-3 text-sm font-medium leading-snug text-charcoal transition-colors group-hover:text-brand">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
