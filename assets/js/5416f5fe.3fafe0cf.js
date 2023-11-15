"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Modulation Transfer Function (MTF)"},i="Modulation Transfer Function (MTF)",s={unversionedId:"photography/modulation-transfer-function",id:"photography/modulation-transfer-function",title:"Modulation Transfer Function (MTF)",description:"* The MTF characterizes an optical system's ability to recreate contrast from a scene",source:"@site/docs/photography/modulation-transfer-function.md",sourceDirName:"photography",slug:"/photography/modulation-transfer-function",permalink:"/knowledge/photography/modulation-transfer-function",draft:!1,editUrl:"https://github.com/whnisbett/knowledge/tree/main/docs/photography/modulation-transfer-function.md",tags:[],version:"current",frontMatter:{title:"Modulation Transfer Function (MTF)"},sidebar:"tutorialSidebar",previous:{title:"Photography",permalink:"/knowledge/photography/"}},l={},c=[{value:"MTF Mathematics and Relationship to OTF",id:"mtf-mathematics-and-relationship-to-otf",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modulation-transfer-function-mtf"},"Modulation Transfer Function (MTF)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The MTF characterizes an optical system's ability to recreate contrast from a scene"),(0,a.kt)("li",{parentName:"ul"},"More precisely, the MTF describes a system's "),(0,a.kt)("li",{parentName:"ul"},"Generally speaking, the MTF of imaging systems tends to decrease as spatial frequencies increase")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mtf-graph",src:n(3941).Z,width:"748",height:"546"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MTFs are real-, positive-valued functions with a range ","[0,1]")),(0,a.kt)("h2",{id:"mtf-mathematics-and-relationship-to-otf"},"MTF Mathematics and Relationship to OTF"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Starting from the basics: an optical system has a characteristic function called its Point Spread Function (PSF). It is the optical system's response to a (spatial) impulse function AKA a point source (i.e. if we imaged a single point of light, what does our image look like?)"),(0,a.kt)("li",{parentName:"ul"},"What does the PSF have to do with imaging objects more complex than a point source? An output image is obtained by ",(0,a.kt)("a",{parentName:"li",href:"/knowledge/mathematics/convolution"},"convolving")," the input object with the system's PSF.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This assumes that the system is spatially invariant i.e. the same PSF is valid across the entire detector, lens, etc."))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/knowledge/mathematics/fourier-transform"},"Fourier Transform")," of the PSF is known as the Optical Transfer Function (OTF)"),(0,a.kt)("li",{parentName:"ul"},"Where the PSF describes the optical system's response to an object in image space, the OTF describes its response in frequency space. They are two sides of the same coin.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Colloquially you might say the PSF describes how well the system recreates the actual "pixels" of an object, while the OTF describes how the system recreates the spatial frequency spectrum of the object'))),(0,a.kt)("li",{parentName:"ul"},"Being a fourier transform, the OTF is a complex valued-function. ",(0,a.kt)("strong",{parentName:"li"},"The magnitude of the complex OTF is precisely the MTF"),", while the phase component is known as the phase transfer function."),(0,a.kt)("li",{parentName:"ul"},"In a compound system, the total transfer function is the product of its components' transfer functions")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"resources"},"Resources"))}m.isMDXComponent=!0},3941:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mtf-graph-b9b833fdcd4572afd6d06be11a34cff4.png"}}]);