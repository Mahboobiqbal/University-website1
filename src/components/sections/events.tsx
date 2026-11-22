"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { EVENTS } from "@/data/home";

export const EventsSection = () => {
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const scrollBy = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="main-holder" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10 lg:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="top-line text-2xl lg:text-3xl font-semibold text-charcoal"
          >
            {EVENTS.heading}
          </motion.h2>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                aria-label="Event options"
                className="w-11 h-11 rounded-md bg-brand text-white flex items-center justify-center hover:bg-brand-hover transition-colors"
              >
                <CalendarDays className="w-5 h-5" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-2 z-20">
                  <Link
                    href={EVENTS.academicCalendar.href}
                    className="flex items-center gap-2 px-4 py-3 rounded-md bg-brand text-white text-sm font-medium hover:bg-brand-hover transition-colors"
                  >
                    {EVENTS.academicCalendar.label}
                  </Link>
                  <Link
                    href={EVENTS.viewAll.href}
                    className="flex items-center gap-2 px-4 py-3 mt-2 rounded-md border border-brand text-brand text-sm font-medium hover:bg-brand hover:text-white transition-colors"
                  >
                    {EVENTS.viewAll.label}
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous events"
              className="hidden sm:flex w-10 h-10 rounded-full border border-gray-300 text-charcoal items-center justify-center hover:border-brand hover:text-brand transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next events"
              className="hidden sm:flex w-10 h-10 rounded-full border border-gray-300 text-charcoal items-center justify-center hover:border-brand hover:text-brand transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {EVENTS.items.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="snap-start shrink-0 w-[300px] sm:w-[380px] lg:w-[410px]"
            >
              <Link
                href={event.href}
                className="group block h-full rounded-lg overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="410px"
                  />
                </div>
                <div className="p-5 flex gap-4">
                  <div className="shrink-0 text-center w-14 pt-0.5">
                    <span className="block text-3xl font-light text-brand leading-none">
                      {event.day}
                    </span>
                    <span className="block text-xs font-medium text-charcoal mt-1">
                      {event.month}
                    </span>
                    <span className="block text-[11px] text-gray-500 italic">{event.year}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-charcoal leading-snug group-hover:text-brand transition-colors line-clamp-3">
                      {event.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand">
                      Read more <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
