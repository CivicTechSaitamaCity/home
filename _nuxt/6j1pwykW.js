import{g as ht,i as yt,h as dn,j as pn,k as Ut,_ as Wt,o as Y,c as Z,a as I,F as wt,r as Tt,l as mn,f as qt,b as bt,u as St,t as Lt,d as gn,m as hn,n as yn,p as bn,e as Sn}from"./Dmv6a7S8.js";import vn from"./kLjPqvYh.js";import{q as Kt}from"./CkauTxoe.js";import{f as Qt}from"./H3-XANmq.js";import"./mQku-27Q.js";import"./B1yly06U.js";import"./Dab4nQFb.js";import"./BsYmvPZw.js";import"./XwIZnF3k.js";import"./Be5ocgjW.js";import"./Bp8L9iNk.js";function xn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Jt(t){return xn(t)||Array.isArray(t)}function _n(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function kt(t,n){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==o?!1:e.every(s=>{const u=t[s],c=n[s];return typeof u=="function"?`${u}`==`${c}`:!Jt(u)||!Jt(c)?u===c:kt(u,c)})}function Xt(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function In(t,n){if(t.length!==n.length)return!1;const e=Xt(t),r=Xt(n);return e.every((i,o)=>{const s=r[o];return kt(i,s)})}function Nt(t){return typeof t=="number"}function At(t){return typeof t=="string"}function Ft(t){return typeof t=="boolean"}function Yt(t){return Object.prototype.toString.call(t)==="[object Object]"}function A(t){return Math.abs(t)}function Ct(t){return Math.sign(t)}function lt(t,n){return A(t-n)}function En(t,n){if(t===0||n===0||A(t)<=A(n))return 0;const e=lt(A(t),A(n));return A(e/t)}function ft(t){return dt(t).map(Number)}function G(t){return t[mt(t)]}function mt(t){return Math.max(0,t.length-1)}function jt(t,n){return n===mt(t)}function Zt(t,n=0){return Array.from(Array(t),(e,r)=>n+r)}function dt(t){return Object.keys(t)}function tn(t,n){return[t,n].reduce((e,r)=>(dt(r).forEach(i=>{const o=e[i],s=r[i],u=Yt(o)&&Yt(s);e[i]=u?tn(o,s):s}),e),{})}function Mt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Dn(t,n){const e={start:r,center:i,end:o};function r(){return 0}function i(c){return o(c)/2}function o(c){return n-c}function s(c,a){return At(t)?e[t](c):t(n,c,a)}return{measure:s}}function pt(){let t=[];function n(i,o,s,u={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(o,s,u),c=()=>i.removeEventListener(o,s,u);else{const a=i;a.addListener(s),c=()=>a.removeListener(s)}return t.push(c),r}function e(){t=t.filter(i=>i())}const r={add:n,clear:e};return r}function On(t,n,e,r){const i=pt(),o=1e3/60;let s=null,u=0,c=0;function a(){i.add(t,"visibilitychange",()=>{t.hidden&&d()})}function m(){v(),i.clear()}function l(h){if(!c)return;s||(s=h);const f=h-s;for(s=h,u+=f;u>=o;)e(),u-=o;const y=A(u/o);r(y),c&&n.requestAnimationFrame(l)}function g(){c||(c=n.requestAnimationFrame(l))}function v(){n.cancelAnimationFrame(c),s=null,u=0,c=0}function d(){s=null,u=0}return{init:a,destroy:m,start:g,stop:v,update:e,render:r}}function Ln(t,n){const e=n==="rtl",r=t==="y",i=r?"y":"x",o=r?"x":"y",s=!r&&e?-1:1,u=m(),c=l();function a(d){const{height:p,width:h}=d;return r?p:h}function m(){return r?"top":e?"right":"left"}function l(){return r?"bottom":e?"left":"right"}function g(d){return d*s}return{scroll:i,cross:o,startEdge:u,endEdge:c,measureSize:a,direction:g}}function st(t=0,n=0){const e=A(t-n);function r(a){return a<t}function i(a){return a>n}function o(a){return r(a)||i(a)}function s(a){return o(a)?r(a)?t:n:a}function u(a){return e?a-e*Math.ceil((a-n)/e):a}return{length:e,max:n,min:t,constrain:s,reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:u}}function nn(t,n,e){const{constrain:r}=st(0,t),i=t+1;let o=s(n);function s(g){return e?A((i+g)%i):r(g)}function u(){return o}function c(g){return o=s(g),l}function a(g){return m().set(u()+g)}function m(){return nn(t,u(),e)}const l={get:u,set:c,add:a,clone:m};return l}function wn(t,n,e,r,i,o,s,u,c,a,m,l,g,v,d,p,h,f,y){const{cross:S,direction:x}=t,E=["INPUT","SELECT","TEXTAREA"],w={passive:!1},_=pt(),D=pt(),L=st(50,225).constrain(v.measure(20)),O={mouse:300,touch:400},M={mouse:500,touch:600},C=d?43:25;let B=!1,P=0,q=0,tt=!1,K=!1,W=!1,Q=!1;function nt(b){if(!y)return;function T(F){(Ft(y)||y(b,F))&&V(F)}const N=n;_.add(N,"dragstart",F=>F.preventDefault(),w).add(N,"touchmove",()=>{},w).add(N,"touchend",()=>{}).add(N,"touchstart",T).add(N,"mousedown",T).add(N,"touchcancel",j).add(N,"contextmenu",j).add(N,"click",it,!0)}function J(){_.clear(),D.clear()}function rt(){const b=Q?e:n;D.add(b,"touchmove",R,w).add(b,"touchend",j).add(b,"mousemove",R,w).add(b,"mouseup",j)}function X(b){const T=b.nodeName||"";return E.includes(T)}function ut(){return(d?M:O)[Q?"mouse":"touch"]}function at(b,T){const N=l.add(Ct(b)*-1),F=m.byDistance(b,!d).distance;return d||A(b)<L?F:h&&T?F*.5:m.byIndex(N.get(),0).distance}function V(b){const T=Mt(b,r);Q=T,W=d&&T&&!b.buttons&&B,B=lt(i.get(),s.get())>=2,!(T&&b.button!==0)&&(X(b.target)||(tt=!0,o.pointerDown(b),a.useFriction(0).useDuration(0),i.set(s),rt(),P=o.readPoint(b),q=o.readPoint(b,S),g.emit("pointerDown")))}function R(b){if(!Mt(b,r)&&b.touches.length>=2)return j(b);const N=o.readPoint(b),F=o.readPoint(b,S),U=lt(N,P),$=lt(F,q);if(!K&&!Q&&(!b.cancelable||(K=U>$,!K)))return j(b);const H=o.pointerMove(b);U>p&&(W=!0),a.useFriction(.3).useDuration(1),u.start(),i.add(x(H)),b.preventDefault()}function j(b){const N=m.byDistance(0,!1).index!==l.get(),F=o.pointerUp(b)*ut(),U=at(x(F),N),$=En(F,U),H=C-10*$,et=f+$/50;K=!1,tt=!1,D.clear(),a.useDuration(H).useFriction(et),c.distance(U,!d),Q=!1,g.emit("pointerUp")}function it(b){W&&(b.stopPropagation(),b.preventDefault(),W=!1)}function z(){return tt}return{init:nt,pointerDown:z,destroy:J}}function Tn(t,n){let r,i;function o(l){return l.timeStamp}function s(l,g){const d=`client${(g||t.scroll)==="x"?"X":"Y"}`;return(Mt(l,n)?l:l.touches[0])[d]}function u(l){return r=l,i=l,s(l)}function c(l){const g=s(l)-s(i),v=o(l)-o(r)>170;return i=l,v&&(r=l),g}function a(l){if(!r||!i)return 0;const g=s(i)-s(r),v=o(l)-o(r),d=o(l)-o(i)>170,p=g/v;return v&&!d&&A(p)>.1?p:0}return{pointerDown:u,pointerMove:c,pointerUp:a,readPoint:s}}function An(){function t(e){const{offsetTop:r,offsetLeft:i,offsetWidth:o,offsetHeight:s}=e;return{top:r,right:i+o,bottom:r+s,left:i,width:o,height:s}}return{measure:t}}function Mn(t){function n(r){return t*(r/100)}return{measure:n}}function kn(t,n,e,r,i,o,s){let u,c,a=[],m=!1;function l(p){return i.measureSize(s.measure(p))}function g(p){if(!o)return;c=l(t),a=r.map(l);function h(y){for(const S of y){const x=S.target===t,E=r.indexOf(S.target),w=x?c:a[E],_=l(x?t:r[E]);if(A(_-w)>=.5){e.requestAnimationFrame(()=>{p.reInit(),n.emit("resize")});break}}}u=new ResizeObserver(y=>{m||(Ft(o)||o(p,y))&&h(y)}),[t].concat(r).forEach(y=>u.observe(y))}function v(){u&&u.disconnect(),m=!0}return{init:g,destroy:v}}function Nn(t,n,e,r,i){let o=0,s=0,u=r,c=i,a=t.get(),m=0;function l(){const E=e.get()-t.get(),w=!u;let _=0;return w?(o=0,t.set(e),_=E):(o+=E/u,o*=c,a+=o,t.add(o),_=a-m),s=Ct(_),m=a,x}function g(){const E=e.get()-n.get();return A(E)<.001}function v(){return u}function d(){return s}function p(){return o}function h(){return y(r)}function f(){return S(i)}function y(E){return u=E,x}function S(E){return c=E,x}const x={direction:d,duration:v,velocity:p,seek:l,settled:g,useBaseFriction:f,useBaseDuration:h,useFriction:S,useDuration:y};return x}function Fn(t,n,e,r,i){const o=i.measure(10),s=i.measure(50),u=st(.1,.99);let c=!1;function a(){return!(c||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function m(v){if(!a())return;const d=t.reachedMin(n.get())?"min":"max",p=A(t[d]-n.get()),h=e.get()-n.get(),f=u.constrain(p/s);e.subtract(h*f),!v&&A(h)<o&&(e.set(t.constrain(e.get())),r.useDuration(25).useBaseFriction())}function l(v){c=!v}return{constrain:m,toggleActive:l}}function Cn(t,n,e,r,i){const o=st(-n+t,0),s=l(),u=m(),c=g();function a(d,p){return lt(d,p)<1}function m(){const d=s[0],p=G(s),h=s.lastIndexOf(d),f=s.indexOf(p)+1;return st(h,f)}function l(){return e.map((d,p)=>{const{min:h,max:f}=o,y=o.constrain(d),S=!p,x=jt(e,p);return S?f:x||a(h,y)?h:a(f,y)?f:y}).map(d=>parseFloat(d.toFixed(3)))}function g(){if(n<=t+i)return[o.max];if(r==="keepSnaps")return s;const{min:d,max:p}=u;return s.slice(d,p)}return{snapsContained:c,scrollContainLimit:u}}function jn(t,n,e){const r=n[0],i=e?r-t:G(n);return{limit:st(i,r)}}function Pn(t,n,e,r){const o=n.min+.1,s=n.max+.1,{reachedMin:u,reachedMax:c}=st(o,s);function a(g){return g===1?c(e.get()):g===-1?u(e.get()):!1}function m(g){if(!a(g))return;const v=t*(g*-1);r.forEach(d=>d.add(v))}return{loop:m}}function Vn(t){const{max:n,length:e}=t;function r(o){const s=o-n;return e?s/-e:0}return{get:r}}function Bn(t,n,e,r,i){const{startEdge:o,endEdge:s}=t,{groupSlides:u}=i,c=l().map(n.measure),a=g(),m=v();function l(){return u(r).map(p=>G(p)[s]-p[0][o]).map(A)}function g(){return r.map(p=>e[o]-p[o]).map(p=>-A(p))}function v(){return u(a).map(p=>p[0]).map((p,h)=>p+c[h])}return{snaps:a,snapsAligned:m}}function zn(t,n,e,r,i,o){const{groupSlides:s}=i,{min:u,max:c}=r,a=m();function m(){const g=s(o),v=!t||n==="keepSnaps";return e.length===1?[o]:v?g:g.slice(u,c).map((d,p,h)=>{const f=!p,y=jt(h,p);if(f){const S=G(h[0])+1;return Zt(S)}if(y){const S=mt(o)-G(h)[0]+1;return Zt(S,G(h)[0])}return d})}return{slideRegistry:a}}function $n(t,n,e,r,i){const{reachedAny:o,removeOffset:s,constrain:u}=r;function c(d){return d.concat().sort((p,h)=>A(p)-A(h))[0]}function a(d){const p=t?s(d):u(d),h=n.map((y,S)=>({diff:m(y-p,0),index:S})).sort((y,S)=>A(y.diff)-A(S.diff)),{index:f}=h[0];return{index:f,distance:p}}function m(d,p){const h=[d,d+e,d-e];if(!t)return h[0];if(!p)return c(h);const f=h.filter(y=>Ct(y)===p);return f.length?c(f):G(h)-e}function l(d,p){const h=n[d]-i.get(),f=m(h,p);return{index:d,distance:f}}function g(d,p){const h=i.get()+d,{index:f,distance:y}=a(h),S=!t&&o(h);if(!p||S)return{index:f,distance:d};const x=n[f]-y,E=d+m(x,0);return{index:f,distance:E}}return{byDistance:g,byIndex:l,shortcut:m}}function Hn(t,n,e,r,i,o,s){function u(l){const g=l.distance,v=l.index!==n.get();o.add(g),g&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),v&&(e.set(n.get()),n.set(l.index),s.emit("select"))}function c(l,g){const v=i.byDistance(l,g);u(v)}function a(l,g){const v=n.clone().set(l),d=i.byIndex(v.get(),g);u(d)}return{distance:c,index:a}}function Gn(t,n,e,r,i,o){let s=0;function u(){o.add(document,"keydown",c,!1),n.forEach(a)}function c(l){l.code==="Tab"&&(s=new Date().getTime())}function a(l){const g=()=>{if(new Date().getTime()-s>10)return;t.scrollLeft=0;const p=n.indexOf(l),h=e.findIndex(f=>f.includes(p));Nt(h)&&(i.useDuration(0),r.index(h,0))};o.add(l,"focus",g,{passive:!0,capture:!0})}return{init:u}}function vt(t){let n=t;function e(){return n}function r(c){n=s(c)}function i(c){n+=s(c)}function o(c){n-=s(c)}function s(c){return Nt(c)?c:c.get()}return{get:e,set:r,add:i,subtract:o}}function en(t,n){const e=t.scroll==="x"?o:s,r=n.style;let i=!1;function o(l){return`translate3d(${l}px,0px,0px)`}function s(l){return`translate3d(0px,${l}px,0px)`}function u(l){i||(r.transform=e(t.direction(l)))}function c(l){i=!l}function a(){i||(r.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:a,to:u,toggleActive:c}}function Rn(t,n,e,r,i,o,s,u,c){const m=ft(i),l=ft(i).reverse(),g=f().concat(y());function v(_,D){return _.reduce((L,O)=>L-i[O],D)}function d(_,D){return _.reduce((L,O)=>v(L,D)>0?L.concat([O]):L,[])}function p(_){return o.map((D,L)=>({start:D-r[L]+.5+_,end:D+n-.5+_}))}function h(_,D,L){const O=p(D);return _.map(M=>{const C=L?0:-e,B=L?e:0,P=L?"end":"start",q=O[M][P];return{index:M,loopPoint:q,slideLocation:vt(-1),translate:en(t,c[M]),target:()=>u.get()>q?C:B}})}function f(){const _=s[0],D=d(l,_);return h(D,e,!1)}function y(){const _=n-s[0]-1,D=d(m,_);return h(D,-e,!0)}function S(){return g.every(({index:_})=>{const D=m.filter(L=>L!==_);return v(D,n)<=.1})}function x(){g.forEach(_=>{const{target:D,translate:L,slideLocation:O}=_,M=D();M!==O.get()&&(L.to(M),O.set(M))})}function E(){g.forEach(_=>_.translate.clear())}return{canLoop:S,clear:E,loop:x,loopPoints:g}}function Un(t,n,e){let r,i=!1;function o(c){if(!e)return;function a(m){for(const l of m)if(l.type==="childList"){c.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(m=>{i||(Ft(e)||e(c,m))&&a(m)}),r.observe(t,{childList:!0})}function s(){r&&r.disconnect(),i=!0}return{init:o,destroy:s}}function qn(t,n,e,r){const i={};let o=null,s=null,u,c=!1;function a(){u=new IntersectionObserver(d=>{c||(d.forEach(p=>{const h=n.indexOf(p.target);i[h]=p}),o=null,s=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(d=>u.observe(d))}function m(){u&&u.disconnect(),c=!0}function l(d){return dt(i).reduce((p,h)=>{const f=parseInt(h),{isIntersecting:y}=i[f];return(d&&y||!d&&!y)&&p.push(f),p},[])}function g(d=!0){if(d&&o)return o;if(!d&&s)return s;const p=l(d);return d&&(o=p),d||(s=p),p}return{init:a,destroy:m,get:g}}function Kn(t,n,e,r,i,o){const{measureSize:s,startEdge:u,endEdge:c}=t,a=e[0]&&i,m=d(),l=p(),g=e.map(s),v=h();function d(){if(!a)return 0;const y=e[0];return A(n[u]-y[u])}function p(){if(!a)return 0;const y=o.getComputedStyle(G(r));return parseFloat(y.getPropertyValue(`margin-${c}`))}function h(){return e.map((y,S,x)=>{const E=!S,w=jt(x,S);return E?g[S]+m:w?g[S]+l:x[S+1][u]-y[u]}).map(A)}return{slideSizes:g,slideSizesWithGaps:v,startGap:m,endGap:l}}function Qn(t,n,e,r,i,o,s,u,c){const{startEdge:a,endEdge:m,direction:l}=t,g=Nt(e);function v(f,y){return ft(f).filter(S=>S%y===0).map(S=>f.slice(S,S+y))}function d(f){return f.length?ft(f).reduce((y,S,x)=>{const E=G(y)||0,w=E===0,_=S===mt(f),D=i[a]-o[E][a],L=i[a]-o[S][m],O=!r&&w?l(s):0,M=!r&&_?l(u):0,C=A(L-M-(D+O));return x&&C>n+c&&y.push(S),_&&y.push(f.length),y},[]).map((y,S,x)=>{const E=Math.max(x[S-1]||0);return f.slice(E,y)}):[]}function p(f){return g?v(f,e):d(f)}return{groupSlides:p}}function Jn(t,n,e,r,i,o,s){const{align:u,axis:c,direction:a,startIndex:m,loop:l,duration:g,dragFree:v,dragThreshold:d,inViewThreshold:p,slidesToScroll:h,skipSnaps:f,containScroll:y,watchResize:S,watchSlides:x,watchDrag:E}=o,w=2,_=An(),D=_.measure(n),L=e.map(_.measure),O=Ln(c,a),M=O.measureSize(D),C=Mn(M),B=Dn(u,M),P=!l&&!!y,q=l||!!y,{slideSizes:tt,slideSizesWithGaps:K,startGap:W,endGap:Q}=Kn(O,D,L,e,q,i),nt=Qn(O,M,h,l,D,L,W,Q,w),{snaps:J,snapsAligned:rt}=Bn(O,B,D,L,nt),X=-G(J)+G(K),{snapsContained:ut,scrollContainLimit:at}=Cn(M,X,rt,y,w),V=P?ut:rt,{limit:R}=jn(X,V,l),j=nn(mt(V),m,l),it=j.clone(),z=ft(e),k=({dragHandler:ot,scrollBody:Dt,scrollBounds:Ot,options:{loop:gt}})=>{gt||Ot.constrain(ot.pointerDown()),Dt.seek()},b=({scrollBody:ot,translate:Dt,location:Ot,offsetLocation:gt,scrollLooper:rn,slideLooper:cn,dragHandler:un,animation:an,eventHandler:Ht,options:{loop:ln}},fn)=>{const Gt=ot.velocity(),Rt=ot.settled();Rt&&!un.pointerDown()&&(an.stop(),Ht.emit("settle")),Rt||Ht.emit("scroll"),gt.set(Ot.get()-Gt+Gt*fn),ln&&(rn.loop(ot.direction()),cn.loop()),Dt.to(gt.get())},T=On(r,i,()=>k(Et),ot=>b(Et,ot)),N=.68,F=V[j.get()],U=vt(F),$=vt(F),H=vt(F),et=Nn(U,$,H,g,N),_t=$n(l,V,X,R,H),It=Hn(T,j,it,et,_t,H,s),Bt=Vn(R),zt=pt(),on=qn(n,e,s,p),{slideRegistry:$t}=zn(P,y,V,at,nt,z),sn=Gn(t,e,$t,It,et,zt),Et={ownerDocument:r,ownerWindow:i,eventHandler:s,containerRect:D,slideRects:L,animation:T,axis:O,dragHandler:wn(O,t,r,i,H,Tn(O,i),U,T,It,et,_t,j,s,C,v,d,f,N,E),eventStore:zt,percentOfView:C,index:j,indexPrevious:it,limit:R,location:U,offsetLocation:$,options:o,resizeHandler:kn(n,s,i,e,O,S,_),scrollBody:et,scrollBounds:Fn(R,$,H,et,C),scrollLooper:Pn(X,R,$,[U,$,H]),scrollProgress:Bt,scrollSnapList:V.map(Bt.get),scrollSnaps:V,scrollTarget:_t,scrollTo:It,slideLooper:Rn(O,M,X,tt,K,J,V,$,e),slideFocus:sn,slidesHandler:Un(n,s,x),slidesInView:on,slideIndexes:z,slideRegistry:$t,slidesToScroll:nt,target:H,translate:en(O,n)};return Et}function Xn(){const t={};let n;function e(c){n=c}function r(c){return t[c]||[]}function i(c){return r(c).forEach(a=>a(n,c)),u}function o(c,a){return t[c]=r(c).concat([a]),u}function s(c,a){return t[c]=r(c).filter(m=>m!==a),u}const u={init:e,emit:i,off:s,on:o};return u}const Yn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Zn(t){function n(o,s){return tn(o,s||{})}function e(o){const s=o.breakpoints||{},u=dt(s).filter(c=>t.matchMedia(c).matches).map(c=>s[c]).reduce((c,a)=>n(c,a),{});return n(o,u)}function r(o){return o.map(s=>dt(s.breakpoints||{})).reduce((s,u)=>s.concat(u),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:r}}function Wn(t){let n=[];function e(o,s){return n=s.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),n.forEach(u=>u.init(o,t)),s.reduce((u,c)=>Object.assign(u,{[c.name]:c}),{})}function r(){n=n.filter(o=>o.destroy())}return{init:e,destroy:r}}function xt(t,n,e){const r=t.ownerDocument,i=r.defaultView,o=Zn(i),s=Wn(o),u=pt(),c=Xn(),{mergeOptions:a,optionsAtMedia:m,optionsMediaQueries:l}=o,{on:g,off:v,emit:d}=c,p=M;let h=!1,f,y=a(Yn,xt.globalOptions),S=a(y),x=[],E,w,_;function D(){const{container:k,slides:b}=S;w=(At(k)?t.querySelector(k):k)||t.children[0];const N=At(b)?w.querySelectorAll(b):b;_=[].slice.call(N||w.children)}function L(k){const b=Jn(t,w,_,r,i,k,c);if(k.loop&&!b.slideLooper.canLoop()){const T=Object.assign({},k,{loop:!1});return L(T)}return b}function O(k,b){h||(y=a(y,k),S=m(y),x=b||x,D(),f=L(S),l([y,...x.map(({options:T})=>T)]).forEach(T=>u.add(T,"change",M)),S.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(),f.eventHandler.init(z),f.resizeHandler.init(z),f.slidesHandler.init(z),f.options.loop&&f.slideLooper.loop(),w.offsetParent&&_.length&&f.dragHandler.init(z),E=s.init(z,x)))}function M(k,b){const T=J();C(),O(a({startIndex:T},k),b),c.emit("reInit")}function C(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),s.destroy(),u.clear()}function B(){h||(h=!0,u.clear(),C(),c.emit("destroy"))}function P(k,b,T){!S.active||h||(f.scrollBody.useBaseFriction().useDuration(b===!0?0:S.duration),f.scrollTo.index(k,T||0))}function q(k){const b=f.index.add(1).get();P(b,k,-1)}function tt(k){const b=f.index.add(-1).get();P(b,k,1)}function K(){return f.index.add(1).get()!==J()}function W(){return f.index.add(-1).get()!==J()}function Q(){return f.scrollSnapList}function nt(){return f.scrollProgress.get(f.location.get())}function J(){return f.index.get()}function rt(){return f.indexPrevious.get()}function X(){return f.slidesInView.get()}function ut(){return f.slidesInView.get(!1)}function at(){return E}function V(){return f}function R(){return t}function j(){return w}function it(){return _}const z={canScrollNext:K,canScrollPrev:W,containerNode:j,internalEngine:V,destroy:B,off:v,on:g,emit:d,plugins:at,previousScrollSnap:rt,reInit:p,rootNode:R,scrollNext:q,scrollPrev:tt,scrollProgress:nt,scrollSnapList:Q,scrollTo:P,selectedScrollSnap:J,slideNodes:it,slidesInView:X,slidesNotInView:ut};return O(n,e),setTimeout(()=>c.emit("init"),0),z}xt.globalOptions=void 0;function Pt(t={},n=[]){const e=ht(yt(t)?t.value:t),r=ht(yt(n)?n.value:n),i=ht(),o=ht();function s(){o.value&&o.value.reInit(e.value,r.value)}return dn(()=>{!_n()||!i.value||(xt.globalOptions=Pt.globalOptions,o.value=xt(i.value,e.value,r.value))}),pn(()=>{o.value&&o.value.destroy()}),yt(t)&&Ut(t,u=>{kt(e.value,u)||(e.value=u,s())}),yt(n)&&Ut(n,u=>{In(r.value,u)||(r.value=u,s())}),[i,o]}Pt.globalOptions=void 0;const te={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function Vt(t={}){let n,e,r,i=!1,o=!0,s=!1,u=0;function c(x,E){e=x;const{mergeOptions:w,optionsAtMedia:_}=E,D=w(te,Vt.globalOptions),L=w(D,t);if(n=_(L),e.scrollSnapList().length<=1)return;s=n.jump,r=!1;const{eventStore:O,ownerDocument:M}=e.internalEngine(),C=e.rootNode(),B=n.rootNode&&n.rootNode(C)||C,P=e.containerNode();e.on("pointerDown",l),n.stopOnInteraction||e.on("pointerUp",m),n.stopOnMouseEnter&&(O.add(B,"mouseenter",()=>{o=!1,l()}),n.stopOnInteraction||O.add(B,"mouseleave",()=>{o=!0,m()})),n.stopOnFocusIn&&(O.add(P,"focusin",l),n.stopOnInteraction||O.add(P,"focusout",m)),O.add(M,"visibilitychange",g),n.playOnInit&&!v()&&m()}function a(){e.off("pointerDown",l).off("pointerUp",m),l(),r=!0,i=!1}function m(){if(r||!o)return;i||e.emit("autoplay:play");const{ownerWindow:x}=e.internalEngine();x.clearInterval(u),u=x.setInterval(y,n.delay),i=!0}function l(){if(r)return;i&&e.emit("autoplay:stop");const{ownerWindow:x}=e.internalEngine();x.clearInterval(u),u=0,i=!1}function g(){if(v())return o=i,l();o&&m()}function v(){const{ownerDocument:x}=e.internalEngine();return x.visibilityState==="hidden"}function d(x){typeof x<"u"&&(s=x),o=!0,m()}function p(){i&&l()}function h(){i&&d()}function f(){return i}function y(){const{index:x}=e.internalEngine(),E=x.clone().add(1).get(),w=e.scrollSnapList().length-1;n.stopOnLastSnap&&E===w&&l(),e.canScrollNext()?e.scrollNext(s):e.scrollTo(0,s)}return{name:"autoplay",options:t,init:c,destroy:a,play:d,stop:p,reset:h,isPlaying:f}}Vt.globalOptions=void 0;const ne={setup(){const[t]=Pt({loop:!0},[Vt({delay:6e3})]);return{emblaNode:t}},data(){return{items:[{img:"/images/240302-park-opendata.jpg"},{img:"/images/event230115seniorIdeathon.jpg"},{img:"/images/project/project_shindan.jpg"},{img:"/images/project/project_table.jpg"},{img:"/images/project/project_kyouzai.jpg"}]}}},ee={class:"embla",ref:"emblaNode"},oe={class:"embla__container"},se=["src"];function re(t,n,e,r,i,o){return Y(),Z("div",ee,[I("div",oe,[(Y(!0),Z(wt,null,Tt(i.items,s=>(Y(),Z("div",{class:"embla__slide",key:s.id},[I("img",{src:s.img,alt:"alt"},null,8,se)]))),128))])],512)}const ie=Wt(ne,[["render",re],["__scopeId","data-v-d42a5313"]]),ce=mn("/images/iconFb.png"),ct=t=>(bn("data-v-14a84f6b"),t=t(),Sn(),t),ue={class:"nuxt-content"},ae=ct(()=>I("h2",{id:"news"},"News",-1)),le={class:"news-date"},fe={key:0,class:"event-date"},de=ct(()=>I("span",{class:"event-date-text"},"開催日",-1)),pe=["href"],me=ct(()=>I("span",null,[I("a",{href:"/news"},"more...")],-1)),ge={id:"project",class:"nuxt-content"},he={class:"nuxt-content"},ye=ct(()=>I("h2",{id:"event"},"Event",-1)),be=["href"],Se=["src"],ve=ct(()=>I("span",null,[I("a",{href:"/events"},"more...")],-1)),xe={id:"message",class:"nuxt-content"},_e={id:"vision",class:"nuxt-content"},Ie=ct(()=>I("article",null,[I("div",{class:"nuxt-content"},[I("h2",null,"Contact"),I("ul",{class:"footer__list"},[I("li",null," シビックテックさいたま世話人：太田一穂、クワハラシズカ、藤田史織、古川尚史 "),I("li",null,"email：civictech.saitama@gmail.com"),I("li",null,[I("a",{href:"https://www.facebook.com/CivicTechSaitamaCity"},[I("img",{src:ce,alt:""})])])])])],-1)),Ee={__name:"index",async setup(t){let n,e;const r=([n,e]=qt(()=>Kt("/data").limit(10).sort({eventDate:-1}).sort({date:-1}).where({date:{$gt:new Date(2020)}}).find()),n=await n,e(),n),i=([n,e]=qt(()=>Kt("/data").limit(9).sort({eventDate:-1}).where({eventDate:{$gt:new Date(2020)}}).find()),n=await n,e(),n);return(o,s)=>{const u=ie,c=vn;return Y(),Z("div",null,[bt(u),I("article",null,[I("div",ue,[ae,I("ul",null,[(Y(!0),Z(wt,null,Tt(St(r),(a,m)=>(Y(),Z("li",{key:m},[I("span",le,Lt(("formatDate"in o?o.formatDate:St(Qt))(a.date)),1),a.eventDate?(Y(),Z("div",fe,[de,gn(" "+Lt(("formatDate"in o?o.formatDate:St(Qt))(a.eventDate)),1)])):hn("",!0),I("a",{class:"news-link",href:a.link},[I("span",null,Lt(a.title),1)],8,pe)]))),128))]),me])]),I("article",null,[I("div",ge,[bt(c,{head:!1,path:"projects"})])]),I("article",null,[I("div",he,[ye,I("ul",null,[(Y(!0),Z(wt,null,Tt(St(i),(a,m)=>(Y(),Z("li",{key:m,class:yn({"is-hidden":a.thumb===o.none})},[I("a",{href:a.link},[I("img",{src:a.thumb,alt:""},null,8,Se)],8,be)],2))),128))]),ve])]),I("article",null,[I("div",xe,[bt(c,{head:!1,path:"message"})])]),I("article",null,[I("div",_e,[bt(c,{head:!1,path:"vision"})])]),Ie])}}},je=Wt(Ee,[["__scopeId","data-v-14a84f6b"]]);export{je as default};
