"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[7286],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return c}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(r),c=i,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||a;return r?t.createElement(h,l(l({ref:n},u),{},{components:r})):t.createElement(h,l({ref:n},u))}));function c(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7322:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var t=r(3117),i=r(102),a=(r(7294),r(3905)),l=["components"],o={title:"Debuggen mit der seriellen Schnittstelle",sidebar_label:"2. Serielle Schnittstelle",description:"Mit der seriellen Schnittstelle Arduino-Programme debuggen.",custom_edit_url:null,keywords:["Arduino","Unterricht","Schule","Serieller Monitor","Serielle Schnittstelle","Aufgaben"]},s=void 0,d={unversionedId:"arduino/seriell",id:"arduino/seriell",isDocsHomePage:!1,title:"Debuggen mit der seriellen Schnittstelle",description:"Mit der seriellen Schnittstelle Arduino-Programme debuggen.",source:"@site/docs/arduino/seriell.md",sourceDirName:"arduino",slug:"/arduino/seriell",permalink:"/docs/arduino/seriell",editUrl:null,tags:[],version:"current",lastUpdatedAt:1630426919,formattedLastUpdatedAt:"31.8.2021",frontMatter:{title:"Debuggen mit der seriellen Schnittstelle",sidebar_label:"2. Serielle Schnittstelle",description:"Mit der seriellen Schnittstelle Arduino-Programme debuggen.",custom_edit_url:null,keywords:["Arduino","Unterricht","Schule","Serieller Monitor","Serielle Schnittstelle","Aufgaben"]},sidebar:"sideBarArduino",previous:{title:"1. Blinkende LED",permalink:"/docs/arduino/helloworld"},next:{title:"3. Variablen",permalink:"/docs/arduino/variable"}},u=[{value:"Die serielle Schnittstelle",id:"die-serielle-schnittstelle",children:[],level:2},{value:"Einfaches Beispiel",id:"einfaches-beispiel",children:[],level:2},{value:"Serieller Monitor",id:"serieller-monitor",children:[{value:"<code>Serial.begin()</code>",id:"serialbegin",children:[],level:3},{value:"<code>Serial.println()</code>",id:"serialprintln",children:[],level:3},{value:"Einfache Formatierung",id:"einfache-formatierung",children:[],level:3}],level:2},{value:"Aufgaben",id:"aufgaben",children:[],level:2},{value:"Text  mit <code>sprintf()</code> Formatieren",id:"text--mit-sprintf-formatieren",children:[{value:"Erl\xe4uterungen",id:"erl\xe4uterungen",children:[],level:3}],level:2}],m={toc:u};function p(e){var n=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bisher ist die Kommunikation mit dem Arduino relativ einseitig. Es wird ein Programm am PC geschrieben, auf den Arduino \xfcbertragen und anschlie\xdfend leuchtet eine LED auf. Auf dem PC wird das Programm geschrieben, der Arduino f\xfchrt es aus. Wenn das Programm funktioniert, die LEDs also wie gew\xfcnscht aufleuchten, ist alles gut. Sollte das Programm aber nicht auf Anhieb funktionieren (was leider meistens der Fall ist), w\xe4re es w\xfcnschenswert, wenn uns der Arduino Informationen zum PC zur\xfcckschickt, damit wir untersuchen k\xf6nnen, wo das Programm evtl. fehlerhaft ist."),(0,a.kt)("h2",{id:"die-serielle-schnittstelle"},"Die serielle Schnittstelle"),(0,a.kt)("p",null,"Die serielle Schnittstelle ist eine M\xf6glichkeit, nach dem Hochladen des Programms mit dem Arduino zu kommunizieren. Sie erm\xf6glicht es, \xfcber den USB-Anschluss Daten vom Arduino zu empfangen, aber auch Daten zum Arduino zu senden. Hierbei bedeutet seriell, dass die Daten, \xe4hnlich wie beim Morsen, nacheinander \xfcbertragen werden."),(0,a.kt)("p",null,"Auf den meisten Arduino-Boards befinden sich zwei mit ",(0,a.kt)("em",{parentName:"p"},"RX")," und ",(0,a.kt)("em",{parentName:"p"},"TX")," markierte LEDs. Diese LEDs zeigen an, ob mit der seriellen Schnittstelle gerade Daten empfangen (RX - receive) oder gesendet (TX - transmit) werden. Falls die serielle Schnittstelle mal nicht funktioniert, ist ein Blick auf die beiden LEDs immer ganz hilfreich. (Warum leuchten die RX und TX LEDs beim Hochladen des Programms?)"),(0,a.kt)("h2",{id:"einfaches-beispiel"},"Einfaches Beispiel"),(0,a.kt)("p",null,'In einem einfachen Beispiel soll der Arduino "Hallo Welt!" zum PC schicken, so dass es mit dem ',(0,a.kt)("em",{parentName:"p"},"seriellen Monitor")," in der Arduino IDE gelesen werden kann."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},'/* Dieses Beispiel zeigt, wie vom Arduino Daten zum PC gesendet werden */\n\nint zaehler = 0;\n\nvoid setup(){\n  Serial.begin(9600);         // initialisieren der seriellen Schnittstelle \n  Serial.println("Das wird nur einmal ausgegeben.");\n}\nvoid loop(){  \n  Serial.print("Zaehlerstand: "); // Text ohne Zeilenvorsprung schreiben\n  Serial.println(zaehler);        // Wert der Variablen schreiben\n  zaehler = zaehler + 1;\n  }\n')),(0,a.kt)("h2",{id:"serieller-monitor"},"Serieller Monitor"),(0,a.kt)("p",null,"\xd6ffnen Sie mit dem Lupensymbol oben rechts in der Arduino IDE den seriellen Monitor. Stellen Sie sicher, dass im seriellen Monitor unten rechts die Baudrate 9600 eingestellt ist. Testen Sie das Programm auf Ihrem Arduino."),(0,a.kt)("img",{src:"/img/arduino/ArduinoSeriell.png",alt:"Arduino Serieller Monitor",width:"80%"}),(0,a.kt)("h3",{id:"serialbegin"},(0,a.kt)("inlineCode",{parentName:"h3"},"Serial.begin()")),(0,a.kt)("p",null,"Damit die serielle Schnittstelle benutzt werden kann, muss diese zuerst ",(0,a.kt)("strong",{parentName:"p"},"initialisiert")," werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"Serial.begin(9600);             // initialisiert die serielle Schnittstelle mit 9600 bps (Baud)\n")),(0,a.kt)("p",null,"Im Gegensatz zu den anderen Befehlen, die bisher verwendet wurden, wird hier dem eigentlichen Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"begin(9600)")," durch einen Punkt getrennt das Word ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial")," vorangestellt. Hierbei handelt es sich um einen Methodenaufruf aus der ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial"),"-Klasse. Als Argument wird dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial.begin(9600)")," die \xdcbertragungsgeschwindigkeit in Baud (Symbolrate) angegeben. In diesem Fall entspricht 1 Baud genau 1 bit/s. Oft werwendete Datenraten sind 9600, 57600 oder 115200 bit/s. Die im Programm konfigurierte Baudrate muss auch im seriellen Monitor eingestellt werden!"),(0,a.kt)("h3",{id:"serialprintln"},(0,a.kt)("inlineCode",{parentName:"h3"},"Serial.println()")),(0,a.kt)("p",null,"Zum ",(0,a.kt)("strong",{parentName:"p"},"Senden von Daten")," stehen die Funktionen ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial.println()")," (mit Zeilenvorschub) und ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial.print()")," (ohne Zeilenvorschub) zur Verf\xfcgung. Mit ",(0,a.kt)("inlineCode",{parentName:"p"},"print()")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"println()")," kann reiner Text (in Anf\xfchrungszeichen: ",(0,a.kt)("inlineCode",{parentName:"p"},'"Text"'),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},'  Serial.print("Zaehlerstand: "); // Text ohne Zeilenvorsprung schreiben\n')),(0,a.kt)("p",null,"oder aber auch der Wert von Variablen geschrieben werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"  Serial.println(zaehler);        // Wert der Variablen schreiben\n")),(0,a.kt)("p",null,"In der Arduino-Referenz ",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/de/language/functions/communication/serial/"},(0,a.kt)("em",{parentName:"a"},"(Link)"))," werden weitere Befehle und Beispiele f\xfcr die serielle Schnittstelle beschrieben."),(0,a.kt)("h3",{id:"einfache-formatierung"},"Einfache Formatierung"),(0,a.kt)("p",null,"Mit dem ",(0,a.kt)("inlineCode",{parentName:"p"},"print()")," bzw. ",(0,a.kt)("inlineCode",{parentName:"p"},"println()")," Befehl kann der auszugebene Text auch ein wenig formatiert werden. Hierf\xfcr werden besonderen Zeichen verwendet. Zum Erzeugen eines Tabulators (ca. 4 Leerzeichen) wird ",(0,a.kt)("inlineCode",{parentName:"p"},"\\t")," und zum Einf\xfcgen eines Zeilenvorschubs wird ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," verwendet. Das Beispiel soll die Verwendung verdeutlichen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Serial.print("Wert1: ");\nSerial.print(11);\nSerial.print("\\tWert2: "); // Tabulatur durch `\\t` vor `Wert2`\nSerial.print(12);\nSerial.print("\\nWert1: "); // Zeilenvorschub durch `\\n` vor `Wert1` (ohne println())\nSerial.print(21);\nSerial.print("\\tWert2: "); // Tabulatur durch `\\t` vor `Wert2`\nSerial.print(22);\n')),(0,a.kt)("p",null,"Ausgabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Wert1: 11    Wert2: 12\nWert1: 21    Wert2: 22\n")),(0,a.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,a.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches \xfcber die serielle Schnittstelle genau einmal "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"Das Programm ist gestartet.\n")),(0,a.kt)("p",{parentName:"li"},"ausgibt. Anschlie\xdfend soll das Programm fortlaufend den Satz "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"Das Programm ist aktiv.\nDas Programm ist aktiv.\n")),(0,a.kt)("p",{parentName:"li"},"ausgeben."))))),(0,a.kt)("h2",{id:"text--mit-sprintf-formatieren"},"Text  mit ",(0,a.kt)("inlineCode",{parentName:"h2"},"sprintf()")," Formatieren"),(0,a.kt)("p",null,"In der Regel reichen die Befehle ",(0,a.kt)("inlineCode",{parentName:"p"},"Seriel.print()")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial.println()")," aus, um Daten in einer ",(0,a.kt)("em",{parentName:"p"},"sch\xf6nen")," Formatierung auf dem seriellen Monitor auszugeben. Trotzdem kann es hilfreich sein, mit dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"sprintf()")," Daten in einer vorgegeben Art zu formatieren, zum Beispiel durch die Angabe der Stellen nach dem Komma, oder auch der Stellen vor dem Komma."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"void setup(){\n  Serial.begin(9600);\n  char zeichenkette[20];  // Zeichenkette, in welche sprintf() die formatierten Daten schreibt\n\n  int wert1 = 80;\n  sprintf(zeichenkette, \"Wert:%4d\", wert1); \n  Serial.println(zeichenkette);             // Ausgabe: 'Wert:  80'\n  \n  int wert1 = 1280;\n  sprintf(zeichenkette, \"Wert:%4d\", wert2);\n  Serial.println(zeichenkette);             // Ausgabe: 'Wert:2280'\n}\n\nvoid loop(){}\n")),(0,a.kt)("p",null,"Ausgabe auf dem seriellen Monitor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Wert:  80\nWert:2280\n")),(0,a.kt)("h3",{id:"erl\xe4uterungen"},"Erl\xe4uterungen"),(0,a.kt)("p",null,"Das Prozentzeichen ",(0,a.kt)("inlineCode",{parentName:"p"},"%")," beim zweiten Argument von ",(0,a.kt)("inlineCode",{parentName:"p"},"sprinf()")," markiert einen Platzhalter f\xfcr Zahlenwerte, die formatiert werden sollen. So wird zum Beispiel mit ",(0,a.kt)("inlineCode",{parentName:"p"},"%4d")," ein Integerwert (",(0,a.kt)("inlineCode",{parentName:"p"},"d"),") ausgeben und nach links Platz f\xfcr 4 Stellen bereitgestellt. Hat der Integerwert weniger als 4 Stellen, so wird an der Stelle ein Leerzeichen ausgegeben. Leider ist beim Arduino f\xfcr die ",(0,a.kt)("inlineCode",{parentName:"p"},"sprintf")," Funktion die Ausgabe von Flie\xdfkommazahlen (",(0,a.kt)("inlineCode",{parentName:"p"},"float")," oder ",(0,a.kt)("inlineCode",{parentName:"p"},"double"),") nicht vorgesehen."),(0,a.kt)("p",null,"Mit ",(0,a.kt)("inlineCode",{parentName:"p"},"sprinf()")," lassen sich noch viele andere Formatierungen realisieren. Eine Auflistung der Formatierungsoptionen gibt es ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikibooks.org/wiki/C-Programmierung:_Einfache_Ein-_und_Ausgabe"},"hier"),"."))}p.isMDXComponent=!0}}]);