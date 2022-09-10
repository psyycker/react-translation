"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[567],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},l="Get and Set locale",c={unversionedId:"usage/use-locale",id:"usage/use-locale",title:"Get and Set locale",description:"Get the locale",source:"@site/docs/usage/use-locale.md",sourceDirName:"usage",slug:"/usage/use-locale",permalink:"/react-translation/docs/usage/use-locale",draft:!1,editUrl:"https://github.com/psyycker/react-translation/docs/usage/use-locale.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Use parameters",permalink:"/react-translation/docs/usage/inject-values"},next:{title:"Namespaces",permalink:"/react-translation/docs/usage/namespaces"}},s={},i=[{value:"Get the locale",id:"get-the-locale",level:2},{value:"Update the locale",id:"update-the-locale",level:2}],u={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-and-set-locale"},"Get and Set locale"),(0,a.kt)("h2",{id:"get-the-locale"},"Get the locale"),(0,a.kt)("p",null,"To get the current locale, you can call the hook ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocale"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useLocale } from '@psyycker/react-translation';\n\nconst [locale] = useLocale();\n")),(0,a.kt)("h2",{id:"update-the-locale"},"Update the locale"),(0,a.kt)("p",null,"If you'd like to update the locale, you can call the second item coming from ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocale"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useLocale } from '@psyycker/react-translation';\n\nconst [locale, setLocale] = useLocale();\n\nsetLocale('fr-FR');\n")))}p.isMDXComponent=!0}}]);