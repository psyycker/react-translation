import * as React from "react";
import {useTranslation} from "./hooks";

export type TranslationComponentProps = {
  translationKey: string;
  defaultValue: string;
  parameters?: object;
  style?: any
}

let rightFunction: React.ReactElement<TranslationComponentProps>;

export function generateRNComponent(Text: any) {
  return function TranslationComponentRN({translationKey, defaultValue, parameters, style}: TranslationComponentProps): React.ReactElement<TranslationComponentProps> {
    const { getTranslation } = useTranslation();
    return (
      <Text style={style}>
        {getTranslation({
          translationKey, defaultValue, parameters
        })}
      </Text>
    )
  }
}

export function TranslationComponentWeb({translationKey, defaultValue, parameters}: TranslationComponentProps): React.ReactElement<TranslationComponentProps> {
  const { getTranslation } = useTranslation();
  return (
    <>
      {getTranslation({
        translationKey, defaultValue, parameters
      })}
    </>
  )
}

try {
  const { Text } = require("react-native");
  // @ts-ignore
  rightFunction = generateRNComponent(Text);
} catch (e) {
  // @ts-ignore
  rightFunction = TranslationComponentWeb;
}

export default rightFunction;
