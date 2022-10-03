"use strict";(self.webpackChunkmy_test=self.webpackChunkmy_test||[]).push([[9806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=i,c=p["".concat(d,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(c,o(o({ref:t},u),{},{components:r})):n.createElement(c,o({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={title:"Der integrierte Motortreiber DRV8833",sidebar_label:"Motortreiber DRV8833",description:"Mit dem Motortreiber DRV8833 und einem Arduino einen Motor ansteuern.",custom_edit_url:null,keywords:["Arduino","Motortreiber","H-Br\xfccke","DRV8833","Motorsteuerung","Gleichstrommotor","DRV8833 ansteuern","DRV8833 anschlie\xdfen","DRV8833 programm"]},o=void 0,l={unversionedId:"motor/drv8833",id:"motor/drv8833",title:"Der integrierte Motortreiber DRV8833",description:"Mit dem Motortreiber DRV8833 und einem Arduino einen Motor ansteuern.",source:"@site/docs/motor/drv8833.md",sourceDirName:"motor",slug:"/motor/drv8833",permalink:"/docs/motor/drv8833",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Der integrierte Motortreiber DRV8833",sidebar_label:"Motortreiber DRV8833",description:"Mit dem Motortreiber DRV8833 und einem Arduino einen Motor ansteuern.",custom_edit_url:null,keywords:["Arduino","Motortreiber","H-Br\xfccke","DRV8833","Motorsteuerung","Gleichstrommotor","DRV8833 ansteuern","DRV8833 anschlie\xdfen","DRV8833 programm"]},sidebar:"mySidebar",previous:{title:"H-Br\xfccke",permalink:"/docs/motor/hBridge"},next:{title:"Motortreiber L293",permalink:"/docs/motor/L293"}},d={},s=[{value:"Eigenschaften",id:"eigenschaften",level:2},{value:"Betriebsmoden",id:"betriebsmoden",level:2},{value:"Beispiel (Motor mit Taster)",id:"beispiel-motor-mit-taster",level:2},{value:"Code (Betriebsmoden)",id:"code-betriebsmoden",level:3},{value:"Die Geschwindigkeit mit PWM-Signalen steuern",id:"die-geschwindigkeit-mit-pwm-signalen-steuern",level:2},{value:"Codeauszug (Geschwindigkeitssteuerung)",id:"codeauszug-geschwindigkeitssteuerung",level:3},{value:"Weiterf\xfchrende Links",id:"weiterf\xfchrende-links",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://spacehal.github.io/docs/motor/drv8833"})),(0,i.kt)("p",null,"Der integrierte Schaltkreis ",(0,i.kt)("a",{parentName:"p",href:"http://www.ti.com/lit/ds/symlink/drv8833.pdf"},"DRV8833")," von Texas Instruments ist ein moderner Motortreiber mit geringer Verlustleistung und einem maximalen Laststrom von 1,5 A im Dauerbetrieb."),(0,i.kt)("img",{src:"/img/motor/drv8833_PinOut.png",alt:"Motor driver DRV8833 pinout",width:"460px",className:"center"}),(0,i.kt)("p",null,"Im Wesentlichen integriert der DRV8833 zwei H-Br\xfccken zur Steuerung von Gleichstrommotoren. Anstatt jedoch jeden einzelnen der insgesamt 8 ",(0,i.kt)("em",{parentName:"p"},"Schalter")," f\xfcr die zwei ",(0,i.kt)("a",{parentName:"p",href:"/docs/motor/hBridge"},"H-Br\xfccken")," ansteuern zu m\xfcssen, werden f\xfcr jede H-Br\xfccke nur jeweils zwei Steuereing\xe4nge (IN1, IN2 und IN3, IN4) verwendet, um die entsprechenden Betriebsmoden einzustellen."),(0,i.kt)("h2",{id:"eigenschaften"},"Eigenschaften"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zwei H-Br\xfccken zum Ansteuern von zwei Gleichstrommotoren."),(0,i.kt)("li",{parentName:"ul"},"Betriebsspannung: 2,7 V bis 10,8 V"),(0,i.kt)("li",{parentName:"ul"},"Lastrom: 1,5 A bei Dauerlast und 2 A bei kurzzeitiger Spitzenlast"),(0,i.kt)("li",{parentName:"ul"},"Automatische Abschaltfunktion bei zu gro\xdfen Laststr\xf6men, Kurzschluss, zu geringer Betriebsspannung oder beim \xdcberschreiten der Maximaltemperatur.")),(0,i.kt)("h2",{id:"betriebsmoden"},"Betriebsmoden"),(0,i.kt)("p",null,"Die Funktionen der einzelnen Pins zum Steuern des Motors sind in der folgenden Tabelle zusammengefasst (f\xfcr den Motor 2 sind die Pins IN3 und IN4 zu verwenden):"),(0,i.kt)("div",{className:"centerTab"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Motorfunktion   (Motor 1)"),(0,i.kt)("th",{parentName:"tr",align:null},"IN1"),(0,i.kt)("th",{parentName:"tr",align:null},"IN2"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Freilauf"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Motorbremse"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vorw\xe4rts"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R\xfcckw\xe4rts"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"1"))))),(0,i.kt)("h2",{id:"beispiel-motor-mit-taster"},"Beispiel (Motor mit Taster)"),(0,i.kt)("p",null,"Im folgenden einfachen Beispiel soll ein Motor durch einen Taster gesteuert werden.\nDer verwendete ",(0,i.kt)("strong",{parentName:"p"},"Taster")," wird mit dem ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/input#interner-pull-up-widerstand"},"eingebauten Pull-Up-Widerstand")," des Arduinos am ",(0,i.kt)("strong",{parentName:"p"},"Pin A1")," angeschlossen (ein analoger Eingang kann immer auch als digitaler Eingang verwendet werden).\nDer Eing\xe4nge ",(0,i.kt)("strong",{parentName:"p"},"IN1 und IN2 des Motortreiber DRV8833")," werden mit dem ",(0,i.kt)("strong",{parentName:"p"},"Pin 5 und Pin 6 des Arduinos")," verbunden. Der Motor selbst wird wie in der Abbildung dargestellt mit den Ausg\xe4ngen ",(0,i.kt)("strong",{parentName:"p"},"OUT1")," und ",(0,i.kt)("strong",{parentName:"p"},"OUT2")," des Motortreibers verbunden. "),(0,i.kt)("p",null," Der Motortreiber wird mit einer ",(0,i.kt)("strong",{parentName:"p"},"separaten Spannungsversorgung")," (z.B. ein 9V Block oder 4x AA Batterien) betrieben werden, wobei der Minuspol der Batterien mit der Masse (GND) vom Arduino und dem Motortreiber DRV8833 verbunden wird."),(0,i.kt)("img",{src:"/img/motor/drv8833_Connection.png",alt:"Motortreiber DRV8833 mit einem Arduino",width:"500px",className:"center"}),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Der Motortreiber darf nicht an den 5V Ausgang des Arduinos angeschlossen werden.")),(0,i.kt)("h3",{id:"code-betriebsmoden"},"Code (Betriebsmoden)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},'// Einfaches Beispiel zum Ansteuern des DRV8833\n//      ____________________________________\n//      in1   in2   Motorfunktion\n//      ------------------------------------\n//      1     0     Vorw\xe4rts\n//      0     1     R\xfcckw\xe4rts \n//      1     1     Bremse\n//      0     0     Freilauf\n//      ____________________________________   \n\n#define pinTaster1 A1\nconst int in1 = 5; // Steuer-Pins f\xfcr den drv8833\nconst int in2 = 6;\n\nvoid setup() {\n  Serial.begin(115200);\n\n  pinMode(in1, OUTPUT); // DRV8833\n  pinMode(in2, OUTPUT);\n  pinMode(pinTaster1, INPUT_PULLUP);  // Eingang mit einem internen Pullup-Widerstand\n}\n\nvoid loop() {\n  int statusTaster1 = digitalRead(pinTaster1);\n\n  if (statusTaster1){ // wenn statusTaster1 == 1\n    digitalWrite(in1, LOW); // \n    digitalWrite(in2, LOW); // \n    Serial.println("IN1,2: 0,0 (Freilauf)");\n  } \n  else {\n    digitalWrite(in1, LOW); // \n    digitalWrite(in2, HIGH);\n    Serial.println("IN1,2: 0,1 (Vorw\xe4rts)");\n  } \n}\n')),(0,i.kt)("h2",{id:"die-geschwindigkeit-mit-pwm-signalen-steuern"},"Die Geschwindigkeit mit PWM-Signalen steuern"),(0,i.kt)("p",null,"Die oben dargestellten ",(0,i.kt)("a",{parentName:"p",href:"/docs/motor/drv8833#betriebsmoden"},"Betriebsmoden")," lassen sich noch durch 4 weitere Betriebsmoden f\xfcr die ",(0,i.kt)("strong",{parentName:"p"},"Geschwindigkeitssteuerung")," erg\xe4nzen. Dies wird durch die Verwendung von ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/pwm"},"PWM-Signalen")," realisiert."),(0,i.kt)("div",{className:"centerTab"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Motorfunktion   (Motor 1)"),(0,i.kt)("th",{parentName:"tr",align:null},"IN1"),(0,i.kt)("th",{parentName:"tr",align:null},"IN2"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vorw\xe4rts (Freilauf)"),(0,i.kt)("td",{parentName:"tr",align:null},"pwm"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R\xfcckw\xe4rts  (Freilauf)"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"pwm")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R\xfcckw\xe4rts (Bremsen)"),(0,i.kt)("td",{parentName:"tr",align:null},"pwm"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vorw\xe4rts (Bremsen)"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"pwm"))))),(0,i.kt)("h3",{id:"codeauszug-geschwindigkeitssteuerung"},"Codeauszug (Geschwindigkeitssteuerung)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"// unvollst\xe4ndiges Programmbeispiel zur Geschwindikeitssteuerung\n\nint motorSpeed = 150; // Werte von 0 ... 255 (PWM Signal)\n\n// dreht den Motor mit reduzierter Geschwindigkeit in eine Richtung\ndigitalWrite(in1, LOW); \nanalogWrite (in2, motorSpeed); \n\ndelay(1000);\n\n// dreht den Motor mit reduzierter Geschwindigkeit in die andere Richtung\nanalogWrite(in1, motorSpeed); \ndigitalWrite (in2, LOW);\n")),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Erweitern Sie das obige Beispiel so, dass ",(0,i.kt)("strong",{parentName:"p"},"ein Motor mit zwei Tastern")," gesteuert werden kann:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ist der Taster 1 gedr\xfcckt, dreht der Motor vorw\xe4rts."),(0,i.kt)("li",{parentName:"ul"},"Ist der Taster 2 gedr\xfcckt, dreht der Motor r\xfcckw\xe4rts."),(0,i.kt)("li",{parentName:"ul"},"Ist kein Taster gedr\xfcckt, ist der Motor im Freilauf."),(0,i.kt)("li",{parentName:"ul"},"Sind beide Taster gedr\xfcckt, ist die Motorbremse aktiv.  ")),(0,i.kt)("p",{parentName:"li"},"Schreiben Sie f\xfcr diese Aufgabe die folgenden Funktionen selber: ",(0,i.kt)("inlineCode",{parentName:"p"},"dreheMotorLinks()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dreheMotorRechts()"),",",(0,i.kt)("inlineCode",{parentName:"p"},"stoppeMotorBremse()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stoppeMotorFreilauf"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Die Schaltung der Aufgabe 1 soll um zwei verschiedenfarbige LEDs erweitert werden. welche anzeigen, ob sich der Motor im Links- oder Rechtslauf befindet.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Nun soll die Geschwindigkeit des Motor schrittweise mit den beiden Tastern gesteuert werden:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mit dem einem Taster wird die Geschwindigkeit erh\xf6ht, mit dem anderen reduziert."),(0,i.kt)("li",{parentName:"ul"},"Sind beide Taster gedr\xfcckt, stoppt der Motor mit der Motorbremse.\nNotieren Sie sich, ab welchem PWM Wert der Motor anf\xe4ngt zu drehen und wann er wieder stoppt."))))),(0,i.kt)("h2",{id:"weiterf\xfchrende-links"},"Weiterf\xfchrende Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ti.com/lit/ds/symlink/drv8833.pdf?ts=1605276968067&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FDRV8833"},"Datenblatt DRV8833")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pololu.com/product/2130"},"DRV8833 Board von Pololu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/adafruit-drv8833-dc-stepper-motor-driver-breakout-board?view=all"},"Adafruit DRV8833"))))}m.isMDXComponent=!0}}]);