import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type SetLocaleFct = (locale: string) => void;

const LocaleContext = createContext<{ locale: string; setLocale: SetLocaleFct }>({
  locale: '',
  setLocale: () => {},
});

type Props = {
  children: React.ReactNode,
  defaultLocale: string;
}

const LocaleProvider = ({ defaultLocale, children }: Props) => {
  // TODO Version 0.9 -> Allow detection of the system language
  const [locale, setLocale] = useState<string>(defaultLocale);

  const updateLocale = useCallback((newLocale: string) => {
    setLocale(newLocale);
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
