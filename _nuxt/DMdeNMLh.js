import{g as ht,i as yt,h as dn,j as pn,k as Ut,_ as Wt,o as Y,c as Z,a as I,F as wt,r as Tt,l as mn,f as qt,b as bt,u as St,t as Lt,d as gn,m as hn,n as yn,p as bn,e as Sn}from"./jtGvQ0ro.js";import vn from"./DQyEhJ7W.js";import{q as Kt}from"./C_6f9VOW.js";import{f as Qt}from"./H3-XANmq.js";import"./DZOwWkQ-.js";import"./DhixM7LJ.js";import"./DO2LC5Tp.js";import"./BsYmvPZw.js";import"./BANh9eep.js";import"./C_dpdur8.js";import"./BgT_-Vca.js";function xn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Jt(t){return xn(t)||Array.isArray(t)}function _n(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function kt(t,n){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==o?!1:e.every(s=>{const c=t[s],u=n[s];return typeof c=="function"?`${c}`==`${u}`:!Jt(c)||!Jt(u)?c===u:kt(c,u)})}function Xt(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function In(t,n){if(t.length!==n.length)return!1;const e=Xt(t),r=Xt(n);return e.every((i,o)=>{const s=r[o];return kt(i,s)})}function Nt(t){return typeof t=="number"}function At(t){return typeof t=="string"}function Ft(t){return typeof t=="boolean"}function Yt(t){return Object.prototype.toString.call(t)==="[object Object]"}function A(t){return Math.abs(t)}function Ct(t){return Math.sign(t)}function lt(t,n){return A(t-n)}function En(t,n){if(t===0||n===0||A(t)<=A(n))return 0;const e=lt(A(t),A(n));return A(e/t)}function ft(t){return dt(t).map(Number)}function G(t){return t[mt(t)]}function mt(t){return Math.max(0,t.length-1)}function jt(t,n){return n===mt(t)}function Zt(t,n=0){return Array.from(Array(t),(e,r)=>n+r)}function dt(t){return Object.keys(t)}function tn(t,n){return[t,n].reduce((e,r)=>(dt(r).forEach(i=>{const o=e[i],s=r[i],c=Yt(o)&&Yt(s);e[i]=c?tn(o,s):s}),e),{})}function Mt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Dn(t,n){const e={start:r,center:i,end:o};function r(){return 0}function i(u){return o(u)/2}function o(u){return n-u}function s(u,a){return At(t)?e[t](u):t(n,u,a)}return{measure:s}}function pt(){let t=[];function n(i,o,s,c={passive:!0}){let u;if("addEventListener"in i)i.addEventListener(o,s,c),u=()=>i.removeEventListener(o,s,c);else{const a=i;a.addListener(s),u=()=>a.removeListener(s)}return t.push(u),r}function e(){t=t.filter(i=>i())}const r={add:n,clear:e};return r}function On(t,n,e,r){const i=pt(),o=1e3/60;let s=null,c=0,u=0;function a(){i.add(t,"visibilitychange",()=>{t.hidden&&d()})}function m(){S(),i.clear()}function l(y){if(!u)return;s||(s=y);const f=y-s;for(s=y,c+=f;c>=o;)e(),c-=o;const h=A(c/o);r(h),u&&n.requestAnimationFrame(l)}function g(){u||(u=n.requestAnimationFrame(l))}function S(){n.cancelAnimationFrame(u),s=null,c=0,u=0}function d(){s=null,c=0}return{init:a,destroy:m,start:g,stop:S,update:e,render:r}}function Ln(t,n){const e=n==="rtl",r=t==="y",i=r?"y":"x",o=r?"x":"y",s=!r&&e?-1:1,c=m(),u=l();function a(d){const{height:p,width:y}=d;return r?p:y}function m(){return r?"top":e?"right":"left"}function l(){return r?"bottom":e?"left":"right"}function g(d){return d*s}return{scroll:i,cross:o,startEdge:c,endEdge:u,measureSize:a,direction:g}}function st(t=0,n=0){const e=A(t-n);function r(a){return a<t}function i(a){return a>n}function o(a){return r(a)||i(a)}function s(a){return o(a)?r(a)?t:n:a}function c(a){return e?a-e*Math.ceil((a-n)/e):a}return{length:e,max:n,min:t,constrain:s,reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:c}}function nn(t,n,e){const{constrain:r}=st(0,t),i=t+1;let o=s(n);function s(g){return e?A((i+g)%i):r(g)}function c(){return o}function u(g){return o=s(g),l}function a(g){return m().set(c()+g)}function m(){return nn(t,c(),e)}const l={get:c,set:u,add:a,clone:m};return l}function wn(t,n,e,r,i,o,s,c,u,a,m,l,g,S,d,p,y,f,h){const{cross:v,direction:x}=t,E=["INPUT","SELECT","TEXTAREA"],w={passive:!1},_=pt(),D=pt(),L=st(50,225).constrain(S.measure(20)),O={mouse:300,touch:400},M={mouse:500,touch:600},C=d?43:25;let B=!1,P=0,q=0,tt=!1,K=!1,W=!1,Q=!1;function nt(b){if(!h)return;function T(F){(Ft(h)||h(b,F))&&V(F)}const N=n;_.add(N,"dragstart",F=>F.preventDefault(),w).add(N,"touchmove",()=>{},w).add(N,"touchend",()=>{}).add(N,"touchstart",T).add(N,"mousedown",T).add(N,"touchcancel",j).add(N,"contextmenu",j).add(N,"click",it,!0)}function J(){_.clear(),D.clear()}function rt(){const b=Q?e:n;D.add(b,"touchmove",R,w).add(b,"touchend",j).add(b,"mousemove",R,w).add(b,"mouseup",j)}function X(b){const T=b.nodeName||"";return E.includes(T)}function ut(){return(d?M:O)[Q?"mouse":"touch"]}function at(b,T){const N=l.add(Ct(b)*-1),F=m.byDistance(b,!d).distance;return d||A(b)<L?F:y&&T?F*.5:m.byIndex(N.get(),0).distance}function V(b){const T=Mt(b,r);Q=T,W=d&&T&&!b.buttons&&B,B=lt(i.get(),s.get())>=2,!(T&&b.button!==0)&&(X(b.target)||(tt=!0,o.pointerDown(b),a.useFriction(0).useDuration(0),i.set(s),rt(),P=o.readPoint(b),q=o.readPoint(b,v),g.emit("pointerDown")))}function R(b){if(!Mt(b,r)&&b.touches.length>=2)return j(b);const N=o.readPoint(b),F=o.readPoint(b,v),U=lt(N,P),$=lt(F,q);if(!K&&!Q&&(!b.cancelable||(K=U>$,!K)))return j(b);const H=o.pointerMove(b);U>p&&(W=!0),a.useFriction(.3).useDuration(.75),c.start(),i.add(x(H)),b.preventDefault()}function j(b){const N=m.byDistance(0,!1).index!==l.get(),F=o.pointerUp(b)*ut(),U=at(x(F),N),$=En(F,U),H=C-10*$,et=f+$/50;K=!1,tt=!1,D.clear(),a.useDuration(H).useFriction(et),u.distance(U,!d),Q=!1,g.emit("pointerUp")}function it(b){W&&(b.stopPropagation(),b.preventDefault(),W=!1)}function z(){return tt}return{init:nt,destroy:J,pointerDown:z}}function Tn(t,n){let r,i;function o(l){return l.timeStamp}function s(l,g){const d=`client${(g||t.scroll)==="x"?"X":"Y"}`;return(Mt(l,n)?l:l.touches[0])[d]}function c(l){return r=l,i=l,s(l)}function u(l){const g=s(l)-s(i),S=o(l)-o(r)>170;return i=l,S&&(r=l),g}function a(l){if(!r||!i)return 0;const g=s(i)-s(r),S=o(l)-o(r),d=o(l)-o(i)>170,p=g/S;return S&&!d&&A(p)>.1?p:0}return{pointerDown:c,pointerMove:u,pointerUp:a,readPoint:s}}function An(){function t(e){const{offsetTop:r,offsetLeft:i,offsetWidth:o,offsetHeight:s}=e;return{top:r,right:i+o,bottom:r+s,left:i,width:o,height:s}}return{measure:t}}function Mn(t){function n(r){return t*(r/100)}return{measure:n}}function kn(t,n,e,r,i,o,s){let c,u,a=[],m=!1;function l(p){return i.measureSize(s.measure(p))}function g(p){if(!o)return;u=l(t),a=r.map(l);function y(h){for(const v of h){const x=v.target===t,E=r.indexOf(v.target),w=x?u:a[E],_=l(x?t:r[E]);if(A(_-w)>=.5){e.requestAnimationFrame(()=>{p.reInit(),n.emit("resize")});break}}}c=new ResizeObserver(h=>{m||(Ft(o)||o(p,h))&&y(h)}),[t].concat(r).forEach(h=>c.observe(h))}function S(){c&&c.disconnect(),m=!0}return{init:g,destroy:S}}function Nn(t,n,e,r,i){let o=0,s=0,c=r,u=i,a=t.get(),m=0;function l(){const E=e.get()-t.get(),w=!c;let _=0;return w?(o=0,t.set(e),_=E):(o+=E/c,o*=u,a+=o,t.add(o),_=a-m),s=Ct(_),m=a,x}function g(){const E=e.get()-n.get();return A(E)<.001}function S(){return c}function d(){return s}function p(){return o}function y(){return h(r)}function f(){return v(i)}function h(E){return c=E,x}function v(E){return u=E,x}const x={direction:d,duration:S,velocity:p,seek:l,settled:g,useBaseFriction:f,useBaseDuration:y,useFriction:v,useDuration:h};return x}function Fn(t,n,e,r,i){const o=i.measure(10),s=i.measure(50),c=st(.1,.99);let u=!1;function a(){return!(u||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function m(S){if(!a())return;const d=t.reachedMin(n.get())?"min":"max",p=A(t[d]-n.get()),y=e.get()-n.get(),f=c.constrain(p/s);e.subtract(y*f),!S&&A(y)<o&&(e.set(t.constrain(e.get())),r.useDuration(25).useBaseFriction())}function l(S){u=!S}return{constrain:m,toggleActive:l}}function Cn(t,n,e,r,i){const o=st(-n+t,0),s=l(),c=m(),u=g();function a(d,p){return lt(d,p)<1}function m(){const d=s[0],p=G(s),y=s.lastIndexOf(d),f=s.indexOf(p)+1;return st(y,f)}function l(){return e.map((d,p)=>{const{min:y,max:f}=o,h=o.constrain(d),v=!p,x=jt(e,p);return v?f:x||a(y,h)?y:a(f,h)?f:h}).map(d=>parseFloat(d.toFixed(3)))}function g(){if(n<=t+i)return[o.max];if(r==="keepSnaps")return s;const{min:d,max:p}=c;return s.slice(d,p)}return{snapsContained:u,scrollContainLimit:c}}function jn(t,n,e){const r=n[0],i=e?r-t:G(n);return{limit:st(i,r)}}function Pn(t,n,e,r){const o=n.min+.1,s=n.max+.1,{reachedMin:c,reachedMax:u}=st(o,s);function a(g){return g===1?u(e.get()):g===-1?c(e.get()):!1}function m(g){if(!a(g))return;const S=t*(g*-1);r.forEach(d=>d.add(S))}return{loop:m}}function Vn(t){const{max:n,length:e}=t;function r(o){const s=o-n;return e?s/-e:0}return{get:r}}function Bn(t,n,e,r,i){const{startEdge:o,endEdge:s}=t,{groupSlides:c}=i,u=l().map(n.measure),a=g(),m=S();function l(){return c(r).map(p=>G(p)[s]-p[0][o]).map(A)}function g(){return r.map(p=>e[o]-p[o]).map(p=>-A(p))}function S(){return c(a).map(p=>p[0]).map((p,y)=>p+u[y])}return{snaps:a,snapsAligned:m}}function zn(t,n,e,r,i,o){const{groupSlides:s}=i,{min:c,max:u}=r,a=m();function m(){const g=s(o),S=!t||n==="keepSnaps";return e.length===1?[o]:S?g:g.slice(c,u).map((d,p,y)=>{const f=!p,h=jt(y,p);if(f){const v=G(y[0])+1;return Zt(v)}if(h){const v=mt(o)-G(y)[0]+1;return Zt(v,G(y)[0])}return d})}return{slideRegistry:a}}function $n(t,n,e,r,i){const{reachedAny:o,removeOffset:s,constrain:c}=r;function u(d){return d.concat().sort((p,y)=>A(p)-A(y))[0]}function a(d){const p=t?s(d):c(d),y=n.map((h,v)=>({diff:m(h-p,0),index:v})).sort((h,v)=>A(h.diff)-A(v.diff)),{index:f}=y[0];return{index:f,distance:p}}function m(d,p){const y=[d,d+e,d-e];if(!t)return d;if(!p)return u(y);const f=y.filter(h=>Ct(h)===p);return f.length?u(f):G(y)-e}function l(d,p){const y=n[d]-i.get(),f=m(y,p);return{index:d,distance:f}}function g(d,p){const y=i.get()+d,{index:f,distance:h}=a(y),v=!t&&o(y);if(!p||v)return{index:f,distance:d};const x=n[f]-h,E=d+m(x,0);return{index:f,distance:E}}return{byDistance:g,byIndex:l,shortcut:m}}function Hn(t,n,e,r,i,o,s){function c(l){const g=l.distance,S=l.index!==n.get();o.add(g),g&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),S&&(e.set(n.get()),n.set(l.index),s.emit("select"))}function u(l,g){const S=i.byDistance(l,g);c(S)}function a(l,g){const S=n.clone().set(l),d=i.byIndex(S.get(),g);c(d)}return{distance:u,index:a}}function Gn(t,n,e,r,i,o,s){let c=0;function u(){o.add(document,"keydown",a,!1),n.forEach(m)}function a(g){g.code==="Tab"&&(c=new Date().getTime())}function m(g){const S=()=>{if(new Date().getTime()-c>10)return;t.scrollLeft=0;const y=n.indexOf(g),f=e.findIndex(h=>h.includes(y));Nt(f)&&(i.useDuration(0),r.index(f,0),s.emit("slideFocus"))};o.add(g,"focus",S,{passive:!0,capture:!0})}return{init:u}}function vt(t){let n=t;function e(){return n}function r(u){n=s(u)}function i(u){n+=s(u)}function o(u){n-=s(u)}function s(u){return Nt(u)?u:u.get()}return{get:e,set:r,add:i,subtract:o}}function en(t,n){const e=t.scroll==="x"?o:s,r=n.style;let i=!1;function o(l){return`translate3d(${l}px,0px,0px)`}function s(l){return`translate3d(0px,${l}px,0px)`}function c(l){i||(r.transform=e(t.direction(l)))}function u(l){i=!l}function a(){i||(r.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:a,to:c,toggleActive:u}}function Rn(t,n,e,r,i,o,s,c,u){const m=ft(i),l=ft(i).reverse(),g=f().concat(h());function S(_,D){return _.reduce((L,O)=>L-i[O],D)}function d(_,D){return _.reduce((L,O)=>S(L,D)>0?L.concat([O]):L,[])}function p(_){return o.map((D,L)=>({start:D-r[L]+.5+_,end:D+n-.5+_}))}function y(_,D,L){const O=p(D);return _.map(M=>{const C=L?0:-e,B=L?e:0,P=L?"end":"start",q=O[M][P];return{index:M,loopPoint:q,slideLocation:vt(-1),translate:en(t,u[M]),target:()=>c.get()>q?C:B}})}function f(){const _=s[0],D=d(l,_);return y(D,e,!1)}function h(){const _=n-s[0]-1,D=d(m,_);return y(D,-e,!0)}function v(){return g.every(({index:_})=>{const D=m.filter(L=>L!==_);return S(D,n)<=.1})}function x(){g.forEach(_=>{const{target:D,translate:L,slideLocation:O}=_,M=D();M!==O.get()&&(L.to(M),O.set(M))})}function E(){g.forEach(_=>_.translate.clear())}return{canLoop:v,clear:E,loop:x,loopPoints:g}}function Un(t,n,e){let r,i=!1;function o(u){if(!e)return;function a(m){for(const l of m)if(l.type==="childList"){u.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(m=>{i||(Ft(e)||e(u,m))&&a(m)}),r.observe(t,{childList:!0})}function s(){r&&r.disconnect(),i=!0}return{init:o,destroy:s}}function qn(t,n,e,r){const i={};let o=null,s=null,c,u=!1;function a(){c=new IntersectionObserver(d=>{u||(d.forEach(p=>{const y=n.indexOf(p.target);i[y]=p}),o=null,s=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(d=>c.observe(d))}function m(){c&&c.disconnect(),u=!0}function l(d){return dt(i).reduce((p,y)=>{const f=parseInt(y),{isIntersecting:h}=i[f];return(d&&h||!d&&!h)&&p.push(f),p},[])}function g(d=!0){if(d&&o)return o;if(!d&&s)return s;const p=l(d);return d&&(o=p),d||(s=p),p}return{init:a,destroy:m,get:g}}function Kn(t,n,e,r,i,o){const{measureSize:s,startEdge:c,endEdge:u}=t,a=e[0]&&i,m=d(),l=p(),g=e.map(s),S=y();function d(){if(!a)return 0;const h=e[0];return A(n[c]-h[c])}function p(){if(!a)return 0;const h=o.getComputedStyle(G(r));return parseFloat(h.getPropertyValue(`margin-${u}`))}function y(){return e.map((h,v,x)=>{const E=!v,w=jt(x,v);return E?g[v]+m:w?g[v]+l:x[v+1][c]-h[c]}).map(A)}return{slideSizes:g,slideSizesWithGaps:S,startGap:m,endGap:l}}function Qn(t,n,e,r,i,o,s,c,u){const{startEdge:a,endEdge:m,direction:l}=t,g=Nt(e);function S(f,h){return ft(f).filter(v=>v%h===0).map(v=>f.slice(v,v+h))}function d(f){return f.length?ft(f).reduce((h,v,x)=>{const E=G(h)||0,w=E===0,_=v===mt(f),D=i[a]-o[E][a],L=i[a]-o[v][m],O=!r&&w?l(s):0,M=!r&&_?l(c):0,C=A(L-M-(D+O));return x&&C>n+u&&h.push(v),_&&h.push(f.length),h},[]).map((h,v,x)=>{const E=Math.max(x[v-1]||0);return f.slice(E,h)}):[]}function p(f){return g?S(f,e):d(f)}return{groupSlides:p}}function Jn(t,n,e,r,i,o,s){const{align:c,axis:u,direction:a,startIndex:m,loop:l,duration:g,dragFree:S,dragThreshold:d,inViewThreshold:p,slidesToScroll:y,skipSnaps:f,containScroll:h,watchResize:v,watchSlides:x,watchDrag:E}=o,w=2,_=An(),D=_.measure(n),L=e.map(_.measure),O=Ln(u,a),M=O.measureSize(D),C=Mn(M),B=Dn(c,M),P=!l&&!!h,q=l||!!h,{slideSizes:tt,slideSizesWithGaps:K,startGap:W,endGap:Q}=Kn(O,D,L,e,q,i),nt=Qn(O,M,y,l,D,L,W,Q,w),{snaps:J,snapsAligned:rt}=Bn(O,B,D,L,nt),X=-G(J)+G(K),{snapsContained:ut,scrollContainLimit:at}=Cn(M,X,rt,h,w),V=P?ut:rt,{limit:R}=jn(X,V,l),j=nn(mt(V),m,l),it=j.clone(),z=ft(e),k=({dragHandler:ot,scrollBody:Dt,scrollBounds:Ot,options:{loop:gt}})=>{gt||Ot.constrain(ot.pointerDown()),Dt.seek()},b=({scrollBody:ot,translate:Dt,location:Ot,offsetLocation:gt,scrollLooper:rn,slideLooper:cn,dragHandler:un,animation:an,eventHandler:Ht,options:{loop:ln}},fn)=>{const Gt=ot.velocity(),Rt=ot.settled();Rt&&!un.pointerDown()&&(an.stop(),Ht.emit("settle")),Rt||Ht.emit("scroll"),gt.set(Ot.get()-Gt+Gt*fn),ln&&(rn.loop(ot.direction()),cn.loop()),Dt.to(gt.get())},T=On(r,i,()=>k(Et),ot=>b(Et,ot)),N=.68,F=V[j.get()],U=vt(F),$=vt(F),H=vt(F),et=Nn(U,$,H,g,N),_t=$n(l,V,X,R,H),It=Hn(T,j,it,et,_t,H,s),Bt=Vn(R),zt=pt(),on=qn(n,e,s,p),{slideRegistry:$t}=zn(P,h,V,at,nt,z),sn=Gn(t,e,$t,It,et,zt,s),Et={ownerDocument:r,ownerWindow:i,eventHandler:s,containerRect:D,slideRects:L,animation:T,axis:O,dragHandler:wn(O,t,r,i,H,Tn(O,i),U,T,It,et,_t,j,s,C,S,d,f,N,E),eventStore:zt,percentOfView:C,index:j,indexPrevious:it,limit:R,location:U,offsetLocation:$,options:o,resizeHandler:kn(n,s,i,e,O,v,_),scrollBody:et,scrollBounds:Fn(R,$,H,et,C),scrollLooper:Pn(X,R,$,[U,$,H]),scrollProgress:Bt,scrollSnapList:V.map(Bt.get),scrollSnaps:V,scrollTarget:_t,scrollTo:It,slideLooper:Rn(O,M,X,tt,K,J,V,$,e),slideFocus:sn,slidesHandler:Un(n,s,x),slidesInView:on,slideIndexes:z,slideRegistry:$t,slidesToScroll:nt,target:H,translate:en(O,n)};return Et}function Xn(){let t={},n;function e(a){n=a}function r(a){return t[a]||[]}function i(a){return r(a).forEach(m=>m(n,a)),u}function o(a,m){return t[a]=r(a).concat([m]),u}function s(a,m){return t[a]=r(a).filter(l=>l!==m),u}function c(){t={}}const u={init:e,emit:i,off:s,on:o,clear:c};return u}const Yn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Zn(t){function n(o,s){return tn(o,s||{})}function e(o){const s=o.breakpoints||{},c=dt(s).filter(u=>t.matchMedia(u).matches).map(u=>s[u]).reduce((u,a)=>n(u,a),{});return n(o,c)}function r(o){return o.map(s=>dt(s.breakpoints||{})).reduce((s,c)=>s.concat(c),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:r}}function Wn(t){let n=[];function e(o,s){return n=s.filter(({options:c})=>t.optionsAtMedia(c).active!==!1),n.forEach(c=>c.init(o,t)),s.reduce((c,u)=>Object.assign(c,{[u.name]:u}),{})}function r(){n=n.filter(o=>o.destroy())}return{init:e,destroy:r}}function xt(t,n,e){const r=t.ownerDocument,i=r.defaultView,o=Zn(i),s=Wn(o),c=pt(),u=Xn(),{mergeOptions:a,optionsAtMedia:m,optionsMediaQueries:l}=o,{on:g,off:S,emit:d}=u,p=M;let y=!1,f,h=a(Yn,xt.globalOptions),v=a(h),x=[],E,w,_;function D(){const{container:k,slides:b}=v;w=(At(k)?t.querySelector(k):k)||t.children[0];const N=At(b)?w.querySelectorAll(b):b;_=[].slice.call(N||w.children)}function L(k){const b=Jn(t,w,_,r,i,k,u);if(k.loop&&!b.slideLooper.canLoop()){const T=Object.assign({},k,{loop:!1});return L(T)}return b}function O(k,b){y||(h=a(h,k),v=m(h),x=b||x,D(),f=L(v),l([h,...x.map(({options:T})=>T)]).forEach(T=>c.add(T,"change",M)),v.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(),f.eventHandler.init(z),f.resizeHandler.init(z),f.slidesHandler.init(z),f.options.loop&&f.slideLooper.loop(),w.offsetParent&&_.length&&f.dragHandler.init(z),E=s.init(z,x)))}function M(k,b){const T=J();C(),O(a({startIndex:T},k),b),u.emit("reInit")}function C(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),s.destroy(),c.clear()}function B(){y||(y=!0,c.clear(),C(),u.emit("destroy"),u.clear())}function P(k,b,T){!v.active||y||(f.scrollBody.useBaseFriction().useDuration(b===!0?0:v.duration),f.scrollTo.index(k,T||0))}function q(k){const b=f.index.add(1).get();P(b,k,-1)}function tt(k){const b=f.index.add(-1).get();P(b,k,1)}function K(){return f.index.add(1).get()!==J()}function W(){return f.index.add(-1).get()!==J()}function Q(){return f.scrollSnapList}function nt(){return f.scrollProgress.get(f.location.get())}function J(){return f.index.get()}function rt(){return f.indexPrevious.get()}function X(){return f.slidesInView.get()}function ut(){return f.slidesInView.get(!1)}function at(){return E}function V(){return f}function R(){return t}function j(){return w}function it(){return _}const z={canScrollNext:K,canScrollPrev:W,containerNode:j,internalEngine:V,destroy:B,off:S,on:g,emit:d,plugins:at,previousScrollSnap:rt,reInit:p,rootNode:R,scrollNext:q,scrollPrev:tt,scrollProgress:nt,scrollSnapList:Q,scrollTo:P,selectedScrollSnap:J,slideNodes:it,slidesInView:X,slidesNotInView:ut};return O(n,e),setTimeout(()=>u.emit("init"),0),z}xt.globalOptions=void 0;function Pt(t={},n=[]){const e=ht(yt(t)?t.value:t),r=ht(yt(n)?n.value:n),i=ht(),o=ht();function s(){o.value&&o.value.reInit(e.value,r.value)}return dn(()=>{!_n()||!i.value||(xt.globalOptions=Pt.globalOptions,o.value=xt(i.value,e.value,r.value))}),pn(()=>{o.value&&o.value.destroy()}),yt(t)&&Ut(t,c=>{kt(e.value,c)||(e.value=c,s())}),yt(n)&&Ut(n,c=>{In(r.value,c)||(r.value=c,s())}),[i,o]}Pt.globalOptions=void 0;const te={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function Vt(t={}){let n,e,r,i=!1,o=!0,s=!1,c=0;function u(x,E){e=x;const{mergeOptions:w,optionsAtMedia:_}=E,D=w(te,Vt.globalOptions),L=w(D,t);if(n=_(L),e.scrollSnapList().length<=1)return;s=n.jump,r=!1;const{eventStore:O,ownerDocument:M}=e.internalEngine(),C=e.rootNode(),B=n.rootNode&&n.rootNode(C)||C,P=e.containerNode();e.on("pointerDown",l),n.stopOnInteraction||e.on("pointerUp",m),n.stopOnMouseEnter&&(O.add(B,"mouseenter",()=>{o=!1,l()}),n.stopOnInteraction||O.add(B,"mouseleave",()=>{o=!0,m()})),n.stopOnFocusIn&&(O.add(P,"focusin",l),n.stopOnInteraction||O.add(P,"focusout",m)),O.add(M,"visibilitychange",g),n.playOnInit&&!S()&&m()}function a(){e.off("pointerDown",l).off("pointerUp",m),l(),r=!0,i=!1}function m(){if(r||!o)return;i||e.emit("autoplay:play");const{ownerWindow:x}=e.internalEngine();x.clearInterval(c),c=x.setInterval(h,n.delay),i=!0}function l(){if(r)return;i&&e.emit("autoplay:stop");const{ownerWindow:x}=e.internalEngine();x.clearInterval(c),c=0,i=!1}function g(){if(S())return o=i,l();o&&m()}function S(){const{ownerDocument:x}=e.internalEngine();return x.visibilityState==="hidden"}function d(x){typeof x<"u"&&(s=x),o=!0,m()}function p(){i&&l()}function y(){i&&d()}function f(){return i}function h(){const{index:x}=e.internalEngine(),E=x.clone().add(1).get(),w=e.scrollSnapList().length-1;n.stopOnLastSnap&&E===w&&l(),e.canScrollNext()?e.scrollNext(s):e.scrollTo(0,s)}return{name:"autoplay",options:t,init:u,destroy:a,play:d,stop:p,reset:y,isPlaying:f}}Vt.globalOptions=void 0;const ne={setup(){const[t]=Pt({loop:!0},[Vt({delay:6e3})]);return{emblaNode:t}},data(){return{items:[{img:"/images/240607-small-digital-consult.png"},{img:"/images/240302-park-opendata.jpg"},{img:"/images/event230115seniorIdeathon.jpg"},{img:"/images/project/project_shindan.jpg"},{img:"/images/project/project_table.jpg"},{img:"/images/project/project_kyouzai.jpg"}]}}},ee={class:"embla",ref:"emblaNode"},oe={class:"embla__container"},se=["src"];function re(t,n,e,r,i,o){return Y(),Z("div",ee,[I("div",oe,[(Y(!0),Z(wt,null,Tt(i.items,s=>(Y(),Z("div",{class:"embla__slide",key:s.id},[I("img",{src:s.img,alt:"alt"},null,8,se)]))),128))])],512)}const ie=Wt(ne,[["render",re],["__scopeId","data-v-3ba479e9"]]),ce=mn("/images/iconFb.png"),ct=t=>(bn("data-v-14a84f6b"),t=t(),Sn(),t),ue={class:"nuxt-content"},ae=ct(()=>I("h2",{id:"news"},"News",-1)),le={class:"news-date"},fe={key:0,class:"event-date"},de=ct(()=>I("span",{class:"event-date-text"},"開催日",-1)),pe=["href"],me=ct(()=>I("span",null,[I("a",{href:"/news"},"more...")],-1)),ge={id:"project",class:"nuxt-content"},he={class:"nuxt-content"},ye=ct(()=>I("h2",{id:"event"},"Event",-1)),be=["href"],Se=["src"],ve=ct(()=>I("span",null,[I("a",{href:"/events"},"more...")],-1)),xe={id:"message",class:"nuxt-content"},_e={id:"vision",class:"nuxt-content"},Ie=ct(()=>I("article",null,[I("div",{class:"nuxt-content"},[I("h2",null,"Contact"),I("ul",{class:"footer__list"},[I("li",null," シビックテックさいたま世話人：太田一穂、クワハラシズカ、藤田史織、古川尚史 "),I("li",null,"email：civictech.saitama@gmail.com"),I("li",null,[I("a",{href:"https://www.facebook.com/CivicTechSaitamaCity"},[I("img",{src:ce,alt:""})])])])])],-1)),Ee={__name:"index",async setup(t){let n,e;const r=([n,e]=qt(()=>Kt("/data").limit(10).sort({eventDate:-1}).sort({date:-1}).where({date:{$gt:new Date(2020)}}).find()),n=await n,e(),n),i=([n,e]=qt(()=>Kt("/data").limit(9).sort({eventDate:-1}).where({eventDate:{$gt:new Date(2020)}}).find()),n=await n,e(),n);return(o,s)=>{const c=ie,u=vn;return Y(),Z("div",null,[bt(c),I("article",null,[I("div",ue,[ae,I("ul",null,[(Y(!0),Z(wt,null,Tt(St(r),(a,m)=>(Y(),Z("li",{key:m},[I("span",le,Lt(("formatDate"in o?o.formatDate:St(Qt))(a.date)),1),a.eventDate?(Y(),Z("div",fe,[de,gn(" "+Lt(("formatDate"in o?o.formatDate:St(Qt))(a.eventDate)),1)])):hn("",!0),I("a",{class:"news-link",href:a.link},[I("span",null,Lt(a.title),1)],8,pe)]))),128))]),me])]),I("article",null,[I("div",ge,[bt(u,{head:!1,path:"projects"})])]),I("article",null,[I("div",he,[ye,I("ul",null,[(Y(!0),Z(wt,null,Tt(St(i),(a,m)=>(Y(),Z("li",{key:m,class:yn({"is-hidden":a.thumb===o.none})},[I("a",{href:a.link},[I("img",{src:a.thumb,alt:""},null,8,Se)],8,be)],2))),128))]),ve])]),I("article",null,[I("div",xe,[bt(u,{head:!1,path:"message"})])]),I("article",null,[I("div",_e,[bt(u,{head:!1,path:"vision"})])]),Ie])}}},je=Wt(Ee,[["__scopeId","data-v-14a84f6b"]]);export{je as default};
