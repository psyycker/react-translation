import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getTranslations, setEventListener } from '../translation-manager';
import { TranslationObject } from '../types';

const TranslationsContext = createContext<TranslationObject>({});

type Props = {
  children: any
}

const TranslationsProvider = ({ children }: Props) => {
  const [translations, setTranslations] = useState<TranslationObject>(getTranslations());

  useEffect(() => {
    setEventListener(setTranslations);
  }, []);

  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  );
};

export const useTranslations = (): TranslationObject => useContext(TranslationsContext);

export default TranslationsProvider;
