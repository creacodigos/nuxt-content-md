(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(t,e,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("625bf64c",content,!0,{sourceMap:!1})},294:function(t,e,n){"use strict";n(280)},295:function(t,e,n){var r=n(50)(!1);r.push([t.i,".page img{max-width:100%;margin:2rem auto}",""]),t.exports=r},310:function(t,e,n){"use strict";n.r(e);var r=n(27),c=n(21),o=(n(3),n(57),n(10),n(17),n(35),n(56),{transition:"slide-bottom",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,article,o,l,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,e.next=3,n("pages",c.slug).fetch();case 3:return article=e.sent,e.next=6,n("pages").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 6:return o=e.sent,l=Object(r.a)(o,2),d=l[0],h=l[1],e.abrupt("return",{article:article,prev:d,next:h});case 11:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description},{hid:"og:title",name:"og:title",content:this.article.title},{hid:"og:description",name:"og:description",content:this.article.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:"".concat(this.$config.baseUrl,"/").concat(this.$route.params.slug)},{hid:"twitter:url",name:"twitter:url",content:"".concat(this.$config.baseUrl,"/").concat(this.$route.params.slug)},{hid:"twitter:title",name:"twitter:title",content:this.article.title},{hid:"twitter:description",name:"twitter:description",content:this.article.description},{hid:"twitter:image",name:"twitter:image",content:this.article.image},{hid:"og:image",property:"og:image",content:this.article.image},{property:"article:published_time",content:this.article.createdAt},{property:"article:modified_time",content:this.article.updatedAt},{property:"article:tag",content:this.article.tags?this.article.tags.toString():""},{name:"twitter:label1",content:"Written by"},{name:"twitter:data1",content:"Jorge Creacódigos"},{name:"twitter:label2",content:"Filed under"},{name:"twitter:data2",content:this.article.tags?this.article.tags.toString():""}],link:[{hid:"canonical",rel:"canonical",href:"".concat(this.$config.baseUrl,"/").concat(this.$route.params.slug)}]}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},computed:{meta:function(){var t={type:"page",title:this.article.title,description:this.article.description,url:"".concat(this.$config.baseUrl,"/").concat(this.$route.params.slug),mainImage:this.article.image};return getSiteMeta(t)}}}),l=(n(294),n(52)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("nuxt-content",{staticClass:"page",attrs:{document:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);