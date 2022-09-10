---
sidebar_position: 8
---

# withNamespaces

HOC which allows you to wrap your components inside Namespaces when declaring the component

## Usage

Instead of doing:

```jsx
import {registerTranslations, Namespace, Translation} from "@psyycker/react-translation";
import myTranslationFile from "./translation.json"

// Will register your translations under the namespace "myNamespace"
registerTranslations(myTranslationFile, "myNamespace")

export default function MyReactComponent() {
  return (
    <Namespace namespace="myNamespace">
      <Translation translationKey="title" defaultValue="default value"/>
    </Namespace>
  )
}
```

You can simply do:

```jsx
import {registerTranslations, Translation, withNamespaces} from "@psyycker/react-translation";
import myTranslationFile from "./translation.json"

// Will register your translations under the namespace "myNamespace"
registerTranslations(myTranslationFile, "myNamespace")

function MyReactComponent() {
  return <Translation translationKey="title" defaultValue="default value"/>
}

export default withNamespaces(MyReactComponent, "myNamespace")
```
