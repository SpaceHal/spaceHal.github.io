(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),a=(t(0),t(132)),o={title:"Erste \xdcbungen mit einem Roboter",sidebar_label:"Erste Schritte",description:"Einen sehr einfachen Roboter bauen"},b={unversionedId:"robotik/beginning",id:"robotik/beginning",isDocsHomePage:!1,title:"Erste \xdcbungen mit einem Roboter",description:"Einen sehr einfachen Roboter bauen",source:"@site/docs/robotik/beginning.md",slug:"/robotik/beginning",permalink:"/docs/robotik/beginning",editUrl:"https://spacehal.github.io/docs/robotik/beginning.md",version:"current",sidebar_label:"Erste Schritte",sidebar:"sideBarRobotik",next:{title:"3-Stufen-Regler f\xfcr einen Kantenfolger",permalink:"/docs/robotik/edgeFollower"}},c=[{value:"Aufgaben",id:"aufgaben",children:[]}],s={rightToc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Wenn Sie die Inhalte aus dem Bereich ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/arduino/helloworld"}),"Arduino")," durchgearbeitet haben, sollten Sie in der Lage sein einen einfachen, fahrbaren Roboter mit zwei Motoren aufzubauen. Hierf\xfcr kann entweder aus Acrylglas oder Sperrholz ein Chassis selber gefertigt werden oder es kann im Internet ein fertiges Chassis mit zwei geeigneten Motoren gekauft werden (Suchbegriff: ",Object(a.b)("em",{parentName:"p"},"robot chassis 2wd"),")."),Object(a.b)("img",{src:"/img/robotik/ArduinoRobot_web.jpeg",alt:"Robot",width:"450pt",class:"center"}),Object(a.b)("p",null,"Ein m\xf6gliche Schaltung f\xfcr einen Roboter mit drei Tastern, zwei LEDs und dem Motortreiber DRV8833 ist im Folgenden abgebildet. Achten Sie auf die externe Spannungsversorgung der Motoren."),Object(a.b)("img",{src:"/img/robotik/BotCircuit.png",alt:"Robot Circuit",width:"400pt",class:"center"}),Object(a.b)("h2",{id:"aufgaben"},"Aufgaben"),Object(a.b)("p",null,"F\xfcr die folgenden Aufgaben wird ein Roboter mit ",Object(a.b)("strong",{parentName:"p"},"Differentialantrieb")," (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://link.springer.com/chapter/10.1007/978-3-319-62533-1_1#Sec7"}),"differential drive"),"), also ein Roboter mit zwei unabh\xe4ngig steuerbaren R\xe4dern vorausgesetzt. Zus\xe4tzlich sollte der verwendete Roboter mindestens ",Object(a.b)("strong",{parentName:"p"},"zwei, besser drei Taster")," und ",Object(a.b)("strong",{parentName:"p"},"zwei oder mehr LEDs")," aufweisen. Weiter Sensoren werden an dieser Stelle nicht ben\xf6tigt."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(a.b)("strong",{parentName:"h5"},"\xdcben"))),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ol",{parentName:"div"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Bei der ersten Aufgabe geht es darum, den Roboter sicher losfahren und wieder stoppen zu lassen. Programmieren Sie einen Taster so, dass  beim ",Object(a.b)("strong",{parentName:"p"},"ersten Dr\xfccken")," des Tasters der  Roboter ",Object(a.b)("strong",{parentName:"p"},"losf\xe4hrt")," und beim ",Object(a.b)("strong",{parentName:"p"},"erneuten Dr\xfccken stoppt"),".\nWenn der Roboter f\xe4hrt, soll zus\xe4tzlich eine (gr\xfcne) ",Object(a.b)("strong",{parentName:"p"},"LED aufleuchten"),". Ber\xfccksichtigen Sie das ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/arduino/debounce"}),"Prellen")," des Tasters. ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches den Roboter ca. 1,5 Meter ",Object(a.b)("strong",{parentName:"p"},"eine gerade Linie")," fahren l\xe4sst. Schreiben Sie hierf\xfcr eine eigene Funktion ",Object(a.b)("inlineCode",{parentName:"p"},"setSpeed(int pLeft, int pRight)"),", welche die Geschwindigkeit der beiden Motoren steuert."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Notieren Sie das Tastverh\xe4ltnis des PWM-Signals, ab welchem die Motoren sich zu drehen anfangen."),Object(a.b)("li",{parentName:"ul"},"Nutzen Sie einen ",Object(a.b)("strong",{parentName:"li"},"Kalibrierungsfaktor")," f\xfcr die beiden Motoren, damit der Roboter bei gleichen PWM-Werten (f\xfcr ",Object(a.b)("inlineCode",{parentName:"li"},"pLeft")," und ",Object(a.b)("inlineCode",{parentName:"li"},"pRight"),") geradeaus f\xe4hrt. \xdcberlegen Sie sich ein Experiment zum Bestimmen des Kalibrierungsfaktors. "),Object(a.b)("li",{parentName:"ul"},"Testen Sie, ob der Kaliebrierungsfakter auch bei anderen Geschwindigkeiten funktioniert.")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-arduino"}),"float motorKalibrierung = 0.95; // Werte zwischen 1.1 und 0.9 sollten funktionieren\n\nvoid setSpeed(int pLeft, int pRight)\n{\n  int lPwmLeft = pLeft;                       // PWM-Wert f\xfcr den linken Motor\n  int lPwmRight = motorKalibrierung * pRight; // PWM-Wert f\xfcr den rechten Motor\n  /*\n   Code f\xfcr die Motorsteuerung mit dem Motortreiber ...\n  */\n}\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Schreiben und testen Sie verschiedene Programme, welche folgende Aktionen ausf\xfchren:"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Der Roboter f\xe4hrt ca. 1,5 Meter geradeaus. Dabei beschleunigt er zu erst und bremst dann kontinuierlich ab."),Object(a.b)("li",{parentName:"ol"},"Der Roboter f\xe4hrt ein Quadrat mit einer Kantenl\xe4nge von ca. einem Meter. "),Object(a.b)("li",{parentName:"ol"},"Der Roboter f\xe4hrt einen Kreis mit einem Durchmesser von ca. einem Meter."),Object(a.b)("li",{parentName:"ol"},"Der Roboter f\xe4hrt eine Acht."),Object(a.b)("li",{parentName:"ol"},"Der Roboter ",Object(a.b)("em",{parentName:"li"},"zeichnet")," (wenn m\xf6glich mit Stift), das ",Object(a.b)("em",{parentName:"li"},"Haus vom Nikolaus"),".")),Object(a.b)("p",{parentName:"li"},"Die Start- und Endpunkte sollten (wenn m\xf6glich) nahe beieinander liegen.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Erweitern Sie den Roboter um drei Taster und zwei bis vier LEDs (7 Segementanzeige oder Display ist auch m\xf6glich). Schreiben Sie f\xfcr den Roboter eine ",Object(a.b)("strong",{parentName:"p"},"Men\xfcsteuerung"),", bei der mit zwei Tastern eine aus vier verschiedene Roboteraktionen der 3. Aufgabe ausgew\xe4hlt und mit den dritten Taster aktiviert werden kann. Die LEDs sollen entsprechend der ausgew\xe4hlten Funktionen unterschiedlich leuchten. "),Object(a.b)("p",{parentName:"li"},"Der Eintrag ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/arduino/simpleMenu"}),"Men\xfcsteuerung")," kann Ihnen bei der Realisierung helfen."))))))}l.isMDXComponent=!0},132:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},d=function(e){var n=l(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||a;return t?i.a.createElement(m,b(b({ref:n},s),{},{components:t})):i.a.createElement(m,b({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);