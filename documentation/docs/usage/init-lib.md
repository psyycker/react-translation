---
sidebar_position: 1
---

# Initialise the library

> **Deprecation Warning**
> Until the version 0.5.X, you had to import:
> ```javascript
>    import "@psyycker/react-translation"
>```
> in your index file. This is now **NOT** required anymore.

This first step before using the app is initialising it. <br/>
To do so, wrap your main component into our `TranslationProvider`

```jsx
import { TranslationProvider } from "@psyycker/react-translation"

const App = () => {
  return (
    <TranslationProvider>
      <App/>
    </TranslationProvider>
  )
}
```

Initialising React Translation is setting default values:

| Property         | Default value | Description|
|--------------|-----------|---------------|
| defaultLocale | "en-US"          | The default locale used by the library. (Will change to use the device's one in the future |
