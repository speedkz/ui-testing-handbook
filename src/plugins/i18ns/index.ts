import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = require("./locales/en/translation.json");
const vi = require("./locales/vi/translation.json");

export enum LANG {
  VI = "vi",
  EN = "en",
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      [LANG.EN]: {
        translation: en,
      },
      [LANG.VI]: {
        translation: vi,
      },
    },
    lng: LANG.EN, // if you're using a language detector, do not define the lng option
    fallbackLng: LANG.EN,

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
