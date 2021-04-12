(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var i=t(3),r=t(7),a=(t(0),t(134)),o={title:"Verschiedene Animationseffekte mit LEDs",sidebar_label:"13. Animationseffekte",description:"Animation von LEDs mit Arduino.",custom_edit_url:null,keywords:["Arduino","Animation","LED","Lauflicht","chasing light"]},c={unversionedId:"arduino/lightAnimation",id:"arduino/lightAnimation",isDocsHomePage:!1,title:"Verschiedene Animationseffekte mit LEDs",description:"Animation von LEDs mit Arduino.",source:"@site/docs/arduino/lightAnimation.md",slug:"/arduino/lightAnimation",permalink:"/docs/arduino/lightAnimation",editUrl:null,version:"current",sidebar_label:"13. Animationseffekte",sidebar:"sideBarArduino",previous:{title:"Analoge Werte einlesen",permalink:"/docs/arduino/analogInput"},next:{title:"Eine Men\xfcsteuerung mit zwei Tastern und drei LEDs",permalink:"/docs/arduino/simpleMenu"}},s=[{value:"Einfache Effekte ohne PWM",id:"einfache-effekte-ohne-pwm",children:[{value:"Aufgaben",id:"aufgaben",children:[]}]}],l={rightToc:s};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"einfache-effekte-ohne-pwm"},"Einfache Effekte ohne PWM"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"#define NUMLED 6\nconst int pinsLED[]       = {3, 5, 6, 9, 10, 11};\nint ledStates[]           = {0, 0, 0, 0, 0, 0};  // gibt an, ob eine LED an oder ausgeschaltet ist\nunsigned long lastTime    = 0;\nunsigned long delayMillis = 100;\nint activeLed             = 0; // Index der aktiven LED, also jener LED, die angeschaltet ist.\n\nvoid setup() {\n  Serial.begin(9600);\n  for (int i = 0; i < NUMLED; i++) {\n    pinMode(pinsLED[i], OUTPUT);\n  }\n}\n\n\n// Aktiviert die LEDs entsprechend dem Array 'ledStates' \nvoid showLeds(int pLedStates[]) {\n  for (int i =  0; i < NUMLED; i++) {\n    digitalWrite(pinsLED[i], pLedStates[i]);\n  }\n}\n\n// L\xf6scht alle LED\nvoid clear() {\n  for (int i = 0; i < NUMLED; i++) {\n    ledStates[i] = 0;\n  }\n}\n\nvoid loop() {\n  if ( (millis() - lastTime) > delayMillis) {\n      /******************************************************************\n        \xc4ndern sie mit einer for- Schleifen die Werte des Arrays `ledStates` so,\n        dass sich ein Lauflicht ergibt.\n\n        Nutzen Sie die Funktion 'setLeds()' zum An-/Ausschalten der LEDs.\n      *******************************************************************/\n\n    setLeds(ledStates);  // Funktion zum Schalten der LEDs\n    lastTime = millis(); // Zeitstempel \n  }\n}\n")),Object(a.b)("h3",{id:"aufgaben"},"Aufgaben"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(a.b)("strong",{parentName:"h5"},"\xdcben"))),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ol",{parentName:"div"},Object(a.b)("li",{parentName:"ol"},"Vervollst\xe4ndigen Sie die obige Vorlage so, dass ein einzelnes Licht in nur eine Richtung wandert. Ist das Licht am Ende angekommen, springt es wieder zu ersten LED."),Object(a.b)("li",{parentName:"ol"},"Erweitern Sie das Programm so, dass das Licht immer hin und her l\xe4uft."),Object(a.b)("li",{parentName:"ol"},"Im n\xe4chsten Schritt soll nicht nur ein einzelnes Licht, sondern drei Lichter hin- und herlaufen.")))))}d.isMDXComponent=!0},134:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,f=u["".concat(o,".").concat(p)]||u[p]||m[p]||a;return t?r.a.createElement(f,c(c({ref:n},l),{},{components:t})):r.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);