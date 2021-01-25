(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),a=(t(0),t(131)),o={title:"3-Stufen-Regler f\xfcr einen Kantenfolger",sidebar_label:"3-Stufen-Regler (Kantenfolger)",description:"Mit einem einfachen Algorithmus einen Arduino-Roboter programmieren, damit er einer Linie folgt (Linienfolger, Kantenfolger)."},l={unversionedId:"robotik/edgeFollower",id:"robotik/edgeFollower",isDocsHomePage:!1,title:"3-Stufen-Regler f\xfcr einen Kantenfolger",description:"Mit einem einfachen Algorithmus einen Arduino-Roboter programmieren, damit er einer Linie folgt (Linienfolger, Kantenfolger).",source:"@site/docs/robotik/edgeFollower.md",slug:"/robotik/edgeFollower",permalink:"/docs/robotik/edgeFollower",editUrl:"https://spacehal.github.io/docs/robotik/edgeFollower.md",version:"current",sidebar_label:"3-Stufen-Regler (Kantenfolger)",sidebar:"someSidebar",previous:{title:"Erste \xdcbungen mit einem Roboter",permalink:"/docs/robotik/beginning"},next:{title:"Proportional-Regler f\xfcr einen Kantenfolger",permalink:"/docs/robotik/edge_P_Control"}},c=[{value:"3-Stufen-Algorithmus",id:"3-stufen-algorithmus",children:[{value:"Kalibrierung",id:"kalibrierung",children:[]},{value:"Aufgaben (Kantenfolger)",id:"aufgaben-kantenfolger",children:[]}]}],b={rightToc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Der einfachste Linienfolger ist, wenn man es genau nimmt, gar kein Linienfolger, sondern ein ",Object(a.b)("strong",{parentName:"p"},"Kantenfolger"),". Besitzt der Roboter ",Object(a.b)("strong",{parentName:"p"},"einen")," Bodensensor zum Unterscheiden von hellen und dunklen Untergr\xfcnden, so kann damit bei einem gen\xfcgend breiten Strich die Strichkante detektiert werden, und dieser gefolgt werden. "),Object(a.b)("img",{src:"/img/robotik/BotOnLine.png",alt:"Line following robot",width:"600px",class:"center"}),Object(a.b)("p",null,"Das Grundprinzip des Kantenfolgers (Linienfolger mit nur einem Sensor) ist in der Abbildung dargestellt. Der IR-Sensor detektiert das vom Untergrund reflektierte Licht. In der Abbildung sind beispielhaft Zahlenwerte in rot angegeben. Bei einem wei\xdfen Untergrund wird viel und bei einem dunklen Untergrund wenig Licht detektiert."),Object(a.b)("h2",{id:"3-stufen-algorithmus"},"3-Stufen-Algorithmus"),Object(a.b)("p",null,"F\xfcr eine einfache Motorregelung zum Folgen der Linie, k\xf6nnen drei verschiedene F\xe4lle unterschieden werden, welche mit einem Algorithmus \xfcberpr\xfcft werden m\xfcssen:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Fall A"),"  Der Sensor ist im Wesentlichen neben der Linie und detektiert viel IR-Licht. Der Roboter sollte mehr nach links zur Linie fahren."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Fall B"),"  Der Sensor ist haupts\xe4chlich \xfcber der Linie und detektiert wenig IR-Licht. Der Roboter sollte mehr nach rechts zur Linienkante fahren."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Fall C"),"  Der Sensor befindet sich genau zur H\xe4lfte \xfcber der Linie und ist somit genau \xfcber der Kante. Der Roboter kann einfach geradeaus fahren.")),Object(a.b)("p",null,"Ein Algorithmus zur Steuerung des Roboters (ohne Fall C) k\xf6nnte folgenderma\xdfen aussehen:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-txt"}),"// PSEUDO-CODE\n// Einfacher Algorithmus zum Kantenfolgen mit nur einem IR-Sensor\n\nwertKante = 600 // muss angepasst werde\n\nwiederhole\n    sensorWert = leseIRLicht()\n    if ( sensorWert > wertKante )\n        fahreLinks() // Fall A\n        \n    else if ( sensorWert < wertKante )\n        fahreRechts() // Fall B\n\n")),Object(a.b)("h3",{id:"kalibrierung"},"Kalibrierung"),Object(a.b)("p",null,"Bleibt die Frage, wie der Sensorwerte f\xfcr die Linienkante ermittelt wird, der Roboter also kalibriert werden kann. Der einfachste, wenn auch nicht genaueste Weg ist, z.B. mit Hilfe der seriellen Schnittstelle den Maximalwert und den Minimalwert des reflektieren IR Lichts f\xfcr die Linie bzw. die Fl\xe4che daneben zu bestimmen. Der Mittelwert aus beiden Werten sollte der Linienkante entsprechen und kann dann als Konstante in das Programm eingef\xfcgt werden."),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"}," Der Kanten-Algorithmus funktioniert am besten, wenn der Roboter langsam f\xe4hrt!"))),Object(a.b)("h3",{id:"aufgaben-kantenfolger"},"Aufgaben (Kantenfolger)"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(a.b)("strong",{parentName:"h5"},"\xdcben"))),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ol",{parentName:"div"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Programmieren Sie den ",Object(a.b)("strong",{parentName:"p"},"einfachen Kanten-Algorithmus"),". Passen Sie die Werte der Linienkante an und schreiben Sie geeignete Methoden ",Object(a.b)("inlineCode",{parentName:"p"},"fahreLinks()")," und ",Object(a.b)("inlineCode",{parentName:"p"},"fahreRechts()"),". Welchen Einfluss hat der minimale Kurvenradius der zu folgenden Linie auf Funktionen ",Object(a.b)("inlineCode",{parentName:"p"},"fahreLinks()")," und ",Object(a.b)("inlineCode",{parentName:"p"},"fahreRechts()"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Schreiben Sie eine ",Object(a.b)("strong",{parentName:"p"},"Kalibrierungsfunktion"),", welche (auf Knopfdruck) den Sensorwert f\xfcr die Linienkante automatisch ermittelt. Lassen Sie hierf\xfcr den Roboter in beide Richtungen automatisch \xfcber die Linie drehen und den Maximal- und Minimalwert des reflektierten Lichtes bestimmen. Bestimmen Sie den Sollwert der Linienkante aus dem ermitteleten Maximal- und Minimalwert.",Object(a.b)("em",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"em"},"[KantenfolgerKalibrierung.ino]")))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Erweitern")," Sie den Algorithmus ",Object(a.b)("strong",{parentName:"p"},"um den Fall C"),": ",Object(a.b)("inlineCode",{parentName:"p"},"fahreGeradeaus()"),"."),Object(a.b)("p",{parentName:"li"},"*Hinweis: Legen Sie einen geeigneten Wertebereich um den Sensorwert der Linienkante fest, bei dem der Roboter geradeaus fahren soll. Nutzen Sie hierf\xfcr die Variable  ",Object(a.b)("inlineCode",{parentName:"p"},"wertToleranz"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Schreiben Sie ein neues Programm, welches den Kanten-Algorithmus um ",Object(a.b)("strong",{parentName:"p"},"zwei weitere Stufen (halb links, halb rechts)")," erweitert. Geben Sie jedoch keine festen Sensorwerte f\xfcr die verschiedenen Unterscheidungsf\xe4lle vor, sondern verwenden sie zwei verschiedene ",Object(a.b)("strong",{parentName:"p"},"Toleranzbereiche")," und lassen sie die notwendigen Bereiche berechnen. Verwenden Sie au\xdferdem die automatische Kalibrierungsfunktion aus Aufgabe 2."))))))}s.isMDXComponent=!0},131:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),s=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return t?i.a.createElement(g,l(l({ref:n},b),{},{components:t})):i.a.createElement(g,l({ref:n},b))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);