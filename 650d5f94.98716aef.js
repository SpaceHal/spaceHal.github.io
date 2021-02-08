(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{132:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return p}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),c=function(e){var n=i.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=c(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),b=t,p=d["".concat(o,".").concat(b)]||d[b]||g[b]||a;return r?i.a.createElement(p,s(s({ref:n},l),{},{components:r})):i.a.createElement(p,s({ref:n},l))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=b;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},91:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return c}));var t=r(3),i=r(7),a=(r(0),r(132)),o={title:"Folgen einer Linie mit Kreuzungen",sidebar_label:"Linienfolger mit Kreuzungen",description:"Ein fortgeschrittener Linienfolger der Kreuzungen, Abzweigungen und Sackgassen erkennt und sein Verhalten automatisch anpasst."},s={unversionedId:"robotik/advancedLine",id:"robotik/advancedLine",isDocsHomePage:!1,title:"Folgen einer Linie mit Kreuzungen",description:"Ein fortgeschrittener Linienfolger der Kreuzungen, Abzweigungen und Sackgassen erkennt und sein Verhalten automatisch anpasst.",source:"@site/docs/robotik/advancedLine.md",slug:"/robotik/advancedLine",permalink:"/docs/robotik/advancedLine",editUrl:"https://spacehal.github.io/docs/robotik/advancedLine.md",version:"current",sidebar_label:"Linienfolger mit Kreuzungen",sidebar:"sideBarRobotik",previous:{title:"Linienfolger mit mehreren IR-Sensoren und PID Regler",permalink:"/docs/robotik/lineFollowerPID"}},u=[{value:"Erkennen von Kreuzungen",id:"erkennen-von-kreuzungen",children:[]},{value:"Einer Linie mit Kreuzungen folgen",id:"einer-linie-mit-kreuzungen-folgen",children:[]},{value:"Hilfsfunktion zum Debuggen",id:"hilfsfunktion-zum-debuggen",children:[{value:"<code>sprintf()</code>",id:"sprintf",children:[]}]}],l={rightToc:u};function c(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Das Folgen einer Linie mit Kreuzungen, Unterbrechungen oder \xc4hnlichem erh\xf6ht die Komplexit\xe4t des Linienfolgers. "),Object(a.b)("p",null,"Im Folgenden sind lose ein paar Anregungen zum ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"advancedLine#erkennen-von-kreuzungen"}),"Erkennen einer Kreuzung")," oder zum geschicketen ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"advancedLine#einer-linie-mit-kreuzungen-folgen"}),"Reagieren auf Kreuzungen")," aufgef\xfchrt. Es handelt sich hier nicht um eine vollst\xe4ndige L\xf6sung des Problem, sondern vielmehr um m\xf6gliche Ans\xe4tze f\xfcr eigene Realisierungen."),Object(a.b)("h2",{id:"erkennen-von-kreuzungen"},"Erkennen von Kreuzungen"),Object(a.b)("img",{src:"/img/robotik/IntersectionDetection.png",alt:"Detecting an intersection with a robot",width:"500px",class:"center"}),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-arduino"}),"enum KreuzungsTypen {GERADE, LINKS, RECHTS, LINKSRECHTS, LINKSGERADE, RECHTSGERADE, KREUZUNG, WUESTE, UNTERBRECHUNG};\n\nenum KreuzungsTypen bestimmeKreuzung(int pThreshold) {\n\n  int delayIntersection = 200; // Zeit, die der Roboter f\xe4hrt, um anchlie\xdfend zu pr\xfcfen, wie die Strecke weitergeht\n  lineSensors.readCalibrated(lineSensorValues); // Sensorwerte aktualisieren\n  bool linksSensor  = lineSensorValues[0] > pThreshold;  \n  bool mitteSensor  = lineSensorValues[2] > pThreshold;  \n  bool rechtsSensor  = lineSensorValues[4] > pThreshold;  \n\n  if (!linksSensor && !rechtsSensor && !mitteSensor) {\n    return UNTERBROCHEN; // R\xfcckgabe Werte der Funktion: UNTERBROCHEN\n  }\n  else if(!linksSensor && !rechtsSensor){\n    return GERADE;  //R\xfcckgabe Werte der Funktion: GERADE\n  }\n  else { \n    // Linker und/oder rechter Sensor haben eine Linie erkannt.\n    // Ein St\xfcck weiterfahren und \xfcberpr\xfcfen, ob es auch geradeaus geht.\n    motors.setSpeeds(speed,speed);\n    delay(delayIntersection);\n    motors.setSpeeds(0,0); // evtl. \xfcberfl\xfcssig\n\n    // Sensorwerte m\xfcssen neu eingelesen werden, um zu \xfcberpr\xfcfen wie es weitergeht ...\n    lineSensors.readCalibrated(lineSensorValues); \n\n    /*\n       Weitere if-else Abfragen mit den *neuen* Sensorwerten zum Erkennen aller Kreuzungstypen\n     */\n\n  }\n}\n")),Object(a.b)("h2",{id:"einer-linie-mit-kreuzungen-folgen"},"Einer Linie mit Kreuzungen folgen"),Object(a.b)("img",{src:"/img/robotik/AdvancedParcour.png",alt:"Line with intersections",width:"500px",class:"center"}),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-arduino"}),'// Aufz\xe4hlungstyp mit allen m\xf6glichen "Kreuzungstypen"\nenum KreuzungsTypen {GERADE, LINKS, RECHTS, LINKSRECHTS, LINKSGERADE, RECHTSGERADE, KREUZUNG, WUESTE, UNTERBRECHUNG};\nKreuzungsTypen kreuzungsTyp;\n\nenum KreuzungsAktionen {LINKS_DREHEN, RECHTS_DREHEN, WEITER, WUESTE_FAHREN};\n\n// Array mit den durchzuf\xfchrenden Aktionen\nKreuzungsAktionen kreuzungsAktion[] =\n{RECHTS_DREHEN, RECHTS_DREHEN, WUESTE_FAHREN, WEITER, LINKS_DREHEN /* weitere Aktionen*/ };\n\nint kreuzungsNummer = 0; // wird als Index f\xfcr kreuzungsAktion[] genutzt\nint anzahlKreuzungen = 5; // an die Aktionen anpassen\n\nvoid loop() {\n  KreuzungsTypen kTyp = bestimmeKreuzungstyp();\n\n  if (kTyp == GERADE ) {\n    folgeLinie(); // keine Kreuzung\n  }\n  else { // Aktion durchf\xfchren, wenn keine GERADE erkannt wurde\n    abbiegen(kreuzungsAktion[kreuzungsNummer]);\n    kreuzungsNummer++;\n    if (intersectionNumber >= anzahlKreuzungen) {\n      intersectionNumber = 0; // neue Runde ...\n    }\n  }\n}\n')),Object(a.b)("h2",{id:"hilfsfunktion-zum-debuggen"},"Hilfsfunktion zum Debuggen"),Object(a.b)("p",null,"Die Hilfsfunktion ",Object(a.b)("inlineCode",{parentName:"p"},"showIntersectionReadings()")," gibt auf dem Display zuerst die Sensorwerte des ganz linken und ganz rechten Sensors aus. Nach vier Sekunden wird die Anzeige ge\xe4ndert, und die Werte des mittleren Sensors und die Position der Linie wird ausgegeben."),Object(a.b)("p",null,"Verwenden Sie die Funktion zum Testen, ob der Roboter an den Kreuzungen auch wirklich das erkennt, was sie vermuten. Nutzen Sie die, oder eine \xe4hnliche Funktion, lieber einmal zu viel als zu wenig. Es kann Ihnen viel M\xfche und Kopfzerbrechen ersparen."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-arduino"}),'void showIntersectionReadings() {\n  char msg1[8];\n  char msg2[8];\n\n  delay(1000);\n  int lPosition = lineSensors.readLine(lineSensorValues); // aktualisiere der Sensorwertee\n\n\n  sprintf(msg1, "0: %4d", lineSensorValues[0]); // Sensor ganz links\n  lcd.gotoXY(0, 0); lcd.print(msg1);\n  sprintf(msg2, "4: %4d", lineSensorValues[4]); // Sensor ganz rechts\n  lcd.gotoXY(0, 1); lcd.print(msg2);\n  delay(4000);\n\n  sprintf(msg1, "2:  %4d", lineSensorValues[2]);  // Sensor mitte\n  lcd.gotoXY(0, 0); lcd.print(msg1);\n  sprintf(msg2, "Pos %4d", lPosition);           // Positin der Linie\n  lcd.gotoXY(0, 1); lcd.print(msg2);\n  delay(4000);\n  lcd.clear();\n}\n')),Object(a.b)("p",null,"Zum Ausgeben der Werte auf dem Display wird die Funktion ",Object(a.b)("inlineCode",{parentName:"p"},"sprintf()")," genutzt. Die Funktion erlaubt es Text und Zahlenwerte nach bestimmten Regeln zu formatieren und ein eine neue Variable (hier den ",Object(a.b)("inlineCode",{parentName:"p"},"char"),"-Array ",Object(a.b)("inlineCode",{parentName:"p"},"msg1[]")," oder ",Object(a.b)("inlineCode",{parentName:"p"},"msg2[]")," zu schreiben und anschlie\xdfend mit ",Object(a.b)("inlineCode",{parentName:"p"},"lcd.print(msg1)")," auf dem LCD-Display auszugeben."),Object(a.b)("h3",{id:"sprintf"},Object(a.b)("inlineCode",{parentName:"h3"},"sprintf()")),Object(a.b)("p",null,"Das Prozentzeihen ",Object(a.b)("inlineCode",{parentName:"p"},"%")," markiert einen Platzhalter f\xfcr Zahlenwerte, die formatiert werden sollen. So wird zum Beispiel mit ",Object(a.b)("inlineCode",{parentName:"p"},"%4d")," ein Integerwert ausgeben und nach links Platz f\xfcr 4 Stellen bereitgestellt. Hat der Integerwert weniger als 4 Stellen, so wird an der Stelle ein Leerzeichen ausgegeben. Siehe auch ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://de.wikibooks.org/wiki/C-Programmierung:_Einfache_Ein-_und_Ausgabe"}),"hier"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-Arduino"}),"int wert1 = 80;\nsprintf(msg1, \"Wert:%4d\", wert1); //\n// Ausgabe: 'Num:  80'\nint wert1 = 1280;\nsprintf(msg1, \"Num:%4d\", wert2);\n// Ausgabe: 'Wert:2280'\n")),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"}," Das LCD-Display des Zumo 32u4 hat pro Zeil nur 8 Zeichen. Also sollten nicht mehr als 8 Zeichen pro Zeile ausgegeben werden."))))}c.isMDXComponent=!0}}]);