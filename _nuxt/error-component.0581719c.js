import{_ as n}from"./entry.f7ea57f0.js";import{K as o,a2 as f,a3 as g,aa as E,ab as k,H as s}from"./app.config.a75dd520.js";const P={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,u=t.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),p=void 0,_=o(()=>n(()=>import("./error-404.f48e1a55.js"),["./error-404.f48e1a55.js","./app.config.a75dd520.js","./composables.05aac67a.js","./entry.f7ea57f0.js","./error-404.23f2309d.css"],import.meta.url).then(e=>e.default||e)),l=o(()=>n(()=>import("./error-500.96dce6ae.js"),["./error-500.96dce6ae.js","./composables.05aac67a.js","./app.config.a75dd520.js","./entry.f7ea57f0.js","./error-500.aa16ed4d.css"],import.meta.url).then(e=>e.default||e)),m=a?_:l;return(e,d)=>(f(),g(s(m),E(k({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},b=P;export{b as default};
