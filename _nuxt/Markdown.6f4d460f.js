import s from"./ContentSlot.5fb5c971.js";import{e as o,f,j as u,x as m}from"./entry.8440104f.js";import"./utils.f0f69b85.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=f(),r=u(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};