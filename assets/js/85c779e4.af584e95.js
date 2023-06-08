"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},s="Translations using Component",i={unversionedId:"usage/translation-using-component",id:"usage/translation-using-component",title:"Translations using Component",description:"The second way is using a component. It takes the same props as the hook parameters.",source:"@site/docs/usage/translation-using-component.md",sourceDirName:"usage",slug:"/usage/translation-using-component",permalink:"/react-translation/docs/usage/translation-using-component",draft:!1,editUrl:"https://github.com/psyycker/react-translation/docs/usage/translation-using-component.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Translations using hooks",permalink:"/react-translation/docs/usage/translation-using-hooks"},next:{title:"Use parameters",permalink:"/react-translation/docs/usage/inject-values"}},c={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"translations-using-component"},"Translations using Component"),(0,o.kt)("p",null,"The second way is using a component. It takes the same props as the hook parameters."),(0,o.kt)("br",null),"_This works on both React and React Native_",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import {Translation} from "@psyycker/react-translation";\n\nfunction MyComponent() {\n\n  return <div><Translation translationKey="myKey" defaultValue="my default value"/></div>\n}\n')),(0,o.kt)("p",null,"The hook here is not required as it's being used directly inside the component"))}m.isMDXComponent=!0}}]);