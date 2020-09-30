/* istanbul ignore file */
import { changeLocale } from "./localeManager";
import { reset as resetTranslationManager } from "./translationsManager"
import { reset as resetLocaleManager } from "./localeManager"

export { changeLocale, getLocale } from "./localeManager"
export { useTranslation } from "./hooks"
export { getTranslations, registerTranslations } from "./translationsManager"
export { default as Translation } from "./TranslationComponent"

export function setTranslationConfig({defaultLocale}: {defaultLocale: string}) {
  changeLocale(defaultLocale)
}

export function reset(): void {
  resetTranslationManager();
  resetLocaleManager();
}
