(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{276:function(t,r,e){var content=e(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("16213c43",content,!0,{sourceMap:!1})},284:function(t,r,e){"use strict";e(276)},285:function(t,r,e){var n=e(50)(!1);n.push([t.i,".author[data-v-5d451374]{padding:1rem;margin:1rem auto;border-radius:.5rem;box-shadow:.25rem .25rem .75rem rgba(0,0,0,.1);display:flex}.author>img[data-v-5d451374]{width:100px;margin-right:1rem}img[data-v-5d451374]{max-width:100%;border-radius:.5rem}ul[data-v-5d451374]{list-style:none;margin:0;padding:0}li[data-v-5d451374]{padding:1rem;margin:1rem auto;border-radius:.5rem;box-shadow:.25rem .25rem .5rem rgba(0,0,0,.15)}",""]),t.exports=n},308:function(t,r,e){"use strict";e.r(r);var n=e(21),o=(e(56),{transition:"slide-bottom",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function r(){var e,n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.$content,n=t.params,r.next=3,e("articles",n.slug).where({"author.name":{$regex:[n.author,"i"]}}).without("body").sortBy("createdAt","asc").fetch();case 3:return o=r.sent,r.abrupt("return",{articles:o});case 5:case"end":return r.stop()}}),r)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=(e(284),e(52)),component=Object(c.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"author"},[t.articles[0].author.img?e("img",{attrs:{src:t.articles[0].author.img,alt:t.articles[0].author.name}}):t._e(),t._v(" "),e("div",[e("h1",[t._v("Author: "+t._s(t.articles[0].author.name))]),t._v(" "),e("p",[t._v("Bio: "+t._s(t.articles[0].author.bio))])])]),t._v(" "),e("h3",[t._v("Estos son las entradas de "+t._s(t.articles[0].author.name)+":")]),t._v(" "),e("ul",t._l(t.articles,(function(article){return e("li",{key:article.slug,staticClass:"article"},[e("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[e("img",{attrs:{src:article.img,alt:article.alt}}),t._v(" "),e("div",[e("h2",[t._v(t._s(article.title))]),t._v(" "),e("p",[t._v(t._s(article.description))]),t._v(" "),e("p",[t._v(t._s(t.formatDate(article.updatedAt)))])])])],1)})),0)])}),[],!1,null,"5d451374",null);r.default=component.exports}}]);