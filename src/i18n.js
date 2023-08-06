import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en', // Idioma por defecto si no se encuentra la traducción
  supportedLngs: ['en', 'es', 'fr'], // Idiomas soportados
  debug: true, // Activa los mensajes de depuración (opcional, puedes deshabilitarlo en producción)
  interpolation: {
    escapeValue: false, // No escapar valores, por ejemplo, para usar HTML en las traducciones
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta donde se encuentran los archivos de traducción
  },
});

export default i18n;