import{i as Kt,s as Qt,g as hn,h as yn,j as Jt,_ as on,o as Z,c as W,a as E,F as wt,r as Tt,k as Sn,f as Xt,b as St,u as bt,t as Ot,d as bn,l as vn,n as xn,p as _n,e as In}from"./DO4_BNp-.js";import En from"./BeiS67Zu.js";import{q as Yt}from"./BPp1bH0W.js";import{f as Zt}from"./H3-XANmq.js";import"./Br0bpQ-L.js";import"./DpqlqRnm.js";import"./hBf8NLE2.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./D5cW_yI0.js";import"./BK5eKTUb.js";import"./BfQCjl3w.js";function Ln(t){return Object.prototype.toString.call(t)==="[object Object]"}function Wt(t){return Ln(t)||Array.isArray(t)}function Dn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function kt(t,n){const e=Object.keys(t),i=Object.keys(n);if(e.length!==i.length)return!1;const r=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(n.breakpoints||{}));return r!==o?!1:e.every(s=>{const a=t[s],c=n[s];return typeof a=="function"?`${a}`==`${c}`:!Wt(a)||!Wt(c)?a===c:kt(a,c)})}function tn(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function On(t,n){if(t.length!==n.length)return!1;const e=tn(t),i=tn(n);return e.every((r,o)=>{const s=i[o];return kt(r,s)})}function Ct(t){return typeof t=="number"}function At(t){return typeof t=="string"}function Ft(t){return typeof t=="boolean"}function nn(t){return Object.prototype.toString.call(t)==="[object Object]"}function M(t){return Math.abs(t)}function Nt(t){return Math.sign(t)}function dt(t,n){return M(t-n)}function wn(t,n){if(t===0||n===0||M(t)<=M(n))return 0;const e=dt(M(t),M(n));return M(e/t)}function pt(t){return mt(t).map(Number)}function $(t){return t[ht(t)]}function ht(t){return Math.max(0,t.length-1)}function jt(t,n){return n===ht(t)}function en(t,n=0){return Array.from(Array(t),(e,i)=>n+i)}function mt(t){return Object.keys(t)}function sn(t,n){return[t,n].reduce((e,i)=>(mt(i).forEach(r=>{const o=e[r],s=i[r],a=nn(o)&&nn(s);e[r]=a?sn(o,s):s}),e),{})}function Mt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Tn(t,n){const e={start:i,center:r,end:o};function i(){return 0}function r(c){return o(c)/2}function o(c){return n-c}function s(c,u){return At(t)?e[t](c):t(n,c,u)}return{measure:s}}function gt(){let t=[];function n(r,o,s,a={passive:!0}){let c;if("addEventListener"in r)r.addEventListener(o,s,a),c=()=>r.removeEventListener(o,s,a);else{const u=r;u.addListener(s),c=()=>u.removeListener(s)}return t.push(c),i}function e(){t=t.filter(r=>r())}const i={add:n,clear:e};return i}function An(t,n,e,i){const r=gt(),o=1e3/60;let s=null,a=0,c=0;function u(){r.add(t,"visibilitychange",()=>{t.hidden&&d()})}function p(){b(),r.clear()}function l(h){if(!c)return;s||(s=h);const f=h-s;for(s=h,a+=f;a>=o;)e(o),a-=o;const y=a/o;i(y),c&&n.requestAnimationFrame(l)}function m(){c||(c=n.requestAnimationFrame(l))}function b(){n.cancelAnimationFrame(c),s=null,a=0,c=0}function d(){s=null,a=0}return{init:u,destroy:p,start:m,stop:b,update:()=>e(o),render:i}}function Mn(t,n){const e=n==="rtl",i=t==="y",r=i?"y":"x",o=i?"x":"y",s=!i&&e?-1:1,a=p(),c=l();function u(d){const{height:g,width:h}=d;return i?g:h}function p(){return i?"top":e?"right":"left"}function l(){return i?"bottom":e?"left":"right"}function m(d){return d*s}return{scroll:r,cross:o,startEdge:a,endEdge:c,measureSize:u,direction:m}}function st(t=0,n=0){const e=M(t-n);function i(u){return u<t}function r(u){return u>n}function o(u){return i(u)||r(u)}function s(u){return o(u)?i(u)?t:n:u}function a(u){return e?u-e*Math.ceil((u-n)/e):u}return{length:e,max:n,min:t,constrain:s,reachedAny:o,reachedMax:r,reachedMin:i,removeOffset:a}}function rn(t,n,e){const{constrain:i}=st(0,t),r=t+1;let o=s(n);function s(m){return e?M((r+m)%r):i(m)}function a(){return o}function c(m){return o=s(m),l}function u(m){return p().set(a()+m)}function p(){return rn(t,a(),e)}const l={get:a,set:c,add:u,clone:p};return l}function kn(t,n,e,i,r,o,s,a,c,u,p,l,m,b,d,g,h,f,y){const{cross:v,direction:x}=t,w=["INPUT","SELECT","TEXTAREA"],L={passive:!1},_=gt(),I=gt(),O=st(50,225).constrain(b.measure(20)),D={mouse:300,touch:400},A={mouse:500,touch:600},N=d?43:25;let V=!1,P=0,U=0,et=!1,q=!1,tt=!1,K=!1;function ot(S){if(!y)return;function T(F){(Ft(y)||y(S,F))&&B(F)}const C=n;_.add(C,"dragstart",F=>F.preventDefault(),L).add(C,"touchmove",()=>{},L).add(C,"touchend",()=>{}).add(C,"touchstart",T).add(C,"mousedown",T).add(C,"touchcancel",j).add(C,"contextmenu",j).add(C,"click",it,!0)}function Q(){_.clear(),I.clear()}function rt(){const S=K?e:n;I.add(S,"touchmove",H,L).add(S,"touchend",j).add(S,"mousemove",H,L).add(S,"mouseup",j)}function J(S){const T=S.nodeName||"";return w.includes(T)}function ut(){return(d?A:D)[K?"mouse":"touch"]}function at(S,T){const C=l.add(Nt(S)*-1),F=p.byDistance(S,!d).distance;return d||M(S)<O?F:h&&T?F*.5:p.byIndex(C.get(),0).distance}function B(S){const T=Mt(S,i);K=T,tt=d&&T&&!S.buttons&&V,V=dt(r.get(),s.get())>=2,!(T&&S.button!==0)&&(J(S.target)||(et=!0,o.pointerDown(S),u.useFriction(0).useDuration(0),r.set(s),rt(),P=o.readPoint(S),U=o.readPoint(S,v),m.emit("pointerDown")))}function H(S){if(!Mt(S,i)&&S.touches.length>=2)return j(S);const C=o.readPoint(S),F=o.readPoint(S,v),R=dt(C,P),X=dt(F,U);if(!q&&!K&&(!S.cancelable||(q=R>X,!q)))return j(S);const G=o.pointerMove(S);R>g&&(tt=!0),u.useFriction(.3).useDuration(.75),a.start(),r.add(x(G)),S.preventDefault()}function j(S){const C=p.byDistance(0,!1).index!==l.get(),F=o.pointerUp(S)*ut(),R=at(x(F),C),X=wn(F,R),G=N-10*X,Y=f+X/50;q=!1,et=!1,I.clear(),u.useDuration(G).useFriction(Y),c.distance(R,!d),K=!1,m.emit("pointerUp")}function it(S){tt&&(S.stopPropagation(),S.preventDefault(),tt=!1)}function z(){return et}return{init:ot,destroy:Q,pointerDown:z}}function Cn(t,n){let i,r;function o(l){return l.timeStamp}function s(l,m){const d=`client${(m||t.scroll)==="x"?"X":"Y"}`;return(Mt(l,n)?l:l.touches[0])[d]}function a(l){return i=l,r=l,s(l)}function c(l){const m=s(l)-s(r),b=o(l)-o(i)>170;return r=l,b&&(i=l),m}function u(l){if(!i||!r)return 0;const m=s(r)-s(i),b=o(l)-o(i),d=o(l)-o(r)>170,g=m/b;return b&&!d&&M(g)>.1?g:0}return{pointerDown:a,pointerMove:c,pointerUp:u,readPoint:s}}function Fn(){function t(e){const{offsetTop:i,offsetLeft:r,offsetWidth:o,offsetHeight:s}=e;return{top:i,right:r+o,bottom:i+s,left:r,width:o,height:s}}return{measure:t}}function Nn(t){function n(i){return t*(i/100)}return{measure:n}}function jn(t,n,e,i,r,o,s){const a=[t].concat(i);let c,u,p=[],l=!1;function m(h){return r.measureSize(s.measure(h))}function b(h){if(!o)return;u=m(t),p=i.map(m);function f(y){for(const v of y){if(l)return;const x=v.target===t,w=i.indexOf(v.target),L=x?u:p[w],_=m(x?t:i[w]);if(M(_-L)>=.5){h.reInit(),n.emit("resize");break}}}c=new ResizeObserver(y=>{(Ft(o)||o(h,y))&&f(y)}),e.requestAnimationFrame(()=>{a.forEach(y=>c.observe(y))})}function d(){l=!0,c&&c.disconnect()}return{init:b,destroy:d}}function Pn(t,n,e,i,r,o){let s=0,a=0,c=r,u=o,p=t.get(),l=0;function m(L){const _=L/1e3,I=c*_,O=i.get()-t.get(),D=!c;let A=0;return D?(s=0,e.set(i),t.set(i),A=O):(e.set(t),s+=O/I,s*=u,p+=s,t.add(s*_),A=p-l),a=Nt(A),l=p,w}function b(){const L=i.get()-n.get();return M(L)<.001}function d(){return c}function g(){return a}function h(){return s}function f(){return v(r)}function y(){return x(o)}function v(L){return c=L,w}function x(L){return u=L,w}const w={direction:g,duration:d,velocity:h,seek:m,settled:b,useBaseFriction:y,useBaseDuration:f,useFriction:x,useDuration:v};return w}function Bn(t,n,e,i,r){const o=r.measure(10),s=r.measure(50),a=st(.1,.99);let c=!1;function u(){return!(c||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function p(b){if(!u())return;const d=t.reachedMin(n.get())?"min":"max",g=M(t[d]-n.get()),h=e.get()-n.get(),f=a.constrain(g/s);e.subtract(h*f),!b&&M(h)<o&&(e.set(t.constrain(e.get())),i.useDuration(25).useBaseFriction())}function l(b){c=!b}return{shouldConstrain:u,constrain:p,toggleActive:l}}function Vn(t,n,e,i,r){const o=st(-n+t,0),s=l(),a=p(),c=m();function u(d,g){return dt(d,g)<1}function p(){const d=s[0],g=$(s),h=s.lastIndexOf(d),f=s.indexOf(g)+1;return st(h,f)}function l(){return e.map((d,g)=>{const{min:h,max:f}=o,y=o.constrain(d),v=!g,x=jt(e,g);return v?f:x||u(h,y)?h:u(f,y)?f:y}).map(d=>parseFloat(d.toFixed(3)))}function m(){if(n<=t+r)return[o.max];if(i==="keepSnaps")return s;const{min:d,max:g}=a;return s.slice(d,g)}return{snapsContained:c,scrollContainLimit:a}}function zn(t,n,e){const i=n[0],r=e?i-t:$(n);return{limit:st(r,i)}}function $n(t,n,e,i){const o=n.min+.1,s=n.max+.1,{reachedMin:a,reachedMax:c}=st(o,s);function u(m){return m===1?c(e.get()):m===-1?a(e.get()):!1}function p(m){if(!u(m))return;const b=t*(m*-1);i.forEach(d=>d.add(b))}return{loop:p}}function Hn(t){const{max:n,length:e}=t;function i(o){const s=o-n;return e?s/-e:0}return{get:i}}function Rn(t,n,e,i,r){const{startEdge:o,endEdge:s}=t,{groupSlides:a}=r,c=l().map(n.measure),u=m(),p=b();function l(){return a(i).map(g=>$(g)[s]-g[0][o]).map(M)}function m(){return i.map(g=>e[o]-g[o]).map(g=>-M(g))}function b(){return a(u).map(g=>g[0]).map((g,h)=>g+c[h])}return{snaps:u,snapsAligned:p}}function Gn(t,n,e,i,r,o){const{groupSlides:s}=r,{min:a,max:c}=i,u=p();function p(){const m=s(o),b=!t||n==="keepSnaps";return e.length===1?[o]:b?m:m.slice(a,c).map((d,g,h)=>{const f=!g,y=jt(h,g);if(f){const v=$(h[0])+1;return en(v)}if(y){const v=ht(o)-$(h)[0]+1;return en(v,$(h)[0])}return d})}return{slideRegistry:u}}function Un(t,n,e,i,r){const{reachedAny:o,removeOffset:s,constrain:a}=i;function c(d){return d.concat().sort((g,h)=>M(g)-M(h))[0]}function u(d){const g=t?s(d):a(d),h=n.map((y,v)=>({diff:p(y-g,0),index:v})).sort((y,v)=>M(y.diff)-M(v.diff)),{index:f}=h[0];return{index:f,distance:g}}function p(d,g){const h=[d,d+e,d-e];if(!t)return d;if(!g)return c(h);const f=h.filter(y=>Nt(y)===g);return f.length?c(f):$(h)-e}function l(d,g){const h=n[d]-r.get(),f=p(h,g);return{index:d,distance:f}}function m(d,g){const h=r.get()+d,{index:f,distance:y}=u(h),v=!t&&o(h);if(!g||v)return{index:f,distance:d};const x=n[f]-y,w=d+p(x,0);return{index:f,distance:w}}return{byDistance:m,byIndex:l,shortcut:p}}function qn(t,n,e,i,r,o,s){function a(l){const m=l.distance,b=l.index!==n.get();o.add(m),m&&(i.duration()?t.start():(t.update(),t.render(1),t.update())),b&&(e.set(n.get()),n.set(l.index),s.emit("select"))}function c(l,m){const b=r.byDistance(l,m);a(b)}function u(l,m){const b=n.clone().set(l),d=r.byIndex(b.get(),m);a(d)}return{distance:c,index:u}}function Kn(t,n,e,i,r,o,s){let a=0;function c(){o.add(document,"keydown",u,!1),n.forEach(p)}function u(m){m.code==="Tab"&&(a=new Date().getTime())}function p(m){const b=()=>{if(new Date().getTime()-a>10)return;t.scrollLeft=0;const h=n.indexOf(m),f=e.findIndex(y=>y.includes(h));Ct(f)&&(r.useDuration(0),i.index(f,0),s.emit("slideFocus"))};o.add(m,"focus",b,{passive:!0,capture:!0})}return{init:c}}function ft(t){let n=t;function e(){return n}function i(c){n=s(c)}function r(c){n+=s(c)}function o(c){n-=s(c)}function s(c){return Ct(c)?c:c.get()}return{get:e,set:i,add:r,subtract:o}}function cn(t,n){const e=t.scroll==="x"?o:s,i=n.style;let r=!1;function o(l){return`translate3d(${l}px,0px,0px)`}function s(l){return`translate3d(0px,${l}px,0px)`}function a(l){r||(i.transform=e(t.direction(l)))}function c(l){r=!l}function u(){r||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:u,to:a,toggleActive:c}}function Qn(t,n,e,i,r,o,s,a,c){const p=pt(r),l=pt(r).reverse(),m=f().concat(y());function b(_,I){return _.reduce((O,D)=>O-r[D],I)}function d(_,I){return _.reduce((O,D)=>b(O,I)>0?O.concat([D]):O,[])}function g(_){return o.map((I,O)=>({start:I-i[O]+.5+_,end:I+n-.5+_}))}function h(_,I,O){const D=g(I);return _.map(A=>{const N=O?0:-e,V=O?e:0,P=O?"end":"start",U=D[A][P];return{index:A,loopPoint:U,slideLocation:ft(-1),translate:cn(t,c[A]),target:()=>a.get()>U?N:V}})}function f(){const _=s[0],I=d(l,_);return h(I,e,!1)}function y(){const _=n-s[0]-1,I=d(p,_);return h(I,-e,!0)}function v(){return m.every(({index:_})=>{const I=p.filter(O=>O!==_);return b(I,n)<=.1})}function x(){m.forEach(_=>{const{target:I,translate:O,slideLocation:D}=_,A=I();A!==D.get()&&(O.to(A),D.set(A))})}function w(){m.forEach(_=>_.translate.clear())}return{canLoop:v,clear:w,loop:x,loopPoints:m}}function Jn(t,n,e){let i,r=!1;function o(c){if(!e)return;function u(p){for(const l of p)if(l.type==="childList"){c.reInit(),n.emit("slidesChanged");break}}i=new MutationObserver(p=>{r||(Ft(e)||e(c,p))&&u(p)}),i.observe(t,{childList:!0})}function s(){i&&i.disconnect(),r=!0}return{init:o,destroy:s}}function Xn(t,n,e,i){const r={};let o=null,s=null,a,c=!1;function u(){a=new IntersectionObserver(d=>{c||(d.forEach(g=>{const h=n.indexOf(g.target);r[h]=g}),o=null,s=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:i}),n.forEach(d=>a.observe(d))}function p(){a&&a.disconnect(),c=!0}function l(d){return mt(r).reduce((g,h)=>{const f=parseInt(h),{isIntersecting:y}=r[f];return(d&&y||!d&&!y)&&g.push(f),g},[])}function m(d=!0){if(d&&o)return o;if(!d&&s)return s;const g=l(d);return d&&(o=g),d||(s=g),g}return{init:u,destroy:p,get:m}}function Yn(t,n,e,i,r,o){const{measureSize:s,startEdge:a,endEdge:c}=t,u=e[0]&&r,p=d(),l=g(),m=e.map(s),b=h();function d(){if(!u)return 0;const y=e[0];return M(n[a]-y[a])}function g(){if(!u)return 0;const y=o.getComputedStyle($(i));return parseFloat(y.getPropertyValue(`margin-${c}`))}function h(){return e.map((y,v,x)=>{const w=!v,L=jt(x,v);return w?m[v]+p:L?m[v]+l:x[v+1][a]-y[a]}).map(M)}return{slideSizes:m,slideSizesWithGaps:b,startGap:p,endGap:l}}function Zn(t,n,e,i,r,o,s,a,c){const{startEdge:u,endEdge:p,direction:l}=t,m=Ct(e);function b(f,y){return pt(f).filter(v=>v%y===0).map(v=>f.slice(v,v+y))}function d(f){return f.length?pt(f).reduce((y,v,x)=>{const w=$(y)||0,L=w===0,_=v===ht(f),I=r[u]-o[w][u],O=r[u]-o[v][p],D=!i&&L?l(s):0,A=!i&&_?l(a):0,N=M(O-A-(I+D));return x&&N>n+c&&y.push(v),_&&y.push(f.length),y},[]).map((y,v,x)=>{const w=Math.max(x[v-1]||0);return f.slice(w,y)}):[]}function g(f){return m?b(f,e):d(f)}return{groupSlides:g}}function Wn(t,n,e,i,r,o,s){const{align:a,axis:c,direction:u,startIndex:p,loop:l,duration:m,dragFree:b,dragThreshold:d,inViewThreshold:g,slidesToScroll:h,skipSnaps:f,containScroll:y,watchResize:v,watchSlides:x,watchDrag:w}=o,L=2,_=Fn(),I=_.measure(n),O=e.map(_.measure),D=Mn(c,u),A=D.measureSize(I),N=Nn(A),V=Tn(a,A),P=!l&&!!y,U=l||!!y,{slideSizes:et,slideSizesWithGaps:q,startGap:tt,endGap:K}=Yn(D,I,O,e,U,r),ot=Zn(D,A,h,l,I,O,tt,K,L),{snaps:Q,snapsAligned:rt}=Rn(D,V,I,O,ot),J=-$(Q)+$(q),{snapsContained:ut,scrollContainLimit:at}=Vn(A,J,rt,y,L),B=P?ut:rt,{limit:H}=zn(J,B,l),j=rn(ht(B),p,l),it=j.clone(),z=pt(e),k=({dragHandler:nt,scrollBody:Et,scrollBounds:Lt,options:{loop:yt}},Dt)=>{yt||Lt.constrain(nt.pointerDown()),Et.seek(Dt)},S=({scrollBody:nt,translate:Et,location:Lt,offsetLocation:yt,scrollLooper:Dt,slideLooper:ln,dragHandler:fn,animation:dn,eventHandler:Ht,scrollBounds:pn,options:{loop:Rt}},Gt)=>{const Ut=nt.settled(),mn=!pn.shouldConstrain(),qt=Rt?Ut:Ut&&mn;qt&&!fn.pointerDown()&&(dn.stop(),Ht.emit("settle")),qt||Ht.emit("scroll");const gn=Lt.get()*Gt+X.get()*(1-Gt);yt.set(gn),Rt&&(Dt.loop(nt.direction()),ln.loop()),Et.to(yt.get())},T=An(i,r,nt=>k(It,nt),nt=>S(It,nt)),C=.68,F=B[j.get()],R=ft(F),X=ft(F),G=ft(F),Y=ft(F),lt=Pn(R,G,X,Y,m,C),xt=Un(l,B,J,H,Y),_t=qn(T,j,it,lt,xt,Y,s),Vt=Hn(H),zt=gt(),un=Xn(n,e,s,g),{slideRegistry:$t}=Gn(P,y,B,at,ot,z),an=Kn(t,e,$t,_t,lt,zt,s),It={ownerDocument:i,ownerWindow:r,eventHandler:s,containerRect:I,slideRects:O,animation:T,axis:D,dragHandler:kn(D,t,i,r,Y,Cn(D,r),R,T,_t,lt,xt,j,s,N,b,d,f,C,w),eventStore:zt,percentOfView:N,index:j,indexPrevious:it,limit:H,location:R,offsetLocation:G,previousLocation:X,options:o,resizeHandler:jn(n,s,r,e,D,v,_),scrollBody:lt,scrollBounds:Bn(H,G,Y,lt,N),scrollLooper:$n(J,H,G,[R,G,X,Y]),scrollProgress:Vt,scrollSnapList:B.map(Vt.get),scrollSnaps:B,scrollTarget:xt,scrollTo:_t,slideLooper:Qn(D,A,J,et,q,Q,B,G,e),slideFocus:an,slidesHandler:Jn(n,s,x),slidesInView:un,slideIndexes:z,slideRegistry:$t,slidesToScroll:ot,target:Y,translate:cn(D,n)};return It}function te(){let t={},n;function e(u){n=u}function i(u){return t[u]||[]}function r(u){return i(u).forEach(p=>p(n,u)),c}function o(u,p){return t[u]=i(u).concat([p]),c}function s(u,p){return t[u]=i(u).filter(l=>l!==p),c}function a(){t={}}const c={init:e,emit:r,off:s,on:o,clear:a};return c}const ne={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function ee(t){function n(o,s){return sn(o,s||{})}function e(o){const s=o.breakpoints||{},a=mt(s).filter(c=>t.matchMedia(c).matches).map(c=>s[c]).reduce((c,u)=>n(c,u),{});return n(o,a)}function i(o){return o.map(s=>mt(s.breakpoints||{})).reduce((s,a)=>s.concat(a),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:i}}function oe(t){let n=[];function e(o,s){return n=s.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),n.forEach(a=>a.init(o,t)),s.reduce((a,c)=>Object.assign(a,{[c.name]:c}),{})}function i(){n=n.filter(o=>o.destroy())}return{init:e,destroy:i}}function vt(t,n,e){const i=t.ownerDocument,r=i.defaultView,o=ee(r),s=oe(o),a=gt(),c=te(),{mergeOptions:u,optionsAtMedia:p,optionsMediaQueries:l}=o,{on:m,off:b,emit:d}=c,g=A;let h=!1,f,y=u(ne,vt.globalOptions),v=u(y),x=[],w,L,_;function I(){const{container:k,slides:S}=v;L=(At(k)?t.querySelector(k):k)||t.children[0];const C=At(S)?L.querySelectorAll(S):S;_=[].slice.call(C||L.children)}function O(k){const S=Wn(t,L,_,i,r,k,c);if(k.loop&&!S.slideLooper.canLoop()){const T=Object.assign({},k,{loop:!1});return O(T)}return S}function D(k,S){h||(y=u(y,k),v=p(y),x=S||x,I(),f=O(v),l([y,...x.map(({options:T})=>T)]).forEach(T=>a.add(T,"change",A)),v.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(),f.eventHandler.init(z),f.resizeHandler.init(z),f.slidesHandler.init(z),f.options.loop&&f.slideLooper.loop(),L.offsetParent&&_.length&&f.dragHandler.init(z),w=s.init(z,x)))}function A(k,S){const T=Q();N(),D(u({startIndex:T},k),S),c.emit("reInit")}function N(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),s.destroy(),a.clear()}function V(){h||(h=!0,a.clear(),N(),c.emit("destroy"),c.clear())}function P(k,S,T){!v.active||h||(f.scrollBody.useBaseFriction().useDuration(S===!0?0:v.duration),f.scrollTo.index(k,T||0))}function U(k){const S=f.index.add(1).get();P(S,k,-1)}function et(k){const S=f.index.add(-1).get();P(S,k,1)}function q(){return f.index.add(1).get()!==Q()}function tt(){return f.index.add(-1).get()!==Q()}function K(){return f.scrollSnapList}function ot(){return f.scrollProgress.get(f.location.get())}function Q(){return f.index.get()}function rt(){return f.indexPrevious.get()}function J(){return f.slidesInView.get()}function ut(){return f.slidesInView.get(!1)}function at(){return w}function B(){return f}function H(){return t}function j(){return L}function it(){return _}const z={canScrollNext:q,canScrollPrev:tt,containerNode:j,internalEngine:B,destroy:V,off:b,on:m,emit:d,plugins:at,previousScrollSnap:rt,reInit:g,rootNode:H,scrollNext:U,scrollPrev:et,scrollProgress:ot,scrollSnapList:K,scrollTo:P,selectedScrollSnap:Q,slideNodes:it,slidesInView:J,slidesNotInView:ut};return D(n,e),setTimeout(()=>c.emit("init"),0),z}vt.globalOptions=void 0;function Pt(t={},n=[]){const e=Kt(t),i=Kt(n);let r=e?t.value:t,o=i?n.value:n;const s=Qt(),a=Qt();function c(){a.value&&a.value.reInit(r,o)}return hn(()=>{!Dn()||!s.value||(vt.globalOptions=Pt.globalOptions,a.value=vt(s.value,r,o))}),yn(()=>{a.value&&a.value.destroy()}),e&&Jt(t,u=>{kt(r,u)||(r=u,c())}),i&&Jt(n,u=>{On(o,u)||(o=u,c())}),[s,a]}Pt.globalOptions=void 0;const se={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function Bt(t={}){let n,e,i,r=!1,o=!0,s=!1,a=0;function c(x,w){e=x;const{mergeOptions:L,optionsAtMedia:_}=w,I=L(se,Bt.globalOptions),O=L(I,t);if(n=_(O),e.scrollSnapList().length<=1)return;s=n.jump,i=!1;const{eventStore:D,ownerDocument:A}=e.internalEngine(),N=e.rootNode(),V=n.rootNode&&n.rootNode(N)||N,P=e.containerNode();e.on("pointerDown",l),n.stopOnInteraction||e.on("pointerUp",p),n.stopOnMouseEnter&&(D.add(V,"mouseenter",()=>{o=!1,l()}),n.stopOnInteraction||D.add(V,"mouseleave",()=>{o=!0,p()})),n.stopOnFocusIn&&(D.add(P,"focusin",l),n.stopOnInteraction||D.add(P,"focusout",p)),D.add(A,"visibilitychange",m),n.playOnInit&&!b()&&p()}function u(){e.off("pointerDown",l).off("pointerUp",p),l(),i=!0,r=!1}function p(){if(i||!o)return;r||e.emit("autoplay:play");const{ownerWindow:x}=e.internalEngine();x.clearInterval(a),a=x.setInterval(y,n.delay),r=!0}function l(){if(i)return;r&&e.emit("autoplay:stop");const{ownerWindow:x}=e.internalEngine();x.clearInterval(a),a=0,r=!1}function m(){if(b())return o=r,l();o&&p()}function b(){const{ownerDocument:x}=e.internalEngine();return x.visibilityState==="hidden"}function d(x){typeof x<"u"&&(s=x),o=!0,p()}function g(){r&&l()}function h(){r&&d()}function f(){return r}function y(){const{index:x}=e.internalEngine(),w=x.clone().add(1).get(),L=e.scrollSnapList().length-1;n.stopOnLastSnap&&w===L&&l(),e.canScrollNext()?e.scrollNext(s):e.scrollTo(0,s)}return{name:"autoplay",options:t,init:c,destroy:u,play:d,stop:g,reset:h,isPlaying:f}}Bt.globalOptions=void 0;const re={setup(){const[t]=Pt({loop:!0},[Bt({delay:6e3})]);return{emblaNode:t}},data(){return{items:[{img:"/images/240907UDCkickoff.jpg"},{img:"/images/240302-park-opendata.jpg"},{img:"/images/event230115seniorIdeathon.jpg"},{img:"/images/project/project_shindan.jpg"},{img:"/images/project/project_table.jpg"},{img:"/images/project/project_kyouzai.jpg"}]}}},ie={class:"embla",ref:"emblaNode"},ce={class:"embla__container"},ue=["src"];function ae(t,n,e,i,r,o){return Z(),W("div",ie,[E("div",ce,[(Z(!0),W(wt,null,Tt(r.items,s=>(Z(),W("div",{class:"embla__slide",key:s.id},[E("img",{src:s.img,alt:"alt"},null,8,ue)]))),128))])],512)}const le=on(re,[["render",ae],["__scopeId","data-v-c05edcb3"]]),fe=Sn("/images/iconFb.png"),ct=t=>(_n("data-v-14a84f6b"),t=t(),In(),t),de={class:"nuxt-content"},pe=ct(()=>E("h2",{id:"news"},"News",-1)),me={class:"news-date"},ge={key:0,class:"event-date"},he=ct(()=>E("span",{class:"event-date-text"},"開催日",-1)),ye=["href"],Se=ct(()=>E("span",null,[E("a",{href:"/news"},"more...")],-1)),be={id:"project",class:"nuxt-content"},ve={class:"nuxt-content"},xe=ct(()=>E("h2",{id:"event"},"Event",-1)),_e=["href"],Ie=["src"],Ee=ct(()=>E("span",null,[E("a",{href:"/events"},"more...")],-1)),Le={id:"message",class:"nuxt-content"},De={id:"vision",class:"nuxt-content"},Oe=ct(()=>E("article",null,[E("div",{class:"nuxt-content"},[E("h2",null,"Contact"),E("ul",{class:"footer__list"},[E("li",null," シビックテックさいたま世話人：太田一穂、クワハラシズカ、藤田史織、古川尚史 "),E("li",null,"email：civictech.saitama@gmail.com"),E("li",null,[E("a",{href:"https://www.facebook.com/CivicTechSaitamaCity"},[E("img",{src:fe,alt:""})])])])])],-1)),we={__name:"index",async setup(t){let n,e;const i=([n,e]=Xt(()=>Yt("/data").limit(10).sort({eventDate:-1}).sort({date:-1}).where({date:{$gt:new Date(2020)}}).find()),n=await n,e(),n),r=([n,e]=Xt(()=>Yt("/data").limit(9).sort({eventDate:-1}).where({eventDate:{$gt:new Date(2020)}}).find()),n=await n,e(),n);return(o,s)=>{const a=le,c=En;return Z(),W("div",null,[St(a),E("article",null,[E("div",de,[pe,E("ul",null,[(Z(!0),W(wt,null,Tt(bt(i),(u,p)=>(Z(),W("li",{key:p},[E("span",me,Ot(("formatDate"in o?o.formatDate:bt(Zt))(u.date)),1),u.eventDate?(Z(),W("div",ge,[he,bn(" "+Ot(("formatDate"in o?o.formatDate:bt(Zt))(u.eventDate)),1)])):vn("",!0),E("a",{class:"news-link",href:u.link},[E("span",null,Ot(u.title),1)],8,ye)]))),128))]),Se])]),E("article",null,[E("div",be,[St(c,{head:!1,path:"projects"})])]),E("article",null,[E("div",ve,[xe,E("ul",null,[(Z(!0),W(wt,null,Tt(bt(r),(u,p)=>(Z(),W("li",{key:p,class:xn({"is-hidden":u.thumb===o.none})},[E("a",{href:u.link},[E("img",{src:u.thumb,alt:""},null,8,Ie)],8,_e)],2))),128))]),Ee])]),E("article",null,[E("div",Le,[St(c,{head:!1,path:"message"})])]),E("article",null,[E("div",De,[St(c,{head:!1,path:"vision"})])]),Oe])}}},$e=on(we,[["__scopeId","data-v-14a84f6b"]]);export{$e as default};
