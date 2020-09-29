import React from "react";
import {useTranslation} from "./hooks";

type Props = {
  translationKey: string;
  defaultValue: string;
  parameters?: object;
  style?: any
}

let rightFunction: React.FunctionComponent<Props>;

try {
  const { Text } = require("react-native");
  rightFunction = function TranslationComponent({translationKey, defaultValue, parameters, style}: Props) {
    const { getTranslation } = useTranslation();
    return (
      <Text style={style}>
        {getTranslation({
          translationKey, defaultValue, parameters
        })}
      </Text>
    )
  }
} catch (e) {
  rightFunction = function TranslationComponent({translationKey, defaultValue, parameters}: Props) {
    const { getTranslation } = useTranslation();
    return (
      <>
        {getTranslation({
          translationKey, defaultValue, parameters
        })}
      </>
    )
  }
}

export default rightFunction;
