export interface TranslationObject {
  [key: string]: object
}

export type GetTranslationType = (({translationKey, defaultValue, parameters}: GetTranslationArgs) => any) | null;
export type GetTranslationArgs = {translationKey: string, defaultValue?: string, parameters?: object};

export type actionType = {
  type: string,
  value: any
}
