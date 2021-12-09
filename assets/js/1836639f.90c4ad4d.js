"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,c=u["".concat(p,".").concat(g)]||u[g]||m[g]||r;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31182:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"GanglionProgram",title:"Ganglion Programming Tutorial"},p=void 0,s={unversionedId:"Ganglion/GanglionProgram",id:"Ganglion/GanglionProgram",isDocsHomePage:!1,title:"Ganglion Programming Tutorial",description:"Please note, you do NOT need to program the Ganglion in order to use it. All OpenBCI boards ship ready to use out of the box. This guide is for users who want to upload their own firmware to the Ganglion or modify existing firmware.",source:"@site/docs/Ganglion/09-Ganglion_Programming_Tutorial.md",sourceDirName:"Ganglion",slug:"/Ganglion/GanglionProgram",permalink:"/Ganglion/GanglionProgram",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Ganglion/09-Ganglion_Programming_Tutorial.md",version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:9,frontMatter:{id:"GanglionProgram",title:"Ganglion Programming Tutorial"},sidebar:"docs",previous:{title:"Ganglion SDK",permalink:"/Ganglion/GanglionSDK"},next:{title:"Add Ons",permalink:"/AddOns/AddOnLanding"}},d=[{value:"Download The Latest Firmware Build",id:"download-the-latest-firmware-build",children:[]},{value:"Building From source",id:"building-from-source",children:[{value:"What You Need",id:"what-you-need",children:[]},{value:"Modify The Simblee Board Files",id:"modify-the-simblee-board-files",children:[]},{value:"Install Firmware From Arduino Library Manager (easiest!)",id:"install-firmware-from-arduino-library-manager-easiest",children:[]},{value:"Manual Installation of Ganglion Firmware",id:"manual-installation-of-ganglion-firmware",children:[]},{value:"Manual Installation of WiFi Master Firmware",id:"manual-installation-of-wifi-master-firmware",children:[]},{value:"Clone The Repos From Github",id:"clone-the-repos-from-github",children:[]},{value:"Select &#39;Simblee&#39; as Board",id:"select-simblee-as-board",children:[]},{value:"Select DefaultGanglion.ino from Examples",id:"select-defaultganglionino-from-examples",children:[]}]},{value:"How to Create OTA File",id:"how-to-create-ota-file",children:[]},{value:"Setting Up for OTA Programming On A Windows",id:"setting-up-for-ota-programming-on-a-windows",children:[{value:"Coming Sooooon!",id:"coming-sooooon",children:[]}]},{value:"Setup Mobile Device For OTA Programming",id:"setup-mobile-device-for-ota-programming",children:[{value:"iPhone Setup: What You Need",id:"iphone-setup-what-you-need",children:[]},{value:"Install apps",id:"install-apps",children:[]},{value:"Verify Ganglion Version",id:"verify-ganglion-version",children:[]},{value:"Android Setup: What You Need",id:"android-setup-what-you-need",children:[]},{value:"Install apps",id:"install-apps-1",children:[]},{value:"Verify Ganglion Version",id:"verify-ganglion-version-1",children:[]}]},{value:"Using Your Mobile Device To Do OTA Programming",id:"using-your-mobile-device-to-do-ota-programming",children:[]},{value:"Setting up to Program Ganglion Using Hardware",id:"setting-up-to-program-ganglion-using-hardware",children:[{value:"What You Need",id:"what-you-need-1",children:[]},{value:"Set Up Arduino to Program Your Ganglion",id:"set-up-arduino-to-program-your-ganglion",children:[]},{value:"&#39;Simblee&#39; selected and &#39;DefaultGanglion&#39; open",id:"simblee-selected-and-defaultganglion-open",children:[]},{value:"Plug in Dongle or FTDI Friend and Select Serial Port",id:"plug-in-dongle-or-ftdi-friend-and-select-serial-port",children:[]},{value:"Verify Wire Connections and Press Upload",id:"verify-wire-connections-and-press-upload",children:[]}]}],m={toc:d};function u(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note, you do NOT need to program the Ganglion in order to use it. All OpenBCI boards ship ready to use out of the box. This guide is for users who want to upload their own firmware to the Ganglion or modify existing firmware.")),(0,r.kt)("p",null,"This guide will walk you through how to update your Ganglion firmware. Downloading the latest binary and Over The Air programming (OTA) makes updating the Ganglion a breeze with a mobile device. If you want to compile the code in Arduino continue to the ",(0,r.kt)("a",{parentName:"p",href:"#ganglion-programming-tutorial-building-from-source"},"Building From Source")," portion of the guide."),(0,r.kt)("p",null,"To program the Ganglion over the air, keep reading. To program using hardware, scroll all the way down to the ",(0,r.kt)("a",{parentName:"p",href:"#ganglion-programming-tutorial-setting-up-to-program-ganglion-using-hardware"},"last section.")),(0,r.kt)("h2",{id:"download-the-latest-firmware-build"},"Download The Latest Firmware Build"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Ganglion_Library/releases/download/v2.0.0/DefaultGanglion.ino.Simblee.zip"},"v2.0.0 Direct Download")),(0,r.kt)("p",null,"You can read the release notes and more at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Ganglion_Library/releases/latest"},"on Github")," or jump down to ",(0,r.kt)("a",{parentName:"p",href:"#ganglion-programming-tutorial-setup-mobile-device-for-ota-programming"},"setup your mobile device for OTA programming")," to continue"),(0,r.kt)("h2",{id:"building-from-source"},"Building From source"),(0,r.kt)("p",null,"The Simblee (website discontinued) radio module that is at the heart of the Ganglion board offers the ability to reprogram Over The Air ",(0,r.kt)("inlineCode",{parentName:"p"},"OTA"),". The method for doing this in a nutshell is:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create new Ganglion firmware, or modify existing code in Arduino IDE"),(0,r.kt)("li",{parentName:"ol"},"Generate a compiled HEX file in the Arduino IDE"),(0,r.kt)("li",{parentName:"ol"},"Compress it into a ZIP with some other important files"),(0,r.kt)("li",{parentName:"ol"},"Transfer the ZIP file to your phone or tablet"),(0,r.kt)("li",{parentName:"ol"},"Connect your phone or tablet to the Ganglion"),(0,r.kt)("li",{parentName:"ol"},"Upload new code Over The Air")),(0,r.kt)("p",null,"The following tutorials will get your computer and the Arduino IDE set up to create the correct ZIP file, and also show how to use your phone or tablet to upload new code to the Ganglion. This guide will also teach you how to upload code to your ganglion for the first time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"IMPORTANT: Ganglions shipped prior to February 27, 2017 will NOT program Over The Air for the first time! If you purchased your Ganglion prior to 2/27/17, Please follow the instructions below up till How to create an OTA File and read the instructions the bottom of this page to program your Ganglion for the first time."))),(0,r.kt)("h3",{id:"what-you-need"},"What You Need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arduino IDE v1.8.0 Or Newer"),(0,r.kt)("li",{parentName:"ul"},"Simblee Board Files"),(0,r.kt)("li",{parentName:"ul"},"Ganglion Library Firmware"),(0,r.kt)("li",{parentName:"ul"},"Wifi Master Library Firmware"),(0,r.kt)("li",{parentName:"ul"},"Compiler Tools (for OTA)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Download Arduino Mac",src:n(81404).Z})),(0,r.kt)("p",null,"If you don't already have the Arduino IDE software on your computer, go ",(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},"here")," to download the latest version for macOS."),(0,r.kt)("p",null,"Here is a ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1aZijlZ081pie5su9li1vdSes1nh_IMtv/view?usp=sharing"},"temporary link to the Simblee board files"),"."),(0,r.kt)("p",null,"Deprecated: Then, follow the instructions in the Simblee Quick Start Guide(website deprecated) to install the Simblee board files in Arduino for macOS.  "),(0,r.kt)("h3",{id:"modify-the-simblee-board-files"},"Modify The Simblee Board Files"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Open Arduino Contents",src:n(73417).Z})),(0,r.kt)("p",null,"In order to program the Simblee to communicate and control the Ganglion, we need to make a quick change to the ",(0,r.kt)("inlineCode",{parentName:"p"},"variants.h")," file in the Simblee folder that you just loaded into Arduino. Naviage to the folder   ",(0,r.kt)("inlineCode",{parentName:"p"},"/Applications/Arduino.app/Contents/Java/portable/packages"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/Simblee/hardware/Simblee/1.1.0/variants/Simblee"),",",(0,r.kt)("br",{parentName:"p"}),"\n","and you will find the file called ",(0,r.kt)("inlineCode",{parentName:"p"},"variant.h"),". Open this file up in the editor of your choice, and change the pin defines as shown.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"NOTE")," To access the application contents, right click on the application ","[or ",(0,r.kt)("inlineCode",{parentName:"p"},"control")," + left click]"," and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Show Package Contents"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"define"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Change To"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PIN_SPI_SS"),(0,r.kt)("td",{parentName:"tr",align:"center"},"6u"),(0,r.kt)("td",{parentName:"tr",align:"center"},"26u")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PIN_SPI_MOSI"),(0,r.kt)("td",{parentName:"tr",align:"center"},"5u"),(0,r.kt)("td",{parentName:"tr",align:"center"},"18u")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PIN_SPI_MISO"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3u"),(0,r.kt)("td",{parentName:"tr",align:"center"},"15u")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PIN_SPI_SCK"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4u"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16u")))),(0,r.kt)("p",null,"Make sure to ",(0,r.kt)("strong",{parentName:"p"},"save")," and close the file.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT NOTE:")," If you don't do this, your Ganglion will not work after you reprogram it!"),(0,r.kt)("h3",{id:"install-firmware-from-arduino-library-manager-easiest"},"Install Firmware From Arduino Library Manager (easiest!)"),(0,r.kt)("p",null,"Don't know what the ",(0,r.kt)("em",{parentName:"p"},"Library Manager")," is? Skim over the ",(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide/Libraries#toc3"},"Official Arduino Guide"),"."),(0,r.kt)("p",null,"Open the ",(0,r.kt)("em",{parentName:"p"},"Library Manager")," and search for ",(0,r.kt)("em",{parentName:"p"},"OpenBCI")," and install the latest version for ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenBCI_Ganglion_Library")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenBCI_Wifi_Master"),"."),(0,r.kt)("h3",{id:"manual-installation-of-ganglion-firmware"},"Manual Installation of Ganglion Firmware"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the latest ",(0,r.kt)("a",{parentName:"p",href:"http://www.arduinolibraries.info/libraries/open-bci_ganglion_library"},"OpenBCI_Ganglion_Library"),", it's the top most zip file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unzip the folder and change the name to ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenBCI_Ganglion_Library"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Move ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenBCI_Ganglion_Library")," to:"),(0,r.kt)("p",{parentName:"li"},"On Mac: ",(0,r.kt)("inlineCode",{parentName:"p"},"/Documents/Arduino/libraries"),(0,r.kt)("br",{parentName:"p"}),"\n","On Windows: ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Users\\username\\Documents\\Arduino\\libraries")))),(0,r.kt)("p",null,"If you don't have a ",(0,r.kt)("inlineCode",{parentName:"p"},"libraries")," folder there, go ahead and make one.  "),(0,r.kt)("p",null,"If you're have trouble or want to learn more checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide/Libraries#toc5"},"Official Arduino Guide")," for manual installation."),(0,r.kt)("h3",{id:"manual-installation-of-wifi-master-firmware"},"Manual Installation of WiFi Master Firmware"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the latest ",(0,r.kt)("a",{parentName:"p",href:"http://www.arduinolibraries.info/libraries/open-bci_wifi_master"},"WiFi Master Library"),", it's the top most zip file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unzip the folder and change the name to ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenBCI_Wifi_Master"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Move ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenBCI_Wifi_Master")," to:"),(0,r.kt)("p",{parentName:"li"},"On Mac: ",(0,r.kt)("inlineCode",{parentName:"p"},"/Documents/Arduino/libraries"),(0,r.kt)("br",{parentName:"p"}),"\n","On Windows: ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Users\\username\\Documents\\Arduino\\libraries")))),(0,r.kt)("p",null,"If you're have trouble or want to learn more checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide/Libraries#toc5"},"Official Arduino Guide")," for manual installation."),(0,r.kt)("h3",{id:"clone-the-repos-from-github"},"Clone The Repos From Github"),(0,r.kt)("p",null,"Developers looking to contribute or write custom firmware can clone the firmware repositories directly to your ",(0,r.kt)("inlineCode",{parentName:"p"},"libraries")," folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nOn Mac: `/Documents/Arduino/libraries`  \nOn Windows: `C:\\Users\\username\\Documents\\Arduino\\libraries`\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenBCI/OpenBCI_Ganglion_Library"},"OpenBCI_Ganglion_Library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenBCI/OpenBCI_Wifi_Master_Library"},"OpenBCI_Wifi_Master_Library"))),(0,r.kt)("h3",{id:"select-simblee-as-board"},"Select 'Simblee' as Board"),(0,r.kt)("p",null,"If you followed the process in the previous link, and you will be able to select the ",(0,r.kt)("em",{parentName:"p"},"Simblee")," board from the Tools >> Board >> dropdown menu!"),(0,r.kt)("h3",{id:"select-defaultganglionino-from-examples"},"Select DefaultGanglion.ino from Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the Arduino IDE go to ",(0,r.kt)("inlineCode",{parentName:"li"},"File--\x3eExamples--\x3eOpenBCI_Ganglion_Library--\x3eDefaultGanglion")," which will launch the Ganglion firmware. ",(0,r.kt)("strong",{parentName:"li"},"NOTE You must upload ONLY the ",(0,r.kt)("inlineCode",{parentName:"strong"},"DefaultGanglion")," Sketch!")," If you can't see ",(0,r.kt)("inlineCode",{parentName:"li"},"OpenBCI_Ganglion_Library")," then verify ",(0,r.kt)("inlineCode",{parentName:"li"},"Simblee")," is selected as board type.")),(0,r.kt)("h2",{id:"how-to-create-ota-file"},"How to Create OTA File"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rename platform file",src:n(51469).Z})),(0,r.kt)("p",null,"In order to create a zip file with the appropriate components to do OTA, we need to further modify the Simblee board files in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Arduino/Contents/Java/portable")," folder. Navigate to the folder",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/Arduino.app/Contents/Java/portable/packages"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/Simblee/hardware/Simblee/1.1.0"),(0,r.kt)("br",{parentName:"p"}),"\n","Then change the name of the file ",(0,r.kt)("inlineCode",{parentName:"p"},"platform.txt")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"platform_NORMAL.txt"),".",(0,r.kt)("br",{parentName:"p"}),"\n","We're doing this in case you ever want to revert to the original.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modified 1.1.0 Folder",src:n(68802).Z})),(0,r.kt)("p",null,"Next, download the necessary files ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/biomurph/Ganglion_OTA_Tools"},"here"),". They are:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mkdfuzip"),(0,r.kt)("li",{parentName:"ul"},"nrfutil_macosx"),(0,r.kt)("li",{parentName:"ul"},"platform.txt")),(0,r.kt)("p",null,"Move the files called ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdfuzip"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nrfutil_macosx"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"platform.txt")," into your ",(0,r.kt)("inlineCode",{parentName:"p"},"Simblee/1.1.0")," folder. ",(0,r.kt)("strong",{parentName:"p"},"Restart or launch Arduino"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OTA File Created",src:n(75118).Z})),(0,r.kt)("br",null),(0,r.kt)("br",null),"![Change Zip Name](../assets/GanglionImages/ganglion_ota-zip-nameChange.png)",(0,r.kt)("br",null),(0,r.kt)("p",null,"Now you're ready to create custom Ganglion firmware that is packaged correctly for OTA programming! This walk through will use example code as an example.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT NOTE:")," Whenever you want to create or modify Ganglion firmware, You must ",(0,r.kt)("strong",{parentName:"p"},"xAlways")," put the line",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"#include <OpenBCI_Ganglion_Library.h>"),(0,r.kt)("br",{parentName:"p"}),"\n","at the top of your code!",(0,r.kt)("br",{parentName:"p"}),"\n","To create the OTA files, simply select ",(0,r.kt)("inlineCode",{parentName:"p"},"Export compiled Binary")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sketch")," menu. The Arduino IDE will take a few moments, and the tools you just installed will create the ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," file you need for OTA ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"right in the sketch folder"))," right beside your sketch! Cool! Go ahead and change the name of the file to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},".ino.Simblee")," and you are good to go."),(0,r.kt)("h2",{id:"setting-up-for-ota-programming-on-a-windows"},"Setting Up for OTA Programming On A Windows"),(0,r.kt)("h3",{id:"coming-sooooon"},"Coming Sooooon!"),(0,r.kt)("h2",{id:"setup-mobile-device-for-ota-programming"},"Setup Mobile Device For OTA Programming"),(0,r.kt)("p",null,"The Simblee is designed around a Nordic Semiconductor ",(0,r.kt)("a",{parentName:"p",href:"http://www.nordicsemi.com/eng/Products/Bluetooth-low-energy/nRF51822"},"nRF51822"),", and so we need to use the Nordic nRF apps to do the actual Over-The-Air stuff. Here's what you will need for this tutorial:"),(0,r.kt)("h3",{id:"iphone-setup-what-you-need"},"iPhone Setup: What You Need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iPhone"),(0,r.kt)("li",{parentName:"ul"},"nRF Toolbox App"),(0,r.kt)("li",{parentName:"ul"},"Lightblue Explorer App")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nRF Toolbox appStore",src:n(2819).Z}),"\n",(0,r.kt)("img",{alt:"Lightblue Explorer AppStore",src:n(82109).Z})),(0,r.kt)("h3",{id:"install-apps"},"Install apps"),(0,r.kt)("p",null,"Install the nRF Toolbox and Lightblue Explorer apps onto you device."),(0,r.kt)("h3",{id:"verify-ganglion-version"},"Verify Ganglion Version"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Lightblue Scan",src:n(39125).Z})),(0,r.kt)("p",null,"Turn on your Ganglion, and turn on your phone's bluetooth Then open the Lightblue app. The app will open and show you what Bluetooth Peripherals are nearby. The Ganglion will be listed as ",(0,r.kt)("inlineCode",{parentName:"p"},"Simblee"),". Tap that peripheral, and Lightblue will connect to and interrogate it.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"NOTE: the Ganglion may also show up as DfuTarg")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simblee Interrogation",src:n(35342).Z})),(0,r.kt)("p",null,"In the Device Information, you will find the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manufacturer Name String"),(0,r.kt)("li",{parentName:"ul"},"Model Number String"),(0,r.kt)("li",{parentName:"ul"},"Hardware Revision String"),(0,r.kt)("li",{parentName:"ul"},"Firmware Revision String"),(0,r.kt)("li",{parentName:"ul"},"Software Revision String")),(0,r.kt)("p",null,"You should see ",(0,r.kt)("inlineCode",{parentName:"p"},"openbci.com")," as the Manufacturer, ",(0,r.kt)("inlineCode",{parentName:"p"},"Gagnlion")," as the Model Number, and ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1.1")," as the ",(0,r.kt)("strong",{parentName:"p"},"Software Revision String"),". The Hardware and Firmware versions are generated by the Simblee itself.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT NOTE: If the Software Revision String is earlier than 1.1.1 you ",(0,r.kt)("em",{parentName:"strong"},"cannot do OTA")," until you follow the Hardware Upload Tutorial at the bottom of this page."),"  "),(0,r.kt)("h3",{id:"android-setup-what-you-need"},"Android Setup: What You Need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android Device"),(0,r.kt)("li",{parentName:"ul"},"nRF Toolbox App"),(0,r.kt)("li",{parentName:"ul"},"nRF Connect App")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nRF Toolbox PlayStore",src:n(94497).Z}),"\n",(0,r.kt)("img",{alt:"nRF Connect PlayStore",src:n(36752).Z})),(0,r.kt)("h3",{id:"install-apps-1"},"Install apps"),(0,r.kt)("p",null,"Install the nRF Toolbox and nRF Connect Apps onto you device."),(0,r.kt)("h3",{id:"verify-ganglion-version-1"},"Verify Ganglion Version"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nRF Connect Scan",src:n(32729).Z})),(0,r.kt)("p",null,"Turn on your Ganglion, and turn on your device's bluetooth then open the nRF Connect App. The app will open and show you what Bluetooth Peripherals are nearby. The Ganglion will be listed as ",(0,r.kt)("inlineCode",{parentName:"p"},"Ganglion-XXXX")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"XXXX")," is the 4 character code specific to your Ganglion. Tap that peripheral, and nRF Connect will connect to and interrogate it.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ganglion Interrogation",src:n(19752).Z}),"\n",(0,r.kt)("img",{alt:"Device Information",src:n(25252).Z})),(0,r.kt)("p",null,"Tap the ",(0,r.kt)("inlineCode",{parentName:"p"},"Device Information")," service, and it will open up to show you the following information.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"NOTE:")," You may need to tap the screen to read this data."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manufacturer Name String"),(0,r.kt)("li",{parentName:"ul"},"Model Number String"),(0,r.kt)("li",{parentName:"ul"},"Hardware Revision String"),(0,r.kt)("li",{parentName:"ul"},"Firmware Revision String"),(0,r.kt)("li",{parentName:"ul"},"Software Revision String")),(0,r.kt)("p",null,"You should see ",(0,r.kt)("inlineCode",{parentName:"p"},"openbci.com")," as the Manufacturer, ",(0,r.kt)("inlineCode",{parentName:"p"},"Ganglion")," as the Model Number, and ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1.1")," as the ",(0,r.kt)("strong",{parentName:"p"},"Software Revision String"),". The Hardware and Firmware versions are generated by the Simblee itself.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT NOTE: If the Software Revision String is earlier than 1.1.1 you ",(0,r.kt)("em",{parentName:"strong"},"cannot do OTA")," until you follow the Hardware Upload Tutorial at the bottom of this page."),"  "),(0,r.kt)("h2",{id:"using-your-mobile-device-to-do-ota-programming"},"Using Your Mobile Device To Do OTA Programming"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sharing Options",src:n(13463).Z}),"\n",(0,r.kt)("img",{alt:"Import with nRF Toolbox",src:n(45395).Z})),(0,r.kt)("p",null,"Now we need to get the ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," file from your Arduino Sketch folder to your iPhone. In this example, I'm going to use email. Email the ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," file to yourself, and then open and download it on your iPhone. Tap the sharing options in the lower left corner and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Import with nRF Toolbox")," option. Since you have already installed nRF Toolbox, the ",(0,r.kt)("inlineCode",{parentName:"p"},"DFU")," tool will open with the downloaded file already selected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DFU Tool",src:n(39207).Z}),"\n",(0,r.kt)("img",{alt:"DFU Select File",src:n(33711).Z}),"\n",(0,r.kt)("img",{alt:"DFU Select User Files",src:n(42986).Z}),"\n",(0,r.kt)("img",{alt:"DFU Select Inbox",src:n(53773).Z}),"\n",(0,r.kt)("img",{alt:"DFU Inbox",src:n(61365).Z})),(0,r.kt)("p",null,"If you ever want to re-upload a program that you already have on your phone, select the ",(0,r.kt)("inlineCode",{parentName:"p"},"DFU")," tool after launching the nRF Toolbox app. Tap the ",(0,r.kt)("inlineCode",{parentName:"p"},"Select File")," button, and on the next screen at the bottom you will see an option for ",(0,r.kt)("inlineCode",{parentName:"p"},"User Files"),". Select that, and then ",(0,r.kt)("inlineCode",{parentName:"p"},"Inbox")," on the next screen to choose from all of your nRF Imported files."),(0,r.kt)("h2",{id:"setting-up-to-program-ganglion-using-hardware"},"Setting up to Program Ganglion Using Hardware"),(0,r.kt)("p",null,"Older Ganglions (pre-2017) could only be programmed using hardware first, then over the air. Newer Ganglions can be programmed OTA or using hardware."),(0,r.kt)("h3",{id:"what-you-need-1"},"What You Need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FTDI Breakout or OpenBCI Cyton Dongle"),(0,r.kt)("li",{parentName:"ul"},"0.1uF Capacitor"),(0,r.kt)("li",{parentName:"ul"},"Jumper Wires"),(0,r.kt)("li",{parentName:"ul"},"Arduino IDE v")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"FTDI Breakout",src:n(37075).Z}),"\n",(0,r.kt)("img",{alt:"Capacitor",src:n(64533).Z}),"\n",(0,r.kt)("img",{alt:"Ganglion Pins Connection",src:n(96188).Z})),(0,r.kt)("p",null,"For this tutorial, I will use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.adafruit.com/products/284"},"Adafruit FTDI Friend"),". You can use any FTDI breakout, as long as it uses ",(0,r.kt)("strong",{parentName:"p"},"only 3V for logic levels"),". If you go to Adafruit to purchase one, you can also pick up some ",(0,r.kt)("a",{parentName:"p",href:"https://www.adafruit.com/products/758"},"jumper wires"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://www.adafruit.com/products/753"},"0.1uF Capacitors")," as well.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT NOTE: THE GANGLION IS A 3V DEVICE! YOU MUST NEVER CONNECT ANY HIGHER VOLTAGE SOURCE TO ANY OF THE PINS!"),(0,r.kt)("br",{parentName:"p"}),"\n","The 0.1uF capacitor needs to be in between the ",(0,r.kt)("inlineCode",{parentName:"p"},"RESET")," pin of the Ganglion and the ",(0,r.kt)("inlineCode",{parentName:"p"},"RTS")," pin of the FTDI breakout."),(0,r.kt)("h3",{id:"set-up-arduino-to-program-your-ganglion"},"Set Up Arduino to Program Your Ganglion"),(0,r.kt)("p",null,"Follow the guide at the top of this page called ",(0,r.kt)("em",{parentName:"p"},"Build From Source")," all the way down till ",(0,r.kt)("em",{parentName:"p"},"How To Create an OTA File"),", then come back here."),(0,r.kt)("h3",{id:"simblee-selected-and-defaultganglion-open"},"'Simblee' selected and 'DefaultGanglion' open"),(0,r.kt)("p",null,"Select Simblee from menu bar ",(0,r.kt)("inlineCode",{parentName:"p"},"Tools > Board")," and open the ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultGanglion")," example from ",(0,r.kt)("inlineCode",{parentName:"p"},"File > Examples > OpenBCI_Ganglion_Library > DefaultGanglion"),"."),(0,r.kt)("h3",{id:"plug-in-dongle-or-ftdi-friend-and-select-serial-port"},"Plug in Dongle or FTDI Friend and Select Serial Port"),(0,r.kt)("p",null,"Now is a good time to plug your Dongle in and power up the Ganglion."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"serial_port",src:n(74561).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the correct serial port from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tools > Port")," menu for your OpenBCI Dongle or FTDI friend."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On Macs, this will be named ",(0,r.kt)("strong",{parentName:"p"},"/dev/tty.usbserial-DN00nnnn")," where the nnnn is a combination of numbers and letters specific to your OpenBCI Dongle.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On Windows, the serial port will be listed as a numbered COM port.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On Linux, it will be different."))))),(0,r.kt)("h3",{id:"verify-wire-connections-and-press-upload"},"Verify Wire Connections and Press Upload"),(0,r.kt)("p",null,"With your wires all connected correctly, you should be able to click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Upload")," button and successfully re-program the Ganglion. Now you're ready to do OTA Programming!"))}u.isMDXComponent=!0},74561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/PortSelect-e90b7b02b1132ab096fd1e168f09ce83.png"},64533:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/caps-c1a7096cf8e15b6fa087426549ff5711.jpg"},68802:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_add-ota-tools-2a86f50a9dbe5d10596d7f33b33e6848.png"},32729:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_android-connect-to-ganglion-56755ac43a5cd891839d7017768192af.png"},19752:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_android-device-information-93db7e6111b9b9bee27588597fd8de02.png"},36752:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_android-get-connect-fc16712345f6c1db22bc035ef9508c27.png"},94497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_android-get-toolbox-9b2f800799a5cc1436ca3672899b6fa7.png"},25252:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_android-software-revision-44953928b0d122752b84da68a3b9c2a9.png"},81404:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_download-arduino-mac-82eb216c584464469f94bd3a4a63fab0.png"},96188:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_ftdi-connection-181dc7b6e9150ce2182406dc2d9fc9fa.jpeg"},82109:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_iphone-get-lightblue-8c4c70ad7563f311b4157df468d59af6.png"},2819:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_iphone-get-toolbox-d9df44130b0be14651be1b04e597a573.png"},45395:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_iphone-import-download-cafd1444866077d0b482ba76fc29f1b6.png"},39207:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_iphone-select-dfu-8e61b7a67c828be8331823210379bd46.png"},33711:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_iphone-select-file-button-6281686c8945c45d2711a857552ecc98.png"},61365:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_iphone-select-file-03f81651f23f563338d413a0e2069646.png"},53773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_iphone-select-inbox-1839ce7ba87e21b3a6c305432721ac35.png"},39125:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_iphone-select-simblee-lightblue-2ebbcf7a899007267bf964ac9beb303f.png"},42986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_iphone-select-user-files-fff221549b54a29084f9b30852a5c6bb.png"},13463:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_iphone-share-download-3b81e4af04fb951ed37d158f7d2cdc6d.png"},35342:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_iphone-software-revision-e2f265eb249968f432e036dd61cda6c3.png"},75118:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_ota-zip-created-1573277f060f0cc5c44c9b25e05bb585.png"},51469:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_platform-rename-9554e407da0812ac6b540404c159105a.png"},73417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ganglion_variant-file-mod-13cdc2c8b633108319c02c21c2efca7a.png"},37075:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/FTDI_Friend-27e370bf10343aa17fcd61c56fee72ac.jpg"}}]);