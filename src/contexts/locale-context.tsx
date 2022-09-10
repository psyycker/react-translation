import React, {
  createContext, useCallback,
  useContext,
  useEffect, useMemo,
  useState,
} from 'react';
import { changeLocale, getLocale, setEventListener } from '../locale-manager';

type SetLocaleFct = (locale: string) => void;

const LocaleContext = createContext<{ locale: string; setLocale: SetLocaleFct }>({
  locale: '',
  setLocale: () => {},
});

type Props = {
  children: any
}

const LocaleProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState<string>(getLocale());

  useEffect(() => {
    setEventListener(setLocale);
  }, []);

  const updateLocale = useCallback((newLocale: string) => {
    changeLocale(newLocale);
  }, []);

  const contextValue = useMemo(() => ({
    locale,
    setLocale: updateLocale,
  }), [locale, updateLocale]);

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): string => {
  const { locale } = useContext(LocaleContext);

  return locale;
};

export const useSetLocale = (): SetLocaleFct => {
  const { setLocale } = useContext(LocaleContext);

  return setLocale;
};

export default LocaleProvider;
