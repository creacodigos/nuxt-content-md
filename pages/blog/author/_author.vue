<template>
  <div>
    <div class="author">
      <img v-if="articles[0].author.img" :src="articles[0].author.img" :alt="articles[0].author.name" />
      <div>
        <h1>{{ articles[0].author.name }}</h1>
        <p>{{ articles[0].author.bio }}</p>
      </div>
    </div>
    <h3>Estos son las entradas de {{ articles[0].author.name }}:</h3>
    <ul>
      <li v-for="article in articles" :key="article.slug" class="article">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="$config.app.basePath+article.img" :alt="article.alt" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <p>{{ formatDate(article.updatedAt) }}</p>
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
      const articles = await $content('articles', params.slug)
        .where({
          'author.name': {
            $regex: [params.author, 'i']
          }
        })
        .without('body')
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
        }
    }
  }
</script>