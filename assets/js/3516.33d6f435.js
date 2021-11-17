"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[3516],{830:function(e,t,n){n.d(t,{W:function(){return r}});var a=n(7294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},8617:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return a.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},3516:function(e,t,n){n.d(t,{Z:function(){return _e}});var a=n(7294),r=n(6010),o=n(5977),l=n(4973),c=n(941),i="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,a.useRef)(null),t=(0,o.k6)().action;return(0,c.SL)((function(n){var a=n.location;e.current&&!a.hash&&"PUSH"===t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(7462),d=n(3366);function f(e){var t=e.width,n=void 0===t?20:t,r=e.height,o=void 0===r?20:r,l=e.className,c=(0,d.Z)(e,["width","height","className"]);return a.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 24 24",width:n,height:o,fill:"currentColor"},c),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}var v="announcementBar_3WsW",h="announcementBarPlaceholder_2m9F",g="announcementBarClose_38nx",b="announcementBarContent_3EUC";var E=function(){var e=(0,c.nT)(),t=e.isClosed,n=e.close,o=(0,c.LU)().announcementBar;if(!o)return null;var i=o.content,s=o.backgroundColor,u=o.textColor,m=o.isCloseable;return!i||m&&t?null:a.createElement("div",{className:v,style:{backgroundColor:s,color:u},role:"banner"},m&&a.createElement("div",{className:h}),a.createElement("div",{className:b,dangerouslySetInnerHTML:{__html:i}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",g),onClick:n,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(f,{width:14,height:14})):null)},p=n(1036),k=n(2389),Z={toggle:"toggle_71bT"},w=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(Z.toggle,Z.dark),style:n},t)},_=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(Z.toggle,Z.light),style:n},t)},y=(0,a.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,c=e.onChange,i=(0,a.useState)(o),s=i[0],u=i[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function N(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,i=(0,k.Z)();return a.createElement(y,(0,m.Z)({disabled:!i,icons:{checked:a.createElement(w,{icon:n,style:r}),unchecked:a.createElement(_,{icon:o,style:l})}},e))}var C=n(5350),S=n(7898),L=function(e){var t=(0,o.TH)(),n=(0,a.useState)(e),r=n[0],l=n[1],i=(0,a.useRef)(!1),s=(0,a.useState)(0),u=s[0],m=s[1],d=(0,a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,S.Z)((function(t,n){var a=t.scrollY,r=null==n?void 0:n.scrollY;if(e)if(a<u)l(!0);else{if(i.current)return i.current=!1,void l(!1);r&&0===a&&l(!0);var o=document.documentElement.scrollHeight-u,c=window.innerHeight;r&&a>=r?l(!1):a+c<o&&l(!0)}}),[u,i]),(0,c.SL)((function(t){e&&!t.location.hash&&l(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:r}};var I=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},D=n(3783),B=n(907),T=n(7819),P=n(5537),x=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,o=void 0===r?30:r,l=e.className,c=(0,d.Z)(e,["width","height","className"]);return a.createElement("svg",(0,m.Z)({className:l,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},c),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};function M(e){var t=e.width,n=void 0===t?20:t,r=e.height,o=void 0===r?20:r,l=e.className,c=(0,d.Z)(e,["width","height","className"]);return a.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 413.348 413.348",width:n,height:o,fill:"currentColor"},c),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}var A="toggle_3Zt9",R="navbarHideable_2qcr",U="navbarHidden_3yey",O="navbarSidebarToggle_wkoY",V="navbarSidebarCloseSvg_2XuS",H="right";function W(){return(0,c.LU)().navbar.items}function z(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,C.Z)(),n=t.isDarkTheme,r=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?o():r()}),[r,o]),disabled:e}}function j(e){var t=e.sidebarShown,n=e.toggleSidebar;I(t);var o=W(),i=z(),s=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,o=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),l=(0,c.D9)(o),i=(0,a.useState)((function(){return!1})),s=i[0],u=i[1];(0,a.useEffect)((function(){o&&!l&&u(!0)}),[o,l]);var m=!!o;return(0,a.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(P.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&a.createElement(N,{className:O,checked:i.isDarkTheme,onChange:i.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(M,{width:20,height:20,className:V}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return a.createElement(T.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var F=function(){var e,t=(0,c.LU)().navbar,n=t.hideOnScroll,o=t.style,l=function(){var e=(0,D.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],o=n[1];(0,c.Rb)((function(){r&&o(!1)}));var l=(0,a.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:l,shown:r}}(),i=z(),s=(0,B.gA)(),u=L(n),d=u.navbarRef,f=u.isNavbarVisible,v=W(),h=v.some((function(e){return"search"===e.type})),g=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:H)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:H)}))}}(v),b=g.leftItems,E=g.rightItems;return a.createElement("nav",{ref:d,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":l.shown},e[R]=n,e[U]=n&&!f,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:l.toggle,onKeyDown:l.toggle},a.createElement(x,null)),a.createElement(P.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),b.map((function(e,t){return a.createElement(T.Z,(0,m.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},E.map((function(e,t){return a.createElement(T.Z,(0,m.Z)({},e,{key:t}))})),!i.disabled&&a.createElement(N,{className:A,checked:i.isDarkTheme,onChange:i.toggle}),!h&&a.createElement(p.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:l.toggle}),l.shouldRender&&a.createElement(j,{sidebarShown:l.shown,toggleSidebar:l.toggle}))},K=n(6742),q=n(4996),Y=n(3919),G="footerLogoLink_MyFc",X=n(8465),Q=n(8617);function J(e){var t=e.to,n=e.href,r=e.label,o=e.prependBaseUrlToHref,l=(0,d.Z)(e,["to","href","label","prependBaseUrlToHref"]),c=(0,q.Z)(t),i=(0,q.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(K.Z,(0,m.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),n&&!(0,Y.Z)(n)?a.createElement("span",null,r,a.createElement(Q.Z,null)):r)}var $=function(e){var t=e.sources,n=e.alt;return a.createElement(X.Z,{className:"footer__logo",alt:n,sources:t})};var ee=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,i=t.logo,s=void 0===i?{}:i,u={light:(0,q.Z)(s.src),dark:(0,q.Z)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},l&&l.length>0&&a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(J,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(K.Z,{href:s.href,className:G},a.createElement($,{alt:s.alt,sources:u})):a.createElement($,{alt:s.alt,sources:u})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},te=n(412),ne=(0,c.WA)("theme"),ae="light",re="dark",oe=function(e){return e===re?re:ae},le=function(e){(0,c.WA)("theme").set(oe(e))},ce=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,o=(0,a.useState)(function(e){return te.Z.canUseDOM?oe(document.documentElement.getAttribute("data-theme")):oe(e)}(t)),l=o[0],i=o[1],s=(0,a.useCallback)((function(){i(ae),le(ae)}),[]),u=(0,a.useCallback)((function(){i(re),le(re)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",oe(l))}),[l]),(0,a.useEffect)((function(){if(!n)try{var e=ne.get();null!==e&&i(oe(e))}catch(t){console.error(t)}}),[i]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?re:ae)}))}),[]),{isDarkTheme:l===re,setLightTheme:s,setDarkTheme:u}},ie=n(2924);var se=function(e){var t=ce(),n=t.isDarkTheme,r=t.setLightTheme,o=t.setDarkTheme;return a.createElement(ie.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:o}},e.children)},ue="docusaurus.tab.",me=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(ue)){var n=t.substring(ue.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},de=n(9443);var fe=function(e){var t=me(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(de.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function ve(e){var t=e.children;return a.createElement(se,null,a.createElement(c.pl,null,a.createElement(fe,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var he=n(9105),ge=n(2263);function be(e){var t=e.locale,n=e.version,r=e.tag,o=t;return a.createElement(he.Z,null,o&&a.createElement("meta",{name:"docsearch:language",content:o}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var Ee=n(1217);function pe(){var e=(0,ge.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,c.l5)();return a.createElement(he.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ke(e){var t=e.permalink,n=(0,ge.Z)().siteConfig.url,r=function(){var e=(0,ge.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,q.Z)(t)}(),l=t?""+n+t:r;return a.createElement(he.Z,null,a.createElement("meta",{property:"og:url",content:l}),a.createElement("link",{rel:"canonical",href:l}))}function Ze(e){var t=(0,ge.Z)(),n=t.siteConfig.favicon,r=t.i18n,o=r.currentLocale,l=r.localeConfigs,i=(0,c.LU)(),s=i.metadatas,u=i.image,d=e.title,f=e.description,v=e.image,h=e.keywords,g=e.searchMetadatas,b=(0,q.Z)(n),E=(0,c.pe)(d),p=o,k=l[o].direction;return a.createElement(a.Fragment,null,a.createElement(he.Z,null,a.createElement("html",{lang:p,dir:k}),n&&a.createElement("link",{rel:"shortcut icon",href:b}),a.createElement("title",null,E),a.createElement("meta",{property:"og:title",content:E}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&a.createElement(Ee.Z,{image:u}),v&&a.createElement(Ee.Z,{image:v}),a.createElement(Ee.Z,{description:f,keywords:h}),a.createElement(ke,null),a.createElement(pe,null),a.createElement(be,(0,m.Z)({tag:c.HX,locale:o},g)),a.createElement(he.Z,null,s.map((function(e,t){return a.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var we=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var _e=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return we(),a.createElement(ve,null,a.createElement(Ze,e),a.createElement(u,null),a.createElement(E,null),a.createElement(F,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,o,l)},t),!n&&a.createElement(ee,null))}},5537:function(e,t,n){var a=n(7462),r=n(3366),o=n(7294),l=n(6742),c=n(8465),i=n(4996),s=n(2263),u=n(941);t.Z=function(e){var t=(0,s.Z)().siteConfig.title,n=(0,u.LU)().navbar,m=n.title,d=n.logo,f=void 0===d?{src:""}:d,v=e.imageClassName,h=e.titleClassName,g=(0,r.Z)(e,["imageClassName","titleClassName"]),b=(0,i.Z)(f.href||"/"),E={light:(0,i.Z)(f.src),dark:(0,i.Z)(f.srcDark||f.src)};return o.createElement(l.Z,(0,a.Z)({to:b},g,f.target&&{target:f.target}),f.src&&o.createElement(c.Z,{className:v,sources:E,alt:f.alt||m||t}),null!=m&&o.createElement("b",{className:h},m))}},5525:function(e,t,n){n.d(t,{O:function(){return d}});var a=n(7462),r=n(3366),o=n(7294),l=n(6010),c=n(6742),i=n(4996),s=n(8617),u=n(3919),m=n(7819);function d(e){var t,n=e.activeBasePath,l=e.activeBaseRegex,m=e.to,d=e.href,f=e.label,v=e.activeClassName,h=void 0===v?"":v,g=e.prependBaseUrlToHref,b=(0,r.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),E=(0,i.Z)(m),p=(0,i.Z)(n),k=(0,i.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,u.Z)(d),w="dropdown__link--active"===h;return o.createElement(c.Z,(0,a.Z)({},d?{href:g?k:d}:Object.assign({isNavLink:!0,activeClassName:null!=(t=b.className)&&t.includes(h)?"":h,to:E},n||l?{isActive:function(e,t){return l?new RegExp(l).test(t.pathname):t.pathname.startsWith(p)}}:null),b),Z?o.createElement("span",null,f,o.createElement(s.Z,w&&{width:12,height:12})):f)}function f(e){var t=e.className,n=e.isDropdownItem,c=void 0!==n&&n,i=(0,r.Z)(e,["className","isDropdownItem"]),s=o.createElement(d,(0,a.Z)({className:(0,l.Z)(c?"dropdown__link":"navbar__item navbar__link",t)},i));return c?o.createElement("li",null,s):s}function v(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,["className","isDropdownItem"]));return o.createElement("li",{className:"menu__list-item"},o.createElement(d,(0,a.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,l=void 0!==n&&n,c=(e.position,(0,r.Z)(e,["mobile","position"])),i=l?v:f;return o.createElement(i,(0,a.Z)({},c,{activeClassName:null!=(t=c.activeClassName)?t:(0,m.E)(l)}))}},6400:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(3366),o=n(7294),l=n(5525),c=n(907),i=n(6010),s=n(7819),u=n(941),m=n(8780);function d(e){var t,n=e.docId,d=e.label,f=e.docsPluginId,v=(0,r.Z)(e,["docId","label","docsPluginId"]),h=(0,c.Iw)(f),g=h.activeVersion,b=h.activeDoc,E=(0,u.J)(f).preferredVersion,p=(0,c.yW)(f),k=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([g,E,p].filter(Boolean)),n),Z=(0,s.E)(v.mobile);return o.createElement(l.Z,(0,a.Z)({exact:!0},v,{className:(0,i.Z)(v.className,(t={},t[Z]=(null==b?void 0:b.sidebar)&&b.sidebar===k.sidebar,t)),activeClassName:Z,label:null!=d?d:k.id,to:k.path}))}},9308:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(3366),o=n(7294),l=n(5525),c=n(3154),i=n(907),s=n(941),u=n(4973),m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,g=e.dropdownItemsAfter,b=(0,r.Z)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),E=(0,i.Iw)(f),p=(0,i.gB)(f),k=(0,i.yW)(f),Z=(0,s.J)(f),w=Z.preferredVersion,_=Z.savePreferredVersionName;var y,N=(y=p.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){_(e.name)}}})),[].concat(h,y,g)),C=null!=(t=null!=(n=E.activeVersion)?n:w)?t:k,S=d&&N?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):C.label,L=d&&N?void 0:m(C).path;return N.length<=1?o.createElement(l.Z,(0,a.Z)({},b,{mobile:d,label:S,to:L,isActive:v?function(){return!1}:void 0})):o.createElement(c.Z,(0,a.Z)({},b,{mobile:d,label:S,to:L,items:N,isActive:v?function(){return!1}:void 0}))}},7250:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7462),r=n(3366),o=n(7294),l=n(5525),c=n(907),i=n(941);function s(e){var t,n=e.label,s=e.to,u=e.docsPluginId,m=(0,r.Z)(e,["label","to","docsPluginId"]),d=(0,c.zu)(u),f=(0,i.J)(u).preferredVersion,v=(0,c.yW)(u),h=null!=(t=null!=d?d:f)?t:v,g=null!=n?n:h.label,b=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return o.createElement(l.Z,(0,a.Z)({},m,{label:g,to:b}))}},3154:function(e,t,n){var a=n(7462),r=n(3366),o=n(7294),l=n(6010),c=n(941),i=n(5525),s=n(7819);function u(e,t){return e.some((function(e){return function(e,t){return!!(0,c.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function m(e){var t,n=e.items,c=e.position,u=e.className,m=(0,r.Z)(e,["items","position","className"]),d=(0,o.useRef)(null),f=(0,o.useRef)(null),v=(0,o.useState)(!1),h=v[0],g=v[1];return(0,o.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]),o.createElement("div",{ref:d,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===c,"dropdown--show":h})},o.createElement(i.O,(0,a.Z)({className:(0,l.Z)("navbar__link",u)},m,{onClick:m.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!h))}}),null!=(t=m.children)?t:m.label),o.createElement("ul",{ref:f,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var a=d.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function d(e){var t,n=e.items,m=e.className,d=(e.position,(0,r.Z)(e,["items","className","position"])),f=(0,c.be)(),v=u(n,f),h=(0,c.uR)({initialState:function(){return!v}}),g=h.collapsed,b=h.toggleCollapsed,E=h.setCollapsed;return(0,o.useEffect)((function(){v&&E(!v)}),[f,v]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},o.createElement(i.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",m)},d,{onClick:function(e){e.preventDefault(),b()}}),null!=(t=d.children)?t:d.label),o.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,["mobile"]),l=n?d:m;return o.createElement(l,a)}},7819:function(e,t,n){n.d(t,{Z:function(){return b},E:function(){return g}});var a=n(3366),r=n(7294),o=n(5525),l=n(3154),c=n(7462),i=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,l=void 0===o?20:o,i=(0,a.Z)(e,["width","height"]);return r.createElement("svg",(0,c.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},i),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},s=n(2263),u=n(941),m="iconLanguage_3vod";function d(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,d=(0,a.Z)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),f=(0,s.Z)().i18n,v=f.currentLocale,h=f.locales,g=f.localeConfigs,b=(0,u.l5)();function E(e){return g[e].label}var p=h.map((function(e){var t="pathname://"+b.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),k=[].concat(n,p,o),Z=t?"Languages":E(v);return r.createElement(l.Z,(0,c.Z)({},d,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(i,{className:m}),r.createElement("span",null,Z)),items:k}))}var f=n(1036);function v(e){return e.mobile?null:r.createElement(f.Z,null)}var h={default:function(){return o.Z},localeDropdown:function(){return d},search:function(){return v},dropdown:function(){return l.Z},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};var g=function(e){return e?"menu__link--active":"navbar__link--active"};function b(e){var t=e.type,n=(0,a.Z)(e,["type"]),o=function(e){var t=h[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return r.createElement(o,n)}},2924:function(e,t,n){var a=n(7294).createContext(void 0);t.Z=a},8465:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),o=n(7294),l=n(6010),c=n(2389),i=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=function(e){var t=(0,c.Z)(),n=(0,i.Z)().isDarkTheme,u=e.sources,m=e.className,d=e.alt,f=void 0===d?"":d,v=(0,r.Z)(e,["sources","className","alt"]),h=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,h.map((function(e){return o.createElement("img",(0,a.Z)({key:e,src:u[e],alt:f,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],m)},v))})))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},7898:function(e,t,n){var a=n(7294),r=n(412),o=function(){return r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(o()),r=function(){var t=o();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},5350:function(e,t,n){var a=n(7294),r=n(2924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},1036:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(7462),r=n(3366),o=n(7294),l=n(3935),c=n(2263),i=n(5977),s=n(4996),u=n(6742),m=n(9105),d=n(6397);function f(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var v=n(830);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b="Ctrl";var E=o.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,r=g(e,["translations"]),l=a.buttonText,c=void 0===l?"Search":l,i=a.buttonAriaLabel,s=void 0===i?"Search":i,u=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":b:null}),[]);return o.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},r,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(v.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&o.createElement(o.Fragment,null,o.createElement("span",{className:"DocSearch-Button-Key"},u===b?o.createElement(f,null):u),o.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),p=n(907),k=n(941);function Z(){var e=function(){var e=(0,c.Z)().i18n,t=(0,p._r)(),n=(0,p.WS)(),a=(0,k.Oh)(),r=[k.HX].concat(Object.keys(t).map((function(e){var r,o,l=(null==n||null==(r=n.activePlugin)?void 0:r.pluginId)===e?n.activeVersion:void 0,c=a[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=l?l:c)?o:i;return(0,k.os)(e,s.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var w=n(4973),_="searchBox_1Doo",y=null;function N(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function C(e){var t=e.state,n=e.onClose,a=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function S(e){var t,u,d=e.contextualSearch,f=(0,r.Z)(e,["contextualSearch"]),v=(0,c.Z)().siteMetadata,h=Z(),g=null!=(t=null==(u=f.searchParameters)?void 0:u.facetFilters)?t:[],b=d?[].concat(h,g):g,p=Object.assign({},f.searchParameters,{facetFilters:b}),k=(0,s.C)().withBaseUrl,S=(0,i.k6)(),L=(0,o.useRef)(null),I=(0,o.useRef)(null),D=(0,o.useState)(!1),B=D[0],T=D[1],P=(0,o.useState)(null),x=P[0],M=P[1],A=(0,o.useCallback)((function(){return y?Promise.resolve():Promise.all([n.e(8017).then(n.bind(n,9854)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(5256)]).then(n.bind(n,5256))]).then((function(e){var t=e[0].DocSearchModal;y=t}))}),[]),R=(0,o.useCallback)((function(){A().then((function(){L.current=document.createElement("div"),document.body.insertBefore(L.current,document.body.firstChild),T(!0)}))}),[A,T]),U=(0,o.useCallback)((function(){T(!1),L.current.remove()}),[T]),O=(0,o.useCallback)((function(e){A().then((function(){T(!0),M(e.key)}))}),[A,T,M]),V=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;S.push(t)}}).current,H=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:k(""+t.pathname+t.hash)})}))})).current,W=(0,o.useMemo)((function(){return function(e){return o.createElement(C,(0,a.Z)({},e,{onClose:U}))}}),[U]),z=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e}),[v.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,r=e.onInput,l=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,r,l])}({isOpen:B,onOpen:R,onClose:U,onInput:O,searchButtonRef:I});var j=(0,w.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+f.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:_},o.createElement(E,{onTouchStart:A,onFocus:A,onMouseOver:A,onClick:R,ref:I,translations:{buttonText:j,buttonAriaLabel:j}})),B&&(0,l.createPortal)(o.createElement(y,(0,a.Z)({onClose:U,initialScrollY:window.scrollY,initialQuery:x,navigator:V,transformItems:H,hitComponent:N,resultsFooterComponent:W,transformSearchClient:z},f,{searchParameters:p})),L.current))}var L=function(){var e=(0,c.Z)().siteConfig;return o.createElement(S,e.themeConfig.algolia)}},6397:function(e,t,n){var a=n(5977),r=n(412),o=n(2263);t.Z=function(){var e=(0,a.k6)(),t=(0,a.TH)(),n=(0,o.Z)().siteConfig,l=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return l+"search?q="+encodeURIComponent(e)}}}}}]);