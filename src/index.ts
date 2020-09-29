import { changeLocale } from "./localeManager";

export { changeLocale, getLocale } from "./localeManager"
export { useTranslation } from "./hooks"
export { getTranslations, registerTranslations } from "./translationsManager"
export { default as Translation } from "./TranslationComponent"

export function setTranslationConfig({defaultLocale}: {defaultLocale: string}) {
  changeLocale(defaultLocale)
}
