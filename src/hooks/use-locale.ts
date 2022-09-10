import { useLocale as useLocaleCtx, useSetLocale } from '../contexts/locale-context';

const useLocale = () => {
  const locale = useLocaleCtx();
  const setLocale = useSetLocale();

  return [locale, setLocale];
};

export default useLocale;
