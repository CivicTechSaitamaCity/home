(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{300:function(t,e,n){"use strict";var o=n(2),r=n(301);o({target:"String",proto:!0,forced:n(302)("link")},{link:function(t){return r(this,"a","href",t)}})},301:function(t,e,n){var o=n(5),r=n(21),l=n(12),c=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var f=l(r(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(l(o),c,"&quot;")+'"'),v+">"+f+"</"+e+">"}},302:function(t,e,n){var o=n(3);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},306:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("d30e167a",content,!0,{sourceMap:!1})},307:function(t,e,n){var content=n(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("144794f7",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n(306)},318:function(t,e,n){var o=n(50)(!1);o.push([t.i,".example .swiper[data-v-0705eafb]{height:400px;width:100%;max-width:100%}.example .swiper .swiper-slide[data-v-0705eafb]{text-align:center;font-size:38px;font-weight:700;background-color:#eee;display:flex;justify-content:center}.example .swiper .swiper-slide:not(.swiper-slide-visible) .slide[data-v-0705eafb]{pointer-events:none;opacity:.3}.example .swiper .swiper-pagination>.swiper-pagination-bullet[data-v-0705eafb]{background-color:red}",""]),t.exports=o},319:function(t,e,n){"use strict";n(307)},320:function(t,e,n){var o=n(50)(!1);o.push([t.i,'#mainnav a[data-v-77a20e4f]{color:#000}#mainImg[data-v-77a20e4f]{position:relative;overflow:hidden;width:100%;height:400px}#mainImg img[data-v-77a20e4f]{position:absolute;left:50%;max-width:1280px;width:1280px;height:528px;margin-left:-640px}#mainImg-2[data-v-77a20e4f]{display:flex}#mainImg-2 img[data-v-77a20e4f]{width:50%}section[data-v-77a20e4f]{clear:both;padding-top:40px}section h2 span[data-v-77a20e4f]{background:#fff}.panel li a[data-v-77a20e4f]{text-decoration:none}[data-v-77a20e4f] .nuxt-content{max-width:1000px;margin:auto;font-size:clamp(18px,1vw,24px)}[data-v-77a20e4f] .nuxt-content h2{font-family:"Noto Sans JP",cursive;width:60%;margin:20px auto;font-size:3rem;font-weight:400;text-align:center;background-size:1px 1px}[data-v-77a20e4f] .nuxt-content #event+ul,[data-v-77a20e4f] .nuxt-content #project+ul{padding:0;list-style-type:none;display:flex;flex-wrap:wrap}[data-v-77a20e4f] .nuxt-content #event+ul li,[data-v-77a20e4f] .nuxt-content #project+ul li{width:33.3333333333%;margin:0;padding:3px 6px;box-sizing:border-box}[data-v-77a20e4f] .nuxt-content #event+ul li a img,[data-v-77a20e4f] .nuxt-content #project+ul li a img{width:100%}[data-v-77a20e4f] .nuxt-content #contact+ul{list-style-type:none}[data-v-77a20e4f] .nuxt-content #contact+ul img{width:24px}[data-v-77a20e4f] .nuxt-content .footer__list li{list-style-type:none}[data-v-77a20e4f] .nuxt-content .footer__list li img{width:24px}',""]),t.exports=o},333:function(t,e,n){"use strict";n.r(e);n(300);var o=n(9),r=(n(49),{name:"SwiperNuxt",data:function(){return{items:[{img:"/images/event230115seniorIdeathon.jpg"},{img:"/images/project/project_shindan.jpg"},{img:"/images/project/project_table.jpg"},{img:"/images/project/project_kyouzai.jpg"}],swiperOptions:{speed:2e3,autoplay:{delay:8e3,disableOnInteraction:!1},loop:!0,loopAdditionalSlides:1,watchSlidesProgress:!0,nextButton:!0,prevButton:!0,effect:"fade"}}},methods:{onSwiperRedied:function(t){console.log("Swiper redied!",t)},onSwiperSlideChangeTransitionStart:function(){console.log("SwiperSlideChangeTransitionStart!")},onSwiperClickSlide:function(t,e){console.log("Swiper click slide!",e)}}}),l=(n(317),n(26)),c={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("vision").fetch();case 3:return o=e.sent,e.next=6,n("projects").fetch();case 6:return r=e.sent,e.next=9,n("message").fetch();case 9:return l=e.sent,e.next=12,n("data",{deep:!0}).limit(10).sortBy("eventDate","desc").sortBy("date","desc").where({date:{$gt:new Date(2020)}}).fetch();case 12:return c=e.sent,e.next=15,n("data",{deep:!0}).limit(9).sortBy("eventDate","desc").where({eventDate:{$gt:new Date(2020)}}).fetch();case 15:return d=e.sent,e.abrupt("return",{vision:o,project:r,events:d,message:l,news:c});case 17:case"end":return e.stop()}}),e)})))()},head:{link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Righteous&display=swap"}]},components:{Swiper:Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"example"},[e("client-only",[e("swiper",{ref:"carousel",staticClass:"swiper",attrs:{options:t.swiperOptions},on:{ready:t.onSwiperRedied,clickSlide:t.onSwiperClickSlide,slideChangeTransitionStart:t.onSwiperSlideChangeTransitionStart}},[t._l(t.items,(function(t){return e("swiper-slide",{key:t.id},[e("img",{attrs:{src:t.img,alt:"alt"}})])})),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)],1)}),[],!1,null,"0705eafb",null).exports}},d=(n(319),Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("Swiper"),t._v(" "),e("article",[e("div",{staticClass:"nuxt-content",attrs:{id:"news"}},[e("h2",[t._v("News")]),t._v(" "),e("ul",[t._l(t.news,(function(article,n){return e("li",{key:n},[t._v("\n          "+t._s(t._f("date")(article.date))+"\n          "+t._s(article.title)+"\n          "),e("a",{attrs:{href:article.link}},[article.link?e("span",[t._v("link")]):t._e()])])})),t._v(" "),t._m(0)],2)])]),t._v(" "),e("article",[e("nuxt-content",{attrs:{document:t.project}})],1),t._v(" "),e("article",[e("div",{staticClass:"nuxt-content"},[e("h2",{attrs:{id:"event"}},[t._v("Event")]),t._v(" "),e("ul",[t._l(t.events,(function(article,t){return e("li",{key:t},[e("a",{attrs:{href:article.link}},[e("img",{attrs:{src:article.thumb,alt:""}})])])})),t._v(" "),t._m(1)],2)])]),t._v(" "),e("article",[e("nuxt-content",{attrs:{document:t.message}})],1),t._v(" "),e("article",[e("nuxt-content",{attrs:{document:t.vision}})],1),t._v(" "),t._m(2)],1)}),[function(){var t=this._self._c;return t("li",[t("a",{attrs:{href:"/news"}},[this._v("more...")])])},function(){var t=this._self._c;return t("li",[t("a",{attrs:{href:"/events"}},[this._v("more...")])])},function(){var t=this,e=t._self._c;return e("article",[e("div",{staticClass:"nuxt-content"},[e("h2",[t._v("Contact")]),t._v(" "),e("ul",{staticClass:"footer__list"},[e("li",[t._v("\n          シビックテックさいたま世話人：太田一穂、クワハラシズカ、藤田史織\n        ")]),t._v(" "),e("li",[t._v("email：civictech.saitama@gmail.com")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.facebook.com/CivicTechSaitamaCity"}},[e("img",{attrs:{src:"images/iconFb.png",alt:""}})])])])])])}],!1,null,"77a20e4f",null));e.default=d.exports}}]);