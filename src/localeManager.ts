import {generateUUID} from "./utils";

let locale = "";

const events: {[key: string]: (newLocale: string) => void} = {};

export function getLocale(): string {
  return locale;
}

export function addEventListener(callback: (value: string) => void) {
  let id: string;
  do {
    id = generateUUID();
  } while (events[id] != null)
  events[id] = (newLocale: string) => {
    callback(newLocale)
  };
  return () => {
    delete events[id];
  }
}

async function dispatchEvent() {
  Object.keys(events).forEach(key => events[key](locale));
}

export function changeLocale(newLocale: string) {
  locale = newLocale;
  dispatchEvent();
}

export function reset() {
  locale = "";
}
