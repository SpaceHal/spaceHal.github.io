(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,b=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,p=s["".concat(b,".").concat(m)]||s[m]||u[m]||a;return n?i.a.createElement(p,o(o({ref:t},l),{},{components:n})):i.a.createElement(p,o({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,b=new Array(a);b[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var l=2;l<a;l++)b[l]=n[l];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(131)),b={title:"Der integrierte Motortreiber DRV8833",sidebar_label:"4. Motortreiber DRV8833",description:"Mit einem Arduino und dem Motortreiber DRV8833 einen Motor ansteuern."},o={unversionedId:"motor/drv8833",id:"motor/drv8833",isDocsHomePage:!1,title:"Der integrierte Motortreiber DRV8833",description:"Mit einem Arduino und dem Motortreiber DRV8833 einen Motor ansteuern.",source:"@site/docs/motor/drv8833.md",slug:"/motor/drv8833",permalink:"/docs/motor/drv8833",editUrl:"https://spacehal.github.io/docs/motor/drv8833.md",version:"current",sidebar_label:"4. Motortreiber DRV8833",sidebar:"someSidebar",previous:{title:"Einen Gleichstrommotor mir einer H-Br\xfccke steuern",permalink:"/docs/motor/hBridge"},next:{title:"Der integrierte Motortreiber L293",permalink:"/docs/motor/L293"}},c=[{value:"Eigenschaften",id:"eigenschaften",children:[]},{value:"Betriebsmoden",id:"betriebsmoden",children:[]},{value:"Beispiel (Motor mit Taster)",id:"beispiel-motor-mit-taster",children:[{value:"Code (Betriebsmoden)",id:"code-betriebsmoden",children:[]}]},{value:"Die Geschwindigkeit mit PWM-Signalen steuern",id:"die-geschwindigkeit-mit-pwm-signalen-steuern",children:[{value:"Codeauszug (Geschwindigkeitssteuerung)",id:"codeauszug-geschwindigkeitssteuerung",children:[]}]},{value:"Aufgaben",id:"aufgaben",children:[]},{value:"Weiterf\xfchrende Links",id:"weiterf\xfchrende-links",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Der integrierte Schaltkreis ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.ti.com/lit/ds/symlink/drv8833.pdf"}),"DRV8833")," von Texas Instruments ist ein moderner Motortreiber mit geringer Verlustleistung und einem maximalen Laststrom von 1,5 A im Dauerbetrieb."),Object(a.b)("img",{src:"/img/motor/drv8833_PinOut.png",alt:"Motor driver DRV8833 pinout",width:"400px",class:"center"}),Object(a.b)("p",null,"Im Wesentlichen integriert der DRV8833 zwei H-Br\xfccken zur Steuerung von Gleichstrommotoren. Anstatt jedoch jeden einzelnen der insgesamt 8 ",Object(a.b)("em",{parentName:"p"},"Schalter")," f\xfcr die zwei H-Br\xfccken ansteuern zu m\xfcssen, werden f\xfcr jede H-Br\xfccke nur jeweils zwei Steuereing\xe4nge (IN1, IN2 und IN3, IN4) verwendet, um die entsprechenden Betriebsmoden einzustellen."),Object(a.b)("h2",{id:"eigenschaften"},"Eigenschaften"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Zwei H-Br\xfccken zum Ansteuern von zwei Gleichstrommotoren."),Object(a.b)("li",{parentName:"ul"},"Betriebsspannung: 2,7 V bis 10,8 V"),Object(a.b)("li",{parentName:"ul"},"Lastrom: 1,5 A bei Dauerlast und 2 A bei kurzzeitiger Spitzenlast"),Object(a.b)("li",{parentName:"ul"},"Automatische Abschaltfunktion bei zu gro\xdfen Laststr\xf6men, Kurzschluss, zu geringer Betriebsspannung oder beim \xdcberschreiten der Maximaltemperatur.")),Object(a.b)("h2",{id:"betriebsmoden"},"Betriebsmoden"),Object(a.b)("p",null,"Die Funktionen der einzelnen Pins zum Steuern des Motors sind in der folgenden Tabelle zusammengefasst (f\xfcr den Motor 2 sind die Pins IN3 und IN4 zu verwenden):"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Motorfunktion   (Motor 1)"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"IN1"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"IN2"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Freilauf"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Motorbremse"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Vorw\xe4rts"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"R\xfcckw\xe4rts"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1")))),Object(a.b)("h2",{id:"beispiel-motor-mit-taster"},"Beispiel (Motor mit Taster)"),Object(a.b)("p",null,"Im folgenden einfachen Beispiel soll ein Motor durch einen Taster gesteuert werden.\nDer verwendete ",Object(a.b)("strong",{parentName:"p"},"Taster")," wird mit dem ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/arduino/input#interner-pull-up-widerstand"}),"eingebauten Pull-Up-Widerstand")," des Arduinos am ",Object(a.b)("strong",{parentName:"p"},"Pin A1")," angeschlossen (ein analoger Eingang kann immer auch als digitaler Eingang verwendet werden).\nDer Eing\xe4nge ",Object(a.b)("strong",{parentName:"p"},"IN1 und IN2 des Motortreiber DRV8833")," werden mit dem ",Object(a.b)("strong",{parentName:"p"},"Pin 5 und Pin 6 des Arduinos")," verbunden. Der Motor selbst wird wie in der Abbildung dargestellt mit den Ausg\xe4ngen ",Object(a.b)("strong",{parentName:"p"},"OUT1")," und ",Object(a.b)("strong",{parentName:"p"},"OUT2")," des Motortreibers verbunden. "),Object(a.b)("p",null," Der Motortreiber wird mit einer ",Object(a.b)("strong",{parentName:"p"},"separaten Spannungsversorgung")," (z.B. ein 9V Block oder 4x AA Batterien) betrieben werden, wobei der Minuspol der Batterien mit der Masse (GND) vom Arduino und dem Motortreiber DRV8833 verbunden wird."),Object(a.b)("img",{src:"/img/motor/drv8833_Connection.png",alt:"Motortreiber DRV8833 mit einem Arduino",width:"450px",class:"center"}),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Der Motortreiber darf nicht an den 5V Ausgang des Arduinos angeschlossen werden."))),Object(a.b)("h3",{id:"code-betriebsmoden"},"Code (Betriebsmoden)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-arduino"}),'// Einfaches Beispiel zum Ansteuern des DRV8833\n//      ____________________________________\n//      in1   in2   Motorfunktion\n//      ------------------------------------\n//      1     0     Vorw\xe4rts\n//      0     1     R\xfcckw\xe4rts \n//      1     1     Bremse\n//      0     0     Freilauf\n//      ____________________________________   \n\n#define pinTaster1 A1\nconst int in1 = 5; // Steuer-Pins f\xfcr den drv8833\nconst int in2 = 6;\n\nvoid setup() {\n  Serial.begin(115200);\n\n  pinMode(in1, OUTPUT); // DRV8833\n  pinMode(in2, OUTPUT);\n  pinMode(pinTaster1, INPUT_PULLUP);  // Eingang mit einem internen Pullup-Widerstand\n}\n\nvoid loop() {\n  int statusTaster1 = digitalRead(pinTaster1);\n\n  if (statusTaster1){ // wenn statusTaster1 == 1\n    digitalWrite(in1, LOW); // \n    digitalWrite(in2, LOW); // \n    Serial.println("IN1,2: 0,0 (Freilauf)");\n  } \n  else {\n    digitalWrite(in1, LOW); // \n    digitalWrite(in2, HIGH);\n    Serial.println("IN1,2: 0,1 (Vorw\xe4rts)");\n  } \n}\n')),Object(a.b)("h2",{id:"die-geschwindigkeit-mit-pwm-signalen-steuern"},"Die Geschwindigkeit mit PWM-Signalen steuern"),Object(a.b)("p",null,"Die oben dargestellten ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"drv8833#betriebsmoden"}),"Betriebsmoden")," lassen sich noch durch 4 weitere Betriebsmoden f\xfcr die ",Object(a.b)("strong",{parentName:"p"},"Geschwindigkeitssteuerung")," erg\xe4nzen. Dies wird durch die Verwendung von ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/arduino/pwm"}),"PWM-Signalen")," realisiert."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Motorfunktion   (Motor 1)"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"IN1"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"IN2"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Vorw\xe4rts (Freilauf)"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pwm"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"R\xfcckw\xe4rts  (Freilauf)"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pwm")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"R\xfcckw\xe4rts (Bremsen)"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pwm"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Vorw\xe4rts (Bremsen)"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pwm")))),Object(a.b)("h3",{id:"codeauszug-geschwindigkeitssteuerung"},"Codeauszug (Geschwindigkeitssteuerung)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-arduino"}),"// unvollst\xe4ndiges Programmbeispiel zur Geschwindikeitssteuerung\n\n    int motorSpeed = 150; // Werte von 0 ... 255\n\n    // dreht den Motor mit reduzierter Geschwindigkeit in eine Richtung\n    digitalWrite(in1, LOW); \n    analogWrite (in2, motorSpeed); \n\n    delay(1000);\n\n    // dreht den Motor mit reduzierter Geschwindigkeit in die andere Richtung\n    analogWrite(in1, motorSpeed); \n    digitalWrite (in2, LOW);\n")),Object(a.b)("h2",{id:"aufgaben"},"Aufgaben"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(a.b)("strong",{parentName:"h5"},"\xdcben"))),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ol",{parentName:"div"},Object(a.b)("li",{parentName:"ol"},"Erweitern Sie das obige Beispiel so, dass ",Object(a.b)("strong",{parentName:"li"},"ein Motor mit zwei Tastern")," gesteuert werden kann:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Ist der Taster 1 gedr\xfcckt, ist der Motor im Linkslauf."),Object(a.b)("li",{parentName:"ul"},"Ist der Taster 2 gedr\xfcckt, ist der Motor im Rechtslauf."),Object(a.b)("li",{parentName:"ul"},"Ist kein Taster gedr\xfcckt, ist der Motor im Freilauf."),Object(a.b)("li",{parentName:"ul"},"Sind beide Taster gedr\xfcckt, ist die Motorbremse aktiv.\nSchreiben Sie f\xfcr diese Aufgabe die folgenden Funktionen selber: ",Object(a.b)("inlineCode",{parentName:"li"},"dreheMotorLinks()"),", ",Object(a.b)("inlineCode",{parentName:"li"},"dreheMotorRechts()"),",",Object(a.b)("inlineCode",{parentName:"li"},"stoppeMotorBremse()"),", ",Object(a.b)("inlineCode",{parentName:"li"},"stoppeMotorFreilauf"),"."))),Object(a.b)("li",{parentName:"ol"},"Die Schaltung der Aufgabe 1 soll um zwei verschiedenfarbige LEDs erweitert werden. welche anzeigen, ob sich der Motor im Links- oder Rechtslauf befindet."),Object(a.b)("li",{parentName:"ol"},"Nun soll die Geschwindigkeit des Motor schrittweise mit den beiden Tastern gesteuert werden:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Mit dem einem Taster wird die Geschwindigkeit erh\xf6ht, mit dem anderen reduziert."),Object(a.b)("li",{parentName:"ul"},"Sind beide Taster gedr\xfcckt, stoppt der Motor mit der Motorbremse.\nNotieren Sie sich, ab welchem PWM Wert der Motor anf\xe4ngt zu drehen und wann er wieder stoppt.")))))),Object(a.b)("h2",{id:"weiterf\xfchrende-links"},"Weiterf\xfchrende Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ti.com/lit/ds/symlink/drv8833.pdf?ts=1605276968067&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FDRV8833"}),"Datenblatt DRV8833")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.pololu.com/product/2130"}),"DRV8833 Board von Pololu")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://learn.adafruit.com/adafruit-drv8833-dc-stepper-motor-driver-breakout-board?view=all"}),"Adafruit DRV8833"))))}d.isMDXComponent=!0}}]);