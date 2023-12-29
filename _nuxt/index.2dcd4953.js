import{g as vt,i as St,h as gn,j as hn,k as Ut,_ as nn,o as R,c as G,a as w,F as At,r as Mt,f as Kt,b as _t,u as xt,t as Tt,d as yn,l as Qt,p as bn,e as vn}from"./entry.2627fc9e.js";import Sn from"./ContentDoc.8959fc6f.js";import{q as Jt}from"./query.8b9f941f.js";import{f as Xt}from"./formatDate.22b5c287.js";import"./vue.f36acd1f.dcf0e8aa.js";import"./ContentRenderer.8e8aa346.js";import"./ContentRendererMarkdown.vue.d42c765a.js";import"./index.13aa9e49.js";import"./preview.35702431.js";import"./ContentQuery.fdcb37dc.js";import"./asyncData.d107ac93.js";function _n(t){return Object.prototype.toString.call(t)==="[object Object]"}function Yt(t){return _n(t)||Array.isArray(t)}function xn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ft(t,n){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==o?!1:e.every(s=>{const a=t[s],c=n[s];return typeof a=="function"?`${a}`==`${c}`:!Yt(a)||!Yt(c)?a===c:Ft(a,c)})}function Zt(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function In(t,n){if(t.length!==n.length)return!1;const e=Zt(t),r=Zt(n);return e.every((i,o)=>{const s=r[o];return Ft(i,s)})}function Nt(t){return typeof t=="number"}function kt(t){return typeof t=="string"}function jt(t){return typeof t=="boolean"}function Wt(t){return Object.prototype.toString.call(t)==="[object Object]"}function k(t){return Math.abs(t)}function Ct(t){return Math.sign(t)}function It(t,n){return k(t-n)}function En(t,n){if(t===0||n===0||k(t)<=k(n))return 0;const e=It(k(t),k(n));return k(e/t)}function pt(t){return mt(t).map(Number)}function $(t){return t[ht(t)]}function ht(t){return Math.max(0,t.length-1)}function Pt(t,n){return n===ht(t)}function tn(t,n=0){return Array.from(Array(t),(e,r)=>n+r)}function mt(t){return Object.keys(t)}function en(t,n){return[t,n].reduce((e,r)=>(mt(r).forEach(i=>{const o=e[i],s=r[i],a=Wt(o)&&Wt(s);e[i]=a?en(o,s):s}),e),{})}function on(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Dn(t,n){const e={start:r,center:i,end:o};function r(){return 0}function i(c){return o(c)/2}function o(c){return n-c}function s(c,l){return kt(t)?e[t](c):t(n,c,l)}return{measure:s}}function wn(t,n){const e=t==="y"?"y":"x",r=t==="y"?"x":"y",i=a(),o=c();function s(m){const{width:u,height:d}=m;return e==="x"?u:d}function a(){return e==="y"?"top":n==="rtl"?"right":"left"}function c(){return e==="y"?"bottom":n==="rtl"?"left":"right"}return{scroll:e,cross:r,startEdge:i,endEdge:o,measureSize:s}}function ot(t=0,n=0){const e=k(t-n);function r(l){return l<t}function i(l){return l>n}function o(l){return r(l)||i(l)}function s(l){return o(l)?r(l)?t:n:l}function a(l){return e?l-e*Math.ceil((l-n)/e):l}return{length:e,max:n,min:t,constrain:s,reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:a}}function sn(t,n,e){const{constrain:r}=ot(0,t),i=t+1;let o=s(n);function s(d){return e?k((i+d)%i):r(d)}function a(){return o}function c(d){return o=s(d),u}function l(d){return m().set(a()+d)}function m(){return sn(t,a(),e)}const u={get:a,set:c,add:l,clone:m};return u}function Ln(t){const n=t==="rtl"?-1:1;function e(i){return i*n}return{apply:e}}function gt(){let t=[];function n(i,o,s,a={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(o,s,a),c=()=>i.removeEventListener(o,s,a);else{const l=i;l.addListener(s),c=()=>l.removeListener(s)}return t.push(c),r}function e(){t=t.filter(i=>i())}const r={add:n,clear:e};return r}function On(t,n,e,r,i,o,s,a,c,l,m,u,d,y,g,p,b,v,h,f){const{cross:D}=t,x=["INPUT","SELECT","TEXTAREA"],M={passive:!1},N=gt(),_=gt(),I=ot(50,225).constrain(g.measure(20)),O={mouse:300,touch:400},F={mouse:500,touch:600},T=p?43:25;let V=!1,z=0,J=0,B=!1,X=!1,Y=!1,H=!1;function at(S){if(!f)return;function E(A){(jt(f)||f(S,A))&&lt(A)}const L=e;N.add(L,"dragstart",A=>A.preventDefault(),M).add(L,"touchmove",()=>{},M).add(L,"touchend",()=>{}).add(L,"touchstart",E).add(L,"mousedown",E).add(L,"touchcancel",j).add(L,"contextmenu",j).add(L,"click",K,!0)}function ut(){N.clear(),_.clear()}function Z(){const S=H?r:e;_.add(S,"touchmove",rt,M).add(S,"touchend",j).add(S,"mousemove",rt,M).add(S,"mouseup",j)}function q(S){const E=S.nodeName||"";return x.includes(E)}function st(){return(p?F:O)[H?"mouse":"touch"]}function U(S,E){const L=d.add(Ct(S)*-1),A=u.byDistance(S,!p).distance;return p||k(S)<I?A:v&&E?A*.5:u.byIndex(L.get(),0).distance}function lt(S){const E=on(S,i);H=E,!(E&&S.button!==0)&&(q(S.target)||(Y=p&&E&&!S.buttons&&V,V=It(o.get(),a.get())>=2,B=!0,s.pointerDown(S),m.useFriction(0).useDuration(0),o.set(a),Z(),z=s.readPoint(S),J=s.readPoint(S,D),y.emit("pointerDown")))}function rt(S){const E=s.readPoint(S),L=s.readPoint(S,D),A=It(E,z),C=It(L,J);if(!X&&!H&&(!S.cancelable||(X=A>C,!X)))return j(S);const P=s.pointerMove(S);A>b&&(Y=!0),m.useFriction(.3).useDuration(1),c.start(),o.add(n.apply(P)),S.preventDefault()}function j(S){const L=u.byDistance(0,!1).index!==d.get(),A=s.pointerUp(S)*st(),C=U(n.apply(A),L),P=En(A,C),W=T-10*P,tt=h+P/50;X=!1,B=!1,_.clear(),m.useDuration(W).useFriction(tt),l.distance(C,!p),H=!1,y.emit("pointerUp")}function K(S){Y&&(S.stopPropagation(),S.preventDefault())}function Q(){return B}return{init:at,pointerDown:Q,destroy:ut}}function Tn(t,n){let r,i;function o(u){return u.timeStamp}function s(u,d){const g=`client${(d||t.scroll)==="x"?"X":"Y"}`;return(on(u,n)?u:u.touches[0])[g]}function a(u){return r=u,i=u,s(u)}function c(u){const d=s(u)-s(i),y=o(u)-o(r)>170;return i=u,y&&(r=u),d}function l(u){if(!r||!i)return 0;const d=s(i)-s(r),y=o(u)-o(r),g=o(u)-o(i)>170,p=d/y;return y&&!g&&k(p)>.1?p:0}return{pointerDown:a,pointerMove:c,pointerUp:l,readPoint:s}}function An(){function t(e){const{offsetTop:r,offsetLeft:i,offsetWidth:o,offsetHeight:s}=e;return{top:r,right:i+o,bottom:r+s,left:i,width:o,height:s}}return{measure:t}}function Mn(t){function n(r){return t*(r/100)}return{measure:n}}function kn(t,n,e,r,i,o,s){let a,c,l=[],m=!1;function u(p){return i.measureSize(s.measure(p))}function d(p){if(!o)return;c=u(t),l=r.map(u);function b(h){for(const f of h){const D=f.target===t,x=r.indexOf(f.target),M=D?c:l[x],N=u(D?t:r[x]);if(k(N-M)>=.5){e.requestAnimationFrame(()=>{p.reInit(),n.emit("resize")});break}}}a=new ResizeObserver(h=>{m||(jt(o)||o(p,h))&&b(h)}),[t].concat(r).forEach(h=>a.observe(h))}function y(){a&&a.disconnect(),m=!0}return{init:d,destroy:y}}function Fn(t,n,e,r,i){let o=0,s=0,a=r,c=i,l=t.get(),m=0;function u(){const x=e.get()-t.get(),M=!a;let N=0;return M?(o=0,t.set(e),N=x):(o+=x/a,o*=c,l+=o,t.add(o),N=l-m),s=Ct(N),m=l,D}function d(){const x=e.get()-n.get();return k(x)<.001}function y(){return a}function g(){return s}function p(){return o}function b(){return h(r)}function v(){return f(i)}function h(x){return a=x,D}function f(x){return c=x,D}const D={direction:g,duration:y,velocity:p,seek:u,settled:d,useBaseFriction:v,useBaseDuration:b,useFriction:f,useDuration:h};return D}function Nn(t,n,e,r,i){const o=i.measure(10),s=i.measure(50),a=ot(.1,.99);let c=!1;function l(){return!(c||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function m(y){if(!l())return;const g=t.reachedMin(n.get())?"min":"max",p=k(t[g]-n.get()),b=e.get()-n.get(),v=a.constrain(p/s);e.subtract(b*v),!y&&k(b)<o&&(e.set(t.constrain(e.get())),r.useDuration(25).useBaseFriction())}function u(y){c=!y}return{constrain:m,toggleActive:u}}function jn(t,n,e,r,i){const o=ot(-n+t,0),s=m(),a=l(),c=u();function l(){const y=s[0],g=$(s),p=s.lastIndexOf(y),b=s.indexOf(g)+1;return ot(p,b)}function m(){return e.map((y,g)=>{const p=!g,b=Pt(e,g);return p?o.max:b?o.min:o.constrain(y)}).map(y=>parseFloat(y.toFixed(3)))}function u(){if(n<=t+i)return[o.max];if(r==="keepSnaps")return s;const{min:y,max:g}=a;return s.slice(y,g)}return{snapsContained:c,scrollContainLimit:a}}function Cn(t,n,e){const r=n[0],i=e?r-t:$(n);return{limit:ot(i,r)}}function Pn(t,n,e,r){const o=n.min+.1,s=n.max+.1,{reachedMin:a,reachedMax:c}=ot(o,s);function l(d){return d===1?c(e.get()):d===-1?a(e.get()):!1}function m(d){if(!l(d))return;const y=t*(d*-1);r.forEach(g=>g.add(y))}return{loop:m}}function Vn(t){const{max:n,length:e}=t;function r(o){const s=o-n;return e?s/-e:0}return{get:r}}function Bn(t,n,e,r,i){const{startEdge:o,endEdge:s}=t,{groupSlides:a}=i,c=u().map(n.measure),l=d(),m=y();function u(){return a(r).map(p=>$(p)[s]-p[0][o]).map(k)}function d(){return r.map(p=>e[o]-p[o]).map(p=>-k(p))}function y(){return a(l).map(p=>p[0]).map((p,b)=>p+c[b])}return{snaps:l,snapsAligned:m}}function zn(t,n,e,r,i,o){const{groupSlides:s}=i,{min:a,max:c}=r,l=m();function m(){const d=s(o),y=!t||n==="keepSnaps";return e.length===1?[o]:y?d:d.slice(a,c).map((g,p,b)=>{const v=!p,h=Pt(b,p);if(v){const f=$(b[0])+1;return tn(f)}if(h){const f=ht(o)-$(b)[0]+1;return tn(f,$(b)[0])}return g})}return{slideRegistry:l}}function $n(t,n,e,r,i){const{reachedAny:o,removeOffset:s,constrain:a}=r;function c(g){return g.concat().sort((p,b)=>k(p)-k(b))[0]}function l(g){const p=t?s(g):a(g),b=n.map(h=>h-p).map(h=>m(h,0)).map((h,f)=>({diff:h,index:f})).sort((h,f)=>k(h.diff)-k(f.diff)),{index:v}=b[0];return{index:v,distance:p}}function m(g,p){const b=[g,g+e,g-e];if(!t)return b[0];if(!p)return c(b);const v=b.filter(h=>Ct(h)===p);return v.length?c(v):$(b)-e}function u(g,p){const b=n[g]-i.get(),v=m(b,p);return{index:g,distance:v}}function d(g,p){const b=i.get()+g,{index:v,distance:h}=l(b),f=!t&&o(b);if(!p||f)return{index:v,distance:g};const D=n[v]-h,x=g+m(D,0);return{index:v,distance:x}}return{byDistance:d,byIndex:u,shortcut:m}}function Hn(t,n,e,r,i,o){function s(m){const u=m.distance,d=m.index!==n.get();i.add(u),u&&t.start(),d&&(e.set(n.get()),n.set(m.index),o.emit("select"))}function a(m,u){const d=r.byDistance(m,u);s(d)}function c(m,u){const d=n.clone().set(m),y=r.byIndex(d.get(),u);s(y)}return{distance:a,index:c}}function Rn(t,n,e,r,i,o){let s=0;function a(){o.add(document,"keydown",c,!1),n.forEach(l)}function c(u){u.code==="Tab"&&(s=new Date().getTime())}function l(u){const d=()=>{if(new Date().getTime()-s>10)return;t.scrollLeft=0;const p=n.indexOf(u),b=e.findIndex(v=>v.includes(p));Nt(b)&&(i.useDuration(0),r.index(b,0))};o.add(u,"focus",d,{passive:!0,capture:!0})}return{init:a}}function Et(t){let n=t;function e(){return n}function r(c){n=s(c)}function i(c){n+=s(c)}function o(c){n-=s(c)}function s(c){return Nt(c)?c:c.get()}return{get:e,set:r,add:i,subtract:o}}function rn(t,n,e){const r=t.scroll==="x"?s:a,i=e.style;let o=!1;function s(d){return`translate3d(${d}px,0px,0px)`}function a(d){return`translate3d(0px,${d}px,0px)`}function c(d){o||(i.transform=r(n.apply(d)))}function l(d){o=!d}function m(){o||(i.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:m,to:c,toggleActive:l}}function Gn(t,n,e,r,i,o,s,a,c,l){const u=pt(o),d=pt(o).reverse(),y=h().concat(f());function g(_,I){return _.reduce((O,F)=>O-o[F],I)}function p(_,I){return _.reduce((O,F)=>g(O,I)>0?O.concat([F]):O,[])}function b(_){return s.map((I,O)=>({start:I-i[O]+.5+_,end:I+e-.5+_}))}function v(_,I,O){const F=b(I);return _.map(T=>{const V=O?0:-r,z=O?r:0,J=O?"end":"start",B=F[T][J];return{index:T,loopPoint:B,slideLocation:Et(-1),translate:rn(t,n,l[T]),target:()=>c.get()>B?V:z}})}function h(){const _=a[0],I=p(d,_);return v(I,r,!1)}function f(){const _=e-a[0]-1,I=p(u,_);return v(I,-r,!0)}function D(){return y.every(({index:_})=>{const I=u.filter(O=>O!==_);return g(I,e)<=.1})}function x(){y.forEach(_=>{const{target:I,translate:O,slideLocation:F}=_,T=I();T!==F.get()&&(O.to(T),F.set(T))})}function M(){y.forEach(_=>_.translate.clear())}return{canLoop:D,clear:M,loop:x,loopPoints:y}}function qn(t,n,e){let r,i=!1;function o(c){if(!e)return;function l(m){for(const u of m)if(u.type==="childList"){c.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(m=>{i||(jt(e)||e(c,m))&&l(m)}),r.observe(t,{childList:!0})}function s(){r&&r.disconnect(),i=!0}return{init:o,destroy:s}}function Un(t,n,e,r){const i={};let o=null,s=null,a,c=!1;function l(){a=new IntersectionObserver(g=>{c||(g.forEach(p=>{const b=n.indexOf(p.target);i[b]=p}),o=null,s=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(g=>a.observe(g))}function m(){a&&a.disconnect(),c=!0}function u(g){return mt(i).reduce((p,b)=>{const v=parseInt(b),{isIntersecting:h}=i[v];return(g&&h||!g&&!h)&&p.push(v),p},[])}function d(g=!0){if(g&&o)return o;if(!g&&s)return s;const p=u(g);return g&&(o=p),g||(s=p),p}return{init:l,destroy:m,get:d}}function Kn(t,n,e,r,i,o){const{measureSize:s,startEdge:a,endEdge:c}=t,l=e[0]&&i,m=g(),u=p(),d=e.map(s),y=b();function g(){if(!l)return 0;const h=e[0];return k(n[a]-h[a])}function p(){if(!l)return 0;const h=o.getComputedStyle($(r));return parseFloat(h.getPropertyValue(`margin-${c}`))}function b(){return e.map((h,f,D)=>{const x=!f,M=Pt(D,f);return x?d[f]+m:M?d[f]+u:D[f+1][a]-h[a]}).map(k)}return{slideSizes:d,slideSizesWithGaps:y,startGap:m,endGap:u}}function Qn(t,n,e,r,i,o,s,a,c,l){const{startEdge:m,endEdge:u}=t,d=Nt(r);function y(v,h){return pt(v).filter(f=>f%h===0).map(f=>v.slice(f,f+h))}function g(v){return v.length?pt(v).reduce((h,f)=>{const D=$(h)||0,x=D===0,M=f===ht(v),N=o[m]-s[D][m],_=o[m]-s[f][u],I=!i&&x?n.apply(a):0,O=!i&&M?n.apply(c):0;return k(_-O-(N+I))>e+l&&h.push(f),M&&h.push(v.length),h},[]).map((h,f,D)=>{const x=Math.max(D[f-1]||0);return v.slice(x,h)}):[]}function p(v){return d?y(v,r):g(v)}return{groupSlides:p}}function Jn(t,n,e,r,i,o,s,a){const{align:c,axis:l,direction:m,startIndex:u,loop:d,duration:y,dragFree:g,dragThreshold:p,inViewThreshold:b,slidesToScroll:v,skipSnaps:h,containScroll:f,watchResize:D,watchSlides:x,watchDrag:M}=o,N=2,_=An(),I=_.measure(n),O=e.map(_.measure),F=Ln(m),T=wn(l,m),V=T.measureSize(I),z=Mn(V),J=Dn(c,V),B=!d&&!!f,X=d||!!f,{slideSizes:Y,slideSizesWithGaps:H,startGap:at,endGap:ut}=Kn(T,I,O,e,X,i),Z=Qn(T,F,V,v,d,I,O,at,ut,N),{snaps:q,snapsAligned:st}=Bn(T,J,I,O,Z),U=-$(q)+$(H),{snapsContained:lt,scrollContainLimit:rt}=jn(V,U,st,f,N),j=B?lt:st,{limit:K}=Cn(U,j,d),Q=sn(ht(j),u,d),ft=Q.clone(),S=pt(e),E=({dragHandler:et,scrollBody:Lt,scrollBounds:Ot,options:{loop:bt}})=>{bt||Ot.constrain(et.pointerDown()),Lt.seek()},L=({scrollBody:et,translate:Lt,location:Ot,offsetLocation:bt,scrollLooper:un,slideLooper:ln,dragHandler:fn,animation:dn,eventHandler:Rt,options:{loop:pn}},mn)=>{const Gt=et.velocity(),qt=et.settled();qt&&!fn.pointerDown()&&(dn.stop(),Rt.emit("settle")),qt||Rt.emit("scroll"),bt.set(Ot.get()-Gt+Gt*mn),pn&&(un.loop(et.direction()),ln.loop()),Lt.to(bt.get())},A={start:()=>a.start(dt),stop:()=>a.stop(dt),update:()=>E(dt),render:et=>L(dt,et)},C=.68,P=j[Q.get()],W=Et(P),tt=Et(P),nt=Et(P),yt=Fn(W,tt,nt,y,C),Dt=$n(d,j,U,K,nt),wt=Hn(A,Q,ft,Dt,nt,s),zt=Vn(K),$t=gt(),cn=Un(n,e,s,b),{slideRegistry:Ht}=zn(B,f,j,rt,Z,S),an=Rn(t,e,Ht,wt,yt,$t),dt={ownerDocument:r,ownerWindow:i,eventHandler:s,containerRect:I,slideRects:O,animation:A,axis:T,direction:F,dragHandler:On(T,F,t,r,i,nt,Tn(T,i),W,A,wt,yt,Dt,Q,s,z,g,p,h,C,M),eventStore:$t,percentOfView:z,index:Q,indexPrevious:ft,limit:K,location:W,offsetLocation:tt,options:o,resizeHandler:kn(n,s,i,e,T,D,_),scrollBody:yt,scrollBounds:Nn(K,W,nt,yt,z),scrollLooper:Pn(U,K,tt,[W,tt,nt]),scrollProgress:zt,scrollSnapList:j.map(zt.get),scrollSnaps:j,scrollTarget:Dt,scrollTo:wt,slideLooper:Gn(T,F,V,U,Y,H,q,j,tt,e),slideFocus:an,slidesHandler:qn(n,s,x),slidesInView:cn,slideIndexes:S,slideRegistry:Ht,slidesToScroll:Z,target:nt,translate:rn(T,F,n)};return dt}function Xn(t){const n=16.666666666666668;let e=[],r=null,i=0,o=0;function s(u){r||(r=u);const d=u-r;for(r=u,i+=d;i>=n;)e.forEach(({animation:g})=>g.update()),i-=n;const y=k(i/n);e.forEach(({animation:g})=>g.render(y)),o&&t.requestAnimationFrame(s)}function a(u){e.includes(u)||e.push(u),!o&&(o=t.requestAnimationFrame(s))}function c(u){e=e.filter(d=>d!==u),!e.length&&(t.cancelAnimationFrame(o),r=null,i=0,o=0)}function l(){r=null,i=0}return{start:a,stop:c,reset:l,window:t}}function Yn(){const t={};let n;function e(c){n=c}function r(c){return t[c]||[]}function i(c){return r(c).forEach(l=>l(n,c)),a}function o(c,l){return t[c]=r(c).concat([l]),a}function s(c,l){return t[c]=r(c).filter(m=>m!==l),a}const a={init:e,emit:i,off:s,on:o};return a}const Zn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Wn(t){function n(o,s){return en(o,s||{})}function e(o){const s=o.breakpoints||{},a=mt(s).filter(c=>t.matchMedia(c).matches).map(c=>s[c]).reduce((c,l)=>n(c,l),{});return n(o,a)}function r(o){return o.map(s=>mt(s.breakpoints||{})).reduce((s,a)=>s.concat(a),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:r}}function te(t){let n=[];function e(o,s){return n=s.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),n.forEach(a=>a.init(o,t)),s.reduce((a,c)=>Object.assign(a,{[c.name]:c}),{})}function r(){n=n.filter(o=>o.destroy())}return{init:e,destroy:r}}function it(t,n,e){const r=t.ownerDocument,i=r.defaultView,o=Wn(i),s=te(o),a=gt(),c=gt(),l=Yn(),{animationRealms:m}=it,{mergeOptions:u,optionsAtMedia:d,optionsMediaQueries:y}=o,{on:g,off:p,emit:b}=l,v=V;let h=!1,f,D=u(Zn,it.globalOptions),x=u(D),M=[],N,_,I;function O(){const{container:E,slides:L}=x;_=(kt(E)?t.querySelector(E):E)||t.children[0];const C=kt(L)?_.querySelectorAll(L):L;I=[].slice.call(C||_.children)}function F(E,L){const A=Jn(t,_,I,r,i,E,l,L);if(E.loop&&!A.slideLooper.canLoop()){const C=Object.assign({},E,{loop:!1});return F(C,L)}return A}function T(E,L){if(h)return;const A=m.find(P=>P.window===i),C=A||Xn(i);A||m.push(C),D=u(D,E),x=d(D),M=L||M,O(),f=F(x,C),y([D,...M.map(({options:P})=>P)]).forEach(P=>a.add(P,"change",V)),x.active&&(f.translate.to(f.location.get()),f.slidesInView.init(),f.slideFocus.init(),f.eventHandler.init(S),f.resizeHandler.init(S),f.slidesHandler.init(S),c.add(r,"visibilitychange",()=>{r.hidden&&C.reset()}),f.options.loop&&f.slideLooper.loop(),_.offsetParent&&I.length&&f.dragHandler.init(S),N=s.init(S,M))}function V(E,L){const A=q();z(),T(u({startIndex:A},E),L),l.emit("reInit")}function z(){f.dragHandler.destroy(),f.animation.stop(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),s.destroy(),a.clear(),c.clear()}function J(){h||(h=!0,a.clear(),z(),l.emit("destroy"))}function B(E,L,A){!x.active||h||(f.scrollBody.useBaseFriction().useDuration(L===!0?0:x.duration),f.scrollTo.index(E,A||0))}function X(E){const L=f.index.add(1).get();B(L,E,-1)}function Y(E){const L=f.index.add(-1).get();B(L,E,1)}function H(){return f.index.add(1).get()!==q()}function at(){return f.index.add(-1).get()!==q()}function ut(){return f.scrollSnapList}function Z(){return f.scrollProgress.get(f.location.get())}function q(){return f.index.get()}function st(){return f.indexPrevious.get()}function U(){return f.slidesInView.get()}function lt(){return f.slidesInView.get(!1)}function rt(){return N}function j(){return f}function K(){return t}function Q(){return _}function ft(){return I}const S={canScrollNext:H,canScrollPrev:at,containerNode:Q,internalEngine:j,destroy:J,off:p,on:g,emit:b,plugins:rt,previousScrollSnap:st,reInit:v,rootNode:K,scrollNext:X,scrollPrev:Y,scrollProgress:Z,scrollSnapList:ut,scrollTo:B,selectedScrollSnap:q,slideNodes:ft,slidesInView:U,slidesNotInView:lt};return T(n,e),setTimeout(()=>l.emit("init"),0),S}it.animationRealms=[];it.globalOptions=void 0;function Vt(t={},n=[]){const e=vt(St(t)?t.value:t),r=vt(St(n)?n.value:n),i=vt(),o=vt();function s(){o.value&&o.value.reInit(e.value,r.value)}return gn(()=>{!xn()||!i.value||(it.globalOptions=Vt.globalOptions,o.value=it(i.value,e.value,r.value))}),hn(()=>{o.value&&o.value.destroy()}),St(t)&&Ut(t,a=>{Ft(e.value,a)||(e.value=a,s())}),St(n)&&Ut(n,a=>{In(r.value,a)||(r.value=a,s())}),[i,o]}Vt.globalOptions=void 0;const ne={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function Bt(t={}){let n,e,r,i=!1,o=!0,s=!1,a=0,c=0;function l(f,D){e=f;const{mergeOptions:x,optionsAtMedia:M}=D,N=x(ne,Bt.globalOptions),_=x(N,t);if(n=M(_),e.scrollSnapList().length<=1)return;s=n.jump,r=!1;const{eventStore:I,ownerDocument:O}=e.internalEngine(),F=e.rootNode(),T=n.rootNode&&n.rootNode(F)||F;e.on("pointerDown",d),n.stopOnInteraction||e.on("pointerUp",u),n.stopOnMouseEnter&&(I.add(T,"mouseenter",()=>{o=!1,d()}),n.stopOnInteraction||I.add(T,"mouseleave",()=>{o=!0,u()})),n.stopOnFocusIn&&(I.add(T,"focusin",d),n.stopOnInteraction||I.add(T,"focusout",u)),I.add(O,"visibilitychange",()=>{if(O.visibilityState==="hidden")return o=i,d();o&&u()}),n.playOnInit&&e.on("init",u).on("reInit",u)}function m(){r=!0,i=!1,e.off("init",u).off("reInit",u),e.off("pointerDown",d),n.stopOnInteraction||e.off("pointerUp",u),d(),cancelAnimationFrame(a),a=0}function u(){if(r||!o)return;i||e.emit("autoplay:play");const{ownerWindow:f}=e.internalEngine();f.clearInterval(c),c=f.setInterval(v,n.delay),i=!0}function d(){if(r)return;i&&e.emit("autoplay:stop");const{ownerWindow:f}=e.internalEngine();f.clearInterval(c),c=0,i=!1}function y(f){typeof f<"u"&&(s=f),o=!0,u()}function g(){i&&d()}function p(){i&&y()}function b(){return i}function v(){a=requestAnimationFrame(()=>{const{index:f}=e.internalEngine(),D=f.clone().add(1).get(),x=e.scrollSnapList().length-1;n.stopOnLastSnap&&D===x&&d(),e.canScrollNext()?e.scrollNext(s):e.scrollTo(0,s)})}return{name:"autoplay",options:t,init:l,destroy:m,play:y,stop:g,reset:p,isPlaying:b}}Bt.globalOptions=void 0;const ee={setup(){const[t]=Vt({loop:!0},[Bt({delay:6e3})]);return{emblaNode:t}},data(){return{items:[{img:"/images/event230115seniorIdeathon.jpg"},{img:"/images/project/project_shindan.jpg"},{img:"/images/project/project_table.jpg"},{img:"/images/project/project_kyouzai.jpg"}]}}},oe={class:"embla",ref:"emblaNode"},se={class:"embla__container"},re=["src"];function ie(t,n,e,r,i,o){return R(),G("div",oe,[w("div",se,[(R(!0),G(At,null,Mt(i.items,s=>(R(),G("div",{class:"embla__slide",key:s.id},[w("img",{src:s.img,alt:"alt"},null,8,re)]))),128))])],512)}const ce=nn(ee,[["render",ie],["__scopeId","data-v-b2805440"]]),ae=""+globalThis.__publicAssetsURL("images/iconFb.png");const ct=t=>(bn("data-v-d8b985d5"),t=t(),vn(),t),ue={class:"nuxt-content"},le=ct(()=>w("h2",{id:"news"},"News",-1)),fe={class:"news-date"},de={key:0,class:"event-date"},pe=ct(()=>w("span",{class:"event-date-text"}," 開催日 ",-1)),me=["href"],ge={key:0},he=ct(()=>w("span",null,[w("a",{href:"/news"},"more...")],-1)),ye={id:"project",class:"nuxt-content"},be={class:"nuxt-content"},ve=ct(()=>w("h2",{id:"event"},"Event",-1)),Se=["href"],_e=["src"],xe=ct(()=>w("span",null,[w("a",{href:"/events"},"more...")],-1)),Ie={id:"message",class:"nuxt-content"},Ee={id:"vision",class:"nuxt-content"},De=ct(()=>w("article",null,[w("div",{class:"nuxt-content"},[w("h2",null,"Contact"),w("ul",{class:"footer__list"},[w("li",null," シビックテックさいたま世話人：太田一穂、クワハラシズカ、藤田史織、古川尚史 "),w("li",null,"email：civictech.saitama@gmail.com"),w("li",null,[w("a",{href:"https://www.facebook.com/CivicTechSaitamaCity"},[w("img",{src:ae,alt:""})])])])])],-1)),we={__name:"index",async setup(t){let n,e;const r=([n,e]=Kt(()=>Jt("/data").limit(10).sort({eventDate:-1}).sort({date:-1}).where({date:{$gt:new Date(2020)}}).find()),n=await n,e(),n),i=([n,e]=Kt(()=>Jt("/data").limit(9).sort({eventDate:-1}).where({eventDate:{$gt:new Date(2020)}}).find()),n=await n,e(),n);return(o,s)=>{const a=ce,c=Sn;return R(),G("div",null,[_t(a),w("article",null,[w("div",ue,[le,w("ul",null,[(R(!0),G(At,null,Mt(xt(r),(l,m)=>(R(),G("li",{key:m},[w("span",fe,Tt(("formatDate"in o?o.formatDate:xt(Xt))(l.date)),1),l.eventDate?(R(),G("div",de,[pe,yn(" "+Tt(("formatDate"in o?o.formatDate:xt(Xt))(l.eventDate)),1)])):Qt("",!0),w("a",{class:"news-link",href:l.link},[l.link?(R(),G("span",ge,Tt(l.title),1)):Qt("",!0)],8,me)]))),128))]),he])]),w("article",null,[w("div",ye,[_t(c,{head:!1,path:"projects"})])]),w("article",null,[w("div",be,[ve,w("ul",null,[(R(!0),G(At,null,Mt(xt(i),(l,m)=>(R(),G("li",{key:m},[w("a",{href:l.link},[w("img",{src:l.thumb,alt:""},null,8,_e)],8,Se)]))),128))]),xe])]),w("article",null,[w("div",Ie,[_t(c,{head:!1,path:"message"})])]),w("article",null,[w("div",Ee,[_t(c,{head:!1,path:"vision"})])]),De])}}},Ve=nn(we,[["__scopeId","data-v-d8b985d5"]]);export{Ve as default};
