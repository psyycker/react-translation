---
sidebar_position: 1
---

# Translation using component (React Native)

The translation using JSX component is similar in React Native than in React.
For maintenance reasons, React and React Native are using different components and the import for React Native
needs to be done using Tree Shaking (See example)

```jsx
import TranslatedText from "@psyycker/react-translation/build/react-native/translated-text";

function MyComponent() {

  return <div><TranslatedText translationKey="myKey" defaultValue="my default value"/></div>
}
```
