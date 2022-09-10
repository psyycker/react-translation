import { renderHook, act } from '@testing-library/react';
import { renderHook as overrideRenderHook } from '../../test-utils/hook-override';
import useTranslation from '../use-translation';
import { changeLocale } from '../../locale-manager';
import { registerTranslations } from '../../translation-manager';
import TranslationProvider from '../../translation-provider';

const render = (
  { namespaces = [] }
    : {namespaces: string[]
  } = { namespaces: [] },
) => overrideRenderHook(() => useTranslation(), {
  namespaces,
});

describe('useTranslation()', () => {
  it('should change the locale', () => {
    const { result } = render();
    expect(result.current.locale).toBe('');
    act(() => {
      changeLocale('fr-FR');
    });
    expect(result.current.locale).toBe('fr-FR');
  });

  it('should add some translations', () => {
    const { result } = render();
    act(() => {
      registerTranslations({
        'en-US': {
          component: {
            title: 'myTranslation',
          },
        },
      });
      changeLocale('en-US');
    });
    expect(result.current.getTranslation({
      translationKey: 'component.title',
      defaultValue: 'default',
    })).toBe('myTranslation');
  });

  it('should use namespace', () => {
    const { result } = render({ namespaces: ['toto', 'tata'] });
    act(() => {
      registerTranslations({
        'en-US': {
          component: {
            title: 'myTranslation',
          },
        },
      }, 'toto');
      changeLocale('en-US');
    });
    // @ts-ignore
    expect(result.current.getTranslation({
      translationKey: 'component.title',
      defaultValue: 'default',
    })).toBe('myTranslation');
  });

  it('should use default value', () => {
    const { result } = render();
    act(() => {
      changeLocale('en-US');
    });
    expect(result.current.getTranslation({
      translationKey: 'component.thisdoesntexists',
      defaultValue: 'default',
    })).toBe('default');
  });

  describe('With parameters', () => {
    it('should apply 1 parameter', () => {
      const { result } = render();
      act(() => {
        registerTranslations({
          'en-US': {
            component: {
              titleOneInput: 'myTranslation {input}',
            },
          },
        });
        changeLocale('en-US');
      });
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
      act(() => {
        registerTranslations({
          'en-US': {
            component: {
              titleTwoInput: 'myTranslation {input} {input2}',
            },
          },
        });
        changeLocale('en-US');
      });
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

  it('should merge translations', () => {
    const { result } = render();
    act(() => {
      registerTranslations({
        'en-US': {
          component: {
            title: 'myTranslation',
          },
        },
      });
      registerTranslations({
        'en-US': {
          component: {
            title2: 'myTranslation2',
          },
        },
      });
      changeLocale('en-US');
    });
    expect(result.current.getTranslation({
      translationKey: 'component.title',
      defaultValue: 'default',
    })).toBe('myTranslation');
    expect(result.current.getTranslation({
      translationKey: 'component.title2',
      defaultValue: 'default',
    })).toBe('myTranslation2');
  });
});
