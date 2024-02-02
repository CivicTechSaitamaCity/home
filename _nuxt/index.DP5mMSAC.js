import{g as yt,i as St,h as mn,j as gn,k as Rt,_ as tn,o as R,c as U,a as E,F as Tt,r as At,f as Ut,b as bt,u as vt,t as wt,d as hn,l as Kt,p as yn,e as Sn}from"./entry.FuVIxBKo.js";import bn from"./ContentDoc.IXioAjZp.js";import{q as Qt}from"./query.QWZMXMRp.js";import{f as Jt}from"./formatDate.J_nKsmsB.js";import"./vue.f36acd1f.3gOzCXsN.js";import"./ContentRenderer.N_9tJ0SB.js";import"./ContentRendererMarkdown.vue.TxF6c8io.js";import"./index.1dSrIji7.js";import"./preview.-4Zk5AMa.js";import"./ContentQuery.8ETyOMzG.js";import"./asyncData.dTwKtPVf.js";function vn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Xt(t){return vn(t)||Array.isArray(t)}function _n(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Mt(t,n){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==o?!1:e.every(s=>{const a=t[s],c=n[s];return typeof a=="function"?`${a}`==`${c}`:!Xt(a)||!Xt(c)?a===c:Mt(a,c)})}function Yt(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function xn(t,n){if(t.length!==n.length)return!1;const e=Yt(t),r=Yt(n);return e.every((i,o)=>{const s=r[o];return Mt(i,s)})}function Ft(t){return typeof t=="number"}function kt(t){return typeof t=="string"}function Nt(t){return typeof t=="boolean"}function Zt(t){return Object.prototype.toString.call(t)==="[object Object]"}function A(t){return Math.abs(t)}function jt(t){return Math.sign(t)}function ft(t,n){return A(t-n)}function In(t,n){if(t===0||n===0||A(t)<=A(n))return 0;const e=ft(A(t),A(n));return A(e/t)}function dt(t){return pt(t).map(Number)}function $(t){return t[gt(t)]}function gt(t){return Math.max(0,t.length-1)}function Ct(t,n){return n===gt(t)}function Wt(t,n=0){return Array.from(Array(t),(e,r)=>n+r)}function pt(t){return Object.keys(t)}function nn(t,n){return[t,n].reduce((e,r)=>(pt(r).forEach(i=>{const o=e[i],s=r[i],a=Zt(o)&&Zt(s);e[i]=a?nn(o,s):s}),e),{})}function en(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function En(t,n){const e={start:r,center:i,end:o};function r(){return 0}function i(c){return o(c)/2}function o(c){return n-c}function s(c,u){return kt(t)?e[t](c):t(n,c,u)}return{measure:s}}function mt(){let t=[];function n(i,o,s,a={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(o,s,a),c=()=>i.removeEventListener(o,s,a);else{const u=i;u.addListener(s),c=()=>u.removeListener(s)}return t.push(c),r}function e(){t=t.filter(i=>i())}const r={add:n,clear:e};return r}function Dn(t,n,e,r){const i=mt(),o=1e3/60;let s=null,a=0,c=0;function u(){i.add(t,"visibilitychange",()=>{t.hidden&&m()})}function h(){v(),i.clear()}function l(y){s||(s=y);const f=y-s;for(s=y,a+=f;a>=o;)e(),a-=o;const g=A(a/o);r(g),c&&n.requestAnimationFrame(l)}function d(){c||(c=n.requestAnimationFrame(l))}function v(){n.cancelAnimationFrame(c),s=null,a=0,c=0}function m(){s=null,a=0}return{init:u,destroy:h,start:d,stop:v,update:e,render:r}}function Ln(t,n){const e=t==="y"?"y":"x",r=t==="y"?"x":"y",i=a(),o=c();function s(h){const{width:l,height:d}=h;return e==="x"?l:d}function a(){return e==="y"?"top":n==="rtl"?"right":"left"}function c(){return e==="y"?"bottom":n==="rtl"?"left":"right"}return{scroll:e,cross:r,startEdge:i,endEdge:o,measureSize:s}}function ot(t=0,n=0){const e=A(t-n);function r(u){return u<t}function i(u){return u>n}function o(u){return r(u)||i(u)}function s(u){return o(u)?r(u)?t:n:u}function a(u){return e?u-e*Math.ceil((u-n)/e):u}return{length:e,max:n,min:t,constrain:s,reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:a}}function on(t,n,e){const{constrain:r}=ot(0,t),i=t+1;let o=s(n);function s(d){return e?A((i+d)%i):r(d)}function a(){return o}function c(d){return o=s(d),l}function u(d){return h().set(a()+d)}function h(){return on(t,a(),e)}const l={get:a,set:c,add:u,clone:h};return l}function On(t){const n=t==="rtl"?-1:1;function e(i){return i*n}return{apply:e}}function wn(t,n,e,r,i,o,s,a,c,u,h,l,d,v,m,p,y,f,g,b){const{cross:_}=t,D=["INPUT","SELECT","TEXTAREA"],L={passive:!1},k=mt(),x=mt(),O=ot(50,225).constrain(m.measure(20)),I={mouse:300,touch:400},w={mouse:500,touch:600},F=p?43:25;let P=!1,B=0,K=0,H=!1,Z=!1,W=!1,Q=!1;function ct(S){if(!b)return;function T(j){(Nt(b)||b(S,j))&&ut(j)}const N=e;k.add(N,"dragstart",j=>j.preventDefault(),L).add(N,"touchmove",()=>{},L).add(N,"touchend",()=>{}).add(N,"touchstart",T).add(N,"mousedown",T).add(N,"touchcancel",C).add(N,"contextmenu",C).add(N,"click",X,!0)}function G(){k.clear(),x.clear()}function st(){const S=Q?r:e;x.add(S,"touchmove",V,L).add(S,"touchend",C).add(S,"mousemove",V,L).add(S,"mouseup",C)}function rt(S){const T=S.nodeName||"";return D.includes(T)}function J(){return(p?w:I)[Q?"mouse":"touch"]}function at(S,T){const N=d.add(jt(S)*-1),j=l.byDistance(S,!p).distance;return p||A(S)<O?j:f&&T?j*.5:l.byIndex(N.get(),0).distance}function ut(S){const T=en(S,i);Q=T,!(T&&S.button!==0)&&(rt(S.target)||(W=p&&T&&!S.buttons&&P,P=ft(o.get(),a.get())>=2,H=!0,s.pointerDown(S),h.useFriction(0).useDuration(0),o.set(a),st(),B=s.readPoint(S),K=s.readPoint(S,_),v.emit("pointerDown")))}function V(S){const T=s.readPoint(S),N=s.readPoint(S,_),j=ft(T,B),tt=ft(N,K);if(!Z&&!Q&&(!S.cancelable||(Z=j>tt,!Z)))return C(S);const q=s.pointerMove(S);j>y&&(W=!0),h.useFriction(.3).useDuration(1),c.start(),o.add(n.apply(q)),S.preventDefault()}function C(S){const N=l.byDistance(0,!1).index!==d.get(),j=s.pointerUp(S)*J(),tt=at(n.apply(j),N),q=In(j,tt),nt=F-10*q,Y=g+q/50;Z=!1,H=!1,x.clear(),h.useDuration(nt).useFriction(Y),u.distance(tt,!p),Q=!1,v.emit("pointerUp")}function X(S){W&&(S.stopPropagation(),S.preventDefault())}function z(){return H}return{init:ct,pointerDown:z,destroy:G}}function Tn(t,n){let r,i;function o(l){return l.timeStamp}function s(l,d){const m=`client${(d||t.scroll)==="x"?"X":"Y"}`;return(en(l,n)?l:l.touches[0])[m]}function a(l){return r=l,i=l,s(l)}function c(l){const d=s(l)-s(i),v=o(l)-o(r)>170;return i=l,v&&(r=l),d}function u(l){if(!r||!i)return 0;const d=s(i)-s(r),v=o(l)-o(r),m=o(l)-o(i)>170,p=d/v;return v&&!m&&A(p)>.1?p:0}return{pointerDown:a,pointerMove:c,pointerUp:u,readPoint:s}}function An(){function t(e){const{offsetTop:r,offsetLeft:i,offsetWidth:o,offsetHeight:s}=e;return{top:r,right:i+o,bottom:r+s,left:i,width:o,height:s}}return{measure:t}}function kn(t){function n(r){return t*(r/100)}return{measure:n}}function Mn(t,n,e,r,i,o,s){let a,c,u=[],h=!1;function l(p){return i.measureSize(s.measure(p))}function d(p){if(!o)return;c=l(t),u=r.map(l);function y(g){for(const b of g){const _=b.target===t,D=r.indexOf(b.target),L=_?c:u[D],k=l(_?t:r[D]);if(A(k-L)>=.5){e.requestAnimationFrame(()=>{p.reInit(),n.emit("resize")});break}}}a=new ResizeObserver(g=>{h||(Nt(o)||o(p,g))&&y(g)}),[t].concat(r).forEach(g=>a.observe(g))}function v(){a&&a.disconnect(),h=!0}return{init:d,destroy:v}}function Fn(t,n,e,r,i){let o=0,s=0,a=r,c=i,u=t.get(),h=0;function l(){const D=e.get()-t.get(),L=!a;let k=0;return L?(o=0,t.set(e),k=D):(o+=D/a,o*=c,u+=o,t.add(o),k=u-h),s=jt(k),h=u,_}function d(){const D=e.get()-n.get();return A(D)<.001}function v(){return a}function m(){return s}function p(){return o}function y(){return g(r)}function f(){return b(i)}function g(D){return a=D,_}function b(D){return c=D,_}const _={direction:m,duration:v,velocity:p,seek:l,settled:d,useBaseFriction:f,useBaseDuration:y,useFriction:b,useDuration:g};return _}function Nn(t,n,e,r,i){const o=i.measure(10),s=i.measure(50),a=ot(.1,.99);let c=!1;function u(){return!(c||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function h(v){if(!u())return;const m=t.reachedMin(n.get())?"min":"max",p=A(t[m]-n.get()),y=e.get()-n.get(),f=a.constrain(p/s);e.subtract(y*f),!v&&A(y)<o&&(e.set(t.constrain(e.get())),r.useDuration(25).useBaseFriction())}function l(v){c=!v}return{constrain:h,toggleActive:l}}function jn(t,n,e,r,i){const o=ot(-n+t,0),s=l(),a=h(),c=d();function u(m,p){return ft(m,p)<1}function h(){const m=s[0],p=$(s),y=s.lastIndexOf(m),f=s.indexOf(p)+1;return ot(y,f)}function l(){return e.map((m,p)=>{const{min:y,max:f}=o,g=o.constrain(m),b=!p,_=Ct(e,p);return b?f:_||u(y,g)?y:u(f,g)?f:g}).map(m=>parseFloat(m.toFixed(3)))}function d(){if(n<=t+i)return[o.max];if(r==="keepSnaps")return s;const{min:m,max:p}=a;return s.slice(m,p)}return{snapsContained:c,scrollContainLimit:a}}function Cn(t,n,e){const r=n[0],i=e?r-t:$(n);return{limit:ot(i,r)}}function Pn(t,n,e,r){const o=n.min+.1,s=n.max+.1,{reachedMin:a,reachedMax:c}=ot(o,s);function u(d){return d===1?c(e.get()):d===-1?a(e.get()):!1}function h(d){if(!u(d))return;const v=t*(d*-1);r.forEach(m=>m.add(v))}return{loop:h}}function Bn(t){const{max:n,length:e}=t;function r(o){const s=o-n;return e?s/-e:0}return{get:r}}function Vn(t,n,e,r,i){const{startEdge:o,endEdge:s}=t,{groupSlides:a}=i,c=l().map(n.measure),u=d(),h=v();function l(){return a(r).map(p=>$(p)[s]-p[0][o]).map(A)}function d(){return r.map(p=>e[o]-p[o]).map(p=>-A(p))}function v(){return a(u).map(p=>p[0]).map((p,y)=>p+c[y])}return{snaps:u,snapsAligned:h}}function zn(t,n,e,r,i,o){const{groupSlides:s}=i,{min:a,max:c}=r,u=h();function h(){const d=s(o),v=!t||n==="keepSnaps";return e.length===1?[o]:v?d:d.slice(a,c).map((m,p,y)=>{const f=!p,g=Ct(y,p);if(f){const b=$(y[0])+1;return Wt(b)}if(g){const b=gt(o)-$(y)[0]+1;return Wt(b,$(y)[0])}return m})}return{slideRegistry:u}}function $n(t,n,e,r,i){const{reachedAny:o,removeOffset:s,constrain:a}=r;function c(m){return m.concat().sort((p,y)=>A(p)-A(y))[0]}function u(m){const p=t?s(m):a(m),y=n.map(g=>g-p).map(g=>h(g,0)).map((g,b)=>({diff:g,index:b})).sort((g,b)=>A(g.diff)-A(b.diff)),{index:f}=y[0];return{index:f,distance:p}}function h(m,p){const y=[m,m+e,m-e];if(!t)return y[0];if(!p)return c(y);const f=y.filter(g=>jt(g)===p);return f.length?c(f):$(y)-e}function l(m,p){const y=n[m]-i.get(),f=h(y,p);return{index:m,distance:f}}function d(m,p){const y=i.get()+m,{index:f,distance:g}=u(y),b=!t&&o(y);if(!p||b)return{index:f,distance:m};const _=n[f]-g,D=m+h(_,0);return{index:f,distance:D}}return{byDistance:d,byIndex:l,shortcut:h}}function Hn(t,n,e,r,i,o,s){function a(l){const d=l.distance,v=l.index!==n.get();o.add(d),d&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),v&&(e.set(n.get()),n.set(l.index),s.emit("select"))}function c(l,d){const v=i.byDistance(l,d);a(v)}function u(l,d){const v=n.clone().set(l),m=i.byIndex(v.get(),d);a(m)}return{distance:c,index:u}}function Gn(t,n,e,r,i,o){let s=0;function a(){o.add(document,"keydown",c,!1),n.forEach(u)}function c(l){l.code==="Tab"&&(s=new Date().getTime())}function u(l){const d=()=>{if(new Date().getTime()-s>10)return;t.scrollLeft=0;const p=n.indexOf(l),y=e.findIndex(f=>f.includes(p));Ft(y)&&(i.useDuration(0),r.index(y,0))};o.add(l,"focus",d,{passive:!0,capture:!0})}return{init:a}}function _t(t){let n=t;function e(){return n}function r(c){n=s(c)}function i(c){n+=s(c)}function o(c){n-=s(c)}function s(c){return Ft(c)?c:c.get()}return{get:e,set:r,add:i,subtract:o}}function sn(t,n,e){const r=t.scroll==="x"?s:a,i=e.style;let o=!1;function s(d){return`translate3d(${d}px,0px,0px)`}function a(d){return`translate3d(0px,${d}px,0px)`}function c(d){o||(i.transform=r(n.apply(d)))}function u(d){o=!d}function h(){o||(i.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:h,to:c,toggleActive:u}}function qn(t,n,e,r,i,o,s,a,c,u){const l=dt(o),d=dt(o).reverse(),v=g().concat(b());function m(x,O){return x.reduce((I,w)=>I-o[w],O)}function p(x,O){return x.reduce((I,w)=>m(I,O)>0?I.concat([w]):I,[])}function y(x){return s.map((O,I)=>({start:O-i[I]+.5+x,end:O+e-.5+x}))}function f(x,O,I){const w=y(O);return x.map(F=>{const P=I?0:-r,B=I?r:0,K=I?"end":"start",H=w[F][K];return{index:F,loopPoint:H,slideLocation:_t(-1),translate:sn(t,n,u[F]),target:()=>c.get()>H?P:B}})}function g(){const x=a[0],O=p(d,x);return f(O,r,!1)}function b(){const x=e-a[0]-1,O=p(l,x);return f(O,-r,!0)}function _(){return v.every(({index:x})=>{const O=l.filter(I=>I!==x);return m(O,e)<=.1})}function D(){v.forEach(x=>{const{target:O,translate:I,slideLocation:w}=x,F=O();F!==w.get()&&(I.to(F),w.set(F))})}function L(){v.forEach(x=>x.translate.clear())}return{canLoop:_,clear:L,loop:D,loopPoints:v}}function Rn(t,n,e){let r,i=!1;function o(c){if(!e)return;function u(h){for(const l of h)if(l.type==="childList"){c.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(h=>{i||(Nt(e)||e(c,h))&&u(h)}),r.observe(t,{childList:!0})}function s(){r&&r.disconnect(),i=!0}return{init:o,destroy:s}}function Un(t,n,e,r){const i={};let o=null,s=null,a,c=!1;function u(){a=new IntersectionObserver(m=>{c||(m.forEach(p=>{const y=n.indexOf(p.target);i[y]=p}),o=null,s=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(m=>a.observe(m))}function h(){a&&a.disconnect(),c=!0}function l(m){return pt(i).reduce((p,y)=>{const f=parseInt(y),{isIntersecting:g}=i[f];return(m&&g||!m&&!g)&&p.push(f),p},[])}function d(m=!0){if(m&&o)return o;if(!m&&s)return s;const p=l(m);return m&&(o=p),m||(s=p),p}return{init:u,destroy:h,get:d}}function Kn(t,n,e,r,i,o){const{measureSize:s,startEdge:a,endEdge:c}=t,u=e[0]&&i,h=m(),l=p(),d=e.map(s),v=y();function m(){if(!u)return 0;const g=e[0];return A(n[a]-g[a])}function p(){if(!u)return 0;const g=o.getComputedStyle($(r));return parseFloat(g.getPropertyValue(`margin-${c}`))}function y(){return e.map((g,b,_)=>{const D=!b,L=Ct(_,b);return D?d[b]+h:L?d[b]+l:_[b+1][a]-g[a]}).map(A)}return{slideSizes:d,slideSizesWithGaps:v,startGap:h,endGap:l}}function Qn(t,n,e,r,i,o,s,a,c,u){const{startEdge:h,endEdge:l}=t,d=Ft(r);function v(f,g){return dt(f).filter(b=>b%g===0).map(b=>f.slice(b,b+g))}function m(f){return f.length?dt(f).reduce((g,b)=>{const _=$(g)||0,D=_===0,L=b===gt(f),k=o[h]-s[_][h],x=o[h]-s[b][l],O=!i&&D?n.apply(a):0,I=!i&&L?n.apply(c):0;return A(x-I-(k+O))>e+u&&g.push(b),L&&g.push(f.length),g},[]).map((g,b,_)=>{const D=Math.max(_[b-1]||0);return f.slice(D,g)}):[]}function p(f){return d?v(f,r):m(f)}return{groupSlides:p}}function Jn(t,n,e,r,i,o,s){const{align:a,axis:c,direction:u,startIndex:h,loop:l,duration:d,dragFree:v,dragThreshold:m,inViewThreshold:p,slidesToScroll:y,skipSnaps:f,containScroll:g,watchResize:b,watchSlides:_,watchDrag:D}=o,L=2,k=An(),x=k.measure(n),O=e.map(k.measure),I=On(u),w=Ln(c,u),F=w.measureSize(x),P=kn(F),B=En(a,F),K=!l&&!!g,H=l||!!g,{slideSizes:Z,slideSizesWithGaps:W,startGap:Q,endGap:ct}=Kn(w,x,O,e,H,i),G=Qn(w,I,F,y,l,x,O,Q,ct,L),{snaps:st,snapsAligned:rt}=Vn(w,B,x,O,G),J=-$(st)+$(W),{snapsContained:at,scrollContainLimit:ut}=jn(F,J,rt,g,L),V=K?at:rt,{limit:C}=Cn(J,V,l),X=on(gt(V),h,l),z=X.clone(),M=dt(e),S=({dragHandler:et,scrollBody:Lt,scrollBounds:Ot,options:{loop:ht}})=>{ht||Ot.constrain(et.pointerDown()),Lt.seek()},T=({scrollBody:et,translate:Lt,location:Ot,offsetLocation:ht,scrollLooper:an,slideLooper:un,dragHandler:ln,animation:fn,eventHandler:Ht,options:{loop:dn}},pn)=>{const Gt=et.velocity(),qt=et.settled();qt&&!ln.pointerDown()&&(fn.stop(),Ht.emit("settle")),qt||Ht.emit("scroll"),ht.set(Ot.get()-Gt+Gt*pn),dn&&(an.loop(et.direction()),un.loop()),Lt.to(ht.get())},N=Dn(r,i,()=>S(Dt),et=>T(Dt,et)),j=.68,tt=V[X.get()],q=_t(tt),nt=_t(tt),Y=_t(tt),lt=Fn(q,nt,Y,d,j),It=$n(l,V,J,C,Y),Et=Hn(N,X,z,lt,It,Y,s),Vt=Bn(C),zt=mt(),rn=Un(n,e,s,p),{slideRegistry:$t}=zn(K,g,V,ut,G,M),cn=Gn(t,e,$t,Et,lt,zt),Dt={ownerDocument:r,ownerWindow:i,eventHandler:s,containerRect:x,slideRects:O,animation:N,axis:w,direction:I,dragHandler:wn(w,I,t,r,i,Y,Tn(w,i),q,N,Et,lt,It,X,s,P,v,m,f,j,D),eventStore:zt,percentOfView:P,index:X,indexPrevious:z,limit:C,location:q,offsetLocation:nt,options:o,resizeHandler:Mn(n,s,i,e,w,b,k),scrollBody:lt,scrollBounds:Nn(C,q,Y,lt,P),scrollLooper:Pn(J,C,nt,[q,nt,Y]),scrollProgress:Vt,scrollSnapList:V.map(Vt.get),scrollSnaps:V,scrollTarget:It,scrollTo:Et,slideLooper:qn(w,I,F,J,Z,W,st,V,nt,e),slideFocus:cn,slidesHandler:Rn(n,s,_),slidesInView:rn,slideIndexes:M,slideRegistry:$t,slidesToScroll:G,target:Y,translate:sn(w,I,n)};return Dt}function Xn(){const t={};let n;function e(c){n=c}function r(c){return t[c]||[]}function i(c){return r(c).forEach(u=>u(n,c)),a}function o(c,u){return t[c]=r(c).concat([u]),a}function s(c,u){return t[c]=r(c).filter(h=>h!==u),a}const a={init:e,emit:i,off:s,on:o};return a}const Yn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Zn(t){function n(o,s){return nn(o,s||{})}function e(o){const s=o.breakpoints||{},a=pt(s).filter(c=>t.matchMedia(c).matches).map(c=>s[c]).reduce((c,u)=>n(c,u),{});return n(o,a)}function r(o){return o.map(s=>pt(s.breakpoints||{})).reduce((s,a)=>s.concat(a),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:r}}function Wn(t){let n=[];function e(o,s){return n=s.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),n.forEach(a=>a.init(o,t)),s.reduce((a,c)=>Object.assign(a,{[c.name]:c}),{})}function r(){n=n.filter(o=>o.destroy())}return{init:e,destroy:r}}function xt(t,n,e){const r=t.ownerDocument,i=r.defaultView,o=Zn(i),s=Wn(o),a=mt(),c=Xn(),{mergeOptions:u,optionsAtMedia:h,optionsMediaQueries:l}=o,{on:d,off:v,emit:m}=c,p=w;let y=!1,f,g=u(Yn,xt.globalOptions),b=u(g),_=[],D,L,k;function x(){const{container:M,slides:S}=b;L=(kt(M)?t.querySelector(M):M)||t.children[0];const N=kt(S)?L.querySelectorAll(S):S;k=[].slice.call(N||L.children)}function O(M){const S=Jn(t,L,k,r,i,M,c);if(M.loop&&!S.slideLooper.canLoop()){const T=Object.assign({},M,{loop:!1});return O(T)}return S}function I(M,S){y||(g=u(g,M),b=h(g),_=S||_,x(),f=O(b),l([g,..._.map(({options:T})=>T)]).forEach(T=>a.add(T,"change",w)),b.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(),f.eventHandler.init(z),f.resizeHandler.init(z),f.slidesHandler.init(z),f.options.loop&&f.slideLooper.loop(),L.offsetParent&&k.length&&f.dragHandler.init(z),D=s.init(z,_)))}function w(M,S){const T=G();F(),I(u({startIndex:T},M),S),c.emit("reInit")}function F(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),s.destroy(),a.clear()}function P(){y||(y=!0,a.clear(),F(),c.emit("destroy"))}function B(M,S,T){!b.active||y||(f.scrollBody.useBaseFriction().useDuration(S===!0?0:b.duration),f.scrollTo.index(M,T||0))}function K(M){const S=f.index.add(1).get();B(S,M,-1)}function H(M){const S=f.index.add(-1).get();B(S,M,1)}function Z(){return f.index.add(1).get()!==G()}function W(){return f.index.add(-1).get()!==G()}function Q(){return f.scrollSnapList}function ct(){return f.scrollProgress.get(f.location.get())}function G(){return f.index.get()}function st(){return f.indexPrevious.get()}function rt(){return f.slidesInView.get()}function J(){return f.slidesInView.get(!1)}function at(){return D}function ut(){return f}function V(){return t}function C(){return L}function X(){return k}const z={canScrollNext:Z,canScrollPrev:W,containerNode:C,internalEngine:ut,destroy:P,off:v,on:d,emit:m,plugins:at,previousScrollSnap:st,reInit:p,rootNode:V,scrollNext:K,scrollPrev:H,scrollProgress:ct,scrollSnapList:Q,scrollTo:B,selectedScrollSnap:G,slideNodes:X,slidesInView:rt,slidesNotInView:J};return I(n,e),setTimeout(()=>c.emit("init"),0),z}xt.globalOptions=void 0;function Pt(t={},n=[]){const e=yt(St(t)?t.value:t),r=yt(St(n)?n.value:n),i=yt(),o=yt();function s(){o.value&&o.value.reInit(e.value,r.value)}return mn(()=>{!_n()||!i.value||(xt.globalOptions=Pt.globalOptions,o.value=xt(i.value,e.value,r.value))}),gn(()=>{o.value&&o.value.destroy()}),St(t)&&Rt(t,a=>{Mt(e.value,a)||(e.value=a,s())}),St(n)&&Rt(n,a=>{xn(r.value,a)||(r.value=a,s())}),[i,o]}Pt.globalOptions=void 0;const te={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function Bt(t={}){let n,e,r,i=!1,o=!0,s=!1,a=0,c=0;function u(_,D){e=_;const{mergeOptions:L,optionsAtMedia:k}=D,x=L(te,Bt.globalOptions),O=L(x,t);if(n=k(O),e.scrollSnapList().length<=1)return;s=n.jump,r=!1;const{eventStore:I,ownerDocument:w}=e.internalEngine(),F=e.rootNode(),P=n.rootNode&&n.rootNode(F)||F,B=e.containerNode();e.on("pointerDown",d),n.stopOnInteraction||e.on("pointerUp",l),n.stopOnMouseEnter&&(I.add(P,"mouseenter",()=>{o=!1,d()}),n.stopOnInteraction||I.add(P,"mouseleave",()=>{o=!0,l()})),n.stopOnFocusIn&&(I.add(B,"focusin",d),n.stopOnInteraction||I.add(B,"focusout",l)),I.add(w,"visibilitychange",v),n.playOnInit&&e.on("init",l).on("reInit",l)}function h(){r=!0,i=!1,e.off("init",l).off("reInit",l).off("pointerDown",d).off("pointerUp",l),d(),cancelAnimationFrame(a),a=0}function l(){if(r||!o)return;i||e.emit("autoplay:play");const{ownerWindow:_}=e.internalEngine();_.clearInterval(c),c=_.setInterval(g,n.delay),i=!0}function d(){if(r)return;i&&e.emit("autoplay:stop");const{ownerWindow:_}=e.internalEngine();_.clearInterval(c),c=0,i=!1}function v(){const{ownerDocument:_}=e.internalEngine();if(_.visibilityState==="hidden")return o=i,d();o&&l()}function m(_){typeof _<"u"&&(s=_),o=!0,l()}function p(){i&&d()}function y(){i&&m()}function f(){return i}function g(){a=requestAnimationFrame(()=>{const{index:_}=e.internalEngine(),D=_.clone().add(1).get(),L=e.scrollSnapList().length-1;n.stopOnLastSnap&&D===L&&d(),e.canScrollNext()?e.scrollNext(s):e.scrollTo(0,s)})}return{name:"autoplay",options:t,init:u,destroy:h,play:m,stop:p,reset:y,isPlaying:f}}Bt.globalOptions=void 0;const ne={setup(){const[t]=Pt({loop:!0},[Bt({delay:6e3})]);return{emblaNode:t}},data(){return{items:[{img:"/images/240302-park-opendata.jpg"},{img:"/images/event230115seniorIdeathon.jpg"},{img:"/images/project/project_shindan.jpg"},{img:"/images/project/project_table.jpg"},{img:"/images/project/project_kyouzai.jpg"}]}}},ee={class:"embla",ref:"emblaNode"},oe={class:"embla__container"},se=["src"];function re(t,n,e,r,i,o){return R(),U("div",ee,[E("div",oe,[(R(!0),U(Tt,null,At(i.items,s=>(R(),U("div",{class:"embla__slide",key:s.id},[E("img",{src:s.img,alt:"alt"},null,8,se)]))),128))])],512)}const ie=tn(ne,[["render",re],["__scopeId","data-v-d42a5313"]]),ce=""+globalThis.__publicAssetsURL("images/iconFb.png"),it=t=>(yn("data-v-3a63657c"),t=t(),Sn(),t),ae={class:"nuxt-content"},ue=it(()=>E("h2",{id:"news"},"News",-1)),le={class:"news-date"},fe={key:0,class:"event-date"},de=it(()=>E("span",{class:"event-date-text"},"開催日",-1)),pe=["href"],me={key:0},ge=it(()=>E("span",null,[E("a",{href:"/news"},"more...")],-1)),he={id:"project",class:"nuxt-content"},ye={class:"nuxt-content"},Se=it(()=>E("h2",{id:"event"},"Event",-1)),be=["href"],ve=["src"],_e=it(()=>E("span",null,[E("a",{href:"/events"},"more...")],-1)),xe={id:"message",class:"nuxt-content"},Ie={id:"vision",class:"nuxt-content"},Ee=it(()=>E("article",null,[E("div",{class:"nuxt-content"},[E("h2",null,"Contact"),E("ul",{class:"footer__list"},[E("li",null,"シビックテックさいたま世話人：太田一穂、クワハラシズカ、藤田史織、古川尚史"),E("li",null,"email：civictech.saitama@gmail.com"),E("li",null,[E("a",{href:"https://www.facebook.com/CivicTechSaitamaCity"},[E("img",{src:ce,alt:""})])])])])],-1)),De={__name:"index",async setup(t){let n,e;const r=([n,e]=Ut(()=>Qt("/data").limit(10).sort({eventDate:-1}).sort({date:-1}).where({date:{$gt:new Date(2020)}}).find()),n=await n,e(),n),i=([n,e]=Ut(()=>Qt("/data").limit(9).sort({eventDate:-1}).where({eventDate:{$gt:new Date(2020)}}).find()),n=await n,e(),n);return(o,s)=>{const a=ie,c=bn;return R(),U("div",null,[bt(a),E("article",null,[E("div",ae,[ue,E("ul",null,[(R(!0),U(Tt,null,At(vt(r),(u,h)=>(R(),U("li",{key:h},[E("span",le,wt(("formatDate"in o?o.formatDate:vt(Jt))(u.date)),1),u.eventDate?(R(),U("div",fe,[de,hn(" "+wt(("formatDate"in o?o.formatDate:vt(Jt))(u.eventDate)),1)])):Kt("",!0),E("a",{class:"news-link",href:u.link},[u.link?(R(),U("span",me,wt(u.title),1)):Kt("",!0)],8,pe)]))),128))]),ge])]),E("article",null,[E("div",he,[bt(c,{head:!1,path:"projects"})])]),E("article",null,[E("div",ye,[Se,E("ul",null,[(R(!0),U(Tt,null,At(vt(i),(u,h)=>(R(),U("li",{key:h},[E("a",{href:u.link},[E("img",{src:u.thumb,alt:""},null,8,ve)],8,be)]))),128))]),_e])]),E("article",null,[E("div",xe,[bt(c,{head:!1,path:"message"})])]),E("article",null,[E("div",Ie,[bt(c,{head:!1,path:"vision"})])]),Ee])}}},Pe=tn(De,[["__scopeId","data-v-3a63657c"]]);export{Pe as default};
