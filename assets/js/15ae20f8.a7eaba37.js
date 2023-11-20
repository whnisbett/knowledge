"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[747],{3682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=a(5893),i=a(1151);const o={title:"Goodhart's Law"},n="Goodhart's Law",r={id:"mathematics/goodharts-law",title:"Goodhart's Law",description:'- Often cited as "When a measure becomes a target, it ceases to be a good measure"',source:"@site/docs/mathematics/goodharts-law.md",sourceDirName:"mathematics",slug:"/mathematics/goodharts-law",permalink:"/knowledge/mathematics/goodharts-law",draft:!1,unlisted:!1,editUrl:"https://github.com/whnisbett/knowledge/tree/main/docs/mathematics/goodharts-law.md",tags:[],version:"current",frontMatter:{title:"Goodhart's Law"},sidebar:"tutorialSidebar",previous:{title:"Fourier Transform",permalink:"/knowledge/mathematics/fourier-transform"},next:{title:"My Knowledge Wiki",permalink:"/knowledge/"}},h={},c=[{value:"Why does this happen?",id:"why-does-this-happen",level:2}];function l(e){const t={h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"goodharts-law",children:"Goodhart's Law"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Often cited as "When a measure becomes a target, it ceases to be a good measure"'}),"\n",(0,s.jsx)(t.li,{children:'How I interpret it: "When an evaluation metric becomes an explicit optimization target, it ceases to be a good evaluation metric"'}),"\n",(0,s.jsxs)(t.li,{children:["We often make the evaluation metric our optimization target because the true target is difficult to quantify.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For example, we often want to optimize sites to increase user engagement \u2013 CTR is one aspect of user engagement, but not the whole story. It is, however, very easy to quantify and so we tend to explicitly optimize for it. In ad tech, this can result in clickbait being shown rather than high-quality content."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"why-does-this-happen",children:"Why does this happen?"}),"\n",(0,s.jsx)(t.p,{children:"Why does optimizing for a good evaluation metric not also optimize the target? In short, this is because evaluation metrics quantify a subset of outcomes, and optimizing for some outcomes of a behavior is not equivalent to optimizing for the behavior itself. Here's a (common) hypothetical scenario to make this clear:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"We identify a desired behavior that we wish to stimulate and observe its outcomes."}),"\n",(0,s.jsx)(t.li,{children:"We notice a subset of those outcomes are well correlated with the desired behavior and easily quantifiable. This makes them good candidates for evaluation metrics"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"user_engagement_causal_mech_forward",src:a(967).Z+"",width:"979",height:"796"}),"\n3. To stoke the desired behavior, we implement a treatment to stimulate this subset of outcomes. This is effectively an attempt to invert the causal diagram and assert that positive subset of outcomes necessitates an improvement in the desired behavior. Unfortunately, causality rarely works this way."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:a(9489).Z+"",width:"592",height:"605"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"resources",children:"Resources"})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9489:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/user engagement casual diagram flipped-90e586df22b93b6951868254a06a4a53.png"},967:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/user_engagement_causal_mech_forward-706cb9eb5d1a039d7ee363275f1ecec1.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>n});var s=a(7294);const i={},o=s.createContext(i);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);