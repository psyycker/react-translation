import * as React from 'react';
import useTranslation from './hooks/use-translation';
import { TranslationComponentProps } from './types';

function TranslationComponent({
  translationKey,
  defaultValue,
  parameters,
}: TranslationComponentProps): React.ReactElement<TranslationComponentProps> {
  const { getTranslation } = useTranslation();
  return (
    <>
      {getTranslation({
        translationKey, defaultValue, parameters,
      })}
    </>
  );
}

export default TranslationComponent;
