import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, I18nContextType } from '../types/i18n.types';
import { en } from './en';
import { my } from './my';

const LanguageContext = createContext<I18nContextType | undefined>(undefined);

const dictionaries = { en, my };

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('codequest_lang');
      return (saved === 'en' || saved === 'my') ? saved : 'my';
    } catch {
      return 'my';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('codequest_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'my' ? 'en' : 'my'));
  };

  const t = (key: string): string => {
    const dict = dictionaries[lang] || dictionaries.en;
    return (dict as Record<string, string>)[key] || (dictionaries.en as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, setLanguage: setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): I18nContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
