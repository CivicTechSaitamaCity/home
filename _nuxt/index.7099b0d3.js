import g from"./TopSlider.59589a9f.js";import k from"./ContentDoc.141208fb.js";import{q as m}from"./query.23ce0ae9.js";import{f as y}from"./formatDate.91973424.js";import{J as D,N as p,o as s,E as o,M as c,F as t,O as u,P as h,u as d,S as C,U as f,V as S,Q as N,R as b}from"./entry.8440104f.js";import"./TopSlider.vue_vue_type_style_index_0_scoped_19c0bbee_lang.ea65d6ef.js";import"./composables.1883dc4a.js";import"./ContentRenderer.d937ed74.js";import"./ContentRendererMarkdown.0a673030.js";import"./_commonjsHelpers.fed2a411.js";import"./ContentQuery.1601da0c.js";import"./asyncData.f884ed78.js";import"./utils.f0f69b85.js";const V=""+globalThis.__publicAssetsURL("images/iconFb.png");const a=i=>(N("data-v-288a2d12"),i=i(),b(),i),I={id:"news",class:"nuxt-content"},T=a(()=>t("h2",null,"News",-1)),B=["href"],E={key:0},F=a(()=>t("span",null,[t("a",{href:"/news"},"more...")],-1)),$={id:"project",class:"nuxt-content"},j={class:"nuxt-content"},q=a(()=>t("h2",{id:"event"},"Event",-1)),A=["href"],L=["src"],R=a(()=>t("span",null,[t("a",{href:"/events"},"more...")],-1)),U={id:"message",class:"nuxt-content"},J={id:"vision",class:"nuxt-content"},M=a(()=>t("article",null,[t("div",{class:"nuxt-content"},[t("h2",null,"Contact"),t("ul",{class:"footer__list"},[t("li",null," \u30B7\u30D3\u30C3\u30AF\u30C6\u30C3\u30AF\u3055\u3044\u305F\u307E\u4E16\u8A71\u4EBA\uFF1A\u592A\u7530\u4E00\u7A42\u3001\u30AF\u30EF\u30CF\u30E9\u30B7\u30BA\u30AB\u3001\u85E4\u7530\u53F2\u7E54 "),t("li",null,"email\uFF1Acivictech.saitama@gmail.com"),t("li",null,[t("a",{href:"https://www.facebook.com/CivicTechSaitamaCity"},[t("img",{src:V,alt:""})])])])])],-1)),O={__name:"index",async setup(i){let e,l;const v=([e,l]=p(()=>m("/data").limit(10).sort({eventDate:-1}).sort({date:-1}).where({date:{$gt:new Date(2020)}}).find()),e=await e,l(),e),x=([e,l]=p(()=>m("/data").limit(9).sort({eventDate:-1}).where({eventDate:{$gt:new Date(2020)}}).find()),e=await e,l(),e);return(P,Q)=>{const w=g,r=k;return s(),o("div",null,[c(w),t("article",null,[t("div",I,[T,t("ul",null,[(s(!0),o(u,null,h(d(v),(n,_)=>(s(),o("li",{key:_},[C(f(d(y)(n.date))+" "+f(n.title)+" ",1),t("a",{href:n.link},[n.link?(s(),o("span",E,"link")):S("",!0)],8,B)]))),128))]),F])]),t("article",null,[t("div",$,[c(r,{path:"projects"})])]),t("article",null,[t("div",j,[q,t("ul",null,[(s(!0),o(u,null,h(d(x),(n,_)=>(s(),o("li",{key:_},[t("a",{href:n.link},[t("img",{src:n.thumb,alt:""},null,8,L)],8,A)]))),128))]),R])]),t("article",null,[t("div",U,[c(r,{path:"message"})])]),t("article",null,[t("div",J,[c(r,{path:"vision"})])]),M])}}},at=D(O,[["__scopeId","data-v-288a2d12"]]);export{at as default};
