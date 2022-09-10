import merge from 'lodash/merge';

type TranslationObject = { [key: string]: string | TranslationObject };

let translations: TranslationObject;

let event: (newLocale: {}) => void;

export function getTranslations(): {} {
  return translations;
}

export function setEventListener(callback: (value: {}) => void) {
  event = callback;
}

function dispatchEvent() {
  if (!event) return;
  event(translations);
}

export function registerTranslations(newTranslations: TranslationObject, namespace: 'common' | string = 'common') {
  translations = Object.keys(newTranslations)
    .reduce((acc: TranslationObject, translationKey: string): TranslationObject => {
    // Coming from french
      const newTranslationObject = newTranslations[translationKey] as TranslationObject;
      if (acc[translationKey] == null) {
        acc[translationKey] = {
          [namespace]: newTranslationObject,
        };
      } else if ((acc[translationKey] as TranslationObject)[namespace] == null) {
        (acc[translationKey] as TranslationObject)[namespace] = newTranslationObject;
      } else {
        (acc[translationKey] as TranslationObject)[namespace] = merge((acc[translationKey] as
          TranslationObject)[namespace] as
          TranslationObject, newTranslationObject);
      }
      return acc;
    }, translations || {});
  dispatchEvent();
}

export function reset() {
  translations = {};
}
