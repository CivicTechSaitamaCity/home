function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./A7vhkLiy.js","./BH0GqBZd.js","./Dy9TJIqG.js","./zaF5OzUG.js","./BsYmvPZw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as m}from"./KsuMZFht.js";import{v,I as l,J as d,i as g,K as y,x as h,L as _,M as w,y as C,A as p}from"./BH0GqBZd.js";import{h as f,u as x}from"./zaF5OzUG.js";import{q as P,w as c,e as $,s as N,j as E,u as T}from"./Dy9TJIqG.js";import{_ as j}from"./BG0JOSZX.js";const S=async t=>{const{content:e}=v().public;typeof(t==null?void 0:t.params)!="function"&&(t=P(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${$(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(N())return(await l(()=>import("./A7vhkLiy.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:E(n),previewToken:x().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},b="$s";function A(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=b+n,r=y(),i=d(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(g(s))return r.payload.state[a]=s,s;i.value=s}return i}const D=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=_(t),n=w(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&A("dd-navigation").value){const{navigation:a}=T();return{navigation:a}}const{data:o}=await m(`content-navigation-${f(n.value)}`,()=>S(n.value));return{navigation:o}},render(t){const e=C(),{navigation:n}=t,o=i=>p(j,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),Q=D;export{Q as default};
