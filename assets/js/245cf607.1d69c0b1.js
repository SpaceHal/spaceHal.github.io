"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[2240],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),o=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=o(e.components);return i.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=o(t),c=r,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||a;return t?i.createElement(k,u(u({ref:n},s),{},{components:t})):i.createElement(k,u({ref:n},s))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,u=new Array(a);u[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var o=2;o<a;o++)u[o]=t[o];return i.createElement.apply(null,u)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4547:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return o},default:function(){return p}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),u={title:"Eine Men\xfcsteuerung mit zwei Tastern und drei LEDs",sidebar_label:"1. Men\xfcsteuerung",description:"Ein einfache Men\xfcsteuerung mit zwei Tastern und drei LEDs f\xfcr Arduino"},l=void 0,d={unversionedId:"arduino/simpleMenu",id:"arduino/simpleMenu",isDocsHomePage:!1,title:"Eine Men\xfcsteuerung mit zwei Tastern und drei LEDs",description:"Ein einfache Men\xfcsteuerung mit zwei Tastern und drei LEDs f\xfcr Arduino",source:"@site/docs/arduino/simpleMenu.md",sourceDirName:"arduino",slug:"/arduino/simpleMenu",permalink:"/docs/arduino/simpleMenu",editUrl:"https://spacehal.github.io/docs/arduino/simpleMenu.md",version:"current",frontMatter:{title:"Eine Men\xfcsteuerung mit zwei Tastern und drei LEDs",sidebar_label:"1. Men\xfcsteuerung",description:"Ein einfache Men\xfcsteuerung mit zwei Tastern und drei LEDs f\xfcr Arduino"},sidebar:"sideBarArduino",previous:{title:"13. Animationseffekte",permalink:"/docs/arduino/lightAnimation"},next:{title:"2. Objektorientierung",permalink:"/docs/arduino/objectOriented"}},o=[{value:"Men\xfcanzeige",id:"men\xfcanzeige",children:[]},{value:"Aufrufen der Men\xfc-Funktionen",id:"aufrufen-der-men\xfc-funktionen",children:[]},{value:"Beispiele f\xfcr Event-Funktionen",id:"beispiele-f\xfcr-event-funktionen",children:[]},{value:"Alles zusammen",id:"alles-zusammen",children:[]}],s={toc:o};function p(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mit dem folgenden Programm kann eine einfach Men\xfcsteuerung mit zwei Tastern (Men\xfcpunkt \xe4ndern, Men\xfcpunkt aktivieren) und drei LEDs realisiert werden."),(0,a.kt)("h2",{id:"men\xfcanzeige"},"Men\xfcanzeige"),(0,a.kt)("p",null,"Als Grundlage f\xfcr die Men\xfcsteuerung dient ein ",(0,a.kt)("a",{parentName:"p",href:"stateMachine"},"endlicher Automat")," zur Auswahl verschiedener Men\xfceintr\xe4ge. F\xfcr jeden Men\xfceintrag wird eine unterschiedliche Kombination leuchtender LEDs dargestellt. Hierf\xfcr wird die Funktion "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"setLeds(bool pLed1, bool pLed2)\n")),(0,a.kt)("p",null,"genutzt. Neben den LEDs wird auch der serielle Monitor zur Darstellung der Men\xfcsteuerung genutzt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},'//  Aufz\xe4hlungsdatentyp f\xfcr die Men\xfceintr\xe4ge \nenum MenuStates { STATE0, STATE1, STATE2, STATE3 };\nMenuStates menuState = STATE0;\n\n// Bei jedem Aufruf \xe4ndert sich der gew\xe4hlte Men\xfceintrag. Es findet also ein \n// \xdcbergang (\xc4nderung) des `menuState` statt: (old state -> new state)\nvoid doMenu() {\n  switch (menuState) {\n    case STATE0:          // old menu state\n      menuState = STATE1; // new menu state\n      setLeds(0, 1);      // aktuellen Men\xfceintrag anzeigen\n      Serial.print("\\n [Menue: STATE1] ");\n      break;\n\n    case STATE1:\n      menuState = STATE2; // new menu state\n      setLeds(1, 0);      // aktuellen Men\xfceintrag anzeigen\n      Serial.print("\\n [Menue: STATE2] ");\n      break;\n\n    case STATE2:\n      menuState = STATE0; // next menu state\n      setLeds(0, 0);      // aktuellen Men\xfceintrag anzeigen\n      Serial.print("\\n [Menue: STATE0] ");\n      break;\n  }\n}\n')),(0,a.kt)("h2",{id:"aufrufen-der-men\xfc-funktionen"},"Aufrufen der Men\xfc-Funktionen"),(0,a.kt)("p",null,"Zus\xe4tzlich zum endlichen Automaten der Men\xfcsteuerung gibt es die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"doTasks()"),", welche - wenn der Men\xfceintrag aktiviert wurde - die zugeh\xf6rigen Men\xfc-Funktionen ",(0,a.kt)("inlineCode",{parentName:"p"},"doEvent1()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"doEvent2()"),", etc. aufruft. "),(0,a.kt)("p",null,"Diese Event-Funktionen enthalten den f\xfcr den entsprechenden Men\xfceintrag auszuf\xfchrenden Programmcode. Der R\xfcckgabewert der Event-Funktionen gibt an, ob das Event bereits beendet ist, oder ein weiteres Mal aufgereufen werden soll."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"\n// Gibt an, ob ein Men\xfceintrag aktiviert ist.\nbool taskIsRunning = false; \n\n// Die Funktion ruft mit Hilfe der globalen Variable `menuState` die `doEvent()` Funktionen \n// f\xfcr den aktivierten Men\xfceintrag auf. Sie sollte regelm\xe4\xdfig in loop() aufgerufen werden.\nvoid doTasks() {\n  switch (menuState) {\n    case STATE0:\n      taskIsRunning = !doEvent0(); // doEvent0() returns true if finished.\n      break;\n\n    case STATE1:\n      taskIsRunning = !doEvent1();\n      break;\n\n    case STATE2:\n      taskIsRunning = !doEvent2();\n      break;\n  }\n}\n")),(0,a.kt)("h2",{id:"beispiele-f\xfcr-event-funktionen"},"Beispiele f\xfcr Event-Funktionen"),(0,a.kt)("p",null,"Die Beispiele f\xfcr die Event-Funktionen schalten eine zuerst LED an und nach einer Sekunde (",(0,a.kt)("inlineCode",{parentName:"p"},"doEvent0()"),") oder f\xfcnf (",(0,a.kt)("inlineCode",{parentName:"p"},"doEvent1()"),") Sekunden wieder aus. Diese Event-Funktionen sind blockierend,  unterbrechen also das Programm, bis sie beendet wurden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},'// Jede `doEvent` Funktion muss `true` zur\xfcckgeben, wenn sie beendet ist.\n// F\xfcr jeden Men\xfceintrag sollte es eine eigene `doEvent` Funktion geben.\n\n// Blockierendes Event\nbool doEvent0() {\n  digitalWrite(pinTaskRunning, HIGH);\n  Serial.print("Event 0 is blocking for 1 sec . ");\n  delay(1000);\n  Serial.print("finished");\n  digitalWrite(pinTaskRunning, LOW);\n  return true;  // gibt `true` zur\xfcck, wenn die Funktion beendet ist\n}\n\n// Blockierendes Event\nbool doEvent1() {\n  digitalWrite(pinTaskRunning, HIGH);\n  Serial.print("Event 1 is blocking for 5 sec ..... ");\n  delay(5000);\n  Serial.print("finished");\n  digitalWrite(pinTaskRunning, LOW);\n  return true;\n}\n')),(0,a.kt)("p",null,"Das Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"doEvent2()")," schaltet eine LED an und wartet dann auf eine Tastereingabe, um die LED wieder auszuschalten und das Event zu beenden. Dieses Event ist nicht blockierend."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},'// Nichtblockierendes Event\nbool doEvent2() {\n  digitalWrite(pinTaskRunning, HIGH);\n  Serial.print("\\n\\t\\tEvent 2 is running (Press Button) ");\n\n  if (debouncerSelect.fell()) {\n    Serial.print(" ... finished");\n    digitalWrite(pinTaskRunning, LOW);\n    return true;  // Task wurde durch den Taster beendet.\n  }\n  else\n    return false; // Task ist immernoch aktiv und wird beim n\xe4chsten loop() Durchlauf erneut aufgerufen.\n}\n')),(0,a.kt)("h2",{id:"alles-zusammen"},"Alles zusammen"),(0,a.kt)("p",null,"In der ",(0,a.kt)("inlineCode",{parentName:"p"},"loop()"),"-Funktion werde zu guter Letzt alle Teile f\xfcr die Men\xfcsteuerung zusammengef\xfcgt. Nachdem die Zust\xe4nde der, mit der ",(0,a.kt)("a",{parentName:"p",href:"debounce#bounce2-bibliothek-zum-entprellen"},"Bounce2 Bibliothek")," entprellten, Taster aktualisierte worden sind, beginnt die eigentliche Men\xfcsteuerung:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Wenn ein Task (",(0,a.kt)("inlineCode",{parentName:"li"},"doEvent()")," Funktionen) noch aktiv ist ",(0,a.kt)("inlineCode",{parentName:"li"},"if (taskIsRunning)"),", soll dieser erneut aufgerufen werden."),(0,a.kt)("li",{parentName:"ol"},"Ist kein Task aktiv, werden die Taster zur Men\xfcsteuerung eingelesen:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Wurde der UP Taster gedr\xfcckt, wird mit ",(0,a.kt)("inlineCode",{parentName:"li"},"doMenu()")," das Men\xfc aktualisiert, also ein neuer Men\xfceintrag angezeigt."),(0,a.kt)("li",{parentName:"ol"},"Wurde der SELECT Taster gedr\xfcckt, wird der aktuelle Men\xfceintrag mit ",(0,a.kt)("inlineCode",{parentName:"li"},"taskIsRunning = true")," aktiviert. Beim n\xe4chsten ",(0,a.kt)("inlineCode",{parentName:"li"},"loop()")," Durchlauf wird dann mit ",(0,a.kt)("inlineCode",{parentName:"li"},"doTasks()")," die zugeh\xf6rige Event-Funktion aufgerufen.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"void loop() {\n\n  // aktualisieren der Tasterzust\xe4nde  \n  debouncerSelect.update(); \n  debouncerUp.update();     \n\n  if (taskIsRunning) {\n    doTasks();\n  }\n  else {\n    if (debouncerUp.fell()){       // if button was pressed\n      doMenu();\n    }\n    if (debouncerSelect.fell()){   // if button was pressed\n      taskIsRunning = true;\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Im Flussdiagramm ist der gesamte Ablauf noch einmal zusammengefasst."),(0,a.kt)("img",{src:"/img/arduino/Menu_FlowChart.png",alt:"drawing",width:"460pt",class:"center"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,a.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Analysieren Sie das Programmger\xfcst f\xfcr ein einfaches Men\xfc. Gehen Sie dabei auf folgende Fragen ein:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Um  welchen Datentyp handelt es sich bei der Variablen ",(0,a.kt)("inlineCode",{parentName:"p"},"menuState")," und wof\xfcr wird die Variable verwendet?"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"MenuStates menuState = STATE0;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Was macht die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"setLeds(0, 1)"),"?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Warum handelt es sich bei den Funktionen ",(0,a.kt)("inlineCode",{parentName:"p"},"doEvent0")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"doEvent1")," um ",(0,a.kt)("strong",{parentName:"p"},"blockierende")," Funktionen und bei ",(0,a.kt)("inlineCode",{parentName:"p"},"doEvent2")," um eine ",(0,a.kt)("strong",{parentName:"p"},"nichtblockierende")," Funktion?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Welche Bedeutung hat der R\xfcckgabewert der Event-Funktionen und wof\xfcr wird er ben\xf6tigt?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Was macht die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"doTasks()")," und warum wird sie ",(0,a.kt)("strong",{parentName:"p"},"nur")," in der ",(0,a.kt)("inlineCode",{parentName:"p"},"if"),"-Verzweigung aufgerufen?"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"if (taskIsRunning) {\n  doTasks();\n}\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implementieren Sie die beschriebene Men\xfcssteuerung.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Erweitern Sie die Men\xfcsteuerung um einen ",(0,a.kt)("strong",{parentName:"p"},"weiteren")," Taster. Die Men\xfceintr\xe4ge sollen mit den zwei Tastern in verschiedene Richtungen (auf/ab) ausgew\xe4hlt werden k\xf6nnen."))))))}p.isMDXComponent=!0}}]);