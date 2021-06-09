(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[9782],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,f=c["".concat(a,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,d(d({ref:t},p),{},{components:n})):r.createElement(f,d({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,d=new Array(i);d[0]=c;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,d[1]=s;for(var l=2;l<i;l++)d[l]=n[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5997:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return s},toc:function(){return a},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),d={title:"Die Motoren",sidebar_label:"Motoren"},s={unversionedId:"zumo32u4/motors",id:"zumo32u4/motors",isDocsHomePage:!1,title:"Die Motoren",description:"Mit der Klasse Zumo32U4Motors werden Methoden zur Steuerung der zwei Motoren bereitgestellt.",source:"@site/docs/zumo32u4/motors.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/motors",permalink:"/docs/zumo32u4/motors",editUrl:"https://spacehal.github.io/docs/zumo32u4/motors.md",version:"current",sidebar_label:"Motoren",frontMatter:{title:"Die Motoren",sidebar_label:"Motoren"},sidebar:"sideBarZumo",previous:{title:"Die Liniensensoren",permalink:"/docs/zumo32u4/lineSensor"},next:{title:"Die N\xe4herungssensoren",permalink:"/docs/zumo32u4/proxy"}},a=[{value:"<code>void setLeftSpeed(int speed)</code>",id:"void-setleftspeedint-speed",children:[]},{value:"<code>void setRightSpeed(int speed)</code>",id:"void-setrightspeedint-speed",children:[]},{value:"<code>void setSpeeds(...)</code>",id:"void-setspeeds",children:[]},{value:"<code>void flipLeftMotor(...) </code>",id:"void-flipleftmotor",children:[]},{value:"<code>void flipRightMotor(...) </code>",id:"void-fliprightmotor",children:[]}],l={toc:a};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mit der Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"Zumo32U4Motors")," werden Methoden zur Steuerung der zwei Motoren bereitgestellt. "),(0,i.kt)("h2",{id:"void-setleftspeedint-speed"},(0,i.kt)("inlineCode",{parentName:"h2"},"void setLeftSpeed(int speed)")),(0,i.kt)("p",null,"Stellt die Geschwindigkeit des linken Motors ein. Der Parameter f\xfcr die Geschwindigkeit kann Werte von -400 bis 400 annehmen. Negative Werte bedeuten, dass sich der Motor r\xfcckw\xe4rts dreht."),(0,i.kt)("h4",{id:"beispiel"},"Beispiel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nZumo32u4Motors zweiMotoren; // Motoren-Objekt erzeugen\n    \nint speed = 300;            \nzweiMotoren.setLeftSpeed(speed);\n")),(0,i.kt)("h2",{id:"void-setrightspeedint-speed"},(0,i.kt)("inlineCode",{parentName:"h2"},"void setRightSpeed(int speed)")),(0,i.kt)("p",null,"\xc4hnlich wie ",(0,i.kt)("inlineCode",{parentName:"p"},"void setLeftSpeed(int speed)"),", nur dass der rechte Motor eingestellt wird."),(0,i.kt)("h2",{id:"void-setspeeds"},(0,i.kt)("inlineCode",{parentName:"h2"},"void setSpeeds(...)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"void setSpeeds(int speedLeft, int speedRight)\n")),(0,i.kt)("p",null,"Stellt die Geschwindigkeit f\xfcr beide Motoren ein. Wie auch bei ",(0,i.kt)("inlineCode",{parentName:"p"},"setLeftSpeed()")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"setRigthSpeed()")," k\xf6nnen die Parameter der Methode nur Werte im Bereich von -400 bis 400 annehmen. Negative Werte bedeuten, dass sich der Motor r\xfcckw\xe4rts dreht."),(0,i.kt)("h4",{id:"beispiel-1"},"Beispiel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nZumo32u4Motors zweiMotoren; // Motoren-Objekt erzeugen\nint speed = 0;      \n\nvoid loop()\n{  \n    for(speed; speed<400; speed++)\n    {    \n    zweiMotoren.setSpeeds(speed,speed);\n    delay(100);  \n    }\n}\n")),(0,i.kt)("h2",{id:"void-flipleftmotor"},(0,i.kt)("inlineCode",{parentName:"h2"},"void flipLeftMotor(...) ")),(0,i.kt)("h2",{id:"void-fliprightmotor"},(0,i.kt)("inlineCode",{parentName:"h2"},"void flipRightMotor(...) ")))}p.isMDXComponent=!0}}]);