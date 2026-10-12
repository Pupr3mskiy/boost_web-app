import { useEffect, type ReactNode } from 'react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import ru from '@/locales/ru.json';
import en from '@/locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: { escapeValue: false },
});

export function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    const unsubscribe = () => {
      document.documentElement.lang = i18n.language;
    };
    i18n.on('languageChanged', unsubscribe);
    return () => { i18n.off('languageChanged', unsubscribe); };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}