(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(94)),i={sidebar_position:3},s={unversionedId:"usage/translation-using-component",id:"usage/translation-using-component",isDocsHomePage:!1,title:"Translations using Component",description:"The second way is using a component. It takes the same props as the hook parameters.",source:"@site/docs/usage/translation-using-component.md",sourceDirName:"usage",slug:"/usage/translation-using-component",permalink:"/docs/usage/translation-using-component",editUrl:"https://github.com/psyycker/react-translation/docs/usage/translation-using-component.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Translations using hooks",permalink:"/docs/usage/translation-using-hooks"},next:{title:"Use parameters",permalink:"/docs/usage/inject-values"}},c=[],u={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The second way is using a component. It takes the same props as the hook parameters."),Object(a.b)("br",null),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import {Translation} from "@psyycker/react-translation";\n\nfunction MyComponent() {\n\n  return <div><Translation translationKey="myKey" defaultValue="my default value"/></div>\n}\n')),Object(a.b)("p",null,"The hook here is not required as it's being used directly inside the component"))}p.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),f=r,d=l["".concat(i,".").concat(f)]||l[f]||m[f]||a;return t?o.a.createElement(d,s(s({ref:n},u),{},{components:t})):o.a.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);