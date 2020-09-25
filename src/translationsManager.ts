const node = document.body;


export function getTranslations(): {} {
  return window.translations;
}

export function initTranslationsChangeEvent() {
  if (window.translationChangeEvent == null) {
    window.translationChangeEvent = new Event("translationsChange");
  }
}

export function listenToTranslationChange(callback: any) {
  if (node == null) {
    throw new Error("No root id to attach the event")
  }
  // Returns the translations
  return node.addEventListener("translationChange", () => {
    callback(window.translations);
  });
}

export function registerTranslations(newTranslations: any) {
  if (node == null) {
    throw new Error("No root id to attach the event")
  }
  window.translations = {...window.translations, ...newTranslations};
  node.dispatchEvent(window.translationChangeEvent);
}
