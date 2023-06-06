import { useCallback, useMemo } from 'react';
import { GetTranslationArgs } from '../types';
import { applyParametersToString, getTranslationWithKey } from '../utils/translation-utils';
import { useNamespaces } from '../namespaces/namespace';
import { useTranslations } from '../contexts/translations-context';
import { useLocale } from '../contexts/locale-context';

export default function useTranslation() {
  const locale = useLocale();
  const translations = useTranslations();
  const namespaces = useNamespaces();

  const getTranslation = useCallback(({
    translationKey,
    defaultValue,
    parameters,
  }: GetTranslationArgs) => {
    if (locale == null || translations == null) {
      return null;
    }
    const language = translations[locale];
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
    return defaultValue || translationKey;
  }, [locale, translations, namespaces]);

  return {
    locale,
    getTranslation,
  };
}
