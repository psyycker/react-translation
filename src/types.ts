export interface TranslationObject {
  [key: string]: object
}

export type GetTranslationArgs = {
  translationKey: string,
  defaultValue?: string,
  parameters?: object
};

export type GetTranslationType = (({
  translationKey,
  defaultValue,
  parameters,
}: GetTranslationArgs) => any) | null;

export type actionType = {
  type: string,
  value: any
}

export type Plugin = () => void

export type TranslationComponentProps = {
  translationKey: string;
  defaultValue: string;
  parameters?: object;
  style?: any
}