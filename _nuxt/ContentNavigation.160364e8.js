import{W as f,O as v,Z as d,M as l,ab as _,h as s}from"./app.config.322dcdae.js";import{u as g}from"./asyncData.9c453395.js";import{_ as h,a as y}from"./entry.4c763082.js";import{q as w,h as m,e as C,j as $}from"./query.733e25c0.js";import{_ as N}from"./nuxt-link.b21d5dea.js";import{u as P}from"./cookie.416ef955.js";import{w as c,s as j,u as T}from"./utils.de584480.js";/* empty css                      */import"./TopSlider.vue.b91d301c.js";import"./index.77402344.js";/* empty css                      */import"./query.c3f7607a.js";import"./_commonjsHelpers.725317a4.js";const b=async n=>{const{content:t}=f().public;typeof(n==null?void 0:n.params)!="function"&&(n=w(n));const a=n.params(),i=t.experimental.stripQueryParameters?c(`/navigation/${`${m(a)}.${t.integrity}`}/${C(a)}.json`):c(`/navigation/${m(a)}.${t.integrity}.json`);if(j())return(await h(()=>import("./client-db.2510498e.js"),["./client-db.2510498e.js","./app.config.322dcdae.js","./cookie.416ef955.js","./query.c3f7607a.js","./index.a6ef77ff.js","./_commonjsHelpers.725317a4.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(i,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:P("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const M=v({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=d(n),a=l(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&y("dd-navigation").value){const{navigation:e}=T();return{navigation:e}}const{data:i}=await g(`content-navigation-${m(a.value)}`,()=>b(a.value));return{navigation:i}},render(n){const t=_(),{navigation:a}=n,i=o=>s(N,{to:o._path},()=>o.title),e=(o,p)=>s("ul",p?{"data-level":p}:null,o.map(r=>r.children?s("li",null,[i(r),e(r.children,p+1)]):s("li",null,i(r)))),u=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):u(a)}});export{M as default};
