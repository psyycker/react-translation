import React from "react";
import {useTranslation} from "./hooks";

type Props = {
  translationKey: string;
  defaultValue: string;
  parameters?: object
}

export default function TranslationComponent({translationKey, defaultValue, parameters}: Props) {
  const { getTranslation } = useTranslation();
  return (
    <>
      {getTranslation({
        translationKey, defaultValue, parameters
      })}
      </>
  )
}
