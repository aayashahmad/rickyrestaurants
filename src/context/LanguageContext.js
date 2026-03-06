"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "siteLanguage";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      return saved === "ar" ? "ar" : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }

    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("language-change", { detail: { language } }));
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === "ar" ? "en" : "ar")),
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
