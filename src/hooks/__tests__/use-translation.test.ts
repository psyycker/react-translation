import { act, renderHook } from '@testing-library/react';
import useTranslation from '../use-translation';
import { useLocale } from '../../contexts/locale-context';
import { useTranslations } from '../../contexts/translations-context';
import { useNamespaces } from '../../namespaces/namespace';

jest.mock('../../contexts/locale-context', () => ({
  useLocale: jest.fn(),
}));

jest.mock('../../contexts/translations-context', () => ({
  useTranslations: jest.fn(),
}));

jest.mock('../../namespaces/namespace', () => ({
  useNamespaces: jest.fn(),
}));

const render = () => renderHook(() => useTranslation());

const mockLocale = (locale: string) => {
  (useLocale as jest.Mock).mockReturnValue(locale);
};

const mockTranslations = () => {
  (useTranslations as jest.Mock).mockReturnValue({
    'en-US': {
      common: {
        component: {
          title: 'myTranslation',
          titleOneInput: 'myTranslation {input}',
          titleTwoInput: 'myTranslation {input} {input2}',
        },
      },
      toto: {
        component: {
          title: 'ninja',
        },
      },
    },
    'fr-FR': {
      common: {
        component: {
          title: 'ma traduction',
        },
      },
    },
  });
};

const mockNamespaces = (namespaces: string[] = []) => {
  (useNamespaces as jest.Mock).mockReturnValue(namespaces);
};

describe('useTranslation()', () => {
  beforeEach(() => {
    mockLocale('en-US');
    mockTranslations();
    mockNamespaces([]);
  });

  it('should change the locale', () => {
    const { result, rerender } = render();
    expect(result.current.locale).toBe('en-US');
    mockLocale('fr-FR');
    act(() => {
      rerender();
    });
    expect(result.current.locale).toBe('fr-FR');
  });

  it('should add some translations', () => {
    const { result } = render();
    expect(result.current.getTranslation({
      translationKey: 'component.title',
      defaultValue: 'default',
    })).toBe('myTranslation');
  });

  it('should use namespace', () => {
    mockNamespaces(['toto']);
    const { result } = render();
    expect(result.current.getTranslation({
      translationKey: 'component.title',
      defaultValue: 'default',
    })).toBe('ninja');
  });

  it('should use default value', () => {
    const { result } = render();
    expect(result.current.getTranslation({
      translationKey: 'component.thisdoesntexists',
      defaultValue: 'default',
    })).toBe('default');
  });

  it('should use the key', () => {
    const { result } = render();
    expect(result.current.getTranslation({
      translationKey: 'component.thisdoesntexists',
    })).toBe('component.thisdoesntexists');
  });

  describe('With parameters', () => {
    it('should apply 1 parameter', () => {
      const { result } = render();
      expect(result.current.getTranslation({
        translationKey: 'component.titleOneInput',
        defaultValue: 'default',
        parameters: {
          input: 'test',
        },
      })).toBe('myTranslation test');
    });

    it('should apply 2 parameters', () => {
      const { result } = render();
      expect(result.current.getTranslation({
        translationKey: 'component.titleTwoInput',
        defaultValue: 'default',
        parameters: {
          input: 'test',
          input2: 'test2',
        },
      })).toBe('myTranslation test test2');
    });
  });
});
