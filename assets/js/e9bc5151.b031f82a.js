(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(94)),i={sidebar_position:2},s={unversionedId:"usage/register-translations",id:"usage/register-translations",isDocsHomePage:!1,title:"Register your Translations",description:"Registering your translation is very easy!",source:"@site/docs/usage/register-translations.md",sourceDirName:"usage",slug:"/usage/register-translations",permalink:"/react-translation/docs/usage/register-translations",editUrl:"https://github.com/psyycker/react-translation/docs/usage/register-translations.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Initialise the library",permalink:"/react-translation/docs/usage/init-lib"},next:{title:"Translations using hooks",permalink:"/react-translation/docs/usage/translation-using-hooks"}},c=[],l={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Registering your translation is very easy! ",Object(o.b)("br",null),"\nFirst, you have to create a JSON file for each language ",Object(o.b)("br",null)),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Your awesome app/\n\u251c\u2500 src/\n\u2502  \u251c\u2500 index.js\n\u2502  \u251c\u2500 translations/\n\u2502  \u2502  \u251c\u2500 en-US.json\n\u2502  \u2502  \u251c\u2500 fr-FR.json\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This is only an example")),Object(o.b)("br",null),"When created, you can import them in your JS file and register them.",Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import {registerTranslations} from "@psyycker/react-translation";\nimport french from "./translations/fr-FR.json"\nimport englishUS from "./translations/en-US.json"\n\nregisterTranslations({\n  "en-US": englishUS,\n  "fr-FR": french\n})\n')),Object(o.b)("p",null,"Now, you have registered your translations, the next step is to use them."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u26a0 ATTENTION"),Object(o.b)("br",{parentName:"p"}),"\n","Always make sure to register translations outside your component so that it's done when it's imported.")))}u.isMDXComponent=!0},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);