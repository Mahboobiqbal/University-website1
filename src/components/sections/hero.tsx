"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO } from "@/data/home";
import { IMAGES } from "@/data/images";
import {
  LinkedinIcon,
  FacebookIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";
import { useLanguage } from "@/components/providers/language-provider";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  tiktok: TiktokIcon,
  youtube: YoutubeIcon,
};

interface Slide {
  type: "video" | "image";
  src: string;
}

const SLIDES: Slide[] = [
  { type: "video", src: IMAGES.hero.video },
  ...IMAGES.hero.slides.map((src: string) => ({ type: "image" as const, src })),
];

export const Hero = () => {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [paused]);

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal flex flex-col justify-between"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {SLIDES[current].type === "video" ? (
              <video
                key={SLIDES[current].src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/class-picture.jpg"
                className="h-full w-full object-cover"
                aria-label="University of Swat student video"
              >
                <source src={SLIDES[current].src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={SLIDES[current].src}
                alt="University of Swat campus and Swat Valley"
                fill
                priority={current === 1}
                className="object-cover"
                sizes="100vw"
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/65 sm:via-charcoal/45 to-charcoal/30 sm:to-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/20" />
      </div>

      {/* Slide Navigation Controls - Hidden on small mobile to avoid overlaying headline, or repositioned gracefully */}
      <div className="hidden sm:block absolute inset-x-0 top-1/2 z-20 -translate-y-1/2 pointer-events-none">
        <div className="mx-auto flex max-w-[1440px] justify-between px-4 sm:px-6">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/40 text-white flex items-center justify-center bg-black/20 backdrop-blur-sm hover:bg-white/20 transition-colors shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/40 text-white flex items-center justify-center bg-black/20 backdrop-blur-sm hover:bg-white/20 transition-colors shadow-sm"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 flex-1 flex flex-col justify-end pt-28 sm:pt-36 lg:pt-40 xl:pt-[160px] pb-20 sm:pb-20 lg:pb-24">
        <div className="max-w-[720px]">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white text-balance leading-[1.12] sm:leading-[1.08] mb-3 sm:mb-5 tracking-tight"
          >
            {language === "ur" ? "معیار کی تعلیم، وابستگی کے ساتھ" : HERO.headline}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-sm sm:text-base lg:text-lg text-white/90 mb-5 sm:mb-8 max-w-[520px] font-light leading-relaxed drop-shadow-sm"
          >
            {language === "ur"
              ? "جامعہ سوات 2010 میں قائم ہوئی اور سوات اور وسیع علاقے کو تعلیم، تحقیق اور کمیونٹی کی خدمات فراہم کرتی ہے۔"
              : HERO.subtext}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-sm sm:max-w-none pr-16 sm:pr-0"
          >
            <Button href="/about" variant="secondary" size="lg" className="w-full sm:w-auto text-center justify-center">
              {language === "ur" ? "مزید پڑھیں" : "Learn More"}
            </Button>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-none text-base sm:text-lg font-medium border border-white text-white hover:bg-white hover:text-charcoal transition-colors text-center backdrop-blur-xs bg-black/10 sm:bg-transparent"
            >
              {language === "ur" ? "تعلیمی پروگرام" : "Explore Programs"}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Dots and Mobile Prev/Next Indicators */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="sm:hidden text-white/70 hover:text-white p-0.5"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1.5 sm:gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 sm:w-7 bg-white" : "w-1.5 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next slide"
          className="sm:hidden text-white/70 hover:text-white p-0.5"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-1">
        {HERO.social.map((social) => {
          const Icon = SOCIAL_ICONS[social.icon];
          return (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/15 transition-colors text-white"
            >
              <Icon className="w-4 h-4" />
            </Link>
          );
        })}
        <div className="w-px h-10 bg-white/30 my-3" />
        <Link
          href="#main-holder"
          className="flex flex-col items-center gap-1 text-[10px] tracking-widest text-white/70 hover:text-white transition-colors"
        >
          {HERO.scroll} <ChevronDown className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
};
