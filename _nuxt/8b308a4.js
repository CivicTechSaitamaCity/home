(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{300:function(t,e,n){"use strict";var r=n(2),o=n(301);r({target:"String",proto:!0,forced:n(302)("link")},{link:function(t){return o(this,"a","href",t)}})},301:function(t,e,n){var r=n(5),o=n(21),c=n(12),l=/"/g,f=r("".replace);t.exports=function(t,e,n,r){var d=c(o(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+f(c(r),l,"&quot;")+'"'),h+">"+d+"</"+e+">"}},302:function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},305:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("510181f9",content,!0,{sourceMap:!1})},311:function(t,e,n){"use strict";n(305)},312:function(t,e,n){var r=n(50)(!1);r.push([t.i,'[data-v-582e024f] .nuxt-content{max-width:1000px;margin:auto;font-size:clamp(18px,1vw,24px)}[data-v-582e024f] .nuxt-content h2{font-family:"Noto Sans JP",cursive;width:60%;margin:20px auto;font-size:3rem;font-weight:400;text-align:center;background-size:1px 1px}[data-v-582e024f] .nuxt-content #event+ul{padding:0;list-style-type:none;display:flex;flex-wrap:wrap}[data-v-582e024f] .nuxt-content #event+ul li{width:33.3333333333%;margin:0;padding:3px 6px;box-sizing:border-box}[data-v-582e024f] .nuxt-content #event+ul li a img{width:100%}',""]),t.exports=r},335:function(t,e,n){"use strict";n.r(e);n(300);var r=n(9),o=(n(49),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("data",{deep:!0}).sortBy("date","desc").where({date:{$gt:new Date(2020)}}).fetch();case 3:return r=e.sent,e.abrupt("return",{news:r});case 5:case"end":return e.stop()}}),e)})))()},head:{link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Righteous&display=swap"}]}}),c=o,l=(n(311),n(26)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("article",[e("div",{staticClass:"nuxt-content",attrs:{id:"news"}},[e("h2",[t._v("News")]),t._v(" "),e("ul",t._l(t.news,(function(article,n){return e("li",{key:n},[t._v("\n          "+t._s(t._f("date")(article.date))+"\n          "+t._s(article.title)+"\n          "),e("a",{attrs:{href:article.link}},[article.link?e("span",[t._v("link")]):t._e()])])})),0)])])])}),[],!1,null,"582e024f",null);e.default=component.exports}}]);