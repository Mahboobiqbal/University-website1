"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  Globe,
  UserRound,
  ChevronDown,
  Eye,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION } from "@/data/navigation";
import { IMAGES } from "@/data/images";
import { useLanguage } from "@/components/providers/language-provider";

const ACCENT = "#74201e";
const ICON_SIZE = 17;
const ICON_STROKE = 1.75;

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

interface MegaContent {
  columns: { heading: string; links: NavLink[] }[];
  resources?: { heading: string; links: NavLink[] };
  promo: { image: string; title: string; text: string; button: string; href: string };
}

type NavItem = { label: string; href: string; mega?: MegaContent };

function UniversityWordmark({ drawer = false, dark = false }: { drawer?: boolean; dark?: boolean }) {
  return (
    <span
      className={cn(
        "flex shrink-0 flex-col justify-center text-right",
        drawer ? "w-[125px]" : "w-[118px] sm:w-[128px] xl:w-[140px]",
        drawer || dark ? "text-charcoal" : "text-white"
      )}
    >
      <span
        lang="ur"
        dir="rtl"
        className="block whitespace-nowrap text-center text-[15px] font-bold leading-[1.2] sm:text-[16px] xl:text-[17px]"
        style={{ fontFamily: '"Noto Nastaliq Urdu", "Nirmala UI", serif' }}
      >
        یونیورسٹی آف سوات
      </span>
      <span
        dir="ltr"
        className={cn(
          "mt-1 block text-center font-bold uppercase leading-[1.05] tracking-[0.11em]",
          drawer ? "text-[10px]" : "text-[10px] sm:text-[11px] xl:text-[13px]"
        )}
      >
        UNIVERSITY
        <br />
        OF SWAT
      </span>
    </span>
  );
}

const NAV_ORDER = [
  { href: "/about", label: "About" },
  { href: "/student-life", label: "Life at University" },
  { href: "/academics", label: "Academics" },
  { href: "/research", label: "Research" },
  { href: "/administration", label: "Administration" },
] as const;

function isNavActive(item: NavItem, pathname?: string | null): boolean {
  if (!pathname) return false;
  const href = item.href;
  if (pathname === href) return true;
  if (href === "/about" && (pathname.startsWith("/vice-chancellor") || pathname === "/about")) return true;
  if (href === "/academics" && (pathname.startsWith("/department") || pathname.startsWith("/faculties") || pathname.startsWith("/programs") || pathname.startsWith("/program"))) return true;
  if (href === "/research" && pathname.startsWith("/research")) return true;
  if (href === "/administration" && pathname.startsWith("/administration")) return true;
  if (href === "/student-life" && pathname.startsWith("/campuses")) return true;
  return false;
}

function useSafeRouter() {
  try {
    return useRouter();
  } catch {
    return null;
  }
}

export const Header = () => {
  const rawPathname = usePathname();
  const pathname = rawPathname ?? "";
  const router = useSafeRouter();
  const { language, setLanguage } = useLanguage();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(143);
  const headerRef = useRef<HTMLElement>(null);

  const restoreSearchFocus = React.useCallback(() => {
    const stored = searchTriggerRef.current;
    const trigger =
      stored && document.contains(stored)
        ? stored
        : document.querySelector<HTMLButtonElement>('button[aria-label="Open search"]');
    trigger?.focus();
  }, []);

  const closeSearch = React.useCallback(() => {
    setSearchOpen(false);
    restoreSearchFocus();
  }, [restoreSearchFocus]);

  const openSearch = (trigger?: HTMLButtonElement) => {
    if (trigger) searchTriggerRef.current = trigger;
    setSearchQuery("");
    setSearchOpen(true);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim();
    setSearchOpen(false);
    const target = query ? `/search?q=${encodeURIComponent(query)}` : "/search";
    if (router) {
      router.push(target);
    } else if (typeof window !== "undefined") {
      window.location.assign(target);
    }
    restoreSearchFocus();
  };

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 50);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.getBoundingClientRect().height);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-nav-root]")) {
        setOpenMenu(null);
        setLangOpen(false);
        setUserOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setLangOpen(false);
        setUserOpen(false);
        if (searchOpen) closeSearch();
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [closeSearch, searchOpen]);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
    setLangOpen(false);
    setUserOpen(false);
  }

  const atHeroTop = isHome && !scrolled && !mobileOpen && !highContrast;

  const urduNavLabels: Record<string, string> = {
    About: "تعارف",
    "Life at University": "جامعہ میں زندگی",
    Academics: "تعلیم",
    Research: "تحقیق",
    Administration: "انتظامیہ",
  };
  const urduTopLabels: Record<string, string> = {
    Newsroom: "نیوز روم",
    Events: "تقریبات",
    Careers: "وظائف",
    "Contact Us": "رابطہ",
  };
  const navItems = NAV_ORDER.flatMap(({ href, label }) => {
    const item = NAVIGATION.main.find((entry) => entry.href === href);
    if (!item) return [];
    return [
      {
        ...item,
        label: language === "ur" ? urduNavLabels[label] ?? label : label,
      },
    ];
  });

  return (
    <>
      <header
        ref={headerRef}
        data-nav-root
        className={cn(
          "header-main fixed inset-x-0 top-0 z-50 transition-shadow duration-500 ease-out",
          atHeroTop ? "text-white" : "text-charcoal",
          !atHeroTop && !highContrast && "shadow-lg"
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-b from-[#17231d]/80 via-[#17231d]/35 to-transparent transition-opacity duration-500 ease-out",
            atHeroTop ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 bg-white transition-opacity duration-500 ease-out",
            atHeroTop ? "opacity-0" : "opacity-100"
          )}
        />
        <div className="relative z-10 flex items-stretch xl:h-[143px]">
          <div
            className={cn(
              "flex shrink-0 items-center border-r pl-4 pr-4 transition-colors duration-500 sm:pl-6 sm:pr-6 xl:w-[285px] xl:justify-center xl:px-6",
              atHeroTop ? "border-white/20" : "border-gray-200"
            )}
          >
            <Link
              href="/"
              className="flex items-center gap-3 py-3"
              aria-label="University of Swat home"
            >
              <span className="relative block h-11 w-11 shrink-0 sm:h-12 sm:w-12 xl:h-[76px] xl:w-[76px]">
                <Image
                  src={IMAGES.logo.white}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 639px) 44px, (max-width: 1279px) 48px, 76px"
                  className={cn(
                    "object-contain transition-opacity duration-500 ease-out",
                    atHeroTop ? "opacity-100" : "opacity-0"
                  )}
                  priority
                />
                <Image
                  src={IMAGES.logo.main}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 639px) 44px, (max-width: 1279px) 48px, 76px"
                  className={cn(
                    "object-contain transition-opacity duration-500 ease-out",
                    atHeroTop ? "opacity-0" : "opacity-100"
                  )}
                  priority
                />
              </span>
              <UniversityWordmark dark={!atHeroTop} />
            </Link>
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <div
              className={cn(
                "hidden h-[58px] shrink-0 items-center justify-end gap-6 border-b px-6 transition-colors duration-500 xl:flex 2xl:px-8",
                atHeroTop ? "border-white/20" : "border-gray-200"
              )}
            >
              {NAVIGATION.topBar.links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-[17px] font-normal transition-colors duration-200 hover:text-[#74201e]",
                    atHeroTop ? "text-white/90" : "text-charcoal"
                  )}
                >
                  {language === "ur" ? urduTopLabels[item.label] || item.label : item.label}
                </Link>
              ))}
              <button
                onClick={() => setHighContrast((v) => !v)}
                aria-label="Toggle high contrast mode"
                aria-pressed={highContrast}
                className={cn(
                "inline-flex items-center justify-center rounded-md transition-colors duration-200 hover:text-[#d79a97]",
                highContrast ? "text-[#74201e]" : atHeroTop ? "text-white/90" : "text-charcoal"
                )}
              >
                <Eye size={19} strokeWidth={ICON_STROKE} />
              </button>
            </div>

            <div className="header-bottom flex min-h-[72px] items-center justify-end gap-3 px-4 py-3 sm:px-6 xl:h-[85px] xl:min-h-0 xl:justify-between xl:px-6 2xl:px-8">
              <nav className="hidden items-center gap-4 xl:flex 2xl:gap-5">
                {navItems.map((item) => {
                  const active = isNavActive(item, pathname);
                  const isOpen = openMenu === item.label;
                  return (
                    <div key={item.label} data-nav-root className="nav-item relative">
                      <button
                        type="button"
                        onClick={() => setOpenMenu(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        aria-haspopup={item.mega ? "true" : undefined}
                        className={cn(
                          "nav-link inline-flex items-center gap-1.5 whitespace-nowrap text-[18px] font-normal transition-colors duration-200 hover:text-[#d79a97] 2xl:text-[19px]",
                          active || isOpen
                            ? "text-[#d79a97]"
                            : atHeroTop ? "text-white/90" : "text-charcoal"
                        )}
                        style={active || isOpen ? { color: "#d79a97" } : undefined}
                      >
                        {item.label}
                        {item.mega && (
                          <ChevronDown
                            size={15}
                            strokeWidth={ICON_STROKE}
                            className={cn(
                              "transition-colors transition-transform duration-200",
                              isOpen && "rotate-180"
                            )}
                            style={active || isOpen ? { color: "#d79a97" } : undefined}
                          />
                        )}
                      </button>
                    </div>
                  );
                })}
              </nav>

              <div className="ml-auto flex items-center gap-2 xl:ml-0 xl:gap-2">
                <div
                  data-nav-root
                  className={cn(
                    "relative hidden border-l pl-4 transition-colors duration-500 xl:block",
                    atHeroTop ? "border-white/20" : "border-gray-200"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setLangOpen((v) => !v);
                      setUserOpen(false);
                      setOpenMenu(null);
                    }}
                    aria-expanded={langOpen}
                    aria-label="Select language"
                    className={cn(
                      "inline-flex items-center gap-2 text-[15px] font-normal transition-colors duration-200 hover:text-[#74201e]",
                      atHeroTop ? "text-white/90" : "text-charcoal"
                    )}
                  >
                    <Globe size={19} strokeWidth={ICON_STROKE} />
                    <span>{language === "en" ? "English" : "\u0627\u0631\u062f\u0648"}</span>
                    <ChevronDown size={13} strokeWidth={ICON_STROKE} className={cn("transition-transform", langOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {langOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 top-full mt-3 w-40 rounded-lg border border-gray-100 bg-white p-2 text-charcoal shadow-xl"
                      >
                        {[
                          { code: "en", label: "English" },
                          { code: "ur", label: "\u0627\u0631\u062f\u0648" },
                        ].map((option) => (
                          <button
                            key={option.code}
                            type="button"
                            onClick={() => {
                              setLanguage(option.code as "en" | "ur");
                              setLangOpen(false);
                            }}
                            className={cn(
                              "w-full rounded-md px-3 py-2 text-left text-[13px] transition-colors",
                              language === option.code
                                ? "font-medium"
                                : "hover:bg-gray-50 hover:text-[#74201e]"
                            )}
                            style={language === option.code ? { color: ACCENT, backgroundColor: `${ACCENT}14` } : undefined}
                          >
                            {option.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  onClick={(event) => openSearch(event.currentTarget)}
                  aria-label="Open search"
                  aria-expanded={searchOpen}
                  className={cn(
                    "hidden h-12 items-center justify-center border-l px-4 transition-colors duration-200 hover:text-[#74201e] xl:inline-flex",
                    atHeroTop ? "border-white/20 text-white/90" : "border-gray-200 text-charcoal"
                  )}
                >
                  <Search size={22} strokeWidth={ICON_STROKE} />
                </button>

                <Link
                  href={NAVIGATION.topBar.actions[0].href}
                  className="hidden h-[50px] items-center justify-center gap-2 rounded-md border-l border-white/20 bg-white px-4 text-[15px] font-medium text-[#17231d] transition-colors duration-200 hover:bg-[#74201e] hover:text-white md:inline-flex xl:w-[150px]"
                >
                  <GraduationCap size={19} strokeWidth={ICON_STROKE} />
                  Apply Now
                </Link>

                <div
                  data-nav-root
                  className={cn(
                    "relative hidden border-l pl-3 transition-colors duration-500 xl:block",
                    atHeroTop ? "border-white/20" : "border-gray-200"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setUserOpen((v) => !v);
                      setLangOpen(false);
                      setOpenMenu(null);
                    }}
                    aria-label="Account menu"
                    aria-expanded={userOpen}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-md text-white transition-colors duration-200 hover:bg-[#5d1a18]"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <UserRound size={21} strokeWidth={ICON_STROKE} />
                  </button>
                  <AnimatePresence>
                    {userOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 top-full mt-3 w-48 rounded-lg border border-gray-100 bg-white p-2 text-charcoal shadow-xl"
                      >
                        {NAVIGATION.topBar.actions.slice(1).map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-md px-3 py-2 text-[13px] text-gray-700 transition-colors hover:bg-gray-50"
                            onMouseEnter={(e) => { e.currentTarget.style.color = ACCENT; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  onClick={(event) => openSearch(event.currentTarget)}
                  aria-label="Open search"
                  aria-expanded={searchOpen}
                  className={cn(
                    "inline-flex items-center justify-center rounded-md p-2 transition-colors hover:text-[#74201e] xl:hidden",
                    atHeroTop ? "text-white" : "text-charcoal"
                  )}
                >
                  <Search size={21} strokeWidth={ICON_STROKE} />
                </button>
                <button
                  type="button"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open navigation menu"
                  className={cn(
                    "inline-flex items-center justify-center rounded-md p-2 transition-colors hover:text-[#74201e] xl:hidden",
                    atHeroTop ? "text-white" : "text-charcoal"
                  )}
                >
                  <Menu size={21} strokeWidth={ICON_STROKE} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {openMenu && (
          <MegaPanel
            key={openMenu}
            content={navItems.find((item) => item.label === openMenu)?.mega}
            top={headerHeight}
            pathname={pathname}
            onNavigate={() => setOpenMenu(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[#17231d]/95 backdrop-blur-sm flex flex-col"
          >
            <div className="flex items-center justify-between px-6 lg:px-10 py-5 border-b border-white/15">
              <span className="text-xs uppercase tracking-widest text-white/60">Search</span>
              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                className="inline-flex items-center justify-center rounded-md text-white transition-colors hover:text-[#d79a97]"
              >
                <X size={24} strokeWidth={ICON_STROKE} />
              </button>
            </div>
            <form
              onSubmit={handleSearchSubmit}
              action="/search"
              method="GET"
              role="search"
              className="flex-1 px-6 lg:px-10 pt-10"
            >
              <label htmlFor="header-search-input" className="sr-only">
                Search keywords
              </label>
              <div className="flex max-w-3xl items-center gap-4 border-b border-white/30 pb-4 focus-within:border-white">
                <Search aria-hidden="true" size={28} strokeWidth={ICON_STROKE} className="shrink-0 text-white/60" />
                <input
                  id="header-search-input"
                  name="q"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="What are you looking for?"
                  autoComplete="off"
                  autoFocus
                  className="min-w-0 flex-1 bg-transparent text-2xl font-light text-white placeholder-white/40 outline-none lg:text-4xl"
                />
                <button
                  type="submit"
                  aria-label="Submit search"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ArrowRight size={26} strokeWidth={ICON_STROKE} />
                </button>
              </div>
              <p className="mt-4 max-w-3xl text-sm text-white/50">
                Press Enter to search departments, programs, news, and pages.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-white"
          >
            <div className="absolute inset-y-0 right-0 w-full sm:w-[85%] bg-white shadow-2xl flex flex-col">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <Image src={IMAGES.logo.main} alt="Logo" width={48} height={48} className="h-11 w-auto" />
                  <UniversityWordmark drawer />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center rounded-md text-gray-500 hover:text-charcoal"
                >
                  <X size={22} strokeWidth={ICON_STROKE} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const expanded = mobileExpanded === item.label;
                    const active = isNavActive(item, pathname);
                    const links = [
                      ...(item.mega?.columns.flatMap((col) => col.links) || []),
                      ...(item.mega?.resources?.links || []),
                    ];
                    return (
                      <div key={item.label} className="border-b border-gray-100 pb-2">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-3 text-lg font-light transition-colors"
                            style={active ? { color: ACCENT } : undefined}
                          >
                            {item.label}
                          </Link>
                          {links.length > 0 && (
                            <button
                              type="button"
                              onClick={() => setMobileExpanded(expanded ? null : item.label)}
                              aria-label={`Toggle ${item.label} submenu`}
                              aria-expanded={expanded}
                              className="p-2 text-gray-400 transition-colors hover:text-[#74201e]"
                            >
                              <ChevronDown
                                size={18}
                                strokeWidth={ICON_STROKE}
                                className={cn("transition-transform", expanded && "rotate-180")}
                              />
                            </button>
                          )}
                        </div>
                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <div className="nav-scroll max-h-[45vh] space-y-1 overflow-y-auto border-l border-gray-200 pb-3 pl-3 pr-2">
                                {links.map((link) => (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-1.5 text-[13px] text-gray-600 transition-colors hover:text-[#74201e]"
                                    style={pathname === link.href ? { color: ACCENT } : undefined}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </nav>

                <div className="mt-8 pt-4 border-t border-gray-100 space-y-1">
                  {NAVIGATION.topBar.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-gray-600 transition-colors hover:text-[#74201e]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Account</p>
                  {NAVIGATION.topBar.actions.slice(1).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 text-sm text-gray-600 transition-colors hover:text-[#74201e]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setLanguage(language === "en" ? "ur" : "en")}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm text-charcoal"
                  >
                    <Globe size={ICON_SIZE} strokeWidth={ICON_STROKE} />
                    {language === "en" ? "English" : "\u0627\u0631\u062f\u0648"}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setMobileOpen(false); openSearch(); }}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm text-charcoal"
                  >
                    <Search size={ICON_SIZE} strokeWidth={ICON_STROKE} />
                    Search
                  </button>
                  <Link
                    href={NAVIGATION.topBar.actions[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5d1a18]"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <GraduationCap size={ICON_SIZE} strokeWidth={ICON_STROKE} />
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MegaPanel = ({
  content,
  top,
  pathname = "",
  onNavigate,
}: {
  content?: MegaContent;
  top: number;
  pathname?: string | null;
  onNavigate?: () => void;
}) => {
  if (!content) return null;
  return (
    <motion.div
      data-nav-root
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      style={{ top: top + 2 }}
      className="fixed left-1/2 -translate-x-1/2 z-40 w-[min(94vw,1280px)]"
    >
      <div
        className="nav-scroll overflow-y-auto rounded-lg border border-gray-100 bg-white shadow-2xl"
        style={{ maxHeight: `calc(100vh - ${top + 20}px)` }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {content.columns.map((col, i) => (
            <div key={i} className="p-5 lg:p-6 border-r border-gray-100">
              <h3
                className="text-[13px] font-semibold uppercase tracking-[0.08em] mb-3 pb-2 border-b border-gray-100"
                style={{ color: ACCENT }}
              >
                {col.heading}
              </h3>
              <ul className="space-y-1.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="block py-0.5 text-[15px] leading-[1.45] text-gray-600 transition-colors"
                      style={pathname === link.href ? { color: ACCENT, fontWeight: 500 } : undefined}
                      onMouseEnter={(e) => { e.currentTarget.style.color = ACCENT; }}
                      onMouseLeave={(e) => {
                        if (pathname !== link.href) e.currentTarget.style.color = "";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {content.resources && (
            <div className="p-5 lg:p-6 border-r border-gray-100">
              <h3
                className="text-[13px] font-semibold uppercase tracking-[0.08em] mb-3 pb-2 border-b border-gray-100"
                style={{ color: ACCENT }}
              >
                {content.resources.heading}
              </h3>
              <ul className="space-y-1.5">
                {content.resources.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="block py-0.5 text-[15px] leading-[1.45] text-gray-600 transition-colors"
                      style={pathname === link.href ? { color: ACCENT, fontWeight: 500 } : undefined}
                      onMouseEnter={(e) => { e.currentTarget.style.color = ACCENT; }}
                      onMouseLeave={(e) => {
                        if (pathname !== link.href) e.currentTarget.style.color = "";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="p-5 lg:p-6 bg-gray-50 flex flex-col justify-center">
            <Image
              src={content.promo.image}
              alt={content.promo.title}
              width={400}
              height={200}
              className="w-full h-32 object-cover rounded-md mb-3"
              loading="lazy"
            />
            <h3 className="text-[16px] font-medium text-charcoal mb-1.5">{content.promo.title}</h3>
            <p className="text-[14px] text-gray-500 mb-3 leading-relaxed">{content.promo.text}</p>
            <Link
              href={content.promo.href}
              onClick={onNavigate}
              className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
              style={{ color: ACCENT }}
            >
              {content.promo.button} <ArrowRight size={13} strokeWidth={ICON_STROKE} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
