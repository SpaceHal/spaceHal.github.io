(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[483],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return d},kt:function(){return p}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=l(r),p=i,m=g["".concat(u,".").concat(p)]||g[p]||c[p]||a;return r?t.createElement(m,o(o({ref:n},d),{},{components:r})):t.createElement(m,o({ref:n},d))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1739:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var t=r(2122),i=r(9756),a=(r(7294),r(3905)),o={title:"Kreuzungen und Abzweigungen auf einer Linie erkennen",sidebar_label:"Kreuzungen erkennen",description:"Ein fortgeschrittener Linienfolger der Kreuzungen, Abzweigungen und Sackgassen erkennt und sein Verhalten automatisch anpasst."},s={unversionedId:"robotik/advancedLine",id:"robotik/advancedLine",isDocsHomePage:!1,title:"Kreuzungen und Abzweigungen auf einer Linie erkennen",description:"Ein fortgeschrittener Linienfolger der Kreuzungen, Abzweigungen und Sackgassen erkennt und sein Verhalten automatisch anpasst.",source:"@site/docs/robotik/advancedLine.md",sourceDirName:"robotik",slug:"/robotik/advancedLine",permalink:"/docs/robotik/advancedLine",editUrl:"https://spacehal.github.io/docs/robotik/advancedLine.md",version:"current",sidebar_label:"Kreuzungen erkennen",frontMatter:{title:"Kreuzungen und Abzweigungen auf einer Linie erkennen",sidebar_label:"Kreuzungen erkennen",description:"Ein fortgeschrittener Linienfolger der Kreuzungen, Abzweigungen und Sackgassen erkennt und sein Verhalten automatisch anpasst."},sidebar:"sideBarRobotik",previous:{title:"Linienfolger mit mehreren IR-Sensoren und PID Regler",permalink:"/docs/robotik/lineFollowerPID"},next:{title:"Odometrie",permalink:"/docs/robotik/odometrie"}},u=[{value:"Erkennen von Kreuzungen",id:"erkennen-von-kreuzungen",children:[]},{value:"Einer Linie mit Kreuzungen folgen",id:"einer-linie-mit-kreuzungen-folgen",children:[]},{value:"Hilfsfunktion zum Debuggen",id:"hilfsfunktion-zum-debuggen",children:[{value:"<code>sprintf()</code>",id:"sprintf",children:[]}]}],l={toc:u};function d(e){var n=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Das Folgen einer Linie mit Kreuzungen, Unterbrechungen oder \xc4hnlichem erh\xf6ht die Komplexit\xe4t des Linienfolgers. "),(0,a.kt)("p",null,"Im Folgenden sind lose ein paar Anregungen zum ",(0,a.kt)("a",{parentName:"p",href:"advancedLine#erkennen-von-kreuzungen"},"Erkennen einer Kreuzung")," oder zum geschicketen ",(0,a.kt)("a",{parentName:"p",href:"advancedLine#einer-linie-mit-kreuzungen-folgen"},"Reagieren auf Kreuzungen")," aufgef\xfchrt. Es handelt sich hier nicht um eine vollst\xe4ndige L\xf6sung des Problems, sondern vielmehr um m\xf6gliche Ans\xe4tze f\xfcr eigene Realisierungen."),(0,a.kt)("h2",{id:"erkennen-von-kreuzungen"},"Erkennen von Kreuzungen"),(0,a.kt)("img",{src:"/img/robotik/IntersectionDetection.png",alt:"Detecting an intersection with a robot",width:"500px",class:"center"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"enum KreuzungsTypen {GERADE, LINKS, RECHTS, LINKSRECHTS, LINKSGERADE, RECHTSGERADE, KREUZUNG, WUESTE, UNTERBRECHUNG};\n\nenum KreuzungsTypen bestimmeKreuzung(int pThreshold) {\n\n  int delayIntersection = 200; // Zeit, die der Roboter nach der ersten Messung f\xe4hrt, um anchlie\xdfend zu pr\xfcfen, wie die Strecke weitergeht\n  lineSensors.readCalibrated(lineSensorValues); // Sensorwerte aktualisieren\n  bool linksSensor  = lineSensorValues[0] > pThreshold;  \n  bool mitteSensor  = lineSensorValues[2] > pThreshold;  \n  bool rechtsSensor  = lineSensorValues[4] > pThreshold;  \n\n  if (!linksSensor && !rechtsSensor && !mitteSensor) {\n    return UNTERBROCHEN; // R\xfcckgabe Werte der Funktion: UNTERBROCHEN\n  }\n  else if(!linksSensor && !rechtsSensor){\n    return GERADE;  //R\xfcckgabe Werte der Funktion: GERADE\n  }\n  else { \n    // Linker und/oder rechter Sensor haben eine Linie erkannt.\n    // Ein St\xfcck weiterfahren und \xfcberpr\xfcfen, ob es auch geradeaus geht.\n    motors.setSpeeds(speed,speed);\n    delay(delayIntersection);\n    motors.setSpeeds(0,0); // evtl. \xfcberfl\xfcssig\n\n    // Sensorwerte m\xfcssen neu eingelesen werden, um zu \xfcberpr\xfcfen wie es weitergeht ...\n    lineSensors.readCalibrated(lineSensorValues); \n\n    /*\n       Weitere if-else Abfragen mit den *neuen* Sensorwerten zum Erkennen aller Kreuzungstypen\n     */\n\n  }\n}\n")),(0,a.kt)("h2",{id:"einer-linie-mit-kreuzungen-folgen"},"Einer Linie mit Kreuzungen folgen"),(0,a.kt)("img",{src:"/img/robotik/AdvancedParcour.png",alt:"Advanced line follower track with intersections",width:"500px",class:"center"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},'// Aufz\xe4hlungstyp mit allen m\xf6glichen "Kreuzungstypen"\nenum KreuzungsTypen {GERADE, LINKS, RECHTS, LINKSRECHTS, LINKSGERADE, RECHTSGERADE, KREUZUNG, WUESTE, UNTERBRECHUNG};\nKreuzungsTypen kreuzungsTyp;\n\nenum KreuzungsAktionen {LINKS_DREHEN, RECHTS_DREHEN, WEITER, WUESTE_FAHREN};\n\n// Array mit den durchzuf\xfchrenden Aktionen\nKreuzungsAktionen kreuzungsAktion[] =\n{RECHTS_DREHEN, RECHTS_DREHEN, WUESTE_FAHREN, WEITER, LINKS_DREHEN /* weitere Aktionen*/ };\n\nint kreuzungsNummer = 0; // wird als Index f\xfcr kreuzungsAktion[] genutzt\nint anzahlKreuzungen = 5; // an die Aktionen anpassen\n\nvoid loop() {\n  KreuzungsTypen kTyp = bestimmeKreuzungstyp();\n\n  if (kTyp == GERADE ) {\n    folgeLinie(); // keine Kreuzung\n  }\n  else { // Aktion durchf\xfchren, wenn keine GERADE erkannt wurde\n    abbiegen(kreuzungsAktion[kreuzungsNummer]);\n    kreuzungsNummer++;\n    if (intersectionNumber >= anzahlKreuzungen) {\n      intersectionNumber = 0; // neue Runde ...\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"hilfsfunktion-zum-debuggen"},"Hilfsfunktion zum Debuggen"),(0,a.kt)("p",null,"Die Hilfsfunktion ",(0,a.kt)("inlineCode",{parentName:"p"},"showIntersectionReadings()")," gibt auf dem Display zuerst die Sensorwerte des ganz linken und ganz rechten Sensors aus. Nach vier Sekunden wird die Anzeige ge\xe4ndert, und die Werte des mittleren Sensors und die Position der Linie wird ausgegeben."),(0,a.kt)("p",null,"Verwenden Sie die Funktion zum Testen, ob der Roboter an den Kreuzungen auch wirklich das erkennt, was sie vermuten. Nutzen Sie die, oder eine \xe4hnliche Funktion, lieber einmal zu viel als zu wenig. Es kann Ihnen viel M\xfche und Kopfzerbrechen ersparen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},'void showIntersectionReadings() {\n  char msg1[8];\n  char msg2[8];\n\n  delay(1000);\n  int lPosition = lineSensors.readLine(lineSensorValues); // aktualisiere der Sensorwertee\n\n\n  sprintf(msg1, "0: %4d", lineSensorValues[0]); // Sensor ganz links\n  lcd.gotoXY(0, 0); lcd.print(msg1);\n  sprintf(msg2, "4: %4d", lineSensorValues[4]); // Sensor ganz rechts\n  lcd.gotoXY(0, 1); lcd.print(msg2);\n  delay(4000);\n\n  sprintf(msg1, "2:  %4d", lineSensorValues[2]);  // Sensor mitte\n  lcd.gotoXY(0, 0); lcd.print(msg1);\n  sprintf(msg2, "Pos %4d", lPosition);           // Positin der Linie\n  lcd.gotoXY(0, 1); lcd.print(msg2);\n  delay(4000);\n  lcd.clear();\n}\n')),(0,a.kt)("p",null,"Zum Ausgeben der Werte auf dem Display wird die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"sprintf()")," genutzt. Die Funktion erlaubt es Text und Zahlenwerte nach bestimmten Regeln zu formatieren und ein eine neue Variable (hier den ",(0,a.kt)("inlineCode",{parentName:"p"},"char"),"-Array ",(0,a.kt)("inlineCode",{parentName:"p"},"msg1[]")," oder ",(0,a.kt)("inlineCode",{parentName:"p"},"msg2[]")," zu schreiben und anschlie\xdfend mit ",(0,a.kt)("inlineCode",{parentName:"p"},"lcd.print(msg1)")," auf dem LCD-Display auszugeben."),(0,a.kt)("h3",{id:"sprintf"},(0,a.kt)("inlineCode",{parentName:"h3"},"sprintf()")),(0,a.kt)("p",null,"Das Prozentzeihen ",(0,a.kt)("inlineCode",{parentName:"p"},"%")," markiert einen Platzhalter f\xfcr Zahlenwerte, die formatiert werden sollen. So wird zum Beispiel mit ",(0,a.kt)("inlineCode",{parentName:"p"},"%4d")," ein Integerwert ausgeben und nach links Platz f\xfcr 4 Stellen bereitgestellt. Hat der Integerwert weniger als 4 Stellen, so wird an der Stelle ein Leerzeichen ausgegeben. Siehe auch ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikibooks.org/wiki/C-Programmierung:_Einfache_Ein-_und_Ausgabe"},"hier"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Arduino"},"int wert1 = 80;\nsprintf(msg1, \"Wert:%4d\", wert1); //\n// Ausgabe: 'Num:  80'\nint wert1 = 1280;\nsprintf(msg1, \"Num:%4d\", wert2);\n// Ausgabe: 'Wert:2280'\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"}," Das LCD-Display des Zumo 32u4 hat pro Zeil nur 8 Zeichen. Also sollten nicht mehr als 8 Zeichen pro Zeile ausgegeben werden."))))}d.isMDXComponent=!0}}]);