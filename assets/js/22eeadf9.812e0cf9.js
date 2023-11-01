"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[761],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(r),d=i,y=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(7462),i=(r(7294),r(3905));const a={title:"ML System Design Interview Framework"},o="ML System Design Interview Framework",l={unversionedId:"interviewing/ml-system-design-interview-framework",id:"interviewing/ml-system-design-interview-framework",title:"ML System Design Interview Framework",description:"- I developed this framework in 2021 while interviewing for machine learning roles. Unfortunately I only have one data point for the framework's efficacy \u2013 my interview with Yelp. That being said, the interview went terrifically and I credit that mostly to this framework.",source:"@site/docs/interviewing/ml-system-design-interview-framework.md",sourceDirName:"interviewing",slug:"/interviewing/ml-system-design-interview-framework",permalink:"/knowledge/interviewing/ml-system-design-interview-framework",draft:!1,editUrl:"https://github.com/whnisbett/knowledge/tree/main/docs/interviewing/ml-system-design-interview-framework.md",tags:[],version:"current",frontMatter:{title:"ML System Design Interview Framework"},sidebar:"tutorialSidebar",previous:{title:"Interviewing",permalink:"/knowledge/interviewing/"},next:{title:"Resume Building Theory",permalink:"/knowledge/interviewing/resume-building-theory"}},s={},m=[{value:"Outline",id:"outline",level:2},{value:"1. Clarify and gather requirements",id:"1-clarify-and-gather-requirements",level:2}],u={toc:m},p="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ml-system-design-interview-framework"},"ML System Design Interview Framework"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I developed this framework in 2021 while interviewing for machine learning roles. Unfortunately I only have one data point for the framework's efficacy \u2013 my interview with Yelp. That being said, the interview went terrifically and I credit that mostly to this framework."),(0,i.kt)("li",{parentName:"ul"},"The framework is arranged (mostly) chronologically. Obviously if your interviewer is asking you specific questions and wants you to focus on specific parts of the problem, you may need to jump around a bit. Otherwise, if they are more hands-off and happy to let you drive the discussion, you can quite literally go down the list of points and address them one-by-one."),(0,i.kt)("li",{parentName:"ul"},"You do not need to address every point or ask every question. Some points will be irrelevant and some questions will have obvious answers. Use your best judgement here.")),(0,i.kt)("h2",{id:"outline"},"Outline"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clarify and gather requirement"),(0,i.kt)("li",{parentName:"ol"},"High-level system architecture"),(0,i.kt)("li",{parentName:"ol"},"Data and feature engineering"),(0,i.kt)("li",{parentName:"ol"},"Modeling"),(0,i.kt)("li",{parentName:"ol"},"Model serving")),(0,i.kt)("h2",{id:"1-clarify-and-gather-requirements"},"1. Clarify and gather requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Repeat back the problem in your own words.")," ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Demonstrates to interviewer that you understand the problem"),(0,i.kt)("li",{parentName:"ul"},"Resolves any misunderstandings right away"),(0,i.kt)("li",{parentName:"ul"},"Gives you a moment to catch your breath"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"What are the (business-level) goals of the system?")," ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, are we trying to drive user engagement, increase revenue, etc. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Use this to pick evaluation metrics for the system later on")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Is there any portion of this system already in place, or are we building everything from scratch?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. Is there a status quo model we need to be comparing against? Is there an ETL pipeline already "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"How many users are we concerned with serving at once?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Are there any constraints on data availability?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. constraints on how much data is available? Is the data annotated with the response variable we care about?"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Will the product need to be personalized to each user? If so, what kind of user data do we have available to us?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Are there any minimum performance requirements we need to meet?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. latency requirements? accuracy/precision requirements?")),(0,i.kt)("h2",{parentName:"li",id:"2-high-level-system-architecture"},"2. High-level system architecture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Propose the metrics you will use to evaluate the system in production (and offline if applicable)")," ")),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://huyenchip.com/ml-interviews-book/"},"Huyen Chip's Machine Learning Systems Design")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mle-interviews.com/ml-design-template"},"ML Design Template"))))}c.isMDXComponent=!0}}]);