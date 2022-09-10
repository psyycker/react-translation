import * as React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import { withNamespaces, Translation, registerTranslations } from '../../index';
import TranslationProvider from '../../translation-provider';

describe('withNamespaces', () => {
  function DummyComponent() {
    return <Translation translationKey="with" defaultValue="default" />;
  }
  it('Should inject the context', () => {
    registerTranslations({
      'en-US': {
        with: 'with',
      },
    });
    const Component = withNamespaces(DummyComponent, 'with');
    render(<TranslationProvider><Component /></TranslationProvider>);
    expect(() => screen.getByText('with')).not.toThrow();
  });
});
