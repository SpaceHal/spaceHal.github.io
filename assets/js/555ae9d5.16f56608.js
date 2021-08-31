"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[1442],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7310:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o={title:"Der integrierte Motortreiber L293",sidebar_label:"5. Motortreiber L293",description:"Mit einem Arduino und dem Motortreiber L293 einen Motor ansteuern."},l=void 0,s={unversionedId:"motor/L293",id:"motor/L293",isDocsHomePage:!1,title:"Der integrierte Motortreiber L293",description:"Mit einem Arduino und dem Motortreiber L293 einen Motor ansteuern.",source:"@site/docs/motor/L293.md",sourceDirName:"motor",slug:"/motor/L293",permalink:"/docs/motor/L293",editUrl:"https://spacehal.github.io/docs/motor/L293.md",version:"current",lastUpdatedAt:1630426919,formattedLastUpdatedAt:"8/31/2021",frontMatter:{title:"Der integrierte Motortreiber L293",sidebar_label:"5. Motortreiber L293",description:"Mit einem Arduino und dem Motortreiber L293 einen Motor ansteuern."},sidebar:"sideBarArduino",previous:{title:"4. Motortreiber DRV8833",permalink:"/docs/motor/drv8833"},next:{title:"IR Sensor",permalink:"/docs/sensoren/irSensor"}},d=[],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Der ",(0,a.kt)("a",{parentName:"p",href:"https://www.ti.com/lit/ds/symlink/l293.pdf"},"Motortreiber L293")," ist der bekannteste IC zur Motorsteuerung. In ihm befinden sich zwei H-Br\xfccken, wodurch er zwei Motoren unabh\xe4ngig voneinander ansteuern kann."),(0,a.kt)("img",{src:"/img/motor/L293_PinOut.png",alt:"Motor driver DRV8833 pinout",width:"380px",class:"center"}),(0,a.kt)("p",null,"Neben den ",(0,a.kt)("strong",{parentName:"p"},"zwei separaten Spannungsversorgungen")," f\xfcr die Steuerlogik (Vcc1) und die Motoren (Vcc2), enth\xe4lt der L293 jeweils zwei Ausg\xe4nge (1Y, 2Y und 3Y, 4Y) an denen die Motoren angeschlossen werden, zwei Eing\xe4nge (1A, 2A und 3A, 4A) zum Einstellen der Betriebsmodi bzw. der Drehrichtungen, sowie zwei Steuerleitungen (EN1,2 und EN3,4), welche die H-Br\xfccken jeweils an- oder ausschalten und dadurch die Geschwindigkeit des Motors steuern. Das m\xf6gliche Betriebsverhalten ist in der Tabelle abgebildet."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Motor 1"),(0,a.kt)("th",{parentName:"tr",align:null},"EN1,2"),(0,a.kt)("th",{parentName:"tr",align:null},"1A"),(0,a.kt)("th",{parentName:"tr",align:null},"2A"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rechtslauf"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Linkslauf"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stopp schnell"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stopp schnell"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Leerlauf"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Hinweis: Mit x ist ein beliebiger Zustand (1 oder 0) gemeint.")),(0,a.kt)("p",null,"In der folgenden Abbildung ist der Anschluss des L293D mit dem Arduino und \\textbf{einem} Motor dargestellt. Achten Sie beim Anschlie\xdfen des L293 auf die korrekte Ausrichtung. Die halbkreisf\xf6rmige Auskerbung am L293 entspricht dem Halbkreis im abgebildeten IC."),(0,a.kt)("p",null,"Alle vier Massepins (4, 5, 12, 13) m\xfcssen mit der ",(0,a.kt)("strong",{parentName:"p"},"Masse vom Arduino und der Batterie verbunden")," werden, da sie eine K\xfchlfunktion f\xfcr den Chip \xfcbernehmen. Der Pin 9 (Vcc1) ist die Spannungsversorgung f\xfcr die Logik des L293 und wird mit dem 5 Volt Ausgang des Arduinos verbunden. Pin 8 (Vcc2) ist die Spannungsversorgung des Motors und wird mit der Batterie verbunden. Pin 1 (EN12), 2 (1A), 7 (2A) werden mit den digitalen Eing\xe4ngen des Arduinos verbunden und Pin 3 (1Y), 6 (2Y) direkt mit dem Motor."),(0,a.kt)("img",{src:"/img/motor/L293_Connection.png",alt:"Motortreiber DRV8833 mit einem Arduino",width:"220px",class:"center"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"/* Unvollst\xe4ndiger Code zum Ansteuern eines Gleichstrommotors */\n\n#define TASTER_1 7   // an Schaltung anpassen\n#define TASTER_2 8   // an Schaltung anpassen\n#define LED 13       // an Schaltung anpassen\ns\n                     // Motoranschl\xfcsse\n#define EN12 3       // EN1,2 (enable)\n#define MA1 4        // 1A (Betriebsmodus)\n#define MA2 5        // 2A (Betriebsmodus)\n\nint statusTaster_1 = HIGH;    \nint statusTaster_2 = HIGH;   \n\nvoid setup(){ \n  // Taster mit Pull-UP, LED und serielle Schnittstelle konfigurieren\n  // Pins f\xfcr den Motortreiber L293 als digitale Ausg\xe4nge konfigurieren\n}\n\nvoid loop(){\n  statusTaster_1 = digitalRead(TASTER_1); // Taster-Pin einlesen\n  statusTaster_2 = digitalRead(TASTER_1); // Taster-Pin einlesen\n\n  /*\n  WENN Taster_1 gedr\xfcckt ist ...\n      ... dann dreht Motor links herum;\n  WENN Taster_2 gedr\xfcckt ist ...\n      ... dann dreht Motor recht herum;\n  WENN beide Taster gedr\xfcckt sind ...\n      ... dann ist der Motor im Freilauf;   \n  WENN kein Taster gedr\xfcckt ist ...\n      ... dann h\xe4lt der Motor schnell an;         \n  */  \n \n}\n")))}c.isMDXComponent=!0}}]);