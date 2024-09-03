import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import amharic from './locales/amharic.json';
import afanOromo from './locales/afanOromo.json';
import english from './locales/english.json';

i18n.use(initReactI18next).init({
  resources: {
    am: { translation: amharic },
    or: { translation: afanOromo },
    en: { translation: english },
  },
  lng: 'en', // default language
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
