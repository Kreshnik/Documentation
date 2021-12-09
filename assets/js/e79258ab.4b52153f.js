"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1095],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||n;return o?r.createElement(h,i(i({ref:t},u),{},{components:o})):r.createElement(h,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},96821:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>u,default:()=>d});var r=o(87462),a=o(63366),n=(o(67294),o(3905)),i=["components"],s={id:"Neuromore",title:"Neuromore"},l=void 0,p={unversionedId:"Software/CompatibleThirdPartySoftware/Neuromore",id:"Software/CompatibleThirdPartySoftware/Neuromore",isDocsHomePage:!1,title:"Neuromore",description:"Neuromore is an EEG streaming and processing studio. Like BrainBay and BioEra, it provides a visual designer that can be used to process signals real-time.",source:"@site/docs/Software/CompatibleThirdPartySoftware/02-Neuromore.md",sourceDirName:"Software/CompatibleThirdPartySoftware",slug:"/Software/CompatibleThirdPartySoftware/Neuromore",permalink:"/Software/CompatibleThirdPartySoftware/Neuromore",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Software/CompatibleThirdPartySoftware/02-Neuromore.md",version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:2,frontMatter:{id:"Neuromore",title:"Neuromore"},sidebar:"docs",previous:{title:"MATLAB",permalink:"/Software/CompatibleThirdPartySoftware/Matlab"},next:{title:"OpenViBE",permalink:"/Software/CompatibleThirdPartySoftware/OpenVibe"}},u=[{value:"Setting Up Your Environment",id:"setting-up-your-environment",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Livestream from OpenBCI to Neuromore",id:"livestream-from-openbci-to-neuromore",children:[]},{value:"Getting Started",id:"getting-started-1",children:[]},{value:"Documentation and Resources",id:"documentation-and-resources",children:[]}],c={toc:u};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Neuromore is an EEG streaming and processing studio. Like BrainBay and BioEra, it provides a visual designer that can be used to process signals real-time."),(0,n.kt)("h2",{id:"setting-up-your-environment"},"Setting Up Your Environment"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Windows"),": Neuromore Studio is available for Windows (but only as a 64-bit application)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"OS X"),": Neuromore Studio is available for MacOS, but see the ",(0,n.kt)("a",{parentName:"p",href:"/Troubleshooting/FTDI_Fix_Mac"},"FTDI OS X fix")," before using it."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Linux"),": If you have Linux, you can use Neuromore through a virtual machine program like VirtualBox. Check out our VirtualBox tutorial ",(0,n.kt)("a",{parentName:"p",href:"/Software/CompatibleThirdPartySoftware/VirtualBox"},"here!")," See ",(0,n.kt)("a",{parentName:"p",href:"/Troubleshooting/FTDI_Fix_Linux"},"FTDI Linux Fix"),"."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Download the latest verison of Neuromore Studio for your operating system from their ",(0,n.kt)("a",{parentName:"p",href:"http://neuromore.com/"},"website"),". After installation, the application will be in the folder neuromore -",">"," Studio."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Open the Neuromore Studio application. A demo will begin playing that displays example EEG data."),(0,n.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/Neruomore_opening_screen.png?raw=true",width:"80%"}),(0,n.kt)("h2",{id:"livestream-from-openbci-to-neuromore"},"Livestream from OpenBCI to Neuromore"),(0,n.kt)("p",null,"First, connect your OpenBCI board to your computer. Make sure to take the following steps:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Windows"),": Make sure your board is recognized as a COM port and that its latency is set to 1 ms. To troubleshoot, read our ",(0,n.kt)("a",{parentName:"p",href:"/Troubleshooting/FTDI_Fix_Windows"},"OpenBCI on Windows tutorial"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"OS X"),": Make sure your board is connected and visible as a device. To check you can type ",(0,n.kt)("inlineCode",{parentName:"p"},"ls /dev/tty.*")," on your terminal. An example connected OBCI board should like like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nRodrigos-MacBook-Pro:~ rodrigo$ ls /dev/tty.*\n        /dev/tty.OpenBCI-DN00959R\n\n")),(0,n.kt)("p",null,'Now, to connect to your OpenBCI board from within Neuromore, click the magnifying glass under "Devices" in the top right corner. This will prompt Neuromore to search for new devices. You should see an OpenBCI logo pop up, and data from your board will start streaming in the top of the Neuromore window.'),(0,n.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_openBCI_connected.png?raw=true",width:"80%"}),(0,n.kt)("h4",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Neuromore is pretty awesome in terms of board connectivity. If you open up the studio and connect your board, 9 out of 10 times it'll automatically connect."),(0,n.kt)("p",null,"If it doesn't, try the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Reset OBCI Board (Press Reset Button)."),(0,n.kt)("li",{parentName:"ol"},"Turn OBCI Board OFF, disconnect dongle, reconnect dongle, turn board back ON."),(0,n.kt)("li",{parentName:"ol"},"Close neuromore and disconnect board and dongle. Connect Dongle and Board again and then open neuromore Studio.")),(0,n.kt)("p",null,"NOTE: If your board is connected properly, neuromore should have no trouble connecting to it."),(0,n.kt)("h2",{id:"getting-started-1"},"Getting Started"),(0,n.kt)("p",null,'To get started with Neuromore, open the "Getting Started" classifier in the OpenBCI folder of the "Back-End File System" pane:'),(0,n.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/obci_gs_loc.png?raw=true",width:"50%"}),(0,n.kt)("p",null,"An example of Neuromore's visual programming language will appear. Click the wrench-and-screwdriver icon to hide the Node Palette pane if necessary."),(0,n.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_getting_started.png?raw=true",width:"80%"}),(0,n.kt)("p",null,'Neuromore calls these graphs of interconnected processing units "Classifiers". The basic structure of a classifer consists of a input device (such as OpenBCI V3) connected to processing nodes that end in some sort of output node.'),(0,n.kt)("p",null,"Some of the output nodes produce visual output, like graphs in the time or frequency domain. However, the default Neuromore Studio layout doesn't have windows open for those outputs. To add a window for time-domain outputs, click on the View tab of the toolbar, then Add -",">"," Signal View."),(0,n.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_adding_signal_view.png?raw=true",width:"50%"}),(0,n.kt)("p",null,"A new window will appear. Click and drag the window to a convenient place in the Neuromore Studio Layout - it should snap into place, like below."),(0,n.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_signal_view.png?raw=true",width:"80%"}),(0,n.kt)("p",null,'If you look at the Classifier window, you will notice there are three "output" nodes (nodes with an eye symbol): Filtered Raw, Filtered FFT, and Viewer. The Filtered Raw and View symbols are time-domain, and are the two symbols in the Signal View.'),(0,n.kt)("p",null,"To add a window for frequency-domain outputs, click on View -",">"," Add -",">"," Spectrum View. Reposition the new window to a convenient place. You should see one signal, the Filtered FFT node."),(0,n.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_spectrum_view.png?raw=true",width:"80%"}),(0,n.kt)("p",null,'Want to double-check which signal corresponds to which output? Double click on one of the output nodes in the Classifier window. This should expand the Node Palette window. Display the Attributes tab and select "Custom Color". Double click on the block of color that appears to choose the color of your signal.'),(0,n.kt)("p",null,'In the example below, I selected the "Filtered Raw" node, and set the color to bright green. The corresponding signal is now bright green in the Signal View window.'),(0,n.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/Third_party_software/neuromore_color_coded_signals.png?raw=true",width:"80%"}),(0,n.kt)("p",null,"Now you're able to view the signals from your output nodes in your Classifier!"),(0,n.kt)("p",null,"This sort of graphical programming (or ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Visual_programming_language"},"visual programming"),") also appears in very popular programs like ",(0,n.kt)("a",{parentName:"p",href:"https://puredata.info/"},"PureData")," and ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Max_(software)/"},"MAX")," for more general purposes and ",(0,n.kt)("a",{parentName:"p",href:"/Software/CompatibleThirdPartySoftware/OpenVibe"},"OpenViBE")," and of course neuromore for EEG specific processing."),(0,n.kt)("p",null,"The basic idea is that a stream of data that originates at the input device can then be mapped, processed and transformed into outputs that are useful, informative or just plain cool."),(0,n.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/alpha-detect-gs.png?raw=true",width:"100%"}),(0,n.kt)("p",null,"The getting started example for OpenBCI in the neuromore Studio explores these areas and how to properly use the graphical programming interface."),(0,n.kt)("p",null,"The best example within the classifier is perhaps the dynamic alpha detector."),(0,n.kt)("p",null,"This alpha detector maintains a 30 sec average of the ratio between the alpha (8-12 Hz) and the background signal intensity. The detector itself reports an alpha reward that is dynamically changed by the average alpha/background ratio. This system is adaptive to lower or high alpha environments and makes alpha rewards harder when the average alpha ratio is high and vice-versa."),(0,n.kt)("p",null,'By changing the "sensibility" parameter node you can then manually tune the relative "difficulty" that is necesary to attain an alpha detection.'),(0,n.kt)("p",null,'This system is flexible to different electrodes and electrode placement as it adjusts dynamically its expectations of what alpha "looks like".'),(0,n.kt)("p",null,"From this example we can see the power of statistics and simple logic that can easily be incorporated through visual programming into a complex and robust system."),(0,n.kt)("h2",{id:"documentation-and-resources"},"Documentation and Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.neuromore.com/"},"neuromore.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/channel/UCAOU6SsvwCwC30hJaFLhWgw"},"Video tutorials")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://c2.com/cgi/wiki?GraphicalProgrammingLanguage"},"Graphical Programming"))),(0,n.kt)("p",null,"Did you use Neuromore and OpenBCI to build something new? Post about it on our ",(0,n.kt)("a",{parentName:"p",href:"https://openbci.com/forum/"},"forum!")))}d.isMDXComponent=!0}}]);