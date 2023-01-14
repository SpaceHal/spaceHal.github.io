"use strict";(self.webpackChunkspacehale=self.webpackChunkspacehale||[]).push([[3829],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),d=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(n),m=i,p=h["".concat(l,".").concat(m)]||h[m]||u[m]||a;return n?t.createElement(p,s(s({ref:r},c),{},{components:n})):t.createElement(p,s({ref:r},c))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=h;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=n[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3999:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=n(7462),i=(n(7294),n(3905));const a={id:"goStraight",title:"Geradeaus fahren mit einem P-Regler",sidebar_label:"Ge\xadra\xadde\xadaus\xadfahrt",description:"Mit einem Proportionalregler und Rad-Encodern ist es m\xf6glich einen Roboter geradeaus fahren zu lassen. Mit einer Kalibrierung k\xf6nnen systematische Fehler korrigiert werden.",custom_edit_url:null,keywords:["Arduino","Roboter","Robotik","geradeaus fahren","Regler","Quadraturencoder","Inkrementalgeber","Radencoder","Motorencoder","Zumo 32u4"]},s=void 0,o={unversionedId:"robotik/goStraight",id:"robotik/goStraight",title:"Geradeaus fahren mit einem P-Regler",description:"Mit einem Proportionalregler und Rad-Encodern ist es m\xf6glich einen Roboter geradeaus fahren zu lassen. Mit einer Kalibrierung k\xf6nnen systematische Fehler korrigiert werden.",source:"@site/docs/robotik/goStraight.mdx",sourceDirName:"robotik",slug:"/robotik/goStraight",permalink:"/docs/robotik/goStraight",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"goStraight",title:"Geradeaus fahren mit einem P-Regler",sidebar_label:"Ge\xadra\xadde\xadaus\xadfahrt",description:"Mit einem Proportionalregler und Rad-Encodern ist es m\xf6glich einen Roboter geradeaus fahren zu lassen. Mit einer Kalibrierung k\xf6nnen systematische Fehler korrigiert werden.",custom_edit_url:null,keywords:["Arduino","Roboter","Robotik","geradeaus fahren","Regler","Quadraturencoder","Inkrementalgeber","Radencoder","Motorencoder","Zumo 32u4"]},sidebar:"mySidebar",previous:{title:"Motorencoder",permalink:"/docs/robotik/wheelEncoder"},next:{title:"Geschwindigkeitsregler",permalink:"/docs/robotik/speedControl"}},l={},d=[{value:"Systematische Odometry-Fehler",id:"systematische-odometry-fehler",level:3},{value:"Nicht-Systematische Odometry-Fehler",id:"nicht-systematische-odometry-fehler",level:3},{value:"Kalibrierung des Geradeauslaufs",id:"kalibrierung-des-geradeauslaufs",level:3}],c={toc:d};function u(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mit den ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/wheelEncoder"},"Rad-Encodern")," kann der Roboter nicht nur messen, wie weit sich jedes einzelne Rad gedreht hat, sondern es ist auch m\xf6glich den Roboter damit geradeaus fahren zu lassen. Hierf\xfcr reicht es aus, dass sich beide R\xe4der immer gleich schnell drehen. Ein einfacher Ansatz w\xe4re daf\xfcr ein ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/edge_P_Control"},"P-Regler"),", welcher versucht die Differenz zwischen den Encoder-Impulsen auf null zu reduzieren."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"error = impulseEncoderLinks - impulseEncoderRechts // Regelabweichung\n")),(0,i.kt)("p",null,"Allerdings ist es sehr wahrscheinlich, dass der Roboter, obwohl sich beide R\xe4der gleich schnell drehen, nicht ganz gerade f\xe4hrt. Ursache hierf\xfcr sind  ",(0,i.kt)("strong",{parentName:"p"},"systematische und nicht-systematische Fehler"),"."),(0,i.kt)("img",{src:"/img/robotik/FehlerGeradeaus.png",alt:"Fehler Geradeauslauf",width:"550px",className:"center"}),(0,i.kt)("h3",{id:"systematische-odometry-fehler"},"Systematische Odometry-Fehler"),(0,i.kt)("p",null,"Systematische Fehler werden durch physikalische Abweichung des realen Roboters von dem theoretischem Bewegungs-Modell verursacht. Ein Beispiel sind unterschiedliche Durchmesser der beiden R\xe4der oder auch R\xe4der, welche nicht genau parallel zueinander ausgerichtet sind. Systematische Fehler sind \xfcber einen l\xe4ngeren Zeitraum konstant und k\xf6nnen daher bis zu einem gewissen Grad kompensiert werden."),(0,i.kt)("p",null,"Auf ebenen Untergr\xfcnden dominieren die systematischen Odometry-Fehler."),(0,i.kt)("h3",{id:"nicht-systematische-odometry-fehler"},"Nicht-Systematische Odometry-Fehler"),(0,i.kt)("p",null,"Im Gegensatz dazu ist das Auftreten von nicht-systematisch Fehler nicht exakt vorherzubestimmen. Nicht-systematische Fehler werden zum Beispiel durch Bodenunebenheiten oder auch durch unpr\xe4zise gefertigte Achsen der R\xe4der, welche ein zu gro\xdfes Spiel aufweisen, verursacht. "),(0,i.kt)("h3",{id:"kalibrierung-des-geradeauslaufs"},"Kalibrierung des Geradeauslaufs"),(0,i.kt)("p",null,"Der einfachste Ansatz den Geradeauslauf zu verbessern, ist die Verwendung eines ",(0,i.kt)("em",{parentName:"p"},"Faktors")," welcher zum Beispiel Unterschiede in den Raddurchmessern ber\xfccksichtigt. Dabei wird zum Berechnen des ",(0,i.kt)("strong",{parentName:"p"},"Fehler")," f\xfcr den Regler einer der beiden Rad-Encoder mit einem Faktor (",(0,i.kt)("inlineCode",{parentName:"p"},"geradeFaktor"),") multipliziert. Der richtige Faktor zum m\xf6glichst geraden Fahren muss experimentell bestimmt werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"geradeFaktor = 0.95 // Werte zwischen 0.9 und 1.1\nerror = impulseEncoderLinks - geradeFaktor*impulseEncoderRechts // \n")),(0,i.kt)("p",null,"Ein deutlich komplexerer Ansatz zur Kompensation verschiedener systematischer Fehler wird von ",(0,i.kt)("a",{parentName:"p",href:"http://www-personal.umich.edu/~johannb/Papers/paper58.pdf"},"Borenstein und Feng")," beschrieben."),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Lassen Sie den Roboter eine Strecke von ca. 1 Meter mit gleichen Motorgeschwindigkeiten f\xfcr beide Seiten (z.B. ",(0,i.kt)("inlineCode",{parentName:"li"},"setSpeeds(200,200)"),") fahren. Geben Sie den Unterschied der Encoder-Impulse zwischen den R\xe4dern auf dem Display aus.  Bestimmen Sie auch die mittlere Differenz zwischen den Encodern in Millimetern pro gefahrenen Meter."),(0,i.kt)("li",{parentName:"ol"},"Schreiben Sie eine Funktion ",(0,i.kt)("inlineCode",{parentName:"li"},"void fahreGerade()")," welche den Roboter mit Hilfe der Rad-Encoder und eines P-Reglers geradeaus fahren l\xe4sst. "),(0,i.kt)("li",{parentName:"ol"},"Optimieren Sie den P-Regler zum Geradeausfahren mit einem Kalibrierungsfaktor, welcher m\xf6gliche Abweichungen vom Geradeausfahren korrigiert."))))}u.isMDXComponent=!0}}]);