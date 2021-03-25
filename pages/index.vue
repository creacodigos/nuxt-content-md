<template>
  <div>
    <author :author="articles[0].author" />
    <ul>
      <li v-for="article of articles" :key="article.slug" class="article">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="$config.app.basePath+article.img" />
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
      console.log(this.$config);
    }
  }
</script>