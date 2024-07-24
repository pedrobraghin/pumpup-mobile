import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "../languages/pt.json";
import en from "../languages/en.json";
import es from "../languages/es.json";

i18n.use(initReactI18next).init({
  lng: "pt",
  compatibilityJSON: "v3",
  resources: {
    en,
    pt,
    es,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
