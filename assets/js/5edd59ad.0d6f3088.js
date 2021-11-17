"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[1637],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),o=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=o(t),c=r,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||a;return t?i.createElement(k,l(l({ref:n},u),{},{components:t})):i.createElement(k,l({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var o=2;o<a;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9443:function(e,n,t){var i=(0,t(7294).createContext)(void 0);n.Z=i},913:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return k},metadata:function(){return h},toc:function(){return b}});var i=t(7462),r=t(3366),a=t(7294),l=t(3905),d=t(9443);var s=function(){var e=(0,a.useContext)(d.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(6010),u="tabItem_1uMI",m="tabItemActive_2DSg";var p=function(e){var n,t=e.lazy,i=e.block,r=e.defaultValue,l=e.values,d=e.groupId,p=e.className,c=a.Children.toArray(e.children),k=null!=l?l:c.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=r?r:null==(n=c.find((function(e){return e.props.default})))?void 0:n.props.value,h=s(),b=h.tabGroupChoices,f=h.setTabGroupChoices,v=(0,a.useState)(g),L=v[0],N=v[1],w=[];if(null!=d){var O=b[d];null!=O&&O!==L&&k.some((function(e){return e.value===O}))&&N(O)}var E=function(e){var n=e.currentTarget,t=w.indexOf(n),i=k[t].value;N(i),null!=d&&(f(d,i),setTimeout((function(){var e,t,i,r,a,l,d,s;(e=n.getBoundingClientRect(),t=e.top,i=e.left,r=e.bottom,a=e.right,l=window,d=l.innerHeight,s=l.innerWidth,t>=0&&a<=s&&r<=d&&i>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(m),setTimeout((function(){return n.classList.remove(m)}),2e3))}),150))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=w.indexOf(e.target)+1;t=w[i]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},p)},k.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:L===n?0:-1,"aria-selected":L===n,className:(0,o.Z)("tabs__item",u,{"tabs__item--active":L===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:D,onFocus:E,onClick:E},null!=t?t:n)}))),t?(0,a.cloneElement)(c.filter((function(e){return e.props.value===L}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==L})}))))};var c=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)},k={title:"Mit Objektorientierung zum Multitasking",sidebar_label:"2. Objektorientierung",description:"Objektorientiert Programmierung (OOP) beim Arduino. Wie mit Klassen und Objekten Multitasking realisiert werden kann.",custom_edit_url:null,keywords:["Arduino","Multitasking","objektorientiert","Klassen","Objekte","Blinken","LED","OOP"]},g=void 0,h={unversionedId:"arduino/objectOriented",id:"arduino/objectOriented",isDocsHomePage:!1,title:"Mit Objektorientierung zum Multitasking",description:"Objektorientiert Programmierung (OOP) beim Arduino. Wie mit Klassen und Objekten Multitasking realisiert werden kann.",source:"@site/docs/arduino/objectOriented.md",sourceDirName:"arduino",slug:"/arduino/objectOriented",permalink:"/docs/arduino/objectOriented",editUrl:null,tags:[],version:"current",lastUpdatedAt:1631966711,formattedLastUpdatedAt:"18.9.2021",frontMatter:{title:"Mit Objektorientierung zum Multitasking",sidebar_label:"2. Objektorientierung",description:"Objektorientiert Programmierung (OOP) beim Arduino. Wie mit Klassen und Objekten Multitasking realisiert werden kann.",custom_edit_url:null,keywords:["Arduino","Multitasking","objektorientiert","Klassen","Objekte","Blinken","LED","OOP"]},sidebar:"sideBarArduino",previous:{title:"1. Men\xfcsteuerung",permalink:"/docs/arduino/simpleMenu"},next:{title:"1. Wie es begann",permalink:"/docs/motor/wieEsBegann"}},b=[{value:"Objektorientierte Programmierung",id:"objektorientierte-programmierung",children:[]},{value:"Beispiel einer LED-Klasse",id:"beispiel-einer-led-klasse",children:[{value:"Klassendefinition",id:"klassendefinition",children:[]},{value:"Konstruktor",id:"konstruktor",children:[]},{value:"Methode zum Umschalten",id:"methode-zum-umschalten",children:[]},{value:"Das vollst\xe4ndige Programm",id:"das-vollst\xe4ndige-programm",children:[]}]},{value:"Wie nutze ich Tabs mit Klassen",id:"wie-nutze-ich-tabs-mit-klassen",children:[{value:"Aufgaben (Klassen)",id:"aufgaben-klassen",children:[]}]},{value:"Ein Array mit Objekten",id:"ein-array-mit-objekten",children:[{value:"Aufgaben (Array)",id:"aufgaben-array",children:[]}]},{value:"Links",id:"links",children:[]}],f={toc:b};function v(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,i.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"objektorientierte-programmierung"},"Objektorientierte Programmierung"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Klassen")," und ",(0,l.kt)("strong",{parentName:"p"},"Objekte")," stellen eine Weiterentwicklung des Konzeptes von Variablen und Funktionen dar. W\xe4hrend eine Variable nur einen Wert (oder als Array auch mehrere Werte) besitzen kann, so kann ",(0,l.kt)("strong",{parentName:"p"},"ein Objekt zus\xe4tzlich auch Methoden besitzen"),",  welche die Variablen verarbeiten k\xf6nnen. Dies erm\xf6glicht es, einen gut lesbaren und flexibel einsetzbaren Code zu schreiben."),(0,l.kt)("p",null,"Stehen bei Variablen ",(0,l.kt)("strong",{parentName:"p"},"vordefinierte Variablentypen")," zur Verf\xfcgung (",(0,l.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"char"),", ...), so ist es bei Objekten notwendig, den ",(0,l.kt)("strong",{parentName:"p"},"Objekttyp")," selbst als eine Art Bauplan f\xfcr das Objekt zu programmieren. In der objektorientierten Programmierung wird dieser (selbst geschriebene) Objekttyp ",(0,l.kt)("strong",{parentName:"p"},"Klasse")," genannt."),(0,l.kt)("img",{src:"/img/arduino/ObjektKlassse.png",alt:"Klasse und Objekt",width:"400px",class:"center"}),(0,l.kt)("p",null,"Aber was ist nun der ",(0,l.kt)("strong",{parentName:"p"},"Vorteil von Klassen bzw. Objekten"),". Nehmen wir als Beispiel eine Schaltung mit 5 LEDs. Jede LED hat einen eigenen Pin-Anschluss, einen eigenen Zustand (",(0,l.kt)("em",{parentName:"p"},"an/aus"),") und soll mit festgelegten An-/Auszeiten blinken k\xf6nnen. Dieses Verhalten lie\xdfe sich ohne Weiteres auch ohne eine Klasse f\xfcr die LEDs realisieren. Allerdings m\xfcssten daf\xfcr eine Menge globaler Variablen deklariert werden, damit jede  LED unabh\xe4ngig voneinander gesteuert werden kann. Das macht den Code schnell un\xfcbersichtlich und schwer zu lesen:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bool zustandLED1;\nbool zustandLED2;\n// ...\n\nint anZeit1;\nint anZeit2;\n//  ...\n\nint ausZeit1;\nint ausZeit2;\n// ... \n")),(0,l.kt)("p",null,"Der Vorteil der objektorientierten Programmierung liegt aber darin, das wir nur ",(0,l.kt)("strong",{parentName:"p"},"eine")," Klasse f\xfcr beiliebig viele LEDs schreiben m\xfcssen. Ist die Klasse programmiert, k\xf6nnen beliebig viele Objekte f\xfcr die realen LEDs erzeugt werden. Der Code bleibt \xfcbersichtlich und leicht verst\xe4ndlich."),(0,l.kt)("h2",{id:"beispiel-einer-led-klasse"},"Beispiel einer LED-Klasse"),(0,l.kt)("p",null,"Am Beispiel einer einfachen LED-Klasse, welche eine LED umschalten (togglen) soll, wird im Folgenden das Grundkonzept der objektorientierten Programmierung erl\xe4utert. "),(0,l.kt)("h3",{id:"klassendefinition"},"Klassendefinition"),(0,l.kt)("p",null,"Um eine Klasse zu schreiben (oder besser zu definieren) wird das Schl\xfcsselwort ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," verwendet.  Zwischen die geschweiften Klammern ",(0,l.kt)("inlineCode",{parentName:"p"},"{ ... }")," folgt der Code f\xfcr die Klasse. Nach der Klassenbeschreibung folgt ein Semikolon."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"class Led {\n  // Beschreibung der Klasse\n\n}; // Semikolon am Ende\n")),(0,l.kt)("p",null,"Die LED soll sp\xe4ter mit einem einfachen Befehl (",(0,l.kt)("inlineCode",{parentName:"p"},"toggle()"),") ihren Zustand umschalten k\xf6nnen (an/aus). Daf\xfcr muss die Klasse Attribute  (Variablen) zum Speichern des aktuellen LED-Zustands (",(0,l.kt)("inlineCode",{parentName:"p"},"stateLed"),") und des verwendeten LED-Pins (",(0,l.kt)("inlineCode",{parentName:"p"},"pinLed"),") haben."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"class Led {\n                          // Attribute (Eigenschaften) der Klasse\n    int  pinLed;          // LED-Pin\n    bool stateLed;        // Zustand der LED \n};\n")),(0,l.kt)("h3",{id:"konstruktor"},"Konstruktor"),(0,l.kt)("p",null,"Da eine Klasse nur eine Art Bauplan f\xfcr die sp\xe4teren Objekte ist, muss es auch eine M\xf6glichkeit geben, dem Objekt beim Erzeugen ein paar Informationen zu \xfcbergeben. Hierf\xfcr kann der ",(0,l.kt)("strong",{parentName:"p"},"Konstruktor")," verwendet werden."),(0,l.kt)("p",null,"Der Konstruktor ist eine spezielle Methode, welche einmalig beim Erzeugen eines Objektes aufgerufen wird. Der Konstruktor hat, wie alle anderen Methoden einer Klasse auch, Zugriff auf die Attribute (Variablen) einer Klasse. Der Konstruktor wird genauso wie eine normale Methode definiert, jedoch ohne das Schl\xfcsselwort ",(0,l.kt)("inlineCode",{parentName:"p"},"void"),". ",(0,l.kt)("strong",{parentName:"p"},"Der Name des Konstruktors entspricht dem Klassennamen"),"."),(0,l.kt)("p",null,"Damit auf den Konstruktor auch zugegriffen werden kann, muss das der Klasse durch das Schl\xfcsselwort ",(0,l.kt)("inlineCode",{parentName:"p"},"public:")," mitgeteilt werden. Auf alle Methoden und Attribute, die nach ",(0,l.kt)("inlineCode",{parentName:"p"},"public:")," folgen, kann sp\xe4ter direkt zugegriffen."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"class Led {               // Beginn der Klassendefinition\n                          // Attribute (Eigenschaften) der Klasse\n    int  pinLed;          // LED-Pin\n    bool stateLed;        // Zustand der LED \n  //highlight-next-line  \n  public:                 // alle Methoden (oder Attribute) nach public sind \xf6ffentlich\n\n    //highlight-start\n    Led(int pPin) {       // Konstruktor (ohne void, int, etc.)\n      pinLed   = pPin;\n      stateLed = false;\n      pinMode(pin, OUTPUT);\n    }\n   //highlight-end \n};   \n")),(0,l.kt)("h3",{id:"methode-zum-umschalten"},"Methode zum Umschalten"),(0,l.kt)("p",null,"Was der LED-Klasse an dieser Stelle noch fehlt, ist die Methode ",(0,l.kt)("inlineCode",{parentName:"p"},"toggle()")," zum Umschalten der LED. Da auf die Methode, genauso wie den Konstruktor, \xf6ffentlich zugegriffen werden soll, wird sie nach dem Schl\xfcsselwort ",(0,l.kt)("inlineCode",{parentName:"p"},"public")," definiert."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// Methode der Led-Klasse\nvoid toggle() {          // Die Methoden einer Klassen k\xf6nnen auf die Attribute zugreifen      \n  stateLed = !stateLed; \n  digitalWrite(pin, stateLed);\n}\n\n   \n")),(0,l.kt)("p",null,"Mit der Zeile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"stateLed = !stateLed; \n")),(0,l.kt)("p",null,"wird der logische Wert des Attributs ",(0,l.kt)("inlineCode",{parentName:"p"},"stateLed")," negiert. War ",(0,l.kt)("inlineCode",{parentName:"p"},"stateLed")," zuerst ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", ist es danach ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". Wird anschlie\xdfend der Zustand der LED mit dem Befehl "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"digitalWrite(pin, stateLed);\n")),(0,l.kt)("p",null,"aktualisiert, so \xe4ndert die LED bei jedem Aufruf der Methode ihren Zustand."),(0,l.kt)("h3",{id:"das-vollst\xe4ndige-programm"},"Das vollst\xe4ndige Programm"),(0,l.kt)("p",null,"Im vollst\xe4ndigen Programm sollen mit der obigen Klasse zwei LED Objekte ",(0,l.kt)("inlineCode",{parentName:"p"},"ledGreen")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"ledRed")," erzeugt werden. Das Erzeugen eines neuen Objektes wird auch ",(0,l.kt)("strong",{parentName:"p"},"instanziieren")," genannt, was nichts anderes bedeutet, als dass mit der Klasse eine neue ",(0,l.kt)("strong",{parentName:"p"},"Instanz")," erzeugt wird."),(0,l.kt)("p",null,"Mit dem Klassennamen (",(0,l.kt)("inlineCode",{parentName:"p"},"Led"),") gefolgt von einem frei w\xe4hlbaren Namen f\xfcr das Objekt (z.B. ",(0,l.kt)("inlineCode",{parentName:"p"},"ledGreen"),") und dem Parameter f\xfcr den Konstruktor k\xf6nnen nun verschiedene Objekte erzeugt werden."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#define LED_GREEN 4\n#define LED_RED   5\n\nLed ledGreen(LED_GREEN);  // ein `Led` Objekt mit Pin 4\nLed ledRed(LED_RED);      // ein weiteres `Led` Objekt mit Pin 5\n\n")),(0,l.kt)("p",null,"Zu guter Letzt muss die Method ",(0,l.kt)("inlineCode",{parentName:"p"},"toggle()")," f\xfcr das jeweilige Objekt noch aufgerufen werden. Daf\xfcr wird das Objekt mit einem Punkt ",(0,l.kt)("inlineCode",{parentName:"p"},".")," mit dem Methodennamen verkn\xfcpft."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ledGreen.toggle();    // Methodenaufruf vom Objekt `ledGreen`\nledRed.toggle();      // Methodenaufruf vom Objekt `ledRed`\n\n")),(0,l.kt)("p",null,"Zusammengefasst ergibt sich folgendes Programm f\xfcr zwei umschaltbare LEDs mit einer Led-Klasse."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title="umschaltenObjekte.ino"',title:'"umschaltenObjekte.ino"'},"#define LED_GREEN 3\n#define LED_RED   6\n\nclass Led {               // Beginn der Klassendefinition\n    int  pinLed;          // LED-Pin (Attritbute der Klasse)\n    bool stateLed;        // Zustand der LED \n\n  public:                 // alle Methoden (oder Attribute) nach public sind \xf6ffentlich\n    Led(int pPin) {       // Konstruktor (ohne void, int, etc.)\n      pinLed   = pPin;\n      stateLed = false;\n      pinMode(pinLed, OUTPUT);\n    }\n    void toggle() {       // Die Methoden einer Klassen k\xf6nnen auf die Attribute zugreifen      \n      stateLed = !stateLed; \n      digitalWrite(pinLed, stateLed);\n    }\n};                        // Eine Klassendefinition endet mit einem Semikolon\n\nLed ledGreen(LED_GREEN);  // ein `Led` Objekt mit dem Namen `ledGreen` mit Pin 4\nLed ledRed(LED_RED);      // ein weiteres `Led` Objekt mit Pin 5\n\nvoid setup() {\n  // bleibt leer\n}\n\nvoid loop() {\n  ledGreen.toggle();      // Methodenaufruf vom Objekt ledGreen\n  delay(200);\n  ledRed.toggle();        // Methodenaufruf vom Objekt ledGreen\n  delay(800);\n  ledGreen.toggle();\n  delay(200);\n  ledRed.toggle();\n  delay(800);\n}\n")),(0,l.kt)("h2",{id:"wie-nutze-ich-tabs-mit-klassen"},"Wie nutze ich Tabs mit Klassen"),(0,l.kt)("p",null,"Das vollst\xe4ndige Programm mit der LED Klasse kann auch in ",(0,l.kt)("strong",{parentName:"p"},"mehrere Tabs unterteilt werden"),". Wird eine Klasse in einem separaten Tab definiert, so muss der Name des Tabs die ",(0,l.kt)("strong",{parentName:"p"},"Dateiendung")," ",(0,l.kt)("inlineCode",{parentName:"p"},".cpp")," erhalten. Au\xdferdem muss mit dem Befehl ",(0,l.kt)("inlineCode",{parentName:"p"},'#include "LedKlasse.cpp"')," der entsprechende Tab ",(0,l.kt)("strong",{parentName:"p"},"in das Hauptprogram eingebunden werden.")),(0,l.kt)(p,{defaultValue:"Blink",values:[{label:"Blink",value:"Blink"},{label:"LedKlasse.cpp",value:"LedKlasse.cpp"}],mdxType:"Tabs"},(0,l.kt)(c,{value:"Blink",mdxType:"TabItem"},(0,l.kt)("p",null,"Das ",(0,l.kt)("strong",{parentName:"p"},"Hauptprogramm")," (mit ",(0,l.kt)("inlineCode",{parentName:"p"},"void setup()")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"void loop()"),") steht in dem ersten Tab mit dem Namen des Sketches (",(0,l.kt)("inlineCode",{parentName:"p"},"Blink"),"). Klassen, welche in einem anderen Tab definiert werden, m\xfcssen mit dem Befehl ",(0,l.kt)("inlineCode",{parentName:"p"},'#include "LedKlasse.cpp"')," in das Hauptprogramm eingebunden werden."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title="Blink"',title:'"Blink"'},'//highlight-next-line\n#include "LedKlasse.cpp"  // Einbinden der Datei LedKlasse.cpp mit der `Led` Klasse\n\n#define LED_GREEN 3\n#define LED_RED   6\n\nLed ledGreen(LED_GREEN);  // ein `Led` Objekt mit dem Namen `ledGreen` mit Pin 4\nLed ledRed(LED_RED);      // ein weiteres `Led` Objekt mit Pin 5\n\nvoid setup() {\n  // bleibt leer\n}\n\nvoid loop() {\n  ledGreen.toggle();      // Methodenaufruf vom Objekt ledGreen\n  delay(200);\n  ledRed.toggle();        // Methodenaufruf vom Objekt ledGreen\n  delay(800);\n  ledGreen.toggle();\n  delay(200);\n  ledRed.toggle();\n  delay(800);\n}\n'))),(0,l.kt)(c,{value:"LedKlasse.cpp",mdxType:"TabItem"},(0,l.kt)("p",null,"Tabs, in denen ",(0,l.kt)("strong",{parentName:"p"},"Klassen")," definiert werden, m\xfcssen mit der Dateiendung ",(0,l.kt)("inlineCode",{parentName:"p"},".cpp")," (z.B. ",(0,l.kt)("inlineCode",{parentName:"p"},"LedKlasse.cpp"),") benannt werden. Damit in diesen Tabs auch die Arduino-Befehle genutzt werden k\xf6nnen, muss die ",(0,l.kt)("strong",{parentName:"p"},"Arduino-Bibliothek")," mit dem Befehl ",(0,l.kt)("inlineCode",{parentName:"p"},"#include <Arduino.h> ")," ",(0,l.kt)("strong",{parentName:"p"},"eingebunden werden"),"."),(0,l.kt)("p",null,"Au\xdferdem m\xfcssen die Tabs (eigentlich eigene Dateien) dem Hauptprogramm mit dem ",(0,l.kt)("inlineCode",{parentName:"p"},"#inlcude")," Befehl zug\xe4nglich gemacht werden."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title="LedKlasse.cpp"',title:'"LedKlasse.cpp"'},"//highlight-next-line\n#include <Arduino.h>      // Einbinden der Datei Arduino-Bibliothek\n\nclass Led {               // Beginn der Klassendefinition\n    int  pinLed;          // LED-Pin (Attritbute der Klasse)\n    bool stateLed;        // Zustand der LED \n\n  public:                 // alle Methoden (oder Attribute) nach public sind \xf6ffentlich\n    Led(int pPin) {       // Konstruktor (ohne void, int, etc.)\n      pinLed   = pPin;\n      stateLed = false;\n      pinMode(pinLed, OUTPUT);\n    }\n    void toggle() {       // Die Methoden einer Klassen k\xf6nnen auf die Attribute zugreifen      \n      stateLed = !stateLed; \n      digitalWrite(pinLed, stateLed);\n    }\n};                        // Eine Klassendefinition endet immer mit einem Semikolon\n")))),(0,l.kt)("p",null,"Das vollst\xe4ndige ",(0,l.kt)("a",{target:"_blank",href:t(6612).Z},"Blink-Programm")," kann auch heruntergeladen werden."),(0,l.kt)("h3",{id:"aufgaben-klassen"},"Aufgaben (Klassen)"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,l.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Erweitern Sie die ",(0,l.kt)("inlineCode",{parentName:"p"},"Led")," Klasse im obigen Beispielprogramm um die Methoden ",(0,l.kt)("inlineCode",{parentName:"p"},"anschalten()")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"ausschalten()"),". Testen Sie die neuen Methoden mit einem geeignetem Programm.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Schreiben Sie eine Klasse ",(0,l.kt)("inlineCode",{parentName:"p"},"Blinker"),", welche eine Led blinken l\xe4sst."),(0,l.kt)("p",{parentName:"li"},"Um die LED mit den  vorgegebenen An- und Auszeiten blinken zu lassen, wird eine Methode ",(0,l.kt)("inlineCode",{parentName:"p"},"update()")," ben\xf6tigt, welche regelm\xe4\xdfig aufgerufen werden muss. Die Methode misst die Zeit seit dem letzten Umschalten der LED und \xfcberpr\xfcft, ob die LED wieder umgeschaltet werden muss."),(0,l.kt)("p",{parentName:"li"},"Nutzen Sie die Vorlage und erg\xe4nzen Sie den Code f\xfcr die Methoden und ",(0,l.kt)("inlineCode",{parentName:"p"},"update()")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"setBlink()")," (legt die An-/Auszeit des Blinkers fest)."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"#define LED1 3 \n#define LED2 5\n\nclass Blinker\n{\n    int onTime;  // in ms\n    int offTime; // in ms\n    int pinLed;\n    int stateLed;\n    unsigned long lastTime;\n\n  public:\n    Blinker(int pin)\n    {\n      onTime = 1000;\n      offTime = 1000;\n      pinLed = pin;\n      lastTime = 0;\n      stateLed = LOW;\n      \n      pinMode(pinLed, OUTPUT);\n    }\n\n    // L\xe4sst die LED durch regelm\xe4\xdfiges Aufrufen blinken.\n    void update() \n    {\n      // ***** Fehlenden Code erg\xe4nzen *****\n    }\n\n    // Konfiguriert die An- und Auszeit des Blinkers\n    void setBlink(int pOn, int pOff)\n    {\n      // ***** Fehlenden Code erg\xe4nzen *****\n    }\n}; \n\nBlinker blink1(LED1);\nBlinker blink2(LED2);\n\nvoid setup() {\n  blink1.setBlink(500, 100);\n  blink2.setBlink(400, 200);\n}\n\nvoid loop() {\n  blink1.update();\n  blink2.update();\n}\n")))))),(0,l.kt)("h2",{id:"ein-array-mit-objekten"},"Ein Array mit Objekten"),(0,l.kt)("p",null,"Grunds\xe4tzlich ist es bei einem ",(0,l.kt)("a",{parentName:"p",href:"/docs/arduino/array"},"Array")," egal, von welchen Datentyp die Elemente sind (solange alle Elemente den selben Datentyp haben). Deshalb kann auch ein Array aus LED-Objekten erzeugt werden."),(0,l.kt)("p",null,"Um ein Array mit Objekten zu erzeugen, wird zuerst der Objekttyp (Klassenname) ",(0,l.kt)("inlineCode",{parentName:"p"},"Led")," und danach der Namen des Arrays ",(0,l.kt)("inlineCode",{parentName:"p"},"ledListe"),"geschrieben. Nach dem Arraynamen folgen zwei eckige Klammern ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),", welche anzeigen, dass es sich um einen Array handelt. "),(0,l.kt)("p",null,"Anschlie\xdfend werden in einer geschweiften Klammer ",(0,l.kt)("inlineCode",{parentName:"p"},"{ ... }")," die einzelnen Elemente, also die jeweiligen LED-Objekte \xfcbergeben."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Led ledListe[] = {Led(3), Led(6), Led(9), Led(10)}; \n")),(0,l.kt)("p",null,"Soll nun ein einzelnes Objekt des Array angesprochen werden, so wird das mit dem entsprechenden Index in eckigen Klammern getan."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ledListe[0].toggle();  // Schaltet die 1. LED\nledListe[1].toggle();  // Schaltet die 2. LED\n")),(0,l.kt)("h3",{id:"aufgaben-array"},"Aufgaben (Array)"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,l.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"Erweitern Sie die Schaltung der ",(0,l.kt)("a",{parentName:"li",href:"/docs/arduino/objectOriented#aufgaben-klassen"},"Aufgabe 2")," auf insgesamt 5 LEDs. \xdcberlegen Sie sich ein interessantes Blinkmuster, welches Sie mit der Led-Klasse und einem ",(0,l.kt)("strong",{parentName:"li"},"Array aus Led-Objekten")," programmieren.")))),(0,l.kt)("h2",{id:"links"},"Links"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://paulmurraycbr.github.io/ArduinoTheOOWay.html"},"Arduino the Object Oriented Way")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/multi-tasking-the-arduino-part-1/a-classy-solution"},"A Classy Solution - Adafruit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=S_uaROFnWSg"},"Tutorial: Object Oriented Programming with the Arduino"))))}v.isMDXComponent=!0},6010:function(e,n,t){function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})},6612:function(e,n,t){n.Z=t.p+"assets/files/blink-0825f200ea2d7a7b2fcefc1c597e00db.zip"}}]);