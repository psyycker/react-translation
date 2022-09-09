/* istanbul ignore file */
import React from 'react';
import * as TL from '@testing-library/react';
import Namespace from '../namespaces/namespace';

function renderHook(
  ui: any,
  {
    namespaces = [],
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }: {children: React.ReactElement}) {
    return <Namespace namespaces={namespaces}>{children}</Namespace>;
  }
  return TL.renderHook(ui, { wrapper: Wrapper, ...renderOptions });
}
// override render method
export { renderHook };
