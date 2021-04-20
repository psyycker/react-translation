(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(94)),i={sidebar_position:4},s={unversionedId:"usage/inject-values",id:"usage/inject-values",isDocsHomePage:!1,title:"Use parameters",description:"You can use parameters in your translation to add computed values to them",source:"@site/docs/usage/inject-values.md",sourceDirName:"usage",slug:"/usage/inject-values",permalink:"/docs/usage/inject-values",editUrl:"https://github.com/psyycker/react-translation/docs/usage/inject-values.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Translations using Component",permalink:"/docs/usage/translation-using-component"},next:{title:"Namespaces",permalink:"/docs/usage/namespaces"}},c=[{value:"Using Translation component",id:"using-translation-component",children:[]},{value:"Using hook",id:"using-hook",children:[]}],u={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use parameters in your translation to add computed values to them"),Object(o.b)("br",null),Object(o.b)("h2",{id:"using-translation-component"},"Using Translation component"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import {Translation, registerTranslations} from "@psyycker/react-translation";\n\nregisterTranslations({\n  myAge: "I am {age} years old"\n})\n\nfunction MyComponent() {\n\n  // Will display "I am 25 years old"\n  return (\n    <div>\n      <Translation translationKey="myAge" defaultValue="my default value" parameters={{age: 25}}/>\n    </div>\n  )\n}\n')),Object(o.b)("h2",{id:"using-hook"},"Using hook"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import {Translation, useTranslation} from "@psyycker/react-translation";\n\nregisterTranslations({\n  myAge: "I am {age} years old"\n})\n\nfunction MyComponent() {\n  \n  const { getTranslation } = useTranslation();\n\n  // Will display "I am 25 years old"\n  return <div>{getTranslation({translationKey: "myAge", parameters: {age: 25}})}</div>\n}\n')))}l.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return y}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,y=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.a.createElement(y,s(s({ref:n},u),{},{components:t})):a.a.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);