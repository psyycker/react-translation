/* istanbul ignore file */
import { reset as resetTranslationManager } from "./translation-manager"
import { reset as resetLocaleManager } from "./locale-manager"
import {Plugin} from "./types";
import { changeLocale, getLocale } from "./locale-manager"
import useTranslation from "./hooks/use-translation"
import { getTranslations, registerTranslations } from "./translation-manager"
import Translation from "./translation-component"
import Namespace from "./namespaces/namespace"
import withNamespaces from "./namespaces/with-namespaces"

const reactTranslation: any = {}

const setTranslationConfig = ({defaultLocale}: {defaultLocale: string}) => {
  changeLocale(defaultLocale)
}

reactTranslation.useTranslation = useTranslation
reactTranslation.getTranslations = getTranslations
reactTranslation.registerTranslations = registerTranslations
reactTranslation.Translation = Translation
reactTranslation.Namespace = Namespace
reactTranslation.withNamespaces = withNamespaces
reactTranslation.setTranslationConfig = setTranslationConfig
reactTranslation.getLocale = getLocale

export function applyPlugin(plugin: Plugin) {
  console.log(plugin)
  console.log(reactTranslation)
  plugin(reactTranslation)
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

export default reactTranslation
