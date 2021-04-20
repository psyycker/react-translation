---
sidebar_position: 3
---

# Translations using Component

The second way is using a component. It takes the same props as the hook parameters.
<br/>

```jsx
import {Translation} from "@psyycker/react-translation";

function MyComponent() {

  return <div><Translation translationKey="myKey" defaultValue="my default value"/></div>
}
```

The hook here is not required as it's being used directly inside the component
