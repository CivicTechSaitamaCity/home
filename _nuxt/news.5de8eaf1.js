import{q as l}from"./query.23ce0ae9.js";import{f as p}from"./formatDate.91973424.js";import{J as u,N as m,o as a,E as o,F as e,O as f,P as h,u as _,S as w,U as c,V as y,Q as k,R as v}from"./entry.8440104f.js";import"./utils.f0f69b85.js";const x=t=>(k("data-v-d17e08c6"),t=t(),v(),t),N={id:"news",class:"nuxt-content"},S=x(()=>e("h2",null,"News",-1)),g=["href"],D={key:0},I={__name:"news",async setup(t){let s,r;const d=([s,r]=m(()=>l("/data").sort({eventDate:-1}).sort({date:-1}).where({date:{$gt:new Date(2020)}}).find()),s=await s,r(),s);return(V,B)=>(a(),o("div",null,[e("article",null,[e("div",N,[S,e("ul",null,[(a(!0),o(f,null,h(_(d),(n,i)=>(a(),o("li",{key:i},[w(c(_(p)(n.date))+" "+c(n.title)+" ",1),e("a",{href:n.link},[n.link?(a(),o("span",D,"link")):y("",!0)],8,g)]))),128))])])])]))}},A=u(I,[["__scopeId","data-v-d17e08c6"]]);export{A as default};
