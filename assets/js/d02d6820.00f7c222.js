"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[3187],{3905:function(e,n,r){r.d(n,{Zo:function(){return m},kt:function(){return c}});var i=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=i.createContext({}),o=function(e){var n=i.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=o(e.components);return i.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=o(r),c=t,h=u["".concat(d,".").concat(c)]||u[c]||p[c]||a;return r?i.createElement(h,l(l({ref:n},m),{},{components:r})):i.createElement(h,l({ref:n},m))}));function c(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:t,l[1]=s;for(var o=2;o<a;o++)l[o]=r[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},146:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return o},default:function(){return p}});var i=r(7462),t=r(3366),a=(r(7294),r(3905)),l={title:"Arrays (Listen)",sidebar_label:"9. Arrays (Listen)",description:"Mit Arrays in Lauflicht in Arduino programmieren.",custom_edit_url:null,keywords:["Arduino","Array","Listen","Klassen","Blinken","LED","Lauflicht"]},s=void 0,d={unversionedId:"arduino/array",id:"arduino/array",isDocsHomePage:!1,title:"Arrays (Listen)",description:"Mit Arrays in Lauflicht in Arduino programmieren.",source:"@site/docs/arduino/array.md",sourceDirName:"arduino",slug:"/arduino/array",permalink:"/docs/arduino/array",editUrl:null,tags:[],version:"current",lastUpdatedAt:1631966711,formattedLastUpdatedAt:"18.9.2021",frontMatter:{title:"Arrays (Listen)",sidebar_label:"9. Arrays (Listen)",description:"Mit Arrays in Lauflicht in Arduino programmieren.",custom_edit_url:null,keywords:["Arduino","Array","Listen","Klassen","Blinken","LED","Lauflicht"]},sidebar:"sideBarArduino",previous:{title:"8. Taster entprellen",permalink:"/docs/arduino/debounce"},next:{title:"10. Endliche Automaten",permalink:"/docs/arduino/stateMachine"}},o=[{value:"Motivation",id:"motivation",children:[]},{value:"Arrays (Listen)",id:"arrays-listen",children:[]},{value:"Hinweise zum Umgang mit Arrays",id:"hinweise-zum-umgang-mit-arrays",children:[]},{value:"Arrays mit einer Schleife",id:"arrays-mit-einer-schleife",children:[]},{value:"Eine Array f\xfcr die LED-Pins",id:"eine-array-f\xfcr-die-led-pins",children:[{value:"Aufgabe: Programmanalyse",id:"aufgabe-programmanalyse",children:[]}]}],m={toc:o};function p(e){var n=e.components,r=(0,t.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"Im Abschnitt ",(0,a.kt)("a",{parentName:"p",href:"/docs/arduino/loop"},"Schleifen")," sollten in einer Aufgabe mehrere LEDs an verschiedenen Pins an- bzw. ausgeschaltet werden. Eine m\xf6gliche L\xf6sung w\xe4re es, nur Pins zu verwenden, welche mit aufeinander folgenden Zahlen bezeichnet werden (z.B. Pin 3, 4, 5, 6, 7)."),(0,a.kt)("p",null,"Mit diesem Ansatz k\xf6nnten dann alle Pins durch eine ",(0,a.kt)("inlineCode",{parentName:"p"},"for"),"-Schleife zum Beispiel auf ",(0,a.kt)("inlineCode",{parentName:"p"},"HIGH"),"gesetzt werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"for(pin = 3; pin <8; pin++) // alle Pins von 3 bis 7\n{\n    digitalWrite(pin,HIGH)\n}\n")),(0,a.kt)("p",null,"Ganz offensichtlich funktioniert dieser Ansatz nicht, wenn die verwendeten Pins keine aufeinander folgende Nummerierung aufweisen. In diesem Fall eignen sich jedoch  ",(0,a.kt)("strong",{parentName:"p"},"Arrays (Listen)"),", um die verschiedenen Pins anzusteuern."),(0,a.kt)("h2",{id:"arrays-listen"},"Arrays (Listen)"),(0,a.kt)("p",null,"Ein Array ist nichts anderes als eine ",(0,a.kt)("strong",{parentName:"p"},"Liste von Variablen"),", welche alle den selben Datentyp haben. Ein Array vom Datentyp ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," kann zum Beispiel ",(0,a.kt)("strong",{parentName:"p"},"mehrere")," Integer-Werte speichern:"),(0,a.kt)("img",{src:"/img/arduino/Array.png",alt:"Arraystruktur",width:"330px",class:"center"}),(0,a.kt)("p",null,"Um das abgebildete Array zu erzeugen, wird der Datentyp (",(0,a.kt)("inlineCode",{parentName:"p"},"int"),") gefolgt von dem ",(0,a.kt)("strong",{parentName:"p"},"Namen des Arrays mit eckigen Klammern")," (",(0,a.kt)("inlineCode",{parentName:"p"},"zahlen[]"),") geschrieben. Werte k\xf6nnen dem Array bei der Deklaration sofort in einer geschweiften Klammer ",(0,a.kt)("inlineCode",{parentName:"p"},"{ ... }")," \xfcbergeben werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int zahlen[] = {12, 30, 42, 56, 98};  // Ein Array vom Typ Integer mit 5 Elementen (Werten)\n")),(0,a.kt)("p",null,"Der Vorteil des Arrays gegen\xfcber einzelnen Variablen liegt darin, dass der Array nur einen Namen hat und die einzelnen Element \xfcber ihren Index (",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),", ...) angesprochen werden k\xf6nnen. Anders als vielleicht zu vermuten w\xe4re, hat ",(0,a.kt)("strong",{parentName:"p"},"das erste Element")," den Index ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),". Bei f\xfcnf Elementen hat somit das letzte Element den Index ",(0,a.kt)("inlineCode",{parentName:"p"},"4"),"."),(0,a.kt)("img",{src:"/img/arduino/ArrayZugriff.png",alt:"Zugriff auf einen Array",width:"290px",class:"center"}),(0,a.kt)("p",null,"Mit Hilfe der Indizes kann mit den einzelnen Array-Elementen wie mit einfachen Datentypen gearbeitet werden. "),(0,a.kt)("p",null,"Es k\xf6nnen Werte (neu) zugewiesen werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"zahlen[0] = 3;\n")),(0,a.kt)("p",null,"Elemente k\xf6nnen mit Werten oder anderen Elementen verglichen werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"zahlen[1] > 15;         // true\nzahlen[4] < zahlen[3]   // false\n")),(0,a.kt)("p",null,"Oder es k\xf6nnen Werte \xfcber die serielle Schnittstelle ausgegeben werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Serial.print(`Der Wert von zahlen[3] ist:`);\nSerial.println(zahlen[3]);\n")),(0,a.kt)("p",null,"Au\xdferdem - und das ist der Grund, warum Arrays so n\xfctzlich sind - kann f\xfcr den Index auch eine Variable verwendet werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int index = 4;\nzahlen[index] = 100; // zahlen[4] = 100\n")),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Der Index f\xfcr das erste Element eines Arrays ist immer ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."))),(0,a.kt)("h2",{id:"hinweise-zum-umgang-mit-arrays"},"Hinweise zum Umgang mit Arrays"),(0,a.kt)("p",null,"Ein Array muss immer mit einer ",(0,a.kt)("strong",{parentName:"p"},"festen Gr\xf6\xdfe")," (Anzahl von Elementen) deklariert werden. Diese Gr\xf6\xdfe kann sp\xe4ter nicht mehr ge\xe4ndert werden."),(0,a.kt)("p",null,"Im ",(0,a.kt)("a",{parentName:"p",href:"/docs/arduino/array#arrays-listen"},"Beispiel")," wurde die Gr\xf6\xdfe mit der Zuweisung der Werte f\xfcr die einzelnen Elemente festgelegt. Sollen den Elementen erst  sp\xe4ter Werte zugewiesen werden, so muss dem Array bei der Deklaration trotzdem eine Gr\xf6\xdfe angegeben werden. Das wird durch einen Wert in eckigen Klammern gemacht."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int zahlen[5]; // Deklaration eines Arrays mit 5 Elementen - KEINE Wertzuweisung\n")),(0,a.kt)("p",null,"Sp\xe4ter kann dann jedem Element ein Wert zugewiesen werden."),(0,a.kt)("h2",{id:"arrays-mit-einer-schleife"},"Arrays mit einer Schleife"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},'#define ANZAHL 7\n//highlight-next-line\nint werte[] = {12, 30, 42, 56, 98, 298, 305};\n\nvoid setup(){\n    Serial.begin(115200);\n    delay(1000);\n\n    for(int i = 0; i < ANZAHL; i++){  // Der erste Index ist 0\n        Serial.print("werte[");\n        Serial.print(i);\n        Serial.print("]=");\n        //highlight-next-line\n        Serial.println(werte[i]);     //  Zugriff auf die Elemente des Arrays\n        delay(300);\n    }\n}\n\nvoid loop(){\n    // bleibt leer ...\n}\n')),(0,a.kt)("h2",{id:"eine-array-f\xfcr-die-led-pins"},"Eine Array f\xfcr die LED-Pins"),(0,a.kt)("p",null,"Betrachten wir noch einmal das Beispiel der LEDs, welche an verschiedenen Arduino-Pins angeschlossen sind. Die LEDs werden an den Pins ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"6"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"9")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," angeschlossen. Die Leds selbst werden von 0 bis 4 durchnummeriert. Insgesamt werden also 5 LEDs angeschlossen."),(0,a.kt)("img",{src:"/img/arduino/ArraySteckplatine.png",alt:"Leds alls Array",width:"350px",class:"center"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"#define NUMLED 5 // Anzahl der Array Elemente \nint pwmPins[] = {3, 5, 6, 9, 10};\n\nvoid setup(){\n    //highlight-start\n    for(int i = 0; i < NUMLED; i++){ \n        pinMode(pinLeds[i],OUTPUT); // Jeden einzelnen Pin als Ausgang konfigurieren\n    }\n    //highlight-end\n}\n\nvoid loop(){\n    //highlight-start\n    for(int i = 0; i < NUMLED; i++){\n        digitalWrite(pinLeds[i],HIGH); // Jeden einzelne LED anschalten\n        delay(250);\n    }\n    //highlight-end\n    delay(1000);\n\n    //highlight-start\n    for(int i = 0; i < NUMLED; i++){\n        digitalWrite(pinLeds[i],LOW); // Jeden einzelne LED ausschalten\n        delay(250);\n    }\n    //highlight-end\n    delay(1000);\n}\n")),(0,a.kt)("h3",{id:"aufgabe-programmanalyse"},"Aufgabe: Programmanalyse"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,a.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Analysieren Sie folgendes Programm. Beantworten Sie daf\xfcr die Fragen im Kommentar."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"#define NUMLED 6\nconst int pinLeds[NUMLED] = {3, 5, 6, 9, 10, 11};\nint zustandLeds[] = {0, 0, 0, 0, 0, 0};\n//highlight-next-line\nint dir = 1; // Welche Bedeutung hat die Variable `dir`?\n//highlight-next-line\nint num = 0; // Welche Bedeutung hat die Variable `num`?\n\nunsigned long lastTime = 0;\nunsigned long delayMillis = 200;\n\nvoid setup() {\n  for (int i = 0; i < NUMLED; i++) {\n    pinMode(pinLeds[i], OUTPUT);\n  }\n}\n\nvoid loop() {\n  //highlight-next-line\n  if ((millis() - lastTime) > delayMillis) { // Wof\xfcr ist die if-Abfrage?\n    //highlight-next-line\n    for (int i = 0; i < NUMLED; i++)         // Was passiert in dieser Schleife?\n    {\n      if (i == num) {\n        zustandLeds[i] = HIGH;\n      } else {\n        zustandLeds[i] = LOW;\n      }\n      digitalWrite(pinLeds[i], zustandLeds[i]);\n    }\n    \n    //highlight-start\n    if (num >= NUMLED-1) {                   \n      dir = -1;                              // Warum wird der Wert von `dir` ge\xe4ndert?\n    } else if (num == 0) {\n      dir = 1;\n    }\n    num += dir;                              // Welchen Wert nimmt `num` an\n    //highlight-end\n\n    lastTime = millis();\n  }\n}\n")))))))}p.isMDXComponent=!0}}]);