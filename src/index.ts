import { initLocalChangeEvent, changeLocale } from "./localeManager";
import { initTranslationsChangeEvent } from "./translationsManager"

(function (){
  initLocalChangeEvent();
  initTranslationsChangeEvent();
})()

export { listenToLocaleChange, changeLocale, getLocale } from "./localeManager"
export { useTranslation } from "./hooks"
export { getTranslations, listenToTranslationChange, registerTranslations } from "./translationsManager"
export { default as Translation } from "./TranslationComponent"

export function setTranslationConfig({defaultLocale}: {defaultLocale: string}) {
  changeLocale(defaultLocale)
}
