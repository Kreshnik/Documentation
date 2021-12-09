"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[237],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,u=m["".concat(s,".").concat(c)]||m[c]||h[c]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46247:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"SoftwareDevelopment",title:"Software Development"},s="Overview",p={unversionedId:"ForDevelopers/SoftwareDevelopment",id:"ForDevelopers/SoftwareDevelopment",isDocsHomePage:!1,title:"Software Development",description:"Welcome all Software Developers! In this document, we will go over the tools available to assist in integrating OpenBCI hardware with projects in multiple programming languages. Also, we will briefly look at how OpenBCI hardware is integrated into the OpenBCI GUI using Processing).",source:"@site/docs/ForDevelopers/01-SoftwareDevelopment.md",sourceDirName:"ForDevelopers",slug:"/ForDevelopers/SoftwareDevelopment",permalink:"/ForDevelopers/SoftwareDevelopment",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/ForDevelopers/01-SoftwareDevelopment.md",version:"current",lastUpdatedAt:1627419792,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:1,frontMatter:{id:"SoftwareDevelopment",title:"Software Development"},sidebar:"docs",previous:{title:"For Developers",permalink:"/ForDevelopers/ForDevelopersLanding"},next:{title:"Firmware Development",permalink:"/ForDevelopers/FirmwareDevelopment"}},d=[{value:"Introducing BrainFlow",id:"introducing-brainflow",children:[]},{value:"Initial Setups and Testing",id:"initial-setups-and-testing",children:[]},{value:"Supported Boards",id:"supported-boards",children:[]},{value:"BrainFlow - C++",id:"brainflow---c",children:[]},{value:"BrainFlow - Python",id:"brainflow---python",children:[]},{value:"BrainFlow - C#",id:"brainflow---c-1",children:[]},{value:"BrainFlow - Java",id:"brainflow---java",children:[]},{value:"BrainFlow - R",id:"brainflow---r",children:[]},{value:"Notebooks",id:"notebooks",children:[]},{value:"OpenBCI GUI Overview",id:"openbci-gui-overview",children:[]},{value:"BrainFlow Java Binding and OpenBCI GUI",id:"brainflow-java-binding-and-openbci-gui",children:[]}],h={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Welcome all Software Developers! In this document, we will go over the tools available to assist in integrating OpenBCI hardware with projects in multiple programming languages. Also, we will briefly look at how OpenBCI hardware is integrated into the OpenBCI GUI using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Processing_(programming_language)"},"Processing"),"."),(0,o.kt)("h2",{id:"introducing-brainflow"},"Introducing BrainFlow"),(0,o.kt)("p",null,"Prior to version 5.0, the OpenBCI GUI relied on a Node.js Electron app to handle communications as middleware via TCP/IP on Mac, Linux, and Windows machines. This required users to allow a separate app to run in the background. At the same time, there are many users who just want to use OpenBCI hardware with Python, C++, or C#. The OpenBCI Community needed a solution, and we found one: ",(0,o.kt)("a",{parentName:"p",href:"https://brainflow.readthedocs.io/en/stable/index.html"},"BrainFlow"),"!"),(0,o.kt)("p",null,"BrainFlow is written in C++ and then exported to a handful of languages. This cuts down on development time, and provides a centralized repository for OpenBCI drivers that are more accessible and accommodating."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://brainflow.readthedocs.io/en/stable/index.html"},"BrainFlow Documentation"),"!"),(0,o.kt)("h2",{id:"initial-setups-and-testing"},"Initial Setups and Testing"),(0,o.kt)("p",null,"GUI v5.0+ uses the BrainFlow-Java package. When starting a new project with OpenBCI hardware for the first time, it is important to check that you can connect the hardware properly, ",(0,o.kt)("a",{parentName:"p",href:"/ForDevelopers/ForDevelopersLanding#biosensing-setups"},"depending on your biosensing setup"),". "),(0,o.kt)("p",null,"We recommend using the GUI to start your project and check signals before moving towards full integration. Furthermore, we recommend using the GUI's Networking Widget to stream data for proof-of-concept via UDP, LSL, OSC, or Serial. This allows you to visualize real-time and playback data in the GUI while modifying your application in a separate IDE."),(0,o.kt)("p",null,"Once proof-of-concept is achieved, it's appopriate to consider integrating the OpenBCI board directly into your project using one of the BrainFlow bindings, found below. The GUI can still be used at any time to check signals, make recordings, and stream live data."),(0,o.kt)("h2",{id:"supported-boards"},"Supported Boards"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/SupportedBoards.html#supported-boards"},"Supported Boards and Parameters")," (",(0,o.kt)("em",{parentName:"li"},"important"),")")),(0,o.kt)("h2",{id:"brainflow---c"},"BrainFlow - C++"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#compilation-of-core-module-and-c-binding"},"Compilation of Core BrainFlow Module and C++ Binding")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/UserAPI.html#c-api-reference"},"C++ API Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/Examples.html#id1"},"C++ Code Samples"))),(0,o.kt)("h2",{id:"brainflow---python"},"BrainFlow - Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#python"},"Install Python Binding")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/UserAPI.html#python-api-reference"},"Python API Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/Examples.html#python"},"Python Code Samples"))),(0,o.kt)("h2",{id:"brainflow---c-1"},"BrainFlow - C#"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#c"},"Install C# Binding")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/UserAPI.html#id1"},"C# API Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/Examples.html#c"},"C# Code Samples"))),(0,o.kt)("h2",{id:"brainflow---java"},"BrainFlow - Java"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#java"},"Install Java Binding")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/UserAPI.html#java-api-reference"},"Java API Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/Examples.html#java"},"Java Code Samples"))),(0,o.kt)("h2",{id:"brainflow---r"},"BrainFlow - R"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#r"},"Install R Binding")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/UserAPI.html#r-api-reference"},"R API Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/Examples.html#r"},"R Code Samples"))),(0,o.kt)("h2",{id:"notebooks"},"Notebooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/notebooks/brainflow_mne.html"},"BrainFlow to MNE Python Notebook")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brainflow.readthedocs.io/en/stable/notebooks/denoising.html"},"Denoising Notebook"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"openbci-gui-overview"},"OpenBCI GUI Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Software/OpenBCISoftware/GUIDocs"},"GUI How-to and Installation")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"Software/OpenBCISoftware/GUIWidgets"},"GUI Widget Guide"),' provides details on each "widget" within the GUI, such as the ',(0,o.kt)("a",{parentName:"li",href:"/Software/OpenBCISoftware/GUIWidgets#time-series"},"Time Series Widget")," and the ",(0,o.kt)("a",{parentName:"li",href:"/Software/OpenBCISoftware/GUIWidgets#networking"},"Networking Widget")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenBCI/OpenBCI_GUI/blob/master/CHANGELOG.md"},"GUI Changelog"))),(0,o.kt)("h2",{id:"brainflow-java-binding-and-openbci-gui"},"BrainFlow Java Binding and OpenBCI GUI"),(0,o.kt)("p",null,"This project is currently in Alpha testing, more information will be available after the stable GUI version 5.0 has been released."))}m.isMDXComponent=!0}}]);