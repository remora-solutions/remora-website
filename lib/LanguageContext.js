"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, languages } from "./i18n";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("remora-lang");
      if (saved && translations[saved]) setLang(saved);
    } catch (e) {
      // localStorage unavailable — fall back to English silently.
    }
  }, []);

  useEffect(() => {
    const meta = languages.find((l) => l.code === lang) || languages[0];
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    try {
      window.localStorage.setItem("remora-lang", lang);
    } catch (e) {
      // Ignore — nothing to persist to.
    }
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
