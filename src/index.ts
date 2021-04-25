/* istanbul ignore file */
import { changeLocale } from "./localeManager";
import { reset as resetTranslationManager } from "./translationsManager"
import { reset as resetLocaleManager } from "./localeManager"

/**
 * This is hiding a warning where React native cannot be found in a React (web) env
 */
const warn = console.warn;
console.warn = (message?: any, ...optionalParams: any[]) => {
  if (typeof message === "string" && message.includes("Can't resolve 'react-native'")) {
    return;
  }
  warn(message, optionalParams);
}

export { changeLocale, getLocale } from "./localeManager"
export { useTranslation } from "./hooks/translation-hooks"
export { getTranslations, registerTranslations } from "./translationsManager"
export { default as Translation } from "./TranslationComponent"
export {default as Namespace} from "./Namespace"

export function setTranslationConfig({defaultLocale}: {defaultLocale: string}) {
  changeLocale(defaultLocale)
}

export function reset(): void {
  resetTranslationManager();
  resetLocaleManager();
}

let initialised = false;

(function init() {
  if (initialised) {
    return;
  }
  setTranslationConfig({
    defaultLocale: "en-US"
  })
})()
