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
    const dict = (dictionaries[lang] || dictionaries.en) as Record<string, string>;
    const enDict = dictionaries.en as Record<string, string>;

    if (dict[key]) return dict[key];
    if (enDict[key]) return enDict[key];

    const aliases: Record<string, string> = {
      kidSafePill: 'header.safety',
      navHome: 'nav.home',
      navMaze: 'nav.coding',
      navQuiz: 'nav.quiz',
      navAI: 'nav.ai',
      navRewards: 'nav.rewards',
      navPath: 'nav.path',
      navBuilder: 'nav.builder',
      navTutor: 'nav.tutor',
      navParent: 'nav.parent',
      safeLearningTitle: 'nav.safe_tip_title',
      safeLearningDesc: 'nav.safe_tip_desc'
    };

    const mapped = aliases[key];
    if (mapped) {
      return dict[mapped] || enDict[mapped] || key;
    }

    return key;
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
