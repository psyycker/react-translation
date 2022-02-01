import React from "react"
import {Text} from "react-native";
import useTranslation from "../../hooks/use-translation";

export type TranslationComponentProps = {
  translationKey: string;
  defaultValue: string;
  parameters?: object;
  style?: any
}

const TranslationComponent =({translationKey, defaultValue, parameters, style}: TranslationComponentProps): React.ReactElement<TranslationComponentProps> => {
  const { getTranslation } = useTranslation();
  return (
    <Text style={style}>
      {getTranslation({
        translationKey, defaultValue, parameters
      })}
    </Text>
  )
}

export default TranslationComponent
