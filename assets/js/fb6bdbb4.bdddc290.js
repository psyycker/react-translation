"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[786],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(y,s(s({ref:n},p),{},{components:t})):r.createElement(y,s({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},610:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={sidebar_position:7},c="withNamespaces",l={unversionedId:"usage/withNamespaces",id:"usage/withNamespaces",title:"withNamespaces",description:"HOC which allows you to wrap your components inside Namespaces when declaring the component",source:"@site/docs/usage/withNamespaces.md",sourceDirName:"usage",slug:"/usage/withNamespaces",permalink:"/react-translation/docs/usage/withNamespaces",editUrl:"https://github.com/psyycker/react-translation/docs/usage/withNamespaces.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Namespaces",permalink:"/react-translation/docs/usage/namespaces"},next:{title:"Translation using component (React Native)",permalink:"/react-translation/docs/react-native/translation-using-component"}},p=[{value:"Usage",id:"usage",children:[],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"withnamespaces"},"withNamespaces"),(0,o.kt)("p",null,"HOC which allows you to wrap your components inside Namespaces when declaring the component"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Instead of doing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import {registerTranslations, Namespace, Translation} from "@psyycker/react-translation";\nimport myTranslationFile from "./translation.json"\n\n// Will register your translations under the namespace "myNamespace"\nregisterTranslations(myTranslationFile, "myNamespace")\n\nexport default function MyReactComponent() {\n  return (\n    <Namespace namespace="myNamespace">\n      <Translation translationKey="title" defaultValue="default value"/>\n    </Namespace>\n  )\n}\n')),(0,o.kt)("p",null,"You can simply do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import {registerTranslations, Translation, withNamespaces} from "@psyycker/react-translation";\nimport myTranslationFile from "./translation.json"\n\n// Will register your translations under the namespace "myNamespace"\nregisterTranslations(myTranslationFile, "myNamespace")\n\nfunction MyReactComponent() {\n  return <Translation translationKey="title" defaultValue="default value"/>\n}\n\nexport default withNamespaces(MyReactComponent, "myNamespace")\n')))}m.isMDXComponent=!0}}]);