export type Language = 'my' | 'en';

export interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  setLanguage: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}
