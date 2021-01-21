(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,m=l["".concat(d,".").concat(b)]||l[b]||u[b]||i;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=b;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,d[1]=s;for(var c=2;c<i;c++)d[c]=n[c];return o.a.createElement.apply(null,d)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(131)),d={title:"Die Motoren",sidebar_label:"Motoren"},s={unversionedId:"zumo32u4/motors",id:"zumo32u4/motors",isDocsHomePage:!1,title:"Die Motoren",description:"Mit der Klasse Zumo32U4Motors werden Methoden zur Steuerung der zwei Motoren bereitgestellt.",source:"@site/docs/zumo32u4/motors.md",slug:"/zumo32u4/motors",permalink:"/docs/zumo32u4/motors",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/zumo32u4/motors.md",version:"current",sidebar_label:"Motoren",sidebar:"someSidebar",previous:{title:"Die Liniensensoren",permalink:"/docs/zumo32u4/lineSensor"},next:{title:"Die N\xe4herungssensoren",permalink:"/docs/zumo32u4/proxy"}},a=[{value:"<code>void setLeftSpeed(int speed)</code>",id:"void-setleftspeedint-speed",children:[]},{value:"<code>void setRightSpeed(int speed)</code>",id:"void-setrightspeedint-speed",children:[]},{value:"<code>void setSpeeds(...)</code>",id:"void-setspeeds",children:[]},{value:"<code>void flipLeftMotor(...) </code>",id:"void-flipleftmotor",children:[]},{value:"<code>void flipRightMotor(...) </code>",id:"void-fliprightmotor",children:[]}],c={rightToc:a};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Mit der Klasse ",Object(i.b)("inlineCode",{parentName:"p"},"Zumo32U4Motors")," werden Methoden zur Steuerung der zwei Motoren bereitgestellt. "),Object(i.b)("h2",{id:"void-setleftspeedint-speed"},Object(i.b)("inlineCode",{parentName:"h2"},"void setLeftSpeed(int speed)")),Object(i.b)("p",null,"Stellt die Geschwindigkeit des linken Motors ein. Der Parameter f\xfcr die Geschwindigkeit kann Werte von -400 bis 400 annehmen. Negative Werte bedeuten, dass sich der Motor r\xfcckw\xe4rts dreht."),Object(i.b)("h4",{id:"beispiel"},"Beispiel"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-arduino"}),"#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nZumo32u4Motors zweiMotoren; // Motoren-Objekt erzeugen\n    \nint speed = 300;            \nzweiMotoren.setLeftSpeed(speed);\n")),Object(i.b)("h2",{id:"void-setrightspeedint-speed"},Object(i.b)("inlineCode",{parentName:"h2"},"void setRightSpeed(int speed)")),Object(i.b)("p",null,"\xc4hnlich wie ",Object(i.b)("inlineCode",{parentName:"p"},"void setLeftSpeed(int speed)"),", nur dass der rechte Motor eingestellt wird."),Object(i.b)("h2",{id:"void-setspeeds"},Object(i.b)("inlineCode",{parentName:"h2"},"void setSpeeds(...)")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-arduino"}),"void setSpeeds(int speedLeft, int speedRight)\n")),Object(i.b)("p",null,"Stellt die Geschwindigkeit f\xfcr beide Motoren ein. Wie auch bei ",Object(i.b)("inlineCode",{parentName:"p"},"setLeftSpeed()")," und ",Object(i.b)("inlineCode",{parentName:"p"},"setRigthSpeed()")," k\xf6nnen die Parameter der Methode nur Werte im Bereich von -400 bis 400 annehmen. Negative Werte bedeuten, dass sich der Motor r\xfcckw\xe4rts dreht."),Object(i.b)("h4",{id:"beispiel-1"},"Beispiel"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-arduino"}),"#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nZumo32u4Motors zweiMotoren; // Motoren-Objekt erzeugen\nint speed = 0;      \n\nvoid loop()\n{  \n    for(speed; speed<400; speed++)\n    {    \n    zweiMotoren.setSpeeds(speed,speed);\n    delay(100);  \n    }\n}\n")),Object(i.b)("h2",{id:"void-flipleftmotor"},Object(i.b)("inlineCode",{parentName:"h2"},"void flipLeftMotor(...) ")),Object(i.b)("h2",{id:"void-fliprightmotor"},Object(i.b)("inlineCode",{parentName:"h2"},"void flipRightMotor(...) ")))}p.isMDXComponent=!0}}]);