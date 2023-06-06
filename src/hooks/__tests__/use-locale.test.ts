import { renderHook } from '@testing-library/react';
import useLocale from '../use-locale';
import { useLocale as useLocaleCtx, useSetLocale } from '../../contexts/locale-context';

jest.mock('../../contexts/locale-context', () => ({
  useLocale: jest.fn(),
  useSetLocale: jest.fn(),
}));

describe('useLocale', () => {
  it('Should get and update the locale', () => {
    (useLocaleCtx as jest.Mock).mockReturnValue('en-US');
    const spy = jest.fn();
    (useSetLocale as jest.Mock).mockImplementation(() => spy);

    const { result } = renderHook(() => useLocale());
    expect(result.current[0]).toBe('en-US');
    result.current[1]('fr-FR');
    expect(spy).toHaveBeenCalledWith('fr-FR');
  });
});
