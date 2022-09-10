import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getLocale, setEventListener } from '../locale-manager';

const LocaleContext = createContext<string>('');

type Props = {
  children: any
}

const LocaleProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState<string>(getLocale());

  useEffect(() => {
    setEventListener(setLocale);
  }, []);

  return (
    <LocaleContext.Provider value={locale}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): string => useContext(LocaleContext);

export default LocaleProvider;
