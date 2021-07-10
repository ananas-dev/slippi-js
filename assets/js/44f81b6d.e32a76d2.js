(self.webpackChunk_slippi_js_website=self.webpackChunk_slippi_js_website||[]).push([[6624],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=s,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7310:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(2122),s=r(9756),o=(r(7294),r(3905)),a=["components"],i={sidebar_position:2},l="UBJSON",c={unversionedId:"ressourses/slp-specs/ubjson",id:"ressourses/slp-specs/ubjson",isDocsHomePage:!1,title:"UBJSON",description:"The overall structure of the file conforms to the Draft 12 version of the UBJSON spec. The website does not indicate its version. The raw files for Draft 12 can be found here.",source:"@site/docs/ressourses/slp-specs/ubjson.md",sourceDirName:"ressourses/slp-specs",slug:"/ressourses/slp-specs/ubjson",permalink:"/slippi-js/docs/ressourses/slp-specs/ubjson",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/slippi-js/docs/ressourses/slp-specs/intro"},next:{title:"The Raw Element",permalink:"/slippi-js/docs/ressourses/slp-specs/raw-element"}},p=[],u={toc:p};function f(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ubjson"},"UBJSON"),(0,o.kt)("p",null,"The overall structure of the file conforms to the Draft 12 version of the ",(0,o.kt)("a",{parentName:"p",href:"http://ubjson.org/"},"UBJSON spec"),". The website does not indicate its version. The raw files for Draft 12 can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ubjson/universal-binary-json/tree/master/spec12"},"here"),"."),(0,o.kt)("p",null,"UBJSON was chosen for a few reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It should be very easy to understand as it greatly resembles JSON"),(0,o.kt)("li",{parentName:"ol"},"It allows binary data to be stored without increasing file size much by taking advantage of the optimized container formats"),(0,o.kt)("li",{parentName:"ol"},"Arbitrary metadata of various types can be easily added and quickly parsed")),(0,o.kt)("p",null,"The .slp file has two core elements: raw and metadata. These elements will always show up in the same order in the file with the raw element first and the metadata element second."))}f.isMDXComponent=!0}}]);