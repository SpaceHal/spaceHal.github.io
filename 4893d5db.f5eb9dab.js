(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{131:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),o=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=o(t),p=a,m=u["".concat(s,".").concat(p)]||u[p]||b[p]||r;return t?i.a.createElement(m,l(l({ref:n},d),{},{components:t})):i.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<r;d++)s[d]=t[d];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return o}));var a=t(3),i=t(7),r=(t(0),t(131)),s={title:"Entprellen eine Tasters",sidebar_label:"9. Taster entprellen",description:"Entprellen eines Taster mit einem Arduino (mit Pseudo-Code)."},l={unversionedId:"arduino/debounce",id:"arduino/debounce",isDocsHomePage:!1,title:"Entprellen eine Tasters",description:"Entprellen eines Taster mit einem Arduino (mit Pseudo-Code).",source:"@site/docs/arduino/debounce.md",slug:"/arduino/debounce",permalink:"/docs/arduino/debounce",editUrl:"https://spacehal.github.io/docs/arduino/debounce.md",version:"current",sidebar_label:"9. Taster entprellen",sidebar:"someSidebar",previous:{title:"Steuern zeitkritischer Aufgaben",permalink:"/docs/arduino/millis"},next:{title:"Endliche Automaten (Finite State Machine)",permalink:"/docs/arduino/stateMachine"}},c=[{value:"Prellen eines Tasters",id:"prellen-eines-tasters",children:[]},{value:"Entprellen (debouncing)",id:"entprellen-debouncing",children:[{value:"Einfaches (blockierendes) Entprellen",id:"einfaches-blockierendes-entprellen",children:[]},{value:"Pseudocode (nicht blockierend mit <code>millis()</code>)",id:"pseudocode-nicht-blockierend-mit-millis",children:[]},{value:"Aufgaben",id:"aufgaben",children:[]}]},{value:"Bounce2-Bibliothek zum Entprellen",id:"bounce2-bibliothek-zum-entprellen",children:[]},{value:"Links",id:"links",children:[]}],d={rightToc:c};function o(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Wird ein einfacher Taster als ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"input#ein-taster-zum-umschalten"}),"Umschalter"),", zum Beispiel zum An- und Ausschalten einer LED verwendet, kann es passieren, dass beim einmaligen Bet\xe4tigen scheinbar zuf\xe4llig manchmal geschaltet und manchmal nicht geschaltet wird. "),Object(r.b)("p",null,"Die Ursache f\xfcr dieses scheinbar willk\xfcrliche Verhalten wird als Prellen (engl. ",Object(r.b)("em",{parentName:"p"},"bouncing"),") bezeichnet. Beim Dr\xfccken des Tasters \xe4ndert sich der Zustand am Eingangspin nicht nur einmal, sondern gelegentlich auch \xf6fter. \xc4hnlich wie ein Lineal, welches auf einen Tisch geschlagen wird, springen die Kontakte eines Tasters beim Bet\xe4tigen f\xfcr einen kurzen Moment hin und her. Dies f\xfchrt zu ungewollten, sich schnell \xe4ndernden Spannungszust\xe4nden am Eingangspin. Werden diese schnellen Zustands\xe4nderungen verarbeitet, so scheint es, dass beim Bet\xe4tigen des Tasters nichts passiert, obwohl in Wahrheit vielleicht angeschaltet und gleich danach wieder ausgeschaltet wurde."),Object(r.b)("p",null,"Mit einem geeigneten Code k\xf6nnen Taster entprellt werden, damit sie beim Bet\xe4tigen auch wirklich nur einmal schalten. "),Object(r.b)("h2",{id:"prellen-eines-tasters"},"Prellen eines Tasters"),Object(r.b)("img",{src:"/img/arduino/debounce.png",alt:"drawing",width:"340px",class:"center"}),Object(r.b)("p",null,"In der oben stehenden Abbildung ist schematisch der Verlauf der Spannung bei einem LOW-aktiven Taster (Signalpegel LOW beim Dr\xfccken) dargestellt. Wird der Taster gedr\xfcckt, so f\xe4llt die Spannung am Eingangspin zuerst auf 0 V ab, springt jedoch gleich darauf wieder auf einen h\xf6heren Spannungswert. Wu\u0308rde jeder Zustandswechsel von ",Object(r.b)("inlineCode",{parentName:"p"},"HIGH")," auf ",Object(r.b)("inlineCode",{parentName:"p"},"LOW")," zum Umschalten der LED f\xfchren, so wa\u0308re bei einem prellenden Schalter nicht vorhersehbar, ob die LED zum Schluss an- oder ausgeschaltet ist."),Object(r.b)("h2",{id:"entprellen-debouncing"},"Entprellen (debouncing)"),Object(r.b)("p",null,"Ein Taster ist entprellt, wenn die schnellen ungewollten Zustands\xe4nderungen w\xe4hrend des Dr\xfcckens eines Tasters ignoriert wurden. Wird also am Tasterpin eine ",Object(r.b)("strong",{parentName:"p"},"erste Zustands\xe4nderung")," detektiert, m\xfcssen fu\u0308r eine vorgegebene Zeit (Prellzeit) alle folgenden ",Object(r.b)("strong",{parentName:"p"},"unerw\xfcnschten Zustands\xe4nderungen ignoriert")," werden. Da die meisten Taster nur in einem Zeitbereich ","\\","(\\Delta t","\\",") von ca. 30 ms prellen, sollte ein Prellzeit von 30 ms ausreichen. "),Object(r.b)("p",null,"Anschlie\xdfend muss der ",Object(r.b)("strong",{parentName:"p"},"Zustand des Tasters erneut eingelesen")," werden. Entspricht der Zustand dem nach der ersten Zustand\xe4nderung (",Object(r.b)("em",{parentName:"p"},"im Beispiel also LOW"),"), dann wurde der Taster erfolgreich entprellt."),Object(r.b)("h3",{id:"einfaches-blockierendes-entprellen"},"Einfaches (blockierendes) Entprellen"),Object(r.b)("p",null,"Die einfachste, wenn auch nicht beste L\xf6sung, um einen Taster zu entprellen, kann durch eine einfache blockierende Programmverz\xf6gerung mit der ",Object(r.b)("inlineCode",{parentName:"p"},"delay()"),"-Funktion realisiert werden."),Object(r.b)("p",null,"Im folgenden Beispiel wird die ",Object(r.b)("strong",{parentName:"p"},"fallende Flanke")," des Tasterpins, als der \xdcbergang von ungedr\xfcckt ",Object(r.b)("inlineCode",{parentName:"p"},"HIGH")," zu gedr\xfcckt ",Object(r.b)("inlineCode",{parentName:"p"},"LOW")," entprellt und zum Umschalten einer LED verwendet."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino",metastring:'title="entprellenMitDelay.ino"',title:'"entprellenMitDelay.ino"'}),"// Ein sehr einfaches Beispiel zum Entprellen eines Tasters und Umschalten einer LED.\n// Dieses Beispiel blockiert den MC w\xe4hrend des Entprellens.\n\n#define BUTTON 12                        // an Schaltung anpassen\n#define LED 3                            // an Schaltung anpassen\n\nint stateButton      = HIGH;             // aktueller Status des Taster-PINs\nint stateButtonLast  = HIGH;             // Status des Taster-PINs vor der letzten \xdcberpr\xfcfung\nint stateLED         = LOW;              // Status der LED (an oder aus)\n\nvoid umschaltenLED(int pPin){\n  stateLED = !stateLED;                  // LED-Status umschalten\n  digitalWrite(pPin, stateLED);          // LED-Status aktualisieren\n}\n\nvoid setup() {\n  pinMode(BUTTON, INPUT_PULLUP);         // Tasterpin mit Pull-Up-Widerstand konfigurieren\n  pinMode(LED, OUTPUT);\n}\n\nvoid loop() {\n  stateButton = digitalRead(BUTTON);     // aktuellen Zustand des Tasters bestimmen\n\n  // Ist Taster gedr\xfcckt ( stateButton == 0 ) UND war er vorher nicht gedr\xfcckt (stateButtonLast == 1)\n  if ((stateButton == 0) && (stateButtonLast == 1))\n  {\n    delay(30);                           // 30 ms warten, um falsche Zustands\xe4nderungen zu ignorieren\n    stateButton = digitalRead(BUTTON);   // Zustand des Taster \xfcberpr\xfcfen\n    if (stateButton == 0) {              // Ist der Taster immer noch gedr\xfcckt?\n      umschaltenLED(LED);                \n    }\n  }\n  stateButtonLast = stateButton;         // alten Wert des Tasters speichern\n}\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Hinweis:")," Das Zeichen ",Object(r.b)("inlineCode",{parentName:"p"},"!")," ist das Negationszeichen und bedeutet ",Object(r.b)("em",{parentName:"p"},"nicht"),". Der Ausdruck ",Object(r.b)("inlineCode",{parentName:"p"},"stateLED = !stateLED;")," negiert also den Wert von ",Object(r.b)("inlineCode",{parentName:"p"},"stateLED")," (aus 0 wird 1 und aus 1 wird 0)."))),Object(r.b)("h3",{id:"pseudocode-nicht-blockierend-mit-millis"},"Pseudocode (nicht blockierend mit ",Object(r.b)("inlineCode",{parentName:"h3"},"millis()"),")"),Object(r.b)("p",null,"Der Nachteil des obigen Codes zum Entprellen ist, dass der Programmablauf durch die ",Object(r.b)("inlineCode",{parentName:"p"},"delay()")," Funktion blockiert wird. Ein nichtblockierendes Entprellen l\xe4sst sich mit der ",Object(r.b)("inlineCode",{parentName:"p"},"millis()")," Funktion realisieren."),Object(r.b)("p",null,"Der folgende ",Object(r.b)("strong",{parentName:"p"},"unvollst\xe4ndige")," Programmcode zum Entprellen eines Tasters mit der ",Object(r.b)("inlineCode",{parentName:"p"},"millis()"),"-Funktion zeigt beispielhaft, wie das Dr\xfccken eines Tasters (nicht das Loslassen) entprellt werden kann."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),"// Unvollst\xe4ndiger Code zum Entprellen eines Tasters und umschalten einer LED\n\n#define BUTTON 0                    // an Schaltung anpassen\n#define LED 13                      // an Schaltung anpassen\n\nbool entprellen      = false;\nint stateButton      = HIGH;        // aktueller  Status des Tasters\nint stateButtonLast  = HIGH;        // letzter  Status des Tasters\nint stateLED         = LOW;         // Status der LED (an oder aus)\n\nunsigned long entprellZeit = 30;    // in ms\nunsigned long zeitTaster = 0;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(BUTTON, INPUT_PULLUP);    // interner Pull-Up-Widerstand\n  pinMode(LED, OUTPUT);\n}\n\nvoid loop() {\n  stateButton = digitalRead(BUTTON); // Taster-Pin einlesen\n\n  // Wurde der Taster gedr\xfcckt?\n  if ((stateButton == 0) && (stateButtonLast == 1)) {\n\n    // Zeitstempel zum Entprellen zur\xfccksetzen und merken, dass\n    // beim n\xe4chsten Durchlauf enprellt werden muss:\n    zeitTaster = millis();\n    entprellen = true;\n  }\n\n  // Die Zustands\xe4nderung wurde bereits erkannt, jetzt wird entprellt:\n  if (entprellen)\n  {\n    /*                PSEUDOCODE zum Entprellen\n      --------------------------------------------------------\n      WENN (Zeit seit letzter \xc4nderung am Pin > entprellZeit)\n      {\n        WENN (Taster immer noch gedr\xfcckt)\n        {\n          - stateLED umschalten\n          - entprellen beenden\n        }\n      }\n      --------------------------------------------------------\n    */\n  }\n  stateButtonLast = stateButton;      // alten Tasterzustand speichern\n  digitalWrite(LED, stateLED);        // LED-Status aktualisieren\n}\n")),Object(r.b)("h3",{id:"aufgaben"},"Aufgaben"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(r.b)("strong",{parentName:"h5"},"\xdcben"))),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Erl\xe4utern")," Sie, warum nach der Prellzeit der Zustand des Tasters \xfcberpr\xfcft werden muss."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Vervollst\xe4ndigen")," Sie den nicht blockierenden ",Object(r.b)("strong",{parentName:"li"},"Code zum Entprellen")," eines Tasters. Beim Bet\xe4tigen des Tasters soll eine angeschlossene LED an- bzw. ausgeschaltet werden (toggeln)."),Object(r.b)("li",{parentName:"ol"},"Bauen Sie eine Schaltung mit ",Object(r.b)("strong",{parentName:"li"},"4 gleichfarbigen LEDs und einem Taster")," auf. Zu Beginn leuchtet nur die erste LED. Beim ersten Bet\xe4tigen des Taster soll die zweite LED aufleuchten und alle anderen LEDs aus sein. Wird der Taster ein weiteres Mal bet\xe4tigt, so soll die 3. LED aufleuchten, danach die 4. LED und so weiter. Verwenden Sie einen geeigneten ",Object(r.b)("strong",{parentName:"li"},"Automaten"),"."),Object(r.b)("li",{parentName:"ol"},"Bauen Sie eine Schaltung mit zwei LEDs und zwei Tastern auf. Schreiben Sie ein Programm, das jede LED mit einem einzelnen Taster an und ausschalten l\xe4sst (Taster 1 schaltet nur LED 1 und Taster 2 schaltet nur LED 2). Achten Sie darauf die Taster zu entprellen.")))),Object(r.b)("h2",{id:"bounce2-bibliothek-zum-entprellen"},"Bounce2-Bibliothek zum Entprellen"),Object(r.b)("p",null,"Mit der Arduino-Bibliothek ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/thomasfredericks/Bounce2"}),"bounce2"))," kann das Entprellen stark vereinfacht werden. Die Dokumentation findet sich ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://thomasfredericks.github.io/Bounce2/files/index.html"}),"hier"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),"// This example toggles the debug LED (pin 13) on or off\n// when a button on pin 2 is pressed.\n\n// Include the Bounce2 library found here :\n// https://github.com/thomasfredericks/Bounce2\n#include <Bounce2.h>\n\n#define BUTTON_PIN 2\n#define LED_PIN 13\nint ledState = LOW;\n\nBounce debouncer = Bounce(); // Instantiate a Bounce object\n\nvoid setup() {\n  debouncer.attach(BUTTON_PIN,INPUT_PULLUP); // Attach the debouncer to a pin with INPUT_PULLUP mode\n  debouncer.interval(25); // Use a debounce interval of 25 milliseconds\n  \n  pinMode(LED_PIN,OUTPUT); // Setup the LED\n  digitalWrite(LED_PIN,ledState);\n}\n\nvoid loop() {\n   debouncer.update();               // Update the Bounce instance. Should be called only once per loop().\n   \n   if ( debouncer.fell() ) {         // Call code if button transitions from HIGH to LOW\n     ledState = !ledState;           // Toggle LED state\n     digitalWrite(LED_PIN,ledState); // Apply new LED state\n   }\n}\n\n")),Object(r.b)("h2",{id:"links"},"Links"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=e1-kc04jSE4"}),"Debounce a Switch (Circuit) - Video")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.skillbank.co.uk/arduino/switchbounce.htm"}),"Using digital inputs: Switch bounce and solutions to it")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/thomasfredericks/Bounce2"}),"Arduino Library Bounce2")),Object(r.b)("li",{parentName:"ul"},"Die ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/LennartHennigs/Button2"}),"Button2-Bibliothek")," ist deutlich umfangreicher als die Bounce2 Bibliothek und erm\xf6glicht das Arbeit mit Eventhandlern f\xfcr verschiedene Taster-Events wie ",Object(r.b)("em",{parentName:"li"},"Click"),", ",Object(r.b)("em",{parentName:"li"},"LongClick"),", ",Object(r.b)("em",{parentName:"li"},"DoubleClick"),", ",Object(r.b)("em",{parentName:"li"},"TripleClick"),".")))}o.isMDXComponent=!0}}]);