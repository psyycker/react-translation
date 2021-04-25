import * as React from "react";
import {useTranslation} from "./hooks/translation-hooks";
import {isReactNative} from "./utils/environment-utils";

export type TranslationComponentProps = {
  translationKey: string;
  defaultValue: string;
  parameters?: object;
  style?: any
}

let rightFunction = TranslationComponentWeb;

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
if (isReactNative()) {
  const { Text } = require("react-native");
  rightFunction = generateRNComponent(Text);
}

export default rightFunction;
