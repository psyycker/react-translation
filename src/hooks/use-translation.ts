import {
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getLocale, addEventListener } from '../locale-manager';
import { addEventListener as addEventListenerTranslations, getTranslations } from '../translation-manager';
import { GetTranslationArgs, GetTranslationType, TranslationObject } from '../types';
import { applyParametersToString, getTranslationWithKey } from '../utils/translation-utils';
import { NamespaceContext } from '../namespaces/namespace';

export default function useTranslation() {
  const [locale, setLocale] = useState<string>(getLocale());
  const [translations, setTranslations] = useState<TranslationObject>(getTranslations());
  const { namespaces } = useContext(NamespaceContext);

  useEffect(() => addEventListener((newLocale: string) => {
    setLocale(newLocale);
  }), []);

  useEffect(() => addEventListenerTranslations((newTranslation: TranslationObject) => {
    setTranslations(newTranslation);
  }));

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
    getTranslation: (getTranslation || (({ defaultValue }: {defaultValue: string}) => defaultValue)),
  };
}
