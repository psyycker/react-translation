import {merge} from "lodash";
import {generateUUID} from "./utils/translation-utils";


type TranslationObject = { [key: string]: string | TranslationObject };

let translations: TranslationObject;

const events: {[key: string]: (newLocale: {}) => void} = {};

export function getTranslations(): {} {
  return translations;
}

export function addEventListener(callback: (value: {}) => void) {
  let id: string;
  do {
    id = generateUUID();
  } while (events[id] != null)
  events[id] = (newTranslations: {}) => {
    callback(newTranslations)
  };
  return () => {
    delete events[id];
  }
}

async function dispatchEvent() {
  Object.keys(events).forEach(key => events[key](translations));
}


export function registerTranslations(newTranslations: TranslationObject, namespace: "common" | string = "common") {
  translations = Object.keys(newTranslations).reduce((acc: TranslationObject, translationKey: string): TranslationObject => {
    // Coming from french
    const newTranslationObject = newTranslations[translationKey] as TranslationObject;
    if (acc[translationKey] == null) {
      acc[translationKey] = {
        [namespace]: newTranslationObject
      }
    } else if ((acc[translationKey] as TranslationObject)[namespace] == null) {
      (acc[translationKey] as TranslationObject)[namespace] = newTranslationObject
    } else {
      (acc[translationKey] as TranslationObject)[namespace] = merge((acc[translationKey] as TranslationObject)[namespace] as TranslationObject, newTranslationObject)
    }
    return acc;

  }, translations || {});
  dispatchEvent();
}


export function reset() {
  translations = {};
}
