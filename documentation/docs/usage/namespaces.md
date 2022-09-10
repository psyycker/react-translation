---
sidebar_position: 7
---

# Namespaces

The namespace system is one of the biggest strengths of React Translation. <br/>
A namespace is a wrapper (using React Context) which will allow you to shorten your keys.

## Illustration
Let say you have two components using a label with the same key: **title** <br/>
Because the titles wont be the same between the two components, you'll have to create two specific keys <br/>

```json
{
  "myComponent1": {
    "title": "Title 1"
  },
  "myComponent2": {
    "title": "Title2"
  }
}
```

Doing that can lead to you super long keys so that you can figure out your file structure.<br/>
With the namespace system, all you have to do is register specific translation files under a specific namespace.
Then you can just wrap your hierarchy under a namespace and React Translation will know which title use!

## Usage

Create a translation file with this content (as an example)

```json
{
  "title": "My title"
}
```

As usual, register this translation outside your react component.<br/>
But this time, as a second parameter, define your namespace

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

Here we go! You are now displaying "My title" declared in the "myNamespace" namespace!

## Cumulate namespaces

You can easily cumulate namespaces in two different ways<br/>

### Multiple wrapping
```jsx
<Namespace namespace="myNamespace">
  <Namespace namespace="myNamespace2">
    <Translation translationKey="title" defaultValue="default value"/>
  </Namespace>
</Namespace>
```
This syntax makes more sense if the namespaces are not used in the same react components (parent -> children) <br/>

### Array as props

```jsx

<Namespace namespaces={["myNamespace", "myNamespace2"]}>
      <Translation translationKey="title" defaultValue="default value"/>
</Namespace>
```

### Mind the order
This order of the namespace is very important. React Translation is priorizing the last namespace declared. <br/>

```jsx
<Namespace namespace="myNamespace">
  <Namespace namespace="myNamespace2">
    <Translation translationKey="title" defaultValue="default value"/>
  </Namespace>
</Namespace>
```

OR

```jsx
<Namespace namespaces={["myNamespace", "myNamespace2"]}>
      <Translation translationKey="title" defaultValue="default value"/>
</Namespace>
```

In these cases, the key will be searched first in `myNamespace2` and then in `myNamespace`

## A common namespace for all

If you don't need namespaces OR you'd like to have a common namespace for you whole app (for translations like `yes`, `no`, `cancel`, ...) <br/>
then you can use what's called the common namespace. To use it, simply not put any second parameter when you register a translation. <br/>

> **⚠ ATTENTION**  
> In the case of using namespaces, the common one has the least priority in the search. Which means that if you have the same key in
> one of your namespace and common, if you are inside the namespace, its key will be used instead of the common one.
