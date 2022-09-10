/* istanbul ignore file */
import React from 'react';
import * as TL from '@testing-library/react';
import { RenderHookResult } from '@testing-library/react';
import Namespace from '../namespaces/namespace';
import TranslationProvider from '../translation-provider';

function renderHook(
  ui: any,
  {
    namespaces = [],
    ...renderOptions
  }: {namespaces?: string[]} = {},
): RenderHookResult<any, any> {
  function Wrapper({ children }: {children: React.ReactElement}) {
    return (
      <TranslationProvider>
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
