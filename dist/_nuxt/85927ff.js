(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,5],{273:function(t,e,r){var content=r(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("4f4d41e2",content,!0,{sourceMap:!1})},274:function(t,e,r){"use strict";r(273)},275:function(t,e,r){var n=r(50)(!1);n.push([t.i,".author[data-v-10c0f60e]{padding:1rem;margin:1rem auto;border-radius:.5rem;box-shadow:.25rem .25rem .75rem rgba(0,0,0,.1)}.author>a[data-v-10c0f60e]{display:flex}img[data-v-10c0f60e]{width:100px;margin-right:1rem}",""]),t.exports=n},277:function(t,e,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("f9f5946c",content,!0,{sourceMap:!1})},278:function(t,e,r){var content=r(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("6989e29d",content,!0,{sourceMap:!1})},282:function(t,e,r){"use strict";r.r(e);var n={props:{author:{type:Object,required:!0}}},o=(r(274),r(52)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"author"},[r("NuxtLink",{attrs:{to:"/blog/author/"+t.author.name}},[r("img",{attrs:{src:t.author.img}}),t._v(" "),r("div",[r("h4",[t._v("Author")]),t._v(" "),r("p",[t._v(t._s(t.author.name))]),t._v(" "),r("p",[t._v(t._s(t.author.bio))])])])],1)}),[],!1,null,"10c0f60e",null);e.default=component.exports},283:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=r(52),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-between"},[t.prev?r("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):r("span",[t._v(" ")]),t._v(" "),t.next?r("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):r("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,r){"use strict";r(277)},287:function(t,e,r){var n=r(50),o=r(288),c=r(289),l=n(!1),d=o(c);l.push([t.i,"img[data-v-a7422aaa]{max-width:100%;border-radius:.5rem;box-shadow:.25rem .25rem .5rem rgba(0,0,0,.15)}.nuxt-content h2[data-v-a7422aaa]{font-weight:700;font-size:28px}.nuxt-content h3[data-v-a7422aaa]{font-weight:700;font-size:22px}.nuxt-content p[data-v-a7422aaa]{margin-bottom:20px}.icon.icon-link[data-v-a7422aaa]{background-image:url("+d+");display:inline-block;width:20px;height:20px;background-size:20px 20px}",""]),t.exports=l},288:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},289:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4="},290:function(t,e,r){"use strict";r(278)},291:function(t,e,r){var n=r(50)(!1);n.push([t.i,".prev-next{margin:2rem auto;display:flex;justify-content:space-between}.prev-next>a{padding:1rem;background-color:#000;color:#fff!important;border-radius:.5rem}.prev-next>a:hover{background-color:#fff;color:#000!important;box-shadow:.25rem .25rem .5rem rgba(0,0,0,.15)}",""]),t.exports=n},307:function(t,e,r){"use strict";r.r(e);var n=r(27),o=r(21),c=(r(3),r(57),r(10),r(17),r(35),r(33),r(56),"https://crecodigos.com"),title="Mi sitio web personal creado con @nuxt/content",l="Mi sitio web personal creado con @nuxt/content",d="https://avatars.githubusercontent.com/u/50615503?s=400&u=d6ef3d6548024516b1ca246386958bf32843607c&v=4",h={transition:"slide-bottom",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,article,c,l,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,r("articles",o.slug).fetch();case 3:return article=e.sent,e.next=6,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 6:return c=e.sent,l=Object(n.a)(c,2),d=l[0],h=l[1],e.abrupt("return",{article:article,prev:d,next:h});case 11:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description},{hid:"og:title",name:"og:title",content:this.article.title},{hid:"og:description",name:"og:description",content:this.article.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:"".concat(this.$config.baseUrl,"/blog/").concat(this.$route.params.slug)},{hid:"twitter:url",name:"twitter:url",content:"".concat(this.$config.baseUrl,"/blog/").concat(this.$route.params.slug)},{hid:"twitter:title",name:"twitter:title",content:this.article.title},{hid:"twitter:description",name:"twitter:description",content:this.article.description},{hid:"twitter:image",name:"twitter:image",content:this.article.image},{hid:"og:image",property:"og:image",content:this.article.image},{property:"article:published_time",content:this.article.createdAt},{property:"article:modified_time",content:this.article.updatedAt},{property:"article:tag",content:this.article.tags?this.article.tags.toString():""},{name:"twitter:label1",content:"Written by"},{name:"twitter:data1",content:"Jorge Creacódigos"},{name:"twitter:label2",content:"Filed under"},{name:"twitter:data2",content:this.article.tags?this.article.tags.toString():""}],link:[{hid:"canonical",rel:"canonical",href:"".concat(this.$config.baseUrl,"/blog/").concat(this.$route.params.slug)}]}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},computed:{meta:function(){return function(meta){return[{hid:"description",name:"description",content:meta&&meta.description||l},{hid:"og:type",property:"og:type",content:meta&&meta.type||"Jorge Santana - Creacódigos"},{hid:"og:url",property:"og:url",content:meta&&meta.url||c},{hid:"og:title",property:"og:title",content:meta&&meta.title||title},{hid:"og:description",property:"og:description",content:meta&&meta.description||l},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||d},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||c},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||title},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||l},{hid:"twitter:image",name:"twitter:image",content:meta&&meta.mainImage||d}]}({type:"article",title:this.article.title,description:this.article.description,url:"".concat(this.$config.baseUrl,"/blog/").concat(this.$route.params.slug),mainImage:this.article.image})}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),1e3)}))}},m=(r(286),r(290),r(52)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("p",[t._v(t._s(t.article.description))]),t._v(" "),r("img",{attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),r("p",[t._v("Article last updated: "+t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("author",{attrs:{author:t.article.author}}),t._v(" "),r("prev-next",{staticClass:"prev-next",attrs:{prev:t.prev,next:t.next}})],1)}),[],!1,null,"a7422aaa",null);e.default=component.exports;installComponents(component,{Author:r(282).default,PrevNext:r(283).default})}}]);