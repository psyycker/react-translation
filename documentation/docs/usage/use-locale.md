---
sidebar_position: 6
---

# Get and Set locale

## Get the locale
To get the current locale, you can call the hook `useLocale`:

```jsx
import { useLocale } from '@psyycker/react-translation';

const [locale] = useLocale();
```

## Update the locale
If you'd like to update the locale, you can call the second item coming from `useLocale`:

```jsx
import { useLocale } from '@psyycker/react-translation';

const [locale, setLocale] = useLocale();

setLocale('fr-FR');
```
