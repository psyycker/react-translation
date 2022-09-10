---
sidebar_position: 4
---

# useLocale
<br/>

## Usage

```jsx
import { useLocale } from '@psyycker/react-translation';

const [locale, setLocale] = useLocale();
```

## Returns

| Name      | Type   | Description                              |
|-----------|--------|------------------------------------------|
| locale    | String | The current locale                       |
| setLocale | Function  | The function to set a locale (see below) |

## setLocale

| Name         | Mandatory | default value | Type   | Description    |
|--------------|-----------|---------------|--------|----------------|
| newLocale    | Y         |               | String | The new locale |

