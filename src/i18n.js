import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../public/locales/en/translation.json";
import bn from "../public/locales/bn/translation.json";

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Initializes i18next
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;
