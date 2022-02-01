import * as React from "react";
import useTranslation from "./hooks/use-translation";

export type TranslationComponentProps = {
  translationKey: string;
  defaultValue: string;
  parameters?: object;
  style?: any
}
let TranslationComponent = ({translationKey, defaultValue, parameters}: TranslationComponentProps): React.ReactElement<TranslationComponentProps> => {
  console.log("Yo")
  const { getTranslation } = useTranslation();
  return (
    <>
      {getTranslation({
        translationKey, defaultValue, parameters
      })}
    </>
  )
}

export const updateTranslationComponent = (newComponent: any) => {
  TranslationComponent = newComponent
}

export default TranslationComponent
