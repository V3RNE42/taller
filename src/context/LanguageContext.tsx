import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Translations = Record<string, any>;

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => any;
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState('es');
  const [translations, setTranslations] = useState<Translations>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTranslations(lang);
  }, [lang]);

  async function loadTranslations(lang: string) {
    setLoading(true);
    try {
      const res = await fetch(`/data/translations/${lang}.json`);
      const data = await res.json();
      setTranslations(data);
    } catch {
      // Fallback to ES
      if (lang !== 'es') {
        const res = await fetch('/data/translations/es.json');
        const data = await res.json();
        setTranslations(data);
      }
    } finally {
      setLoading(false);
    }
  }

  function t(key: string): any {
    const keys = key.split('.');
    let value: any = translations;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, loading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
