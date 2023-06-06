/* istanbul ignore file */
import React from 'react';
import * as TL from '@testing-library/react';
import { RenderHookResult } from '@testing-library/react';
import Namespace from '../namespaces/namespace';
import TranslationProvider from '../translation-provider';

type AdditionalArguments = {
  namespaces?: string[];
  defaultLocale?: string;
}

function renderHook(
  ui: any,
  {
    defaultLocale = 'en-US',
    namespaces = [],
    ...renderOptions
  }: AdditionalArguments = {},
): RenderHookResult<any, any> {
  function Wrapper({ children }: {children: React.ReactElement}) {
    return (
      <TranslationProvider defaultLocale={defaultLocale}>
        <Namespace namespaces={namespaces}>
          {children}
        </Namespace>
      </TranslationProvider>
    );
  }
  return TL.renderHook(ui, { wrapper: Wrapper, ...renderOptions });
}
// override render method
export { renderHook };
