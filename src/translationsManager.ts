import {generateUUID} from "./utils";

let translations: {};

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

export function registerTranslations(newTranslations: any) {

  translations = {...translations, ...newTranslations};
  dispatchEvent();
}
