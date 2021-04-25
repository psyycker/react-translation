---
sidebar_position: 2
---

# Register your Translations

Registering your translation is very easy! <br/>
First, you have to create a JSON file for each language <br/>

```
Your awesome app/
├─ src/
│  ├─ index.js
│  ├─ translations/
│  │  ├─ en-US.json
│  │  ├─ fr-FR.json
```
_This is only an example_
<br/>
When created, you can import them in your JS file and register them.

```javascript
import {registerTranslations} from "@psyycker/react-translation";
import french from "./translations/fr-FR.json"
import englishUS from "./translations/en-US.json"

registerTranslations({
  "en-US": englishUS,
  "fr-FR": french
})
```
Now, you have registered your translations, the next step is to use them.

> **⚠ ATTENTION**  
> Always make sure to register translations outside your component so that it's done when it's imported.
