"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[808],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=s(t),m=i,b=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(b,l(l({ref:n},p),{},{components:t})):r.createElement(b,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=c;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7263:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),l=["components"],a={title:"Batteriespannung",sidebar_label:"Batteriespannung",description:"Batteriespannung auslesen",custom_edit_url:null,keywords:["Zumo 32u4","Betriebspannung","Batterie"]},u=void 0,s={unversionedId:"zumo32u4/power",id:"zumo32u4/power",title:"Batteriespannung",description:"Batteriespannung auslesen",source:"@site/docs/zumo32u4/power.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/power",permalink:"/docs/zumo32u4/power",editUrl:null,tags:[],version:"current",lastUpdatedAt:1641119333,formattedLastUpdatedAt:"2.1.2022",frontMatter:{title:"Batteriespannung",sidebar_label:"Batteriespannung",description:"Batteriespannung auslesen",custom_edit_url:null,keywords:["Zumo 32u4","Betriebspannung","Batterie"]},sidebar:"sideBarZumo",previous:{title:"LEDs",permalink:"/docs/zumo32u4/zumoBasics"},next:{title:"Taster",permalink:"/docs/zumo32u4/buttons"}},p=[{value:"<code>uint16_t readBatteryMillivolts()</code>",id:"uint16_t-readbatterymillivolts",children:[{value:"Beispiel",id:"beispiel",children:[],level:4}],level:2},{value:"<code>bool usbPowerPresent()</code>",id:"bool-usbpowerpresent",children:[{value:"Beispiel",id:"beispiel-1",children:[],level:4}],level:2}],d={toc:p};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Die Bibliothek des Zumo 32u4 stellt zwei Funktionen f\xfcr die Analyse der Spannungsversorgung bereit. Beide Funktionen k\xf6nnen direkt, also ohne die Verwendung eines Objektes verwendet werden."),(0,o.kt)("h2",{id:"uint16_t-readbatterymillivolts"},(0,o.kt)("inlineCode",{parentName:"h2"},"uint16_t readBatteryMillivolts()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"int spannung = readBatteryMillivolts();  // Batteriespannung in mV einlesen\n")),(0,o.kt)("p",null,"Misst die Batteriespannung und gibt sie in Millivolt (mV) zur\xfcck. Kann verwendet werden, um die Batteriespannung anzuzeigen."),(0,o.kt)("p",null,"Da der Zumo 32u4 keine Schaltung zum Ausschalten bei geringer Batteriespannung hat, sollte die Spannung (insbesonders bei Verwendung von Akkus) bei jedem Start \xfcberpr\xfcft werden, um ",(0,o.kt)("strong",{parentName:"p"},"Tiefentladung zu vermeiden"),". "),(0,o.kt)("h4",{id:"beispiel"},"Beispiel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/* Spannungsstester:\n   Bei angeschlossenem USB den Zumo ein/ausschalten.  */\n\n#include <Zumo32U4.h>     // Einbinden der ZUMO Bibliothek\n\nZumo32U4LCD lcd;          // Objekt f\xfcr das LCD-Display\nint uMin = 4000;          // Minimal Batteriespannung\n\nvoid setup() { /* bleibt leer */}\n\nvoid loop() {\n  int uBat = readBatteryMillivolts();  // Batteriespannung einlesen\n  lcd.gotoXY(0, 0); lcd.print(uBat);\n  lcd.print(" mV");\n\n  lcd.gotoXY(0, 1);\n  if (uBat < uMin) {\n    lcd.print("BAT. LOW");\n  }\n  else {\n    lcd.print("BAT. OK ");\n  }\n  delay(100);\n}\n')),(0,o.kt)("h2",{id:"bool-usbpowerpresent"},(0,o.kt)("inlineCode",{parentName:"h2"},"bool usbPowerPresent()")),(0,o.kt)("p",null,"Die Funktion ",(0,o.kt)("inlineCode",{parentName:"p"},"usbPowerPresent()")," gibt ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcck, wenn am USB-Anschluss eine Spannung anliegt, der Roboter also mit dem PC verbunden ist. "),(0,o.kt)("h4",{id:"beispiel-1"},"Beispiel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-arduino"},"#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nvoid setup(){\n    // ohne Inhalt\n}\nvoid loop(){\n  if (usbPowerPresent ())\n  {\n      ledYellow(1); // Led ist an, wenn der USB-Anschluss verwendet wird\n  } \n  else\n  {\n      ledYellow(0); // Led ist aus, wenn der USB-Anschluss nicht verwendet wird\n  } \n}\n")))}c.isMDXComponent=!0}}]);