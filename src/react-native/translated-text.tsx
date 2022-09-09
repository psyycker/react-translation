/* istanbul ignore file */
// No way to test this as it's react native and the project is react based

import React from 'react';
/* eslint-disable */
// @ts-ignore
import { Text } from 'react-native';
import useTranslation from '../hooks/use-translation';
import { TranslationComponentProps } from '../types';

function TranslatedText({
  translationKey, defaultValue, parameters, style,
}: TranslationComponentProps): React.ReactElement<TranslationComponentProps> {
  const { getTranslation } = useTranslation();
  return (
    <Text style={style}>
      {getTranslation({
        translationKey, defaultValue, parameters,
      })}
    </Text>
  );
}

export default TranslatedText;
