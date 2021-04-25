---
sidebar_position: 3
---

# Translations using hooks

There are two ways of translating your app.
<br/>

The first one is using the `useTranslation` hook and translate directly in JS.
<br/>

```jsx
import {useTranslation} from "@psyycker/react-translation";

function MyComponent() {

  const {getTranslation} = useTranslation();

  return <div>{getTranslation({translationKey: "mykey", defaultValue: "my default value"})}</div>
}
```

You can also use the getTranslation outside JSX within functions

```jsx
import {useTranslation} from "@psyycker/react-translation";

function MyComponent() {

  const {getTranslation} = useTranslation();
  
  const getRightTranslation = () => {
    return getTranslation({translationKey: "mykey", defaultValue: "my default value"})
  }

  return <div>{getRightTranslation()}</div>
}
```
