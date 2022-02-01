import * as React from 'react';
import { render as renderReact } from '@testing-library/react';
import TranslationComponent from '../translation-component';

jest.mock('../hooks/use-translation', () => () => ({
  getTranslation: () => 'value',
}));

describe('Translation component', () => {
  it('Should do the translation', () => {
    const { asFragment, findByText } = renderReact(
      <TranslationComponent
        translationKey="component.title"
        defaultValue="test"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
    expect(() => findByText('value')).not.toThrow();
  });
});
