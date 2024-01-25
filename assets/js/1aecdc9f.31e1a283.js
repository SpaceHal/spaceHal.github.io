"use strict";(self.webpackChunkspace_hal=self.webpackChunkspace_hal||[]).push([[1809],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),m=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(t),g=i,c=p["".concat(d,".").concat(g)]||p[g]||o[g]||r;return t?a.createElement(c,s(s({ref:n},u),{},{components:t})):a.createElement(c,s({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var m=2;m<r;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=t(7462),i=(t(7294),t(3905));const r={title:"Einen Taster mit Arduino abfragen",sidebar_label:"Taster und if-Verzweigung",description:"Digitale Eingaben (Taster) und if-Verzweigung mit dem Arduino realisieren. Und wozu wird ein Pullup-Widerstand ben\xf6tigt?",custom_edit_url:null,keywords:["arduino welche widerst\xe4nde","Pull Up Widerstand","Pull Down Widerstand","Taster Arduino","Taster Arduino abfragen","Taster Arduino auslesen","Spannung mit Arduino auslesen","Taster mit digitalRead() auslesen","interner Pull-Up-Widerstand Arduino"]},s=void 0,l={unversionedId:"arduino/input",id:"arduino/input",title:"Einen Taster mit Arduino abfragen",description:"Digitale Eingaben (Taster) und if-Verzweigung mit dem Arduino realisieren. Und wozu wird ein Pullup-Widerstand ben\xf6tigt?",source:"@site/docs/arduino/input.md",sourceDirName:"arduino",slug:"/arduino/input",permalink:"/docs/arduino/input",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Einen Taster mit Arduino abfragen",sidebar_label:"Taster und if-Verzweigung",description:"Digitale Eingaben (Taster) und if-Verzweigung mit dem Arduino realisieren. Und wozu wird ein Pullup-Widerstand ben\xf6tigt?",custom_edit_url:null,keywords:["arduino welche widerst\xe4nde","Pull Up Widerstand","Pull Down Widerstand","Taster Arduino","Taster Arduino abfragen","Taster Arduino auslesen","Spannung mit Arduino auslesen","Taster mit digitalRead() auslesen","interner Pull-Up-Widerstand Arduino"]},sidebar:"mySidebar",previous:{title:"Schleifen",permalink:"/docs/arduino/loop"},next:{title:"Funktionen",permalink:"/docs/arduino/functions"}},d={},m=[{value:"Einen Taster mit dem Arduino verbinden",id:"einen-taster-mit-dem-arduino-verbinden",level:2},{value:"Taster mit Pullup-Widerstand verbinden",id:"taster-mit-pullup-widerstand-verbinden",level:3},{value:"<code>pinMode(pin,INPUT)</code>",id:"pinmodepininput",level:3},{value:"Interner Pull-Up Widerstand",id:"interner-pull-up-widerstand",level:2},{value:"Tasterzustand auslesen",id:"tasterzustand-auslesen",level:2},{value:"<code>digitalRead(pin)</code>",id:"digitalreadpin",level:3},{value:"Programm zum Auslesen des Tasterzustands (interner Pullup-Widerstand)",id:"programm-zum-auslesen-des-tasterzustands-interner-pullup-widerstand",level:3},{value:"Die <code>if</code> Verzweigung - Eine bedingte Anweisung",id:"die-if-verzweigung---eine-bedingte-anweisung",level:2},{value:"<code>if ... else if ... else</code>",id:"if--else-if--else",level:3},{value:"Taster-Beispiel mit externem Pullup-Widerstand und <code>if ... else</code> Verzweigung",id:"taster-beispiel-mit-externem-pullup-widerstand-und-if--else-verzweigung",level:2},{value:"Warten auf eine Tastereingabe mit der while-Schleife",id:"warten-auf-eine-tastereingabe-mit-der-while-schleife",level:2},{value:"Ein Taster zum Umschalten",id:"ein-taster-zum-umschalten",level:2}],u={toc:m},p="wrapper";function o(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ein Taster ist ein elektrisches Bauteil, welches einen Stromkreis schlie\xdfen und unterbrechen kann. Mit ihm ist es m\xf6glich, auf einfachste Weise mit dem Arduino zu interagieren, dem Arduino zum Beispiel den Befehl zu geben, eine LED ein- oder auszuschalten. "),(0,i.kt)("img",{src:"/img/arduino/TasterLED.webp",alt:"Eine LED mit Taster steuern",width:"530px",className:"center"}),(0,i.kt)("p",null,"In diesem Abschnitt wird erkl\xe4rt,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mit welcher Schaltung ein Taster korrekt an den Arduino ",(0,i.kt)("a",{parentName:"li",href:"#einen-taster-mit-dem-arduino-verbinden"},"angeschlossen")," wird,"),(0,i.kt)("li",{parentName:"ul"},"mit welchem Arduino-Befehl der Zustand des Tasters ",(0,i.kt)("a",{parentName:"li",href:"#tasterzustand-auslesen"},"abgefragt")," werden kann"),(0,i.kt)("li",{parentName:"ul"},"und wie diese Information genutzt wird, um zum Beispiel eine ",(0,i.kt)("a",{parentName:"li",href:"#die-if-verzweigung---eine-bedingte-anweisung"},"LED zu schalten"),".")),(0,i.kt)("h2",{id:"einen-taster-mit-dem-arduino-verbinden"},"Einen Taster mit dem Arduino verbinden"),(0,i.kt)("img",{src:"/img/arduino/ohnePullUpWiderstand.svg",alt:"Taster ohne Pullup-Widerstand",width:"530px",className:"center"}),(0,i.kt)("p",null,"Die einfachste M\xf6glichkeit, einen Taster anzuschlie\xdfen, w\xe4re, ihn direkt mit einer Spannungsquelle (Vcc) und einem Arduino-Pin zu verbinden (",(0,i.kt)("em",{parentName:"p"},"Abb. links"),"). Ein digitaler Arduino-Pin, welcher als Input konfiguriert ist, weist einen sehr hohen Innenwiderstand (",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mo",{parentName:"mrow"},"\u2248"),(0,i.kt)("mn",{parentName:"mrow"},"100"),(0,i.kt)("mtext",{parentName:"mrow"},"\xa0M"),(0,i.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a9")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\approx 100 \\text{ M}\\Omega")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4831em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"\u2248"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"100"),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"\xa0M")),(0,i.kt)("span",{parentName:"span",className:"mord"},"\u03a9"))))),") auf. Wird der Taster nun gedr\xfcckt, so w\xfcrde die gesamte Spannung am Eingangspin abfallen. In unserem Beispiel also  ca. 5V am Pin 3."),(0,i.kt)("p",null,"Ist der Taster jedoch ",(0,i.kt)("strong",{parentName:"p"},"offen"),", so w\xe4re das Potential am Eingangspin unbestimmt oder auch schwebend (",(0,i.kt)("em",{parentName:"p"},"engl.: floating"),") und nicht, wie man annehmen k\xf6nnte, null. In Abh\xe4ngigkeit von der Umgebung (z.B. eine Hand, die sich der Schaltung n\xe4hert) \xe4ndert sich die anliegende Spannung, und der Zustand des Pins ist unvorhersehbar (HIGH oder LOW)."),(0,i.kt)("p",null,"Um das zu \xe4ndern, m\xfcsste der Pin au\xdferdem mit der Masse verbunden werden. In der rechten Abbildung ist genau das geschehen, nur mit dem Unterschied, dass der Taster zwischen dem Pin und der Masse liegt. Ist der Taster offen, w\xe4re alles in Ordnung (am Pin liegen dann Vcc","\xa0","=","\xa0","5V). Problematisch wird es aber, wenn der Taster gedr\xfcckt wird. Dann entsteht ein ",(0,i.kt)("strong",{parentName:"p"},"Kurzschluss")," zwischen Vcc und GND, was unbedingt vermieden werden sollte."),(0,i.kt)("h3",{id:"taster-mit-pullup-widerstand-verbinden"},"Taster mit Pullup-Widerstand verbinden"),(0,i.kt)("img",{src:"/img/arduino/PullUpWiderstand.svg",alt:"Pullup-Widerstand an einem Taster",width:"450px",className:"center"}),(0,i.kt)("p",null,"Zum Verhindern eines Kurzschlusses beim Schlie\xdfen des Tasters wird zwischen Vcc und dem Taster ein Widerstand eingef\xfcgt. Ist der Taster offen, wird die Eingangsspannung des Pins auf die angeschlossene Spannung Vcc hochgezogen, ohne dass es einen Kurzschluss gibt. Daher auch der Name ",(0,i.kt)("strong",{parentName:"p"},"Pullup-Widerstand"),". Ist der Taster geschlossen, so ist der Pin direkt mit der Masse verbunden und die Spannung betr\xe4gt 0V."),(0,i.kt)("p",null,"Geeignete Werte f\xfcr einen Pullup-Widerstand sind ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msub",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msub"},"R"),(0,i.kt)("mtext",{parentName:"msub"},"pull")),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mn",{parentName:"mrow"},"10"),(0,i.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,i.kt)("mi",{parentName:"mrow"},"k"),(0,i.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a9"),(0,i.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,i.kt)("mo",{parentName:"mrow"},"\u22ef"),(0,i.kt)("mn",{parentName:"mrow"},"50"),(0,i.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,i.kt)("mi",{parentName:"mrow"},"k"),(0,i.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a9")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R_\\text{pull} = 10\\, k\\Omega\\ \\cdots 50\\, k\\Omega")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0077em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord text mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"pull"))))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,i.kt)("span",{parentName:"span"})))))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"10"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,i.kt)("span",{parentName:"span",className:"mord"},"\u03a9"),(0,i.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"minner"},"\u22ef"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"50"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,i.kt)("span",{parentName:"span",className:"mord"},"\u03a9"))))),"."),(0,i.kt)("h3",{id:"pinmodepininput"},(0,i.kt)("inlineCode",{parentName:"h3"},"pinMode(pin,INPUT)")),(0,i.kt)("p",null,"Damit der Arduino wei\xdf, dass der mit dem Taster (und dem Pullup-Widerstand) verbundene Pin als Eingang betrieben wird, muss dies dem Arduino mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"pinMode(pin,INPUT)")," mitgeteilt werden. Der Befehl konfiguriert den angegeben ",(0,i.kt)("inlineCode",{parentName:"p"},"pin")," als Eingang (",(0,i.kt)("inlineCode",{parentName:"p"},"INPUT"),"). "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"#define PIN_TASTER 3  \npinMode(PIN_TASTER, INPUT);  // Pin als Eingang\n")),(0,i.kt)("p",null,"Die Konfiguration mit ",(0,i.kt)("inlineCode",{parentName:"p"},"pinMode()")," sollte immer in der ",(0,i.kt)("inlineCode",{parentName:"p"},"void setup()")," Funktion durchgef\xfchrt werden."),(0,i.kt)("h2",{id:"interner-pull-up-widerstand"},"Interner Pull-Up Widerstand"),(0,i.kt)("p",null,"Alternativ zu einem externen Pullup-Widerstand, der extra in die Schaltung eingef\xfcgt werden muss, gibt es beim Arduino auch die M\xf6glichkeit, einen ",(0,i.kt)("strong",{parentName:"p"},"internen Pullup-Widerstand")," zu verwenden. Jeder Eingangspin des Arduinos besitzt einen zuschaltbaren Pullup-Widerstand, der vom Benutzer aktiviert werden kann. Ist der interne Pullup-Widerstand wie in der folgenden Abbildung aktiviert, kann ein Taster \xfcber die Masse (GND) direkt mit einem Eingangspin des Arduinos verbunden werden. Ein zus\xe4tzlicher externer Pullup-Widerstand wird dann nicht mehr ben\xf6tigt."),(0,i.kt)("img",{src:"/img/arduino/intPullUpWiderstand.svg",alt:"Interner Pullup-Widerstand beim Arduino",width:"350px",className:"center"}),(0,i.kt)("p",null,"Mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"pinMode()")," und dem Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"INPUT_PULLUP")," wird der interne Pullup-Widerstand f\xfcr den angegebenen Pin aktiviert."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"/* INTERNEN Pullup-Widerstand aktivieren */\n#define PIN_TASTER 3  \npinMode(PIN_TASTER, INPUT_PULLUP); // Eingang mit Pullup-Widerstand konfigurieren\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Ein Taster sollte immer mit einem Pullup- oder Pulldown-Widerstand verwendet werden, da der Spannungszustand des Taster-Pins sonst nicht stabil ist und der Zustand des Eingangspins sich zuf\xe4llig \xe4ndern kann.")),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Was passiert, wenn ein Taster direkt (also ohne Pullup-Widerstand) mit dem Arduino verbunden wird."),(0,i.kt)("li",{parentName:"ol"},"Ein Taster ist mit einem Pullup-Widerstand mit dem Arduino verbunden. Welches Level (HIGH oder LOW) liegt am Arduino an, wenn der Taster offen bzw. geschlossen ist? Erl\xe4utern Sie Ihre Antwort."),(0,i.kt)("li",{parentName:"ol"},"In der Abbildung ist ein Pull-Down-Widerstand dargestellt. Analysieren Sie, welchen Zustand (Spannung) der angeschlossene Pin aufweist, wenn der Taster a) geschlossen und b) ge\xf6ffnet ist. (Begr\xfcndung nicht vergessen.)",(0,i.kt)("img",{src:"/img/arduino/PullDown.png",alt:"Pulldown-Widerstand beim Taster",width:"170px",className:"center"})))),(0,i.kt)("h2",{id:"tasterzustand-auslesen"},"Tasterzustand auslesen"),(0,i.kt)("p",null,"Nachdem der Taster entweder mit einem externen oder einem internen Pull-Up-Widerstand angeschlossen wurde, kann der Zustand des Tasters, also ob er offen oder geschlossen ist, mit der Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"digitalRead()")," ausgelesen werden:"),(0,i.kt)("h3",{id:"digitalreadpin"},(0,i.kt)("inlineCode",{parentName:"h3"},"digitalRead(pin)")),(0,i.kt)("p",null,"Liest den digitalen Zustand eines Pins ein und gibt entsprechend der Spannung am Pin als R\xfcckgabewert ",(0,i.kt)("inlineCode",{parentName:"p"},"LOW")," (",(0,i.kt)("inlineCode",{parentName:"p"},"0"),") oder ",(0,i.kt)("inlineCode",{parentName:"p"},"HIGH")," (",(0,i.kt)("inlineCode",{parentName:"p"},"1"),") zur\xfcck."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"bool zustandTaster = digitalRead(PIN_TASTER); // Tasterzustand einlesen\n")),(0,i.kt)("h3",{id:"programm-zum-auslesen-des-tasterzustands-interner-pullup-widerstand"},"Programm zum Auslesen des Tasterzustands (interner Pullup-Widerstand)"),(0,i.kt)("p",null,"In dem folgenden ersten Beispielprogram f\xfcr einen Taster, wird der Taster mit einem ",(0,i.kt)("a",{parentName:"p",href:"#interner-pull-up-widerstand"},"internen Pullup-Widerstand")," betrieben, weshalb\nder Taster einfach nur \xfcber Masse (GND) mit dem Arduinopin (hier Pin ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),") verbunden wird. Das der interne Pullup-Widerstand aktiviert verwendet werden soll, muss dem Arduino mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"pinMode(PIN_TASTER, INPUT_PULLUP)")," mitgeteilt werden."),(0,i.kt)("img",{src:"/img/arduino/BreadboardButton.png",alt:"Taster mit internem Pullupwiderstand verbunden",width:"700px",className:"center"}),(0,i.kt)("p",null,"Das folgende Programm liest in der ",(0,i.kt)("inlineCode",{parentName:"p"},"loop()"),"-Funktion regelm\xe4\xdfig den Zustand des Tasterpins aus und sendet den Zustand des Tasters zum seriellen Monitor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title=" https://wokwi.com/arduino/projects/319082549116666451 "',title:'"',"https://wokwi.com/arduino/projects/319082549116666451":!0,'"':!0},'/* Einfaches Beispiel zum Einlesen des Tasterzustandes */\n\n# define PIN_TASTER 3   // Pin Taster\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(PIN_TASTER, INPUT_PULLUP); // Eingang mit Pullup-Widerstand\n}\nvoid loop() {\n  bool zustandTaster = digitalRead(PIN_TASTER); // Tasterzustand einlesen\n\n  Serial.print("Zustand Taster: ");\n  Serial.println(zustandTaster);\n}\n')),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Bauen Sie eine Schaltung mit einem Taster (interner Pullup-Widerstand) und einer LED auf. \xc4ndern Sie das ",(0,i.kt)("a",{parentName:"li",href:"#programm-zum-auslesen-des-tasterzustands-interner-pullup-widerstand"},"Programm")," so, dass die angeschlossene LED solange leuchtet, wie der Taster ",(0,i.kt)("strong",{parentName:"li"},"nicht gedr\xfcckt ist"),". Ist der Taster gedr\xfcckt, soll die angeschlossene LED ausgehen. Verwenden Sie keine ",(0,i.kt)("inlineCode",{parentName:"li"},"if"),"-",(0,i.kt)("inlineCode",{parentName:"li"},"else"),"-Verzweigung."))),(0,i.kt)("h2",{id:"die-if-verzweigung---eine-bedingte-anweisung"},"Die ",(0,i.kt)("inlineCode",{parentName:"h2"},"if")," Verzweigung - Eine bedingte Anweisung"),(0,i.kt)("p",null,"Hat man den Status eines Tasters eingelesen, m\xf6chte man in aller Regel den weiteren Programmablauf vom Tasterzustand abh\xe4ngig machen. Hierf\xfcr eignet sich die ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," Verzweigung als bedingte Anweisung."),(0,i.kt)("img",{src:"/img/arduino/ifCondition.png",alt:"drawing",width:"320px",className:"center"}),(0,i.kt)("p",null,"Nach dem Schl\xfcsselwort ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," folgt in Klammern eine Bedingung. Diese Bedingung kann zum Beispiel ein Vergleich ",(0,i.kt)("inlineCode",{parentName:"p"},"zahl==1")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"zahl>1")," sein. Ist die Bedingung wahr, also ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", dann wird der in geschweiften Klammern ",(0,i.kt)("inlineCode",{parentName:"p"},"{ ... }"),"  stehende Code ausgef\xfchrt. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},'int zahl = 6;\n\nif( zahl > 6 )\n{\n  Serial.println("Die Zahl ist gr\xf6\xdfer als 6.");\n}\n')),(0,i.kt)("h3",{id:"if--else-if--else"},(0,i.kt)("inlineCode",{parentName:"h3"},"if ... else if ... else")),(0,i.kt)("p",null,"Oft kommt es aber vor, dass in einem Programm viele verschiedene Verzweigungen ben\xf6tigt werden, wobei f\xfcr jede einzelne Verzweigung eine Bedingung ben\xf6tigt wird. Hierf\xfcr stehen die Schl\xfcsselw\xf6rter ",(0,i.kt)("inlineCode",{parentName:"p"},"else if")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," zur Verf\xfcgung."),(0,i.kt)("img",{src:"/img/arduino/ifElseIfCondition.png",alt:"drawing",width:"430px",className:"center"}),(0,i.kt)("p",null,"Ist die Bedingung  einer ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," Anweisung ",(0,i.kt)("strong",{parentName:"p"},"nicht erf\xfcllt"),", so wird als n\xe4chstes \xfcberpr\xfcft, ob eine ",(0,i.kt)("inlineCode",{parentName:"p"},"else if")," Anweisung gegeben ist und ob deren Bedingung erf\xfcllt ist. In einer ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," Verzweigung k\xf6nnen beliebig viele  ",(0,i.kt)("inlineCode",{parentName:"p"},"else if")," Anweisungen angegeben werden, welche alle nacheinander abgearbeitet werden."),(0,i.kt)("p",null,"Mit dem abschlie\xdfenden Schl\xfcsselwort ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," k\xf6nnen Anweisungen f\xfcr den Fall angegeben werden, dass keine der bei ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"else if")," angegebenen Bedingungen wahr ist. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},'int zahl = 6;\n\nif( zahl < 6 )\n{\n  Serial.println("Die Zahl ist kleiner als 6.");\n}\n// Bedingung k\xf6nnen mit && als logisches UND verkn\xfcpft werden\nelse if( (zahl >= 6) &&  (zahl <= 10))  \n{\n  Serial.println("Die Zahl liegt zwischen 6 und 10.");\n}\nelse // ohne Bedingung\n{\n  Serial.println("Die Zahl ist gr\xf6\xdfer als 10.");\n}\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Sobald eine Bedingung in  einer ",(0,i.kt)("inlineCode",{parentName:"p"},"if ... else if")," Verzweigung erf\xfcllt ist, wird der zugeh\xf6rige Code ausgef\xfchrt. Weitere, noch nicht \xfcberpr\xfcfte Bedingungen werden ignoriert und nicht mehr \xfcberpr\xfcft.")),(0,i.kt)("h2",{id:"taster-beispiel-mit-externem-pullup-widerstand-und-if--else-verzweigung"},"Taster-Beispiel mit externem Pullup-Widerstand und ",(0,i.kt)("inlineCode",{parentName:"h2"},"if ... else")," Verzweigung"),(0,i.kt)("p",null,"Im folgenden Beispiel soll exemplarisch der Zustand eines Tasters vom Arduino ausgelesen und mit einer ",(0,i.kt)("inlineCode",{parentName:"p"},"if ... else")," Verzweigung drauf reagiert werden. Ist der Taster gedr\xfcckt, soll eine angeschlossene ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/helloworld"},"LED")," aufleuchten, ist er nicht gedr\xfcckt, soll nichts passieren. "),(0,i.kt)("img",{src:"/img/arduino/BreadBoard_ButtonLED.png",alt:"drawing",width:"650px",className:"center"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title=" https://wokwi.com/arduino/projects/319152604722496082 "',title:'"',"https://wokwi.com/arduino/projects/319152604722496082":!0,'"':!0},"// Einfaches Beispiel zum Einlesen des Tasterzustandes \n// Taster ben\xf6tigt einen externen Pullup-Widerstand.\n\n# define PIN_LED 8  // Pin LED\n# define PIN_TASTER 3   // Pin Taster\n\nvoid setup() {\n  pinMode(PIN_LED, OUTPUT);   // Pin als Ausgang definieren\n  pinMode(PIN_TASTER, INPUT); // Pin als Eingang definieren (externer Pullup-Wid.)\n}\nvoid loop() {\n  int zustandTaster = digitalRead(PIN_TASTER); // Tasterzustand einlesen\n\n  // Pr\xfcfen des Tasterzustandes:\n  if (zustandTaster == LOW) { //wenn gedr\xfcckt (LOW) ...\n    digitalWrite(PIN_LED, HIGH); // LED anschalten\n  } else { // sonst ...\n    digitalWrite(PIN_LED, LOW); // ansonsten LED ausschalten\n  }\n}\n")),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\xc4ndern sie das ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/input#einfaches-taster-beispiel"},"Beispielprogramm")," so, dass beim Dr\xfccken des Tasters eine angeschlossene LED blinkt (1 Sekunde an, 1 Sekunde aus). Verh\xe4lt sich ihr Programm, wie Sie es erwarten?")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\xc4ndern Sie die obige ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/input#einfaches-taster-beispiel"},"Beispielschaltung")," und nutzen Sie anstelle des externen, einen ",(0,i.kt)("strong",{parentName:"p"},"internen Pullup-Widerstand"),". \xc4ndern Sie hierf\xfcr auch den Programmcode.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\xc4ndern Sie die obige ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/input#einfaches-taster-beispiel"},"Beispielschaltung")," (",(0,i.kt)("strong",{parentName:"p"},"ohne \xc4nderung im Programmcode)")," so, dass die LED beim Dr\xfccken des Tasters ausgeschaltet wird. Sie also leuchtet, wenn der Taster nicht gedr\xfcckt ist. Bauen sie die Schaltung auf und dokumentieren Sie diese z.B. mit ",(0,i.kt)("a",{parentName:"p",href:"https://fritzing.org/home/"},"Fritzing"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Bauen Sie eine Schaltung mit zwei LEDs und zwei Tastern auf. Schreiben Sie anschlie\xdfend ein Programm mit folgenden Eigenschaften:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Die erst LED leuchtet, wenn der Taster 1 gedr\xfcckt ist."),(0,i.kt)("li",{parentName:"ol"},"Die zweite LED leuchtet, wenn der Taster 2 gedr\xfcckt ist."),(0,i.kt)("li",{parentName:"ol"},"Beide LEDs leuchten, wenn beide Taster gedr\xfcckt sind."),(0,i.kt)("li",{parentName:"ol"},"Verwenden Sie nur ",(0,i.kt)("strong",{parentName:"li"},"eine")," ",(0,i.kt)("inlineCode",{parentName:"li"},"if ... else if ... else if ... else")," Verzweigung."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches mit ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial.print()")," auf dem seriellen Monitor alle Zahlen von 0 bis 100 ausgibt. Als Ausnahme soll jedoch f\xfcr jede Zahl, die durch 3 teilbar ist, ",(0,i.kt)("em",{parentName:"p"},"Fizz")," und f\xfcr jede Zahl, die durch 5 teilbar ist, ",(0,i.kt)("em",{parentName:"p"},"Buzz")," ausgegeben werden.\nWenn Ihr Programm funktioniert, erweitern Sie es so, dass es ",(0,i.kt)("em",{parentName:"p"},"FizzBuzz")," ausgibt, wenn die Zahl durch 3 und 5 teilbar ist."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Hinweis: Verwenden Sie den ",(0,i.kt)("a",{parentName:"em",href:"https://www.arduino.cc/reference/de/language/structure/arithmetic-operators/modulo/"},"Modulo-Opertor")," ",(0,i.kt)("inlineCode",{parentName:"em"},"%")," f\xfcr die Division mit Rest."))))),(0,i.kt)("h2",{id:"warten-auf-eine-tastereingabe-mit-der-while-schleife"},"Warten auf eine Tastereingabe mit der while-Schleife"),(0,i.kt)("p",null,"Manchmal ist es ganz gut, wenn ein Programm solange pausiert, bis ein Taster gedr\xfcckt wird. Wird der ausgelesen Wert des Tasters als Bedingung f\xfcr eine ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),"-Schleife verwendet, kann genau das erreicht werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title=" https://wokwi.com/arduino/projects/319081873886151252 "',title:'"',"https://wokwi.com/arduino/projects/319081873886151252":!0,'"':!0},'/* Mit einer while-Schleife auf eine Tastereingabe warten. */\n\n#define TASTER 11\nvoid setup() {\n    pinMode(TASTER, INPUT_PULLUP);\n    Serial.begin(115200);\n}\n\nvoid loop() {\n  // Die while-Schleife wird beendet, wenn der Taster gedr\xfcckt wurde.\n  while(digitalRead(TASTER)){ }\n\n  Serial.println("Der Taster ist gedr\xfcckt.");\n}\n')),(0,i.kt)("h2",{id:"ein-taster-zum-umschalten"},"Ein Taster zum Umschalten"),(0,i.kt)("p",null,"Wird mit einem Taster eine LED gesteuert, so sollte die LED ",(0,i.kt)("strong",{parentName:"p"},"beim ersten Dr\xfccken des Tasters angehen")," und ",(0,i.kt)("strong",{parentName:"p"},"beim zweiten Dr\xfccken wieder ausgehen"),". Anstatt also die LED einfach anzuschalten, wenn der Taster gedr\xfcckt ist, muss sich das System den Zustand der LED und des Tasters merken und entsprechend den Zustand der LED \xe4ndern."),(0,i.kt)("p",null,"In dem folgenden unvollst\xe4ndigen Programm wird der Zustand der LED mit der Variable ",(0,i.kt)("inlineCode",{parentName:"p"},"statusLED")," gespeichert. Damit des Programm zus\xe4tzlich erkennen kann, ob der Taster gerade gedr\xfcckt wurde, es also eine Zustands\xe4nderung des Tasters von ",(0,i.kt)("em",{parentName:"p"},"nicht gedr\xfcckt")," (",(0,i.kt)("inlineCode",{parentName:"p"},"1"),") zu ",(0,i.kt)("em",{parentName:"p"},"gedr\xfcckt")," (",(0,i.kt)("inlineCode",{parentName:"p"},"0"),") gibt, werden zwei zus\xe4tzliche boolsche Variablen ",(0,i.kt)("inlineCode",{parentName:"p"},"statusTaster")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"statusTasterLetzter")," ben\xf6tigt."),(0,i.kt)("p",null,"Zum \xdcberpr\xfcfen, ob der Taster gerade gedr\xfcckt wurde, muss in der ",(0,i.kt)("inlineCode",{parentName:"p"},"loop()")," Funktion der aktuelle Tasterzustand mit dem Tasterzustand beim letzten Aufruf von ",(0,i.kt)("inlineCode",{parentName:"p"},"loop()")," verglichen werden. Hat sich der Zustand ge\xe4ndert, wird anschlie\xdfend \xfcberpr\xfcft, ob der Taster aktuell gedr\xfcckt ist. Wenn dem so ist, kann dann die LED umgeschaltet werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"/* Unvollst\xe4ndiger Code f\xfcr eine tastergesteuerte LED. */\n\n#define TASTER 3          // Taster-Pin mit Pull-UP Widerst. (LOW = gedr\xfcckt)\n#define LED 13            // an Schaltung anpassen\n\n//highlight-start\nbool statusLED = LOW;             // aktueller Status der LED \nbool statusTaster = HIGH;         // aktueller Status des Taster\nbool statusTasterLetzter = HIGH;  // vorheriger Status des Tasters\n//highlight-end\n\nvoid setup(){\n  //   TASTER mit Pull-UP-Widerstand konfigurieren\n  //   LED konfigurieren \n} \n\nvoid loop(){\n  statusTaster = digitalRead(TASTER); // Taster-Pin einlesen\n    \n    // WENN (aktueller Tasterstatus anders ist als der letzte Tasterstatus)\n    //      WENN (Taster gedr\xfcckt)\n    //         Status der LED \xe4ndern (statusLED)             \n  \n  statusTasterLetzter = statusTaster; // aktualisieren des letzten Tasterstatus\n  digitalWrite(LED,statusLED);\n} \n")),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lesen Sie den unvollst\xe4ndigen Programmcode f\xfcr eine ",(0,i.kt)("a",{parentName:"p",href:"#ein-taster-zum-umschalten"},"umschaltbare LED")," sorgf\xe4ltig durch und erg\xe4nzen Sie die fehlenden Programmteile. Sollte sich die LED nicht verhalten wie gew\xfcnscht, nutzen Sie die ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/seriell"},"serielle Schnittstelle")," zum Debuggen.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"F\xfcgen Sie in Ihr Programm eine Z\xe4hlvariable ein, welche bei jedem Bet\xe4tigen des Tasters um eins erh\xf6ht wird. Geben Sie den Wert der Z\xe4hlvariable \xfcber die serielle Schnittstelle auf dem PC aus. Nutzen Sie f\xfcr die serielle Schnittstelle eine hohe Baudrate (115.200  baud)."),(0,i.kt)("p",{parentName:"li"},"Analysieren Sie das Verhalten der Z\xe4hlvariablen.")))))}o.isMDXComponent=!0}}]);