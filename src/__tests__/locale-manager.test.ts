import { getLocale } from '../index';
import { reset } from '../locale-manager';
import { setTranslationConfig } from '../translation-config';

describe('Locale Mananger', () => {
  it('Should reset', () => {
    setTranslationConfig({ defaultLocale: 'en' });
    expect(getLocale()).toBe('en');
    reset();
    expect(getLocale()).toBe('');
  });
});
