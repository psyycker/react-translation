---
sidebar_position: 2
---

# Register your Translations

The power of React Translation is into avoiding gigantic translations files. <br/>
To get to this point, we implemented a registration system that merges translations to a single source of truth <br/>

## Register translations
Registering translations is easy:
```jsx
import { registerTranslations } from '@psyycker/react-translation';

//Executed outside of the component
registerTranslations({
  'en-US': {
    yes: 'Yes'
  },
  'fr-FR': {
    yes: 'Oui'
  }
});
```
And that's it! Your translation is now ready to use. <br/>
> The locales specified in the object need to fit with your choice of locales.
