import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../languages/index';

type SupportedLanguage = 'en-us' | 'pt-br';

interface LanguageContextType {
  language: SupportedLanguage;
  changeLanguage: (lang: SupportedLanguage) => void;
  isChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within I18nProvider');
  }
  return context;
};

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [language, setLanguage] = useState<SupportedLanguage>('en-us');

  // Initialize i18n
  useEffect(() => {
    const initI18n = async () => {
      try {
        await i18n.init();
        await i18n.changeLanguage(language === 'en-us' ? 'en' : 'pt'); // map to i18n codes
      } catch (error) {
        console.error('Error initializing i18n:', error);
      } finally {
        setIsReady(true);
      }
    };
    initI18n();
  }, []);

  const changeLanguage = async (lang: SupportedLanguage) => {
    if (lang !== language && !isChanging) {
      setIsChanging(true);
      try {
        await i18n.changeLanguage(lang === 'en-us' ? 'en' : 'pt');
        setLanguage(lang);
      } catch (error) {
        console.error('Error changing language:', error);
      } finally {
        setIsChanging(false);
      }
    }
  };

  const contextValue = useMemo(
    () => ({ language, changeLanguage, isChanging }),
    [language, isChanging]
  );

  if (!isReady) return null;

  return (
    <LanguageContext.Provider value={contextValue}>
      <I18nextProvider i18n={i18n}>
        <div lang={language}>{children}</div>
      </I18nextProvider>
    </LanguageContext.Provider>
  );
}
