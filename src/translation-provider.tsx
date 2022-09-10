import React from 'react';
import TranslationsProvider from './contexts/translations-context';
import LocaleProvider from './contexts/locale-context';

type Props = {
  children: any;
}

const TranslationProvider = ({ children }: Props) => (
  <TranslationsProvider>
    <LocaleProvider>
      {children}
    </LocaleProvider>
  </TranslationsProvider>
);

export default TranslationProvider;
