---
sidebar_position: 3
---

# useTranslation
<br/>

## Returns

| Name         | Type   | Description        |
|--------------|--------|--------------------|
| locale       | String | The current locale |
| getTranslation       | Function  | The function to get a translation. See below |

## getTranslation

| Name         | Mandatory | default value | Type   | Description                                             |
|--------------|-----------|---------------|--------|---------------------------------------------------------|
| translationKey | Y         |               | String | The key you'd like to get the translation from |
| defaultValue | N         |               | String | The value to display if the key is not found |
| parameters | N         |               | Record<string: any> | parameters if you'd like to [use parameters](/docs/usage/inject-values) |

