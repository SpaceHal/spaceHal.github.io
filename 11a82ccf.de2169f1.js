(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||b[h]||a;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(131)),s={title:"Einen Gleichstrommotor mir einer H-Br\xfccke steuern",sidebar_label:"3. H-Br\xfccke",description:"Eine H-Br\xfccke zum Steuern eines Gleichstrommotors."},o={unversionedId:"motor/hBridge",id:"motor/hBridge",isDocsHomePage:!1,title:"Einen Gleichstrommotor mir einer H-Br\xfccke steuern",description:"Eine H-Br\xfccke zum Steuern eines Gleichstrommotors.",source:"@site/docs/motor/hBridge.md",slug:"/motor/hBridge",permalink:"/docs/motor/hBridge",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/motor/hBridge.md",version:"current",sidebar_label:"3. H-Br\xfccke",sidebar:"someSidebar",previous:{title:"Grundlagen zum Gleichstrommotor",permalink:"/docs/motor/basics"},next:{title:"Der integrierte Motortreiber DRV8833",permalink:"/docs/motor/drv8833"}},c=[{value:"Einfaches Schalten eines Gleichstrommotors",id:"einfaches-schalten-eines-gleichstrommotors",children:[]},{value:"Freilaufdiode (<em>flyback diode</em>)",id:"freilaufdiode-flyback-diode",children:[]},{value:"H-Br\xfccke",id:"h-br\xfccke",children:[{value:"Linkslauf",id:"linkslauf",children:[]},{value:"Rechtslauf",id:"rechtslauf",children:[]},{value:"Bremsen",id:"bremsen",children:[]}]},{value:"Aufgaben",id:"aufgaben",children:[]},{value:"Weiterf\xfchrende Artikel",id:"weiterf\xfchrende-artikel",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"einfaches-schalten-eines-gleichstrommotors"},"Einfaches Schalten eines Gleichstrommotors"),Object(a.b)("p",null,"Die einfachste Art zur Ansteuerung eines Gleichstrommotors w\xe4re ein simpler Schalter, der in Reihe zum Motor und der Spannungsquelle liegt (siehe Abbildung a)). Ist der Schalter geschlossen und liegt an dem Motor eine Spannung an, so dreht sich der Motor. Ist der Schalter offen, h\xf6rt der Motor ganz offensichtlich auf sich zu drehen. "),Object(a.b)("img",{src:"/img/motor/MotorTransistor.png",alt:"Motor circuit with transistor",width:"360px",class:"center"}),Object(a.b)("p",null,"Es ist jedoch zu beachten, dass beim Arduino nur ein Maximalstrom von 40 mA pro Pin erlaubt ist. Der verwendete Elektromotor hat jedoch selbst im Leerlauf eine deutlich h\xf6here Stromaufnahme. ",Object(a.b)("strong",{parentName:"p"},"Daher darf ein Elektromotor niemals direkt an den Arduino angeschlossen werden.")),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Ein Elektromotor darf niemals direkt an den Arduino angeschlossen werden. Dies w\xfcrde den Ardiuno unweigerlich zerst\xf6ren.          "))),Object(a.b)("p",null,"Aus diesem Grund werden Motoren in aller Regel mit elektronischen Schaltern wie zum Beispiel ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://de.wikipedia.org/wiki/Relais"}),"Relais")," oder ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.grund-wissen.de/elektronik/bauteile/transistor.html"}),"Transistoren")," gesteuert. Elektronische Schalter k\xf6nnen mit relativ kleinen Steuerstr\xf6men gro\xdfe Laststr\xf6me schalten. Der Arduino w\xfcrde den Steuerstrom zum Schalten des Transistors liefern, w\xe4hrend der elektronische Schalter den Motor mit einer ",Object(a.b)("strong",{parentName:"p"},"separaten Spannungsversorgung")," verbindet (siehe Abbildunug b))."),Object(a.b)("h2",{id:"freilaufdiode-flyback-diode"},"Freilaufdiode (",Object(a.b)("em",{parentName:"h2"},"flyback diode"),")"),Object(a.b)("p",null,"In Abbildung b) ist zus\xe4tzlich eine ",Object(a.b)("strong",{parentName:"p"},"Freilaufdiode")," parallel zum Motor geschaltet. Motoren, die sich im Betrieb befinden, speichern mit den Motorwicklungen (der Induktivit\xe4t) elektrische Energie. Das f\xfchrt dazu, dass der Strom durch einen Motor nicht pl\xf6tzlich auf Null springen kann. Wird ein Motor von seiner Spannungsversorgung getrennt, so muss sich der Motorstrom erst langsam abbauen. Ist das nicht m\xf6glich, k\xf6nnen starke, ungewollte Spannungsspitzen auftreten. Diese Spannungsspitzen k\xf6nnen deutlich gr\xf6\xdfer sein als die maximal zul\xe4ssigen Spannungen am Transistor und diesen daher zerst\xf6ren.\nMit der Freilaufdiode ist sichergestellt, dass die in den Wicklungen gespeicherte Energie als elektrischer Strom \xfcber die Diode abflie\xdfen kann. Spannungsspitzen werden dadurch vermieden."),Object(a.b)("img",{src:"/img/motor/Freilaufdiode.svg",alt:"Freilaufdiode an einem Motor",width:"390px",class:"center"}),Object(a.b)("p",null,"Einen ausf\xfchrlichen ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.heise.de/select/make/2016/6/1482398401198797"}),"Artikel")," zum Thema Gleichstrommotoren gibt es bei ",Object(a.b)("em",{parentName:"p"},"heise.de"),"."),Object(a.b)("h2",{id:"h-br\xfccke"},"H-Br\xfccke"),Object(a.b)("p",null,"Das einfache Ein- bzw. Ausschalten eines Motor reicht f\xfcr einen Roboter nicht aus. Hier sollte wenigstens auch die Drehrichtung  des Motors ge\xe4ndert werden k\xf6nnen."),Object(a.b)("p",null,"Die, wegen ihrer Form, so genannte H-Br\xfccke, ist eine weitverbreitete Schaltung, welche auch zum Steuern von Elektromotoren genutzt wird. Die Grundidee der H-Br\xfccke ist es, dass durch sinnvolles Schalten der vier Schalter (S1, S2, S3, S4) die Stromrichtung im Motorzweig ge\xe4ndert werden kann. Dies bedeute auch eine ge\xe4ndert Polarit\xe4t und eine sich \xe4nderende Drehrichtung des Motors."),Object(a.b)("img",{src:"/img/motor/H-Bruecke.svg",alt:"H-Br\xfccke Motor",width:"320px",class:"center"}),Object(a.b)("h3",{id:"linkslauf"},"Linkslauf"),Object(a.b)("p",null,"Sind die Schalter S1 & S4 ge\xf6ffnet und die gegen\xfcber liegenden Schalter S2 & S3 geschlossen, so f\xfchrt das in der Abbildung zu einem Strom nach links. Dadurch dreht sich der Motor z.B. nach links."),Object(a.b)("h3",{id:"rechtslauf"},"Rechtslauf"),Object(a.b)("p",null,"Wird die Stellung aller Schalter ge\xe4ndert (also S1 & S4 geschlossen und S2 & S3 ge\xf6ffnet), so dreht sich die Richtung des Strom durch den Motor um und der Motor dreht sich in die entgegengesetzte Richtung."),Object(a.b)("h3",{id:"bremsen"},"Bremsen"),Object(a.b)("p",null,"Neben dem Links- und dem Rechtslauf sollte es auch m\xf6glich sein, den Motor zu bremsen. Hierf\xfcr m\xfcssen die Schalter S1 & S3 ge\xf6ffnet und die Schalter S2 & S4 geschlossen sein. In diesem Modus ist der Motor von der Spannungsversorgung getrennt. Trotzdem kann aber die in den Motorwindungen gespeicherte Energie abflie\xdfen, da sich \xfcber die Schalter S2 und S4 ein geschlossener Stromkreis bildet."),Object(a.b)("p",null,"Zus\xe4tzlich wirkt der Kurzschluss \xfcber dem Motor auch als Bremse. Da der Motor sich noch weiter dreht, wird durch den Generatoreffekt eine Spannung erzeugt, welche seiner Ursache entgegenwirkt und die Drehung des Motors abbremst (andernfalls w\xfcrde der Motor beschleunigen, was offensichtlich nicht passieren kann). Die Rotationsenergie des Motors wird dabei in elektrische Energie umgewandelt und anschlie\xdfend \xfcber den Wicklungswiderstand als W\xe4rme abgegeben."),Object(a.b)("img",{src:"/img/motor/H-Bruecke_bremsen.svg",alt:"H-Br\xfccke Motor",width:"320px",class:"center"}),Object(a.b)("h4",{id:"praktische-realisierung"},"Praktische Realisierung"),Object(a.b)("p",null,"In der praktischen Realisierung werden nat\xfcrlich nicht einfach Schalter, sondern spezielle Transistoren zum Schalten von Str\xf6men verwendet. Im diesem ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=iYafyPZ15g8"}),"Video")," wird eine einfache Schaltung vorgestellt, mit der man selber eine H-Br\xfccke zur Motorsteuerung aufbauen kann."),Object(a.b)("p",null,"Praktischer ist es jedoch auf fertige Schaltung, so genannten ICs (",Object(a.b)("em",{parentName:"p"},"integrated circuits"),") zur\xfcckzugreifen. Diese Schaltung werden oft Motortreiber (",Object(a.b)("em",{parentName:"p"},"motor driver"),") genannt und sind mit den verschiedensten Eigenschaften verf\xfcgbar. Eine der bekanntesten Motortreiber-Schaltungen ist der ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://lastminuteengineers.com/l293d-dc-motor-arduino-tutorial/"}),"L293"),". Eine anderer Motortreiber ist der ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.ti.com/lit/ds/symlink/drv8833.pdf"}),"DRV8833"),", welcher eine deutlich geringere Verlustleitung als der L293D aufweist. Im folgenden wird auf die Verwendung des DRV8833 eingegangen."),Object(a.b)("h2",{id:"aufgaben"},"Aufgaben"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(a.b)("strong",{parentName:"h5"},"\xdcben"))),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ol",{parentName:"div"},Object(a.b)("li",{parentName:"ol"},"Erl\xe4utern Sie die Funktion der Freilaufdiode."),Object(a.b)("li",{parentName:"ol"},"Erl\xe4utern Sie anhand des Ersatzschaltbildes, warum beim Modus ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"hBridge#bremsen"}),"Bremsen")," der Motor sehr stark abgebremst wird und nicht langsam ausrollt."),Object(a.b)("li",{parentName:"ol"},"Vergleichen Sie die Datenbl\xe4tter der beiden Motortreiber ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ti.com/lit/ds/symlink/l293.pdf"}),"L293D")," und ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.ti.com/lit/ds/symlink/drv8833.pdf"}),"DRV8833")," in folgenden Punkten:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Anzahl der H-Br\xfccken"),Object(a.b)("li",{parentName:"ul"},"Maximaler Ausgangsstrom"),Object(a.b)("li",{parentName:"ul"},"Betriebsspannung")))))),Object(a.b)("h2",{id:"weiterf\xfchrende-artikel"},"Weiterf\xfchrende Artikel"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://electronics.stackexchange.com/questions/56186/how-can-i-implement-regenerative-braking-of-a-dc-motor"}),"Regenerative Braking")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://ebldc.com/?p=86"}),"Slow, Mixed and Fast Decay Modes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=iYafyPZ15g8"}),"H-Bridge Motor Speed Controller Tutorial (Video)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=yO9xIVv8ryc"}),"Brushed DC Motors and How to Drive Them (Video)"))))}d.isMDXComponent=!0}}]);