"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16959:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>u});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"FTDI_Fix_Windows",title:"FTDI Buffer Fix on Windows"},s=void 0,c={unversionedId:"Troubleshooting/FTDI_Fix_Windows",id:"Troubleshooting/FTDI_Fix_Windows",isDocsHomePage:!1,title:"FTDI Buffer Fix on Windows",description:"Tested on:",source:"@site/docs/Troubleshooting/04-FTDI_Fix_Windows.md",sourceDirName:"Troubleshooting",slug:"/Troubleshooting/FTDI_Fix_Windows",permalink:"/Troubleshooting/FTDI_Fix_Windows",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Troubleshooting/04-FTDI_Fix_Windows.md",version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:4,frontMatter:{id:"FTDI_Fix_Windows",title:"FTDI Buffer Fix on Windows"},sidebar:"docs",previous:{title:"FTDI Buffer Fix on OS X",permalink:"/Troubleshooting/FTDI_Fix_Mac"},next:{title:"Example Projects",permalink:"/Examples/ExamplesLanding"}},d=[{value:"I. Connecting the Board",id:"i-connecting-the-board",children:[]},{value:"II. Latency Settings Fix",id:"ii-latency-settings-fix",children:[]},{value:"Available tools on Windows",id:"available-tools-on-windows",children:[]}],p={toc:d};function u(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tested on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows 7"),(0,i.kt)("li",{parentName:"ul"},"Windows XP"),(0,i.kt)("li",{parentName:"ul"},"Windows 10")),(0,i.kt)("h3",{id:"i-connecting-the-board"},"I. Connecting the Board"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Device Manager",src:n(17204).Z})),(0,i.kt)("p",null,"Connect the OpenBCI dongle to the computer and power ON the OpenBCI board."),(0,i.kt)("h4",{id:"1-drivers"},"1. Drivers"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"If using Virtual Box"),": Enable ",(0,i.kt)("strong",{parentName:"li"},"FTDI FT231X USB UART")," on virtual box through\n",(0,i.kt)("strong",{parentName:"li"},"Devices ",">"," USB Devices"),"."),(0,i.kt)("li",{parentName:"ol"},"Allow windows to try to install usb drivers."),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},"Device Manager")," from the start menu (or ",(0,i.kt)("strong",{parentName:"li"},"Control Panel ",">"," Hardware ",">"," Device Manager"),") and try to identify the OBCI board. It should be listed as either a COM port or an unidentified USB device.")),(0,i.kt)("h4",{id:"2-unidentified-device"},"2. Unidentified device"),(0,i.kt)("p",null,'If the board is labeled as "Unidentified", follow the troubleshoot below:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n- Download [FTDI drivers](http://www.ftdichip.com/Drivers/VCP.htm).\n- Right click on Unidentified USB Device from the **Device Manager** tab and select **Update Driver Software**.\n- Select the "**Browse my Computer for Driver**" option and navigate to the FTDI download folder. Click on the folder and then click OK.\n- Your board should now be recognized as a COM port.\n\n')),(0,i.kt)("h4",{id:"3-finish"},"3. Finish"),(0,i.kt)("p",null,"If everything went well, your OpenBCI Board should be showing up with a COM port number. If the number is not displayed next to the port name it should be visible in the properties of the port."),(0,i.kt)("p",null,"To check it is, in fact, the OBCI board; connecting and disconnecting the Dongle should connect and disconnect the COM port."),(0,i.kt)("h3",{id:"ii-latency-settings-fix"},"II. Latency Settings Fix"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Latency Fix",src:n(62641).Z})),(0,i.kt)("p",null,'The default FTDI latency is too large for EEG applications, making the incoming signal "choppy" and seem as if its accumulating packets for about a full second before releasing them all at the same time into the serial stream.'),(0,i.kt)("p",null,"The fix is easy. Simply right click the USB Serial Port of the OBCI board and go to ",(0,i.kt)("strong",{parentName:"p"},"Properties ",">"," Port Settings ",">"," Advanced")," and change the ",(0,i.kt)("strong",{parentName:"p"},"Latency Timer")," from the default 16 ms to 1 ms."),(0,i.kt)("p",null,"Fixing this issue should make the incoming signal much more consistent in terms of packet time intervals."),(0,i.kt)("h2",{id:"available-tools-on-windows"},"Available tools on Windows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/Software/CompatibleThirdPartySoftware/OpenVibe"},"OpenViBE"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/Software/CompatibleThirdPartySoftware/Neuromore"},"Neuromore")))))}u.isMDXComponent=!0},17204:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/device-man-198ab1a5f8c3d21e6c88cd69ef944978.jpg"},62641:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/latency-fbcb10819d917c03777befc75ca7f4ac.jpg"}}]);