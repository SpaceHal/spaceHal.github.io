(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{134:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return p}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),d=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},s=function(e){var n=d(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(t),m=i,p=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return t?a.a.createElement(p,b(b({ref:n},c),{},{components:t})):a.a.createElement(p,b({ref:n},c))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:i,l[1]=b;for(var c=2;c<r;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return d}));var i=t(3),a=t(7),r=(t(0),t(134)),l={title:"Funktionen",sidebar_label:"6. Funktionen",description:"Funktionen in Arduino.",custom_edit_url:null,keywords:["Arduino","Funktionen","Paramter","R\xfcckgabewert","Beispiel","Aufgaben"]},b={unversionedId:"arduino/functions",id:"arduino/functions",isDocsHomePage:!1,title:"Funktionen",description:"Funktionen in Arduino.",source:"@site/docs/arduino/functions.md",slug:"/arduino/functions",permalink:"/docs/arduino/functions",editUrl:null,version:"current",sidebar_label:"6. Funktionen",sidebar:"sideBarArduino",previous:{title:"Den Arduino mit einem Taster steuern",permalink:"/docs/arduino/input"},next:{title:"Steuern zeitkritischer Aufgaben",permalink:"/docs/arduino/millis"}},o=[{value:"Eine Funktion zum Anschalten einer LED",id:"eine-funktion-zum-anschalten-einer-led",children:[]},{value:"Konventionen",id:"konventionen",children:[{value:"Aufgaben",id:"aufgaben",children:[]}]},{value:"Funktionen mit Parametern",id:"funktionen-mit-parametern",children:[]},{value:"Aufgaben",id:"aufgaben-1",children:[]},{value:"Funktionen mit R\xfcckgabewert",id:"funktionen-mit-r\xfcckgabewert",children:[]},{value:"Statische Variablen",id:"statische-variablen",children:[]}],c={rightToc:o};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Eine Funktionen ist ein ",Object(r.b)("strong",{parentName:"p"},"zusammengefasster Codeblock")," (Unterprogramm), welcher an beliebigen Stellen eines Programms (wiederkehrend) aufgerufen werden kann. Wird eine Funktion in einem Programm aufgerufen, so wird zuerst der Code der Funktion ausgef\xfchrt und anschlie\xdfend das Programm an der Steile des Funktionsaufrufes weitergef\xfchrt. Funktionen k\xf6nnen ",Object(r.b)("strong",{parentName:"p"},"Parameter als Eingabegr\xf6\xdfen")," akzeptieren und ",Object(r.b)("strong",{parentName:"p"},"berechnete Werte zur\xfcckgeben"),"."),Object(r.b)("h2",{id:"eine-funktion-zum-anschalten-einer-led"},"Eine Funktion zum Anschalten einer LED"),Object(r.b)("p",null,"Ein sehr einfaches Beispiel f\xfcr eine Funktion k\xf6nnte das ",Object(r.b)("strong",{parentName:"p"},"Anschalten einer LED")," sein. Diese Funktion soll keine Eingabeparameter und keine R\xfcckgabewerte haben und beim Aufruf eine vorher festgelegte LED anschalten. Deshalb beginnt die Funktionsdefinition mit dem Schl\xfcsselwort ",Object(r.b)("inlineCode",{parentName:"p"},"void"),", was angibt, dass die Funktion ",Object(r.b)("strong",{parentName:"p"},"keinen R\xfcckgabewert")," hat."),Object(r.b)("p",null,"Nach dem Schl\xfcsselwort ",Object(r.b)("inlineCode",{parentName:"p"},"void")," folgt der selbst gew\xe4hlte Name der Funktion und ein Runde Klammern. Der von der Funktion auszuf\xfchrende Code wird anschlie\xdfend zwischen zwei geschweifte Klammern ",Object(r.b)("inlineCode",{parentName:"p"},"{...}"),"  geschrieben."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-arduino"}),"//  Funktionsdefinition f\xfcr `anschalten()`\nvoid anschaltenLed()       // Keine Parameter, keine R\xfcckgabewert           \n{\n    digitalWrite(2,HIGH);  // Eine Funktion kann auch mehr als eine Zeile Code enthalten.\n}\n")),Object(r.b)("p",null,"Nachdem eine Funktion definiert wurde, kann sie mit ihrem Namen aufgerufen werden:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-arduino"}),"anschaltenLed();  //  Funktionsaufruf\n")),Object(r.b)("p",null,"\xc4hnlich wie bei Schleifen oder Programmverzweigungen kann auch eine Funktion auf ",Object(r.b)("strong",{parentName:"p"},"globale Variablen zugreifen"),". Im folgenden Beispiel wird die globale Variable ",Object(r.b)("inlineCode",{parentName:"p"},"pinLed")," zum Schalten der LED genutzt."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-arduino"}),"int pinLed 2;\n\nvoid anschaltenLed()               \n{\n    digitalWrite(pinLed,HIGH);  // Die Funktion greift auf die globale Variable `pinLed` zu.\n}\n")),Object(r.b)("h4",{id:"ein-blink-programm"},"Ein Blink-Programm"),Object(r.b)("p",null,"Wird noch eine weitere Funktion ",Object(r.b)("inlineCode",{parentName:"p"},"ausschalten()")," definiert, so ergibt sich ein sehr verst\xe4ndlicher Code zum Blinken eine LED:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-arduino"}),"int pinLed 2;   \n\n// Eine Funktionsdefinition \n//highlight-start\nvoid anschaltenLed(){\n    digitalWrite(pinLed,HIGH);  \n}\n//highlight-end\n\n// Noch eine Funktionsdefinition \n//highlight-start\nvoid ausschaltenLed(){\n    digitalWrite(pinLed,LOW);   \n}\n//highlight-end\n\nvoid setup() {\n  pinMode(pinLed,OUTPUT); \n}\n\nvoid loop() {\n  //highlight-next-line\n  anschaltenLed();  // Aufruf der Funktion \n  delay(1000); \n  //highlight-next-line\n  ausschaltenLed(); // Aufruf der Funktion                       \n  delay(1000);                 \n}\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Beim Aufruf einer Funktion d\xfcrfen die runden Klammern nach dem Funktionsnamen nicht fehlen."))),Object(r.b)("h2",{id:"konventionen"},"Konventionen"),Object(r.b)("p",null,"Eine wesentliche Aufgabe von Funktionen ist es, ein Programm lesbar zu machen. Aus diesem Grund sind die gew\xe4hlten ",Object(r.b)("strong",{parentName:"p"},"Funktionsnamen")," \xe4u\xdferst wichtig. Folgenden Regeln sollten Sie beim Schreiben eigener Funktionen beachten:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ein Funktionsname beginnt immer mit einem ",Object(r.b)("strong",{parentName:"li"},"Verb im Infinitiv"),". Anschlie\xdfend k\xf6nnen weiter W\xf6rter zum Erl\xe4utern folgen (",Object(r.b)("inlineCode",{parentName:"li"},"schaltenLed()"),", ",Object(r.b)("inlineCode",{parentName:"li"},"messenSensor()"),", ",Object(r.b)("inlineCode",{parentName:"li"},"lesenZustand()"),", ...)."),Object(r.b)("li",{parentName:"ul"},"Der Funktionsname beschreibt nur die von der Funktion ausgef\xfchrte Aktion."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Je k\xfcrzer eine Funktion, desto besser"),". Schreiben Sie lieber zwei oder drei kurze Funktionen, als eine lange Funktion."),Object(r.b)("li",{parentName:"ul"},"Nutzen Sie Funktionen auch bei kurzen Programmen.")),Object(r.b)("h3",{id:"aufgaben"},"Aufgaben"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(r.b)("strong",{parentName:"h5"},"\xdcben"))),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Schreiben Sie die Funktion ",Object(r.b)("inlineCode",{parentName:"p"},"gruessen()")," (verwenden Sie keine Umlaute), welche auf dem seriellen Monitor folgenden Satz schreibt:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"Hallo Welt, wie geht es?\n")),Object(r.b)("p",{parentName:"li"},"Nutzen Sie ansschlie\xdfend die Funktion, um den Satz dreimal auszugeben:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"Hallo Welt, wie geht es?\nHallo Welt, wie geht es?\nHallo Welt, wie geht es?\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Schreiben Sie eine Funktion ",Object(r.b)("inlineCode",{parentName:"p"},"aufblinken()"),", welche ein LED zuerst anschaltet und 0,2 Sekunden sp\xe4ter wieder ausschaltet. Nutzen Sie die Funktion, um eine LED ",Object(r.b)("strong",{parentName:"p"},"blinken")," zu lassen:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-arduino"}),"void loop(){\n    aufblinken();\n    delay(1000);\n}\n")))))),Object(r.b)("h2",{id:"funktionen-mit-parametern"},"Funktionen mit Parametern"),Object(r.b)("p",null,"Im obigen ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"functions#eine-funktion-zum-anschalten-einer-led"}),"Beispiel")," kann mit der Funktion  ",Object(r.b)("inlineCode",{parentName:"p"},"anschalten()"),"  die LED am Pin ",Object(r.b)("inlineCode",{parentName:"p"},"pinLed")," angeschaltet werden. Aber was ist, wenn mit der selben Funktion auch eine zweite oder dritte LED angeschaltet werden soll? Eine L\xf6sung w\xe4re, die globale Variable ",Object(r.b)("inlineCode",{parentName:"p"},"pinLed")," zu \xe4ndern. Allerdings f\xfchrt das zu einem sehr un\xfcbersichtlichen Code."),Object(r.b)("p",null,"Besser ist es, der Funktion einen ",Object(r.b)("strong",{parentName:"p"},"Parameter zu \xfcbergeben"),", der angibt, welche LED angeschaltet werden soll. Der ",Object(r.b)("strong",{parentName:"p"},"Funktionsparameter")," wird bei der Funktionsdefintion nach dem Funktionsnamen in runden Klammern angegeben. "),Object(r.b)("p",null,"Da es sich bei dem Funktionsparameter um eine Variable handelt, muss zus\xe4tzlich auch der Datentyp des Parameters angegeben werden."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"void anschaltenLed(int pParameter) { // Funktion mit Parameter vom Typ Integer\n  // `pParameter`kann wie eine beliebige Variable genutzt werden\n }\n")),Object(r.b)("p",null,"Innerhalb der Funktion kann der Parameter wie jede andere Variable verwendet werden. Au\xdferhalb der Funktion, also in einer anderen Funktion oder im Hauptprogramm, kann auf den Parameter nicht zugegriffen werden. ",Object(r.b)("strong",{parentName:"p"},"Der G\xfcltigkeitsbereich des Funktionsparameters bezieht sich nur auf die Funktion selbst.")),Object(r.b)("p",null,"Damit ein Funktionsparameter von globalen oder lokalen Variablen unterschieden werden kann, ist es sinnvoll, sie speziell zu Kennzeichnen. An dieser Stelle soll daher die ",Object(r.b)("strong",{parentName:"p"},"Konvention")," eingef\xfchrt werden, dass jeder Funktionsparameter mit einem kleinen ",Object(r.b)("inlineCode",{parentName:"p"},"p"),", gefolgt von einem Gro\xdfbuchstaben,  beginnt (z.B. ",Object(r.b)("inlineCode",{parentName:"p"},"pPinLED")," oder ",Object(r.b)("inlineCode",{parentName:"p"},"pZustand"),")."),Object(r.b)("h4",{id:"beispiel"},"Beispiel"),Object(r.b)("p",null,"Im folgenden Beispiel werden mit einer ",Object(r.b)("strong",{parentName:"p"},"Funktion mit Parametern")," zwei LEDs nacheinander angeschaltet."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-arduino"}),"#define LED1 4\n#define LED2 5\n\n//highlight-start\nvoid anschaltenLed(bool pPinLed){ // Funktionsdefinition mit Paramter\n  digitalWrite(pPinLed, HIGH);\n}\n//highlight-end\n\nvoid setup(){\n  pinMode(LED1,OUTPUT);\n  pinMode(LED2,OUTPUT);\n\n  //highlight-next-line\n  anschaltenLed(LED1);            // Funktionsaufruf mit Parameter\n  delay(500);\n  //highlight-next-line\n  anschaltenLed(LED2);            // Funktionsaufruf mit Parameter\n}\n\nvoid loop(){\n  // bleibt leer\n}\n")),Object(r.b)("p",null," Eine Funktion kann auch ",Object(r.b)("strong",{parentName:"p"},"mehr als einen Parameter")," haben. In diesem Fall werden alle weiteren Parameter durch ein Komma voneinander getrennt in der Funktionsdefinition angegeben:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"void anschaltenLed(int pParameter1, bool pParamter2, float pParameter3) {\n  // Eine Funktion mit mehreren Parametern.\n }\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Als Konvention beginnt der Name eines Funktionsparamters immer mit einem kleinen ",Object(r.b)("inlineCode",{parentName:"p"},"p"),". Zum Beispiel ",Object(r.b)("inlineCode",{parentName:"p"},"pPinLED")," oder ",Object(r.b)("inlineCode",{parentName:"p"},"pZustand"),"."))),Object(r.b)("h2",{id:"aufgaben-1"},"Aufgaben"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(r.b)("strong",{parentName:"h5"},"\xdcben"))),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Schreiben Sie eine Funktion ",Object(r.b)("inlineCode",{parentName:"p"},"blinkenLED(int pPeriodendauer)"),", welche eine LED am Pin 3 blinken l\xe4sst. Der Funktionsparameter soll die Periodendauer in Millisekunden des Blinksignals angeben. Testen Sie die Funktion.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Erweitern Sie die Funktion ",Object(r.b)("inlineCode",{parentName:"p"},"blinkenLED()")," (Aufgabe 1) um einen Parameter f\xfcr den verwendeten LED-Pin. \xdcberpr\xfcfen Sie, ob es mit der Funktion m\xf6glich ist, zwei LEDs gleichzeitig blinken zu lassen."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"int LED1 = 5;\nint LED2 = 6;\n\nvoid loop(){\n  blinkenLED(LED1,1000);\n  blinkenLED(LED2,500);\n}\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Schreiben Sie eine Funktion zum Schalten einer LED. Die Funkion ",Object(r.b)("inlineCode",{parentName:"p"},"schalten(int pPin, bool pZustand)")," soll zwei Paramter erhalten, welche den Pin der LED und den aktuellen Zustand der LED angeben. Nutzen Sie die Funktion, um eine LED blinken zu lassen.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Schreiben Sie eine Funktion ",Object(r.b)("inlineCode",{parentName:"p"},"codierenBuchstabe(char pBuchstabe)")," welche den Morse-Code f\xfcr den angegeben Buchstaben an einer LED als Blink-Muster ausgibt (Es ist ausreichend, wenn die Funktion nur die Buchstaben 'O' und 'S' codieren kann). Nutzen Sie die Funktion, um den Morse-Code f\xfcr ",Object(r.b)("em",{parentName:"p"},"SOS")," ein einer LED ausgeben zu lassen.\nInformieren Sie sich bei Wikipedia \xfcber den ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://de.wikipedia.org/wiki/Morsecode#Zeitschema_und_Veranschaulichung"}),"Morse-Code"),"."),Object(r.b)("p",{parentName:"li"}," Ihre ",Object(r.b)("inlineCode",{parentName:"p"},"loop()")," Funktion sollte  folgenderma\xdfen aussehen:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"void loop() {\n  codierenBuchstabe('S');\n  codierenBuchstabe('O');\n  codierenBuchstabe('S');\n  zeigeWortabstand();     // Zeitlicher Abstand zwischen zwei W\xf6rtern\n}\n")))))),Object(r.b)("h2",{id:"funktionen-mit-r\xfcckgabewert"},"Funktionen mit R\xfcckgabewert"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"int summe(int a, int b){\n  return a+b;\n}\n")),Object(r.b)("h2",{id:"statische-variablen"},"Statische Variablen"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Statische Variablen"),", die innerhalb einer Funktion deklariert werden, existieren auch nach dem Beenden einer Funktion weiter. Das bedeutet, dass sie beim erneuten Ausf\xfchren der Funktion den selben Wert wie beim Beenden des letzten Funktionsaufrufs haben. Sie eignen sich zum Beispiel ",Object(r.b)("strong",{parentName:"p"},"zum Speichern von Zust\xe4nden"),"."),Object(r.b)("p",null,"Im Folgenden Beispiel wird mit der statischen Variablen"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"static bool lZustandLed = false; \n")),Object(r.b)("p",null,"der aktuelle Zustand einer LED gespeichert. "),Object(r.b)("p",null,"Bei jedem Aufruf der Funktion wird der Zustand der Variablen ge\xe4ndert und als digitales Signal ausgegeben. Die LED wird also bei jedem Funktionsaufruf umgeschaltet."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"#define LED1 4\n\n//highlight-start\nvoid umschaltenLed(int pPinLed){\n  //highlight-next-line\n  static bool lZustandLed = false;   // statische Variable, wird nach dem Beenden der Funktion nicht gel\xf6scht \n  lZustandLed != lZustandLed;\n  digitalWrite(pPinLed, lZustandLed);\n}\n//highlight-end\n\nvoid setup(){\n  pinMode(LED1,OUTPUT);\n}\n\nvoid loop(){\n  //highlight-next-line\n  umschaltenLed(LED1);            // Funktionsaufruf mit Parameter\n  delay(500);\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.geeksforgeeks.org/static-variables-in-c/"}),"Static Variables in C")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.c-howto.de/tutorial/variablen-konstanten/statische-variablen/"}),"Statische Variablen"))))}d.isMDXComponent=!0}}]);