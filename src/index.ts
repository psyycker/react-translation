/* istanbul ignore file */
import { reset as resetTranslationManager } from './translation-manager';
import { reset as resetLocaleManager, changeLocale } from './locale-manager';
import { Plugin } from './types';

export { changeLocale, getLocale } from './locale-manager';
export { default as useTranslation } from './hooks/use-translation';
export { getTranslations, registerTranslations } from './translation-manager';
export { default as Translation } from './translation-component';
export { default as Namespace } from './namespaces/namespace';
export { default as withNamespaces } from './namespaces/with-namespaces';
export { default as TranslationProvider } from './translation-provider';
export { default as useLocale } from './hooks/use-locale';
export function applyPlugin(plugin: Plugin) {
  plugin();
}

export function reset(): void {
  resetTranslationManager();
  resetLocaleManager();
}
