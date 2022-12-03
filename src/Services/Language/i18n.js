import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationUz from './locales/uz/translationUz.json';
import translationEn from "./locales/en/translationEn.json";
import translationRu from "./locales/ru/translationRu.json";

const lang = JSON.parse(window.localStorage.getItem('language')) || 'uz';
const resources = {
    en: {
        "translation": translationEn
    }, 
    uz: {
        "translation": translationUz
    },
    ru: {
        "translation": translationRu
    }
}
i18n.use(initReactI18next)
    .init({
        resources,
        lng: lang,
        keySeparator: true,
        interpolation: {
            escapeValue: false,
        }
    });
export default i18n;