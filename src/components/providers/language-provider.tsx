"use client";

import * as React from "react";

export type Language = "en" | "ur";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const STORAGE_KEY = "uos-language";
const LANGUAGE_EVENT = "uos-language-change";
let memoryLanguage: Language = "en";

function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(LANGUAGE_EVENT, listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(LANGUAGE_EVENT, listener);
  };
}

function getSnapshot(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "ur" || saved === "en" ? saved : memoryLanguage;
  } catch {
    return memoryLanguage;
  }
}

function getServerSnapshot(): Language {
  return "en";
}

function persistLanguage(next: Language) {
  memoryLanguage = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    return;
  }
  window.dispatchEvent(new Event(LANGUAGE_EVENT));
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  React.useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
  }, [language]);

  const setLanguage = React.useCallback((next: Language) => {
    persistLanguage(next);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
