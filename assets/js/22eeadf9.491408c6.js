"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[761],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=m(a),h=r,d=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1026:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={title:"ML System Design Interview Framework"},l="ML System Design Interview Framework",o={unversionedId:"interviewing/ml-system-design-interview-framework",id:"interviewing/ml-system-design-interview-framework",title:"ML System Design Interview Framework",description:"I developed this framework in 2021 while interviewing for machine learning roles. Unfortunately, I only have one data point on its efficacy \u2013 an interview with Yelp \u2013 so your mileage may vary.",source:"@site/docs/interviewing/ml-system-design-interview-framework.md",sourceDirName:"interviewing",slug:"/interviewing/ml-system-design-interview-framework",permalink:"/knowledge/interviewing/ml-system-design-interview-framework",draft:!1,editUrl:"https://github.com/whnisbett/knowledge/tree/main/docs/interviewing/ml-system-design-interview-framework.md",tags:[],version:"current",frontMatter:{title:"ML System Design Interview Framework"},sidebar:"tutorialSidebar",previous:{title:"Interviewing",permalink:"/knowledge/interviewing/"},next:{title:"Mathematics",permalink:"/knowledge/mathematics/"}},s={},m=[{value:"1. Clarify and gather requirements",id:"1-clarify-and-gather-requirements",level:2},{value:"2. High-level system architecture",id:"2-high-level-system-architecture",level:2},{value:"3. Data and Feature Engineering",id:"3-data-and-feature-engineering",level:2}],u={toc:m},p="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ml-system-design-interview-framework"},"ML System Design Interview Framework"),(0,r.kt)("p",null,"I developed this framework in 2021 while interviewing for machine learning roles. Unfortunately, I only have one data point on its efficacy \u2013 an interview with Yelp \u2013 so your mileage may vary."),(0,r.kt)("p",null,"The framework is arranged (mostly) chronologically. If your interviewer wants you to focus on specific aspects of the problem (e.g. more modeling, less data engineering), you may need to jump around a bit. Otherwise, if they let you drive the discussion, I feel you can quite literally just go down this list."),(0,r.kt)("p",null,"You do not need to address every point during the interview. Some points may be irrelevant. Use your best judgement here on which to leave out. "),(0,r.kt)("h2",{id:"1-clarify-and-gather-requirements"},"1. Clarify and gather requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Repeat back the problem in your own words."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Why? This demonstrates to interviewer that you understand the problem (a surprisingly large amount of points in most technical interviews), it resolves any potential misunderstandings, and gives you a moment to catch your breath."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What are the business-level goals of the system?")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Are we trying to drive user engagement, increase revenue, , etc. "),(0,r.kt)("li",{parentName:"ul"},"Use this to pick evaluation metrics for the system later on"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Is there any portion of this system already in place, or are we building everything from scratch?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. Is there a status quo model we need to be comparing against? Is there an ETL pipeline in place already?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Will we need to make predictions in realtime?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How many users are we concerned with serving at once?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Are there any constraints on data availability?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. do we only have a small amount of data at our disposal? Is the data annotated with the response variable we care about?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Will the product need to be personalized to each user? If so, what kind of user data do we have available to us?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Any minimum performance requirements we need to meet?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. latency requirements? accuracy/precision requirements?")))),(0,r.kt)("h2",{id:"2-high-level-system-architecture"},"2. High-level system architecture"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Propose the metrics you will use to evaluate the system both in production and offline"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Decide this based on the business-level goals set out above"),(0,r.kt)("li",{parentName:"ul"},"Worth acknowledging that most metrics are just measurable proxies for our goals, and not the goals themselves. CTR \u2260 user engagement and ",(0,r.kt)("a",{parentName:"li",href:"/knowledge/mathematics/goodharts-law"},"it's dangerous to believe otherwise"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Propose a high-level architecture for the system"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Serves as an outline for the discussion ahead"),(0,r.kt)("li",{parentName:"ul"},"Does not need to be completely fleshed out at this point"),(0,r.kt)("li",{parentName:"ul"},"When in doubt, most ML systems have the following generic structure:")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"generic-ml-system-diagram",src:a(9633).Z,width:"1589",height:"309"})),(0,r.kt)("h2",{id:"3-data-and-feature-engineering"},"3. Data and Feature Engineering"),(0,r.kt)("p",null,"This is where the interview can become more nonlinear and your interviewer may start probing your thinking more. "),(0,r.kt)("p",null,"Under each discussion point, I have included a few key questions you should prepare for \u2013 either the interviewer will ask them or you can prompt the discussion yourself and provide the answers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What is our model's prediction target?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. for a content recommendation system, output might be one/many pieces of content. For an segmentation model, it will be a binary map of pixels that belong to the class(es) of interest"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What is the framing for our learning task?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Does this problem suit a supervised, unsupervised, or reinforcement learning approach?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"If supervised: is this a regression or classification problem?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"If classification: what type of classification problem? Single-class? Multi-class? Multi-label?")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What input features should we use?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What broad categories of features should we include?")," (e.g. user data, session data, location data, features about the content)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What are examples of some high-value features for this problem?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Are there important synergies between features that we should keep in mind? Should we engineer feature crosses for them?"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How to handle null values?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Should we drop records with nulls or impute the values?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What imputation values/methods should we use?")," (zero, median, mean, etc.)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How to handle imbalances in the data?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What are some common techniques for handling class imbalances?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What are the tradeoffs to downsampling majority classes vs. upsampling minority classes?")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Discuss feature transformations"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Would it be useful to apply any transformations to our input features? Why?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What are some common feature transformations? What are the situations when you might choose one over another?")," (e.g. when might log scaling be preferable to min-max scaling?)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Should we perform any feature selection or feature importance analyses?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What are the benefits of feature selection?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What are some common techniques for selecting features?")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What sort of train-test splits should we perform?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This discussion point could lead down a rabbit hole \u2013 lots of different questions you could be asked here and I have tried to include some big ones that come to mind."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What is the purpose of having a (holdout) test set?")," (i.e. why do we do a train-test split in the first place)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What is a validation set used for? How does it differ from a test set?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What are some common techniques used in model validation?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Define model bias. Define model variance. What is bias-variance tradeoff?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What is overfitting?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Can you overfit on a validation set?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"What is hyperparameter optimization?")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Are there data privacy concerns we should bear in mind?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Probably does not need an exhaustive discussion, Acknowledging that some data is PII (e.g. user data) and thus sensitive is probably sufficient"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data biases"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Again, probably does not warrant an exhaustive discussion \u2013 acknowledging the potential presence of (social) biases in the dataset and that the model could learn to reinforce these biases is probably sufficient")))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://huyenchip.com/ml-interviews-book/"},"Huyen Chip's Machine Learning Systems Design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.mle-interviews.com/ml-design-template"},"ML Design Template"))))}c.isMDXComponent=!0},9633:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/generic-ml-system-diagram-6f3e09f0105e816104cdabe3ef720775.png"}}]);