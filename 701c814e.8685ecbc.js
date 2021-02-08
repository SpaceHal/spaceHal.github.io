(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{132:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},o=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(t),o=a,p=u["".concat(d,".").concat(o)]||u[o]||m[o]||r;return t?i.a.createElement(p,l(l({ref:n},c),{},{components:t})):i.a.createElement(p,l({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,d=new Array(r);d[0]=o;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,d[1]=l;for(var c=2;c<r;c++)d[c]=t[c];return i.a.createElement.apply(null,d)}return i.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(7),r=(t(0),t(132)),d={title:"Endliche Automaten (Finite State Machine)",sidebar_label:"10. Endliche Automaten",description:"Endlichen Automaten (Zustandsdiagramm) mit dem enum Aufz\xe4hlungstyp und der switch-case Anweisung im Arduino realisieren."},l={unversionedId:"arduino/stateMachine",id:"arduino/stateMachine",isDocsHomePage:!1,title:"Endliche Automaten (Finite State Machine)",description:"Endlichen Automaten (Zustandsdiagramm) mit dem enum Aufz\xe4hlungstyp und der switch-case Anweisung im Arduino realisieren.",source:"@site/docs/arduino/stateMachine.md",slug:"/arduino/stateMachine",permalink:"/docs/arduino/stateMachine",editUrl:"https://spacehal.github.io/docs/arduino/stateMachine.md",version:"current",sidebar_label:"10. Endliche Automaten",sidebar:"sideBarArduino",previous:{title:"Entprellen eine Tasters",permalink:"/docs/arduino/debounce"},next:{title:"PWM Signale mit analogWrite()",permalink:"/docs/arduino/pwm"}},s=[{value:"Wichtige Begriffe",id:"wichtige-begriffe",children:[]},{value:"Zustandsdiagramm",id:"zustandsdiagramm",children:[]},{value:"Programmiertechniken",id:"programmiertechniken",children:[{value:"<code>enum</code> Aufz\xe4hlungstyp",id:"enum-aufz\xe4hlungstyp",children:[]},{value:"<code>switch-case</code> Verzweigung",id:"switch-case-verzweigung",children:[]},{value:"Arduino-Programmbeispiel",id:"arduino-programmbeispiel",children:[]}]},{value:"Aufgaben",id:"aufgaben",children:[]}],c={rightToc:s};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Programme oder logische Systeme, welche eine ",Object(r.b)("strong",{parentName:"p"},"endliche")," Anzahl verschiedener Zust\xe4nde aufweisen und diese nach festgelegten Kriterien \xe4ndern sollen, k\xf6nnen durch ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://de.wikipedia.org/wiki/Endlicher_Automat"}),"endliche Automaten")," (auch endliche Zustandsmaschine oder ",Object(r.b)("em",{parentName:"p"},"finit state machine - FSM"),") modelliert werden. Ein endlicher Automat soll ein Verhalten modellieren, welches auf einer endlichen Anzahl von ",Object(r.b)("strong",{parentName:"p"},"Zust\xe4nden"),", ",Object(r.b)("strong",{parentName:"p"},"Aktionen")," und ",Object(r.b)("strong",{parentName:"p"},"Zustands\xfcberg\xe4ngen")," basiert. "),Object(r.b)("h2",{id:"wichtige-begriffe"},"Wichtige Begriffe"),Object(r.b)("p",null,"Im Folgenden werden die Begriffe am Beispiel der ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"millis#blinken-mit-millis"}),"blinkenden LED mit der millis()-Funktion")," erl\xe4utert:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Zust\xe4nde")," speichern Information bzw. einen Status ab. Im Beispiel der blinkende LED wird daf\xfcr die Variable ",Object(r.b)("inlineCode",{parentName:"li"},"zustandLED")," verwendet, welche angibt, ob die LED an- oder ausgeschaltet ist. Zust\xe4nde alleine \xe4ndern das System jedoch nicht, daf\xfcr ist immer eine ",Object(r.b)("em",{parentName:"li"},"Aktion")," notwendig!"),Object(r.b)("li",{parentName:"ul"},"Durch eine ",Object(r.b)("strong",{parentName:"li"},"Aktion")," wird der Zustand des endlichen Automaten ge\xe4ndert. Wann ein bestimmter Zustand ge\xe4ndert bzw. angenommen wird, h\xe4ngt von dem System ab. Bei der blinkenden LED wird der Zustand des Automaten mit dem Befehl ",Object(r.b)("inlineCode",{parentName:"li"},"digitalWrite(LED, zustandLED)")," nach der Zeitabfrage ge\xe4ndert."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Zustands\xfcberg\xe4nge")," oder auch ",Object(r.b)("strong",{parentName:"li"},"Zustands\xe4nderungen")," werden in der Regel durch Programmverzweigungen wie ",Object(r.b)("inlineCode",{parentName:"li"},"if-else")," oder ",Object(r.b)("inlineCode",{parentName:"li"},"switch-case")," beschrieben. Sie geben an, unter welchen Bedingungen ein Zustand in einen anderen wechseln soll. Beim Blink-Beispiel gibt es genau zwei Zustands\xe4nderungen: Anschalten und Ausschalten der LED. ")),Object(r.b)("h2",{id:"zustandsdiagramm"},"Zustandsdiagramm"),Object(r.b)("p",null,"Mit einem Zustandsdiagramm lassen sich endliche Automaten graphisch darstellen. Das abgebildete Zustandsdiagramm beschreibt den endlichen Automaten f\xfcr die ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"millis#blinken-mit-millis"}),"blinkende LED"),"."),Object(r.b)("img",{src:"/img/arduino/Automat.png",alt:"drawing",width:"460pt",class:"center"}),Object(r.b)("p",null,"In einem Zustandsdiagramm wird das Verhalten eines endlichen Automaten anschaulich dargestellt. Die ",Object(r.b)("strong",{parentName:"p"},"Zust\xe4nde")," des Automaten werden hierbei mit Kreisen oder abgerundeten Vierecken abgebildet. Jeder Zustand darf nur einmal dargestellt werden."),Object(r.b)("p",null,"Erlaubte ",Object(r.b)("strong",{parentName:"p"},"Zustands\xfcberg\xe4nge")," werden mit Pfeilen dargestellt. ",Object(r.b)("strong",{parentName:"p"},"Aktionen"),", die zu Zustands\xe4nderungen f\xfchren, m\xfcssen nicht unbedingt dargestellt werden, k\xf6nnen aber f\xfcr das Verst\xe4ndnis sehr hilfreich sein. Das Gleiche gilt f\xfcr die Bedingungen, unter welchen der Automat seine Zust\xe4nde \xe4ndert. "),Object(r.b)("p",null,"Im Allgemeinen gilt, so lange wie es dem Verst\xe4ndnis und der \xdcbersichtlichkeit dient, sollten die Aktionen und die notwendigen Bedingungen vermerkt werden, ansonsten ist darauf zu verzichten."),Object(r.b)("h2",{id:"programmiertechniken"},"Programmiertechniken"),Object(r.b)("p",null,"Im Abschnitt ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"millis"}),"Zeitkritische Aufgaben")," wurde der oben abgebildete Automat mit Hilfe der Variablen ",Object(r.b)("inlineCode",{parentName:"p"},"int zustandLED")," und der ",Object(r.b)("inlineCode",{parentName:"p"},"if-else")," Verzweigung programmiert. Bei Automaten mit mehr als nur zwei Zust\xe4nden oder bei geschachtelten Automaten gibt es jedoch einen besseren Ansatz, der das Programm \xfcbersichtlicher und lesbarer macht."),Object(r.b)("p",null,"Ein etwas komplexerer Automat, welcher im Folgenden programmiert werden soll, l\xe4sst sich mit zwei LEDs erstellen. \xc4hnlich wie bei der blinken LED, wechselt der Automat nach einer vorgegeben Zeitspanne seinen Zustand. Im Zustandsdiagramm sind die vier m\xf6glichen Zust\xe4nde mit den erlaubten Zustands\xfcberg\xe4ngen abgebildet."),Object(r.b)("img",{src:"/img/arduino/Automat2LEDs.png",alt:"drawing",width:"430pt",class:"center"}),Object(r.b)("h3",{id:"enum-aufz\xe4hlungstyp"},Object(r.b)("inlineCode",{parentName:"h3"},"enum")," Aufz\xe4hlungstyp"),Object(r.b)("p",null,"Das Schl\xfcsselwort ",Object(r.b)("inlineCode",{parentName:"p"},"enum")," erm\xf6glicht die Aufz\xe4hlung von Konstanten. Mit ",Object(r.b)("inlineCode",{parentName:"p"},"enum")," wird ein Aufz\xe4hlungstyp deklariert:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"enum LedStates {AUS, LED1, LED12, LED2};  // Typendeklaration (Aufz\xe4hlungstyp)\n")),Object(r.b)("p",null,"Mit dieser Zeile wird der Aufz\xe4hlungstyp  ",Object(r.b)("inlineCode",{parentName:"p"},"LedStates")," mit den Konstanten ",Object(r.b)("inlineCode",{parentName:"p"},"AUS"),", ",Object(r.b)("inlineCode",{parentName:"p"},"LED1"),", ",Object(r.b)("inlineCode",{parentName:"p"},"LED12"),", ",Object(r.b)("inlineCode",{parentName:"p"},"LED2")," deklariert."),Object(r.b)("p",null,"Nach dieser Deklaration ist es m\xf6glich, die Variable ",Object(r.b)("inlineCode",{parentName:"p"},"ledState")," als ",Object(r.b)("inlineCode",{parentName:"p"},"LedStates"),"-Typ zu deklarieren und ihr den Wert ",Object(r.b)("inlineCode",{parentName:"p"},"AUS")," zuzuweisen."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),"LedStates ledState; // Variablendeklaration\nledState = AUS;     // Variablenzuweisung\n")),Object(r.b)("p",null,"Da der ",Object(r.b)("inlineCode",{parentName:"p"},"LedStates")," vorher als Aufz\xe4hlungstyp deklariert wurde, kann der Variablen ",Object(r.b)("inlineCode",{parentName:"p"},"ledState")," nur einer der vorher deklarierten Werte zugewiesen werden. Hier wird der Variablen ",Object(r.b)("inlineCode",{parentName:"p"},"ledState")," der Wert ",Object(r.b)("inlineCode",{parentName:"p"},"AUS")," zugewiesen."),Object(r.b)("p",null,"Wie bei einfachen Variablen kann die Deklaration und die Zuweisung auch in einer Zeile durchgef\xfchrt werden."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),"LedStates ledState  = AUS; // Variablendeklaration und Zuweisung\n")),Object(r.b)("h3",{id:"switch-case-verzweigung"},Object(r.b)("inlineCode",{parentName:"h3"},"switch-case")," Verzweigung"),Object(r.b)("p",null,"\xc4hnlich wie bei der ",Object(r.b)("inlineCode",{parentName:"p"},"if")," Verzweigung, erm\xf6glicht es die ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.arduino.cc/reference/de/language/structure/control-structure/switchcase/"}),Object(r.b)("inlineCode",{parentName:"a"},"switch-case")," Verzweigung"),", den Programmablauf in Abh\xe4ngigkeit von verschiedene Bedingungen zu kontrollieren. Besonders geeignet ist die  ",Object(r.b)("inlineCode",{parentName:"p"},"switch-case")," Verzweigung f\xfcr den Fall, dass viele verschiedene Bedingungen abgefragt werden sollen."),Object(r.b)("p",null,"Als einfaches Beispiel wird die Variable ",Object(r.b)("inlineCode",{parentName:"p"},"a")," ausgewertet. F\xfcr den Fall, dass ",Object(r.b)("inlineCode",{parentName:"p"},"a")," die Werte ",Object(r.b)("inlineCode",{parentName:"p"},"1"),", ",Object(r.b)("inlineCode",{parentName:"p"},"2")," oder ",Object(r.b)("inlineCode",{parentName:"p"},"3")," annimmt, soll das Programm spezielle Anweisungen ausf\xfchren. F\xfcr alle anderen Werte von ",Object(r.b)("inlineCode",{parentName:"p"},"a")," wird der so genannte Default-Fall ausgef\xfchrt."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),'int a = 2;\n\nswitch (a)                      // Nach dem Schl\xfcsselwort folgt in Klammern der auszuwertende Ausdruck\n{\n  case 1:                       // Vergleicht `a` mit dem Wert nach case (hier 1).\n    Serial.println("Fall 1.");        \n    break;                      // Beendet die gesamte Switch-Verzweigung. \n\n  case 2:\n     erial.println("Fall 2.");  // Da a=2 ist, w\xfcrde der hier stehen Code ausgef\xfchrt werden ...\n    break;\n\n  case 3:\n    Serial.println("Fall 3.");\n    break;\n\n  default:                       // Wenn `a` keinem der aufgef\xfchrten Werte entspricht\n    Serial.println("Alle anderen Zust\xe4nde.");\n')),Object(r.b)("h3",{id:"arduino-programmbeispiel"},"Arduino-Programmbeispiel"),Object(r.b)("p",null,"Die ",Object(r.b)("inlineCode",{parentName:"p"},"switch-case")," Verzweigung eignet sich zusammen mit der ",Object(r.b)("inlineCode",{parentName:"p"},"enum")," Aufz\xe4hlung besonders gut zur Programmierung eines Automaten. Am Beispiel des Automaten mit 2 LEDs soll das Grundprinzip erl\xe4utert werden."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),"#define pinLed1 6  // LED_1\n#define pinLed2 5  // LED_2\n\n// Zust\xe4nde des Automaten als Aufz\xe4hlungstyp deklarieren\nenum LedStates {AUS, LED_1, LED_12, LED_2};\nLedStates ledState = AUS;\n\nunsigned long letzteZeit = 0;  //  Zeitpunkt letzte LED-\xc4nderung\nconst    long intervall  = 500;    // Blinkintervall in ms (Konstante)\n\nvoid setup() {\n  pinMode(pinLed1, OUTPUT);\n  pinMode(pinLed2, OUTPUT);\n} \n\nvoid loop() {\n\n  // Bedingung f\xfcr den Zustands\xfcbergang. Der Automat soll seinen Zustand nur \xe4ndern,\n  // wenn die angegebene Intervall-Zeit \xfcberschritten ist.\n  if (millis() - letzteZeit >= intervall)\n  {\n    letzteZeit = millis();  // Zeitstempel f\xfcr Zeitvergleich\n\n    // Jeder `case` der switch-Verzweigung entspricht dem *alten* Zustand des Automaten\n    // und gibt an, in welchen neuen Zustand gewechselt werden soll. In der case-Anweisung\n    // wird der neue Zustand des Automaten aktualisiert. Der neue Zustand wird sofort\n    // aktiviert, die entsprechenden LEDs werden an oder ausgeschaltet.\n    switch (ledState)\n    {\n      case AUS:                      // aktueller Zustand: AUS\n        ledState = LED_1;            // neuer Zustand des Automaten: LED_1\n        digitalWrite(pinLed1, HIGH); // LED_1 AN\n        digitalWrite(pinLed2, LOW);  // LED_2 AUS\n        break;                       // ohne die break-Anweisung w\xfcrde sofort 'case LED_2' ausgef\xfchrt werden\n\n      case LED_1:                    // aktueller Zustand: LED 1 an\n        ledState = LED_12;\n        digitalWrite(pinLed1, HIGH);\n        digitalWrite(pinLed2, HIGH);\n        break;\n\n      case LED_12:                   // aktueller Zustand: LED 1&2 an\n        ledState = LED_2;\n        digitalWrite(pinLed1, LOW);\n        digitalWrite(pinLed2, HIGH);\n        break;\n\n      case LED_2:                    // aktueller Zustand: LED 2 an\n        ledState = AUS;\n        digitalWrite(pinLed1, LOW);\n        digitalWrite(pinLed2, LOW);\n        break;\n\n        // Der Default-Fall wird nicht ben\xf6tigt, da alle Wert abgefragt werden.\n    }\n  }\n}\n")),Object(r.b)("p",null,"Automaten und Zustandsdiagramme sind besonders bei der Programmierung von ",Object(r.b)("strong",{parentName:"p"},"Robotern")," sehr wichtig, da diese ein Vielzahl verschiedener Zust\xe4nde einnehmen k\xf6nnen."),Object(r.b)("h2",{id:"aufgaben"},"Aufgaben"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(r.b)("strong",{parentName:"h5"},"\xdcben"))),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kopieren Sie des ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"stateMachine#arduino-programmbeispiel"}),"Beispielprogramm")," und lassen sie es auf Ihrem Arduino mit der entsprechenden Schaltung laufen. Untersuchen Sie, was passiert, wenn einige der ",Object(r.b)("inlineCode",{parentName:"p"},"break"),"-Anweisung auskommentiert (",Object(r.b)("inlineCode",{parentName:"p"},"// "),") werden. Wie verh\xe4lt sich dann Ihr Programm?")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Zeichnen Sie ein Zustandsdiagramm f\xfcr den Automaten mit ",Object(r.b)("strong",{parentName:"p"},"zwei LEDs,")," bei dem folgende \xdcberg\xe4nge bzw. Zust\xe4nde erlaubt sind. Nach dem letzten Zustand springt der Automat in der ersten Zustand zur\xfcck."),Object(r.b)("p",{parentName:"li"}," alle Leds ",Object(r.b)("strong",{parentName:"p"},"aus")," ",Object(r.b)("span",null,"\u2192")," Led ",Object(r.b)("strong",{parentName:"p"},"1 an"),", Led 2 aus ",Object(r.b)("span",null,"\u2192")," alle Leds ",Object(r.b)("strong",{parentName:"p"},"aus")," ",Object(r.b)("span",null,"\u2192"),"  Led ",Object(r.b)("strong",{parentName:"p"},"1&2 an")," ",Object(r.b)("span",null,"\u2192"),"  alle LEDs ",Object(r.b)("strong",{parentName:"p"},"aus")," ",Object(r.b)("span",null,"\u2192")," Led ",Object(r.b)("strong",{parentName:"p"},"2 an"),", Led 1 aus ",Object(r.b)("span",null,"\u2192")," . . .")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Schreiben Sie ein Programm f\xfcr den obigen Automaten und testen Sie es an einer entsprechenden Schaltung.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\xc4ndern Sie das Programm f\xfcr den urspr\xfcnglichen ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"stateMachine#arduino-programmbeispiel"}),"Automaten mit 2 LEDs")," so, dass f\xfcr jeden der vier Zust\xe4nde ein eigenes Zeitintervall (",Object(r.b)("inlineCode",{parentName:"p"},"dTime1"),", ",Object(r.b)("inlineCode",{parentName:"p"},"dTime2"),",...) angegeben werden kann, in welchem er aktiv ist. Oder anders ausgedr\xfcckt, jeder der vier Zust\xe4nde soll unterschiedlich lange aktiv sein.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Entwickeln Sie ein Programm und eine elektrische Schaltung zur Simulation  einer ",Object(r.b)("strong",{parentName:"p"},"Ampelanlage f\xfcr Fu\xdfg\xe4nger")," (eine Fu\xdfg\xe4ngerampel ",Object(r.b)("inlineCode",{parentName:"p"},"FA")," und eine Ampel f\xfcr PKWs ",Object(r.b)("inlineCode",{parentName:"p"},"PA"),"). \xc4hnlich wie  bei ",Object(r.b)("em",{parentName:"p"},"echten")," Ampelanlagen f\xfcr Fu\xdfg\xe4nger, darf die Fu\xdfg\xe4ngerampel erst nach dem Bet\xe4tigen eines Tasters (",Object(r.b)("em",{parentName:"p"},"Anforderung durch einen Fu\xdfg\xe4nger"),") und einer gewissen Wartezeit auf Gr\xfcn umschalten.  Beachten Sie bei der Bearbeitung der Aufgabe folgende Punkte:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Erstellen Sie ein ",Object(r.b)("strong",{parentName:"li"},"vollst\xe4ndiges Zustandsdiagramm")," f\xfcr beide Ampeln. Recherchieren Sie die m\xf6glichen Zust\xe4nde der Ampeln und benennen Sie diese sinnvoll (",Object(r.b)("inlineCode",{parentName:"li"},"FArot"),", ",Object(r.b)("inlineCode",{parentName:"li"},"FAgr\xfcn"),", ",Object(r.b)("inlineCode",{parentName:"li"},"PArot"),", ...). Geben Sie im Zustandsdiagramm alle Zust\xe4nde und Bedingungen f\xfcr die Zustands\xfcberg\xe4nge korrekt an."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Entwickeln Sie eine Schaltung")," f\xfcr die Ampelanlage. ",Object(r.b)("strong",{parentName:"li"},"Zeichnen Sie Ihre Schaltung auf")," und bauen Sie sie anschlie\xdfend auf dem Steckbrett auf. Vergessen Sie nicht den Taster f\xfcr die Fu\xdfg\xe4ngeranforderung."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Schreiben Sie ein Programm"),", welches ihr Zustandsdiagramm umsetzt. Verwenden Sie die ",Object(r.b)("inlineCode",{parentName:"li"},"switch-case"),"-Anweisung.")))))))}b.isMDXComponent=!0}}]);