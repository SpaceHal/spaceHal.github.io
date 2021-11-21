"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[2519],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2064:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o={title:"Einen einfachen Roboter bauen und testen",sidebar_label:"Erste Schritte",description:"Einen Roboter zu bauen ist nicht schwer. Mit ein wenig Geschick kann ein Roboter gebaut werden, der mit einem Arduino gesteuert wird.",custom_edit_url:null,keywords:["Arduino","Roboter","selber bauen","DIY","programmieren"]},l=void 0,s={unversionedId:"robotik/beginning",id:"robotik/beginning",isDocsHomePage:!1,title:"Einen einfachen Roboter bauen und testen",description:"Einen Roboter zu bauen ist nicht schwer. Mit ein wenig Geschick kann ein Roboter gebaut werden, der mit einem Arduino gesteuert wird.",source:"@site/docs/robotik/beginning.md",sourceDirName:"robotik",slug:"/robotik/beginning",permalink:"/docs/robotik/beginning",editUrl:null,tags:[],version:"current",lastUpdatedAt:1631966711,formattedLastUpdatedAt:"18.9.2021",frontMatter:{title:"Einen einfachen Roboter bauen und testen",sidebar_label:"Erste Schritte",description:"Einen Roboter zu bauen ist nicht schwer. Mit ein wenig Geschick kann ein Roboter gebaut werden, der mit einem Arduino gesteuert wird.",custom_edit_url:null,keywords:["Arduino","Roboter","selber bauen","DIY","programmieren"]},sidebar:"sideBarRobotik",next:{title:"3-Stufen-Regler",permalink:"/docs/robotik/edgeFollower"}},d=[{value:"Bauteilliste",id:"bauteilliste",children:[]},{value:"Aufgaben",id:"aufgaben",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wenn Sie die Inhalte aus dem Bereich ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/helloworld"},"Arduino")," durchgearbeitet haben, sollten Sie in der Lage sein einen einfachen, fahrbaren Roboter mit zwei Motoren aufzubauen. Hierf\xfcr kann entweder aus Acrylglas oder Sperrholz ein Chassis selber gefertigt werden oder es kann im Internet ein fertiges Chassis mit zwei geeigneten Motoren gekauft werden (Suchbegriff: ",(0,i.kt)("em",{parentName:"p"},"robot chassis 2wd"),")."),(0,i.kt)("img",{src:"/img/robotik/ArduinoRobot_web2.jpg",alt:"Robot",width:"800pt",class:"center"}),(0,i.kt)("p",null,"Eine m\xf6gliche Schaltung f\xfcr einen Roboter mit zwei Tastern, drei (Status-)LEDs und dem Motortreiber DRV8833 ist im Folgenden abgebildet. Achten Sie auf die externe Spannungsversorgung der Motoren."),(0,i.kt)("img",{src:"/img/robotik/BotCircuit2.jpg",alt:"Robot Circuit",width:"500pt",class:"center"}),(0,i.kt)("h3",{id:"bauteilliste"},"Bauteilliste"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Bauteil"),(0,i.kt)("th",{parentName:"tr",align:null},"Anzahl"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Arduino (Uno)"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/arduino/helloworld"},"LED")),(0,i.kt)("td",{parentName:"tr",align:null},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/arduino/debounce"},"Taster")),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Widerstand 220 Ohm"),(0,i.kt)("td",{parentName:"tr",align:null},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Motortreiber ",(0,i.kt)("a",{parentName:"td",href:"/docs/motor/drv8833"},"DRV8833")),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TT - ",(0,i.kt)("a",{parentName:"td",href:"/docs/motor/basics"},"Motor")," mit R\xe4der"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Chassis (z.B. Acrylplatte)"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Batteriehalter mit 4 AA Batterien"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9V Block mit Anschlusskable"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Steckbrett (half size)"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Verbindungskabel"),(0,i.kt)("td",{parentName:"tr",align:null},"ca. 10")))),(0,i.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,i.kt)("p",null,"F\xfcr die folgenden Aufgaben wird ein Roboter mit ",(0,i.kt)("strong",{parentName:"p"},"Differentialantrieb")," (",(0,i.kt)("a",{parentName:"p",href:"https://link.springer.com/chapter/10.1007/978-3-319-62533-1_1#Sec7"},"differential drive"),"), also ein Roboter mit zwei unabh\xe4ngig steuerbaren R\xe4dern vorausgesetzt. Zus\xe4tzlich sollte der verwendete Roboter mindestens ",(0,i.kt)("strong",{parentName:"p"},"zwei Taster")," und ",(0,i.kt)("strong",{parentName:"p"},"zwei oder mehr LEDs")," aufweisen. Weitere Sensoren werden an dieser Stelle nicht ben\xf6tigt."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,i.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Bei der ersten Aufgabe geht es darum, den Roboter sicher losfahren und wieder stoppen zu lassen. Programmieren Sie einen Taster so, dass  beim ",(0,i.kt)("strong",{parentName:"p"},"ersten Dr\xfccken")," des Tasters der  Roboter ",(0,i.kt)("strong",{parentName:"p"},"losf\xe4hrt")," und beim ",(0,i.kt)("strong",{parentName:"p"},"erneuten Dr\xfccken stoppt"),".\nWenn der Roboter f\xe4hrt, soll zus\xe4tzlich eine (gr\xfcne) ",(0,i.kt)("strong",{parentName:"p"},"LED aufleuchten"),". Ber\xfccksichtigen Sie das ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/debounce"},"Prellen")," des Tasters. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches den Roboter genau 1,5 Meter ",(0,i.kt)("strong",{parentName:"p"},"eine gerade Linie")," fahren l\xe4sst. Schreiben Sie hierf\xfcr eine eigene Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"setSpeed(int pLeft, int pRight)"),", welche die Geschwindigkeit der beiden Motoren steuert."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Notieren Sie das Tastverh\xe4ltnis des PWM-Signals, ab welchem die Motoren sich zu drehen anfangen."),(0,i.kt)("li",{parentName:"ul"},"Nutzen Sie einen ",(0,i.kt)("strong",{parentName:"li"},"Kalibrierungsfaktor")," f\xfcr die beiden Motoren, damit der Roboter bei gleichen PWM-Werten (f\xfcr ",(0,i.kt)("inlineCode",{parentName:"li"},"pLeft")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"pRight"),") geradeaus f\xe4hrt. \xdcberlegen Sie sich ein Experiment zum Bestimmen des Kalibrierungsfaktors. "),(0,i.kt)("li",{parentName:"ul"},"Testen Sie, ob der Kaliebrierungsfakter auch bei anderen Geschwindigkeiten funktioniert.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"float motorKalibrierung = 0.95; // Werte zwischen 1.1 und 0.9 sollten funktionieren\n\nvoid setSpeed(int pLeft, int pRight)\n{\n  int lPwmLeft = pLeft;                       // PWM-Wert f\xfcr den linken Motor\n  int lPwmRight = motorKalibrierung * pRight; // PWM-Wert f\xfcr den rechten Motor\n  /*\n   Code f\xfcr die Motorsteuerung mit dem Motortreiber ...\n  */\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Schreiben und testen Sie verschiedene Programme, welche folgende Aktionen ausf\xfchren:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Der Roboter f\xe4hrt genau 1,5 Meter geradeaus. Dabei beschleunigt er zu erst und bremst dann kontinuierlich ab."),(0,i.kt)("li",{parentName:"ol"},"Der Roboter f\xe4hrt ein Quadrat mit einer Kantenl\xe4nge von ca. einem Meter. "),(0,i.kt)("li",{parentName:"ol"},"Der Roboter f\xe4hrt einen Kreis mit einem Durchmesser von ca. einem Meter."),(0,i.kt)("li",{parentName:"ol"},"Der Roboter f\xe4hrt eine Acht."),(0,i.kt)("li",{parentName:"ol"},"Der Roboter ",(0,i.kt)("em",{parentName:"li"},"zeichnet")," (wenn m\xf6glich mit Stift), das ",(0,i.kt)("em",{parentName:"li"},"Haus vom Nikolaus"),".")),(0,i.kt)("p",{parentName:"li"},"Die Start- und Endpunkte sollten (wenn m\xf6glich) nahe beieinander liegen.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Erweitern Sie den Roboter um drei Taster und zwei bis vier LEDs (7 Segementanzeige oder Display ist auch m\xf6glich). Schreiben Sie f\xfcr den Roboter eine ",(0,i.kt)("strong",{parentName:"p"},"Men\xfcsteuerung"),", bei der mit zwei Tastern eine aus vier verschiedene Roboteraktionen der 3. Aufgabe ausgew\xe4hlt und mit den dritten Taster aktiviert werden kann. Die LEDs sollen entsprechend der ausgew\xe4hlten Funktionen unterschiedlich leuchten. "),(0,i.kt)("p",{parentName:"li"},"Der Eintrag ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/simpleMenu"},"Men\xfcsteuerung")," kann Ihnen bei der Realisierung helfen."))))))}p.isMDXComponent=!0}}]);