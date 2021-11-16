"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[3829],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),l=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,p=h["".concat(d,".").concat(m)]||h[m]||u[m]||a;return n?t.createElement(p,o(o({ref:r},c),{},{components:n})):t.createElement(p,o({ref:r},c))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53999:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var t=n(87462),i=n(63366),a=(n(67294),n(3905)),o={id:"goStraight",title:"Geradeausfahren mit einem P-Regler",sidebar_label:"Geradeaus Fahren",description:"Mit einem Proportionalregler und Rad-Encodern ist es m\xf6glich einen Roboter geradeaus fahren zu lassen. Mit einer Kalibrierung k\xf6nnen systematische Fehler korrigiert werden.",custom_edit_url:null,keywords:["Arduino","Roboter","Robotik","geradeaus fahren","Regler","Quadraturencoder","Inkrementalgeber","Radencoder","Motorencoder","Zumo 32u4"]},s=void 0,d={unversionedId:"robotik/goStraight",id:"robotik/goStraight",isDocsHomePage:!1,title:"Geradeausfahren mit einem P-Regler",description:"Mit einem Proportionalregler und Rad-Encodern ist es m\xf6glich einen Roboter geradeaus fahren zu lassen. Mit einer Kalibrierung k\xf6nnen systematische Fehler korrigiert werden.",source:"@site/docs/robotik/goStraight.mdx",sourceDirName:"robotik",slug:"/robotik/goStraight",permalink:"/docs/robotik/goStraight",editUrl:null,tags:[],version:"current",frontMatter:{id:"goStraight",title:"Geradeausfahren mit einem P-Regler",sidebar_label:"Geradeaus Fahren",description:"Mit einem Proportionalregler und Rad-Encodern ist es m\xf6glich einen Roboter geradeaus fahren zu lassen. Mit einer Kalibrierung k\xf6nnen systematische Fehler korrigiert werden.",custom_edit_url:null,keywords:["Arduino","Roboter","Robotik","geradeaus fahren","Regler","Quadraturencoder","Inkrementalgeber","Radencoder","Motorencoder","Zumo 32u4"]},sidebar:"sideBarRobotik",previous:{title:"Motorencoder",permalink:"/docs/robotik/wheelEncoder"},next:{title:"Geschwindigkeitsregler",permalink:"/docs/robotik/speedControl"}},l=[{value:"Systematische Odometry-Fehler",id:"systematische-odometry-fehler",children:[]},{value:"Nicht-Systematische Odometry-Fehler",id:"nicht-systematische-odometry-fehler",children:[]},{value:"Kalibrierung des Geradeauslaufs",id:"kalibrierung-des-geradeauslaufs",children:[]},{value:"Aufgaben",id:"aufgaben",children:[]}],c={toc:l};function u(e){var r=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mit den ",(0,a.kt)("a",{parentName:"p",href:"/docs/robotik/wheelEncoder"},"Rad-Encodern")," kann der Roboter nicht nur messen, wie weit sich jedes einzelne Rad gedreht hat, sondern es ist auch m\xf6glich den Roboter damit geradeaus fahren zu lassen. Hierf\xfcr reicht es aus, dass sich beide R\xe4der immer gleich schnell drehen. Ein einfacher Ansatz w\xe4re daf\xfcr ein ",(0,a.kt)("a",{parentName:"p",href:"/docs/robotik/edge_P_Control"},"P-Regler"),", welcher versucht die Differenz zwischen den Encoder-Impulsen auf null zu reduzieren."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"error = impulseEncoderLinks - impulseEncoderRechts // Regelabweichung\n")),(0,a.kt)("p",null,"Allerdings ist es sehr wahrscheinlich, dass der Roboter, obwohl sich beide R\xe4der gleich schnell drehen, nicht ganz gerade f\xe4hrt. Ursache hierf\xfcr sind  ",(0,a.kt)("strong",{parentName:"p"},"systematische und nicht-systematische Fehler"),"."),(0,a.kt)("img",{src:"/img/robotik/FehlerGeradeaus.png",alt:"Fehler Geradeauslauf",width:"550px",class:"center"}),(0,a.kt)("h3",{id:"systematische-odometry-fehler"},"Systematische Odometry-Fehler"),(0,a.kt)("p",null,"Systematische Fehler werden durch physikalische Abweichung des realen Roboters von dem theoretischem Bewegungs-Modell verursacht. Ein Beispiel sind unterschiedliche Durchmesser der beiden R\xe4der oder auch R\xe4der, welche nicht genau parallel zueinander ausgerichtet sind. Systematische Fehler sind \xfcber einen l\xe4ngeren Zeitraum konstant und k\xf6nnen daher bis zu einem gewissen Grad kompensiert werden."),(0,a.kt)("p",null,"Auf ebenen Untergr\xfcnden dominieren die systematische Odometry-Fehler."),(0,a.kt)("h3",{id:"nicht-systematische-odometry-fehler"},"Nicht-Systematische Odometry-Fehler"),(0,a.kt)("p",null,"Im Gegensatz dazu ist das Auftreten von nicht-systematisch Fehler nicht exakt vorherzubestimmen. Nicht-systematische Fehler werden zum Beispiel durch Bodenunebenheiten oder auch durch unpr\xe4zise gefertigte Achsen der R\xe4der, welche ein zu gro\xdfes Spiel aufweisen, verursacht. "),(0,a.kt)("h3",{id:"kalibrierung-des-geradeauslaufs"},"Kalibrierung des Geradeauslaufs"),(0,a.kt)("p",null,"Der einfachste Ansatz den Geradeauslauf zu verbessern, ist die Verwendung eines ",(0,a.kt)("em",{parentName:"p"},"Faktors")," welcher zum Beispiel Unterschiede in den Raddurchmessern ber\xfccksichtigt. Dabei wird zum Berechnen des ",(0,a.kt)("strong",{parentName:"p"},"Fehler")," f\xfcr den Regler einer der beiden Rad-Encoder mit einem Faktor (",(0,a.kt)("inlineCode",{parentName:"p"},"geradeFaktor"),") multipliziert. Der richtige Faktor zum m\xf6glichst geraden Fahren muss experimentell bestimmt werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"geradeFaktor = 0.95 // Werte zwischen 0.9 und 1.1\nerror = impulseEncoderLinks - geradeFaktor*impulseEncoderRechts // \n")),(0,a.kt)("p",null,"Ein deutlich komplexerer Ansatz zur Kompensation verschiedener systematischer Fehler wird von ",(0,a.kt)("a",{parentName:"p",href:"http://www-personal.umich.edu/~johannb/Papers/paper58.pdf"},"Borenstein und Feng")," beschrieben."),(0,a.kt)("h3",{id:"aufgaben"},"Aufgaben"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,a.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"Lassen Sie den Roboter eine Strecke von ca. 1 Meter mit gleichen Motorgeschwindigkeiten f\xfcr beide Seiten (z.B. ",(0,a.kt)("inlineCode",{parentName:"li"},"setSpeeds(200,200)"),") fahren. Geben Sie den Unterschied der Encoder-Impulse zwischen den R\xe4dern auf dem Display aus.  Bestimmen Sie auch die mittlere Differenz zwischen den Encodern in Millimetern pro gefahrenen Meter."),(0,a.kt)("li",{parentName:"ol"},"Schreiben Sie eine Funktion ",(0,a.kt)("inlineCode",{parentName:"li"},"void fahreGerade()")," welche den Roboter mit Hilfe der Rad-Encoder und eines P-Reglers geradeaus fahren l\xe4sst. "),(0,a.kt)("li",{parentName:"ol"},"Optimieren Sie den P-Regler zum Geradeausfahren mit einem Kalibrierungsfaktor, welcher m\xf6gliche Abweichungen vom Geradeausfahren korrigiert.")))))}u.isMDXComponent=!0}}]);