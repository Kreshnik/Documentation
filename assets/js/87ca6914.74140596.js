"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2572:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>c});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={id:"ForDevelopersLanding",title:"For Developers"},p=void 0,s={unversionedId:"ForDevelopers/ForDevelopersLanding",id:"ForDevelopers/ForDevelopersLanding",isDocsHomePage:!1,title:"For Developers",description:"The information in this directory will help you start developing with OpenBCI technology.",source:"@site/docs/ForDevelopers/00-ForDevelopersLanding.md",sourceDirName:"ForDevelopers",slug:"/ForDevelopers/ForDevelopersLanding",permalink:"/ForDevelopers/ForDevelopersLanding",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/ForDevelopers/00-ForDevelopersLanding.md",version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:0,frontMatter:{id:"ForDevelopersLanding",title:"For Developers"},sidebar:"docs",previous:{title:"VirtualBox Windows Guide",permalink:"/Software/CompatibleThirdPartySoftware/VirtualBox"},next:{title:"Software Development",permalink:"/ForDevelopers/SoftwareDevelopment"}},u=[{value:"Development Options",id:"development-options",children:[]},{value:"Biosensing Setups",id:"biosensing-setups",children:[]},{value:"Connect with the Community",id:"connect-with-the-community",children:[]}],m={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The information in this directory will help you start developing with OpenBCI technology."),(0,i.kt)("h2",{id:"development-options"},"Development Options"),(0,i.kt)("p",null,"OpenBCI provides a range of open-source materials under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_GUI/blob/master/LICENSE"},"MIT license"),". Pages in this section include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ForDevelopers/SoftwareDevelopment"},"Software Development")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ForDevelopers/FirmwareDevelopment"},"Firmware Development")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ForDevelopers/HardwareDevelopment"},"Hardware Development"))),(0,i.kt)("h2",{id:"biosensing-setups"},"Biosensing Setups"),(0,i.kt)("p",null,"OpenBCI allows you to customize electrode setups for various types of biosensing, as found in the Getting Started section:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/GettingStarted/Biosensing-Setups/EEGSetup"},"EEG Setup")," \u2014 Details how to wire electrodes to gather signals from the brain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/GettingStarted/Biosensing-Setups/EMGSetup"},"EMG Setup")," \u2014 Details how to wire electrodes to gather signals from different muscle groups."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/GettingStarted/Biosensing-Setups/ECGSetup"},"ECG Setup")," \u2014 Details how to wire electrodes to gather signals from different muscle groups.")),(0,i.kt)("h2",{id:"connect-with-the-community"},"Connect with the Community"),(0,i.kt)("p",null,"Looking to share what you've made? Check out the tutorial about getting started as a member of the OpenBCI Community Page:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/GettingStarted/Community/Community"},"Community"))),(0,i.kt)("p",null,"Need some advice from the OpenBCI Community or have an Opportunity to share? Visit the OpenBCI Forum:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://openbci.com/forum"},"OpenBCI Forum"))))}c.isMDXComponent=!0}}]);