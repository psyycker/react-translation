import { setTranslationConfig, getLocale } from '../index';
import { reset } from '../locale-manager';

describe('Locale Mananger', () => {
  it('Should reset', () => {
    setTranslationConfig({ defaultLocale: 'en' });
    expect(getLocale()).toBe('en');
    reset();
    expect(getLocale()).toBe('');
  });
});
