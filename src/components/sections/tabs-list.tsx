"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ANNOUNCEMENTS } from "@/data/home";

interface TabItem {
  label: string;
  key: string;
  items: { title: string; date: string; href: string }[];
}

const tabContent: Record<string, TabItem["items"]> = {
  announcements: ANNOUNCEMENTS.announcements,
  jobs: ANNOUNCEMENTS.jobs,
  tenders: ANNOUNCEMENTS.tenders,
};

export const TabsList = () => {
  const [activeKey, setActiveKey] = React.useState("announcements");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light text-charcoal mb-4 text-balance"
          >
            {ANNOUNCEMENTS.heading}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-8 mb-12 border-b border-gray-200"
        >
          {ANNOUNCEMENTS.tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              aria-pressed={activeKey === tab.key}
              onClick={() => setActiveKey(tab.key)}
              className={cn(
              "border-b-2 pb-4 text-sm font-medium transition-colors",
                activeKey === tab.key
                ? "border-brand text-brand"
                : "border-transparent text-gray-500 hover:text-gray-700",
              )}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {tabContent[activeKey].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 items-start"
              >
                <span className="text-xs font-medium text-gray-500 whitespace-nowrap mt-0.5">
                  {item.date}
                </span>
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-charcoal transition-colors hover:text-brand"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};