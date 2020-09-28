[![npm version](https://badge.fury.io/js/%40psyycker%2Freact-translation.svg)](https://badge.fury.io/js/%40psyycker%2Freact-translation)
# React Translation
React Translation is an easy to use Translation Library for React <br/>
It is thought to be used with shared libraries and without instance conflicts. <br/>
This library is fairly new and shouldn't be use yet for production applications (Wait for the version 1) as it still needs works (Especially on the unit tests side)

## Installation
```
    npm install --save @psyycker/react-translation
```

## Usage

### Initialise the library

In your index file (and in case of the usage of a shared library, in any index file) <br/>
Import directly the library to initialise the events:
```js
    import "@psyycker/react-translation"
```

### Set default config

By default, no locale is set, you can define it by calling the function

```js
import { setTranslationConfig } from "@psyycker/react-translation"
// Always call first before initialising the config
import "@psyycker/react-translation"

// Do not call inside a component
setTranslationConfig({
  defaultLocale: "en-US"
})

```

### Translation Files
First, you'll need to define your translation files. <br/>
Both JSON and JS objects are supported <br/>
You can nest properties to make it more readable
```json
{
  "component": {
    "title": "My Value"
  }
}
```

### Register your translation files
Let's say you have 2 files. One for English (US) and one for French <br/>

```
translations
    |-- french.json
    |-- english-us.json
```

```js
import { registerTranslations } from "@psyycker/react-translation";
import french from "./translations/french.json";
import englishUS from "./translations/english-us.json";

registerTranslations({
  "en-US": englishUS,
  "fr-FR": french
})
```
You can split your translation files and register them at different places. They will be merged

### Translate

#### Using Hooks

```jsx
import { useTranslation, changeLocale } from "@psyycker/react-translation"; import {useEffect} from "react";

function MyComponent() {

  const { getTranslation } = useTranslation();

  return (
    <div>{getTranslation({
      translationKey: "component.title",
      defaultValue: "My Default Value"
    })}</div>
  )
}
```

#### Using Component

```jsx
import { Translation, changeLocale } from "@psyycker/react-translation"; import {useEffect} from "react";

function MyComponent() {

  return (
    <div>
          <Translation 
            translationKey="component.title" 
            defaultValue="My default value"
         />
    </div>
  )
}
```

#### Using parameters

You might want to inject parameters in your translations.
<br/>
You can do so by using `{<yourVariableName>}` format (See below)
```json
{
  "component": {
    "title": "Hello {input}"
  }
}
```

And then, you can inject it using the parameters property

```jsx
import { Translation, changeLocale } from "@psyycker/react-translation"; 
import {useEffect} from "react";

function MyComponent() {

  return (
    <div>
          <Translation 
            translationKey="component.title" 
            defaultValue="My default value"
            parameters={{
              input: "My custom input"
            }}
         />
    </div>
  )
}
```

You can also do it by calling:

```js
    getTranslation({
      translationKey: "component.title",
      defaultValue: "My Default Value",
      parameters: { input: "My Custom Input" }
})
```

### Change the locale
You can easily change the locale by doing:

```js
import { changeLocale } from "@psyycker/react-translations";

    ...

    function onLocaleChange(newLocale){
      changeLocale(newLocale)
    }

    ... // Probably some ui to change the locale!
    
```

# TODO
- Support value override on default value
- Write unit tests
- Write better examples
- Mocking service for a better targeting of labels when writting unit tests

# License
MIT
