import React from 'react';
import TranslationsProvider from './contexts/translations-context';
import LocaleProvider from './contexts/locale-context';

type Props = {
  children: React.ReactNode;
  defaultLocale: string;
}

const TranslationProvider = ({ children, defaultLocale }: Props) => (
  <TranslationsProvider>
    <LocaleProvider defaultLocale={defaultLocale}>
      {children}
    </LocaleProvider>
  </TranslationsProvider>
);

export default TranslationProvider;
