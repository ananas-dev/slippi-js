(self.webpackChunk_slippi_js_website=self.webpackChunk_slippi_js_website||[]).push([[5519],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7636:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],c={id:"connectiondetails",title:"Interface: ConnectionDetails",sidebar_label:"ConnectionDetails",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"api/interfaces/connectiondetails",id:"api/interfaces/connectiondetails",isDocsHomePage:!1,title:"Interface: ConnectionDetails",description:"Properties",source:"@site/docs/api/interfaces/connectiondetails.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/connectiondetails",permalink:"/slippi-js/docs/api/interfaces/connectiondetails",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"connectiondetails",title:"Interface: ConnectionDetails",sidebar_label:"ConnectionDetails",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Connection",permalink:"/slippi-js/docs/api/interfaces/connection"},next:{title:"ConnectionSettings",permalink:"/slippi-js/docs/api/interfaces/connectionsettings"}},p=[{value:"Properties",id:"properties",children:[{value:"clientToken",id:"clienttoken",children:[]},{value:"consoleNick",id:"consolenick",children:[]},{value:"gameDataCursor",id:"gamedatacursor",children:[]},{value:"version",id:"version",children:[]}]}],u={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"clienttoken"},"clientToken"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"clientToken"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ananas-dev/slippi-js/blob/1c2fe87/src/console/types.ts#L29"},"src/console/types.ts:29")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"consolenick"},"consoleNick"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"consoleNick"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ananas-dev/slippi-js/blob/1c2fe87/src/console/types.ts#L26"},"src/console/types.ts:26")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"gamedatacursor"},"gameDataCursor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"gameDataCursor"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ananas-dev/slippi-js/blob/1c2fe87/src/console/types.ts#L27"},"src/console/types.ts:27")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"version"},"version"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"version"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ananas-dev/slippi-js/blob/1c2fe87/src/console/types.ts#L28"},"src/console/types.ts:28")))}d.isMDXComponent=!0}}]);