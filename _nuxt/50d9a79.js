(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{287:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("1c2351cc",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n(287)},297:function(t,e,n){var c=n(66)(!1);c.push([t.i,'#mainnav a[data-v-548c5360]{color:#000}#mainImg[data-v-548c5360]{position:relative;overflow:hidden;width:100%;height:528px}#mainImg img[data-v-548c5360]{position:absolute;left:50%;max-width:1280px;width:1280px;height:528px;margin-left:-640px}#mainImg-2[data-v-548c5360]{display:flex}#mainImg-2 img[data-v-548c5360]{width:50%}section[data-v-548c5360]{clear:both;padding-top:40px}section h2 span[data-v-548c5360]{background:#fff}.panel li a[data-v-548c5360]{text-decoration:none}[data-v-548c5360] .nuxt-content{max-width:1000px;margin:auto;font-size:clamp(18px,1vw,24px)}[data-v-548c5360] .nuxt-content h2{font-family:"Noto Sans JP",cursive;width:60%;margin:20px auto;font-size:3rem;font-weight:400;text-align:center;background-size:1px 1px}[data-v-548c5360] .nuxt-content #event+ul,[data-v-548c5360] .nuxt-content #project+ul{padding:0;list-style-type:none;display:flex;flex-wrap:wrap}[data-v-548c5360] .nuxt-content #event+ul li,[data-v-548c5360] .nuxt-content #project+ul li{width:33.3333333333%;margin:0;padding:3px 6px;box-sizing:border-box}[data-v-548c5360] .nuxt-content #event+ul li a img,[data-v-548c5360] .nuxt-content #project+ul li a img{width:100%}[data-v-548c5360] .nuxt-content #contact+ul{list-style-type:none}[data-v-548c5360] .nuxt-content #contact+ul img{width:24px}[data-v-548c5360] .nuxt-content .footer__list li{list-style-type:none}[data-v-548c5360] .nuxt-content .footer__list li img{width:24px}',""]),t.exports=c},315:function(t,e,n){"use strict";n.r(e);var c=n(9),r=(n(48),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("index").fetch();case 3:return c=e.sent,e.next=6,n("message").fetch();case 6:return r=e.sent,e.next=9,n("data",{deep:!0}).limit(10).sortBy("date","desc").where({date:{$gt:new Date(2020)}}).fetch();case 9:return o=e.sent,e.next=12,n("data",{deep:!0}).limit(9).sortBy("eventDate","desc").where({eventDate:{$gt:new Date(2020)}}).fetch();case 12:return l=e.sent,e.abrupt("return",{index:c,events:l,message:r,news:o});case 14:case"end":return e.stop()}}),e)})))()},head:{link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Righteous&display=swap"}]}}),o=(n(296),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("article",[n("div",{staticClass:"nuxt-content",attrs:{id:"news"}},[n("h2",[t._v("News")]),t._v(" "),n("ul",[t._l(t.news,(function(article,e){return n("li",{key:e},[t._v("\n          "+t._s(t._f("date")(article.date))+"\n          "+t._s(article.title)+"\n          "),n("a",{attrs:{href:article.link}},[article.link?n("span",[t._v("link")]):t._e()])])})),t._v(" "),t._m(1)],2)])]),t._v(" "),n("article",[n("nuxt-content",{attrs:{document:t.message}})],1),t._v(" "),n("article",[n("div",{staticClass:"nuxt-content"},[n("h2",{attrs:{id:"event"}},[t._v("Event")]),t._v(" "),n("ul",[t._l(t.events,(function(article,t){return n("li",{key:t},[n("a",{attrs:{href:article.link}},[n("img",{attrs:{src:article.thumb,alt:""}})])])})),t._v(" "),t._m(2)],2)])]),t._v(" "),n("article",[n("nuxt-content",{attrs:{document:t.index}})],1),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"mainImg"}},[e("img",{attrs:{src:"images/mainImg.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/news"}},[t._v("more...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/events"}},[t._v("more...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("div",{staticClass:"nuxt-content"},[n("h2",[t._v("Contact")]),t._v(" "),n("ul",{staticClass:"footer__list"},[n("li",[t._v("\n          シビックテックさいたま世話人：太田一穂、クワハラシズカ、藤田史織\n        ")]),t._v(" "),n("li",[t._v("email：civictech.saitama@gmail.com")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.facebook.com/CivicTechSaitamaCity"}},[n("img",{attrs:{src:"images/iconFb.png",alt:""}})])])])])])}],!1,null,"548c5360",null);e.default=component.exports}}]);