"use strict";(self.webpackChunkspace_hal=self.webpackChunkspace_hal||[]).push([[2070],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),c=i,h=p["".concat(u,".").concat(c)]||p[c]||m[c]||a;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),i=t(6010);const a={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7462),i=t(7294),a=t(6010),l=t(2466),o=t(6550),u=t(1980),s=t(7392),d=t(12);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}function m(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function c(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=m(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,s]=h({queryString:t,groupId:r}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),k=(()=>{const e=u??p;return c({value:e,tabValues:a})?e:null})();(0,i.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!c({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),g(e)}),[s,g,a]),tabValues:a}}var k=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:n,block:t,selectedValue:o,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=d.indexOf(n),r=s[t].value;r!==o&&(p(n),u(r))},c=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:l}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>d.push(e),onKeyDown:c,onClick:m},l,{className:(0,a.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function v(e){const n=g(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},i.createElement(f,(0,r.Z)({},e,n)),i.createElement(y,(0,r.Z)({},e,n)))}function w(e){const n=(0,k.Z)();return i.createElement(v,(0,r.Z)({key:String(n)},e))}},6171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905)),a=t(4866),l=t(5162);const o={title:"Erste Schritte mit dem Zumo 32u4 und 3pi+ 32u4",sidebar_label:"Erste Schritte",description:"Schnelleinstieg f\xfcr den Zumo 32u4 (und 3pi+ 32u4). Motoren, Taster, LEDs und Display in Betrieb nehmen.",custom_edit_url:null,keywords:["Zumo 32u4","erste Schritte","Grundlagen","LED","Motor","LCD","Display","Taster"]},u=void 0,s={unversionedId:"zumo32u4/gettingStarted",id:"zumo32u4/gettingStarted",title:"Erste Schritte mit dem Zumo 32u4 und 3pi+ 32u4",description:"Schnelleinstieg f\xfcr den Zumo 32u4 (und 3pi+ 32u4). Motoren, Taster, LEDs und Display in Betrieb nehmen.",source:"@site/docs/zumo32u4/gettingStarted.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/gettingStarted",permalink:"/docs/zumo32u4/gettingStarted",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Erste Schritte mit dem Zumo 32u4 und 3pi+ 32u4",sidebar_label:"Erste Schritte",description:"Schnelleinstieg f\xfcr den Zumo 32u4 (und 3pi+ 32u4). Motoren, Taster, LEDs und Display in Betrieb nehmen.",custom_edit_url:null,keywords:["Zumo 32u4","erste Schritte","Grundlagen","LED","Motor","LCD","Display","Taster"]},sidebar:"mySidebar",previous:{title:"Installation",permalink:"/docs/zumo32u4/installation"},next:{title:"Befehlsreferenz",permalink:"/docs/category/befehlsreferenz"}},d={},p=[{value:"Einbinden der Bibliothek",id:"einbinden-der-bibliothek",level:2},{value:"LEDs",id:"leds",level:2},{value:"Taster",id:"taster",level:2},{value:"Spannungsversorgung",id:"spannungsversorgung",level:2},{value:"Motoren",id:"motoren",level:2},{value:"Display",id:"display",level:2},{value:"LCD (Zumo)",id:"lcd-zumo",level:3},{value:"Oled (3pi+)",id:"oled-3pi",level:3},{value:"Standardlayout",id:"standardlayout",level:4},{value:"Layout konfigurieren",id:"layout-konfigurieren",level:4}],m={toc:p},c="wrapper";function h(e){let{components:n,...o}=e;return(0,i.kt)(c,(0,r.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://spacehal.github.io/docs/zumo32u4/gettingStarted"})),(0,i.kt)("p",null,"Nachdem der Treiber und die Bibliothek installiert worden sind, kann der Zumo programmiert werden. Da der Zumo auch mit ",(0,i.kt)("strong",{parentName:"p"},"Arduino")," programmiert wird, ist der Einstieg nicht besonders schwer. Allerdings gibt es einige neue Befehle, welche zur Steuerung des Roboters notwendig sind. In der vereinfachten ",(0,i.kt)("a",{parentName:"p",href:"/docs/zumo32u4/zumoBasics"},"Befehlsreferenz")," finden Sie eine \xdcbersicht der wichtigsten Befehle. Schauen Sie sich die Referenz immer mal wieder an, um sich mit den Programmierm\xf6glichkeiten des Zumos vertraut zu machen."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h3",{parentName:"admonition",id:"befehlsreferenz"},"Befehlsreferenz"),(0,i.kt)("p",{parentName:"admonition"},"Eine Zusammenfassung aller wichtigen Befehle gibt es f\xfcr beide Roboter auch als Cheat Sheet:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{target:"_blank",href:t(2721).Z},"Cheat Sheet Zumo32u4"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{target:"_blank",href:t(1804).Z},"Cheat Sheet 3pi+"))))),(0,i.kt)("p",null,"F\xfcr einen schnellen Einstig und als guten \xdcberblick \xfcber die Grundfunktionen lernen Sie im folgenden Beispiel Methoden zum Steuern der"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#leds"},"LEDs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#taster"},"Taster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#spannungsversorgung"},"Batterie")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#motoren"},"Motoren")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#display"},"Display"))),(0,i.kt)("p",null,"kennen. Nach diesem Schnelleinstieg sollten Sie mithilfe der ",(0,i.kt)("a",{parentName:"p",href:"/docs/zumo32u4/zumoBasics"},"Befehlsreferenz")," in der Lage sein auch Sensoren (Bodensensor, Hindernisssensor) in Ihr Programm einzubinden. Erl\xe4uterungen finden Sie als Kommentar im Code oder etwas ausf\xfchrlicher weiter unten."),(0,i.kt)("h2",{id:"einbinden-der-bibliothek"},"Einbinden der Bibliothek"),(0,i.kt)("p",null,"Die Befehle zum Steuern des ",(0,i.kt)("strong",{parentName:"p"},"Zumo 32u4")," (bzw. ",(0,i.kt)("strong",{parentName:"p"},"3pi+ 32u4"),") befinden sich in der ",(0,i.kt)("a",{parentName:"p",href:"https://www.pololu.com/docs/0J63/6"},"Zumo 32u4 Arduino Library")," (bzw. ",(0,i.kt)("a",{parentName:"p",href:"https://pololu.github.io/pololu-3pi-plus-32u4-arduino-library/"},"3pi+ Bibliothek"),"). Diese Bibliothek muss einmal auf dem Rechner ",(0,i.kt)("a",{parentName:"p",href:"/docs/zumo32u4/installation#zumo32u4-bibliothek"},"installiert")," werden und wird dann mit der folgenden Befehlszeile in einem Arduino-Programm eingebunden (noch vor der ",(0,i.kt)("inlineCode",{parentName:"p"},"setup()")," Methode):"),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Zumo",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Zumo 32u4\n#include <Zumo32U4.h>    // Zuerst die Bibliothek einbinden\n\nvoid setup(){\n                        // ...\n}\n"))),(0,i.kt)(l.Z,{value:"3pi+",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// 3pi+ 32u4\n#include <Pololu3piPlus32U4.h>      // Bibliothek f\xfcr den 3pi+ \nusing namespace Pololu3piPlus32U4;  // Vereinfachter Zugriff auf die Bibliothek\n\nvoid setup(){\n                        // ...\n}\n")))),(0,i.kt)("p",null,"Nur wenn die jeweilige Bibliothek korrekt installiert und in das Programm eingebunden wurde, k\xf6nnen die unten aufgef\xfchrten Befehle verwendet werden."),(0,i.kt)("h2",{id:"leds"},"LEDs"),(0,i.kt)("p",null,"Zum Steuern der drei ",(0,i.kt)("a",{parentName:"p",href:"/docs/zumo32u4/zumoBasics"},"LEDs")," steht jeweils eine eigene Funktion zur Verf\xfcgung: ",(0,i.kt)("inlineCode",{parentName:"p"},"ledRed()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ledYellow()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ledGreen()"),". Als Argument wird der Zustand der LED, als ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," f\xfcr aus oder ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," f\xfcr an \xfcbergeben."),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Zumo",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"// Blinkender Zumo\n#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nvoid setup(){\n    // ohne Inhalt\n}\n\nvoid loop(){\n  //highlight-next-line\n  ledRed(1);   // rote LED einschalten\n  //highlight-next-line\n  ledGreen(0); // gr\xfcne LED ausschalten\n  delay(1000);\n\n  //highlight-next-line\n  ledRed(0);   // rote LED ausschalten\n  //highlight-next-line\n  ledGreen(1); // gr\xfcne LED ansschaltens\n  delay(500);\n}\n"))),(0,i.kt)(l.Z,{value:"3pi+",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"// Blinkender 3pi+\n#include <Pololu3piPlus32U4.h>      // Bibliothek f\xfcr den 3pi+ \nusing namespace Pololu3piPlus32U4;  // Vereinfachter Zugriff auf die Bibliothek\n\nvoid setup(){\n    // ohne Inhalt\n}\n\nvoid loop(){\n  //highlight-next-line\n  ledRed(1);   // rote LED einschalten\n  //highlight-next-line\n  ledGreen(0); // gr\xfcne LED ausschalten\n  delay(1000);\n\n  //highlight-next-line\n  ledRed(0);   // rote LED ausschalten\n  //highlight-next-line\n  ledGreen(1); // gr\xfcne LED ansschaltens\n  delay(500);\n}\n")))),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Lassen Sie eine oder mehrere LEDs ohne den ",(0,i.kt)("inlineCode",{parentName:"li"},"delay()")," Befehl blinken. Verwenden Sie die ",(0,i.kt)("inlineCode",{parentName:"li"},"millis()")," Funktion."))),(0,i.kt)("h2",{id:"taster"},"Taster"),(0,i.kt)("p",null,"F\xfcr die Nutzung der ",(0,i.kt)("a",{parentName:"p",href:"/docs/zumo32u4/buttons"},"Taster")," werden drei Klassen (",(0,i.kt)("inlineCode",{parentName:"p"},"Zumo32U4ButtonA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Zumo32U4ButtonB"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Zumo32U4ButtonC")," beim Zumo und ",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ZButtonB"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonC")," beim 3pi+) bereitgestellt. Nach dem Erzeugen des entsprechenden Objektes stehen verschiedene Methoden zum Auslesen der Taster bereit."),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Zumo",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"Zumo32U4ButtonA buttonA;  // Objekt f\xfcr den Taster A\n"))),(0,i.kt)(l.Z,{value:"3pi+",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"ButtonA buttonA;          // Objekt f\xfcr den Taster A\n")))),(0,i.kt)("p",null,"Zum Beispiel wird mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"waitForButton()")," die ",(0,i.kt)("strong",{parentName:"p"},"Programmausf\xfchrung")," solange ",(0,i.kt)("strong",{parentName:"p"},"unterbrochen"),", bis der entsprechende Taster gedr\xfcckt w\xfcrde. \xc4hnlich wie mit ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/input#warten-auf-eine-tastereingabe-mit-der-while-schleife"},"dieser")," ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),"-Schleife."),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Zumo",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"// Blinken nach Tasterdruck\n#include <Zumo32U4.h>        // Einbinden der ZUMO Bibliothek\n\n//highlight-next-line\nZumo32U4ButtonA buttonA;     // Objekt f\xfcr den Taster A\n\nvoid setup(){\n    ledRed(1);\n    //highlight-next-line\n    buttonA.waitForButton(); // Programm wartet, bis Taster A gedr\xfcckt wurde\n    ledRed(0);\n}\n\nvoid loop(){\n  ledGreen(1);               // LED einschalten\n  delay(1000);\n\n  ledGreen(0);               // LED ausschalten\n  delay(500);\n}\n"))),(0,i.kt)(l.Z,{value:"3pi+",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"// Blinken nach Tasterdruck\n#include <Pololu3piPlus32U4.h>      // Bibliothek f\xfcr den 3pi+ \nusing namespace Pololu3piPlus32U4;  // Vereinfachter Zugriff auf die Bibliothek\n\n//highlight-next-line\nButtonA buttonA;             // Objekt f\xfcr den Taster A\n\nvoid setup(){\n    ledRed(1);\n    //highlight-next-line\n    buttonA.waitForButton(); // Programm wartet, bis Taster A gedr\xfcckt wurde\n    ledRed(0);\n}\n\nvoid loop(){\n  ledGreen(1);               // LED einschalten\n  delay(1000);\n\n  ledGreen(0);               // LED ausschalten\n  delay(500);\n}\n")))),(0,i.kt)("p",null,"Die Methode ",(0,i.kt)("inlineCode",{parentName:"p"},"isPressed()")," gibt ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcck, wenn der Taster gedr\xfcckt ist, ansonsten ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Diese Methode ist nicht entprellt. Die Methode eignet sich besonders um in Abh\xe4ngigkeit der Taster Aktionen ausf\xfchren zu lassen. Hierf\xfcr wird die Methode mit eine ",(0,i.kt)("inlineCode",{parentName:"p"},"if-else")," Verzweigung kombibiert."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"if ( buttonA.isPressed() ){\n  // tue etwas, wenn der Taster A gedr\xfcckt wurde ...\n}\n")),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Die rote LED soll immer, nachdem der Taster A gedr\xfcckt wurde drei Mal kurz aufblinken. Verwenden Sie die ",(0,i.kt)("inlineCode",{parentName:"li"},"buttonA.waitForButton()")," Funktion."),(0,i.kt)("li",{parentName:"ol"},"Die drei LEDs (rot, gr\xfcn, gelb) sollen mit den Tastern A,B und C gesteuert werden. Wenn der Taster A (bzw. B und C) gedr\xfcckt ist, soll die gelbe (bzw. gr\xfcne und rote) LED aufleuchten. Ist der entsprechende Taster nicht gedr\xfcckt, ist die LED aus. Verwenden Sie die Funktion ",(0,i.kt)("inlineCode",{parentName:"li"},"isPressed()"),"."))),(0,i.kt)("h2",{id:"spannungsversorgung"},"Spannungsversorgung"),(0,i.kt)("p",null,"Da der Zumo 32u4 und der 3pi+ keine Schaltung zum Ausschalten bei geringer Batteriespannung haben, sollte die Versorgungsspannung (insbesonders bei Verwendung von Akkus) bei jedem Start \xfcberpr\xfcft werden. Das ",(0,i.kt)("strong",{parentName:"p"},"Tiefentladen von Akkus sch\xe4digt die Akkus")," und kann bei zu starker Entladung zum Ausfall der Akkus f\xfchren."),(0,i.kt)("p",null,"Zum Messen der ",(0,i.kt)("a",{parentName:"p",href:"/docs/zumo32u4/power"},"Batteriespannung")," kann die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"int readBatteryMillivolts()")," verwendet werden, welche die aktuelle Batteriespannung in Millivolt zur\xfcckgibt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Zumo 32u4 / 3pi+\nint spannung = readBatteryMillivolts();  // Batteriespannung in mV einlesen\n")),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Schreiben Sie eine Funktion, welche die ",(0,i.kt)("inlineCode",{parentName:"li"},"void setup()")," Funktion von Arduino nur dann beenden l\xe4sst, wenn die Batteriespannung gr\xf6\xdfer als 4,4 Volt ist. Ist die Spannung kleiner, wird die rote LED angeschaltet und die ",(0,i.kt)("inlineCode",{parentName:"li"},"void loop()")," Funktion wird ",(0,i.kt)("strong",{parentName:"li"},"nicht")," aufgerufen. "))),(0,i.kt)("h2",{id:"motoren"},"Motoren"),(0,i.kt)("p",null,"F\xfcr die ",(0,i.kt)("a",{parentName:"p",href:"/docs/zumo32u4/motors"},"Motoren")," steht die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"Zumo32U4Motors")," zur Verf\xfcgung. Die wichtigste Methode zum Steuern der beiden Motoren ist ",(0,i.kt)("inlineCode",{parentName:"p"},"setSpeeds(int left, int right)"),". Die Argumente geben jeweils die Drehgeschwindigkeit der beiden Motoren an. Die erlaubten Werte liegen im Bereich von -400 bis 400."),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Zumo",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"// Drehender Zumo\n#include <Zumo32U4.h>        // Einbinden der ZUMO Bibliothek\n\nZumo32U4ButtonA buttonA;     // Objekt f\xfcr den Taster A\n//highlight-next-line\nZumo32U4Motors motors;       // Objekt f\xfcr die Motoren\n\nvoid setup(){\n    ledGreen(1);\n    buttonA.waitForButton(); // Programm wartet, bis Taster A gedr\xfcckt wurde\n    ledGreen(0);\n}\n\nvoid loop(){\n  //highlight-next-line\n  motors.setSpeeds(-200, 200); // auf der Stelle drehen\n  delay(1000);\n\n  //highlight-next-line\n  motors.setSpeeds(0, 0);     // Motoren stoppen\n  delay(500);\n\n  //highlight-next-line\n  motors.setSpeeds(200, -200); // auf der Stelle drehen\n  delay(1000);\n}\n"))),(0,i.kt)(l.Z,{value:"3pi+",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Drehender 3pi+\n#include <Pololu3piPlus32U4.h>      // Bibliothek f\xfcr den 3pi+ \nusing namespace Pololu3piPlus32U4;  // Vereinfachter Zugriff auf die Bibliothek\n\nButtonA buttonA;     // Objekt f\xfcr den Taster A\n//highlight-next-line\nMotors motors;       // Objekt f\xfcr die Motoren\n\nvoid setup(){\n    ledGreen(1);\n    buttonA.waitForButton(); // Programm wartet, bis Taster A gedr\xfcckt wurde\n    ledGreen(0);\n}\n\nvoid loop(){\n  //highlight-next-line\n  motors.setSpeeds(-200, 200); // auf der Stelle drehen\n  delay(1000);\n\n  //highlight-next-line\n  motors.setSpeeds(0, 0);     // Motoren stoppen\n  delay(500);\n\n  //highlight-next-line\n  motors.setSpeeds(200, -200); // auf der Stelle drehen\n  delay(1000);\n}\n")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Die Geschwindigkeit der Motoren des Zumo 32u4 wird mit Werten zwischen ",(0,i.kt)("strong",{parentName:"p"},"-400 und +400")," gesteuert.")),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Lassen Sie den Roboter, immer nachdem ein ",(0,i.kt)("strong",{parentName:"li"},"beliebiger")," Taster gedr\xfcckt wurde, einen Kreis mit einem Durchmesser von ca. 30 cm fahren. Start und Zielpunkt des Roboters sollen an der gleichen Stelle liegen."))),(0,i.kt)("h2",{id:"display"},"Display"),(0,i.kt)("h3",{id:"lcd-zumo"},"LCD (Zumo)"),(0,i.kt)("p",null,"Auf dem Roboter befindet sich ein einfaches  ",(0,i.kt)("a",{parentName:"p",href:"/docs/zumo32u4/display"},"LCD-Display")," f\xfcr 8x2 Zeichen. Im nachfolgenden Beispiel sind die wichtigsten Methoden zum Ansteuern des Displays beschrieben."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino",metastring:"{5,11-14,17-18,23-24}","{5,11-14,17-18,23-24}":!0},'/* Einfaches Beispiel f\xfcr das LCD Display*/\n\n#include <Zumo32U4.h>\n\nZumo32U4LCD lcd;           // Objekt f\xfcr das LCD-Display\nZumo32U4ButtonA buttonA;   // Objekt f\xfcr den Taster A\nint counter = 0;\n\nvoid setup()\n{\n  lcd.clear();             // L\xf6scht das Display und setzt den Cursor nach oben links (0,0).\n  lcd.print("Hey,");       // Gibt Text aus. Alter Text wird \xfcberschrieben.\n  lcd.gotoXY(0, 1);        // Setzt den Cursor auf die angegebenen xy-Koordinaten.\n  lcd.print("drueck A");\n  buttonA.waitForButton(); // Warten auf Taster A.\n\n  lcd.clear();\n  lcd.print("Zaehler");    // Keine Umlaute verwenden.\n}\n\nvoid loop()\n{\n  lcd.gotoXY(0, 1);        // Setzt den Cursor (X,Y): 1. Stelle, 2. Zeile,\n  lcd.print(counter);      // Gibt den Wert der Variablen aus.\n  counter++;\n  delay(100);\n}\n')),(0,i.kt)("h3",{id:"oled-3pi"},"Oled (3pi+)"),(0,i.kt)("p",null,"Der 3pi+ verf\xfcgt im Gegensatz zum Zumo \xfcber ein ",(0,i.kt)("a",{parentName:"p",href:"https://www.pololu.com/product/3760"},"OLED Display")," mit 128x64 Pixeln. F\xfcr die Nutzung des Displays stellt Pololu eine ",(0,i.kt)("a",{parentName:"p",href:"https://pololu.github.io/pololu-oled-arduino/"},"Bilbiothek")," zur Verf\xfcgung, welche automatisch durch die Bilbiothek des 3pi+ (",(0,i.kt)("inlineCode",{parentName:"p"},"Pololu3piPlus32U4.h"),") geladen wird."),(0,i.kt)("h4",{id:"standardlayout"},"Standardlayout"),(0,i.kt)("p",null,"In dem folgenden Beispiel werde die Grundfunktionen in Standardaufl\xf6sung des OLED-Displays verwendet. Die verwendenten Befehle sind die selben wie beim LCD Display."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino",metastring:"{3-4,11-12,14-15,20-21}","{3-4,11-12,14-15,20-21}":!0},'/* Einfaches Beispiel f\xfcr das OLED Display */\n\n#include <Pololu3piPlus32U4.h>\nusing namespace Pololu3piPlus32U4;\n\nOLED oled;                  // Objekt f\xfcr das LCD-Display\nint counter = 0;\n\nvoid setup()\n{\n  oled.clear();             // L\xf6scht das Display und setzt den Cursor nach oben links (0,0).\n  oled.print("Hallo");      // Gibt Text aus. Alter Text wird \xfcberschrieben.\n  delay(1000);\n  oled.clear();\n  oled.print("Zaehler");    // Keine Umlaute verwenden.\n}\n\nvoid loop()\n{\n  oled.gotoXY(0, 1);        // Setzt den Cursor (X,Y): 1. Stelle, 2. Zeile,\n  oled.print(counter);      // Gibt den Wert der Variablen aus.\n  counter++;\n  delay(100);\n}\n')),(0,i.kt)("h4",{id:"layout-konfigurieren"},"Layout konfigurieren"),(0,i.kt)("p",null,"Das OLED Display erlaubt neben der Standardeinstellung mit 8x2 Zeichen auch die Verwendung von kleineren Schrifteire und damit auch die Ausgabe von mehr Text."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setLayout8x2()"),": 8 Zeichen in 2 Zeilen (Standard)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setLayout11x4()"),": Die selbe Schriftgr\xf6\xdfe wie ",(0,i.kt)("inlineCode",{parentName:"li"},"setLayout8x2()"),", aber mit 11 Zeichen in 4 Zeilen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setLayout21x8()"),": Kleinere Schriftgr\xf6\xdfe mit 21 Zeichen in 8 Zeilen.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},'/* Umschalten des Layouts beim OLED-Display */\n#include <Pololu3piPlus32U4.h>\nusing namespace Pololu3piPlus32U4;\n\nOLED oled;                  // Objekt f\xfcr das LCD-Display\nButtonA buttonA;            // Objekt f\xfcr den Taster A\n\nvoid setup(){ }\n\nvoid loop()\n{\n  // highlight-next-line\n  oled.setLayout8x2();      //  Umschalten auf 2 Zeilen, 8 Zeichen pro Zeile\n  oled.clear();\n  oled.print("8x2");\n  oled.gotoXY(0, 1); \n  oled.print("Taster A");       \n  buttonA.waitForButton();  // Warten auf Taster A.\n\n  // highlight-next-line\n  oled.setLayout11x4();     //  Umschalten auf 4 Zeilen, 11 Zeichen pro Zeile\n  oled.clear();\n  oled.print("11x4");    \n  oled.gotoXY(0, 3);        \n  oled.print("Taster A");\n  buttonA.waitForButton();  // Warten auf Taster A.\n\n  // highlight-next-line\n  oled.setLayout21x8();     // Umschalten auf 8 Zeilen, 21 Zeichen pro Zeile\n  oled.clear();\n  oled.print("Layout 21x8");\n  oled.gotoXY(0, 7);        \n  oled.print("Taster [A] druecken");\n  buttonA.waitForButton();  // Warten auf Taster A.\n}\n')),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Vervollst\xe4ndigen Sie das unten gegebene Programm (Vorlage Aufgabe 1) so, dass der Roboter die angegeben Aufgaben ausf\xfchrt."),(0,i.kt)("li",{parentName:"ol"},"Schreiben Sei eine Funktion ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"void drehen(in grad)")),", welche den Roboter um die angegebene Gradzahl drehen l\xe4sst. Ein negativer Winkel soll eine Drehung nach rechts und  ein positiver Winkel eine Drehung nach links verursachen.\nVerwenden Sie die Funktion, um den Roboter das ",(0,i.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Haus_vom_Nikolaus"},"Haus vom Nikolaus")," fahren zu lassen."),(0,i.kt)("li",{parentName:"ol"},"Erstellen Sie sich eine eigene Befehlsreferenz mit Word oder OpenOffice. Notieren Sie sich zu jedem Befehl auch eine eigenes Beispiel.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title="Vorlage Aufgabe 1"',title:'"Vorlage',Aufgabe:!0,'1"':!0},'/* Vervollst\xe4ndigen Sie die Vorlage mit den angegebenen Funktionen */\n\n#include <Zumo32U4.h>    // Die Bibliothek sollte immer als erstes eingebunden werden\n\nZumo32U4LCD lcd;          // Display (8x2)\nZumo32U4ButtonA buttonA;  // Taster A\nZumo32U4ButtonB buttonB;  // Taster B\nZumo32U4ButtonC buttonC;  // Taster C\nZumo32U4Motors motors;    // Motoren\n\nint leftSpeed  = 200;     // Werte zwischen -400 ... +400\nint rightSpeed = 200;\n\nvoid setup() {\n  lcd.clear();             \n  lcd.print("A  B  C");\n}\n\nvoid loop() {\n  if ( buttonA.isPressed() ) {   // Abfrage, ob Taster gedr\xfcckt wurde\n  // - gelbe LED anschalten, Textausgabe "gerade"\n  // - 0,5 Sekunden warten\n  // - 50 cm geradeaus fahren\n  // - gelbe LED ausschalten,  Men\xfc anzeigen "A  B  C"\n  }\n  else if (buttonB.isPressed()) {\n    // - gr\xfcne LED anschalten, Textausgabe "beschleunigen" \n    // - 0,5 Sekunden warten\n    // - den Roboter (ca. 1 Sekunde) auf Maximalgeschwindigkeit beschleunigen\n    // - den Geschwindigkeit wieder (ca. 1 Sekunden) bis zum Stillstand verringern \n    // - gr\xfcne LED ausschalten, Men\xfc anzeigen "A  B  C"\n  }\n  else if (buttonC.isPressed()) {\n    // - rote LED anschalten, Textausgabe "Viereck" \n    // - 0,5 Sekunden warten\n    // - den Roboter ein m\xf6glichst exaktes Quadrat fahren lassen (ca. 20cm x 20cm)\n    // - Start und Ziel sollen identisch sein\n    // - rote LED ausschalten, Men\xfc anzeigen "A  B  C"\n  }\n}\n'))))}h.isMDXComponent=!0},1804:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/Befehlsreferenz3pi-0693ee04c5d86e3c1cb81054557567f5.pdf"},2721:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/BefehlsreferenzZumo32u4-54a8b598c3be2b372b96762be6ab79d3.pdf"}}]);