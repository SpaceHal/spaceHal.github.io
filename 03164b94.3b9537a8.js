(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{131:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),s=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(t),p=r,m=u["".concat(a,".").concat(p)]||u[p]||b[p]||i;return t?o.a.createElement(m,l(l({ref:n},c),{},{components:t})):o.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),i=(t(0),t(131)),a={title:"LEDs",sidebar_label:"LEDs",description:"Die LEDs am Zumo 32u4 steuern."},l={unversionedId:"zumo32u4/zumoBasics",id:"zumo32u4/zumoBasics",isDocsHomePage:!1,title:"LEDs",description:"Die LEDs am Zumo 32u4 steuern.",source:"@site/docs/zumo32u4/zumoBasics.md",slug:"/zumo32u4/zumoBasics",permalink:"/docs/zumo32u4/zumoBasics",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/zumo32u4/zumoBasics.md",version:"current",sidebar_label:"LEDs",sidebar:"someSidebar",previous:{title:"Getting Started - Motoren und Taster",permalink:"/docs/zumo32u4/gettingStarted"},next:{title:"Die Taster",permalink:"/docs/zumo32u4/buttons"}},d=[{value:"<code>void ledRed(bool on)</code>",id:"void-ledredbool-on",children:[]},{value:"<code>void ledGreen(bool on)</code>",id:"void-ledgreenbool-on",children:[]},{value:"<code>void ledYellow(bool on)</code>",id:"void-ledyellowbool-on",children:[]},{value:"<code>bool usbPowerPresent ()</code>",id:"bool-usbpowerpresent-",children:[]},{value:"<code>uint16_t readBatteryMillivolts ()</code>",id:"uint16_t-readbatterymillivolts-",children:[]}],c={rightToc:d};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Mit dem Einbinden der Zumo- Bibliothek ",Object(i.b)("inlineCode",{parentName:"p"},"#include <Zumo32U4.h>")," stehen folgende grundlegende Funktionen zur Steuerung der LEDs zu Verf\xfcgung."),Object(i.b)("h2",{id:"void-ledredbool-on"},Object(i.b)("inlineCode",{parentName:"h2"},"void ledRed(bool on)")),Object(i.b)("p",null,"Schaltet die rote LED an ",Object(i.b)("inlineCode",{parentName:"p"},"ledRed(1)")," oder aus ",Object(i.b)("inlineCode",{parentName:"p"},"ledRed(0)"),". Die rote Led ist am Port f\xfcr die serielle Daten\xfcbertragung (Pin 17) angeschlossen und leuchtete auf, wenn Daten gesendet werden. Deshalb ist es schwierig die LED korrekt zu steuern, wenn der USB-Anschluss verwendet wird."),Object(i.b)("h4",{id:"beispiel"},"Beispiel"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-arduino"}),"#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nvoid setup(){\n    // ohne Inhalt\n}\n\nvoid loop(){\n  ledRed(1); // LED einschalten\n  delay(1000);\n  ledRed(0); // LED ausschalten\n  delay(500);\n}\n")),Object(i.b)("h2",{id:"void-ledgreenbool-on"},Object(i.b)("inlineCode",{parentName:"h2"},"void ledGreen(bool on)")),Object(i.b)("p",null,"Schaltet die gr\xfcne LED an ",Object(i.b)("inlineCode",{parentName:"p"},"ledGreen(1)")," oder aus ",Object(i.b)("inlineCode",{parentName:"p"},"ledGreen(0)"),". Die gr\xfcne Led ist am Port f\xfcr die serielle Daten\xfcbertragung angeschlossen und leuchtete auf, wenn Daten empfangen werden. Deshalb ist es schwierig die LED korrekt zu steuern, wenn der USB-Anschluss verwendet wird."),Object(i.b)("h2",{id:"void-ledyellowbool-on"},Object(i.b)("inlineCode",{parentName:"h2"},"void ledYellow(bool on)")),Object(i.b)("p",null,"Schalte die am Pin 13 anliegende gr\xfcne LED an ",Object(i.b)("inlineCode",{parentName:"p"},"ledYellow(1)")," oder aus ",Object(i.b)("inlineCode",{parentName:"p"},"ledYellow(0)"),". Die gelbe LED wird vom USB-Anschluss nicht beeinflusst."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Nur die gelbe LED ist unabh\xe4ngig vom USB-Anschluss. Wenn der Roboter ",Object(i.b)("strong",{parentName:"p"},"nicht")," nicht an PC angeschlossen ist, werden auch die rote und gr\xfcne LED nicht weiter gest\xf6rt."))),Object(i.b)("h2",{id:"bool-usbpowerpresent-"},Object(i.b)("inlineCode",{parentName:"h2"},"bool usbPowerPresent ()")),Object(i.b)("p",null,"Die Funktion ",Object(i.b)("inlineCode",{parentName:"p"},"usbPowerPresent()")," gibt ",Object(i.b)("inlineCode",{parentName:"p"},"true")," zur\xfcck, wenn am USB-Anschluss eine Spannung anliegt, der Roboter also mit dem PC verbunden ist. "),Object(i.b)("h4",{id:"beispiel-1"},"Beispiel"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-arduino"}),"#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nvoid setup(){\n    // ohne Inhalt\n}\nvoid loop(){\n  if (usbPowerPresent ())\n  {\n      ledYellow(1); // Led ist an, wenn der USB-Anschluss verwendet wird\n  } \n  else\n  {\n      ledYellow(0); // Led ist aus, wenn der USB-Anschluss nicht verwendet wird\n  } \n}\n")),Object(i.b)("h2",{id:"uint16_t-readbatterymillivolts-"},Object(i.b)("inlineCode",{parentName:"h2"},"uint16_t readBatteryMillivolts ()")),Object(i.b)("p",null,"Misst die Batteriespannung und gibt sie in Millivolt (mV) zur\xfcck."))}s.isMDXComponent=!0}}]);