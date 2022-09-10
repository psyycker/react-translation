import { useMemo } from 'react';
import { GetTranslationArgs, GetTranslationType } from '../types';
import { applyParametersToString, getTranslationWithKey } from '../utils/translation-utils';
import { useNamespaces } from '../namespaces/namespace';
import { useTranslations } from '../contexts/translations-context';
import { useLocale } from '../contexts/locale-context';

export default function useTranslation() {
  const locale = useLocale();
  const translations = useTranslations();
  const namespaces = useNamespaces();

  const getTranslation: GetTranslationType = useMemo(() => {
    if (locale == null || translations == null) {
      return null;
    }
    const language = translations[locale];
    // TODO Take this function out
    return function _getTranslation({
      translationKey,
      defaultValue,
      parameters,
    }: GetTranslationArgs) {
      let result;
      for (const namespace of namespaces) {
        result = getTranslationWithKey(language, namespace, translationKey);
        if (result) {
          break;
        }
      }
      if (!result) {
        result = getTranslationWithKey(language, 'common', translationKey);
      }
      if (result) {
        if (parameters) {
          result = applyParametersToString(result, parameters);
        }
        return result;
      }
      return defaultValue;
    };
  }, [locale, translations, namespaces]);

  return {
    locale,
    getTranslation: (getTranslation
      || (({ defaultValue }: {defaultValue: string}) => defaultValue)),
  };
}
