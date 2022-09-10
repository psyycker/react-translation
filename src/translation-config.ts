import { changeLocale } from './locale-manager';

export const setTranslationConfig = ({ defaultLocale }: {defaultLocale: string}) => {
  changeLocale(defaultLocale);
};

let initialised = false;

export const init = () => {
  if (initialised) {
    return;
  }
  initialised = true;
  setTranslationConfig({
    defaultLocale: 'en-US',
  });
};
