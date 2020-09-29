import {useEffect, useMemo, useState} from "react";
import {getLocale, addEventListener} from "./localeManager";
import {addEventListener as addEventListenerTranslations, getTranslations} from "./translationsManager";
import {GetTranslationArgs, GetTranslationType, TranslationObject} from "./Types";
import {addToCache, applyParametersToString, getCachedValue, getTranslationWithKey} from "./utils";

export function useTranslation() {
  const [locale, setLocale] = useState<string>(getLocale());
  const [translations, setTranslations] = useState<TranslationObject>(getTranslations())

  useEffect(() => {
    return addEventListener((newLocale: string) => {
      setLocale(newLocale);
    })
  }, [])

  useEffect(() => {
    return addEventListenerTranslations((newTranslation: TranslationObject) => {
      setTranslations(newTranslation);
    })
  })

  const getTranslation: GetTranslationType = useMemo(() => {
    const language = translations[locale];
    return function _getTranslation({translationKey, defaultValue, parameters}: GetTranslationArgs) {
      let result = getCachedValue(translationKey, locale);
      if (result == null) {
        result = getTranslationWithKey(language, translationKey);
        if (result) {
          addToCache(translationKey, locale, result);
        }
      }
      if (result) {
        if (parameters) {
          result = applyParametersToString(result, parameters);
        }
        return result;
      }
      return defaultValue
    }
  }, [locale, translations])

  return {locale, getTranslation};
}
