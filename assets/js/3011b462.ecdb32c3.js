"use strict";(self.webpackChunkspacehale=self.webpackChunkspacehale||[]).push([[7558],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>p});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),o=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},d=function(e){var n=o(e.components);return t.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(r),p=i,k=m["".concat(s,".").concat(p)]||m[p]||g[p]||a;return r?t.createElement(k,u(u({ref:n},d),{},{components:r})):t.createElement(k,u({ref:n},d))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,u=new Array(a);u[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,u[1]=l;for(var o=2;o<a;o++)u[o]=r[o];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9779:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=r(7462),i=(r(7294),r(3905));const a={title:"Mit einem Roboter ein Labyrinth l\xf6sen",sidebar_label:"Labyrinth",custom_edit_url:null,keywords:["Arduino","Roboter","Linienfolger","Zumo 32U4","Labyrinth","Labyrinth l\xf6sen","Rechte Hand Regel","Linke Hand Regel","Linke Hand Regel Labyrinth","Rechte Hand Regel Labyrinth","Labyrinth Algorithmus"]},u=void 0,l={unversionedId:"robotik/maze",id:"robotik/maze",title:"Mit einem Roboter ein Labyrinth l\xf6sen",description:"Neben dem Linienfolger ist das L\xf6sen eines Labyrinths eine weitere sehr beliebte Aufgabe f\xfcr kleine mobile Roboter. Labyrinthe gibt es in vielen verschiedenen Formen und Gr\xf6\xdfen. Die im Folgenden beschriebenen Ans\xe4tze und Ideen beziehen sich alle auf Labyrinthe, bei denen die Pfade mit einer schwarzen Linie auf wei\xdfem Grund dargestellt sind und Abzweigungen immer im 90 Grad Winkel erfolgen.",source:"@site/docs/robotik/maze.md",sourceDirName:"robotik",slug:"/robotik/maze",permalink:"/docs/robotik/maze",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Mit einem Roboter ein Labyrinth l\xf6sen",sidebar_label:"Labyrinth",custom_edit_url:null,keywords:["Arduino","Roboter","Linienfolger","Zumo 32U4","Labyrinth","Labyrinth l\xf6sen","Rechte Hand Regel","Linke Hand Regel","Linke Hand Regel Labyrinth","Rechte Hand Regel Labyrinth","Labyrinth Algorithmus"]},sidebar:"mySidebar",previous:{title:"Barcode Auslesen",permalink:"/docs/robotik/botBarcode"},next:{title:"Gitternavigation",permalink:"/docs/robotik/gridNavigation"}},s={},o=[{value:"Unterschiedliche Kreuzungstypen erkennen",id:"unterschiedliche-kreuzungstypen-erkennen",level:2},{value:"Aufz\xe4hlungsdatentyp <code>enum</code> f\xfcr die Kreuzungstypen",id:"aufz\xe4hlungsdatentyp-enum-f\xfcr-die-kreuzungstypen",level:3},{value:"Bestimmen des Kreuzungstypes",id:"bestimmen-des-kreuzungstypes",level:3},{value:"Funktion <code>fahrenZurKreuzung()</code>",id:"funktion-fahrenzurkreuzung",level:3},{value:"<code>aufLinie()</code>",id:"auflinie",level:4},{value:"Funktion <code>bestimmenKreuzung()</code>",id:"funktion-bestimmenkreuzung",level:3},{value:"<code>fahrenStreckeMM()</code>",id:"fahrenstreckemm",level:4},{value:"Abbiegen an Kreuzungen",id:"abbiegen-an-kreuzungen",level:2},{value:"L\xf6sen des Labyrinths mit Rechter-Hand-Regel",id:"l\xf6sen-des-labyrinths-mit-rechter-hand-regel",level:2},{value:"Optimierung der Rechten-Hand-Regel",id:"optimierung-der-rechten-hand-regel",level:2},{value:"Links",id:"links",level:2}],d={toc:o};function g(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Neben dem ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/edgeFollower"},"Linienfolger")," ist das L\xf6sen eines Labyrinths eine weitere sehr ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2V6QE0GJ-zw"},"beliebte")," Aufgabe f\xfcr kleine mobile Roboter. Labyrinthe gibt es in vielen verschiedenen Formen und Gr\xf6\xdfen. Die im Folgenden beschriebenen Ans\xe4tze und Ideen beziehen sich alle auf Labyrinthe, bei denen die Pfade mit einer schwarzen Linie auf wei\xdfem Grund dargestellt sind und Abzweigungen immer im 90 Grad Winkel erfolgen. "),(0,i.kt)("p",null,"Auch wenn sich die folgenden Programmausz\xfcge auf den Roboter ",(0,i.kt)("a",{parentName:"p",href:"https://www.pololu.com/category/286/original-zumo-32u4-robot"},"Zumo 32u4")," der Firma Pololu beziehen, sind die Erl\xe4uterungen sehr allgemeiner Natur und sollten sich problemlos auf andere Roboter \xfcbertragen lassen."),(0,i.kt)("img",{src:"/img/robotik/MazeOverview.png",alt:"Allgemeines Labyrinth",width:"400px",className:"center"}),(0,i.kt)("p",null,"Im Wesentlichen kann das L\xf6sen eines Labyrinths in ",(0,i.kt)("strong",{parentName:"p"},"vier unterschiedliche Teilaufgaben")," unterteilt werden:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Der Roboter muss einer ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../category/linienfolger"},"Linie folgen"))," k\xf6nnen. "),(0,i.kt)("li",{parentName:"ol"},"Der Roboter muss die unterschiedlichen  ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/robotik/maze#unterschiedliche-kreuzungstypen-erkennen"},"Kreuzungen erkennen")),"."),(0,i.kt)("li",{parentName:"ol"},"Der Roboter muss an einer Kreuzung zu jeden beliebigen Weg ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/robotik/maze#abbiegen-an-kreuzungen"},"abbiegen"))," k\xf6nnen. "),(0,i.kt)("li",{parentName:"ol"},"Der Roboter ben\xf6tigt Regeln (z.B. Rechte-Hand-Regel), wie er das ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/robotik/maze#l%C3%B6sen-des-labyrinths-mit-rechter-hand-regel"},"Labyrinths l\xf6sen"))," kann.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(Verschiedene Algorithmen f\xfcr einen ",(0,i.kt)("a",{parentName:"em",href:"../category/linienfolger"},"Linienfolger")," wurden an anderer Stelle besprochen.)")),(0,i.kt)("p",null,"Im Folgenden wird schrittweise auf die oben beschriebenen Teilaspekte eines Programms zum L\xf6sen eines Labyrinths eingegangen, so dass sie am Ende in der Lage sein sollten, ein funktionsf\xe4hige Programm selber zu implementieren"),(0,i.kt)("h2",{id:"unterschiedliche-kreuzungstypen-erkennen"},"Unterschiedliche Kreuzungstypen erkennen"),(0,i.kt)("p",null,"Die Kreuzungserkennung des Roboters soll alle Kreuzungen (Abzweigungen), Sackgassen und das Ziel des Labyrinths erkennen. Insgesamt gibt es 8 zu unterscheidende ",(0,i.kt)("em",{parentName:"p"},"Events")," (Kreuzung, Sackgasse, Ziel), welche in der folgenden Abbildung dargestellt sind. Jedem Event wird in der Abbildung eine Abk\xfcrzung (L, R, LG, RG, etc.) zugewiesen, welche sp\xe4ter im Programm f\xfcr das L\xf6sen des Labyrinths wichtig sein werden."),(0,i.kt)("p",null,"Au\xdferdem sind in der Abbildung die f\xfcnf Bodensensoren des Zumo 32u4 dargestellt, mit denen der Roboter die Kreuzungstypen erkennen kann. "),(0,i.kt)("img",{src:"/img/robotik/IntersectionTypes.png",alt:"Kreuzungstypen beim Labyrinth",width:"600px",className:"center"}),(0,i.kt)("h3",{id:"aufz\xe4hlungsdatentyp-enum-f\xfcr-die-kreuzungstypen"},"Aufz\xe4hlungsdatentyp ",(0,i.kt)("inlineCode",{parentName:"h3"},"enum")," f\xfcr die Kreuzungstypen"),(0,i.kt)("p",null,"\xc4hnlich wie bei den ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/stateMachine#enum-aufz%C3%A4hlungstyp"},"endlichen Automaten"),", macht es auch bei den Kreuzungstypen Sinn, einen eigenen Datentyp (",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp"),") f\xfcr die verschiedenen Kreuzungen zu erstellen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"enum KreuzungsTyp {L, R, LR, LG, RG, LRG, S, ZIEL}; // Deklaration eines neuen Datentyps `KreuzungsTyp`\n")),(0,i.kt)("p",null,"Damit l\xe4sst sich dann eine Variable vom erstellten Datentyp ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp")," deklarieren und ihr zum Beispiel den Wert ",(0,i.kt)("inlineCode",{parentName:"p"},"LRG")," f\xfcr eine Kreuzung mit 4 Abzweigungen zuweisen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"KreuzungsTyp kreuzung = LRG;  // Variable `kreuzung` vom Typ `KreuzungsTyp`\n")),(0,i.kt)("p",null,"Au\xdferdem kann eine Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," definiert werden, deren R\xfcckgabewert vom Typ ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp")," ist:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"KreuzungsTyp bestimmenKreuzung(){  // Funktion mit R\xfcckgabewert vom Typ `KreuzungsTyp`\n    // ...\n}\n")),(0,i.kt)("p",null,"Dadurch l\xe4sst sich die gesamte ",(0,i.kt)("strong",{parentName:"p"},"Kreuzungserkennung")," in einer Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," durchf\xfchren und das Ergebnis wird als Datentyp ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp")," zur\xfcckgegeben. Das vollst\xe4ndige Programm zum L\xf6sen des Labyrinths wird damit deutlich lesbarer und strukturierter."),(0,i.kt)("h3",{id:"bestimmen-des-kreuzungstypes"},"Bestimmen des Kreuzungstypes"),(0,i.kt)("img",{src:"/img/robotik/IntersectionErkennung.png",alt:"Kreuzungstypen erkennen",width:"580",className:"center"}),(0,i.kt)("p",null,"Das ",(0,i.kt)("strong",{parentName:"p"},"Bestimmen der Kreuzungstypen")," erfolgt in drei Schritten, die in der Abbildung dargestellt sind."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Der Roboter folgt so lange der Linie, bis ",(0,i.kt)("strong",{parentName:"li"},"einer")," der ",(0,i.kt)("strong",{parentName:"li"},"\xe4u\xdferen Sensoren eine Abzweigung erkennt")," (",(0,i.kt)("em",{parentName:"li"},"Welche Bedingung muss f\xfcr eine Sackgasse erf\xfcllt sein?"),")"),(0,i.kt)("li",{parentName:"ol"},"Wurde eine m\xf6gliche Abzweigung erkannt, sollte der Roboter bis ",(0,i.kt)("strong",{parentName:"li"},"auf die Mitte der Linie fahren"),". Dort wird erneut ",(0,i.kt)("strong",{parentName:"li"},"auf Abzweigungen hin \xfcberpr\xfcft"),". So wird sicher gestellt, dass alle Abzweigungen erkannt werden, auch wenn der Roboter nicht ganz senkrecht auf die Abzweigungen trifft."),(0,i.kt)("li",{parentName:"ol"},"Im n\xe4chsten Schritt ",(0,i.kt)("strong",{parentName:"li"},"f\xe4hrt")," der Roboter ",(0,i.kt)("strong",{parentName:"li"},"\xfcber die Linie hinweg"),". F\xfcr das sp\xe4ter folgende Abbiegen ist es am besten, wenn er genau mittig auf der Kreuzung stehen bleibt. Nun kann der Roboter \xfcberpr\xfcfen, ob es auch einen zus\xe4tzlichen ",(0,i.kt)("strong",{parentName:"li"},"Weg geradeaus")," gibt oder ob das Ziel (Ende des Labyrinths) erreicht wurde.")),(0,i.kt)("p",null,"Der 1. Schritt wird mit der ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/maze#funktion-fahrenzurkreuzung"},"Funktion ",(0,i.kt)("inlineCode",{parentName:"a"},"fahrenZurKreuzung()"))," und der 2. und 3. Schritt mit der ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/maze#funktion-bestimmenkreuzung"},"Funktion ",(0,i.kt)("inlineCode",{parentName:"a"},"bestimmenKreuzung()"))," realisiert."),(0,i.kt)("h3",{id:"funktion-fahrenzurkreuzung"},"Funktion ",(0,i.kt)("inlineCode",{parentName:"h3"},"fahrenZurKreuzung()")),(0,i.kt)("p",null,"Die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"fahrenZurKreuzung()")," soll den Roboter solange der Linie folgen lassen, bis ein Bodensensor den Beginn einer Kreuzung erkennt (1. Schritt). Wurde der Beginn einer Kreuzung erkannt, wird anschlie\xdfend die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," zum Ermitteln des Kreuzungstypes aufgerufen (2. und 3. Schritt)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Folgt der Linie bis zur n\xe4chsten Kreuzung und \n// gibt den erkannten Kreuzungstyp zur\xfcck.\nKreuzungsTyp fahrenZurKreuzung() {\n  bool kreuzung = false;\n\n  // der Linie folgen, bis eine Kreuzung erkannt wurde\n  while (!kreuzung) { \n    folgenLinie();\n    // Bedingung f\xfcr eine Kreuzung (oder Sackgasse)\n    kreuzung = aufLinie(0) || aufLinie(4) || !aufLinie(2);\n    motors.setSpeeds(0, 0);\n  }\n   // Wurde eine Kreuzung erkannt, die Funktion `bestimmenKreuzung` aufrufen\n   // und das Ergebnis zur\xfcckgeben.\n  return bestimmenKreuzung(); \n}\n")),(0,i.kt)("p",null,"Die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"folgenLinie()")," realisiert den Algorithmus zum ",(0,i.kt)("a",{parentName:"p",href:"../category/linienfolger"},"Linienfolgen")," mit einem geeignetem Algorithmus."),(0,i.kt)("h4",{id:"auflinie"},(0,i.kt)("inlineCode",{parentName:"h4"},"aufLinie()")),(0,i.kt)("p",null,"Die in ",(0,i.kt)("inlineCode",{parentName:"p"},"fahrenZurKreuzung()")," verwendet Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bool aufLinie(byte pSensor)")," gibt ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcck, wenn sich der angegebene Bodensensor \xfcber einer schwarzen Linie befindet und ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", wenn der Sensor keine Linie erkannt hat. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Die Funktion aktualisiert NICHT die Sensorwerte. \n// Zum Auslesen der Sensoren die Funktion readCalibrated() aufrufen.\nbool aufLinie(byte pSensor) {\n  const int schwelleLinie = 100;                    // Schwellert zum Erkennen einer Abzweigung\n  return lineSensorValues[pSensor] > schwelleLinie; // globaler Array `lineSensorValues[]`\n}\n")),(0,i.kt)("h3",{id:"funktion-bestimmenkreuzung"},"Funktion ",(0,i.kt)("inlineCode",{parentName:"h3"},"bestimmenKreuzung()")),(0,i.kt)("p",null,"Der 2. und 3. Schritt f\xfcr die ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/maze#bestimmen-des-kreuzungstypes"},"Bestimmung des Kreuzungstypes")," soll mit der Funktion  ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," umgesetzt werden. Ohne die fertige Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," zu pr\xe4sentieren, sollen an dieser Stelle ein paar Hinweise zur m\xf6glichen Realisierung gegeben werden. "),(0,i.kt)("p",null,"Die Hauptaufgabe der Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," ist das Erkennen der Kreuzungstypen. Deshalb sollte die Funktion vom Typ ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp")," sein und am Ende den ermittelten Kreuzungstyp zur\xfcckgegeben."),(0,i.kt)("p",null,"Das Erkennen des Kreuzungstyps wird wie oben beschrieben umgesetzt. Da sich die verschiedenen Kreuzungstypen aber aus unterschiedlichen Kombinationen von erkannten Abzweigungen ergibt, werden die boolschen Variablen ",(0,i.kt)("inlineCode",{parentName:"p"},"lLinks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lRechts")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"lGerade")," genutzt, um zuerst die erkannten Abzweigungen zu speichern."),(0,i.kt)("p",null,"Anschlie\xdfend wird der sich ",(0,i.kt)("strong",{parentName:"p"},"ergebende Kreuzungstyp")," bestimmt und als Wert vom Typ ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp")," (also ",(0,i.kt)("inlineCode",{parentName:"p"},"L"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LG"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RG"),", etc.) von der Funktion zur\xfcckgegeben."),(0,i.kt)("p",null,"Damit der Roboter die Kreuzungen zuverl\xe4ssig erkennt, sollte f\xfcr die Positionierung auf der Linie (2. Schritt) und der Positionierung mittig auf der Kreuzung (3. Schritt) der ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/wheelEncoder#auslesen-der-rad-encoder-beim-zumo-32u4"},"Motorencoder")," verwendet werden. Eine einfache Positionierung mit einer Zeitsteuerung kann gelegentlich funktionieren, stellt aber eine sehr fehleranf\xe4llige L\xf6sung dar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Bestimmen des Kreuzungstypes. \n// Die Funktion sollte aufgerufen werden, sobald ein Sensor\n// etwas anderes als der zu folgenden Linie erkennt.\nKreuzungsTyp bestimmenKreuzung(){\n    // An der Kreuzung erkannte Abzweigungen (0: keine Abzweigung)\n    bool lLinks  = 0;   // Abzweigung links \n    bool lRechts = 0;   // Abzweigungs rechts\n    bool lGerade = 0;   // Weg gereadeaus\n    \n    /*\n        1. Die Sensoren auf die Mitte der Linie positionieren (Motorencoder verwenden!).\n        2. Sensorwerte einlesen.\n        3. Abzweigungen bestimmten und `lLinks`/`lRechts` entsprechend setzen.\n        4. Weiterfahren, bis der Roboter mittig auf der Kreuzung steht.\n        5. Sensorwerte einlesen\n        6. `lGerade` setzen und auf Ziel \xfcberpr\xfcfen\n    */\n\n    // Funktion gibt mit `return` den ermittelten KreuzungsTyp zur\xfcck\n    if (/* Abzweigung links */){\n        return L;\n    }\n    else if (/* Abzweigung rechts */){\n        return R;\n    }\n    else if (/* Abzweigung links, gerade*/){\n        return LG;\n    }\n    /* usw. */\n}\n")),(0,i.kt)("h4",{id:"fahrenstreckemm"},(0,i.kt)("inlineCode",{parentName:"h4"},"fahrenStreckeMM()")),(0,i.kt)("p",null,"Au\xdferdem wird die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"fahrenStreckeMM()")," ben\xf6tigt, welche den Roboter mit Hilfe der Radencoder eine exakte Strecke zur\xfccklegen l\xe4sst. Dadurch wird die exakte Positionierung des Roboters auf der Kreuzung vereinfacht."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#define MM_PRO_IMPULS 0.128  // Aufl\xf6sung des Encoders,  Impulse * MM_PRO_IMPULS = Millimeter (Umrechnung Impulse in mm)\n\nvoid fahrenStreckeMM{int pSpeed, int pStreckeMM}{\n  long encoderImpulse = pStreckeMM / MM_PRO_IMPULS;\n  \n  // Zu programmierende Eigenschaft:\n  // Fahre solange geradeaus, wie die mittlere Anzahl\n  // beider Motorenencoder kleiner als `encoderImpulse` ist\n  // ... \n}\n")),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("p",null,"Schreiben Sie eine Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp fahrenZurKreuzung()"),", welche den Roboter einer Linie entlang bis zu einer Kreuzung folgt, den Kreuzungstyp der Linie bestimmt (es sollen alle Typen erkannt werden) und stoppt. Der ",(0,i.kt)("strong",{parentName:"p"},"R\xfcckgabewert")," der Funktion ist der ermittelte Kreuzungstyp."),(0,i.kt)("p",null,"Verwenden Sie die selbstgeschriebene Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp fahrenZurKreuzung()")," um mit dem Roboter ",(0,i.kt)("strong",{parentName:"p"},"beliebige")," Kreuzungstypen zu erkennen und auf dem Display ausgeben zu lassen.  Nachdem eine Kreuzung erkannt wurde, folgt der Roboter auf Knopfdruck erneut der Linie bis zur n\xe4chsten Kreuzung. Bei dieser Aufgabe soll der Roboter noch keine Funktion zum Abbiegen an Kreuzungen implementiert haben (folgt sp\xe4ter).")),(0,i.kt)("h2",{id:"abbiegen-an-kreuzungen"},"Abbiegen an Kreuzungen"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#define LEFT 1\n#define RIGHT -1\nvoid abbiegenKreuzung(int pRichtung){\n    if (pRichtung == LEFT){        // gegen den Uhrzeigersinn bis zur n\xe4chsten Abzweigung drehen\n        // Drehen, bis der Roboter auf der Linie steht\n    }\n    else if (pRichtung == RIGHT){  // mit den Uhrzeigersinn bis zur n\xe4chsten Abzweigung drehen\n        // Drehen, bis der Roboter auf der Linie steht\n    }\n}\n")),(0,i.kt)("h2",{id:"l\xf6sen-des-labyrinths-mit-rechter-hand-regel"},"L\xf6sen des Labyrinths mit Rechter-Hand-Regel"),(0,i.kt)("img",{src:"/img/robotik/mazeRHR_1.png",alt:"Labyrinth Rechte-Hand-Regel",width:"400",className:"center"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void fahrenMitRHR(){               // RHR: Rechte-Hand-Regel\n  bool end = false; \n\n  while (!end){\n    KreuzungsTyp kreuzung;\n    kreuzung = fahrenZurKreuzung();\n\n    switch(kreuzung){\n        case L:                    // nur Abzweig nach links  \n          abbiegenKreuzung(LEFT);  // links abbiegen\n          break;\n        /*\n\n        case-Anweisungen f\xfcr alle anderen Kreuzungstypen\n\n        */\n    }\n\n}\n\n")),(0,i.kt)("h2",{id:"optimierung-der-rechten-hand-regel"},"Optimierung der Rechten-Hand-Regel"),(0,i.kt)("img",{src:"/img/robotik/mazeRHR_2.png",alt:"Labyrinth Rechte-Hand-Regel",width:"400",className:"center"}),(0,i.kt)("img",{src:"/img/robotik/mazeRHR_3.png",alt:"Labyrinth Rechte-Hand-Regel",width:"400",className:"center"}),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://patrickmccabemakes.com/tutorials/Maze_Solving/"},"Maze Solving")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pololu.com/file/0J195/line-maze-algorithm.pdf"},"Teaching a Robot to Solve a Line Maze")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://am.heise.de/abo/06_ma_education/Labyrinth.pdf?wt_mc=intern.abo.make.education.lp_ad.9.9"},"Arduino findet durch Labyrinth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thecodingtrain.com/challenges/10-dfs-maze-generator"},"Maze Generator with Processing - Tutorial"))))}g.isMDXComponent=!0}}]);