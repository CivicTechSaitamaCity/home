import{q as l}from"./query.733e25c0.js";import{f as m}from"./formatDate.22b5c287.js";import{d as u}from"./entry.4c763082.js";import{an as f,am as o,ao as e,ap as h,aq as w,I as d,a1 as n,av as v,aw as c,ax as y,ar as k,as as x}from"./app.config.322dcdae.js";import"./cookie.416ef955.js";import"./query.c3f7607a.js";import"./utils.de584480.js";const D=t=>(k("data-v-d17e08c6"),t=t(),x(),t),I={id:"news",class:"nuxt-content"},g=D(()=>e("h2",null,"News",-1)),N=["href"],S={key:0},q={__name:"news",async setup(t){let a,r;const i=([a,r]=f(()=>l("/data").sort({eventDate:-1}).sort({date:-1}).where({date:{$gt:new Date(2020)}}).find()),a=await a,r(),a);return(_,B)=>(n(),o("div",null,[e("article",null,[e("div",I,[g,e("ul",null,[(n(!0),o(h,null,w(d(i),(s,p)=>(n(),o("li",{key:p},[v(c(("formatDate"in _?_.formatDate:d(m))(s.date))+" "+c(s.title)+" ",1),e("a",{href:s.link},[s.link?(n(),o("span",S,"link")):y("",!0)],8,N)]))),128))])])])]))}},$=u(q,[["__scopeId","data-v-d17e08c6"]]);export{$ as default};
