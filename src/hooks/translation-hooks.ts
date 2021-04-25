import {useContext, useEffect, useMemo, useState} from "react";
import {getLocale, addEventListener} from "../localeManager";
import {addEventListener as addEventListenerTranslations, getTranslations} from "../translationsManager";
import {GetTranslationArgs, GetTranslationType, TranslationObject} from "../Types";
import {applyParametersToString, getTranslationWithKey} from "../utils/translation-utils";
import {NamespaceContext} from "../Namespace";

export function useTranslation() {
  const [locale, setLocale] = useState<string>(getLocale());
  const [translations, setTranslations] = useState<TranslationObject>(getTranslations())
  const { namespaces } = useContext(NamespaceContext);



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
    if (locale == null || translations == null) {
      return null;
    }
    const language = translations[locale];
    //TODO Take this function out
    return function _getTranslation({translationKey, defaultValue, parameters}: GetTranslationArgs) {
      let result;
        for (let namespace of namespaces) {
          result = getTranslationWithKey(language, namespace, translationKey);
          if (result) {
            break;
          }
        }
        if (!result) {
          result = getTranslationWithKey(language, "common", translationKey)
        }
      if (result) {
        if (parameters) {
          result = applyParametersToString(result, parameters);
        }
        return result;
      }
      return defaultValue
    }
  }, [locale, translations, namespaces])

  return {locale, getTranslation: (getTranslation? getTranslation :
      /* istanbul ignore next */
      ({defaultValue}: {defaultValue: string}) => defaultValue)};
}
