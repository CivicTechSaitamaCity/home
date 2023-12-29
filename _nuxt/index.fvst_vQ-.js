import{g as bt,i as vt,h as gn,j as hn,k as Ut,_ as nn,o as R,c as G,a as w,F as Tt,r as Mt,f as Kt,b as _t,u as xt,t as At,d as yn,l as Qt,p as Sn,e as bn}from"./entry.Hx_cco2_.js";import vn from"./ContentDoc.nj6aF03e.js";import{q as Jt}from"./query.sNvbZTh8.js";import{f as Xt}from"./formatDate.J_nKsmsB.js";import"./vue.f36acd1f.hC-xNdAB.js";import"./ContentRenderer.t6Uq66c6.js";import"./ContentRendererMarkdown.vue.bp4DUQJO.js";import"./index.Wme0U9j4.js";import"./preview.l0_iBNQM.js";import"./ContentQuery.NDyAp0Om.js";import"./asyncData.MbR_Mjc5.js";function _n(t){return Object.prototype.toString.call(t)==="[object Object]"}function Yt(t){return _n(t)||Array.isArray(t)}function xn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ft(t,n){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==o?!1:e.every(s=>{const a=t[s],c=n[s];return typeof a=="function"?`${a}`==`${c}`:!Yt(a)||!Yt(c)?a===c:Ft(a,c)})}function Zt(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function In(t,n){if(t.length!==n.length)return!1;const e=Zt(t),r=Zt(n);return e.every((i,o)=>{const s=r[o];return Ft(i,s)})}function Nt(t){return typeof t=="number"}function kt(t){return typeof t=="string"}function jt(t){return typeof t=="boolean"}function Wt(t){return Object.prototype.toString.call(t)==="[object Object]"}function k(t){return Math.abs(t)}function Ct(t){return Math.sign(t)}function It(t,n){return k(t-n)}function En(t,n){if(t===0||n===0||k(t)<=k(n))return 0;const e=It(k(t),k(n));return k(e/t)}function pt(t){return mt(t).map(Number)}function $(t){return t[ht(t)]}function ht(t){return Math.max(0,t.length-1)}function Pt(t,n){return n===ht(t)}function tn(t,n=0){return Array.from(Array(t),(e,r)=>n+r)}function mt(t){return Object.keys(t)}function en(t,n){return[t,n].reduce((e,r)=>(mt(r).forEach(i=>{const o=e[i],s=r[i],a=Wt(o)&&Wt(s);e[i]=a?en(o,s):s}),e),{})}function on(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Dn(t,n){const e={start:r,center:i,end:o};function r(){return 0}function i(c){return o(c)/2}function o(c){return n-c}function s(c,l){return kt(t)?e[t](c):t(n,c,l)}return{measure:s}}function wn(t,n){const e=t==="y"?"y":"x",r=t==="y"?"x":"y",i=a(),o=c();function s(m){const{width:u,height:d}=m;return e==="x"?u:d}function a(){return e==="y"?"top":n==="rtl"?"right":"left"}function c(){return e==="y"?"bottom":n==="rtl"?"left":"right"}return{scroll:e,cross:r,startEdge:i,endEdge:o,measureSize:s}}function ot(t=0,n=0){const e=k(t-n);function r(l){return l<t}function i(l){return l>n}function o(l){return r(l)||i(l)}function s(l){return o(l)?r(l)?t:n:l}function a(l){return e?l-e*Math.ceil((l-n)/e):l}return{length:e,max:n,min:t,constrain:s,reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:a}}function sn(t,n,e){const{constrain:r}=ot(0,t),i=t+1;let o=s(n);function s(d){return e?k((i+d)%i):r(d)}function a(){return o}function c(d){return o=s(d),u}function l(d){return m().set(a()+d)}function m(){return sn(t,a(),e)}const u={get:a,set:c,add:l,clone:m};return u}function Ln(t){const n=t==="rtl"?-1:1;function e(i){return i*n}return{apply:e}}function gt(){let t=[];function n(i,o,s,a={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(o,s,a),c=()=>i.removeEventListener(o,s,a);else{const l=i;l.addListener(s),c=()=>l.removeListener(s)}return t.push(c),r}function e(){t=t.filter(i=>i())}const r={add:n,clear:e};return r}function On(t,n,e,r,i,o,s,a,c,l,m,u,d,y,g,p,S,b,h,f){const{cross:D}=t,x=["INPUT","SELECT","TEXTAREA"],M={passive:!1},N=gt(),_=gt(),I=ot(50,225).constrain(g.measure(20)),O={mouse:300,touch:400},F={mouse:500,touch:600},A=p?43:25;let V=!1,z=0,J=0,B=!1,X=!1,Y=!1,H=!1;function at(v){if(!f)return;function E(T){(jt(f)||f(v,T))&&lt(T)}const L=e;N.add(L,"dragstart",T=>T.preventDefault(),M).add(L,"touchmove",()=>{},M).add(L,"touchend",()=>{}).add(L,"touchstart",E).add(L,"mousedown",E).add(L,"touchcancel",j).add(L,"contextmenu",j).add(L,"click",K,!0)}function ut(){N.clear(),_.clear()}function Z(){const v=H?r:e;_.add(v,"touchmove",rt,M).add(v,"touchend",j).add(v,"mousemove",rt,M).add(v,"mouseup",j)}function q(v){const E=v.nodeName||"";return x.includes(E)}function st(){return(p?F:O)[H?"mouse":"touch"]}function U(v,E){const L=d.add(Ct(v)*-1),T=u.byDistance(v,!p).distance;return p||k(v)<I?T:b&&E?T*.5:u.byIndex(L.get(),0).distance}function lt(v){const E=on(v,i);H=E,!(E&&v.button!==0)&&(q(v.target)||(Y=p&&E&&!v.buttons&&V,V=It(o.get(),a.get())>=2,B=!0,s.pointerDown(v),m.useFriction(0).useDuration(0),o.set(a),Z(),z=s.readPoint(v),J=s.readPoint(v,D),y.emit("pointerDown")))}function rt(v){const E=s.readPoint(v),L=s.readPoint(v,D),T=It(E,z),C=It(L,J);if(!X&&!H&&(!v.cancelable||(X=T>C,!X)))return j(v);const P=s.pointerMove(v);T>S&&(Y=!0),m.useFriction(.3).useDuration(1),c.start(),o.add(n.apply(P)),v.preventDefault()}function j(v){const L=u.byDistance(0,!1).index!==d.get(),T=s.pointerUp(v)*st(),C=U(n.apply(T),L),P=En(T,C),W=A-10*P,tt=h+P/50;X=!1,B=!1,_.clear(),m.useDuration(W).useFriction(tt),l.distance(C,!p),H=!1,y.emit("pointerUp")}function K(v){Y&&(v.stopPropagation(),v.preventDefault())}function Q(){return B}return{init:at,pointerDown:Q,destroy:ut}}function An(t,n){let r,i;function o(u){return u.timeStamp}function s(u,d){const g=`client${(d||t.scroll)==="x"?"X":"Y"}`;return(on(u,n)?u:u.touches[0])[g]}function a(u){return r=u,i=u,s(u)}function c(u){const d=s(u)-s(i),y=o(u)-o(r)>170;return i=u,y&&(r=u),d}function l(u){if(!r||!i)return 0;const d=s(i)-s(r),y=o(u)-o(r),g=o(u)-o(i)>170,p=d/y;return y&&!g&&k(p)>.1?p:0}return{pointerDown:a,pointerMove:c,pointerUp:l,readPoint:s}}function Tn(){function t(e){const{offsetTop:r,offsetLeft:i,offsetWidth:o,offsetHeight:s}=e;return{top:r,right:i+o,bottom:r+s,left:i,width:o,height:s}}return{measure:t}}function Mn(t){function n(r){return t*(r/100)}return{measure:n}}function kn(t,n,e,r,i,o,s){let a,c,l=[],m=!1;function u(p){return i.measureSize(s.measure(p))}function d(p){if(!o)return;c=u(t),l=r.map(u);function S(h){for(const f of h){const D=f.target===t,x=r.indexOf(f.target),M=D?c:l[x],N=u(D?t:r[x]);if(k(N-M)>=.5){e.requestAnimationFrame(()=>{p.reInit(),n.emit("resize")});break}}}a=new ResizeObserver(h=>{m||(jt(o)||o(p,h))&&S(h)}),[t].concat(r).forEach(h=>a.observe(h))}function y(){a&&a.disconnect(),m=!0}return{init:d,destroy:y}}function Fn(t,n,e,r,i){let o=0,s=0,a=r,c=i,l=t.get(),m=0;function u(){const x=e.get()-t.get(),M=!a;let N=0;return M?(o=0,t.set(e),N=x):(o+=x/a,o*=c,l+=o,t.add(o),N=l-m),s=Ct(N),m=l,D}function d(){const x=e.get()-n.get();return k(x)<.001}function y(){return a}function g(){return s}function p(){return o}function S(){return h(r)}function b(){return f(i)}function h(x){return a=x,D}function f(x){return c=x,D}const D={direction:g,duration:y,velocity:p,seek:u,settled:d,useBaseFriction:b,useBaseDuration:S,useFriction:f,useDuration:h};return D}function Nn(t,n,e,r,i){const o=i.measure(10),s=i.measure(50),a=ot(.1,.99);let c=!1;function l(){return!(c||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function m(y){if(!l())return;const g=t.reachedMin(n.get())?"min":"max",p=k(t[g]-n.get()),S=e.get()-n.get(),b=a.constrain(p/s);e.subtract(S*b),!y&&k(S)<o&&(e.set(t.constrain(e.get())),r.useDuration(25).useBaseFriction())}function u(y){c=!y}return{constrain:m,toggleActive:u}}function jn(t,n,e,r,i){const o=ot(-n+t,0),s=m(),a=l(),c=u();function l(){const y=s[0],g=$(s),p=s.lastIndexOf(y),S=s.indexOf(g)+1;return ot(p,S)}function m(){return e.map((y,g)=>{const p=!g,S=Pt(e,g);return p?o.max:S?o.min:o.constrain(y)}).map(y=>parseFloat(y.toFixed(3)))}function u(){if(n<=t+i)return[o.max];if(r==="keepSnaps")return s;const{min:y,max:g}=a;return s.slice(y,g)}return{snapsContained:c,scrollContainLimit:a}}function Cn(t,n,e){const r=n[0],i=e?r-t:$(n);return{limit:ot(i,r)}}function Pn(t,n,e,r){const o=n.min+.1,s=n.max+.1,{reachedMin:a,reachedMax:c}=ot(o,s);function l(d){return d===1?c(e.get()):d===-1?a(e.get()):!1}function m(d){if(!l(d))return;const y=t*(d*-1);r.forEach(g=>g.add(y))}return{loop:m}}function Vn(t){const{max:n,length:e}=t;function r(o){const s=o-n;return e?s/-e:0}return{get:r}}function Bn(t,n,e,r,i){const{startEdge:o,endEdge:s}=t,{groupSlides:a}=i,c=u().map(n.measure),l=d(),m=y();function u(){return a(r).map(p=>$(p)[s]-p[0][o]).map(k)}function d(){return r.map(p=>e[o]-p[o]).map(p=>-k(p))}function y(){return a(l).map(p=>p[0]).map((p,S)=>p+c[S])}return{snaps:l,snapsAligned:m}}function zn(t,n,e,r,i,o){const{groupSlides:s}=i,{min:a,max:c}=r,l=m();function m(){const d=s(o),y=!t||n==="keepSnaps";return e.length===1?[o]:y?d:d.slice(a,c).map((g,p,S)=>{const b=!p,h=Pt(S,p);if(b){const f=$(S[0])+1;return tn(f)}if(h){const f=ht(o)-$(S)[0]+1;return tn(f,$(S)[0])}return g})}return{slideRegistry:l}}function $n(t,n,e,r,i){const{reachedAny:o,removeOffset:s,constrain:a}=r;function c(g){return g.concat().sort((p,S)=>k(p)-k(S))[0]}function l(g){const p=t?s(g):a(g),S=n.map(h=>h-p).map(h=>m(h,0)).map((h,f)=>({diff:h,index:f})).sort((h,f)=>k(h.diff)-k(f.diff)),{index:b}=S[0];return{index:b,distance:p}}function m(g,p){const S=[g,g+e,g-e];if(!t)return S[0];if(!p)return c(S);const b=S.filter(h=>Ct(h)===p);return b.length?c(b):$(S)-e}function u(g,p){const S=n[g]-i.get(),b=m(S,p);return{index:g,distance:b}}function d(g,p){const S=i.get()+g,{index:b,distance:h}=l(S),f=!t&&o(S);if(!p||f)return{index:b,distance:g};const D=n[b]-h,x=g+m(D,0);return{index:b,distance:x}}return{byDistance:d,byIndex:u,shortcut:m}}function Hn(t,n,e,r,i,o){function s(m){const u=m.distance,d=m.index!==n.get();i.add(u),u&&t.start(),d&&(e.set(n.get()),n.set(m.index),o.emit("select"))}function a(m,u){const d=r.byDistance(m,u);s(d)}function c(m,u){const d=n.clone().set(m),y=r.byIndex(d.get(),u);s(y)}return{distance:a,index:c}}function Rn(t,n,e,r,i,o){let s=0;function a(){o.add(document,"keydown",c,!1),n.forEach(l)}function c(u){u.code==="Tab"&&(s=new Date().getTime())}function l(u){const d=()=>{if(new Date().getTime()-s>10)return;t.scrollLeft=0;const p=n.indexOf(u),S=e.findIndex(b=>b.includes(p));Nt(S)&&(i.useDuration(0),r.index(S,0))};o.add(u,"focus",d,{passive:!0,capture:!0})}return{init:a}}function Et(t){let n=t;function e(){return n}function r(c){n=s(c)}function i(c){n+=s(c)}function o(c){n-=s(c)}function s(c){return Nt(c)?c:c.get()}return{get:e,set:r,add:i,subtract:o}}function rn(t,n,e){const r=t.scroll==="x"?s:a,i=e.style;let o=!1;function s(d){return`translate3d(${d}px,0px,0px)`}function a(d){return`translate3d(0px,${d}px,0px)`}function c(d){o||(i.transform=r(n.apply(d)))}function l(d){o=!d}function m(){o||(i.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:m,to:c,toggleActive:l}}function Gn(t,n,e,r,i,o,s,a,c,l){const u=pt(o),d=pt(o).reverse(),y=h().concat(f());function g(_,I){return _.reduce((O,F)=>O-o[F],I)}function p(_,I){return _.reduce((O,F)=>g(O,I)>0?O.concat([F]):O,[])}function S(_){return s.map((I,O)=>({start:I-i[O]+.5+_,end:I+e-.5+_}))}function b(_,I,O){const F=S(I);return _.map(A=>{const V=O?0:-r,z=O?r:0,J=O?"end":"start",B=F[A][J];return{index:A,loopPoint:B,slideLocation:Et(-1),translate:rn(t,n,l[A]),target:()=>c.get()>B?V:z}})}function h(){const _=a[0],I=p(d,_);return b(I,r,!1)}function f(){const _=e-a[0]-1,I=p(u,_);return b(I,-r,!0)}function D(){return y.every(({index:_})=>{const I=u.filter(O=>O!==_);return g(I,e)<=.1})}function x(){y.forEach(_=>{const{target:I,translate:O,slideLocation:F}=_,A=I();A!==F.get()&&(O.to(A),F.set(A))})}function M(){y.forEach(_=>_.translate.clear())}return{canLoop:D,clear:M,loop:x,loopPoints:y}}function qn(t,n,e){let r,i=!1;function o(c){if(!e)return;function l(m){for(const u of m)if(u.type==="childList"){c.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(m=>{i||(jt(e)||e(c,m))&&l(m)}),r.observe(t,{childList:!0})}function s(){r&&r.disconnect(),i=!0}return{init:o,destroy:s}}function Un(t,n,e,r){const i={};let o=null,s=null,a,c=!1;function l(){a=new IntersectionObserver(g=>{c||(g.forEach(p=>{const S=n.indexOf(p.target);i[S]=p}),o=null,s=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(g=>a.observe(g))}function m(){a&&a.disconnect(),c=!0}function u(g){return mt(i).reduce((p,S)=>{const b=parseInt(S),{isIntersecting:h}=i[b];return(g&&h||!g&&!h)&&p.push(b),p},[])}function d(g=!0){if(g&&o)return o;if(!g&&s)return s;const p=u(g);return g&&(o=p),g||(s=p),p}return{init:l,destroy:m,get:d}}function Kn(t,n,e,r,i,o){const{measureSize:s,startEdge:a,endEdge:c}=t,l=e[0]&&i,m=g(),u=p(),d=e.map(s),y=S();function g(){if(!l)return 0;const h=e[0];return k(n[a]-h[a])}function p(){if(!l)return 0;const h=o.getComputedStyle($(r));return parseFloat(h.getPropertyValue(`margin-${c}`))}function S(){return e.map((h,f,D)=>{const x=!f,M=Pt(D,f);return x?d[f]+m:M?d[f]+u:D[f+1][a]-h[a]}).map(k)}return{slideSizes:d,slideSizesWithGaps:y,startGap:m,endGap:u}}function Qn(t,n,e,r,i,o,s,a,c,l){const{startEdge:m,endEdge:u}=t,d=Nt(r);function y(b,h){return pt(b).filter(f=>f%h===0).map(f=>b.slice(f,f+h))}function g(b){return b.length?pt(b).reduce((h,f)=>{const D=$(h)||0,x=D===0,M=f===ht(b),N=o[m]-s[D][m],_=o[m]-s[f][u],I=!i&&x?n.apply(a):0,O=!i&&M?n.apply(c):0;return k(_-O-(N+I))>e+l&&h.push(f),M&&h.push(b.length),h},[]).map((h,f,D)=>{const x=Math.max(D[f-1]||0);return b.slice(x,h)}):[]}function p(b){return d?y(b,r):g(b)}return{groupSlides:p}}function Jn(t,n,e,r,i,o,s,a){const{align:c,axis:l,direction:m,startIndex:u,loop:d,duration:y,dragFree:g,dragThreshold:p,inViewThreshold:S,slidesToScroll:b,skipSnaps:h,containScroll:f,watchResize:D,watchSlides:x,watchDrag:M}=o,N=2,_=Tn(),I=_.measure(n),O=e.map(_.measure),F=Ln(m),A=wn(l,m),V=A.measureSize(I),z=Mn(V),J=Dn(c,V),B=!d&&!!f,X=d||!!f,{slideSizes:Y,slideSizesWithGaps:H,startGap:at,endGap:ut}=Kn(A,I,O,e,X,i),Z=Qn(A,F,V,b,d,I,O,at,ut,N),{snaps:q,snapsAligned:st}=Bn(A,J,I,O,Z),U=-$(q)+$(H),{snapsContained:lt,scrollContainLimit:rt}=jn(V,U,st,f,N),j=B?lt:st,{limit:K}=Cn(U,j,d),Q=sn(ht(j),u,d),ft=Q.clone(),v=pt(e),E=({dragHandler:et,scrollBody:Lt,scrollBounds:Ot,options:{loop:St}})=>{St||Ot.constrain(et.pointerDown()),Lt.seek()},L=({scrollBody:et,translate:Lt,location:Ot,offsetLocation:St,scrollLooper:un,slideLooper:ln,dragHandler:fn,animation:dn,eventHandler:Rt,options:{loop:pn}},mn)=>{const Gt=et.velocity(),qt=et.settled();qt&&!fn.pointerDown()&&(dn.stop(),Rt.emit("settle")),qt||Rt.emit("scroll"),St.set(Ot.get()-Gt+Gt*mn),pn&&(un.loop(et.direction()),ln.loop()),Lt.to(St.get())},T={start:()=>a.start(dt),stop:()=>a.stop(dt),update:()=>E(dt),render:et=>L(dt,et)},C=.68,P=j[Q.get()],W=Et(P),tt=Et(P),nt=Et(P),yt=Fn(W,tt,nt,y,C),Dt=$n(d,j,U,K,nt),wt=Hn(T,Q,ft,Dt,nt,s),zt=Vn(K),$t=gt(),cn=Un(n,e,s,S),{slideRegistry:Ht}=zn(B,f,j,rt,Z,v),an=Rn(t,e,Ht,wt,yt,$t),dt={ownerDocument:r,ownerWindow:i,eventHandler:s,containerRect:I,slideRects:O,animation:T,axis:A,direction:F,dragHandler:On(A,F,t,r,i,nt,An(A,i),W,T,wt,yt,Dt,Q,s,z,g,p,h,C,M),eventStore:$t,percentOfView:z,index:Q,indexPrevious:ft,limit:K,location:W,offsetLocation:tt,options:o,resizeHandler:kn(n,s,i,e,A,D,_),scrollBody:yt,scrollBounds:Nn(K,W,nt,yt,z),scrollLooper:Pn(U,K,tt,[W,tt,nt]),scrollProgress:zt,scrollSnapList:j.map(zt.get),scrollSnaps:j,scrollTarget:Dt,scrollTo:wt,slideLooper:Gn(A,F,V,U,Y,H,q,j,tt,e),slideFocus:an,slidesHandler:qn(n,s,x),slidesInView:cn,slideIndexes:v,slideRegistry:Ht,slidesToScroll:Z,target:nt,translate:rn(A,F,n)};return dt}function Xn(t){const n=16.666666666666668;let e=[],r=null,i=0,o=0;function s(u){r||(r=u);const d=u-r;for(r=u,i+=d;i>=n;)e.forEach(({animation:g})=>g.update()),i-=n;const y=k(i/n);e.forEach(({animation:g})=>g.render(y)),o&&t.requestAnimationFrame(s)}function a(u){e.includes(u)||e.push(u),!o&&(o=t.requestAnimationFrame(s))}function c(u){e=e.filter(d=>d!==u),!e.length&&(t.cancelAnimationFrame(o),r=null,i=0,o=0)}function l(){r=null,i=0}return{start:a,stop:c,reset:l,window:t}}function Yn(){const t={};let n;function e(c){n=c}function r(c){return t[c]||[]}function i(c){return r(c).forEach(l=>l(n,c)),a}function o(c,l){return t[c]=r(c).concat([l]),a}function s(c,l){return t[c]=r(c).filter(m=>m!==l),a}const a={init:e,emit:i,off:s,on:o};return a}const Zn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Wn(t){function n(o,s){return en(o,s||{})}function e(o){const s=o.breakpoints||{},a=mt(s).filter(c=>t.matchMedia(c).matches).map(c=>s[c]).reduce((c,l)=>n(c,l),{});return n(o,a)}function r(o){return o.map(s=>mt(s.breakpoints||{})).reduce((s,a)=>s.concat(a),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:r}}function te(t){let n=[];function e(o,s){return n=s.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),n.forEach(a=>a.init(o,t)),s.reduce((a,c)=>Object.assign(a,{[c.name]:c}),{})}function r(){n=n.filter(o=>o.destroy())}return{init:e,destroy:r}}function it(t,n,e){const r=t.ownerDocument,i=r.defaultView,o=Wn(i),s=te(o),a=gt(),c=gt(),l=Yn(),{animationRealms:m}=it,{mergeOptions:u,optionsAtMedia:d,optionsMediaQueries:y}=o,{on:g,off:p,emit:S}=l,b=V;let h=!1,f,D=u(Zn,it.globalOptions),x=u(D),M=[],N,_,I;function O(){const{container:E,slides:L}=x;_=(kt(E)?t.querySelector(E):E)||t.children[0];const C=kt(L)?_.querySelectorAll(L):L;I=[].slice.call(C||_.children)}function F(E,L){const T=Jn(t,_,I,r,i,E,l,L);if(E.loop&&!T.slideLooper.canLoop()){const C=Object.assign({},E,{loop:!1});return F(C,L)}return T}function A(E,L){if(h)return;const T=m.find(P=>P.window===i),C=T||Xn(i);T||m.push(C),D=u(D,E),x=d(D),M=L||M,O(),f=F(x,C),y([D,...M.map(({options:P})=>P)]).forEach(P=>a.add(P,"change",V)),x.active&&(f.translate.to(f.location.get()),f.slidesInView.init(),f.slideFocus.init(),f.eventHandler.init(v),f.resizeHandler.init(v),f.slidesHandler.init(v),c.add(r,"visibilitychange",()=>{r.hidden&&C.reset()}),f.options.loop&&f.slideLooper.loop(),_.offsetParent&&I.length&&f.dragHandler.init(v),N=s.init(v,M))}function V(E,L){const T=q();z(),A(u({startIndex:T},E),L),l.emit("reInit")}function z(){f.dragHandler.destroy(),f.animation.stop(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),s.destroy(),a.clear(),c.clear()}function J(){h||(h=!0,a.clear(),z(),l.emit("destroy"))}function B(E,L,T){!x.active||h||(f.scrollBody.useBaseFriction().useDuration(L===!0?0:x.duration),f.scrollTo.index(E,T||0))}function X(E){const L=f.index.add(1).get();B(L,E,-1)}function Y(E){const L=f.index.add(-1).get();B(L,E,1)}function H(){return f.index.add(1).get()!==q()}function at(){return f.index.add(-1).get()!==q()}function ut(){return f.scrollSnapList}function Z(){return f.scrollProgress.get(f.location.get())}function q(){return f.index.get()}function st(){return f.indexPrevious.get()}function U(){return f.slidesInView.get()}function lt(){return f.slidesInView.get(!1)}function rt(){return N}function j(){return f}function K(){return t}function Q(){return _}function ft(){return I}const v={canScrollNext:H,canScrollPrev:at,containerNode:Q,internalEngine:j,destroy:J,off:p,on:g,emit:S,plugins:rt,previousScrollSnap:st,reInit:b,rootNode:K,scrollNext:X,scrollPrev:Y,scrollProgress:Z,scrollSnapList:ut,scrollTo:B,selectedScrollSnap:q,slideNodes:ft,slidesInView:U,slidesNotInView:lt};return A(n,e),setTimeout(()=>l.emit("init"),0),v}it.animationRealms=[];it.globalOptions=void 0;function Vt(t={},n=[]){const e=bt(vt(t)?t.value:t),r=bt(vt(n)?n.value:n),i=bt(),o=bt();function s(){o.value&&o.value.reInit(e.value,r.value)}return gn(()=>{!xn()||!i.value||(it.globalOptions=Vt.globalOptions,o.value=it(i.value,e.value,r.value))}),hn(()=>{o.value&&o.value.destroy()}),vt(t)&&Ut(t,a=>{Ft(e.value,a)||(e.value=a,s())}),vt(n)&&Ut(n,a=>{In(r.value,a)||(r.value=a,s())}),[i,o]}Vt.globalOptions=void 0;const ne={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function Bt(t={}){let n,e,r,i=!1,o=!0,s=!1,a=0,c=0;function l(f,D){e=f;const{mergeOptions:x,optionsAtMedia:M}=D,N=x(ne,Bt.globalOptions),_=x(N,t);if(n=M(_),e.scrollSnapList().length<=1)return;s=n.jump,r=!1;const{eventStore:I,ownerDocument:O}=e.internalEngine(),F=e.rootNode(),A=n.rootNode&&n.rootNode(F)||F;e.on("pointerDown",d),n.stopOnInteraction||e.on("pointerUp",u),n.stopOnMouseEnter&&(I.add(A,"mouseenter",()=>{o=!1,d()}),n.stopOnInteraction||I.add(A,"mouseleave",()=>{o=!0,u()})),n.stopOnFocusIn&&(I.add(A,"focusin",d),n.stopOnInteraction||I.add(A,"focusout",u)),I.add(O,"visibilitychange",()=>{if(O.visibilityState==="hidden")return o=i,d();o&&u()}),n.playOnInit&&e.on("init",u).on("reInit",u)}function m(){r=!0,i=!1,e.off("init",u).off("reInit",u),e.off("pointerDown",d),n.stopOnInteraction||e.off("pointerUp",u),d(),cancelAnimationFrame(a),a=0}function u(){if(r||!o)return;i||e.emit("autoplay:play");const{ownerWindow:f}=e.internalEngine();f.clearInterval(c),c=f.setInterval(b,n.delay),i=!0}function d(){if(r)return;i&&e.emit("autoplay:stop");const{ownerWindow:f}=e.internalEngine();f.clearInterval(c),c=0,i=!1}function y(f){typeof f<"u"&&(s=f),o=!0,u()}function g(){i&&d()}function p(){i&&y()}function S(){return i}function b(){a=requestAnimationFrame(()=>{const{index:f}=e.internalEngine(),D=f.clone().add(1).get(),x=e.scrollSnapList().length-1;n.stopOnLastSnap&&D===x&&d(),e.canScrollNext()?e.scrollNext(s):e.scrollTo(0,s)})}return{name:"autoplay",options:t,init:l,destroy:m,play:y,stop:g,reset:p,isPlaying:S}}Bt.globalOptions=void 0;const ee={setup(){const[t]=Vt({loop:!0},[Bt({delay:6e3})]);return{emblaNode:t}},data(){return{items:[{img:"/images/event230115seniorIdeathon.jpg"},{img:"/images/project/project_shindan.jpg"},{img:"/images/project/project_table.jpg"},{img:"/images/project/project_kyouzai.jpg"}]}}},oe={class:"embla",ref:"emblaNode"},se={class:"embla__container"},re=["src"];function ie(t,n,e,r,i,o){return R(),G("div",oe,[w("div",se,[(R(!0),G(Tt,null,Mt(i.items,s=>(R(),G("div",{class:"embla__slide",key:s.id},[w("img",{src:s.img,alt:"alt"},null,8,re)]))),128))])],512)}const ce=nn(ee,[["render",ie],["__scopeId","data-v-59ef7c37"]]),ae=""+globalThis.__publicAssetsURL("images/iconFb.png"),ct=t=>(Sn("data-v-d8b985d5"),t=t(),bn(),t),ue={class:"nuxt-content"},le=ct(()=>w("h2",{id:"news"},"News",-1)),fe={class:"news-date"},de={key:0,class:"event-date"},pe=ct(()=>w("span",{class:"event-date-text"}," 開催日 ",-1)),me=["href"],ge={key:0},he=ct(()=>w("span",null,[w("a",{href:"/news"},"more...")],-1)),ye={id:"project",class:"nuxt-content"},Se={class:"nuxt-content"},be=ct(()=>w("h2",{id:"event"},"Event",-1)),ve=["href"],_e=["src"],xe=ct(()=>w("span",null,[w("a",{href:"/events"},"more...")],-1)),Ie={id:"message",class:"nuxt-content"},Ee={id:"vision",class:"nuxt-content"},De=ct(()=>w("article",null,[w("div",{class:"nuxt-content"},[w("h2",null,"Contact"),w("ul",{class:"footer__list"},[w("li",null," シビックテックさいたま世話人：太田一穂、クワハラシズカ、藤田史織、古川尚史 "),w("li",null,"email：civictech.saitama@gmail.com"),w("li",null,[w("a",{href:"https://www.facebook.com/CivicTechSaitamaCity"},[w("img",{src:ae,alt:""})])])])])],-1)),we={__name:"index",async setup(t){let n,e;const r=([n,e]=Kt(()=>Jt("/data").limit(10).sort({eventDate:-1}).sort({date:-1}).where({date:{$gt:new Date(2020)}}).find()),n=await n,e(),n),i=([n,e]=Kt(()=>Jt("/data").limit(9).sort({eventDate:-1}).where({eventDate:{$gt:new Date(2020)}}).find()),n=await n,e(),n);return(o,s)=>{const a=ce,c=vn;return R(),G("div",null,[_t(a),w("article",null,[w("div",ue,[le,w("ul",null,[(R(!0),G(Tt,null,Mt(xt(r),(l,m)=>(R(),G("li",{key:m},[w("span",fe,At(("formatDate"in o?o.formatDate:xt(Xt))(l.date)),1),l.eventDate?(R(),G("div",de,[pe,yn(" "+At(("formatDate"in o?o.formatDate:xt(Xt))(l.eventDate)),1)])):Qt("",!0),w("a",{class:"news-link",href:l.link},[l.link?(R(),G("span",ge,At(l.title),1)):Qt("",!0)],8,me)]))),128))]),he])]),w("article",null,[w("div",ye,[_t(c,{head:!1,path:"projects"})])]),w("article",null,[w("div",Se,[be,w("ul",null,[(R(!0),G(Tt,null,Mt(xt(i),(l,m)=>(R(),G("li",{key:m},[w("a",{href:l.link},[w("img",{src:l.thumb,alt:""},null,8,_e)],8,ve)]))),128))]),xe])]),w("article",null,[w("div",Ie,[_t(c,{head:!1,path:"message"})])]),w("article",null,[w("div",Ee,[_t(c,{head:!1,path:"vision"})])]),De])}}},Ve=nn(we,[["__scopeId","data-v-d8b985d5"]]);export{Ve as default};