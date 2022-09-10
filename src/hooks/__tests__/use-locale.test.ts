import { act } from '@testing-library/react';
import useLocale from '../use-locale';
import { renderHook } from '../../test-utils/hook-override';

describe('useLocale', () => {
  it('Should get and update the locale', () => {
    const { result } = renderHook(() => useLocale());
    expect(result.current[0]).toBe('en-US');
    act(() => {
      result.current[1]('fr-FR');
    });
    expect(result.current[0]).toBe('fr-FR');
  });
});
