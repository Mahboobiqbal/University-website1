"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { FOOTER } from "@/data/home";
import {
  FacebookIcon,
  LinkedinIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";
import { useLanguage } from "@/components/providers/language-provider";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  tiktok: TiktokIcon,
  youtube: YoutubeIcon,
};

export const Footer = () => {
  const { language } = useLanguage();
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <footer className="bg-[#233623] text-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 py-10 lg:py-12 border-b border-white/15 items-center">
            <div className="lg:col-span-3">
              <Link href="/" className="flex items-center gap-3">
                <Image src={FOOTER.logo} alt="University of Swat Logo" width={46} height={46} className="h-12 w-auto" />
                <span className="font-light text-base lg:text-lg tracking-tight">
                  {language === "ur" ? "یونیورسٹی آف سوات" : "UNIVERSITY OF SWAT"}
                </span>
              </Link>
            </div>

            <div className="lg:col-span-3">
              <h2 className="text-sm font-light mb-4 text-white/90">
                {language === "ur" ? "ہمیں فالو کریں" : "Follow us"}
              </h2>
              <div className="flex items-center gap-3">
                {FOOTER.social.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon] || FacebookIcon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#233623] transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-6">
              <h2 className="text-sm font-light mb-4 text-white/90">
                {language === "ur"
                  ? "جامعہ سوات نیوز لیٹر کی رکنیت"
                  : FOOTER.newsletterTitle}
              </h2>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={language === "ur" ? "آپ کا ای میل" : "Your Email Address"}
                  aria-label={language === "ur" ? "آپ کا ای میل" : "Your Email Address"}
                  className="flex-1 bg-transparent border border-white/40 text-white placeholder-white/50 rounded-md px-4 py-3 focus:outline-none focus:border-white text-sm"
                />
                <button
                  type="submit"
                  className="bg-white text-[#233623] px-8 py-3 rounded-md font-medium text-sm hover:bg-white/85 transition-colors"
                >
                  {language === "ur" ? "رکنیت" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-10 lg:py-12 border-b border-white/15">
            {FOOTER.columns.map((col) => (
              <div key={col.heading}>
                <h2 className="text-lg font-light mb-5 text-white">{col.heading}</h2>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-white/70 hover:text-white transition-colors leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-6 py-6">
            <p className="text-sm font-light text-white/70">{FOOTER.copyright}</p>
            <nav className="flex flex-wrap items-center gap-6">
              {FOOTER.legal.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Top of Site"
        className={cn(
          "fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#233623] text-white px-4 py-3 rounded-full shadow-lg border border-white/20 text-xs font-medium transition-all duration-300 hover:bg-brand",
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp className="w-4 h-4" />
        Top of Site
      </button>
    </>
  );
};

export default Footer;
