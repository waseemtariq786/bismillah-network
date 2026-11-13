"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export const languages = [
  ["en", "English"],
  ["ur", "اردو"],
] as const;

export type Language = (typeof languages)[number][0];

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    projects: "Projects",
    network: "Our Network",
    join: "Join Us",
    rules: "Rules",
    contact: "Contact",
    portal: "Member Portal",
  },
  ur: {
    home: "صفحہ اول",
    about: "ہمارے بارے میں",
    services: "خدمات",
    portfolio: "پورٹ فولیو",
    projects: "منصوبے",
    network: "ہمارا نیٹ ورک",
    join: "شامل ہوں",
    rules: "قواعد",
    contact: "رابطہ",
    portal: "ممبر پورٹل",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);
const LANGUAGE_EVENT = "bn-language-change";

function subscribeLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANGUAGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANGUAGE_EVENT, callback);
  };
}

function getLanguageSnapshot(): Language {
  const saved = localStorage.getItem("bn-language");
  return languages.some(([code]) => code === saved) ? saved as Language : "en";
}

function getServerLanguageSnapshot(): Language {
  return "en";
}


export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribeLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot
  );

  useEffect(() => {
    const rtl = language === "ur";
    document.documentElement.lang = language;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.documentElement.dataset.language = language;
  }, [language]);

  function setLanguage(next: Language) {
    localStorage.setItem("bn-language", next);
    window.dispatchEvent(new Event(LANGUAGE_EVENT));
  }

  function t(key: string) {
    return translations[language][key] || translations.en[key] || key;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
