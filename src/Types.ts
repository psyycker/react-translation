export interface TranslationObject {
  [key: string]: object
}

export type GetTranslationType = ({translationKey, defaultValue, parameters}: GetTranslationArgs) => any;
export type GetTranslationArgs = {translationKey: string, defaultValue?: string, parameters?: object};
