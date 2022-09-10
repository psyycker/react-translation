import React from 'react';
import TranslationsProvider from './contexts/translations-context';
import LocaleProvider from './contexts/locale-context';
import { init } from './translation-config';

type Props = {
  children: any;
}

init();

const TranslationProvider = ({ children }: Props) => (
  <TranslationsProvider>
    <LocaleProvider>
      {children}
    </LocaleProvider>
  </TranslationsProvider>
);

export default TranslationProvider;
