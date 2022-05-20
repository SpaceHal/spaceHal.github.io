"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[1637],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),o=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=o(t),c=r,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||a;return t?i.createElement(k,l(l({ref:n},u),{},{components:t})):i.createElement(k,l({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var o=2;o<a;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2513:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return h},metadata:function(){return L},toc:function(){return v}});var i=t(3117),r=t(102),a=t(7294),l=t(3905),d=t(2389),s=t(9443);var o=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(6681),p=t(6010),m="tabItem_1uMI";function c(e){var n,t,r,l=e.lazy,d=e.block,s=e.defaultValue,c=e.values,k=e.groupId,g=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,u.lx)(h,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var L=null===s?s:null!=(n=null!=s?s:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=b[0])?void 0:r.props.value;if(null!==L&&!h.some((function(e){return e.value===L})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+L+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=o(),N=v.tabGroupChoices,w=v.setTabGroupChoices,O=(0,a.useState)(L),D=O[0],E=O[1],j=[],y=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var K=N[k];null!=K&&K!==D&&h.some((function(e){return e.value===K}))&&E(K)}var A=function(e){var n=e.currentTarget,t=j.indexOf(n),i=h[t].value;i!==D&&(y(n),E(i),null!=k&&w(k,i))},z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=j.indexOf(e.currentTarget)+1;t=j[i]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":d},g)},h.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:D===n?0:-1,"aria-selected":D===n,key:n,ref:function(e){return j.push(e)},onKeyDown:z,onFocus:A,onClick:A},r,{className:(0,p.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":D===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==D})}))))}function k(e){var n=(0,d.Z)();return a.createElement(c,(0,i.Z)({key:String(n)},e))}var g=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)},b=["components"],h={title:"Einfache Objektorientierung mit Arduino",sidebar_label:"Objektorientierung",description:"Objektorientierte Programmierung (OOP) beim Arduino. Wie mit Klassen und Objekten Multitasking realisiert werden kann.",custom_edit_url:null,keywords:["Arduino","Arduino Klassen","Multitasking","objektorientiert","Klassen","Objekte","Blinken","LED","OOP","OO Programmierung"]},f=void 0,L={unversionedId:"arduino/objectOriented",id:"arduino/objectOriented",title:"Einfache Objektorientierung mit Arduino",description:"Objektorientierte Programmierung (OOP) beim Arduino. Wie mit Klassen und Objekten Multitasking realisiert werden kann.",source:"@site/docs/arduino/objectOriented.md",sourceDirName:"arduino",slug:"/arduino/objectOriented",permalink:"/docs/arduino/objectOriented",editUrl:null,tags:[],version:"current",lastUpdatedAt:1641119333,formattedLastUpdatedAt:"2.1.2022",frontMatter:{title:"Einfache Objektorientierung mit Arduino",sidebar_label:"Objektorientierung",description:"Objektorientierte Programmierung (OOP) beim Arduino. Wie mit Klassen und Objekten Multitasking realisiert werden kann.",custom_edit_url:null,keywords:["Arduino","Arduino Klassen","Multitasking","objektorientiert","Klassen","Objekte","Blinken","LED","OOP","OO Programmierung"]},sidebar:"sideBarArduino",previous:{title:"Men\xfcsteuerung",permalink:"/docs/arduino/simpleMenu"},next:{title:"OLED Display",permalink:"/docs/arduino/oled"}},v=[{value:"Beispiel einer LED-Klasse",id:"beispiel-einer-led-klasse",children:[{value:"Klassendefinition",id:"klassendefinition",children:[],level:3},{value:"Konstruktor",id:"konstruktor",children:[],level:3},{value:"Methode zum Umschalten",id:"methode-zum-umschalten",children:[],level:3},{value:"Das vollst\xe4ndige Programm",id:"das-vollst\xe4ndige-programm",children:[],level:3}],level:2},{value:"Wie nutze ich Tabs mit Klassen",id:"wie-nutze-ich-tabs-mit-klassen",children:[],level:2},{value:"Ein Array mit Objekten",id:"ein-array-mit-objekten",children:[],level:2},{value:"Links",id:"links",children:[],level:2}],N={toc:v};function w(e){var n=e.components,a=(0,r.Z)(e,b);return(0,l.kt)("wrapper",(0,i.Z)({},N,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("link",{rel:"canonical",href:"https://spacehal.github.io/docs/arduino/objectOriented"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Klassen")," und ",(0,l.kt)("strong",{parentName:"p"},"Objekte")," stellen eine Weiterentwicklung des Konzeptes von Variablen und Funktionen dar. W\xe4hrend eine Variable nur einen Wert (oder als ",(0,l.kt)("a",{parentName:"p",href:"/docs/arduino/array"},"Array")," auch mehrere Werte) besitzen kann, so kann ",(0,l.kt)("strong",{parentName:"p"},"ein Objekt zus\xe4tzlich auch Methoden besitzen"),". Dies erm\xf6glicht es, einen gut lesbaren und flexibel einsetzbaren Code zu schreiben. Es wird in dann auch von objektorientierter Programmierung gesprochen."),(0,l.kt)("p",null,"Stehen bei Variablen ",(0,l.kt)("strong",{parentName:"p"},"vordefinierte Variablentypen")," zur Verf\xfcgung (",(0,l.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"char"),", ...), so ist es bei Objekten notwendig, den ",(0,l.kt)("strong",{parentName:"p"},"Objekttyp")," selbst als eine Art Bauplan f\xfcr das Objekt zu programmieren. In der objektorientierten Programmierung wird dieser (selbst geschriebene) Objekttyp ",(0,l.kt)("strong",{parentName:"p"},"Klasse")," genannt."),(0,l.kt)("p",null,"Aber was ist nun der ",(0,l.kt)("strong",{parentName:"p"},"Vorteil von Klassen bzw. Objekten"),". Nehmen wir als Beispiel f\xfcr den Arduino eine Schaltung mit 5 LEDs. Jede LED hat einen eigenen Pin-Anschluss, einen eigenen Zustand (",(0,l.kt)("em",{parentName:"p"},"an/aus"),") und soll mit festgelegten An-/Auszeiten blinken k\xf6nnen. Dieses Verhalten lie\xdfe sich ohne Weiteres auch ohne eine Klasse f\xfcr die LEDs realisieren. Allerdings m\xfcssten daf\xfcr eine Menge globaler Variablen deklariert werden, damit jede  LED unabh\xe4ngig voneinander gesteuert werden kann. Das macht den Code schnell un\xfcbersichtlich und schwer zu lesen:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bool zustandLED1;\nbool zustandLED2;\n// ...\n\nint anZeit1;\nint anZeit2;\n//  ...\n\nint ausZeit1;\nint ausZeit2;\n// ... \n")),(0,l.kt)("p",null,"Der Vorteil der objektorientierten Programmierung liegt aber darin, das wir nur ",(0,l.kt)("strong",{parentName:"p"},"eine")," Klasse f\xfcr beiliebig viele LEDs schreiben m\xfcssen. Ist die Klasse programmiert, k\xf6nnen beliebig viele Objekte f\xfcr die realen LEDs erzeugt werden. Der Code bleibt \xfcbersichtlich und leicht verst\xe4ndlich."),(0,l.kt)("h2",{id:"beispiel-einer-led-klasse"},"Beispiel einer LED-Klasse"),(0,l.kt)("p",null,"Am Beispiel einer einfachen LED-Klasse, welche eine LED umschalten (togglen) soll, wird im Folgenden das Grundkonzept der objektorientierten Programmierung erl\xe4utert. "),(0,l.kt)("img",{src:"/img/arduino/ObjektKlassse.png",alt:"Klasse und Objekt",width:"400px",className:"center"}),(0,l.kt)("h3",{id:"klassendefinition"},"Klassendefinition"),(0,l.kt)("p",null,"Um eine Klasse zu schreiben (oder besser zu definieren) wird das Schl\xfcsselwort ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," verwendet.  Zwischen die geschweiften Klammern ",(0,l.kt)("inlineCode",{parentName:"p"},"{ ... }")," folgt der Code f\xfcr die Klasse. Nach der Klassenbeschreibung folgt ein Semikolon."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"class Led {\n  // Beschreibung der Klasse\n\n}; // Semikolon am Ende\n")),(0,l.kt)("p",null,"Die LED soll sp\xe4ter mit einem einfachen Befehl (",(0,l.kt)("inlineCode",{parentName:"p"},"toggle()"),") ihren Zustand umschalten k\xf6nnen (an/aus). Daf\xfcr muss die Klasse Attribute  (Variablen) zum Speichern des aktuellen LED-Zustands (",(0,l.kt)("inlineCode",{parentName:"p"},"stateLed"),") und des verwendeten LED-Pins (",(0,l.kt)("inlineCode",{parentName:"p"},"pinLed"),") haben."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"class Led {\n    // Attribute (Variablen) der Klasse\n    int  pinLed;          // LED-Pin\n    bool stateLed;        // Zustand der LED \n};\n")),(0,l.kt)("h3",{id:"konstruktor"},"Konstruktor"),(0,l.kt)("p",null,"Da eine Klasse nur eine Art Bauplan f\xfcr die sp\xe4teren Objekte ist, muss es auch eine M\xf6glichkeit geben, dem Objekt beim Erzeugen ein paar Informationen zu \xfcbergeben. Hierf\xfcr wird der ",(0,l.kt)("strong",{parentName:"p"},"Konstruktor")," verwendet."),(0,l.kt)("p",null,"Der Konstruktor ist eine spezielle Methode, welche einmalig beim Erzeugen eines Objektes aufgerufen wird. Der Konstruktor hat, wie alle anderen Methoden einer Klasse auch, Zugriff auf die Attribute (Variablen) einer Klasse. Der Konstruktor wird genauso wie eine normale Methode definiert, jedoch ohne das Schl\xfcsselwort ",(0,l.kt)("inlineCode",{parentName:"p"},"void"),". ",(0,l.kt)("strong",{parentName:"p"},"Der Name des Konstruktors entspricht dem Klassennamen"),"."),(0,l.kt)("p",null,"Damit auf den Konstruktor auch zugegriffen werden kann, muss das der Klasse durch das Schl\xfcsselwort ",(0,l.kt)("inlineCode",{parentName:"p"},"public:")," mitgeteilt werden. Auf alle Methoden und Attribute, die nach ",(0,l.kt)("inlineCode",{parentName:"p"},"public:")," folgen, kann sp\xe4ter direkt zugegriffen."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"class Led {                 // Beginn der Klassendefinition\n                            // Attribute (Eigenschaften) der Klasse\n    int  pinLed;            // LED-Pin\n    bool stateLed;          // Zustand der LED \n  //highlight-next-line  \n  public:                   // alle Methoden (oder Attribute) nach public sind \xf6ffentlich\n\n    //highlight-start\n    Led(int pPin) {         // Konstruktor (ohne void, int, etc.)\n      pinLed   = pPin;      // Attribut `pinLed` erh\xe4lt den Wert des Konstruktor-Paramters `pPin` \n      stateLed = false;     // Zustand der LED auf false (LOW)\n      pinMode(pin, OUTPUT); // Pin als Ausgang definieren\n    }\n   //highlight-end \n};   \n")),(0,l.kt)("p",null,"Der Konstruktor im obigen Beispiel erwartet als Parameter (",(0,l.kt)("inlineCode",{parentName:"p"},"pPin"),") den verwendeten Pin. Innerhalb des Konstruktors wird dem Attribut ",(0,l.kt)("inlineCode",{parentName:"p"},"pinLed")," dann der Wert des Parameters \xfcbergeben. Das Objekt speichert also den f\xfcr die LED verwendeten Pin als Attribut. Au\xdferdem wird der Zustand der LED in ",(0,l.kt)("inlineCode",{parentName:"p"},"stateLed")," auf ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," gesetzt. Die LED soll also aus sein. Als letztes wird der angegeben Pin als Ausgang definiert."),(0,l.kt)("h3",{id:"methode-zum-umschalten"},"Methode zum Umschalten"),(0,l.kt)("p",null,"Was der LED-Klasse an dieser Stelle noch fehlt, ist die Methode ",(0,l.kt)("inlineCode",{parentName:"p"},"toggle()")," zum Umschalten der LED. Da auf die Methode, genauso wie den Konstruktor, \xf6ffentlich zugegriffen werden soll, wird sie nach dem Schl\xfcsselwort ",(0,l.kt)("inlineCode",{parentName:"p"},"public")," definiert."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// Methode der Led-Klasse\nvoid toggle() {          // Die Methoden einer Klassen k\xf6nnen auf die Attribute zugreifen      \n  stateLed = !stateLed; \n  digitalWrite(pin, stateLed);\n} \n")),(0,l.kt)("p",null,"Mit der Zeile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"stateLed = !stateLed; \n")),(0,l.kt)("p",null,"wird der logische Wert des Attributs ",(0,l.kt)("inlineCode",{parentName:"p"},"stateLed")," negiert. War ",(0,l.kt)("inlineCode",{parentName:"p"},"stateLed")," zuerst ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", ist es danach ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". Wird anschlie\xdfend der Zustand der LED mit dem Befehl "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"digitalWrite(pin, stateLed);\n")),(0,l.kt)("p",null,"aktualisiert, so \xe4ndert die LED bei jedem Aufruf der Methode ihren Zustand."),(0,l.kt)("h3",{id:"das-vollst\xe4ndige-programm"},"Das vollst\xe4ndige Programm"),(0,l.kt)("p",null,"Im vollst\xe4ndigen Programm sollen mit der obigen Klasse zwei LED Objekte ",(0,l.kt)("inlineCode",{parentName:"p"},"ledGreen")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"ledRed")," erzeugt werden. Das Erzeugen eines neuen Objektes wird auch ",(0,l.kt)("strong",{parentName:"p"},"instanziieren")," genannt, was nichts anderes bedeutet, als dass mit der Klasse eine neue ",(0,l.kt)("strong",{parentName:"p"},"Instanz")," erzeugt wird."),(0,l.kt)("p",null,"Mit dem Klassennamen (",(0,l.kt)("inlineCode",{parentName:"p"},"Led"),") gefolgt von einem frei w\xe4hlbaren Namen f\xfcr das Objekt (z.B. ",(0,l.kt)("inlineCode",{parentName:"p"},"ledGreen"),") und dem Parameter f\xfcr den Konstruktor k\xf6nnen nun verschiedene Objekte erzeugt werden."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Led ledGreen(4);  // ein `Led` Objekt f\xfcr Pin 4\nLed ledRed(5);    // ein weiteres `Led` Objekt f\xfcr Pin 5\n")),(0,l.kt)("p",null,"Zu guter Letzt muss die Method ",(0,l.kt)("inlineCode",{parentName:"p"},"toggle()")," f\xfcr das jeweilige Objekt noch aufgerufen werden. Daf\xfcr wird das Objekt mit einem Punkt ",(0,l.kt)("inlineCode",{parentName:"p"},".")," mit dem Methodennamen verkn\xfcpft."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ledGreen.toggle();    // Methodenaufruf vom Objekt `ledGreen`\nledRed.toggle();      // Methodenaufruf vom Objekt `ledRed`\n\n")),(0,l.kt)("p",null,"Zusammengefasst ergibt sich folgendes Programm f\xfcr zwei umschaltbare LEDs mit einer Led-Klasse."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title="umschaltenObjekte.ino"',title:'"umschaltenObjekte.ino"'},"class Led {               // Beginn der Klassendefinition\n    int  pinLed;          // LED-Pin (Attritbute der Klasse)\n    bool stateLed;        // Zustand der LED \n\n  public:                 // alle Methoden (oder Attribute) nach public sind \xf6ffentlich\n    Led(int pPin) {       // Konstruktor (ohne void, int, etc.)\n      pinLed   = pPin;\n      stateLed = false;\n      pinMode(pinLed, OUTPUT);\n    }\n    void toggle() {       // Die Methoden einer Klassen k\xf6nnen auf die Attribute zugreifen      \n      stateLed = !stateLed; \n      digitalWrite(pinLed, stateLed);\n    }\n};                        // Eine Klassendefinition endet mit einem Semikolon\n\nLed ledGreen(4);  // ein `Led` Objekt mit dem Namen `ledGreen` mit Pin 4\nLed ledRed(5);      // ein weiteres `Led` Objekt mit Pin 5\n\nvoid setup() {\n  // bleibt leer\n}\n\nvoid loop() {\n  ledGreen.toggle();      // Methodenaufruf vom Objekt ledGreen\n  delay(200);\n  ledRed.toggle();        // Methodenaufruf vom Objekt ledGreen\n  delay(800);\n  ledGreen.toggle();\n  delay(200);\n  ledRed.toggle();\n  delay(800);\n}\n")),(0,l.kt)("h2",{id:"wie-nutze-ich-tabs-mit-klassen"},"Wie nutze ich Tabs mit Klassen"),(0,l.kt)("p",null,"Das vollst\xe4ndige Programm mit der LED Klasse kann auch in ",(0,l.kt)("strong",{parentName:"p"},"mehrere Tabs unterteilt werden"),". Wird eine Klasse in einem separaten Tab definiert, so muss der Name des Tabs die ",(0,l.kt)("strong",{parentName:"p"},"Dateiendung")," ",(0,l.kt)("inlineCode",{parentName:"p"},".cpp")," erhalten. Au\xdferdem muss mit dem Befehl ",(0,l.kt)("inlineCode",{parentName:"p"},'#include "LedKlasse.cpp"')," der entsprechende Tab ",(0,l.kt)("strong",{parentName:"p"},"in das Hauptprogram eingebunden werden.")),(0,l.kt)(k,{defaultValue:"Blink",values:[{label:"Blink",value:"Blink"},{label:"LedKlasse.cpp",value:"LedKlasse.cpp"}],mdxType:"Tabs"},(0,l.kt)(g,{value:"Blink",mdxType:"TabItem"},(0,l.kt)("p",null,"Das ",(0,l.kt)("strong",{parentName:"p"},"Hauptprogramm")," (mit ",(0,l.kt)("inlineCode",{parentName:"p"},"void setup()")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"void loop()"),") steht in dem ersten Tab mit dem Namen des Sketches (",(0,l.kt)("inlineCode",{parentName:"p"},"Blink"),"). Klassen, welche in einem anderen Tab definiert werden, m\xfcssen mit dem Befehl ",(0,l.kt)("inlineCode",{parentName:"p"},'#include "LedKlasse.cpp"')," in das Hauptprogramm eingebunden werden."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title="Blink"',title:'"Blink"'},'//highlight-next-line\n#include "LedKlasse.cpp"  // Einbinden der Datei LedKlasse.cpp mit der `Led` Klasse\n\n#define LED_GREEN 3\n#define LED_RED   6\n\nLed ledGreen(LED_GREEN);  // ein `Led` Objekt mit dem Namen `ledGreen` mit Pin 4\nLed ledRed(LED_RED);      // ein weiteres `Led` Objekt mit Pin 5\n\nvoid setup() {\n  // bleibt leer\n}\n\nvoid loop() {\n  ledGreen.toggle();      // Methodenaufruf vom Objekt ledGreen\n  delay(200);\n  ledRed.toggle();        // Methodenaufruf vom Objekt ledGreen\n  delay(800);\n  ledGreen.toggle();\n  delay(200);\n  ledRed.toggle();\n  delay(800);\n}\n'))),(0,l.kt)(g,{value:"LedKlasse.cpp",mdxType:"TabItem"},(0,l.kt)("p",null,"Tabs, in denen ",(0,l.kt)("strong",{parentName:"p"},"Klassen")," definiert werden, m\xfcssen mit der Dateiendung ",(0,l.kt)("inlineCode",{parentName:"p"},".cpp")," (z.B. ",(0,l.kt)("inlineCode",{parentName:"p"},"LedKlasse.cpp"),") benannt werden. Damit in diesen Tabs auch die Arduino-Befehle genutzt werden k\xf6nnen, muss die ",(0,l.kt)("strong",{parentName:"p"},"Arduino-Bibliothek")," mit dem Befehl ",(0,l.kt)("inlineCode",{parentName:"p"},"#include <Arduino.h> ")," ",(0,l.kt)("strong",{parentName:"p"},"eingebunden werden"),"."),(0,l.kt)("p",null,"Au\xdferdem m\xfcssen die Tabs (eigentlich eigene Dateien) dem Hauptprogramm mit dem ",(0,l.kt)("inlineCode",{parentName:"p"},"#inlcude")," Befehl zug\xe4nglich gemacht werden."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title="LedKlasse.cpp"',title:'"LedKlasse.cpp"'},"//highlight-next-line\n#include <Arduino.h>      // Einbinden der Datei Arduino-Bibliothek\n\nclass Led {               // Beginn der Klassendefinition\n    int  pinLed;          // LED-Pin (Attritbute der Klasse)\n    bool stateLed;        // Zustand der LED \n\n  public:                 // alle Methoden (oder Attribute) nach public sind \xf6ffentlich\n    Led(int pPin) {       // Konstruktor (ohne void, int, etc.)\n      pinLed   = pPin;\n      stateLed = false;\n      pinMode(pinLed, OUTPUT);\n    }\n    void toggle() {       // Die Methoden einer Klassen k\xf6nnen auf die Attribute zugreifen      \n      stateLed = !stateLed; \n      digitalWrite(pinLed, stateLed);\n    }\n};                        // Eine Klassendefinition endet immer mit einem Semikolon\n")))),(0,l.kt)("p",null,"Das vollst\xe4ndige ",(0,l.kt)("a",{target:"_blank",href:t(6612).Z},"Blink-Programm")," kann auch heruntergeladen werden."),(0,l.kt)("details",{className:"ueben"}," ",(0,l.kt)("summary",null,"Aufgaben"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Erweitern Sie die ",(0,l.kt)("inlineCode",{parentName:"p"},"Led")," Klasse im obigen Beispielprogramm um die Methoden ",(0,l.kt)("inlineCode",{parentName:"p"},"anschalten()")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"ausschalten()"),". Testen Sie die neuen Methoden mit einem geeignetem Programm.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Schreiben Sie eine Klasse ",(0,l.kt)("inlineCode",{parentName:"p"},"Blinker"),", welche eine Led blinken l\xe4sst."),(0,l.kt)("p",{parentName:"li"},"Um die LED mit den  vorgegebenen An- und Auszeiten blinken zu lassen, wird eine Methode ",(0,l.kt)("inlineCode",{parentName:"p"},"update()")," ben\xf6tigt, welche regelm\xe4\xdfig aufgerufen werden muss. Die Methode misst die Zeit seit dem letzten Umschalten der LED und \xfcberpr\xfcft, ob die LED wieder umgeschaltet werden muss."),(0,l.kt)("p",{parentName:"li"},"Nutzen Sie die Vorlage und erg\xe4nzen Sie den Code f\xfcr die Methoden und ",(0,l.kt)("inlineCode",{parentName:"p"},"update()")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"setBlink()")," (legt die An-/Auszeit des Blinkers fest)."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"#define LED1 3 \n#define LED2 5\n\nclass Blinker\n{\n    int onTime;  // in ms\n    int offTime; // in ms\n    int pinLed;\n    int stateLed;\n    unsigned long lastTime;\n\n  public:\n    Blinker(int pin)\n    {\n      onTime = 1000;\n      offTime = 1000;\n      pinLed = pin;\n      lastTime = 0;\n      stateLed = LOW;\n      \n      pinMode(pinLed, OUTPUT);\n    }\n\n    // L\xe4sst die LED durch regelm\xe4\xdfiges Aufrufen blinken.\n    void update() \n    {\n      // ***** Fehlenden Code erg\xe4nzen *****\n    }\n\n    // Konfiguriert die An- und Auszeit des Blinkers\n    void setBlink(int pOn, int pOff)\n    {\n      // ***** Fehlenden Code erg\xe4nzen *****\n    }\n}; \n\nBlinker blink1(LED1);\nBlinker blink2(LED2);\n\nvoid setup() {\n  blink1.setBlink(500, 100);\n  blink2.setBlink(400, 200);\n}\n\nvoid loop() {\n  blink1.update();\n  blink2.update();\n}\n"))))),(0,l.kt)("h2",{id:"ein-array-mit-objekten"},"Ein Array mit Objekten"),(0,l.kt)("p",null,"Grunds\xe4tzlich ist es bei einem ",(0,l.kt)("a",{parentName:"p",href:"/docs/arduino/array"},"Array")," egal, von welchen Datentyp die Elemente sind (solange alle Elemente den selben Datentyp haben). Deshalb kann auch ein Array aus LED-Objekten erzeugt werden."),(0,l.kt)("p",null,"Um ein Array mit Objekten zu erzeugen, wird zuerst der Objekttyp (Klassenname) ",(0,l.kt)("inlineCode",{parentName:"p"},"Led")," und danach der Namen des Arrays ",(0,l.kt)("inlineCode",{parentName:"p"},"ledListe"),"geschrieben. Nach dem Arraynamen folgen zwei eckige Klammern ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),", welche anzeigen, dass es sich um einen Array handelt. "),(0,l.kt)("p",null,"Anschlie\xdfend werden in einer geschweiften Klammer ",(0,l.kt)("inlineCode",{parentName:"p"},"{ ... }")," die einzelnen Elemente, also die jeweiligen LED-Objekte \xfcbergeben."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Led ledListe[] = {Led(3), Led(6), Led(9), Led(10)}; \n")),(0,l.kt)("p",null,"Soll nun ein einzelnes Objekt des Array angesprochen werden, so wird das mit dem entsprechenden Index in eckigen Klammern getan."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ledListe[0].toggle();  // Schaltet die 1. LED\nledListe[1].toggle();  // Schaltet die 2. LED\n")),(0,l.kt)("details",{className:"ueben"}," ",(0,l.kt)("summary",null,"Aufgaben"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Erweitern Sie die Schaltung der ",(0,l.kt)("a",{parentName:"li",href:"/docs/arduino/objectOriented#aufgaben-klassen"},"Aufgabe 2")," auf insgesamt 5 LEDs. \xdcberlegen Sie sich ein interessantes Blinkmuster, welches Sie mit der Led-Klasse und einem ",(0,l.kt)("strong",{parentName:"li"},"Array aus Led-Objekten")," programmieren."))),(0,l.kt)("h2",{id:"links"},"Links"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://paulmurraycbr.github.io/ArduinoTheOOWay.html"},"Arduino the Object Oriented Way")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/multi-tasking-the-arduino-part-1/a-classy-solution"},"A Classy Solution - Adafruit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=S_uaROFnWSg"},"Tutorial: Object Oriented Programming with the Arduino"))))}w.isMDXComponent=!0},6612:function(e,n,t){n.Z=t.p+"assets/files/blink-0825f200ea2d7a7b2fcefc1c597e00db.zip"}}]);