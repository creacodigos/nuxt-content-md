<template>
  <div>
    <author :author="articles[0].author" />
    <ul>
      <li v-for="article of articles" :key="article.slug" class="article">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img
            :src="$config.app.basePath+article.img"
            loading="lazy"
            onload="this.style.opacity='0',this.style.animation='fadein 2s',this.style.opacity='1'"
          />
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    transition: 'slide-bottom',
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
    mounted(){
      //console.log(this.$config);
    }
  }
</script>

<style>

  img[loading='lazy']{
    /*background-color:red;*/
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Loading_2.gif/120px-Loading_2.gif');
    background-repeat: no-repeat;
    background-position: center;
  }

  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
  @keyframes fadeout {
      from { opacity: 1; }
      to   { opacity: 0; }
  }

</style>
