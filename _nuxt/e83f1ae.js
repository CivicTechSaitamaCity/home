(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{288:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("7410ee18",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n(288)},298:function(t,e,n){var r=n(66)(!1);r.push([t.i,'#mainnav a[data-v-46e0d9b6]{color:#000}#mainImg[data-v-46e0d9b6]{position:relative;overflow:hidden;width:100%;height:528px}#mainImg img[data-v-46e0d9b6]{position:absolute;left:50%;max-width:1280px;width:1280px;height:528px;margin-left:-640px}#mainImg-2[data-v-46e0d9b6]{display:flex}#mainImg-2 img[data-v-46e0d9b6]{width:50%}section[data-v-46e0d9b6]{clear:both;padding-top:40px}section h2 span[data-v-46e0d9b6]{background:#fff}.panel li a[data-v-46e0d9b6]{text-decoration:none}[data-v-46e0d9b6] .nuxt-content{max-width:1000px;margin:auto;font-size:clamp(18px,1vw,24px)}[data-v-46e0d9b6] .nuxt-content h2{font-family:"Noto Sans JP",cursive;width:60%;margin:20px auto;font-size:3rem;font-weight:400;text-align:center;background-size:1px 1px}[data-v-46e0d9b6] .nuxt-content #event+ul,[data-v-46e0d9b6] .nuxt-content #project+ul{padding:0;list-style-type:none;display:flex;flex-wrap:wrap}[data-v-46e0d9b6] .nuxt-content #event+ul li,[data-v-46e0d9b6] .nuxt-content #project+ul li{width:33.3333333333%;margin:0;padding:3px 6px;box-sizing:border-box}[data-v-46e0d9b6] .nuxt-content #event+ul li a img,[data-v-46e0d9b6] .nuxt-content #project+ul li a img{width:100%}[data-v-46e0d9b6] .nuxt-content #contact+ul{list-style-type:none}[data-v-46e0d9b6] .nuxt-content #contact+ul img{width:24px}[data-v-46e0d9b6] .nuxt-content .footer__list li{list-style-type:none}[data-v-46e0d9b6] .nuxt-content .footer__list li img{width:24px}',""]),t.exports=r},316:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(48),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("vision").fetch();case 3:return r=e.sent,e.next=6,n("projects").fetch();case 6:return o=e.sent,e.next=9,n("message").fetch();case 9:return c=e.sent,e.next=12,n("data",{deep:!0}).limit(10).sortBy("date","desc").where({date:{$gt:new Date(2020)}}).fetch();case 12:return l=e.sent,e.next=15,n("data",{deep:!0}).limit(9).sortBy("eventDate","desc").where({eventDate:{$gt:new Date(2020)}}).fetch();case 15:return d=e.sent,e.abrupt("return",{vision:r,project:o,events:d,message:c,news:l});case 17:case"end":return e.stop()}}),e)})))()},head:{link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Righteous&display=swap"}]}}),c=(n(297),n(26)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("article",[n("div",{staticClass:"nuxt-content",attrs:{id:"news"}},[n("h2",[t._v("News")]),t._v(" "),n("ul",[t._l(t.news,(function(article,e){return n("li",{key:e},[t._v("\n          "+t._s(t._f("date")(article.date))+"\n          "+t._s(article.title)+"\n          "),n("a",{attrs:{href:article.link}},[article.link?n("span",[t._v("link")]):t._e()])])})),t._v(" "),t._m(1)],2)])]),t._v(" "),n("article",[n("nuxt-content",{attrs:{document:t.project}})],1),t._v(" "),n("article",[n("div",{staticClass:"nuxt-content"},[n("h2",{attrs:{id:"event"}},[t._v("Event")]),t._v(" "),n("ul",[t._l(t.events,(function(article,t){return n("li",{key:t},[n("a",{attrs:{href:article.link}},[n("img",{attrs:{src:article.thumb,alt:""}})])])})),t._v(" "),t._m(2)],2)])]),t._v(" "),n("article",[n("nuxt-content",{attrs:{document:t.message}})],1),t._v(" "),n("article",[n("nuxt-content",{attrs:{document:t.vision}})],1),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"mainImg"}},[e("img",{attrs:{src:"images/mainImg.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/news"}},[t._v("more...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/events"}},[t._v("more...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("div",{staticClass:"nuxt-content"},[n("h2",[t._v("Contact")]),t._v(" "),n("ul",{staticClass:"footer__list"},[n("li",[t._v("\n          シビックテックさいたま世話人：太田一穂、クワハラシズカ、藤田史織\n        ")]),t._v(" "),n("li",[t._v("email：civictech.saitama@gmail.com")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.facebook.com/CivicTechSaitamaCity"}},[n("img",{attrs:{src:"images/iconFb.png",alt:""}})])])])])])}],!1,null,"46e0d9b6",null);e.default=component.exports}}]);