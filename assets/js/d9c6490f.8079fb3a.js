(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[9379],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,b=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(b,a(a({ref:t},m),{},{components:n})):r.createElement(b,a({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7461:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"kinematik",title:"Kinematik eines mobilen Roboters",sidebar_label:"Kinematik",description:"Kinematik eines mobilen Roboters mir differentiellem Antrieb",custom_edit_url:null,keywords:["Arduino","Roboter","Robotik","Kinematik","Bewegungsgleichungens","Positionsbestimmung","Zumo32u4","Zumo"]},s={unversionedId:"robotik/kinematik",id:"robotik/kinematik",isDocsHomePage:!1,title:"Kinematik eines mobilen Roboters",description:"Kinematik eines mobilen Roboters mir differentiellem Antrieb",source:"@site/docs/robotik/kinematik.md",sourceDirName:"robotik",slug:"/robotik/kinematik",permalink:"/docs/robotik/kinematik",editUrl:null,version:"current",sidebar_label:"Kinematik",frontMatter:{id:"kinematik",title:"Kinematik eines mobilen Roboters",sidebar_label:"Kinematik",description:"Kinematik eines mobilen Roboters mir differentiellem Antrieb",custom_edit_url:null,keywords:["Arduino","Roboter","Robotik","Kinematik","Bewegungsgleichungens","Positionsbestimmung","Zumo32u4","Zumo"]},sidebar:"sideBarRobotik",previous:{title:"Odometrie",permalink:"/docs/robotik/odometrie"}},l=[{value:"Bewegungsgleichung eines Roboters mit differentiellem Antrieb",id:"bewegungsgleichung-eines-roboters-mit-differentiellem-antrieb",children:[]}],c={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bewegungsgleichung-eines-roboters-mit-differentiellem-antrieb"},"Bewegungsgleichung eines Roboters mit differentiellem Antrieb"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,o.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Write a program that causes the robot to move in a straight line for 2 m, turn 180 degree and then move in a straight line for 2 m. How far is it from its starting\nposition?")))))}m.isMDXComponent=!0}}]);