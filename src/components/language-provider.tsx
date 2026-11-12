"use client";

import { createContext, useContext, useEffect, useState } from "react";

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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("bn-language") as Language | null;
    if (saved && languages.some(([code]) => code === saved)) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    const rtl = language === "ur";
    document.documentElement.lang = language;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.documentElement.dataset.language = language;
  }, [language]);

  function setLanguage(next: Language) {
    setLanguageState(next);
    localStorage.setItem("bn-language", next);
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
