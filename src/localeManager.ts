const node = document.body;


export function getLocale(): string {
  return window.locale;
}

export function initLocalChangeEvent() {
  if (window.localChangeEvent == null) {
    window.localChangeEvent = new Event("localeChange");
  }
}

export function listenToLocaleChange(callback: any) {
  if (node == null) {
    throw new Error("No root id to attach the event")
  }
  // Returns the locale
  return node.addEventListener("localeChange", () => {
    callback(window.locale);
  });
}

export function changeLocale(newLocale: string) {
  if (node == null) {
    throw new Error("No root id to attach the event")
  }
  window.locale = newLocale;
  node.dispatchEvent(window.localChangeEvent);
}
