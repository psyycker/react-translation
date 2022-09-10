let locale = '';

let event: (newLocale: string) => void;

export function getLocale(): string {
  return locale;
}

export function setEventListener(callback: (value: string) => void) {
  event = callback;
}

function dispatchEvent() {
  if (!event) return;
  event(locale);
}

export function changeLocale(newLocale: string) {
  locale = newLocale;
  dispatchEvent();
}

export function reset() {
  locale = '';
}
