---
sidebar_position: 4
---

# Use parameters

You can use parameters in your translation to add computed values to them
<br/>

## Using Translation component

```jsx
import {Translation, registerTranslations} from "@psyycker/react-translation";

registerTranslations({
  myAge: "I am {age} years old"
})

function MyComponent() {

  // Will display "I am 25 years old"
  return (
    <div>
      <Translation translationKey="myAge" defaultValue="my default value" parameters={{age: 25}}/>
    </div>
  )
}
```

## Using hook

```jsx
import {Translation, useTranslation} from "@psyycker/react-translation";

registerTranslations({
  myAge: "I am {age} years old"
})

function MyComponent() {
  
  const { getTranslation } = useTranslation();

  // Will display "I am 25 years old"
  return <div>{getTranslation({translationKey: "myAge", parameters: {age: 25}})}</div>
}
```
