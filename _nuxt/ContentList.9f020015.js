import n from"./ContentQuery.1601da0c.js";import{e as c,f as h,i as u}from"./entry.8440104f.js";import"./asyncData.f884ed78.js";import"./query.23ce0ae9.js";import"./utils.f0f69b85.js";const q=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(f){const t=h(),{path:p,query:o}=f,m={...o||{},path:p||(o==null?void 0:o.path)||"/"},r=(e,a)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:a},null,2));return u(n,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:a,isPartial:d,...this.$attrs}):({data:e})=>r("default",e),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}});export{q as default};