import{q as l}from"./query.66be1b5f.js";import{k as d,Q as i,l as a,R as e,S as u,U as p,u as h,o as n,V as v,W as m}from"./entry.1f13a088.js";import"./utils.10777ed2.js";const f=t=>(v("data-v-35b22ada"),t=t(),m(),t),x={class:"nuxt-content"},y=f(()=>e("h2",{id:"event"},"Event",-1)),k=["href"],w=["src"],b={__name:"events",async setup(t){let s,o;const r=([s,o]=i(()=>l("/data").sort({eventDate:-1}).where({eventDate:{$gt:new Date(2020)}}).find()),s=await s,o(),s);return(g,I)=>(n(),a("div",null,[e("article",null,[e("div",x,[y,e("ul",null,[(n(!0),a(u,null,p(h(r),(_,c)=>(n(),a("li",{key:c},[e("a",{href:_.link},[e("img",{src:_.thumb,alt:""},null,8,w)],8,k)]))),128))])])])]))}},q=d(b,[["__scopeId","data-v-35b22ada"]]);export{q as default};
