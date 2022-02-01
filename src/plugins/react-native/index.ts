import TranslationComponent from "./translation-component";

export default function apply(reactTranslation: any) {
  console.log(reactTranslation)
  reactTranslation.Translation = TranslationComponent
}
