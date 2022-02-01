import { getTranslationWithKey } from '../translation-utils';

describe('translation utils', () => {
  it('Should get null translation', () => {
    expect(getTranslationWithKey({}, 'common', 'toto.tata')).toBeNull();
  });
});
