import { useLocale as useLocaleCtx, useSetLocale } from '../contexts/locale-context';

type ReturnValue = [string, (newLocale: string) => void]

const useLocale = (): ReturnValue => {
  const locale = useLocaleCtx();
  const setLocale = useSetLocale();

  return [locale, setLocale];
};

export default useLocale;
